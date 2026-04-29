/*
 * Review Page — JoyCasino SEO
 * URL: /obzory/joycasino
 * H1: JoyCasino: полный обзор онлайн-казино — игры, бонусы, выплаты
 * Style: Editorial Trust Design
 */

import { useState } from "react";
import { Star, Shield, Check, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "wouter";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/dhTveBnkzqbGf8AnNrhTxj/hero-banner-CLmpqAZuDDWHw6rZfMukWY.webp";
const BONUS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/dhTveBnkzqbGf8AnNrhTxj/bonus-section-erah8AMETbK3y23nQ5zXeq.webp";

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

export default function ReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Review",
        "name": "JoyCasino: полный обзор онлайн-казино",
        "reviewBody": "Детальный обзор JoyCasino: ассортимент игр, бонусная программа, способы пополнения и вывода, мобильная версия и поддержка.",
        "reviewRating": { "@type": "Rating", "ratingValue": "8.7", "bestRating": "10" },
        "author": { "@type": "Organization", "name": "JoyCasino Обзор" },
        "datePublished": "2025-01-01",
        "dateModified": "2025-04-29",
        "itemReviewed": { "@type": "Organization", "name": "JoyCasino" }
      })}} />

      <Header />
      <main>
        {/* Hero */}
        <section style={{
          background: `linear-gradient(to right, oklch(0.12 0.07 240 / 0.95), oklch(0.18 0.07 240 / 0.7)), url(${HERO_IMG}) center/cover`,
          padding: "3rem 0 2.5rem", color: "white"
        }}>
          <div className="container">
            <nav className="breadcrumb" style={{ color: "oklch(0.72 0.02 240)" }}>
              <Link href="/"><span style={{ color: "oklch(0.78 0.12 75)" }}>Главная</span></Link>
              <span>›</span>
              <Link href="/obzory"><span style={{ color: "oklch(0.78 0.12 75)" }}>Обзоры</span></Link>
              <span>›</span>
              <span>JoyCasino</span>
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className="trust-badge" style={{ background: "oklch(0.52 0.14 145 / 0.2)", color: "oklch(0.82 0.1 145)", borderColor: "oklch(0.52 0.14 145 / 0.4)" }}>
                <Shield size={12} /> Лицензия Curaçao
              </span>
              <span style={{ background: "oklch(0.52 0.14 145)", color: "white", padding: "0.2rem 0.75rem", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 700 }}>
                Рейтинг 8.7/10
              </span>
            </div>
            <h1 style={{ color: "white", marginBottom: "1rem" }}>
              JoyCasino: полный обзор онлайн-казино — игры, бонусы, выплаты
            </h1>
            <p style={{ fontSize: "1rem", color: "oklch(0.85 0.02 240)", maxWidth: "650px", lineHeight: 1.7 }}>
              Актуальный обзор 2025 года. Проверили всё: от регистрации до вывода денег. Честная оценка без рекламных преувеличений.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
              <a href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c" target="_blank" rel="noopener noreferrer" className="btn-cta">Играть в JoyCasino</a>
              <a href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ color: "white", borderColor: "oklch(0.78 0.12 75)" }}>Получить бонус</a>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="lg:grid-cols-[1fr_320px]">
            <div>
              {/* Table of Contents */}
              <div style={{ background: "oklch(0.97 0.005 240)", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" }}>
                <h2 style={{ marginTop: 0, fontSize: "1rem", marginBottom: "1rem" }}>Содержание обзора</h2>
                <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {[
                    ["#general", "Общая информация о казино"],
                    ["#registration", "Регистрация и вход"],
                    ["#games", "Игровой каталог"],
                    ["#bonus", "Бонусы и акции"],
                    ["#payments", "Пополнение и вывод"],
                    ["#mobile", "Мобильная версия"],
                    ["#support", "Служба поддержки"],
                    ["#verdict", "Итоговая оценка"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} style={{ color: "oklch(0.28 0.07 240)", fontSize: "0.875rem" }}>{label}</a></li>
                  ))}
                </ol>
              </div>

              {/* General Info */}
              <section id="general" style={{ marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Общая информация о JoyCasino</h2></div>
                <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
                  <p>JoyCasino — онлайн-казино, основанное в 2014 году и ориентированное преимущественно на русскоязычную аудиторию. За более чем 10 лет работы платформа приобрела значительную базу постоянных игроков благодаря широкому ассортименту игр, регулярным бонусным акциям и стабильной работе сервиса.</p>
                  <p>Казино работает на основании лицензии Curaçao eGaming, что является стандартом для большинства онлайн-казино, ориентированных на рынки, где гемблинг не лицензируется на государственном уровне. Платформа использует современные технологии шифрования для защиты данных пользователей.</p>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
                    {[
                      { label: "Год основания", value: "2014" },
                      { label: "Лицензия", value: "Curaçao eGaming" },
                      { label: "Игр в каталоге", value: "3 000+" },
                      { label: "Провайдеров", value: "50+" },
                      { label: "Валюты", value: "RUB, USD, EUR" },
                      { label: "Языки", value: "Русский, English" },
                    ].map((item) => (
                      <div key={item.label} style={{ padding: "0.875rem", background: "oklch(0.97 0.005 240)", borderRadius: "0.5rem" }}>
                        <div style={{ fontSize: "0.75rem", color: "oklch(0.52 0.02 240)", marginBottom: "0.25rem" }}>{item.label}</div>
                        <div style={{ fontWeight: 700, color: "oklch(0.18 0.03 240)", fontSize: "0.95rem" }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Registration */}
              <section id="registration" style={{ marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Регистрация и вход в JoyCasino</h2></div>
                <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
                  <p>Регистрация в JoyCasino занимает не более 2–3 минут. Для создания аккаунта достаточно указать email-адрес или номер телефона и придумать пароль. Казино также предлагает быструю регистрацию через социальные сети.</p>

                  <h3>Пошаговая инструкция по регистрации:</h3>
                  <ol style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {[
                      "Перейдите на официальный сайт JoyCasino",
                      "Нажмите кнопку «Регистрация» в верхней части страницы",
                      "Выберите способ регистрации: по email, телефону или через соцсети",
                      "Заполните форму: укажите данные и придумайте пароль",
                      "При наличии промокода введите его в соответствующее поле",
                      "Подтвердите согласие с правилами казино",
                      "Подтвердите аккаунт через письмо на email или SMS",
                    ].map((step, i) => (
                      <li key={i} style={{ fontSize: "0.9rem", color: "oklch(0.28 0.02 240)", lineHeight: 1.6 }}>
                        <strong>Шаг {i + 1}:</strong> {step}
                      </li>
                    ))}
                  </ol>

                  <div style={{ background: "oklch(0.52 0.14 145 / 0.08)", border: "1px solid oklch(0.52 0.14 145 / 0.3)", borderRadius: "0.5rem", padding: "1rem", marginTop: "1.5rem" }}>
                    <p style={{ margin: 0, fontSize: "0.875rem", color: "oklch(0.28 0.02 240)" }}>
                      <strong>Важно:</strong> Регистрация доступна только лицам старше 18 лет. Для вывода выигрышей потребуется пройти верификацию личности — загрузить копию паспорта или другого документа, удостоверяющего личность.
                    </p>
                  </div>
                </div>
              </section>

              {/* Games */}
              <section id="games" style={{ marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Игровой каталог JoyCasino</h2></div>
                <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
                  <p>Каталог JoyCasino насчитывает более 3 000 игр от ведущих мировых провайдеров. Это один из наиболее широких ассортиментов среди онлайн-казино, доступных для российских игроков.</p>

                  <h3>Игровые автоматы</h3>
                  <p>Слоты составляют основу каталога — более 2 500 игровых автоматов различных жанров и форматов. Среди провайдеров: NetEnt, Pragmatic Play, Play'n GO, Microgaming, Yggdrasil, Quickspin, Thunderkick, Betsoft, Nolimit City и другие. Доступны как классические трёхбарабанные слоты, так и современные видеослоты с механикой Megaways, Cluster Pays и Hold & Win.</p>

                  <h3>Live-казино</h3>
                  <p>Раздел live-казино включает более 200 столов с живыми дилерами. Игры предоставляются студиями Evolution Gaming и Pragmatic Play Live. Доступны рулетка (европейская, американская, французская), блэкджек в нескольких вариантах, баккара, покер (Casino Hold'em, Three Card Poker) и шоу-игры (Crazy Time, Monopoly Live, Dream Catcher).</p>

                  <h3>Настольные игры</h3>
                  <p>Для любителей классики доступны автоматические версии настольных игр: рулетка, блэкджек, видеопокер, баккара, кено и другие. Эти игры подходят для тех, кто предпочитает играть в своём темпе без взаимодействия с дилером.</p>

                  <div style={{ marginTop: "1.5rem" }}>
                    <Link href="/igry/avtomaty">
                      <span className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                        Смотреть все игровые автоматы <ArrowRight size={16} />
                      </span>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Bonus */}
              <section id="bonus" style={{ marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Бонусы и акции JoyCasino</h2></div>
                <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                    {[
                      { title: "Приветственный бонус", value: "до 100 000 ₽ + 200 FS", wager: "x40", desc: "На первый депозит" },
                      { title: "Кэшбэк", value: "до 10%", wager: "без вейджера", desc: "Еженедельный возврат" },
                      { title: "Бонус на день рождения", value: "Персональный", wager: "индивидуально", desc: "Для верифицированных" },
                    ].map((b, i) => (
                      <div key={i} style={{ border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "1.25rem", borderTop: "3px solid oklch(0.28 0.07 240)" }}>
                        <h4 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{b.title}</h4>
                        <div style={{ fontFamily: "'Merriweather', serif", fontWeight: 900, fontSize: "1.25rem", color: "oklch(0.28 0.07 240)", marginBottom: "0.25rem" }}>{b.value}</div>
                        <div style={{ fontSize: "0.8rem", color: "oklch(0.52 0.02 240)" }}>{b.desc}</div>
                        <div style={{ fontSize: "0.75rem", color: "oklch(0.62 0.18 35)", marginTop: "0.5rem", fontWeight: 600 }}>Вейджер: {b.wager}</div>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "oklch(0.45 0.02 240)" }}>
                    * Условия бонусов могут изменяться. Перед активацией ознакомьтесь с актуальными правилами на официальном сайте казино. Бонусы доступны только для совершеннолетних игроков.
                  </p>
                  <a href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c" target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
                    Получить бонус <ArrowRight size={16} />
                  </a>
                </div>
              </section>

              {/* Payments */}
              <section id="payments" style={{ marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Пополнение счёта и вывод выигрышей</h2></div>
                <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div>
                      <h3 style={{ marginTop: 0 }}>Пополнение</h3>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {["Visa / Mastercard", "QIWI", "ЮMoney (Яндекс)", "WebMoney", "Криптовалюта (BTC, ETH)", "СБП"].map((m) => (
                          <li key={m} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
                            <Check size={14} style={{ color: "oklch(0.52 0.14 145)" }} /> {m}
                          </li>
                        ))}
                      </ul>
                      <div style={{ marginTop: "1rem", padding: "0.75rem", background: "oklch(0.97 0.005 240)", borderRadius: "0.5rem", fontSize: "0.8rem", color: "oklch(0.45 0.02 240)" }}>
                        Мин. депозит: <strong>500 ₽</strong><br />
                        Зачисление: <strong>мгновенно</strong>
                      </div>
                    </div>
                    <div>
                      <h3 style={{ marginTop: 0 }}>Вывод</h3>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {["Visa / Mastercard", "QIWI", "ЮMoney", "WebMoney", "Криптовалюта"].map((m) => (
                          <li key={m} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
                            <Check size={14} style={{ color: "oklch(0.52 0.14 145)" }} /> {m}
                          </li>
                        ))}
                      </ul>
                      <div style={{ marginTop: "1rem", padding: "0.75rem", background: "oklch(0.97 0.005 240)", borderRadius: "0.5rem", fontSize: "0.8rem", color: "oklch(0.45 0.02 240)" }}>
                        Мин. вывод: <strong>1 000 ₽</strong><br />
                        Сроки: <strong>1–3 рабочих дня</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mobile */}
              <section id="mobile" style={{ marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Мобильная версия JoyCasino</h2></div>
                <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
                  <p>JoyCasino предлагает полноценную мобильную версию сайта, адаптированную для смартфонов и планшетов на iOS и Android. Мобильный сайт сохраняет весь функционал десктопной версии: доступ ко всем играм, кассе, бонусам и службе поддержки.</p>
                  <p>Для Android-устройств доступно приложение в формате APK, которое можно скачать с официального сайта казино. Приложение для iOS отсутствует в App Store, однако мобильный браузерный сайт полностью заменяет нативное приложение по функциональности.</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
                    {["Все игры доступны", "Пополнение и вывод", "Бонусы и акции", "Поддержка 24/7", "Быстрая загрузка"].map((f) => (
                      <span key={f} style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.4rem 0.875rem", background: "oklch(0.52 0.14 145 / 0.08)", border: "1px solid oklch(0.52 0.14 145 / 0.3)", borderRadius: "100px", fontSize: "0.8rem", color: "oklch(0.38 0.12 145)" }}>
                        <Check size={12} /> {f}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Support */}
              <section id="support" style={{ marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Служба поддержки</h2></div>
                <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
                  <p>Служба поддержки JoyCasino работает в режиме 24/7. Для связи с операторами доступны несколько каналов:</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
                    {[
                      { channel: "Онлайн-чат", time: "Мгновенно", desc: "Самый быстрый способ" },
                      { channel: "Email", time: "До 24 часов", desc: "Для сложных вопросов" },
                      { channel: "Telegram", time: "До 2 часов", desc: "Новости и поддержка" },
                    ].map((s) => (
                      <div key={s.channel} style={{ padding: "1rem", background: "oklch(0.97 0.005 240)", borderRadius: "0.5rem" }}>
                        <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{s.channel}</div>
                        <div style={{ fontSize: "0.8rem", color: "oklch(0.52 0.14 145)", fontWeight: 600, marginBottom: "0.25rem" }}>{s.time}</div>
                        <div style={{ fontSize: "0.8rem", color: "oklch(0.52 0.02 240)" }}>{s.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Verdict */}
              <section id="verdict" style={{ marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Итоговая оценка JoyCasino</h2></div>
                <div style={{ background: "linear-gradient(135deg, oklch(0.18 0.07 240), oklch(0.28 0.07 240))", borderRadius: "0.75rem", padding: "2rem", color: "white" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "'Merriweather', serif", fontWeight: 900, fontSize: "3.5rem", color: "oklch(0.78 0.12 75)", lineHeight: 1 }}>8.7</div>
                      <div style={{ fontSize: "0.8rem", color: "oklch(0.72 0.02 240)" }}>из 10</div>
                    </div>
                    <div>
                      <div style={{ display: "flex", gap: "3px", marginBottom: "0.5rem" }}>
                        {[1,2,3,4,5].map((s) => <Star key={s} size={20} fill={s <= 4 ? "oklch(0.78 0.12 75)" : "none"} color="oklch(0.78 0.12 75)" />)}
                      </div>
                      <div style={{ fontSize: "1rem", fontWeight: 600 }}>Рекомендуем к игре</div>
                      <div style={{ fontSize: "0.875rem", color: "oklch(0.75 0.02 240)" }}>Надёжное казино с широким выбором игр</div>
                    </div>
                  </div>
                  <p style={{ color: "oklch(0.85 0.02 240)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    JoyCasino — достойная платформа для онлайн-игры с богатым каталогом слотов, качественным live-казино и стабильной работой. Казино подходит как для новичков, так и для опытных игроков. Основные преимущества: широкий выбор игр, щедрый приветственный бонус и удобная мобильная версия.
                  </p>
                  <a href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c" target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                    Играть в JoyCasino <ArrowRight size={16} />
                  </a>
                </div>
              </section>

              {/* FAQ */}
              <section style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Вопросы и ответы</h2></div>
                {[
                  { q: "Как получить бонус при регистрации в JoyCasino?", a: "После регистрации и первого пополнения счёта бонус начисляется автоматически. Для получения максимального бонуса рекомендуется вносить депозит в соответствии с условиями приветственной акции. Промокод можно ввести в специальное поле при регистрации или пополнении." },
                  { q: "Можно ли играть в JoyCasino бесплатно?", a: "Большинство слотов доступны в демо-режиме без регистрации. Для игры в live-казино и на реальные деньги необходима регистрация и пополнение счёта." },
                  { q: "Как долго обрабатывается вывод в JoyCasino?", a: "Сроки вывода зависят от выбранного метода. Электронные кошельки — до 24 часов, банковские карты — 1–3 рабочих дня, криптовалюта — до 1 часа. Первый вывод требует верификации." },
                ].map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
              </section>
            </div>

            {/* Sidebar */}
            <div className="sticky-sidebar hidden lg:block">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
