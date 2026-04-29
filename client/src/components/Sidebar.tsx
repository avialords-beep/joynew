/*
 * Sidebar Component — JoyCasino SEO
 * Style: Editorial Trust Design
 * Sticky sidebar with casino rating, bonus info and quick links
 */

import { Star, Shield, Zap, Gift } from "lucide-react";

interface SidebarProps {
  showBonus?: boolean;
}

export default function Sidebar({ showBonus = true }: SidebarProps) {
  return (
    <aside style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* Main CTA Card */}
      <div
        style={{
          background: "linear-gradient(135deg, oklch(0.18 0.07 240), oklch(0.28 0.07 240))",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20px",
            right: "-20px",
            width: "120px",
            height: "120px",
            background: "oklch(0.78 0.12 75 / 0.1)",
            borderRadius: "50%",
          }}
        />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: "0.75rem", color: "oklch(0.78 0.12 75)", fontWeight: 600, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Приветственный бонус
          </div>
          <div style={{ fontFamily: "'Merriweather', serif", fontWeight: 900, fontSize: "1.75rem", lineHeight: 1.1, marginBottom: "0.25rem" }}>
            100 000 ₽
          </div>
          <div style={{ fontSize: "0.85rem", color: "oklch(0.82 0.03 240)", marginBottom: "1.25rem" }}>
            + 200 фриспинов на первый депозит
          </div>
          <a
            href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
            style={{ width: "100%", display: "flex", justifyContent: "center", fontSize: "0.95rem" }}
          >
            Получить бонус
          </a>
          <div style={{ fontSize: "0.7rem", color: "oklch(0.6 0.02 240)", marginTop: "0.75rem", textAlign: "center" }}>
            Действуют условия отыгрыша. 18+
          </div>
        </div>
      </div>

      {/* Rating Card */}
      <div
        style={{
          background: "white",
          border: "1px solid oklch(0.88 0.01 240)",
          borderRadius: "0.75rem",
          padding: "1.25rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <h3 style={{ fontFamily: "'Merriweather', serif", fontSize: "1rem", margin: 0, color: "oklch(0.18 0.03 240)" }}>
            Рейтинг JoyCasino
          </h3>
          <div
            style={{
              background: "oklch(0.52 0.14 145)",
              color: "white",
              borderRadius: "0.375rem",
              padding: "0.25rem 0.6rem",
              fontWeight: 900,
              fontSize: "1.1rem",
              fontFamily: "'Merriweather', serif",
            }}
          >
            8.7
          </div>
        </div>

        {[
          { label: "Ассортимент игр", score: 9.2 },
          { label: "Бонусная программа", score: 8.8 },
          { label: "Скорость выплат", score: 8.5 },
          { label: "Поддержка клиентов", score: 8.4 },
          { label: "Мобильная версия", score: 9.0 },
        ].map((item) => (
          <div key={item.label} style={{ marginBottom: "0.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem", fontSize: "0.8rem" }}>
              <span style={{ color: "oklch(0.38 0.02 240)" }}>{item.label}</span>
              <span style={{ fontWeight: 700, color: "oklch(0.28 0.07 240)" }}>{item.score}</span>
            </div>
            <div className="rating-bar">
              <div className="rating-bar-fill" style={{ width: `${(item.score / 10) * 100}%` }} />
            </div>
          </div>
        ))}

        <div style={{ display: "flex", gap: "0.25rem", marginTop: "1rem" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={18}
              fill={star <= 4 ? "oklch(0.78 0.12 75)" : "none"}
              color="oklch(0.78 0.12 75)"
            />
          ))}
          <span style={{ fontSize: "0.8rem", color: "oklch(0.52 0.02 240)", marginLeft: "0.5rem" }}>
            4.4 / 5
          </span>
        </div>
      </div>

      {/* Quick Facts */}
      <div
        style={{
          background: "white",
          border: "1px solid oklch(0.88 0.01 240)",
          borderRadius: "0.75rem",
          padding: "1.25rem",
        }}
      >
        <h3 style={{ fontFamily: "'Merriweather', serif", fontSize: "1rem", marginBottom: "1rem", color: "oklch(0.18 0.03 240)" }}>
          Ключевые факты
        </h3>
        {[
          { icon: <Shield size={16} />, label: "Лицензия", value: "Curaçao eGaming" },
          { icon: <Zap size={16} />, label: "Игр в каталоге", value: "3 000+" },
          { icon: <Gift size={16} />, label: "Бонус новичку", value: "до 100 000 ₽" },
          { icon: <Star size={16} />, label: "Год основания", value: "2014" },
        ].map((fact, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.6rem 0",
              borderBottom: i < 3 ? "1px solid oklch(0.92 0.005 240)" : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "oklch(0.52 0.02 240)", fontSize: "0.85rem" }}>
              <span style={{ color: "oklch(0.28 0.07 240)" }}>{fact.icon}</span>
              {fact.label}
            </div>
            <span style={{ fontWeight: 600, fontSize: "0.85rem", color: "oklch(0.18 0.03 240)" }}>
              {fact.value}
            </span>
          </div>
        ))}
      </div>

      {/* Quick Navigation */}
      <div
        style={{
          background: "oklch(0.97 0.005 240)",
          border: "1px solid oklch(0.88 0.01 240)",
          borderRadius: "0.75rem",
          padding: "1.25rem",
        }}
      >
        <h3 style={{ fontFamily: "'Merriweather', serif", fontSize: "1rem", marginBottom: "1rem", color: "oklch(0.18 0.03 240)" }}>
          Быстрая навигация
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {[
            { label: "Регистрация и вход", href: "/obzory/joycasino#registration" },
            { label: "Бонусы и промокоды", href: "/bonusy" },
            { label: "Игровые автоматы", href: "/igry/avtomaty" },
            { label: "Live-казино", href: "/igry/live-kazino" },
            { label: "Пополнение и вывод", href: "/obzory/joycasino#payments" },
            { label: "Мобильное приложение", href: "/obzory/joycasino#mobile" },
            { label: "Поддержка", href: "/obzory/joycasino#support" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  display: "block",
                  padding: "0.35rem 0.5rem",
                  fontSize: "0.85rem",
                  color: "oklch(0.28 0.07 240)",
                  borderRadius: "0.25rem",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.92 0.01 240)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                → {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
