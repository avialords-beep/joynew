/*
 * Home Page — JoyCasino SEO
 * Style: Editorial Trust Design
 * H1: JoyCasino — обзор официального сайта онлайн-казино
 * Target keywords: joycasino, джой казино, joy casino официальный сайт
 * Layout: Hero + Casino Rating + Top Bonuses + Games + FAQ + Reviews
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Star, Shield, ChevronDown, ChevronUp, ArrowRight, Check, Gift, Zap, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/dhTveBnkzqbGf8AnNrhTxj/hero-banner-CLmpqAZuDDWHw6rZfMukWY.webp";
const BONUS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/dhTveBnkzqbGf8AnNrhTxj/bonus-section-erah8AMETbK3y23nQ5zXeq.webp";
const SLOTS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/dhTveBnkzqbGf8AnNrhTxj/slots-section-QWpTtrpPEqxcRETSfoBjR2.webp";
const LIVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/dhTveBnkzqbGf8AnNrhTxj/live-casino-JyHtTSQePCgbKXTk3BmYFS.webp";

const faqs = [
  {
    q: "Как зарегистрироваться в JoyCasino?",
    a: "Регистрация в JoyCasino занимает 2–3 минуты. Перейдите на официальный сайт, нажмите «Регистрация», укажите email или номер телефона, придумайте пароль и подтвердите аккаунт. После верификации вам станут доступны все функции платформы, включая бонусы и реальные деньги.",
  },
  {
    q: "Какой приветственный бонус предлагает JoyCasino?",
    a: "JoyCasino предлагает приветственный пакет на первые депозиты: бонус до 100 000 ₽ и до 200 фриспинов. Точные условия зависят от текущих акций. Перед активацией обязательно ознакомьтесь с требованиями по отыгрышу (вейджером).",
  },
  {
    q: "Как вывести деньги из JoyCasino?",
    a: "Для вывода выигрыша зайдите в раздел «Касса», выберите способ выплаты (банковская карта, электронный кошелёк), укажите сумму и подтвердите заявку. Первый вывод требует верификации личности — загрузите документы в личном кабинете. Сроки обработки: 1–3 рабочих дня.",
  },
  {
    q: "Есть ли мобильное приложение JoyCasino?",
    a: "JoyCasino предлагает мобильную версию сайта, адаптированную для смартфонов и планшетов. Также доступно приложение для Android (APK-файл с официального сайта) и версия для iOS. Функционал мобильной версии полностью совпадает с десктопным сайтом.",
  },
  {
    q: "Какие игры доступны в JoyCasino?",
    a: "В каталоге JoyCasino более 3 000 игр: слоты от ведущих провайдеров (NetEnt, Pragmatic Play, Play'n GO и др.), настольные игры (блэкджек, рулетка, покер, баккара), live-казино с реальными дилерами, краш-игры и быстрые игры.",
  },
  {
    q: "Насколько безопасно играть в JoyCasino?",
    a: "JoyCasino работает по лицензии Curaçao eGaming. Платформа использует SSL-шифрование для защиты данных и финансовых транзакций. Все игры сертифицированы независимыми аудиторами. Казино применяет стандартные процедуры верификации для защиты от мошенничества.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal();
  return <div ref={ref} className={`fade-in ${className}`}>{children}</div>;
}

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* JSON-LD: Organization */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Review",
        "name": "Обзор JoyCasino",
        "reviewBody": "Независимый обзор онлайн-казино JoyCasino: игры, бонусы, безопасность и условия игры.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "8.7",
          "bestRating": "10",
          "worstRating": "1"
        },
        "author": { "@type": "Organization", "name": "JoyCasino Обзор" },
        "itemReviewed": {
          "@type": "Organization",
          "name": "JoyCasino",
          "url": "https://joycasinoseo.ru"
        }
      })}} />

      <Header />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section
          style={{
            background: `linear-gradient(to right, oklch(0.12 0.07 240 / 0.95), oklch(0.18 0.07 240 / 0.7)), url(${HERO_IMG}) center/cover no-repeat`,
            padding: "4rem 0 3rem",
            color: "white",
          }}
        >
          <div className="container">
            <div style={{ maxWidth: "700px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                <span className="trust-badge" style={{ background: "oklch(0.52 0.14 145 / 0.2)", color: "oklch(0.82 0.1 145)", borderColor: "oklch(0.52 0.14 145 / 0.4)" }}>
                  <Shield size={12} /> Лицензированное казино
                </span>
                <span className="trust-badge" style={{ background: "oklch(0.78 0.12 75 / 0.2)", color: "oklch(0.88 0.1 75)", borderColor: "oklch(0.78 0.12 75 / 0.4)" }}>
                  <Star size={12} /> Рейтинг 8.7/10
                </span>
                <span className="trust-badge" style={{ background: "oklch(0.62 0.18 35 / 0.2)", color: "oklch(0.88 0.1 35)", borderColor: "oklch(0.62 0.18 35 / 0.4)" }}>
                  <Gift size={12} /> Бонус до 100 000 ₽
                </span>
              </div>

              <h1 style={{ color: "white", marginBottom: "1rem", textShadow: "0 2px 8px oklch(0 0 0 / 0.5)" }}>
                JoyCasino — обзор официального сайта онлайн-казино
              </h1>

              <p style={{ fontSize: "1.1rem", color: "oklch(0.88 0.02 240)", lineHeight: 1.7, marginBottom: "2rem" }}>
                Независимый и честный обзор JoyCasino: более 3 000 игровых автоматов, щедрые бонусы, лайв-казино с реальными дилерами и быстрые выплаты. Всё, что нужно знать перед регистрацией.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c" target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
                  Играть в JoyCasino
                </a>
                <a href="/obzory/joycasino" className="btn-secondary" style={{ color: "white", borderColor: "oklch(0.78 0.12 75)", fontSize: "1rem", padding: "0.875rem 2rem" }}>
                  Читать обзор
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "2rem" }}>
                {[
                  { value: "3 000+", label: "Игровых автоматов" },
                  { value: "100 000 ₽", label: "Макс. бонус" },
                  { value: "10 лет", label: "На рынке" },
                  { value: "24/7", label: "Поддержка" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div style={{ fontFamily: "'Merriweather', serif", fontWeight: 900, fontSize: "1.5rem", color: "oklch(0.78 0.12 75)" }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "oklch(0.72 0.02 240)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== BREADCRUMB ===== */}
        <div className="container" style={{ paddingTop: "1rem" }}>
          <nav className="breadcrumb" aria-label="Хлебные крошки">
            <Link href="/"><span>Главная</span></Link>
            <span>›</span>
            <span>Обзор JoyCasino</span>
          </nav>
        </div>

        {/* ===== MAIN CONTENT + SIDEBAR ===== */}
        <div className="container" style={{ paddingTop: "0.5rem", paddingBottom: "3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="lg:grid-cols-[1fr_320px]">

            {/* ===== LEFT COLUMN ===== */}
            <div>

              {/* Intro Text */}
              <RevealSection>
                <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem", marginBottom: "2rem" }}>
                  <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "oklch(0.28 0.02 240)" }}>
                    <strong>JoyCasino</strong> — одно из наиболее известных онлайн-казино на русскоязычном рынке, работающее с 2014 года. Платформа предлагает широкий каталог игровых автоматов от ведущих мировых провайдеров, раздел live-казино с профессиональными дилерами, разнообразные бонусные программы и удобные способы пополнения и вывода средств.
                  </p>
                  <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "oklch(0.28 0.02 240)" }}>
                    В данном обзоре мы рассматриваем все ключевые аспекты работы казино: ассортимент игр, условия бонусов, скорость выплат, качество мобильной версии и уровень клиентской поддержки. Наша оценка основана на реальном опыте использования платформы.
                  </p>
                </div>
              </RevealSection>

              {/* Top Bonuses Section */}
              <RevealSection>
                <section style={{ marginBottom: "2.5rem" }}>
                  <div className="section-header">
                    <h2 style={{ margin: 0 }}>Актуальные бонусы JoyCasino</h2>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                    {[
                      {
                        title: "Приветственный бонус",
                        amount: "до 100 000 ₽",
                        desc: "Бонус на первый депозит + 200 фриспинов на популярные слоты",
                        tag: "Новичкам",
                        color: "oklch(0.28 0.07 240)",
                      },
                      {
                        title: "Еженедельный кэшбэк",
                        amount: "до 10%",
                        desc: "Возврат части проигранных средств каждую неделю для активных игроков",
                        tag: "Постоянным",
                        color: "oklch(0.52 0.14 145)",
                      },
                      {
                        title: "Бонус на день рождения",
                        amount: "Персональный",
                        desc: "Специальное предложение для верифицированных игроков в день рождения",
                        tag: "VIP",
                        color: "oklch(0.62 0.18 35)",
                      },
                    ].map((bonus, i) => (
                      <div
                        key={i}
                        style={{
                          background: "white",
                          border: "1px solid oklch(0.88 0.01 240)",
                          borderRadius: "0.75rem",
                          padding: "1.25rem",
                          borderTop: `3px solid ${bonus.color}`,
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                          <h3 style={{ margin: 0, fontSize: "1rem", color: "oklch(0.18 0.03 240)" }}>{bonus.title}</h3>
                          <span
                            style={{
                              background: bonus.color,
                              color: "white",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              padding: "0.2rem 0.5rem",
                              borderRadius: "100px",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {bonus.tag}
                          </span>
                        </div>
                        <div style={{ fontFamily: "'Merriweather', serif", fontWeight: 900, fontSize: "1.5rem", color: bonus.color, marginBottom: "0.5rem" }}>
                          {bonus.amount}
                        </div>
                        <p style={{ fontSize: "0.875rem", color: "oklch(0.45 0.02 240)", margin: "0 0 1rem" }}>{bonus.desc}</p>
                        <a href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: bonus.color, fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem" }}>
                          Получить бонус <ArrowRight size={14} />
                        </a>
                      </div>
                    ))}
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <Link href="/bonusy">
                      <span className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                        Все бонусы и промокоды <ArrowRight size={16} />
                      </span>
                    </Link>
                  </div>
                </section>
              </RevealSection>

              {/* Games Section */}
              <RevealSection>
                <section style={{ marginBottom: "2.5rem" }}>
                  <div className="section-header">
                    <h2 style={{ margin: 0 }}>Игровой каталог JoyCasino</h2>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>
                    {[
                      {
                        img: SLOTS_IMG,
                        title: "Игровые автоматы",
                        count: "2 500+",
                        desc: "Слоты от NetEnt, Pragmatic Play, Play'n GO, Microgaming и 50+ других провайдеров. Классические фруктовые автоматы, видеослоты, игры с джекпотами.",
                        href: "/igry/avtomaty",
                      },
                      {
                        img: LIVE_IMG,
                        title: "Live-казино",
                        count: "200+",
                        desc: "Рулетка, блэкджек, баккара и покер с живыми дилерами в прямом эфире. Студии Evolution Gaming и Pragmatic Play Live.",
                        href: "/igry/live-kazino",
                      },
                    ].map((game, i) => (
                      <div key={i} className="casino-card">
                        <div style={{ height: "160px", overflow: "hidden" }}>
                          <img
                            src={game.img}
                            alt={game.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            loading="lazy"
                          />
                        </div>
                        <div style={{ padding: "1.25rem" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{game.title}</h3>
                            <span
                              style={{
                                background: "oklch(0.28 0.07 240 / 0.1)",
                                color: "oklch(0.28 0.07 240)",
                                padding: "0.2rem 0.6rem",
                                borderRadius: "100px",
                                fontSize: "0.8rem",
                                fontWeight: 700,
                              }}
                            >
                              {game.count}
                            </span>
                          </div>
                          <p style={{ fontSize: "0.875rem", color: "oklch(0.45 0.02 240)", margin: "0 0 1rem", lineHeight: 1.6 }}>
                            {game.desc}
                          </p>
                          <Link href={game.href}>
                            <span style={{ fontSize: "0.875rem", color: "oklch(0.28 0.07 240)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem", cursor: "pointer" }}>
                              Смотреть игры <ArrowRight size={14} />
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Game Categories */}
                  <div
                    style={{
                      background: "oklch(0.97 0.005 240)",
                      borderRadius: "0.75rem",
                      padding: "1.5rem",
                      border: "1px solid oklch(0.88 0.01 240)",
                    }}
                  >
                    <h3 style={{ marginTop: 0, marginBottom: "1rem", fontSize: "1rem" }}>Популярные категории слотов</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {[
                        "Слоты с джекпотами", "Египетская тематика", "Фруктовые автоматы",
                        "Книжные слоты", "Мегавэйс", "Слоты с бонус-игрой",
                        "Классические слоты", "Приключенческие слоты",
                      ].map((cat) => (
                        <span
                          key={cat}
                          style={{
                            padding: "0.4rem 0.875rem",
                            background: "white",
                            border: "1px solid oklch(0.88 0.01 240)",
                            borderRadius: "100px",
                            fontSize: "0.8rem",
                            color: "oklch(0.38 0.02 240)",
                            cursor: "pointer",
                            transition: "all 0.15s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "oklch(0.28 0.07 240)";
                            e.currentTarget.style.color = "white";
                            e.currentTarget.style.borderColor = "oklch(0.28 0.07 240)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "white";
                            e.currentTarget.style.color = "oklch(0.38 0.02 240)";
                            e.currentTarget.style.borderColor = "oklch(0.88 0.01 240)";
                          }}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>
              </RevealSection>

              {/* Pros & Cons */}
              <RevealSection>
                <section style={{ marginBottom: "2.5rem" }}>
                  <div className="section-header">
                    <h2 style={{ margin: 0 }}>Преимущества и недостатки JoyCasino</h2>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div
                      style={{
                        background: "oklch(0.52 0.14 145 / 0.05)",
                        border: "1px solid oklch(0.52 0.14 145 / 0.3)",
                        borderRadius: "0.75rem",
                        padding: "1.5rem",
                      }}
                    >
                      <h3 style={{ color: "oklch(0.38 0.12 145)", marginTop: 0, fontSize: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Check size={18} /> Преимущества
                      </h3>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {[
                          "Более 3 000 игровых автоматов",
                          "Лицензия Curaçao eGaming",
                          "Щедрый приветственный бонус",
                          "Live-казино с реальными дилерами",
                          "Удобная мобильная версия",
                          "Поддержка 24/7 на русском языке",
                          "Быстрая регистрация за 2 минуты",
                        ].map((pro) => (
                          <li key={pro} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "oklch(0.28 0.02 240)" }}>
                            <Check size={14} style={{ color: "oklch(0.52 0.14 145)", flexShrink: 0, marginTop: "2px" }} />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      style={{
                        background: "oklch(0.577 0.245 27.325 / 0.05)",
                        border: "1px solid oklch(0.577 0.245 27.325 / 0.3)",
                        borderRadius: "0.75rem",
                        padding: "1.5rem",
                      }}
                    >
                      <h3 style={{ color: "oklch(0.45 0.2 27)", marginTop: 0, fontSize: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span>−</span> Недостатки
                      </h3>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {[
                          "Требуется верификация для вывода",
                          "Ограниченный выбор платёжных систем",
                          "Вейджер на бонусы x40",
                          "Нет приложения в App Store",
                        ].map((con) => (
                          <li key={con} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "oklch(0.28 0.02 240)" }}>
                            <span style={{ color: "oklch(0.577 0.245 27.325)", flexShrink: 0, fontWeight: 700 }}>−</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </RevealSection>

              {/* Reviews Section */}
              <RevealSection>
                <section style={{ marginBottom: "2.5rem" }}>
                  <div className="section-header">
                    <h2 style={{ margin: 0 }}>Отзывы игроков о JoyCasino</h2>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
                    {[
                      {
                        name: "Алексей К.",
                        date: "Март 2025",
                        rating: 5,
                        text: "Играю в JoyCasino уже больше года. Нравится огромный выбор слотов и быстрые выплаты. Верификацию прошёл за один день. Рекомендую.",
                      },
                      {
                        name: "Марина С.",
                        date: "Февраль 2025",
                        rating: 4,
                        text: "Хорошее казино с честными условиями. Бонус получила без проблем, отыграла за неделю. Единственный минус — поддержка иногда отвечает долго.",
                      },
                      {
                        name: "Дмитрий П.",
                        date: "Апрель 2025",
                        rating: 5,
                        text: "Live-казино на высшем уровне! Дилеры профессиональные, стримы без лагов. Играю в рулетку каждый вечер. Вывод на карту за 2 дня.",
                      },
                    ].map((review, i) => (
                      <div
                        key={i}
                        style={{
                          background: "white",
                          border: "1px solid oklch(0.88 0.01 240)",
                          borderRadius: "0.75rem",
                          padding: "1.25rem",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "oklch(0.18 0.03 240)" }}>{review.name}</div>
                            <div style={{ fontSize: "0.75rem", color: "oklch(0.55 0.02 240)" }}>{review.date}</div>
                          </div>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} size={14} fill={s <= review.rating ? "oklch(0.78 0.12 75)" : "none"} color="oklch(0.78 0.12 75)" />
                            ))}
                          </div>
                        </div>
                        <p style={{ fontSize: "0.875rem", color: "oklch(0.38 0.02 240)", margin: 0, lineHeight: 1.6 }}>{review.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </RevealSection>

              {/* FAQ Section */}
              <RevealSection>
                <section
                  style={{
                    background: "white",
                    border: "1px solid oklch(0.88 0.01 240)",
                    borderRadius: "0.75rem",
                    padding: "2rem",
                    marginBottom: "2.5rem",
                  }}
                >
                  <div className="section-header">
                    <h2 style={{ margin: 0 }}>Часто задаваемые вопросы</h2>
                  </div>
                  <div>
                    {faqs.map((faq, i) => (
                      <FaqItem key={i} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </section>
              </RevealSection>

              {/* Info Section */}
              <RevealSection>
                <section style={{ marginBottom: "2.5rem" }}>
                  <div className="section-header">
                    <h2 style={{ margin: 0 }}>Подробная информация о JoyCasino</h2>
                  </div>

                  <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
                    <h3>Лицензия и безопасность</h3>
                    <p>
                      JoyCasino работает на основании лицензии Curaçao eGaming (номер 1668/JAZ). Это одна из наиболее распространённых лицензий в индустрии онлайн-гемблинга, которая обязывает казино соблюдать базовые стандарты честности и защиты игроков. Сайт использует SSL-шифрование для защиты персональных данных и финансовых транзакций.
                    </p>

                    <h3>Провайдеры игр</h3>
                    <p>
                      В каталоге JoyCasino представлены игры от более чем 50 ведущих провайдеров: NetEnt, Pragmatic Play, Play'n GO, Microgaming, Yggdrasil, Quickspin, Thunderkick, Betsoft и других. Все игры проходят сертификацию независимыми аудиторами, что гарантирует честность генератора случайных чисел (RNG).
                    </p>

                    <h3>Платёжные методы</h3>
                    <p>
                      Пополнение счёта и вывод выигрышей осуществляются через банковские карты (Visa, Mastercard), электронные кошельки (QIWI, ЮMoney, WebMoney) и криптовалюту. Минимальный депозит составляет 500 ₽. Сроки вывода зависят от выбранного метода: электронные кошельки — до 24 часов, банковские карты — 1–3 рабочих дня.
                    </p>

                    <h3>Программа лояльности</h3>
                    <p>
                      JoyCasino предлагает многоуровневую программу лояльности для постоянных игроков. По мере накопления очков статус игрока повышается, открывая доступ к улучшенным условиям кэшбэка, персональному менеджеру и эксклюзивным бонусным предложениям. VIP-игроки получают приоритетную обработку заявок на вывод.
                    </p>

                    <div style={{ marginTop: "1.5rem", textAlign: "center", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                      <Link href="/obzory/joycasino">
                        <span className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                          Читать полный обзор <ArrowRight size={16} />
                        </span>
                      </Link>
                      <a href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c" target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                        Играть в JoyCasino <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </section>
              </RevealSection>

              {/* Internal Links */}
              <RevealSection>
                <section>
                  <div className="section-header">
                    <h2 style={{ margin: 0 }}>Полезные материалы</h2>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                    {[
                      { title: "Полный обзор JoyCasino", desc: "Детальный анализ всех аспектов казино", href: "/obzory/joycasino", icon: <Shield size={20} /> },
                      { title: "Бонусы и промокоды", desc: "Актуальные акции и коды на 2025 год", href: "/bonusy", icon: <Gift size={20} /> },
                      { title: "Игровые автоматы", desc: "Лучшие слоты и стратегии игры", href: "/igry/avtomaty", icon: <Zap size={20} /> },
                      { title: "Live-казино", desc: "Игры с живыми дилерами", href: "/igry/live-kazino", icon: <Users size={20} /> },
                    ].map((link, i) => (
                      <Link key={i} href={link.href}>
                        <div
                          style={{
                            background: "white",
                            border: "1px solid oklch(0.88 0.01 240)",
                            borderRadius: "0.75rem",
                            padding: "1.25rem",
                            cursor: "pointer",
                            transition: "all 0.2s",
                            display: "flex",
                            gap: "1rem",
                            alignItems: "flex-start",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "oklch(0.28 0.07 240)";
                            e.currentTarget.style.boxShadow = "0 4px 12px oklch(0.28 0.07 240 / 0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "oklch(0.88 0.01 240)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              background: "oklch(0.28 0.07 240 / 0.1)",
                              borderRadius: "0.5rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "oklch(0.28 0.07 240)",
                              flexShrink: 0,
                            }}
                          >
                            {link.icon}
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "oklch(0.18 0.03 240)", marginBottom: "0.25rem" }}>{link.title}</div>
                            <div style={{ fontSize: "0.8rem", color: "oklch(0.52 0.02 240)" }}>{link.desc}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              </RevealSection>
            </div>

            {/* ===== SIDEBAR ===== */}
            <div className="sticky-sidebar hidden lg:block">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Наверх"
        >
          ↑
        </button>
      )}
    </>
  );
}
