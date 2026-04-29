/*
 * Header Component — JoyCasino SEO
 * Style: Editorial Trust Design
 * Navy header with logo, navigation and CTA button
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Главная", href: "/" },
  {
    label: "Обзоры",
    href: "/obzory",
    children: [
      { label: "JoyCasino — обзор", href: "/obzory/joycasino" },
    ],
  },
  { label: "Бонусы", href: "/bonusy" },
  {
    label: "Игры",
    href: "/igry",
    children: [
      { label: "Игровые автоматы", href: "/igry/avtomaty" },
      { label: "Live-казино", href: "/igry/live-kazino" },
      { label: "Настольные игры", href: "/igry/nastolnye" },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "О нас", href: "/o-nas" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  return (
    <header
      style={{ background: "oklch(0.18 0.07 240)", position: "sticky", top: 0, zIndex: 50 }}
      className="shadow-lg"
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
          {/* Logo */}
          <Link href="/">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "oklch(0.62 0.18 35)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Merriweather', serif",
                  fontWeight: 900,
                  color: "white",
                  fontSize: "1.1rem",
                }}
              >
                J
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Merriweather', serif",
                    fontWeight: 900,
                    color: "white",
                    fontSize: "1.1rem",
                    lineHeight: 1.1,
                  }}
                >
                  JoyCasino
                </div>
                <div style={{ color: "oklch(0.78 0.12 75)", fontSize: "0.7rem", lineHeight: 1 }}>
                  Независимый обзор
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden md:flex">
            {navItems.map((item) => (
              <div
                key={item.href}
                style={{ position: "relative" }}
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href={item.href}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      padding: "0.5rem 0.75rem",
                      color: location === item.href ? "oklch(0.78 0.12 75)" : "oklch(0.88 0.01 240)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      borderRadius: "0.375rem",
                      cursor: "pointer",
                      transition: "color 0.2s",
                      borderBottom: location === item.href ? "2px solid oklch(0.62 0.18 35)" : "2px solid transparent",
                    }}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} />}
                  </div>
                </Link>
                {item.children && openDropdown === item.href && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      background: "white",
                      border: "1px solid oklch(0.88 0.01 240)",
                      borderRadius: "0.5rem",
                      boxShadow: "0 8px 24px oklch(0 0 0 / 0.15)",
                      minWidth: "200px",
                      padding: "0.5rem",
                      zIndex: 100,
                    }}
                  >
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        <div
                          style={{
                            padding: "0.5rem 0.75rem",
                            color: "oklch(0.28 0.07 240)",
                            fontSize: "0.875rem",
                            borderRadius: "0.375rem",
                            cursor: "pointer",
                            transition: "background 0.15s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.95 0.01 240)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          {child.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta hidden md:inline-flex"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
            >
              Играть сейчас
            </a>
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: "white", background: "transparent", border: "none", padding: "0.5rem" }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: "oklch(0.22 0.07 240)",
            borderTop: "1px solid oklch(0.28 0.07 240)",
            padding: "1rem",
          }}
        >
          {navItems.map((item) => (
            <div key={item.href}>
              <Link href={item.href}>
                <div
                  onClick={() => setMobileOpen(false)}
                  style={{
                    padding: "0.75rem 0",
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: 500,
                    borderBottom: "1px solid oklch(0.28 0.07 240 / 0.5)",
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </div>
              </Link>
              {item.children && item.children.map((child) => (
                <Link key={child.href} href={child.href}>
                  <div
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: "0.5rem 1rem",
                      color: "oklch(0.78 0.12 75)",
                      fontSize: "0.875rem",
                      cursor: "pointer",
                    }}
                  >
                    → {child.label}
                  </div>
                </Link>
              ))}
            </div>
          ))}
          <a
            href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
            style={{ marginTop: "1rem", width: "100%", display: "flex" }}
          >
            Играть в JoyCasino
          </a>
        </div>
      )}
    </header>
  );
}
