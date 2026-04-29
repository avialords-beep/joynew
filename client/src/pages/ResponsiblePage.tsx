/*
 * Responsible Gambling Page — JoyCasino SEO
 * URL: /otvetstvennaya-igra
 * Style: Editorial Trust Design
 */

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "wouter";
import { Shield, Check } from "lucide-react";

export default function ResponsiblePage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "oklch(0.18 0.07 240)", padding: "3rem 0 2.5rem", color: "white" }}>
          <div className="container">
            <nav className="breadcrumb" style={{ color: "oklch(0.72 0.02 240)" }}>
              <Link href="/"><span style={{ color: "oklch(0.78 0.12 75)" }}>Главная</span></Link>
              <span>›</span>
              <span>Ответственная игра</span>
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Shield size={20} style={{ color: "oklch(0.78 0.12 75)" }} />
            </div>
            <h1 style={{ color: "white", marginBottom: "1rem" }}>Ответственная игра</h1>
            <p style={{ color: "oklch(0.85 0.02 240)", maxWidth: "600px", lineHeight: 1.7 }}>
              Азартные игры должны быть развлечением, а не источником проблем. Узнайте о принципах ответственной игры и способах контроля.
            </p>
          </div>
        </section>

        <div className="container" style={{ paddingTop: "2rem", paddingBottom: "3rem", maxWidth: "900px" }}>
          <div style={{ background: "oklch(0.577 0.245 27.325 / 0.05)", border: "2px solid oklch(0.577 0.245 27.325 / 0.3)", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" }}>
            <h2 style={{ color: "oklch(0.45 0.2 27)", marginTop: 0 }}>⚠ Важное предупреждение</h2>
            <p style={{ margin: 0, color: "oklch(0.28 0.02 240)" }}>
              Азартные игры могут вызывать зависимость. Играйте только на деньги, которые вы можете позволить себе потерять. Если вы испытываете проблемы с игровой зависимостью, немедленно обратитесь за помощью. Игра доступна только лицам старше 18 лет.
            </p>
          </div>

          <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem", marginBottom: "2rem" }}>
            <div className="section-header"><h2 style={{ margin: 0 }}>Принципы ответственной игры</h2></div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "Устанавливайте лимиты на депозиты и ставки до начала игры",
                "Никогда не играйте в долг или на заёмные деньги",
                "Воспринимайте игру как развлечение, а не способ заработка",
                "Делайте регулярные перерывы в игре",
                "Не пытайтесь отыграть проигранное — это ведёт к большим потерям",
                "Не играйте в состоянии стресса, усталости или под воздействием алкоголя",
                "Используйте инструменты самоограничения, предоставляемые казино",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.9rem", color: "oklch(0.28 0.02 240)" }}>
                  <Check size={16} style={{ color: "oklch(0.52 0.14 145)", flexShrink: 0, marginTop: "2px" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
            <div className="section-header"><h2 style={{ margin: 0 }}>Помощь при игровой зависимости</h2></div>
            <p>Если вы или ваши близкие испытывают проблемы с игровой зависимостью, обратитесь за помощью:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { name: "Горячая линия психологической помощи", contact: "8-800-2000-122 (бесплатно)" },
                { name: "Анонимные игроки (Gamblers Anonymous)", contact: "ga.org" },
                { name: "Национальный центр игровой зависимости", contact: "ncpgambling.org" },
              ].map((r) => (
                <div key={r.name} style={{ padding: "0.875rem 1rem", background: "oklch(0.97 0.005 240)", borderRadius: "0.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{r.name}</span>
                  <span style={{ color: "oklch(0.28 0.07 240)", fontWeight: 600, fontSize: "0.9rem" }}>{r.contact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
