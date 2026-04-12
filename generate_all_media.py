import asyncio
import os
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        print("Navigating to http://localhost:8080")
        try:
            await page.goto("http://localhost:8080")
            await page.wait_for_timeout(3000)

            os.makedirs("src/assets/screenshots/views", exist_ok=True)
            os.makedirs("src/assets/screenshots/modals", exist_ok=True)
            os.makedirs("src/assets/screenshots/sections", exist_ok=True)

            print("Taking main overview screenshot...")
            await page.screenshot(path="src/assets/screenshots/sections/section_overview.png")

            print("Taking screenshot of reader page...")
            await page.goto("http://localhost:8080/reader")
            await page.wait_for_timeout(2000)
            await page.screenshot(path="src/assets/screenshots/views/view_reader.png")

            print("Taking screenshot of GCC Metrics page...")
            await page.goto("http://localhost:8080/gcc-metrics")
            await page.wait_for_timeout(2000)
            await page.screenshot(path="src/assets/screenshots/views/view_gcc_metrics.png")

            print("Taking screenshot of Key Stats page...")
            await page.goto("http://localhost:8080/key-stats")
            await page.wait_for_timeout(2000)
            await page.screenshot(path="src/assets/screenshots/views/view_key_stats.png")

            print("Taking screenshot of resources section...")
            await page.goto("http://localhost:8080")
            await page.wait_for_timeout(2000)
            resources_link = page.locator("text=Resources")
            if await resources_link.count() > 0:
                await resources_link.first.click()
                await page.wait_for_timeout(2000)
                await page.screenshot(path="src/assets/screenshots/sections/section_resources.png")

            print("Taking screenshot of a modal chapter view...")
            await page.goto("http://localhost:8080")
            await page.wait_for_timeout(2000)
            foundations_link = page.locator("text=Foundations")
            if await foundations_link.count() > 0:
                await foundations_link.first.click()
                await page.wait_for_timeout(2000)
                chapter_card = page.locator(".card-pharma").first
                if await chapter_card.count() > 0:
                    await chapter_card.click()
                    await page.wait_for_timeout(2000)
                    await page.screenshot(path="src/assets/screenshots/modals/modal_chapter_view.png")

        except Exception as e:
            print(f"Exception during screenshot generation: {e}")

        await browser.close()
        print("Done!")

asyncio.run(main())
