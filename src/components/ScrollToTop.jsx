import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = prev || "auto";
      };
    }
  }, []);

  useLayoutEffect(() => {
    
    const opts = { top: 0, left: 0, behavior: "auto" };

    
    try { window.scrollTo(opts); } catch {}

    
    try { document.documentElement?.scrollTo(opts); } catch {}

    
    try { document.body?.scrollTo?.(opts); } catch {}
    try { document.body && (document.body.scrollTop = 0); } catch {}


    try {
      const root = document.getElementById("root");
      if (root) {
        root.scrollTop = 0;
        root.scrollLeft = 0;
      }
    } catch {}
  }, [pathname]);

  return null;
}
