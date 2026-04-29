/*
 * Footer Component — JoyCasino SEO
 * Style: Editorial Trust Design
 * Dark navy footer with links, disclaimer and copyright
 */

import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "oklch(0.12 0.05 240)", color: "oklch(0.75 0.02 240)", marginTop: "4rem" }}>
      {/* Main Footer */}
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "oklch(0.62 0.18 35)",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Merriweather', serif",
                  fontWeight: 900,
                  color: "white",
                  fontSize: "1rem",
                }}
              >
                J
              </div>
              <span style={{ fontFamily: "'Merriweather', serif", fontWeight: 700, color: "white", fontSize: "1rem" }}>
                JoyCasino Обзор
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "oklch(0.6 0.02 240)" }}>
              Независимый информационный ресурс об онлайн-казино JoyCasino. Публикуем честные обзоры, актуальные бонусы и полезные материалы для игроков.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.9rem", fontWeight: 700, marginBottom: "1rem", fontFamily: "'Merriweather', serif" }}>
              Разделы
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "Обзор JoyCasino", href: "/obzory/joycasino" },
                { label: "Бонусы и акции", href: "/bonusy" },
                { label: "Игровые автоматы", href: "/igry/avtomaty" },
                { label: "Live-казино", href: "/igry/live-kazino" },
                { label: "Настольные игры", href: "/igry/nastolnye" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      style={{ fontSize: "0.875rem", color: "oklch(0.65 0.02 240)", cursor: "pointer", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.78 0.12 75)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.65 0.02 240)")}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.9rem", fontWeight: 700, marginBottom: "1rem", fontFamily: "'Merriweather', serif" }}>
              Информация
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "FAQ — частые вопросы", href: "/faq" },
                { label: "О нас", href: "/o-nas" },
                { label: "Ответственная игра", href: "/otvetstvennaya-igra" },
                { label: "Политика конфиденциальности", href: "/privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      style={{ fontSize: "0.875rem", color: "oklch(0.65 0.02 240)", cursor: "pointer", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.78 0.12 75)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.65 0.02 240)")}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Trust */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.9rem", fontWeight: 700, marginBottom: "1rem", fontFamily: "'Merriweather', serif" }}>
              Наши принципы
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: "✓", text: "Независимые обзоры" },
                { icon: "✓", text: "Актуальные данные" },
                { icon: "✓", text: "Честные оценки" },
                { icon: "✓", text: "Ответственная игра" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
                  <span style={{ color: "oklch(0.52 0.14 145)", fontWeight: 700 }}>{item.icon}</span>
                  <span style={{ color: "oklch(0.65 0.02 240)" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{ borderTop: "1px solid oklch(0.22 0.05 240)", padding: "1.5rem 0" }}>
        <div className="container">
          <div
            style={{
              background: "oklch(0.18 0.05 240)",
              borderRadius: "0.5rem",
              padding: "1rem 1.25rem",
              marginBottom: "1rem",
              fontSize: "0.8rem",
              color: "oklch(0.55 0.02 240)",
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "oklch(0.65 0.02 240)" }}>⚠ Важно:</strong> Данный сайт является независимым информационным ресурсом и не является официальным сайтом казино JoyCasino. Азартные игры доступны только лицам старше 18 лет. Игра может вызывать зависимость. Играйте ответственно. Если вы испытываете проблемы с игровой зависимостью, обратитесь за помощью.
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
            <p style={{ fontSize: "0.8rem", color: "oklch(0.5 0.02 240)", margin: 0 }}>
              © {currentYear} joycasinoseo.ru — Независимый обзор JoyCasino. Все права защищены.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link href="/privacy">
                <span style={{ fontSize: "0.8rem", color: "oklch(0.5 0.02 240)", cursor: "pointer" }}>
                  Конфиденциальность
                </span>
              </Link>
              <Link href="/otvetstvennaya-igra">
                <span style={{ fontSize: "0.8rem", color: "oklch(0.5 0.02 240)", cursor: "pointer" }}>
                  Ответственная игра
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
