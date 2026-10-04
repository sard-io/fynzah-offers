export const geos = [
  { id:'ru', label:'РФ' },
  { id:'kr', label:'Корея' },
  { id:'vn', label:'Вьетнам' },
  { id:'tj', label:'Таджикистан' },
  { id:'abkhazia', label:'Абхазия' },
  { id:'kz', label:'Казахстан' },
  { id:'kg', label:'Кыргызстан' },
  { id:'uz', label:'Узбекистан' },
  { id:'ar', label:'Аргентина' },
  { id:'tr', label:'Турция' },
  { id:'tz', label:'Танзания' },
  { id:'ke', label:'Кения' },
  { id:'in', label:'Индия' },
  { id:'bd', label:'Бангладеш' },
  { id:'br', label:'Бразилия' },
  { id:'az', label:'Азербайджан' },
] as const;

type Geo = (typeof geos)[number]['id'];
export type GeoFilter = 'all' | Geo;

type OfferRates = { payIn: string; payOut: string };

type Offer = {
  geo: string;
  geos: Geo[];
  code: string;
  title: string;
  description: string;
  rate?: string;
  meta: string[];
  tone: 'pink' | 'black' | 'yellow' | 'gray';
  rates?: OfferRates;
};

export const offers: Offer[] = [
  { geo:'Russia', geos:['ru'], code:'RU · 01', title:'C2C / SBP', description:'Основной RUB pay-in для Gambling, Betting и Exchange. Банки T1–T3.', rate:'13.5%', meta:['5k–150k','RUB','Gambling / Betting / Exchange'], tone:'pink' },
  { geo:'Russia', geos:['ru'], code:'RU · 02', title:'SBP / C2C + PDF', description:'Прием по номеру карты и СБП с подтверждением через PDF-чек.', rate:'14%', meta:['1k–200k','RUB','PDF receipt'], tone:'black' },
  { geo:'Russia', geos:['ru'], code:'RU · 03', title:'NSPK', description:'QR НСПК с высоким лимитом: локальный и мультитрансфер.', rate:'16%', meta:['3k–200k','QR','H2H'], tone:'yellow' },
  { geo:'Russia', geos:['ru'], code:'RU · 04', title:'Sber / Gazprom QR', description:'Внутрибанковские QR-маршруты Сбер–Сбер и Газпром–Газпром.', rate:'14.5%', meta:['100–150k','QR','Gambling / Betting'], tone:'gray' },
  { geo:'Russia', geos:['ru'], code:'RU · 05', title:'PSB Ecom', description:'Прямой RUB pay-in через ПСБ для Gambling и Betting трафика.', rate:'14%', meta:['1k–150k','RUB','Pay-in'], tone:'pink' },
  { geo:'Russia', geos:['ru'], code:'RU · 06', title:'Alfa → Alfa', description:'Внутрибанковский перевод для Gambling и Betting трафика.', rate:'13.5%', meta:['10k–150k','RUB','Pay-in'], tone:'black' },
  { geo:'Russia', geos:['ru'], code:'RU · 07', title:'Выплаты РФ · Out RU', description:'SLA от 3 часов. Дробление заявки на 3 и более выплат.', meta:['RUB','Pay-out','Парс Rapira'], tone:'yellow' },
  { geo:'Russia / Vietnam', geos:['ru','vn'], code:'XBD · 01', title:'Sber / VTB QR', description:'Cross-border QR через Сбербанк и ВТБ с расчетом в RUB.', rate:'13%', meta:['100–150k','RUB','Gambling / Betting'], tone:'gray' },
  { geo:'Russia / Tajikistan', geos:['ru','tj'], code:'XBD · 02', title:'YouMoney', description:'Cross-border прием через YouMoney с расчетом в RUB.', rate:'12.5%', meta:['1k–150k','RUB','Pay-in'], tone:'pink' },
  { geo:'Tajikistan', geos:['tj'], code:'TJ · 01', title:'МК · Таджикистан', description:'Платёжное направление МК для Таджикистана.', meta:['МК'], tone:'gray' },
  { geo:'Russia / Abkhazia', geos:['ru','abkhazia'], code:'XBD · 03', title:'Transgran Abkhazia', description:'Cross-border RUB-маршрут через трансграничный перевод.', rate:'12.5%', meta:['1k–150k','RUB','Pay-in'], tone:'black' },
  { geo:'Kazakhstan', geos:['kz'], code:'XBD · 04', title:'Казахстан · Трансгран', description:'Трансграничные переводы из Казахстана.', meta:['KZT','Трансгран'], tone:'yellow' },
  { geo:'Kazakhstan', geos:['kz'], code:'KZ · 01', title:'Казахстан · Локал', description:'Локальные платежи в Казахстане.', meta:['KZT','Local'], tone:'pink' },
  { geo:'Kazakhstan', geos:['kz'], code:'KZ · 02', title:'Казахстан · Выплаты', description:'Выплаты в Казахстане для больших объёмов.', meta:['Pay-out','Большой объём'], tone:'black' },
  { geo:'South Korea', geos:['kr'], code:'XBD · 05', title:'Korea Bank Transfer', description:'Банковские переводы через Shinhan Bank, KEB Hana Bank и IBK для Gambling и Betting.', meta:['KRW','Bank transfer','Gambling / Betting'], tone:'gray', rates:{ payIn:'8%', payOut:'3,5%' } },
  { geo:'Argentina', geos:['ar'], code:'XBD · 06', title:'Аргентина', description:'Локальные платёжные решения для Аргентины.', meta:['ARS','Local'], tone:'pink' },
  { geo:'Argentina', geos:['ar'], code:'AR · 01', title:'Аргентина · Трансгран', description:'Трансграничные переводы для Аргентины.', meta:['Трансгран'], tone:'yellow' },
  { geo:'Turkey', geos:['tr'], code:'XBD · 07', title:'Turkey Bank Transfer', description:'IBAN и банковские переводы для Gambling и Betting.', meta:['TRY','IBAN','Bank transfer'], tone:'black', rates:{ payIn:'7%', payOut:'3%' } },
  { geo:'Tanzania', geos:['tz'], code:'XBD · 08', title:'Tanzania Mobile Money', description:'Tigo Pesa, Vodacom M-Pesa и Airtel Money для iGaming, Gambling и Betting.', meta:['TZS','Mobile Money','iGaming'], tone:'yellow', rates:{ payIn:'5%', payOut:'4%' } },
  { geo:'Kenya', geos:['ke'], code:'XBD · 09', title:'Kenya Mobile Money', description:'M-Pesa и Airtel Money для iGaming, Gambling и Betting.', meta:['KES','Mobile Money','iGaming'], tone:'pink', rates:{ payIn:'5%', payOut:'4%' } },
  { geo:'Kyrgyzstan', geos:['kg'], code:'KG · 01', title:'МК · KGS', description:'Платёжное направление МК в KGS.', meta:['KGS','МК'], tone:'gray' },
  { geo:'Uzbekistan', geos:['uz'], code:'UZ · 01', title:'Узбекистан · UZS', description:'Платежи в узбекских сумах.', meta:['UZS'], tone:'black' },
  { geo:'India', geos:['in'], code:'IN · 01', title:'Индия · UPI P2C Intent', description:'Приём и выплаты через UPI P2C Intent. Ставки уточняйте в личных сообщениях.', meta:['INR','UPI','D0 / USDT'], tone:'pink' },
  { geo:'India', geos:['in'], code:'IN · 02', title:'Индия · Airtel UPI', description:'Airtel current account: UPI P2P в формате quasi-intent. Ставки уточняйте в личных сообщениях.', meta:['INR','P2P','Quasi-intent'], tone:'gray' },
  { geo:'India', geos:['in'], code:'IN · 03', title:'Индия · UPI P2P Netting', description:'Приём и выплаты через UPI P2P с неттингом. Ставки уточняйте в личных сообщениях.', meta:['INR','H2H','T+0 / USDT'], tone:'black' },
  { geo:'Bangladesh', geos:['bd'], code:'BD · 01', title:'Бангладеш · P2P', description:'Приём и выплаты через bKash и Nagad. Ставки уточняйте в личных сообщениях.', meta:['BDT','P2P','D0 / USDT'], tone:'black' },
  { geo:'Brazil', geos:['br'], code:'BR · 01', title:'Бразилия · PIX', description:'Приём и выплаты через PIX. Ставки уточняйте в личных сообщениях.', meta:['BRL','PIX','D0 / USDT'], tone:'yellow' },
  { geo:'Azerbaijan', geos:['az'], code:'AZ · 01', title:'Азербайджан', description:'Ставки и детали уточняйте в личных сообщениях.', meta:[], tone:'gray' },
];

export const filters = geos.filter((geo) => offers.some((offer) => offer.geos.includes(geo.id)));

export const geoCount = filters.length;
export const offerCount = offers.length;
