'use client';

import { useState } from 'react';

type Category = 'all' | 'russia' | 'cross-border';

const telegramHref = (label: string) => `https://t.me/psp_assistant?text=${encodeURIComponent(`Привет! Интересует решение: ${label}`)}`;

const offers = [
  { category:'russia', geo:'Russia', flag:'ru', code:'RU · 01', title:'C2C / SBP', description:'Основной RUB pay-in для Gambling, Betting и Exchange. Банки T1–T3.', rate:'13.5%', meta:['5k–150k','RUB','Gambling / Betting / Exchange'], tone:'pink' },
  { category:'russia', geo:'Russia', flag:'ru', code:'RU · 02', title:'SBP / C2C + PDF', description:'Прием по номеру карты и СБП с подтверждением через PDF-чек.', rate:'14%', meta:['1k–200k','RUB','PDF receipt'], tone:'black' },
  { category:'russia', geo:'Russia', flag:'ru', code:'RU · 03', title:'NSPK', description:'QR НСПК с высоким лимитом: локальный и мультитрансфер.', rate:'16%', meta:['3k–200k','QR','H2H'], tone:'yellow' },
  { category:'russia', geo:'Russia', flag:'ru', code:'RU · 04', title:'Sber / Gazprom QR', description:'Внутрибанковские QR-маршруты Сбер–Сбер и Газпром–Газпром.', rate:'14.5%', meta:['100–150k','QR','Gambling / Betting'], tone:'gray' },
  { category:'russia', geo:'Russia', flag:'ru', code:'RU · 05', title:'PSB Ecom', description:'Прямой RUB pay-in через ПСБ для Gambling и Betting трафика.', rate:'14%', meta:['1k–150k','RUB','Pay-in'], tone:'pink' },
  { category:'russia', geo:'Russia', flag:'ru', code:'RU · 06', title:'Alfa → Alfa', description:'Внутрибанковский перевод для Gambling и Betting трафика.', rate:'13.5%', meta:['10k–150k','RUB','Pay-in'], tone:'black' },
  { category:'cross-border', geo:'Russia / Vietnam', flag:'ru+vn', code:'XBD · 01', title:'Sber / VTB QR', description:'Cross-border QR через Сбербанк и ВТБ с расчетом в RUB.', rate:'13%', meta:['100–150k','RUB','Gambling / Betting'], tone:'gray' },
  { category:'cross-border', geo:'Russia / Tajikistan', flag:'ru+tj', code:'XBD · 02', title:'YouMoney', description:'Cross-border прием через YouMoney с расчетом в RUB.', rate:'12.5%', meta:['1k–150k','RUB','Pay-in'], tone:'pink' },
  { category:'cross-border', geo:'Russia / Abkhazia', flag:'ru+abkhazia', code:'XBD · 03', title:'Transgran Abkhazia', description:'Cross-border RUB-маршрут через трансграничный перевод.', rate:'12.5%', meta:['1k–150k','RUB','Pay-in'], tone:'black' },
  { category:'cross-border', geo:'Kazakhstan', flag:'kz', code:'XBD · 04', title:'KZT Cross-border', description:'Трансграничные маршруты из Казахстана: Грузия, Киргизия — постепенно расширяем.', rate:'contact us', meta:['KZT','Georgia','Kyrgyzstan'], tone:'yellow' },
  { category:'cross-border', geo:'South Korea', flag:'kr', code:'XBD · 05', title:'Korea Bank Transfer', description:'Прием через банковский перевод и карты в Южной Корее.', rate:'contact us', meta:['KRW','Bank transfer','Cards'], tone:'gray' },
  { category:'cross-border', geo:'Argentina', flag:'ar', code:'XBD · 06', title:'Argentina P2P + Wallets', description:'Локальные P2P-переводы и платежные кошельки для Gambling и Betting трафика.', rate:'contact us', meta:['ARS','P2P','Local wallets'], tone:'pink' },
] as const;

const filters: { id: Category; label: string }[] = [
  { id:'all', label:'Все · 12' },
  { id:'russia', label:'Россия · 6' },
  { id:'cross-border', label:'Cross-border · 6' },
];

const terms = [
  { number:'01', label:'Settlement', value:'Rapira / USDT', text:'T+0 доступен на части маршрутов — не гарантирован на всех.' },
  { number:'02', label:'Fees', value:'By route', text:'Комиссия зависит от маршрута и объема трафика.' },
  { number:'03', label:'Integration', value:'H2H / link', text:'Часть маршрутов доступна только по H2H.' },
  { number:'04', label:'Traffic', value:'GB / BT / EX', text:'Gambling, Betting и Exchange.' },
  { number:'05', label:'Appeals', value:'API', text:'Апелляции по API доступны на актуальных маршрутах.' },
  { number:'06', label:'Availability', value:'Live check', text:'Собственный чекер отслеживает доступность маршрутов в реальном времени.' },
];

const wantedGeos = [
  { code:'KR', flag:'kr', region:'Asia', title:'Южная Корея', currency:'KRW', text:'Ищем локальное решение для приема через KakaoPay.', tags:['KakaoPay','Local methods'], tone:'pink' },
  { code:'KE', flag:'ke', region:'Africa', title:'Кения', currency:'KES', text:'В поиске mobile money, M-Pesa и локальных банковских маршрутов.', tags:['Mobile money','Bank transfer'], tone:'black' },
  { code:'ET', flag:'et', region:'Africa', title:'Эфиопия', currency:'ETB', text:'Нужны mobile money и локальные pay-in / payout решения.', tags:['Mobile money','In / out'], tone:'yellow' },
  { code:'IR', flag:'ir', region:'MENA', title:'Иран', currency:'IRR', text:'Ищем local cards, bank transfer и локальные платежные решения.', tags:['Local cards','Bank transfer'], tone:'gray' },
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
          <a href="#wanted">В поиске</a>
          <a href="#terms">Условия</a>
        </nav>
        <div className="header-actions">
          <span className="issue">AUG ’26</span>
          <a className="button button-pink button-small" href="#contact">Связаться <span>↗</span></a>
        </div>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="live-label"><i /> 12 ACTIVE OFFERS</div>
          <h1>Платежные<br />офферы <em>без границ.</em></h1>
          <p>Актуальные pay-in решения для Gambling, Betting и Exchange по России и cross-border направлениям.</p>
          <div className="hero-actions">
            <a className="button button-pink" href="#offers">Смотреть офферы <span>↓</span></a>
            <a className="button button-gray" href="#contact">Обсудить подключение</a>
          </div>
        </div>
        <div className="hero-product" aria-label="Панель активных платежных направлений">
          <div className="product-glow" />
          <div className="product-card">
            <div className="product-head"><span className="f-mark">F</span><small>ROUTE CONTROL</small><b>LIVE</b></div>
            <div className="product-stat"><span>Active routes</span><strong>12</strong><em>7 GEO</em></div>
            <div className="product-bars">{[42,67,51,79,63,96,72,88,58,100].map((height,index) => <i key={index} style={{height:`${height}%`}} />)}</div>
            <div className="product-foot"><span><small>MAX RATE</small><b>16%</b></span><span><small>SETTLE</small><b>T+0</b></span><span><small>FEES</small><b>BY ROUTE</b></span></div>
          </div>
          <div className="float-note note-one"><span>↗</span><div><small>NSPK QR</small><b>up to 200k</b></div></div>
          <div className="float-note note-two"><span>✓</span><div><small>Settlement</small><b>Rapira / USDT</b></div></div>
        </div>
      </section>

      <section className="vertical-band">
        <div className="shell vertical-inner"><p>Built for</p><strong>Gambling</strong><i /><strong>Betting</strong><i /><strong>Exchange</strong><span>H2H · LINK · API APPEALS</span></div>
      </section>

      <section className="offers shell" id="offers">
        <div className="section-title">
          <div><p>АКТИВНЫЕ НАПРАВЛЕНИЯ · AUGUST 2026</p><h2>Наши решения,<br />которые можно запускать.</h2></div>
          <p>Ставки и лимиты актуальны на момент публикации. Финальную доступность подтверждаем перед стартом.</p>
        </div>
        <div className="filter-bar" aria-label="Фильтр офферов по региону">
          {filters.map((filter) => <button type="button" aria-pressed={activeFilter === filter.id} className={activeFilter === filter.id ? 'active' : ''} onClick={() => setActiveFilter(filter.id)} key={filter.id}>{filter.label}</button>)}
        </div>
        <div className="catalog-meta"><span>ROUTE CATALOGUE</span><b>{visibleOffers.length.toString().padStart(2,'0')} OFFERS</b></div>
        <div className="offer-grid">
          {visibleOffers.map((offer) => (
            <article className={`offer-card tone-${offer.tone}`} key={offer.code}>
              <div className="offer-top"><span>{offer.code}</span><b><span className="geo-flags" aria-hidden="true">{offer.flag.split('+').map((flag) => flag === 'abkhazia' ? <i className="flag-abkhazia" key={flag} /> : <i className={`fi fi-${flag}`} key={flag} />)}</span>{offer.geo}</b></div>
              <div><h3>{offer.title}</h3><p>{offer.description}</p></div>
              <div className="offer-rate">
                <small>{offer.rate === 'contact us' ? 'AVAILABILITY' : 'RATE'}</small>
                {offer.rate === 'contact us' ? <a className="rate-contact" href={telegramHref(`${offer.geo} — ${offer.title}`)} target="_blank" rel="noreferrer">Contact us <span>↗</span></a> : <strong>{offer.rate}</strong>}
              </div>
              <div className="tag-row">{offer.meta.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {offer.rate !== 'contact us' && <a className="rate-contact offer-connect" href={telegramHref(`${offer.geo} — ${offer.title}`)} target="_blank" rel="noreferrer">Написать <span>↗</span></a>}
            </article>
          ))}
        </div>
      </section>

      <section className="wanted" id="wanted">
        <div className="shell">
          <div className="section-title wanted-title">
            <div><p>CONTACT US · НОВЫЕ GEO</p><h2>Направления,<br />которые мы ищем.</h2></div>
            <p>Открыты к предложениям от провайдеров и команд с работающей локальной инфраструктурой.</p>
          </div>
          <div className="wanted-grid">
            {wantedGeos.map((geo) => (
              <article className={`wanted-card wanted-${geo.tone}`} key={geo.code}>
                <div className="wanted-head"><span><i className={`fi fi-${geo.flag}`} aria-hidden="true" /><small>{geo.code}</small></span><b><i /> SCOUTING</b></div>
                <div className="wanted-geo"><small>{geo.region} · {geo.currency}</small><h3>{geo.title}</h3><p>{geo.text}</p></div>
                <div className="wanted-bottom"><div className="tag-row">{geo.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><b>CONTACT US ↗</b></div>
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
        <div className="cta-actions"><a className="button button-black" href="https://t.me/psp_assistant" target="_blank" rel="noreferrer">@psp_assistant <span>↗</span></a><a className="button button-white" href="mailto:info@fynzah.com">info@fynzah.com</a></div>
        <div className="cta-orbit" aria-hidden="true"><strong>12</strong><small>ACTIVE<br />OFFERS</small></div>
      </section>

      <footer className="site-footer shell"><a className="brand" href="#top">fynzah<span>.</span></a><p>Payment routes · August 2026</p><span>© Fynzah 2024–2026</span></footer>
    </main>
  );
}
