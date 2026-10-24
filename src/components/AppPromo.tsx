"use client";
import { useEffect, useState } from "react";

export function AppPromo({ href, label }: { href: string; label: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try { dismissed = localStorage.getItem("tb_promo_dismissed") === "1"; } catch {}
    if (dismissed) return;

    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (pct > 0.4) { setShow(true); window.removeEventListener("scroll", onScroll); }
    };
    const timer = setTimeout(() => setShow(true), 20000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener("scroll", onScroll); };
  }, []);

  const close = () => {
    setShow(false);
    try { localStorage.setItem("tb_promo_dismissed", "1"); } catch {}
  };

  if (!show) return null;
  return (
    <div role="dialog" aria-label="Get the TruBooker app"
      className="fixed bottom-0 inset-x-0 z-50 m-3 rounded-xl bg-white shadow-lg p-4 flex items-center gap-3 md:max-w-md md:left-auto">
      <p className="flex-1 text-sm">{label}</p>
      <a href={href} className="rounded-lg bg-blue-600 text-white px-4 py-2 text-sm">Get the app</a>
      <button onClick={close} aria-label="Close" className="px-2 text-lg">×</button>
    </div>
  );
}