const siteUrl = "https://mahoroba-teppanyaki-okinawa.vercel.app";
const fullName = "mahoroba 鉄板 沖縄-Teppanyaki Steak&Wine Bar";
const phone = "098-917-2348";
const address = "沖縄県那覇市松山２-10-13 松山沖商マンション１F";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=mahoroba%20%E9%89%84%E6%9D%BF%20%E6%B2%96%E7%B8%84%20%E6%B2%96%E7%B8%84%E7%9C%8C%E9%82%A3%E8%A6%87%E5%B8%82%E6%9D%BE%E5%B1%B12-10-13";
const reserveUrl = "https://www.hotpepper.jp/strJ001162612/yoyaku/";
const officialUrl = "https://teppanokonomiyakihasuokinawaten.owst.jp/";
const instagramUrl = "https://www.instagram.com/mahoroba.teppan.okinawa/";

const faqs = [
  {
    q: "mahoroba 鉄板 沖縄はどこにありますか？",
    a: `${address}にあります。那覇市松山エリアの1階店舗です。`,
  },
  {
    q: "最寄り駅からのアクセスは？",
    a: "ゆいレール美栄橋駅から徒歩10分です。松山交差点をローソン方向へ入り、2本目を右折します。",
  },
  {
    q: "営業時間と定休日は？",
    a: "月曜から日曜、祝日・祝前日とも17:00〜翌3:00です。料理ラストオーダーは翌2:00、ドリンクは翌2:30。定休日はありません。",
  },
  {
    q: "予約はできますか？",
    a: "オンライン予約または電話で予約できます。コースや個室を希望する場合は、事前の空席確認がおすすめです。",
  },
  {
    q: "どのような料理を楽しめますか？",
    a: "A5石垣牛のサーロインやフィレ、沖縄県産熟成和牛、季節の焼き野菜、魚介、焼きそばなどの鉄板料理を提供しています。",
  },
  {
    q: "個室やカウンター席はありますか？",
    a: "個室、テーブル席、目の前で調理を楽しめるカウンター席があります。総席数は34席です。",
  },
  {
    q: "駐車場はありますか？",
    a: "専用駐車場はありません。周辺のコインパーキングをご利用ください。",
  },
  {
    q: "Can I make a reservation?",
    a: "Yes. Reservations are available online through Hot Pepper Gourmet or by phone at 098-917-2348.",
  },
];

const areasJa = [
  "mahoroba 鉄板 沖縄",
  "まほろば てっぱん おきなわ",
  "那覇",
  "那覇市",
  "松山",
  "那覇松山",
  "美栄橋駅",
  "県庁前駅",
  "国際通り周辺",
  "久茂地周辺",
  "沖縄県",
  "沖縄本島",
];
const intentsJa = [
  "鉄板焼き",
  "ステーキ",
  "ワインバー",
  "A5石垣牛",
  "石垣牛サーロイン",
  "石垣牛フィレ",
  "沖縄県産熟成和牛",
  "季節の焼き野菜",
  "鉄板焼きコース",
  "オンライン予約",
  "電話予約",
  "営業時間",
  "深夜営業",
  "アクセス",
  "個室",
  "カウンター席",
  "記念日コース",
  "ワインと鉄板料理",
];
const relatedJa = areasJa.flatMap((area) => intentsJa.map((intent) => `${area} ${intent}`));

const areasEn = [
  "Mahoroba Teppanyaki Okinawa",
  "mahoroba Teppanyaki Steak and Wine Bar",
  "Naha",
  "Naha City",
  "Matsuyama Naha",
  "Miebashi Station",
  "near Miebashi Station",
  "near Kokusai Street",
  "near Kumoji",
  "Okinawa",
  "Okinawa Island",
  "Naha nightlife district",
];
const intentsEn = [
  "teppanyaki restaurant",
  "steak restaurant",
  "wine bar",
  "A5 Ishigaki beef",
  "Ishigaki beef sirloin",
  "Ishigaki beef fillet",
  "Okinawan aged wagyu",
  "seasonal grilled vegetables",
  "teppanyaki course",
  "online reservation",
  "restaurant reservation",
  "opening hours",
  "open until 3 am",
  "directions",
  "private dining room",
  "counter seating",
  "anniversary course",
  "steak and wine",
];
const relatedEn = areasEn.flatMap((area) => intentsEn.map((intent) => `${area} ${intent}`));

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteUrl}/#restaurant`,
  name: fullName,
  alternateName: ["mahoroba 鉄板 沖縄", "まほろば てっぱん おきなわ", "Mahoroba Teppanyaki Okinawa"],
  url: siteUrl,
  image: [
    `${siteUrl}/images/official-08.webp`,
    `${siteUrl}/images/official-06.webp`,
    `${siteUrl}/images/official-02.jpg`,
  ],
  description:
    "那覇市松山でA5石垣牛、沖縄県産熟成和牛、旬の野菜、ワインを楽しめる鉄板焼き店。",
  telephone: "+81-98-917-2348",
  address: {
    "@type": "PostalAddress",
    streetAddress: "松山２-10-13 松山沖商マンション１F",
    addressLocality: "那覇市",
    addressRegion: "沖縄県",
    postalCode: "900-0032",
    addressCountry: "JP",
  },
  servesCuisine: ["鉄板焼き", "ステーキ", "日本料理", "ワイン"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "03:00",
    },
  ],
  hasMenu: `${officialUrl}foods`,
  acceptsReservations: reserveUrl,
  sameAs: [officialUrl, instagramUrl, reserveUrl, mapUrl],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${fullName} トップ`}>
          <span className="brand-main">mahoroba</span>
          <span className="brand-sub">TEPPANYAKI · OKINAWA</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#experience">特徴</a>
          <a href="#menu">料理</a>
          <a href="#information">店舗情報</a>
          <a href="#access">アクセス</a>
          <a className="nav-reserve" href={reserveUrl} target="_blank" rel="noreferrer">
            予約 <ArrowIcon />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media">
            <img
              src="/images/official-08.webp"
              alt="mahoroba 鉄板 沖縄の石垣牛と旬の食材を使った鉄板焼きコース"
              width="750"
              height="600"
              fetchPriority="high"
            />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">TEPPANYAKI · STEAK · WINE</p>
            <h1 id="hero-title">
              沖縄の実りを、
              <br />
              鉄板の上で。
            </h1>
            <p className="hero-name">mahoroba 鉄板 沖縄</p>
            <p className="hero-lead">
              A5石垣牛、沖縄県産の熟成和牛、季節の野菜。
              <br />
              素材と向き合う鉄板焼きを、ワインとともに。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={reserveUrl} target="_blank" rel="noreferrer">
                オンライン予約 <ArrowIcon />
              </a>
              <a className="button button-ghost" href={`tel:${phone.replaceAll("-", "")}`}>
                {phone}
              </a>
            </div>
            <div className="hero-facts" aria-label="店舗概要">
              <span>那覇 · 松山</span>
              <span>17:00—03:00</span>
              <span>美栄橋駅 徒歩10分</span>
            </div>
          </div>
        </section>

        <section className="intro section" id="experience">
          <div className="section-number">01</div>
          <div className="section-heading">
            <p className="eyebrow">THE EXPERIENCE</p>
            <h2>火入れを待つ時間も、<br />一皿の一部になる。</h2>
          </div>
          <div className="intro-copy">
            <p>
              那覇市松山にある「mahoroba 鉄板 沖縄-Teppanyaki Steak&amp;Wine Bar」は、肉、魚介、野菜を鉄板で仕上げるレストランです。カウンターでは目の前の調理を眺めながら、個室では落ち着いて食事を楽しめます。
            </p>
            <p>
              メインにはA5ランクの石垣牛サーロインやフィレ、沖縄県産熟成和牛を用意。各地から届く季節の野菜やワインと合わせ、コースでも一品料理でも注文できます。
            </p>
          </div>
          <div className="feature-grid">
            <article>
              <span className="feature-index">I</span>
              <h3>A5石垣牛</h3>
              <p>サーロインとフィレを100gから。部位ごとの旨みと食感を鉄板で引き出します。</p>
            </article>
            <article>
              <span className="feature-index">II</span>
              <h3>旬の一皿</h3>
              <p>沖縄県産の熟成和牛に加え、季節に合わせて各地から届く野菜を焼き上げます。</p>
            </article>
            <article>
              <span className="feature-index">III</span>
              <h3>深夜まで</h3>
              <p>毎日17時から翌3時まで営業。料理は翌2時、ドリンクは翌2時30分がラストオーダーです。</p>
            </article>
          </div>
        </section>

        <section className="visual-break" aria-label="店内の鉄板カウンター">
          <img
            src="/images/official-05.jpg"
            alt="那覇市松山 mahoroba 鉄板 沖縄の鉄板カウンター席"
            width="600"
            height="600"
            loading="lazy"
          />
          <p>COUNTER<br />&amp; PRIVATE<br />DINING</p>
        </section>

        <section className="menu section" id="menu">
          <div className="section-number">02</div>
          <div className="section-heading menu-heading">
            <p className="eyebrow">MENU SELECTION</p>
            <h2>鉄板から届く、<br />沖縄の味わい。</h2>
            <p className="price-note">価格は税込。仕入れ状況により内容が変わる場合があります。</p>
          </div>
          <div className="menu-feature">
            <img
              src="/images/official-06.webp"
              alt="mahoroba 鉄板 沖縄で焼き上げるA5石垣牛ステーキ"
              width="600"
              height="600"
              loading="lazy"
            />
            <div>
              <p className="eyebrow">SIGNATURE</p>
              <h3>A5石垣牛<br />サーロインステーキ</h3>
              <p className="menu-price">100g　¥11,500</p>
              <p>余分な脂や筋を整え、中心部分を鉄板で焼き上げるサーロイン。石垣牛の旨みを味わえる一皿です。</p>
            </div>
          </div>
          <div className="menu-list">
            <article>
              <div><h3>A5石垣牛フィレステーキ</h3><p>A5 Ishigaki Beef Fillet · 100g</p></div>
              <strong>¥14,500</strong>
            </article>
            <article>
              <div><h3>沖縄県産熟成和牛フィレ</h3><p>Okinawan Aged Wagyu Fillet · 100g</p></div>
              <strong>¥6,500</strong>
            </article>
            <article>
              <div><h3>焼き野菜盛り合わせ</h3><p>Assorted Seasonal Grilled Vegetables</p></div>
              <strong>¥2,200</strong>
            </article>
            <article>
              <div><h3>焼きそば</h3><p>Teppan-fried Noodles · Medium</p></div>
              <strong>¥1,200</strong>
            </article>
          </div>
          <div className="course-grid">
            <article>
              <p>7 DISHES</p>
              <h3>まほろばコース</h3>
              <strong>お一人様 ¥9,900</strong>
            </article>
            <article>
              <p>7 DISHES</p>
              <h3>石垣牛コース</h3>
              <strong>お一人様 ¥16,500</strong>
            </article>
            <article>
              <p>10 DISHES · FROM 2 GUESTS</p>
              <h3>アニバーサリーコース</h3>
              <strong>お一人様 ¥15,000</strong>
            </article>
          </div>
          <a className="text-link" href={`${officialUrl}foods`} target="_blank" rel="noreferrer">
            公式メニューを見る <ArrowIcon />
          </a>
        </section>

        <section className="space section">
          <div className="section-number">03</div>
          <div className="space-gallery">
            <img src="/images/official-02.jpg" alt="mahoroba 鉄板 沖縄の個室" width="720" height="720" loading="lazy" />
            <img src="/images/official-04.jpg" alt="mahoroba 鉄板 沖縄の鉄板を囲む席" width="600" height="600" loading="lazy" />
            <img src="/images/official-03.webp" alt="那覇市松山の鉄板焼き店 mahoroba 鉄板 沖縄の店内" width="600" height="600" loading="lazy" />
          </div>
          <div className="space-copy">
            <p className="eyebrow">THE SPACE</p>
            <h2>カウンターの臨場感。<br />個室の静けさ。</h2>
            <p>全34席。鉄板を囲むカウンター、テーブル席、2〜6名向けの個室があります。最大25名まで対応する個室利用については店舗へご相談ください。</p>
          </div>
        </section>

        <section className="info section" id="information">
          <div className="section-number">04</div>
          <div className="section-heading">
            <p className="eyebrow">INFORMATION</p>
            <h2>店舗情報</h2>
          </div>
          <dl className="info-list">
            <div><dt>正式店名</dt><dd>{fullName}</dd></div>
            <div><dt>読み方</dt><dd>まほろば てっぱん おきなわ</dd></div>
            <div><dt>住所</dt><dd>〒900-0032<br />{address}</dd></div>
            <div><dt>電話番号</dt><dd><a href={`tel:${phone.replaceAll("-", "")}`}>{phone}</a></dd></div>
            <div><dt>営業時間</dt><dd>月〜日・祝日・祝前日 17:00〜翌3:00<br /><small>料理 L.O. 翌2:00／ドリンク L.O. 翌2:30</small></dd></div>
            <div><dt>定休日</dt><dd>なし</dd></div>
            <div><dt>席</dt><dd>34席／カウンター・テーブル・個室あり</dd></div>
            <div><dt>支払い</dt><dd>クレジットカード（VISA、Mastercard、American Express、Diners Club、JCB、銀聯）、電子マネー（iD）</dd></div>
            <div><dt>料金</dt><dd>サービス料あり</dd></div>
            <div><dt>喫煙</dt><dd>全席喫煙可</dd></div>
            <div><dt>駐車場</dt><dd>専用駐車場なし（周辺にコインパーキングあり）</dd></div>
            <div><dt>お子様連れ</dt><dd>可。全席喫煙可の案内があるため、利用条件は予約前に店舗へご確認ください。</dd></div>
          </dl>
          <p className="info-caution">営業状況やメニューは変更される場合があります。来店前に公式ページまたは店舗へご確認ください。</p>
        </section>

        <section className="access section" id="access">
          <div className="section-number">05</div>
          <div className="access-card">
            <div>
              <p className="eyebrow">ACCESS</p>
              <h2>那覇・松山へ。</h2>
              <p className="access-address">{address}</p>
              <p>ゆいレール「美栄橋駅」から徒歩10分。松山交差点をローソン方向へ入り、2本目を右折します。</p>
              <div className="access-actions">
                <a className="button button-primary" href={mapUrl} target="_blank" rel="noreferrer">Google マップ <ArrowIcon /></a>
                <a className="text-link" href={reserveUrl} target="_blank" rel="noreferrer">空席確認・予約 <ArrowIcon /></a>
              </div>
            </div>
            <div className="map-graphic" aria-hidden="true">
              <span className="station">美栄橋駅</span>
              <span className="route-line" />
              <span className="pin">M</span>
              <span className="walk">徒歩10分</span>
            </div>
          </div>
        </section>

        <section className="english section" id="english">
          <div className="section-number">EN</div>
          <div className="section-heading">
            <p className="eyebrow">ENGLISH GUIDE</p>
            <h2>Mahoroba Teppanyaki Okinawa</h2>
          </div>
          <div className="english-grid">
            <div>
              <p>
                {fullName} is a teppanyaki restaurant in Matsuyama, Naha. The restaurant serves A5 Ishigaki beef sirloin and fillet, Okinawan aged wagyu, seafood, seasonal grilled vegetables, and a selection of wines. Guests can choose counter seating, tables, or private dining rooms.
              </p>
              <p>
                It is a 10-minute walk from Miebashi Station on the Yui Rail. The restaurant opens daily from 5:00 p.m. to 3:00 a.m. Food last order is at 2:00 a.m. and drink last order is at 2:30 a.m. There are no regular closing days.
              </p>
            </div>
            <dl>
              <div><dt>Address</dt><dd>1F Matsuyama Okisho Mansion, 2-10-13 Matsuyama, Naha, Okinawa 900-0032, Japan</dd></div>
              <div><dt>Hours</dt><dd>Daily, 5:00 p.m.–3:00 a.m.</dd></div>
              <div><dt>Reservations</dt><dd>Online or by phone: <a href={`tel:${phone.replaceAll("-", "")}`}>{phone}</a></dd></div>
              <div><dt>Directions</dt><dd>10-minute walk from Miebashi Station</dd></div>
              <div><dt>Parking</dt><dd>No dedicated parking lot</dd></div>
            </dl>
          </div>
          <p className="language-note">An English-language menu or English-speaking staff has not been confirmed. Please contact the restaurant directly for language assistance.</p>
        </section>

        <section className="faq section" id="faq">
          <div className="section-number">06</div>
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>よくある質問</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}<span aria-hidden="true">＋</span></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="links section" aria-labelledby="links-title">
          <div className="section-number">07</div>
          <div className="section-heading">
            <p className="eyebrow">OFFICIAL LINKS</p>
            <h2 id="links-title">予約・公式情報</h2>
          </div>
          <div className="link-grid">
            <a href={reserveUrl} target="_blank" rel="noreferrer"><span>RESERVATION</span>オンライン予約 <ArrowIcon /></a>
            <a href={officialUrl} target="_blank" rel="noreferrer"><span>OFFICIAL</span>公式店舗ページ <ArrowIcon /></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer"><span>SOCIAL</span>Instagram <ArrowIcon /></a>
            <a href="https://tabelog.com/okinawa/A4701/A470101/47017379/" target="_blank" rel="noreferrer"><span>RESTAURANT GUIDE</span>食べログ <ArrowIcon /></a>
          </div>
        </section>

        <section className="related section" aria-labelledby="related-title">
          <div className="section-number">08</div>
          <div className="section-heading">
            <p className="eyebrow">RELATED SEARCHES</p>
            <h2 id="related-title">関連検索語</h2>
          </div>
          <div className="related-details">
            <details>
              <summary>日本語の関連語を見る <span>{relatedJa.length}語</span></summary>
              <div className="keyword-cloud">{relatedJa.map((word) => <span key={word}>{word}</span>)}</div>
            </details>
            <details>
              <summary>View related searches in English <span>{relatedEn.length} terms</span></summary>
              <div className="keyword-cloud" lang="en">{relatedEn.map((word) => <span key={word}>{word}</span>)}</div>
            </details>
          </div>
        </section>

        <section className="closing">
          <img src="/images/official-01.jpg" alt="mahoroba 鉄板 沖縄の鉄板料理とワイン" width="320" height="320" loading="lazy" />
          <div>
            <p className="eyebrow">RESERVE YOUR TABLE</p>
            <h2>今夜の一席を。</h2>
            <div className="hero-actions">
              <a className="button button-light" href={reserveUrl} target="_blank" rel="noreferrer">オンライン予約 <ArrowIcon /></a>
              <a className="button button-outline-light" href={`tel:${phone.replaceAll("-", "")}`}>{phone}</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-main">mahoroba</span>
          <span>鉄板 沖縄 — Teppanyaki Steak&amp;Wine Bar</span>
        </div>
        <address>
          〒900-0032 {address}<br />
          <a href={`tel:${phone.replaceAll("-", "")}`}>{phone}</a>
        </address>
        <div className="footer-links">
          <a href={mapUrl} target="_blank" rel="noreferrer">Google Maps</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          <a href={officialUrl} target="_blank" rel="noreferrer">Official</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} {fullName}</p>
      </footer>
    </>
  );
}
