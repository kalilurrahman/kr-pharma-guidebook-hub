import { useEffect } from "react";

const BASE_TITLE = "Pharma GCC Transformation Handbook";
const ORIGIN = "https://pharma.kalilurrahman.com";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [key, val] = selector.replace(/meta\[|\]/g, "").split("=");
    el.setAttribute(key, val.replace(/["']/g, ""));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/**
 * Lightweight, zero-dependency per-route document metadata.
 * Sets the document title, meta/OG/Twitter description, and canonical URL
 * for client-rendered routes, then restores the base title on unmount.
 */
export function usePageMeta(title: string, description: string, path = "") {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
    const prevTitle = document.title;
    document.title = fullTitle;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:description"]', "content", description);

    const url = `${ORIGIN}${path}`;
    setMeta('meta[property="og:url"]', "content", url);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const prevCanonical = canonical.getAttribute("href");
    canonical.setAttribute("href", url);

    return () => {
      document.title = prevTitle;
      if (prevCanonical) canonical!.setAttribute("href", prevCanonical);
    };
  }, [title, description, path]);
}
