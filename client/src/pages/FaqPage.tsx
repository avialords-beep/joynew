/*
 * FAQ Page — JoyCasino SEO
 * URL: /faq
 * H1: Часто задаваемые вопросы о JoyCasino
 * Style: Editorial Trust Design
 */

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "wouter";

function FaqItem({ q, a, category }: { q: string; a: string; category: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <div className="faq-question" onClick={() => setOpen(!open)} itemProp="name">
        <span>{q}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
      {open && (
        <div className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <div itemProp="text">{a}</div>
        </div>
      )}
    </div>
  );
}

const faqCategories = [
  {
    category: "Регистрация и вход",
    items: [
      { q: "Как зарегистрироваться в JoyCasino?", a: "Перейдите на сайт JoyCasino, нажмите «Регистрация», выберите способ создания аккаунта (email, телефон или соцсети), заполните форму и подтвердите аккаунт. Процесс занимает 2–3 минуты." },
      { q: "Что делать, если забыл пароль от JoyCasino?", a: "Нажмите «Забыли пароль?» на странице входа, введите email или номер телефона, привязанный к аккаунту. Вам придёт письмо или SMS с инструкцией по восстановлению пароля." },
      { q: "Можно ли иметь несколько аккаунтов в JoyCasino?", a: "Нет. Правила казино запрещают создание нескольких аккаунтов одним пользователем. Это может привести к блокировке всех аккаунтов и аннулированию выигрышей." },
      { q: "С какого возраста можно играть в JoyCasino?", a: "Регистрация и игра в JoyCasino доступны только лицам, достигшим 18 лет. Казино проводит верификацию возраста при первом запросе на вывод средств." },
    ],
  },
  {
    category: "Бонусы и промокоды",
    items: [
      { q: "Как получить приветственный бонус JoyCasino?", a: "После регистрации внесите первый депозит от 500 ₽. Бонус начисляется автоматически. Максимальный размер бонуса — до 100 000 ₽ + 200 фриспинов. Условия могут меняться — проверяйте актуальные правила на сайте." },
      { q: "Как активировать промокод JoyCasino?", a: "Промокод вводится при регистрации в специальное поле или в личном кабинете в разделе «Бонусы» → «Промокод». После активации бонус начисляется при выполнении условий акции." },
      { q: "Что такое вейджер и как его отыграть?", a: "Вейджер (отыгрыш) — коэффициент, показывающий, сколько нужно поставить, чтобы вывести бонусные деньги. При вейджере x40 и бонусе 1 000 ₽ нужно сделать ставок на 40 000 ₽. Ставки в разных играх могут засчитываться с разным коэффициентом." },
      { q: "Можно ли получить бонус без депозита?", a: "JoyCasino периодически проводит акции с бездепозитными бонусами. Следите за разделом «Акции» на сайте и официальными каналами казино в Telegram." },
    ],
  },
  {
    category: "Пополнение и вывод",
    items: [
      { q: "Как пополнить счёт в JoyCasino?", a: "Войдите в личный кабинет, перейдите в «Касса» → «Пополнение», выберите способ оплаты (карта, QIWI, ЮMoney, криптовалюта), укажите сумму и подтвердите платёж. Зачисление происходит мгновенно." },
      { q: "Как вывести деньги из JoyCasino?", a: "Перейдите в «Касса» → «Вывод», выберите метод и укажите сумму. Первый вывод требует верификации личности. Сроки: электронные кошельки — до 24 часов, банковские карты — 1–3 рабочих дня." },
      { q: "Почему задерживается вывод средств?", a: "Задержка может быть связана с необходимостью верификации, проверкой безопасности или техническими работами. Если вывод задерживается более 3 рабочих дней — обратитесь в службу поддержки." },
      { q: "Какой минимальный вывод в JoyCasino?", a: "Минимальная сумма вывода составляет 1 000 ₽. Максимальная сумма зависит от выбранного метода и статуса игрока в программе лояльности." },
    ],
  },
  {
    category: "Игры и технические вопросы",
    items: [
      { q: "Почему не загружается игра в JoyCasino?", a: "Проверьте интернет-соединение, обновите страницу или очистите кэш браузера. Убедитесь, что JavaScript включён. Если проблема сохраняется — попробуйте другой браузер или обратитесь в поддержку." },
      { q: "Есть ли приложение JoyCasino для Android?", a: "Да, приложение для Android доступно в виде APK-файла для скачивания с официального сайта. Для iOS доступна мобильная версия сайта через браузер." },
      { q: "Можно ли играть в JoyCasino без регистрации?", a: "Большинство слотов доступны в демо-режиме без регистрации. Для игры на реальные деньги, участия в бонусных программах и вывода выигрышей необходима регистрация." },
    ],
  },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqCategories.flatMap(cat => cat.items.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        })))
      })}} />

      <Header />
      <main>
        <section style={{ background: "oklch(0.18 0.07 240)", padding: "3rem 0 2.5rem", color: "white" }}>
          <div className="container">
            <nav className="breadcrumb" style={{ color: "oklch(0.72 0.02 240)" }}>
              <Link href="/"><span style={{ color: "oklch(0.78 0.12 75)" }}>Главная</span></Link>
              <span>›</span>
              <span>FAQ</span>
            </nav>
            <h1 style={{ color: "white", marginBottom: "1rem" }}>Часто задаваемые вопросы о JoyCasino</h1>
            <p style={{ color: "oklch(0.85 0.02 240)", maxWidth: "600px", lineHeight: 1.7 }}>
              Ответы на популярные вопросы об онлайн-казино JoyCasino: регистрация, бонусы, пополнение, вывод средств и технические вопросы.
            </p>
          </div>
        </section>

        <div className="container" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="lg:grid-cols-[240px_1fr]">
            {/* Category Nav */}
            <div>
              <div style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)", borderRadius: "0.75rem", padding: "1rem", position: "sticky", top: "80px" }}>
                <h3 style={{ fontSize: "0.875rem", fontWeight: 700, color: "oklch(0.52 0.02 240)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 0, marginBottom: "0.75rem" }}>
                  Разделы FAQ
                </h3>
                {faqCategories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(i)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "0.6rem 0.75rem",
                      borderRadius: "0.375rem",
                      border: "none",
                      background: activeCategory === i ? "oklch(0.28 0.07 240)" : "transparent",
                      color: activeCategory === i ? "white" : "oklch(0.38 0.02 240)",
                      fontSize: "0.875rem",
                      fontWeight: activeCategory === i ? 600 : 400,
                      cursor: "pointer",
                      transition: "all 0.15s",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Content */}
            <div>
              {faqCategories.map((cat, catIdx) => (
                <section
                  key={catIdx}
                  style={{
                    background: "white",
                    border: "1px solid oklch(0.88 0.01 240)",
                    borderRadius: "0.75rem",
                    padding: "2rem",
                    marginBottom: "1.5rem",
                    display: activeCategory === catIdx || true ? "block" : "none",
                  }}
                  id={`cat-${catIdx}`}
                >
                  <div className="section-header">
                    <h2 style={{ margin: 0, fontSize: "1.25rem" }}>{cat.category}</h2>
                  </div>
                  <div itemScope itemType="https://schema.org/FAQPage">
                    {cat.items.map((item, i) => (
                      <FaqItem key={i} q={item.q} a={item.a} category={cat.category} />
                    ))}
                  </div>
                </section>
              ))}

              {/* CTA */}
              <div style={{ background: "linear-gradient(135deg, oklch(0.18 0.07 240), oklch(0.28 0.07 240))", borderRadius: "0.75rem", padding: "2rem", color: "white", textAlign: "center" }}>
                <h3 style={{ color: "white", marginTop: 0 }}>Не нашли ответ на свой вопрос?</h3>
                <p style={{ color: "oklch(0.82 0.02 240)", marginBottom: "1.5rem" }}>
                  Обратитесь в службу поддержки JoyCasino — операторы работают 24/7 и ответят на любой вопрос.
                </p>
                <a href="https://52896.call2me.pro/ru/registration?partner=p52896p3328715pf46c" target="_blank" rel="noopener noreferrer" className="btn-cta">
                  Зарегистрироваться в JoyCasino
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
