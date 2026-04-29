/*
 * Slots Page — JoyCasino SEO
 * URL: /igry/avtomaty
 * H1: Игровые автоматы JoyCasino — лучшие слоты онлайн
 * Style: Editorial Trust Design
 */

import { useState } from "react";
import { ChevronDown, ChevronUp, Star, Zap } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "wouter";

const SLOTS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/dhTveBnkzqbGf8AnNrhTxj/slots-section-QWpTtrpPEqxcRETSfoBjR2.webp";

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

const topSlots = [
  { name: "Book of Dead", provider: "Play'n GO", rtp: "96.21%", volatility: "Высокая", rating: 4.9 },
  { name: "Sweet Bonanza", provider: "Pragmatic Play", rtp: "96.51%", volatility: "Высокая", rating: 4.8 },
  { name: "Gates of Olympus", provider: "Pragmatic Play", rtp: "96.50%", volatility: "Высокая", rating: 4.8 },
  { name: "Starburst", provider: "NetEnt", rtp: "96.09%", volatility: "Низкая", rating: 4.7 },
  { name: "Wolf Gold", provider: "Pragmatic Play", rtp: "96.01%", volatility: "Средняя", rating: 4.7 },
  { name: "Gonzo's Quest", provider: "NetEnt", rtp: "96.00%", volatility: "Средняя", rating: 4.6 },
];

const providers = [
  "NetEnt", "Pragmatic Play", "Play'n GO", "Microgaming",
  "Yggdrasil", "Quickspin", "Thunderkick", "Betsoft",
  "Nolimit City", "Hacksaw Gaming", "Push Gaming", "Red Tiger",
];

const categories = [
  { name: "Слоты с джекпотами", count: "150+", desc: "Прогрессивные и фиксированные джекпоты" },
  { name: "Мегавэйс слоты", count: "200+", desc: "До 117 649 способов выиграть" },
  { name: "Книжные слоты", count: "80+", desc: "Book of Dead, Book of Ra и аналоги" },
  { name: "Египетские слоты", count: "120+", desc: "Тематика Древнего Египта" },
  { name: "Фруктовые автоматы", count: "100+", desc: "Классические слоты с фруктами" },
  { name: "Слоты с бонус-игрой", count: "500+", desc: "Расширенные бонусные раунды" },
];

export default function SlotsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Лучшие игровые автоматы JoyCasino",
        "numberOfItems": topSlots.length,
        "itemListElement": topSlots.map((s, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": s.name,
          "description": `${s.provider}, RTP ${s.rtp}`,
        }))
      })}} />

      <Header />
      <main>
        <section style={{
          background: `linear-gradient(to right, oklch(0.12 0.07 240 / 0.9), oklch(0.18 0.07 240 / 0.6)), url(${SLOTS_IMG}) center/cover`,
          padding: "3rem 0 2.5rem", color: "white"
        }}>
          <div className="container">
            <nav className="breadcrumb" style={{ color: "oklch(0.72 0.02 240)" }}>
              <Link href="/"><span style={{ color: "oklch(0.78 0.12 75)" }}>Главная</span></Link>
              <span>›</span>
              <Link href="/igry"><span style={{ color: "oklch(0.78 0.12 75)" }}>Игры</span></Link>
              <span>›</span>
              <span>Игровые автоматы</span>
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Zap size={20} style={{ color: "oklch(0.78 0.12 75)" }} />
              <span style={{ color: "oklch(0.78 0.12 75)", fontSize: "0.875rem", fontWeight: 600 }}>2 500+ слотов в каталоге</span>
            </div>
            <h1 style={{ color: "white", marginBottom: "1rem" }}>Игровые автоматы JoyCasino — лучшие слоты онлайн</h1>
            <p style={{ fontSize: "1rem", color: "oklch(0.85 0.02 240)", maxWidth: "600px", lineHeight: 1.7 }}>
              Обзор игровых автоматов JoyCasino: топ слоты, провайдеры, RTP и стратегии. Более 2 500 слотов от ведущих разработчиков игрового ПО.
            </p>
          </div>
        </section>

        <div className="container" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="lg:grid-cols-[1fr_320px]">
            <div>
              {/* Categories */}
              <section style={{ marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Категории слотов в JoyCasino</h2></div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                  {categories.map((cat, i) => (
                    <div key={i} style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "1.25rem", cursor: "pointer", transition: "all 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "oklch(0.28 0.07 240)"; e.currentTarget.style.boxShadow = "0 4px 12px oklch(0.28 0.07 240 / 0.1)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "oklch(0.88 0.01 240)"; e.currentTarget.style.boxShadow = "none"; }}
                    >
                      <div style={{ fontFamily: "'Merriweather', serif", fontWeight: 900, fontSize: "1.5rem", color: "oklch(0.28 0.07 240)", marginBottom: "0.25rem" }}>{cat.count}</div>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{cat.name}</div>
                      <div style={{ fontSize: "0.8rem", color: "oklch(0.52 0.02 240)" }}>{cat.desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Top Slots Table */}
              <section style={{ marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Топ-6 слотов JoyCasino по популярности</h2></div>
                <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", overflow: "hidden" }}>
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                      <thead>
                        <tr style={{ background: "oklch(0.18 0.07 240)", color: "white" }}>
                          <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>#</th>
                          <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Слот</th>
                          <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Провайдер</th>
                          <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>RTP</th>
                          <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Волатильность</th>
                          <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600 }}>Рейтинг</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topSlots.map((slot, i) => (
                          <tr key={i} style={{ borderBottom: "1px solid oklch(0.92 0.005 240)", background: i % 2 === 0 ? "white" : "oklch(0.98 0.002 240)" }}>
                            <td style={{ padding: "0.875rem 1rem", fontWeight: 700, color: "oklch(0.28 0.07 240)" }}>{i + 1}</td>
                            <td style={{ padding: "0.875rem 1rem", fontWeight: 600 }}>{slot.name}</td>
                            <td style={{ padding: "0.875rem 1rem", color: "oklch(0.45 0.02 240)" }}>{slot.provider}</td>
                            <td style={{ padding: "0.875rem 1rem", color: "oklch(0.52 0.14 145)", fontWeight: 600 }}>{slot.rtp}</td>
                            <td style={{ padding: "0.875rem 1rem" }}>
                              <span style={{
                                padding: "0.2rem 0.5rem",
                                borderRadius: "100px",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                background: slot.volatility === "Высокая" ? "oklch(0.577 0.245 27.325 / 0.1)" : slot.volatility === "Средняя" ? "oklch(0.78 0.12 75 / 0.15)" : "oklch(0.52 0.14 145 / 0.1)",
                                color: slot.volatility === "Высокая" ? "oklch(0.45 0.2 27)" : slot.volatility === "Средняя" ? "oklch(0.55 0.1 75)" : "oklch(0.38 0.12 145)",
                              }}>
                                {slot.volatility}
                              </span>
                            </td>
                            <td style={{ padding: "0.875rem 1rem" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                                <Star size={14} fill="oklch(0.78 0.12 75)" color="oklch(0.78 0.12 75)" />
                                <span style={{ fontWeight: 600 }}>{slot.rating}</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Providers */}
              <section style={{ marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Провайдеры игровых автоматов</h2></div>
                <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "1.5rem" }}>
                  <p style={{ marginTop: 0 }}>В каталоге JoyCasino представлены игры от более чем 50 провайдеров. Среди них как мировые лидеры индустрии, так и перспективные студии.</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {providers.map((p) => (
                      <span key={p} style={{ padding: "0.4rem 0.875rem", background: "oklch(0.97 0.005 240)", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.375rem", fontSize: "0.875rem", fontWeight: 600, color: "oklch(0.28 0.07 240)" }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Info */}
              <section style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem", marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Что такое RTP и волатильность слота</h2></div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  <div>
                    <h3 style={{ marginTop: 0 }}>RTP (Return to Player)</h3>
                    <p style={{ fontSize: "0.9rem", color: "oklch(0.38 0.02 240)" }}>RTP — теоретический процент возврата средств игроку. Например, RTP 96% означает, что в долгосрочной перспективе казино возвращает 96 ₽ с каждых 100 ₽ ставок. Чем выше RTP — тем выгоднее слот для игрока.</p>
                  </div>
                  <div>
                    <h3 style={{ marginTop: 0 }}>Волатильность</h3>
                    <p style={{ fontSize: "0.9rem", color: "oklch(0.38 0.02 240)" }}>Волатильность определяет частоту и размер выплат. Высокая волатильность — редкие, но крупные выигрыши. Низкая — частые небольшие выплаты. Для игры с ограниченным бюджетом рекомендуются слоты с низкой или средней волатильностью.</p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Вопросы об игровых автоматах</h2></div>
                {[
                  { q: "Можно ли играть в слоты JoyCasino бесплатно?", a: "Да, большинство слотов доступны в демо-режиме без регистрации. Для игры на реальные деньги необходимо создать аккаунт и пополнить счёт." },
                  { q: "Какой слот лучше всего платит в JoyCasino?", a: "Слоты с наиболее высоким RTP: Sweet Bonanza (96.51%), Gates of Olympus (96.50%), Book of Dead (96.21%). Однако RTP — это долгосрочный показатель, и в короткой сессии результаты могут сильно отличаться." },
                  { q: "Как выбрать слот для игры?", a: "Ориентируйтесь на RTP (выше 96% — хороший показатель), волатильность (под ваш бюджет) и тематику. Начните с демо-режима, чтобы понять механику игры перед ставками на реальные деньги." },
                ].map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
              </section>

              {/* CTA */}
              <div style={{ background: "linear-gradient(135deg, oklch(0.18 0.07 240), oklch(0.28 0.07 240))", borderRadius: "0.75rem", padding: "2rem", color: "white", textAlign: "center" }}>
                <h3 style={{ color: "white", marginTop: 0 }}>Готовы играть в слоты JoyCasino?</h3>
                <p style={{ color: "oklch(0.82 0.02 240)", marginBottom: "1.5rem" }}>Более 2 500 игровых автоматов и бонус до 100 000 ₽ для новых игроков.</p>
                <a href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c" target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  Играть в JoyCasino
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
