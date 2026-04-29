/*
 * Live Casino Page — JoyCasino SEO
 * URL: /igry/live-kazino
 * H1: Live-казино JoyCasino — игры с живыми дилерами онлайн
 * Style: Editorial Trust Design
 */

import { useState } from "react";
import { ChevronDown, ChevronUp, Users, Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "wouter";

const LIVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/dhTveBnkzqbGf8AnNrhTxj/live-casino-JyHtTSQePCgbKXTk3BmYFS.webp";

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

const liveGames = [
  { name: "Рулетка европейская", provider: "Evolution Gaming", minBet: "10 ₽", maxBet: "500 000 ₽", rating: 4.9 },
  { name: "Блэкджек классический", provider: "Evolution Gaming", minBet: "50 ₽", maxBet: "200 000 ₽", rating: 4.8 },
  { name: "Баккара", provider: "Pragmatic Play Live", minBet: "20 ₽", maxBet: "300 000 ₽", rating: 4.7 },
  { name: "Casino Hold'em", provider: "Evolution Gaming", minBet: "50 ₽", maxBet: "100 000 ₽", rating: 4.7 },
  { name: "Crazy Time", provider: "Evolution Gaming", minBet: "10 ₽", maxBet: "50 000 ₽", rating: 4.9 },
  { name: "Monopoly Live", provider: "Evolution Gaming", minBet: "10 ₽", maxBet: "50 000 ₽", rating: 4.8 },
];

export default function LiveCasinoPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{
          background: `linear-gradient(to right, oklch(0.12 0.07 240 / 0.9), oklch(0.18 0.07 240 / 0.6)), url(${LIVE_IMG}) center/cover`,
          padding: "3rem 0 2.5rem", color: "white"
        }}>
          <div className="container">
            <nav className="breadcrumb" style={{ color: "oklch(0.72 0.02 240)" }}>
              <Link href="/"><span style={{ color: "oklch(0.78 0.12 75)" }}>Главная</span></Link>
              <span>›</span>
              <Link href="/igry"><span style={{ color: "oklch(0.78 0.12 75)" }}>Игры</span></Link>
              <span>›</span>
              <span>Live-казино</span>
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Users size={20} style={{ color: "oklch(0.78 0.12 75)" }} />
              <span style={{ color: "oklch(0.78 0.12 75)", fontSize: "0.875rem", fontWeight: 600 }}>200+ live-столов</span>
            </div>
            <h1 style={{ color: "white", marginBottom: "1rem" }}>Live-казино JoyCasino — игры с живыми дилерами онлайн</h1>
            <p style={{ fontSize: "1rem", color: "oklch(0.85 0.02 240)", maxWidth: "600px", lineHeight: 1.7 }}>
              Обзор раздела live-казино JoyCasino: рулетка, блэкджек, баккара и шоу-игры с профессиональными дилерами в прямом эфире. Ставки от 10 ₽.
            </p>
          </div>
        </section>

        <div className="container" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="lg:grid-cols-[1fr_320px]">
            <div>
              {/* About */}
              <section style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem", marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>О live-казино JoyCasino</h2></div>
                <p>Раздел live-казино JoyCasino предлагает более 200 столов с профессиональными дилерами в прямом эфире. Игры транслируются из специализированных студий Evolution Gaming и Pragmatic Play Live — двух ведущих провайдеров live-контента в мире.</p>
                <p>Live-казино идеально подходит для игроков, которым важна атмосфера настоящего казино: живое общение с дилером, наблюдение за реальным вращением колеса рулетки или раздачей карт в блэкджеке. Все игры доступны через браузер без скачивания дополнительного ПО.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
                  {[
                    { value: "200+", label: "Live-столов" },
                    { value: "24/7", label: "Работа студий" },
                    { value: "2", label: "Провайдера" },
                    { value: "от 10 ₽", label: "Мин. ставка" },
                  ].map((s) => (
                    <div key={s.label} style={{ padding: "0.875rem", background: "oklch(0.97 0.005 240)", borderRadius: "0.5rem", textAlign: "center" }}>
                      <div style={{ fontFamily: "'Merriweather', serif", fontWeight: 900, fontSize: "1.5rem", color: "oklch(0.28 0.07 240)" }}>{s.value}</div>
                      <div style={{ fontSize: "0.8rem", color: "oklch(0.52 0.02 240)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Games Table */}
              <section style={{ marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Популярные live-игры JoyCasino</h2></div>
                <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", overflow: "hidden" }}>
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                      <thead>
                        <tr style={{ background: "oklch(0.18 0.07 240)", color: "white" }}>
                          <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Игра</th>
                          <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Провайдер</th>
                          <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Мин. ставка</th>
                          <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Макс. ставка</th>
                          <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Рейтинг</th>
                        </tr>
                      </thead>
                      <tbody>
                        {liveGames.map((game, i) => (
                          <tr key={i} style={{ borderBottom: "1px solid oklch(0.92 0.005 240)", background: i % 2 === 0 ? "white" : "oklch(0.98 0.002 240)" }}>
                            <td style={{ padding: "0.875rem 1rem", fontWeight: 600 }}>{game.name}</td>
                            <td style={{ padding: "0.875rem 1rem", color: "oklch(0.45 0.02 240)" }}>{game.provider}</td>
                            <td style={{ padding: "0.875rem 1rem", color: "oklch(0.52 0.14 145)", fontWeight: 600 }}>{game.minBet}</td>
                            <td style={{ padding: "0.875rem 1rem" }}>{game.maxBet}</td>
                            <td style={{ padding: "0.875rem 1rem" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                                <Star size={14} fill="oklch(0.78 0.12 75)" color="oklch(0.78 0.12 75)" />
                                <span style={{ fontWeight: 600 }}>{game.rating}</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Game Types */}
              <section style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem", marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Виды live-игр в JoyCasino</h2></div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
                  {[
                    { title: "Рулетка", desc: "Европейская, американская, французская. Различные лимиты ставок для любого бюджета.", count: "30+ столов" },
                    { title: "Блэкджек", desc: "Классический, многоместный, Speed Blackjack. Стратегические игры для опытных игроков.", count: "50+ столов" },
                    { title: "Баккара", desc: "Классическая баккара, Speed Baccarat. Простые правила и быстрый темп игры.", count: "20+ столов" },
                    { title: "Покер", desc: "Casino Hold'em, Three Card Poker, Ultimate Texas Hold'em.", count: "15+ столов" },
                    { title: "Шоу-игры", desc: "Crazy Time, Monopoly Live, Dream Catcher, Mega Ball.", count: "10+ игр" },
                    { title: "Другие игры", desc: "Andar Bahar, Teen Patti, Sic Bo и другие уникальные форматы.", count: "20+ игр" },
                  ].map((type, i) => (
                    <div key={i} style={{ padding: "1.25rem", background: "oklch(0.97 0.005 240)", borderRadius: "0.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                        <h3 style={{ margin: 0, fontSize: "1rem" }}>{type.title}</h3>
                        <span style={{ fontSize: "0.75rem", color: "oklch(0.28 0.07 240)", fontWeight: 600, background: "oklch(0.28 0.07 240 / 0.1)", padding: "0.2rem 0.5rem", borderRadius: "100px", whiteSpace: "nowrap" }}>{type.count}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: "0.85rem", color: "oklch(0.45 0.02 240)", lineHeight: 1.5 }}>{type.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Вопросы о live-казино</h2></div>
                {[
                  { q: "Как начать играть в live-казино JoyCasino?", a: "Зарегистрируйтесь, пополните счёт и перейдите в раздел «Live-казино». Выберите игру и стол с подходящими лимитами ставок. Игра начинается сразу после подтверждения ставки." },
                  { q: "Честны ли live-игры в JoyCasino?", a: "Live-игры от Evolution Gaming и Pragmatic Play Live проходят регулярные проверки независимых аудиторов. Все результаты определяются в реальном времени физическими объектами (колесо, карты), что исключает возможность манипуляций." },
                  { q: "Можно ли играть в live-казино с телефона?", a: "Да, все live-игры оптимизированы для мобильных устройств. Качество трансляции автоматически адаптируется к скорости вашего интернет-соединения." },
                ].map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
              </section>

              {/* CTA */}
              <div style={{ background: "linear-gradient(135deg, oklch(0.18 0.07 240), oklch(0.28 0.07 240))", borderRadius: "0.75rem", padding: "2rem", color: "white", textAlign: "center" }}>
                <h3 style={{ color: "white", marginTop: 0 }}>Попробуйте live-казино JoyCasino</h3>
                <p style={{ color: "oklch(0.82 0.02 240)", marginBottom: "1.5rem" }}>200+ столов с живыми дилерами 24/7. Ставки от 10 ₽.</p>
                <a href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c" target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  Играть в Live-казино
                </a>
              </div>
            </div>

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
