/*
 * About Page — JoyCasino SEO
 * URL: /o-nas
 * Style: Editorial Trust Design
 */

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "wouter";
import { Shield, Star, Users, Check } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "oklch(0.18 0.07 240)", padding: "3rem 0 2.5rem", color: "white" }}>
          <div className="container">
            <nav className="breadcrumb" style={{ color: "oklch(0.72 0.02 240)" }}>
              <Link href="/"><span style={{ color: "oklch(0.78 0.12 75)" }}>Главная</span></Link>
              <span>›</span>
              <span>О нас</span>
            </nav>
            <h1 style={{ color: "white", marginBottom: "1rem" }}>О сайте joycasinoseo.ru</h1>
            <p style={{ color: "oklch(0.85 0.02 240)", maxWidth: "600px", lineHeight: 1.7 }}>
              Независимый информационный ресурс об онлайн-казино JoyCasino. Честные обзоры, актуальные бонусы и полезные материалы для игроков.
            </p>
          </div>
        </section>

        <div className="container" style={{ paddingTop: "2rem", paddingBottom: "3rem", maxWidth: "900px" }}>
          <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem", marginBottom: "2rem" }}>
            <div className="section-header"><h2 style={{ margin: 0 }}>Кто мы</h2></div>
            <p>joycasinoseo.ru — независимый информационный ресурс, специализирующийся на обзорах онлайн-казино JoyCasino. Наша команда состоит из опытных аналитиков, которые лично тестируют игровые платформы и предоставляют объективную информацию для игроков.</p>
            <p>Мы не являемся официальным представителем или партнёром казино JoyCasino. Все обзоры и оценки основаны на независимом анализе и реальном опыте использования платформы.</p>
          </div>

          <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem", marginBottom: "2rem" }}>
            <div className="section-header"><h2 style={{ margin: 0 }}>Наши принципы</h2></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
              {[
                { icon: <Shield size={24} />, title: "Независимость", desc: "Мы не получаем вознаграждение за положительные отзывы. Наши оценки объективны." },
                { icon: <Star size={24} />, title: "Актуальность", desc: "Регулярно обновляем информацию о бонусах, правилах и условиях казино." },
                { icon: <Users size={24} />, title: "Прозрачность", desc: "Честно указываем методологию оценки и источники информации." },
                { icon: <Check size={24} />, title: "Ответственность", desc: "Продвигаем принципы ответственной игры и информируем о рисках." },
              ].map((p, i) => (
                <div key={i} style={{ padding: "1.25rem", background: "oklch(0.97 0.005 240)", borderRadius: "0.5rem" }}>
                  <div style={{ color: "oklch(0.28 0.07 240)", marginBottom: "0.75rem" }}>{p.icon}</div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{p.title}</h3>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: "oklch(0.45 0.02 240)" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
            <div className="section-header"><h2 style={{ margin: 0 }}>Методология оценки</h2></div>
            <p>При составлении обзоров и рейтингов мы оцениваем следующие параметры:</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                "Ассортимент и качество игр (провайдеры, количество, жанры)",
                "Условия бонусной программы (размер, вейджер, срок действия)",
                "Скорость и надёжность выплат",
                "Качество мобильной версии и приложения",
                "Уровень клиентской поддержки",
                "Безопасность (лицензия, шифрование, верификация)",
                "Удобство интерфейса и навигации",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.9rem", color: "oklch(0.28 0.02 240)" }}>
                  <Check size={16} style={{ color: "oklch(0.52 0.14 145)", flexShrink: 0, marginTop: "2px" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
