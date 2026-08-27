'use client';

import { useState } from 'react';

type Category = 'all' | 'russia' | 'cis' | 'caucasus' | 'asia';

const offers = [
  { category:'russia', geo:'Russia', flag:'RU', code:'RU · 01', title:'C2C / SBP / Cards', description:'Основной RUB flow для Gambling, Betting и Exchange. Банки T1–T3.', rate:'9–12%', meta:['RUB','Pay-in','Live'], tone:'pink' },
  { category:'russia', geo:'Russia', flag:'RU', code:'RU · 02', title:'PDF receipt flow', description:'SBP и карты с подтверждением платежа через PDF receipt.', rate:'10–12%', meta:['1k–200k','Exchange','Priority'], tone:'black' },
  { category:'russia', geo:'Russia', flag:'RU', code:'RU · 03', title:'NSPK QR Multitransfer', description:'QR-оплата с поддержкой мультипереводов и высоким лимитом.', rate:'13%', meta:['up to 200k','QR','Live'], tone:'yellow' },
  { category:'russia', geo:'Russia', flag:'RU', code:'RU · 04', title:'PSB', description:'Прямой RUB pay-in маршрут под актуальный high-risk трафик.', rate:'12%', meta:['RUB','Pay-in','Live'], tone:'gray' },
  { category:'russia', geo:'Russia', flag:'RU', code:'RU · 05', title:'Mobile Commerce', description:'Оплата с мобильного баланса под текущие приоритеты.', rate:'up to 23%', meta:['RUB','MobCom','Priority'], tone:'pink' },
  { category:'russia', geo:'Russia / KZ', flag:'BT', code:'RU · 06', title:'Bank Transfer', description:'BT-маршрут для RUB и KZT с гибким распределением трафика.', rate:'18–21%', meta:['RUB / KZT','BT','Live'], tone:'black' },
  { category:'cis', geo:'Tajikistan', flag:'TJ', code:'CIS · 01', title:'Alfa SBP / YouMoney', description:'Локальный маршрут для приема платежей в Таджикистане.', rate:'8–12%', meta:['Pay-in','Local','Live'], tone:'yellow' },
  { category:'cis', geo:'Uzbekistan', flag:'UZ', code:'CIS · 02', title:'UZCARD / HUMO', description:'Локальные карты и transgran для платежей в Узбекистане.', rate:'request', meta:['UZS','Cards','On request'], tone:'gray' },
  { category:'cis', geo:'Kazakhstan', flag:'KZ', code:'CIS · 03', title:'KZT P2P', description:'Классический P2P flow в тенге с рабочими лимитами.', rate:'7.5–9.5%', meta:['KZT','P2P','Live'], tone:'pink' },
  { category:'cis', geo:'Kyrgyzstan', flag:'KG', code:'CIS · 04', title:'MBANK ELQR', description:'Двусторонний локальный маршрут через MBANK ELQR.', rate:'5% / 1%', meta:['Pay-in / out','KGS','Live'], tone:'black' },
  { category:'caucasus', geo:'Armenia', flag:'AM', code:'CAU · 01', title:'KZT → AMD', description:'Cross-border конверсия KZT в армянский драм.', rate:'request', meta:['AMD','Cross-border','On request'], tone:'yellow' },
  { category:'caucasus', geo:'Georgia', flag:'GE', code:'CAU · 02', title:'KZT → GEL', description:'Cross-border конверсия KZT в грузинский лари.', rate:'request', meta:['GEL','Cross-border','On request'], tone:'gray' },
  { category:'caucasus', geo:'Abkhazia', flag:'AB', code:'CAU · 03', title:'RUB local flow', description:'Прямой RUB pay-in с лимитами от 1k до 150k.', rate:'10.5%', meta:['1k–150k','RUB','Live'], tone:'pink' },
  { category:'asia', geo:'Vietnam', flag:'VN', code:'ASIA · 01', title:'QR Sber / VTB', description:'Cross-border QR с минимальным платежом от 100 RUB.', rate:'5–11%', meta:['min 100 RUB','QR','Live'], tone:'black' },
  { category:'asia', geo:'Azerbaijan', flag:'AZ', code:'ASIA · 02', title:'AZN P2P / QECOM', description:'Два локальных сценария приема платежей в манатах.', rate:'5.5% / 7%', meta:['AZN','In / out','Live'], tone:'yellow' },
] as const;

const filters: { id: Category; label: string }[] = [
  { id:'all', label:'Все · 15' },
  { id:'russia', label:'Россия · 6' },
  { id:'cis', label:'CIS · 4' },
  { id:'caucasus', label:'Кавказ · 3' },
  { id:'asia', label:'Азия · 2' },
];

const solutions = [
  { code:'PDF', title:'SBP / Cards + PDF', text:'RUB pay-in под Exchange / GB. 1k–200k, ставка 10–12%.', tags:['Exchange','GB','RUB'] },
  { code:'QR', title:'NSPK Multitransfer', text:'QR-оплата с мультипереводами и лимитом до 200k.', tags:['QR payment','13%','Live'] },
  { code:'GEO', title:'QR Vietnam', text:'Сбер / ВТБ QR, минимум 100 RUB, ставки от 5%.', tags:['Vietnam','Multi-geo','QR'] },
  { code:'C2C', title:'C2C / SBP classic', text:'Основной RUB flow: карты, SBP и банки T1–T3.', tags:['Cards','SBP','T1–T3'] },
  { code:'MOB', title:'Mobile Commerce / BT', text:'Мобком до 23%, BT RUB/KZT по текущим приоритетам.', tags:['RUB','KZT','Up to 23%'] },
  { code:'OUT', title:'Payout / In+Out', text:'Доступно на части GEO: AZ, KG, KZ и RUB-flow.', tags:['Pay-in','Payout','Multi-geo'] },
];

const terms = [
  { number:'01', label:'Settlement', value:'Rapira / USDT', text:'В основном T+0, отдельные маршруты T+1.' },
  { number:'02', label:'Fees', value:'0–5 USDT', text:'Финальная комиссия зависит от маршрута.' },
  { number:'03', label:'Integration', value:'H2H / link', text:'Также доступна готовая payment page.' },
  { number:'04', label:'Traffic', value:'GB / BT / EX', text:'Gambling, Betting и Exchange.' },
  { number:'05', label:'Quality', value:'FTD / STD / TD', text:'Включая trusted traffic.' },
  { number:'06', label:'Availability', value:'Live check', text:'Зависит от провайдера и качества трафика.' },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const visibleOffers = activeFilter === 'all' ? offers : offers.filter((offer) => offer.category === activeFilter);

  return (
    <main id="top">
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Fynzah — наверх">fynzah<span>.</span></a>
        <nav aria-label="Основная навигация">
          <a href="#offers">Офферы</a>
          <a href="#solutions">Решения</a>
          <a href="#terms">Условия</a>
        </nav>
        <div className="header-actions">
          <span className="issue">AUG ’26</span>
          <a className="button button-pink button-small" href="#contact">Связаться <span>↗</span></a>
        </div>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="live-label"><i /> 15 ACTIVE OFFERS</div>
          <h1>Платежные<br />офферы <em>без границ.</em></h1>
          <p>Рабочие pay-in и payout решения для Gambling, Betting и Exchange по России, СНГ, Кавказу и Азии.</p>
          <div className="hero-actions">
            <a className="button button-pink" href="#offers">Смотреть офферы <span>↓</span></a>
            <a className="button button-gray" href="#contact">Обсудить подключение</a>
          </div>
        </div>
        <div className="hero-product" aria-label="Панель активных платежных направлений">
          <div className="product-glow" />
          <div className="product-card">
            <div className="product-head"><span className="f-mark">F</span><small>ROUTE CONTROL</small><b>LIVE</b></div>
            <div className="product-stat"><span>Active routes</span><strong>15</strong><em>4 regions</em></div>
            <div className="product-bars">{[42,67,51,79,63,96,72,88,58,100].map((height,index) => <i key={index} style={{height:`${height}%`}} />)}</div>
            <div className="product-foot"><span><small>RUB</small><b>9–23%</b></span><span><small>SETTLE</small><b>T+0</b></span><span><small>FEES</small><b>0–5 USDT</b></span></div>
          </div>
          <div className="float-note note-one"><span>↗</span><div><small>NSPK QR</small><b>up to 200k</b></div></div>
          <div className="float-note note-two"><span>✓</span><div><small>Settlement</small><b>Rapira / USDT</b></div></div>
        </div>
      </section>

      <section className="vertical-band">
        <div className="shell vertical-inner"><p>Built for</p><strong>Gambling</strong><i /><strong>Betting</strong><i /><strong>Exchange</strong><span>FTD · STD · TD · TRUSTED</span></div>
      </section>

      <section className="offers shell" id="offers">
        <div className="section-title">
          <div><p>АКТИВНЫЕ НАПРАВЛЕНИЯ · AUGUST 2026</p><h2>Офферы, которые<br />можно запускать.</h2></div>
          <p>Ставки и лимиты актуальны на момент публикации. Финальную доступность подтверждаем перед стартом.</p>
        </div>
        <div className="filter-bar" aria-label="Фильтр офферов по региону">
          {filters.map((filter) => <button type="button" aria-pressed={activeFilter === filter.id} className={activeFilter === filter.id ? 'active' : ''} onClick={() => setActiveFilter(filter.id)} key={filter.id}>{filter.label}</button>)}
        </div>
        <div className="catalog-meta"><span>ROUTE CATALOGUE</span><b>{visibleOffers.length.toString().padStart(2,'0')} OFFERS</b></div>
        <div className="offer-grid">
          {visibleOffers.map((offer) => (
            <article className={`offer-card tone-${offer.tone}`} key={offer.code}>
              <div className="offer-top"><span>{offer.code}</span><b><i>{offer.flag}</i>{offer.geo}</b></div>
              <div><h3>{offer.title}</h3><p>{offer.description}</p></div>
              <div className="offer-rate"><small>RATE</small><strong>{offer.rate}</strong></div>
              <div className="tag-row">{offer.meta.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="solutions" id="solutions">
        <div className="shell">
          <div className="section-title section-title-dark">
            <div><p>MERCHANT-READY · NEW / PRIORITY</p><h2>Решения<br />в работе.</h2></div>
            <p>Продуктовые сценарии для быстрого запуска: готовая форма, link или полноценная H2H-интеграция.</p>
          </div>
          <div className="solutions-grid">
            {solutions.map((solution,index) => (
              <article className="solution-card" key={solution.code}>
                <div className="solution-head"><span>{solution.code}</span><b>0{index+1}</b></div>
                <div><h3>{solution.title}</h3><p>{solution.text}</p></div>
                <div className="tag-row">{solution.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="terms shell" id="terms">
        <div className="section-title">
          <div><p>ПОДКЛЮЧЕНИЕ И ОПЕРАЦИИ</p><h2>Понятные<br />условия.</h2></div>
          <p>Подбираем маршрут под GEO, вертикаль, объем и качество трафика. Подключаем без лишней бюрократии.</p>
        </div>
        <div className="terms-grid">
          {terms.map((term) => <article className="term-card" key={term.number}><span>{term.number}</span><p>{term.label}</p><h3>{term.value}</h3><small>{term.text}</small></article>)}
        </div>
      </section>

      <section className="cta shell" id="contact">
        <div className="cta-copy"><p>READY TO START?</p><h2>Давайте подберем<br />рабочий маршрут.</h2><span>Пришлите GEO, вертикаль, дневной объем и тип трафика — вернемся с доступностью и финальными условиями.</span></div>
        <div className="cta-actions"><a className="button button-black" href="https://t.me/psp_coo" target="_blank" rel="noreferrer">Написать в Telegram <span>↗</span></a><a className="button button-white" href="mailto:info@fynzah.com">info@fynzah.com</a></div>
        <div className="cta-orbit" aria-hidden="true"><strong>15</strong><small>ACTIVE<br />OFFERS</small></div>
      </section>

      <footer className="site-footer shell"><a className="brand" href="#top">fynzah<span>.</span></a><p>Payment routes · August 2026</p><span>© Fynzah 2024–2026</span></footer>
    </main>
  );
}
