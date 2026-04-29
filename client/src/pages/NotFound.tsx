import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ textAlign: "center", padding: "4rem 1rem" }}>
          <div style={{ fontFamily: "'Merriweather', serif", fontWeight: 900, fontSize: "6rem", color: "oklch(0.88 0.01 240)", lineHeight: 1, marginBottom: "1rem" }}>
            404
          </div>
          <h1 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Страница не найдена</h1>
          <p style={{ color: "oklch(0.52 0.02 240)", maxWidth: "400px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Запрашиваемая страница не существует или была перемещена. Воспользуйтесь навигацией.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/"><span className="btn-cta" style={{ cursor: "pointer" }}>На главную</span></Link>
            <Link href="/obzory/joycasino"><span className="btn-secondary" style={{ cursor: "pointer" }}>Обзор JoyCasino</span></Link>
          </div>
          <div style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            {[{label:"Бонусы",href:"/bonusy"},{label:"Слоты",href:"/igry/avtomaty"},{label:"Live",href:"/igry/live-kazino"},{label:"FAQ",href:"/faq"}].map(link => (
              <Link key={link.href} href={link.href}>
                <span style={{ padding: "0.4rem 1rem", background: "oklch(0.97 0.005 240)", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "100px", fontSize: "0.875rem", color: "oklch(0.28 0.07 240)", cursor: "pointer" }}>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
