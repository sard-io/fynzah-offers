const russia = [
  { name: 'C2C / SBP / Cards', meta: 'T1–T3', rate: '9–12%' },
  { name: 'PDF receipt flow', meta: '1k–200k', rate: '10–12%' },
  { name: 'NSPK QR / Multitransfer', meta: 'up to 200k', rate: '13%' },
  { name: 'PSB', meta: 'RUB', rate: '12%' },
  { name: 'Mobile Commerce', meta: 'RUB', rate: 'up to 23%' },
  { name: 'BT', meta: 'RUB / KZT', rate: '18–21%' },
];

const cis = [
  { flag: 'TJ', name: 'Таджикистан', meta: 'Alfa SBP / YouMoney', rate: '8–12%' },
  { flag: 'UZ', name: 'Узбекистан', meta: 'UZCARD / HUMO / transgran', rate: 'request' },
  { flag: 'KZ', name: 'Казахстан', meta: 'KZT P2P', rate: '7.5–9.5%' },
  { flag: 'KG', name: 'Кыргызстан', meta: 'MBANK ELQR · in / out', rate: '5% / 1%' },
];

const caucasus = [
  { flag: 'AM', name: 'Армения', meta: 'KZT → AMD', rate: 'request' },
  { flag: 'GE', name: 'Грузия', meta: 'KZT → GEL', rate: 'request' },
  { flag: 'AB', name: 'Абхазия', meta: 'RUB · 1k–150k', rate: '10.5%' },
];

const asia = [
  { flag: 'VN', name: 'Вьетнам', meta: 'QR Sber / VTB', rate: '5–11%' },
  { flag: 'AZ', name: 'Азербайджан', meta: 'P2P / QECOM', rate: '5.5% / 7%' },
];

const terms = [
  { label: 'Settlement', value: 'Rapira / USDT', meta: 'T+0 · routes T+1' },
  { label: 'Fees', value: '0–5 USDT', meta: 'per settlement' },
  { label: 'Integration', value: 'H2H / link', meta: 'payment page' },
  { label: 'Traffic', value: 'GB / BT / EX', meta: 'FTD · STD · TD' },
  { label: 'Quality', value: 'Trusted', meta: 'traffic check' },
  { label: 'Availability', value: 'Live check', meta: 'provider dependent' },
];

const solutions = [
  { code: 'PDF', title: 'SBP / Cards + receipts', meta: 'RUB · 1k–200k', rate: '10–12%' },
  { code: 'QR', title: 'NSPK Multitransfer', meta: 'QR · up to 200k', rate: '13%' },
  { code: 'GEO', title: 'Cross-border Vietnam', meta: 'Sber / VTB · min 100', rate: 'from 5%' },
  { code: 'C2C', title: 'C2C / SBP classic', meta: 'Cards · banks T1–T3', rate: '9–12%' },
  { code: 'MOB', title: 'Mobile Commerce / BT', meta: 'RUB / KZT', rate: 'up to 23%' },
  { code: 'OUT', title: 'Payout / In+Out', meta: 'AZ · KG · KZ · RUB', rate: 'live' },
];

type Route = {
  flag?: string;
  name: string;
  meta: string;
  rate: string;
};

function RouteRow({ route }: { route: Route }) {
  return (
    <div className="route-row">
      {route.flag && <span className="flag">{route.flag}</span>}
      <div className="route-name">
        <strong>{route.name}</strong>
        <small>{route.meta}</small>
      </div>
      <b>{route.rate}</b>
    </div>
  );
}

export default function Home() {
  return (
    <main className="offer-sheet">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Fynzah">
          fynzah<span>.</span>
        </a>
        <div className="top-meta">
          <span>COMMERCIAL OFFER</span>
          <i />
          <span>AUGUST 2026</span>
        </div>
        <a className="contact-link" href="https://t.me/psp_coo" target="_blank" rel="noreferrer">
          Связаться <span>↗</span>
        </a>
      </header>

      <section className="headline" id="top">
        <div>
          <p>PAY-IN · PAYOUT · MULTI-GEO</p>
          <h1>Активные<br />направления</h1>
        </div>
        <div className="headline-note">
          <span className="pulse" />
          <p>Основные платежные маршруты для<br /><b>Gambling · Betting · Exchange</b></p>
        </div>
        <div className="offer-counter">
          <strong>15</strong>
          <span>active<br />offers</span>
        </div>
      </section>

      <section className="dashboard" aria-label="Все активные офферы">
        <div className="geo-column">
          <article className="panel russia-panel">
            <div className="panel-title">
              <div><span>01 / MAIN GEO</span><h2>Россия</h2></div>
              <p>Основные RUB-маршруты</p>
            </div>
            <div className="russia-grid">
              {russia.map((route) => <RouteRow route={route} key={route.name} />)}
            </div>
          </article>

          <div className="geo-bottom">
            <article className="panel cis-panel">
              <div className="panel-title compact-title">
                <div><span>02 / CIS</span><h2>Central Asia</h2></div>
              </div>
              <div className="rows">
                {cis.map((route) => <RouteRow route={route} key={route.flag} />)}
              </div>
            </article>

            <div className="mini-regions">
              <article className="panel region-panel">
                <div className="mini-title"><span>03</span><h2>Caucasus</h2></div>
                <div className="rows">
                  {caucasus.map((route) => <RouteRow route={route} key={route.flag} />)}
                </div>
              </article>
              <article className="panel region-panel asia-panel">
                <div className="mini-title"><span>04</span><h2>Asia</h2></div>
                <div className="rows">
                  {asia.map((route) => <RouteRow route={route} key={route.flag} />)}
                </div>
              </article>
            </div>
          </div>
        </div>

        <aside className="operations-column">
          <article className="terms-panel">
            <div className="side-title">
              <div><span>WORKFLOW</span><h2>Условия</h2></div>
              <b>T+0</b>
            </div>
            <div className="terms-grid">
              {terms.map((term, index) => (
                <div className="term" key={term.label}>
                  <span>0{index + 1}</span>
                  <p>{term.label}</p>
                  <strong>{term.value}</strong>
                  <small>{term.meta}</small>
                </div>
              ))}
            </div>
          </article>

          <article className="solutions-panel">
            <div className="side-title light-title">
              <div><span>MERCHANT-READY · PRIORITY</span><h2>Решения в работе</h2></div>
              <b>LIVE</b>
            </div>
            <div className="solution-list">
              {solutions.map((solution) => (
                <div className="solution" key={solution.code}>
                  <span>{solution.code}</span>
                  <div><strong>{solution.title}</strong><small>{solution.meta}</small></div>
                  <b>{solution.rate}</b>
                </div>
              ))}
            </div>
          </article>
        </aside>
      </section>

      <footer className="footer-line">
        <p><span>●</span> Availability depends on provider and traffic quality</p>
        <p>H2H / LINK / PAYMENT PAGE</p>
        <a href="mailto:info@fynzah.com">info@fynzah.com <span>↗</span></a>
      </footer>
    </main>
  );
}
