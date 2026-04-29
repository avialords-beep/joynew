/*
 * Bonus Page — JoyCasino SEO
 * URL: /bonusy
 * H1: Бонусы JoyCasino 2025 — промокоды, фриспины и акции
 * Style: Editorial Trust Design
 */

import { useState } from "react";
import { Gift, ChevronDown, ChevronUp, Check, ArrowRight, Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "wouter";

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

const bonuses = [
  {
    title: "Приветственный бонус на первый депозит",
    amount: "до 100 000 ₽",
    extra: "+ 200 фриспинов",
    tag: "Новичкам",
    tagColor: "oklch(0.28 0.07 240)",
    wager: "x40",
    minDeposit: "500 ₽",
    validity: "7 дней",
    desc: "Бонус начисляется автоматически после первого пополнения счёта. Фриспины активируются на выбранных слотах. Выигрыш от фриспинов подлежит отыгрышу с вейджером x40.",
    pros: ["Высокий максимальный бонус", "200 фриспинов в подарок", "Автоматическое начисление"],
  },
  {
    title: "Еженедельный кэшбэк",
    amount: "до 10%",
    extra: "от проигрышей",
    tag: "Постоянным",
    tagColor: "oklch(0.52 0.14 145)",
    wager: "без вейджера",
    minDeposit: "—",
    validity: "Каждую неделю",
    desc: "Процент кэшбэка зависит от уровня в программе лояльности. Начисляется каждый понедельник по итогам предыдущей недели. Кэшбэк не требует отыгрыша и доступен для вывода сразу.",
    pros: ["Без вейджера", "Еженедельное начисление", "Растёт с уровнем лояльности"],
  },
  {
    title: "Бонус ко дню рождения",
    amount: "Персональный",
    extra: "бонус + фриспины",
    tag: "VIP",
    tagColor: "oklch(0.62 0.18 35)",
    wager: "Индивидуально",
    minDeposit: "—",
    validity: "В день рождения",
    desc: "Персональное предложение для верифицированных игроков. Размер бонуса зависит от активности игрока и его уровня в программе лояльности. Необходимо активировать в течение 24 часов.",
    pros: ["Персональный подход", "Для верифицированных", "Дополнительные фриспины"],
  },
  {
    title: "Турнирные призы",
    amount: "Призовой фонд",
    extra: "до 1 000 000 ₽",
    tag: "Турниры",
    tagColor: "oklch(0.62 0.18 35)",
    wager: "x20",
    minDeposit: "200 ₽ ставка",
    validity: "По расписанию",
    desc: "Регулярные турниры по слотам с крупными призовыми фондами. Для участия необходимо делать ставки в указанных играх. Победители получают денежные призы и фриспины.",
    pros: ["Крупные призовые фонды", "Регулярное проведение", "Открытый рейтинг участников"],
  },
];

export default function BonusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Бонусы JoyCasino 2025",
        "description": "Актуальные бонусы, промокоды и акции казино JoyCasino",
        "numberOfItems": bonuses.length,
        "itemListElement": bonuses.map((b, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": b.title,
          "description": b.desc,
        }))
      })}} />

      <Header />
      <main>
        {/* Hero */}
        <section style={{
          background: `linear-gradient(to right, oklch(0.12 0.07 240 / 0.9), oklch(0.18 0.07 240 / 0.6)), url(${BONUS_IMG}) center/cover`,
          padding: "3rem 0 2.5rem", color: "white"
        }}>
          <div className="container">
            <nav className="breadcrumb" style={{ color: "oklch(0.72 0.02 240)" }}>
              <Link href="/"><span style={{ color: "oklch(0.78 0.12 75)" }}>Главная</span></Link>
              <span>›</span>
              <span>Бонусы JoyCasino</span>
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Gift size={20} style={{ color: "oklch(0.78 0.12 75)" }} />
              <span style={{ color: "oklch(0.78 0.12 75)", fontSize: "0.875rem", fontWeight: 600 }}>Актуально на 2025 год</span>
            </div>
            <h1 style={{ color: "white", marginBottom: "1rem" }}>Бонусы JoyCasino 2025 — промокоды, фриспины и акции</h1>
            <p style={{ fontSize: "1rem", color: "oklch(0.85 0.02 240)", maxWidth: "600px", lineHeight: 1.7 }}>
              Полный список актуальных бонусов казино JoyCasino: приветственный бонус до 100 000 ₽, фриспины, кэшбэк и турнирные призы. Условия и инструкции по активации.
            </p>
          </div>
        </section>

        <div className="container" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="lg:grid-cols-[1fr_320px]">
            <div>
              {/* Bonus Cards */}
              <section style={{ marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Все бонусы JoyCasino</h2></div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {bonuses.map((bonus, i) => (
                    <div key={i} style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", overflow: "hidden" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", padding: "1.5rem" }}>
                        <div style={{ flex: "1", minWidth: "200px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                            <span style={{ background: bonus.tagColor, color: "white", fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: "100px" }}>{bonus.tag}</span>
                            <h3 style={{ margin: 0, fontSize: "1rem" }}>{bonus.title}</h3>
                          </div>
                          <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.5rem" }}>
                            <span style={{ fontFamily: "'Merriweather', serif", fontWeight: 900, fontSize: "1.75rem", color: bonus.tagColor }}>{bonus.amount}</span>
                            <span style={{ fontSize: "0.875rem", color: "oklch(0.52 0.02 240)" }}>{bonus.extra}</span>
                          </div>
                          <p style={{ fontSize: "0.875rem", color: "oklch(0.38 0.02 240)", lineHeight: 1.6, margin: "0 0 1rem" }}>{bonus.desc}</p>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {bonus.pros.map((pro) => (
                              <span key={pro} style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.75rem", color: "oklch(0.38 0.12 145)", background: "oklch(0.52 0.14 145 / 0.08)", padding: "0.2rem 0.5rem", borderRadius: "100px" }}>
                                <Check size={10} /> {pro}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", minWidth: "160px" }}>
                          <div style={{ padding: "0.75rem", background: "oklch(0.97 0.005 240)", borderRadius: "0.5rem", fontSize: "0.8rem" }}>
                            <div style={{ color: "oklch(0.52 0.02 240)", marginBottom: "0.2rem" }}>Вейджер</div>
                            <div style={{ fontWeight: 700, color: "oklch(0.18 0.03 240)" }}>{bonus.wager}</div>
                          </div>
                          <div style={{ padding: "0.75rem", background: "oklch(0.97 0.005 240)", borderRadius: "0.5rem", fontSize: "0.8rem" }}>
                            <div style={{ color: "oklch(0.52 0.02 240)", marginBottom: "0.2rem" }}>Мин. депозит</div>
                            <div style={{ fontWeight: 700, color: "oklch(0.18 0.03 240)" }}>{bonus.minDeposit}</div>
                          </div>
                          <div style={{ padding: "0.75rem", background: "oklch(0.97 0.005 240)", borderRadius: "0.5rem", fontSize: "0.8rem" }}>
                            <div style={{ color: "oklch(0.52 0.02 240)", marginBottom: "0.2rem" }}>Срок действия</div>
                            <div style={{ fontWeight: 700, color: "oklch(0.18 0.03 240)" }}>{bonus.validity}</div>
                          </div>
                          <a href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c" target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ textAlign: "center", fontSize: "0.875rem", padding: "0.6rem 1rem" }}>
                            Получить
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* How to get bonus */}
              <section style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem", marginBottom: "2.5rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Как получить бонус в JoyCasino</h2></div>
                <div style={{ marginBottom: "1.25rem", textAlign: "center" }}>
                  <a href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c" target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                    Зарегистрироваться и получить бонус
                  </a>
                </div>
                <ol style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    "Зарегистрируйтесь на официальном сайте JoyCasino",
                    "Подтвердите email или номер телефона",
                    "Перейдите в раздел «Касса» и выберите способ пополнения",
                    "Внесите депозит от 500 ₽",
                    "Бонус начисляется автоматически в течение нескольких минут",
                    "Отыграйте бонус согласно условиям (вейджер x40)",
                    "После выполнения условий средства становятся доступны для вывода",
                  ].map((step, i) => (
                    <li key={i} style={{ fontSize: "0.9rem", color: "oklch(0.28 0.02 240)", lineHeight: 1.6 }}>
                      <strong>Шаг {i + 1}:</strong> {step}
                    </li>
                  ))}
                </ol>
              </section>

              {/* FAQ */}
              <section style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "2rem" }}>
                <div className="section-header"><h2 style={{ margin: 0 }}>Вопросы о бонусах JoyCasino</h2></div>
                {[
                  { q: "Что такое вейджер (отыгрыш) бонуса?", a: "Вейджер — это коэффициент, на который нужно умножить сумму бонуса, чтобы вывести выигрыш. Например, при вейджере x40 и бонусе 1 000 ₽ нужно сделать ставок на 40 000 ₽. Это стандартное требование всех онлайн-казино." },
                  { q: "Можно ли получить бонус без депозита?", a: "JoyCasino периодически проводит акции с бездепозитными бонусами для новых игроков. Следите за актуальными предложениями в разделе «Акции» на сайте казино." },
                  { q: "Как использовать промокод JoyCasino?", a: "Промокод вводится при регистрации в специальное поле или в личном кабинете в разделе «Бонусы». После активации промокода бонус начисляется автоматически при выполнении условий." },
                  { q: "Можно ли вывести бонусные деньги сразу?", a: "Нет. Бонусные средства необходимо отыграть согласно условиям вейджера. Только после выполнения требований по отыгрышу деньги становятся доступны для вывода." },
                ].map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
              </section>
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
