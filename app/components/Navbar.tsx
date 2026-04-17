"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 👈 punto de cambio
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Quiénes somos", href: "#historia" },
    { label: "Instructores", href: "#instructores" },
    { label: "Horarios", href: "#horarios" },
    { label: "Ubicación", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-3 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFCF5]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/LOGO.png"
          alt="Studio Plié"
          width={90}
          height={34}
          className="object-contain"
        />
      </Link>

      {/* Links desktop */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[#2F4156] text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#costos"
            className="border border-[#2F4156] text-[#2F4156] text-sm font-medium px-5 py-2 rounded-full hover:bg-[#2F4156] hover:text-white transition-colors"
          >
            Ver Costos
          </a>
        </li>
      </ul>

      {/* Hamburger móvil */}
      <button
        className="md:hidden text-[#2F4156]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {menuOpen ? (
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFFCF5] shadow-md flex flex-col items-center gap-6 py-8 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#2F4156] text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#horarios"
            className="border border-[#2F4156] text-[#2F4156] text-sm font-medium px-5 py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Agendar
          </a>
        </div>
      )}
    </nav>
  );
}