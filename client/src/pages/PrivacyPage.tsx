/*
 * Privacy Policy Page — JoyCasino SEO
 * URL: /privacy
 * Style: Editorial Trust Design
 */

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "wouter";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "oklch(0.18 0.07 240)", padding: "2.5rem 0 2rem", color: "white" }}>
          <div className="container">
            <nav className="breadcrumb" style={{ color: "oklch(0.72 0.02 240)" }}>
              <Link href="/"><span style={{ color: "oklch(0.78 0.12 75)" }}>Главная</span></Link>
              <span>›</span>
              <span>Политика конфиденциальности</span>
            </nav>
            <h1 style={{ color: "white", marginBottom: "0.5rem" }}>Политика конфиденциальности</h1>
            <p style={{ color: "oklch(0.75 0.02 240)", fontSize: "0.875rem" }}>Последнее обновление: 29 апреля 2025 года</p>
          </div>
        </section>

        <div className="container" style={{ paddingTop: "2rem", paddingBottom: "3rem", maxWidth: "900px" }}>
          <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
            {[
              { title: "1. Общие положения", text: "Настоящая политика конфиденциальности описывает, как joycasinoseo.ru собирает, использует и защищает информацию, которую вы предоставляете при использовании нашего сайта. Используя сайт, вы соглашаетесь с условиями данной политики." },
              { title: "2. Сбор информации", text: "Мы можем собирать следующую информацию: технические данные о посещениях (IP-адрес, тип браузера, страницы посещений) через аналитические инструменты. Мы не собираем персональные данные без вашего явного согласия." },
              { title: "3. Использование файлов cookie", text: "Сайт использует файлы cookie для улучшения пользовательского опыта и аналитики. Вы можете отключить cookie в настройках браузера, однако это может повлиять на функциональность сайта." },
              { title: "4. Использование информации", text: "Собранная информация используется исключительно для улучшения работы сайта, анализа посещаемости и оптимизации контента. Мы не передаём данные третьим лицам в коммерческих целях." },
              { title: "5. Защита данных", text: "Мы принимаем технические и организационные меры для защиты данных от несанкционированного доступа, изменения или уничтожения." },
              { title: "6. Ссылки на сторонние сайты", text: "Наш сайт может содержать ссылки на сторонние ресурсы. Мы не несём ответственности за политику конфиденциальности этих сайтов." },
              { title: "7. Контактная информация", text: "По вопросам политики конфиденциальности обращайтесь через раздел «О нас»." },
            ].map((section) => (
              <div key={section.title} style={{ marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{section.title}</h2>
                <p style={{ color: "oklch(0.38 0.02 240)", lineHeight: 1.7, margin: 0 }}>{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
