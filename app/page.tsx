const geoGroups = [
  {
    id: 'russia',
    eyebrow: 'Основной рынок',
    title: 'Россия',
    flag: '🇷🇺',
    intro: 'Основные RUB-маршруты для Gambling, Betting и Exchange.',
    routes: [
      { name: 'C2C / SBP / Cards', value: '9–12%', note: 'Банки T1–T3' },
      { name: 'PDF receipt flow', value: '10–12%', note: '1k–200k RUB' },
      { name: 'NSPK QR / Multitransfer', value: '13%', note: 'до 200k RUB' },
      { name: 'PSB / MobCom / BT', value: '12–23%', note: 'RUB / KZT' },
    ],
  },
  {
    id: 'cis',
    eyebrow: 'CIS / Central Asia',
    title: 'Центральная Азия',
    flag: '✦',
    intro: 'Локальные методы и payout-маршруты на ключевых рынках региона.',
    routes: [
      { name: 'Таджикистан', value: '8–12%', note: 'Alfa SBP / YouMoney' },
      { name: 'Узбекистан', value: 'On request', note: 'UZCARD / HUMO / transgran' },
      { name: 'Казахстан', value: '7.5–9.5%', note: 'KZT P2P' },
      { name: 'Кыргызстан', value: '5% / 1%', note: 'MBANK ELQR · in / out' },
    ],
  },
  {
    id: 'caucasus',
    eyebrow: 'Caucasus',
    title: 'Кавказ',
    flag: '◆',
    intro: 'Cross-border конверсия KZT и прямые RUB-маршруты.',
    routes: [
      { name: 'Армения', value: 'On request', note: 'KZT → AMD' },
      { name: 'Грузия', value: 'On request', note: 'KZT → GEL' },
      { name: 'Абхазия', value: '10.5%', note: 'RUB · 1k–150k' },
    ],
  },
  {
    id: 'asia',
    eyebrow: 'Asia',
    title: 'Азия',
    flag: '◉',
    intro: 'Cross-border направления и локальные методы оплаты.',
    routes: [
      { name: 'Вьетнам', value: '5–11%', note: 'QR Sber / VTB' },
      { name: 'Азербайджан', value: '5.5–7%', note: 'AZN P2P / QECOM' },
    ],
  },
];

const solutions = [
  {
    code: 'PDF',
    title: 'SBP / Cards + PDF receipts',
    text: 'RUB pay-in под Exchange / GB. Лимиты 1k–200k, ставка 10–12%.',
    tags: ['Exchange', 'GB', 'RUB'],
    tone: 'pink',
  },
  {
    code: 'QR',
    title: 'NSPK QR Multitransfer',
    text: 'QR-оплата с поддержкой мультипереводов и лимитом до 200k.',
    tags: ['QR payment', '13%', 'RUB'],
    tone: 'dark',
  },
  {
    code: 'GEO',
    title: 'Cross-border QR Vietnam',
    text: 'Сбер / ВТБ QR, минимум 100 RUB, ставки от 5%.',
    tags: ['Vietnam', 'Multi-geo', 'QR'],
    tone: 'light',
  },
  {
    code: 'C2C',
    title: 'C2C / SBP классика',
    text: 'Основной RUB flow: карты, SBP и банки T1–T3.',
    tags: ['Cards', 'SBP', 'T1–T3'],
    tone: 'light',
  },
  {
    code: 'MOB',
    title: 'Mobile Commerce / BT',
    text: 'Мобком до 23%, BT RUB/KZT по текущим приоритетам.',
    tags: ['RUB', 'KZT', 'Up to 23%'],
    tone: 'dark',
  },
  {
    code: 'OUT',
    title: 'Payout / In+Out',
    text: 'Доступно на части GEO: AZ, KG, KZ и RUB-flow.',
    tags: ['Pay-in', 'Payout', 'Multi-geo'],
    tone: 'pink',
  },
];

const terms = [
  { number: '01', label: 'Settlement', value: 'Rapira / USDT', note: 'T+0 · отдельные маршруты T+1' },
  { number: '02', label: 'Fees', value: '0–5 USDT', note: 'Зависит от маршрута' },
  { number: '03', label: 'Integration', value: 'H2H / link', note: 'Payment page' },
  { number: '04', label: 'Traffic', value: 'GB / BT / EX', note: 'Gambling · Betting · Exchange' },
  { number: '05', label: 'Quality', value: 'FTD / STD / TD', note: 'Trusted traffic' },
  { number: '06', label: 'Availability', value: 'Live check', note: 'Provider + traffic quality' },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Fynzah — наверх">
          fynzah<span className="brand-dot">.</span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#directions">Направления</a>
          <a href="#terms">Условия</a>
          <a href="#solutions">Решения</a>
        </nav>
        <div className="header-actions">
          <span className="issue">AUG ’26</span>
          <a className="button button-primary button-small" href="#contact">
            Связаться <Arrow />
          </a>
        </div>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="status-pill"><span /> 15 active offers</div>
          <h1>Платежные маршруты для&nbsp;быстрого роста.</h1>
          <p className="hero-lede">
            Актуальные pay-in и payout решения для Gambling, Betting и Exchange
            по России, СНГ, Кавказу и Азии.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#directions">Смотреть офферы <Arrow /></a>
            <a className="button button-muted" href="#terms">Условия работы</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Сводка активных платежных маршрутов">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="terminal">
            <div className="terminal-top">
              <span className="terminal-logo">F</span>
              <span>ROUTE MONITOR</span>
              <span className="live-dot">LIVE</span>
            </div>
            <div className="metric-main">
              <span>Active routes</span>
              <strong>15</strong>
              <em>+4 GEO</em>
            </div>
            <div className="route-chart" aria-hidden="true">
              {[35, 52, 42, 74, 58, 91, 68, 86, 63, 96, 78, 100].map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="terminal-grid">
              <div><span>RUB</span><strong>9–23%</strong></div>
              <div><span>ASIA</span><strong>5–11%</strong></div>
              <div><span>SETTLE</span><strong>T+0</strong></div>
            </div>
          </div>
          <div className="float-card float-card-top"><span>↑</span><div><small>NSPK QR</small><strong>up to 200k</strong></div></div>
          <div className="float-card float-card-bottom"><span>✓</span><div><small>Settlement</small><strong>Rapira / USDT</strong></div></div>
        </div>

        <div className="hero-strip">
          <span>RUB</span><i />
          <span>KZT</span><i />
          <span>AZN</span><i />
          <span>VND</span><i />
          <span>AMD</span><i />
          <span>GEL</span>
        </div>
      </section>

      <section className="directions section-shell" id="directions">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Активные направления · August 2026</p>
            <h2>Один пул.<br />Четыре региона.</h2>
          </div>
          <p>Ставки и лимиты актуальны на момент публикации. Финальный SLA подтверждаем после проверки источника и качества трафика.</p>
        </div>

        <div className="geo-grid">
          {geoGroups.map((group, groupIndex) => (
            <article className={`geo-card geo-card-${groupIndex + 1}`} key={group.id}>
              <div className="geo-card-head">
                <div>
                  <p className="eyebrow">{group.eyebrow}</p>
                  <h3>{group.title}</h3>
                </div>
                <span className="geo-mark" aria-hidden="true">{group.flag}</span>
              </div>
              <p className="geo-intro">{group.intro}</p>
              <div className="route-list">
                {group.routes.map((route) => (
                  <div className="route-row" key={route.name}>
                    <div><strong>{route.name}</strong><span>{route.note}</span></div>
                    <b>{route.value}</b>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="terms" id="terms">
        <div className="section-shell">
          <div className="section-heading section-heading-dark">
            <div>
              <p className="eyebrow">Как работаем</p>
              <h2>Прозрачные<br />условия.</h2>
            </div>
            <p>Подбираем сценарий под GEO, вертикаль, конверсию и профиль трафика. Быстро подключаем через API или готовую платежную страницу.</p>
          </div>
          <div className="terms-grid">
            {terms.map((term) => (
              <article className="term-card" key={term.number}>
                <span className="term-number">{term.number}</span>
                <p>{term.label}</p>
                <h3>{term.value}</h3>
                <small>{term.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions section-shell" id="solutions">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Merchant-ready · New / priority</p>
            <h2>Решения<br />в работе.</h2>
          </div>
          <p>Приоритетные продукты, которые можно запускать сейчас. Доступность конкретного маршрута подтверждается перед стартом.</p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <article className={`solution-card tone-${solution.tone}`} key={solution.code}>
              <div className="solution-top">
                <span className="solution-code">{solution.code}</span>
                <span className="solution-index">0{index + 1}</span>
              </div>
              <div>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
              </div>
              <div className="tag-row">
                {solution.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta section-shell" id="contact">
        <div className="cta-inner">
          <p className="eyebrow">Подключение</p>
          <h2>Нужен подходящий<br />платежный маршрут?</h2>
          <p>Пришлите GEO, вертикаль, дневной объем и тип трафика — вернемся с доступностью и финальными условиями.</p>
          <div className="cta-actions">
            <a className="button button-dark" href="https://t.me/psp_coo" target="_blank" rel="noreferrer">Написать в Telegram <Arrow /></a>
            <a className="button button-pale" href="mailto:info@fynzah.com">info@fynzah.com</a>
          </div>
        </div>
        <div className="cta-stamp" aria-hidden="true"><span>15</span><small>ACTIVE<br />OFFERS</small></div>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand brand-footer" href="#top">fynzah<span className="brand-dot">.</span></a>
        <p>Актуальные платежные решения · August 2026</p>
        <span>© Fynzah 2024–2026</span>
      </footer>
    </main>
  );
}
