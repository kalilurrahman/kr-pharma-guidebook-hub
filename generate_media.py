import asyncio
import subprocess
import os
from playwright.async_api import async_playwright

async def main():
    # Start the local server just in case it's not running, or assume it's running?
    # For GitHub Actions, we'll start the server locally in the action before running this script.

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        # Create a new context with a larger viewport, recording a video
        context = await browser.new_context(
            viewport={'width': 1280, 'height': 800},
            record_video_dir=".",
            record_video_size={"width": 1280, "height": 800}
        )
        page = await context.new_page()

        # Go to the local site
        print("Navigating to http://localhost:8080")
        try:
            await page.goto("http://localhost:8080")
            await page.wait_for_timeout(2000)

            # Ensure the page is somewhat loaded
            os.makedirs("src/assets/screenshots", exist_ok=True)
            await page.screenshot(path="src/assets/screenshots/screenshot-light.png")

            # Click some elements to simulate navigation and show the app's capability
            try:
                os.makedirs("src/assets/screenshots/sections", exist_ok=True)
                os.makedirs("src/assets/screenshots/themes", exist_ok=True)

                foundations_link = page.locator("text=Foundations")
                if await foundations_link.count() > 0:
                    await foundations_link.first.click()
                    await page.wait_for_timeout(2000)
                    await page.screenshot(path="src/assets/screenshots/sections/section_foundations.png")

                value_chain_link = page.locator("text=Value Chain")
                if await value_chain_link.count() > 0:
                    await value_chain_link.first.click()
                    await page.wait_for_timeout(2000)
                    await page.screenshot(path="src/assets/screenshots/sections/section_value_chain.png")

                commercial_link = page.locator("text=Commercial")
                if await commercial_link.count() > 0:
                    await commercial_link.first.click()
                    await page.wait_for_timeout(2000)
                    await page.screenshot(path="src/assets/screenshots/sections/section_commercial.png")

                enablers_link = page.locator("text=Enterprise Enablers")
                if await enablers_link.count() > 0:
                    await enablers_link.first.click()
                    await page.wait_for_timeout(2000)
                    await page.screenshot(path="src/assets/screenshots/sections/section_enablers.png")

                dark_mode_button = page.locator('button[aria-label="Toggle theme"], button[title="Toggle theme"], button:has(.lucide-moon)')
                if await dark_mode_button.count() > 0:
                    await dark_mode_button.first.click()
                    await page.wait_for_timeout(2000)
                    await page.screenshot(path="src/assets/screenshots/themes/theme_dark.png")
                    await page.screenshot(path="src/assets/screenshots/screenshot-dark.png")

            except Exception as e:
                print(f"Navigation exception: {e}")

            # Wait a bit before closing to capture the video
            await page.wait_for_timeout(2000)

        except Exception as e:
            print(f"Failed to connect to local server: {e}")
            return

        # Close page and context to finalize the video
        video_path = await page.video.path()
        print(f"Video saved to {video_path}")
        await page.close()
        await context.close()
        await browser.close()

        # Rename the video to a known name
        webm_video = "site-record.webm"
        if os.path.exists(webm_video):
            os.remove(webm_video)
        os.rename(video_path, webm_video)

        print("Video recorded successfully. Now processing audio and GIF...")

        # Run ffmpeg to process the video
        # 1. Generate audio
        subprocess.run([
            "ffmpeg", "-y", "-f", "lavfi", "-i", "sine=frequency=440:duration=15",
            "-c:a", "aac", "test_audio.aac"
        ], check=True)

        # 2. Mux video with audio
        mp4_path = "src/assets/screenshots/site-demo-with-music.mp4"
        subprocess.run([
            "ffmpeg", "-y", "-i", webm_video, "-i", "test_audio.aac",
            "-c:v", "libx264", "-c:a", "aac", "-shortest", mp4_path
        ], check=True)

        # 3. Generate Palette for GIF
        subprocess.run([
            "ffmpeg", "-y", "-i", mp4_path,
            "-vf", "fps=10,scale=800:-1:flags=lanczos,palettegen", "palette.png"
        ], check=True)

        # 4. Generate GIF
        gif_path = "src/assets/screenshots/site-demo.gif"
        subprocess.run([
            "ffmpeg", "-y", "-i", mp4_path, "-i", "palette.png",
            "-filter_complex", "fps=10,scale=800:-1:flags=lanczos[x];[x][1:v]paletteuse", gif_path
        ], check=True)

        # Cleanup intermediate artifacts
        for file in [webm_video, "test_audio.aac", "palette.png"]:
            if os.path.exists(file):
                os.remove(file)

        print("Media generation completed successfully.")

asyncio.run(main())