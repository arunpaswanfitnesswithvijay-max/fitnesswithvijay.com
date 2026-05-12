"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#transformations", label: "Results" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-bg/95 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold">
          <span className="text-accent">BIJAY</span>
          <span className="text-accent text-xs ml-1 font-sans font-normal tracking-widest uppercase">Fitness</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-white transition-colors duration-300">{l.label}</a>
          ))}
        </div>

        <a href="https://wa.me/919980157112" target="_blank" className="hidden md:flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent-dark transition-all anim-glow">
          Free Consult ↗
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl" aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg border-t border-white/5 px-6 pb-8 pt-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-white/80 hover:text-accent transition-colors text-sm border-b border-white/5">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/919980157112" target="_blank" className="mt-6 block text-center bg-accent text-black py-3 rounded-full font-semibold text-sm">
            Free Consult ↗
          </a>
        </div>
      )}
    </nav>
  );
}
