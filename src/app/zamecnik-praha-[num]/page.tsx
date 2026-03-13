import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PrahaData {
  num: number
  title: string
  district: string
  areas: string[]
  time: string
  imageUrl: string
  imageAlt: string
  imageCaption: string
  intro: string
  description: string
  coverage: string
  services: string[]
  process: { title: string; desc: string }[]
}

const prahaData: Record<string, PrahaData> = {
  '1': {
    num: 1,
    title: 'Zámečník Praha 1',
    district: 'Praha 1',
    areas: ['Staré Město', 'Nové Město', 'Malá Strana', 'Hradčany', 'Josefov'],
    time: '20–40 minut',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Charles_Bridge_Prague_-_panoramio.jpg/1200px-Charles_Bridge_Prague_-_panoramio.jpg',
    imageAlt: 'Karlův most, Praha 1',
    imageCaption: 'Praha 1 – historické centrum města',
    intro: 'Hledáte spolehlivého zámečníka v Praze 1? Zámečnictví Husák poskytuje profesionální zámečnické služby v celé Praze 1 – od Starého Města přes Malou Stranu až po Hradčany.',
    description: 'Praha 1 je historickým srdcem hlavního města. S množstvím historických budov, bytů i komerčních prostor zde denně řešíme nejrůznější zámečnické situace. Ať už jste se zabouchli v bytě na Starém Městě, potřebujete vyměnit zámek v kanceláři u Václavského náměstí, nebo hledáte zabezpečení pro váš obchod v Josefově – jsme tu pro vás.',
    coverage: 'Pokrýváme kompletně celou Prahu 1 včetně všech přilehlých ulic a lokalit. Díky centrální poloze Prahy 1 a našemu strategickému rozmístění techniků jsme schopni dorazit velmi rychle.',
    services: [
      'Otevírání zabouchnutých dveří v bytech a kancelářích',
      'Výměna cylindrických vložek a bezpečnostních zámků',
      'Montáž bezpečnostních dveří do bytových domů',
      'Otevírání a servis trezorů',
      'Instalace přístupových systémů pro SVJ',
      'Nouzové otevírání po vloupání',
    ],
    process: [
      { title: 'Zavolejte nám', desc: 'Na čísle 606 588 222 jsme dostupní nonstop.' },
      { title: 'Sdělíme cenu', desc: 'Po telefonu vám řekneme přesnou cenu a čas příjezdu.' },
      { title: 'Příjezd technika', desc: 'Zámečník dorazí do Prahy 1 do 20–40 minut.' },
      { title: 'Vyřešení problému', desc: 'Profesionálně a rychle vyřešíme váš problém.' },
    ],
  },
  '2': {
    num: 2,
    title: 'Zámečník Praha 2',
    district: 'Praha 2',
    areas: ['Vinohrady', 'Nusle', 'Vyšehrad', 'Nové Město', 'Albertov'],
    time: '20–40 minut',
    imageUrl: 'https://cdn.kudyznudy.cz/files/cf/cf3dbf26-9d71-4a88-96d1-f63c96abdf3e.jpg?v=20160609140809',
    imageAlt: 'Náměstí Míru, Praha 2',
    imageCaption: 'Praha 2 – Vinohrady a okolí',
    intro: 'Potřebujete zámečníka v Praze 2? Poskytujeme rychlé a spolehlivé zámečnické služby ve Vinohradech, Nuslích, na Vyšehradě a v celé Praze 2.',
    description: 'Praha 2 patří k nejatraktivnějším rezidenčním čtvrtím Prahy. Vinohrady s krásnými činžovními domy, klidné Nusle i historický Vyšehrad – všude zde najdete naše spokojené zákazníky. Řešíme vše od zabouchnutých dveří po kompletní zabezpečení bytů.',
    coverage: 'Naši technici pokrývají celou Prahu 2 včetně všech vedlejších ulic a lokalit. Průměrný čas příjezdu do Prahy 2 je 20 minut.',
    services: [
      'Otevírání zabouchnutých dveří',
      'Výměna bezpečnostních vložek FAB, EVVA',
      'Montáž přídavných zámků',
      'Bezpečnostní dveře pro byty',
      'Masterkey systémy pro bytové domy',
      'Servis a oprava stávajících zámků',
    ],
    process: [
      { title: 'Zavolejte nám', desc: 'Na čísle 606 588 222 jsme dostupní nonstop.' },
      { title: 'Sdělíme cenu', desc: 'Přesná cena a odhad času příjezdu po telefonu.' },
      { title: 'Příjezd technika', desc: 'Zámečník dorazí do Prahy 2 do 20–40 minut.' },
      { title: 'Vyřešení problému', desc: 'Rychlé a profesionální vyřešení situace.' },
    ],
  },
  '3': {
    num: 3,
    title: 'Zámečník Praha 3',
    district: 'Praha 3',
    areas: ['Žižkov', 'Vinohrady (část)', 'Strašnice (část)', 'Olšany', 'Jarov'],
    time: '20–40 minut',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/%C5%BDi%C5%BEkov_TV_Tower_in_Prague_2.jpg/800px-%C5%BDi%C5%BEkov_TV_Tower_in_Prague_2.jpg',
    imageAlt: 'Žižkovská televizní věž, Praha 3',
    imageCaption: 'Praha 3 – Žižkov s ikonickou televizní věží',
    intro: 'Zámečnická pohotovost v Praze 3 – Žižkov, Vinohrady, Jarov. Rychlý příjezd a profesionální služby za férové ceny.',
    description: 'Praha 3, známá především díky Žižkovu s jeho charakteristickou televizní věží, je oblíbenou rezidenční čtvrtí. Starší zástavba často vyžaduje modernizaci zabezpečení. Naši zámečníci mají bohaté zkušenosti s prací v historických i panelových domech.',
    coverage: 'Kompletní pokrytí Prahy 3 od Žižkova přes Olšany až po Jarov. Příjezd do 20–40 minut.',
    services: [
      'Nouzové otevírání dveří 24/7',
      'Výměna zámků ve starších domech',
      'Modernizace zabezpečení bytů',
      'Montáž bezpečnostních kování',
      'Otevírání trezorů a schránek',
      'Zabezpečení sklepních prostor',
    ],
    process: [
      { title: 'Zavolejte nám', desc: 'Linka 606 588 222 – nonstop.' },
      { title: 'Domluvíme detaily', desc: 'Cena a čas příjezdu ihned po telefonu.' },
      { title: 'Technik u vás', desc: 'Do 20–40 minut v celé Praze 3.' },
      { title: 'Problém vyřešen', desc: 'Profesionální servis bez kompromisů.' },
    ],
  },
  '4': {
    num: 4,
    title: 'Zámečník Praha 4',
    district: 'Praha 4',
    areas: ['Nusle', 'Podolí', 'Braník', 'Krč', 'Michle', 'Chodov', 'Modřany', 'Lhotka', 'Kunratice', 'Libuš'],
    time: '20–40 minut',
    imageUrl: 'https://d15-a.sdn.cz/d_15/c_img_gT_K/x13BFu.jpeg?fl=res,400,225,3|wrm,/teletext/teletext-watermark.png,10,10',
    imageAlt: 'Pankrác, Praha 4',
    imageCaption: 'Praha 4 – pohled na Pankrác',
    intro: 'Zámečnické služby v Praze 4 – od Nuslí a Podolí přes Krč až po Chodov a Modřany. Nonstop pohotovost.',
    description: 'Praha 4 je rozlehlý městský obvod zahrnující jak starší zástavbu v Nuslích a Michli, tak moderní sídliště na Chodově a v Modřanech. Naši zámečníci znají specifika všech typů bytů a domů v této oblasti.',
    coverage: 'Pokrýváme kompletně celou Prahu 4 – Nusle, Podolí, Braník, Krč, Michle, Chodov, Modřany, Lhotka, Kunratice i Libuš.',
    services: [
      'Otevírání bytů a domů',
      'Výměna vložek v panelových domech',
      'Bezpečnostní dveře pro rodinné domy',
      'Zabezpečení garáží a sklepů',
      'Elektronické přístupové systémy',
      'Servis zámků a kování',
    ],
    process: [
      { title: 'Kontaktujte nás', desc: 'Volejte 606 588 222 – jsme tu nonstop.' },
      { title: 'Cena předem', desc: 'Transparentní cenová nabídka po telefonu.' },
      { title: 'Rychlý příjezd', desc: 'V Praze 4 jsme do 20–40 minut.' },
      { title: 'Hotovo', desc: 'Kvalitní práce s zárukou.' },
    ],
  },
  '5': {
    num: 5,
    title: 'Zámečník Praha 5',
    district: 'Praha 5',
    areas: ['Smíchov', 'Košíře', 'Jinonice', 'Radlice', 'Hlubočepy', 'Motol', 'Stodůlky (část)', 'Barrandov'],
    time: '20–40 minut',
    imageUrl: 'https://mestskymajetek.cz/wp-content/uploads/2019/01/andel.jpg',
    imageAlt: 'Anděl, Praha 5',
    imageCaption: 'Praha 5 – Smíchov a okolí Anděla',
    intro: 'Profesionální zámečník v Praze 5 – Smíchov, Košíře, Barrandov a další. Příjezd do 20–40 minut, nonstop.',
    description: 'Praha 5 nabízí širokou škálu zástavby od historického Smíchova přes rezidenční Košíře až po moderní Barrandov. Ať bydlíte kdekoliv v Praze 5, naši zámečníci jsou připraveni vám pomoci s jakýmkoliv problémem se zámky.',
    coverage: 'Celá Praha 5 – Smíchov, Košíře, Jinonice, Radlice, Hlubočepy, Motol, část Stodůlek a Barrandov.',
    services: [
      'Nouzové otevírání dveří',
      'Výměna a montáž zámků',
      'Bezpečnostní dveře a kování',
      'Zabezpečení komerčních prostor',
      'Autoklíče a otevírání aut',
      'Poradenství v oblasti zabezpečení',
    ],
    process: [
      { title: 'Zavolejte', desc: '606 588 222 – nonstop linka.' },
      { title: 'Dohodneme se', desc: 'Cena a čas příjezdu hned.' },
      { title: 'Přijedeme', desc: 'Do Prahy 5 za 20–40 minut.' },
      { title: 'Vyřešíme', desc: 'Profesionálně a bez poškození.' },
    ],
  },
  '6': {
    num: 6,
    title: 'Zámečník Praha 6',
    district: 'Praha 6',
    areas: ['Dejvice', 'Břevnov', 'Střešovice', 'Vokovice', 'Veleslavín', 'Bubeneč', 'Liboc', 'Ruzyně', 'Nebušice'],
    time: '20–40 minut',
    imageUrl: 'https://cdn.xsd.cz/original/e84ecf84-c0cb-11e5-b379-002590604f2e.jpg',
    imageAlt: 'Vítězné náměstí (Kulaťák), Praha 6',
    imageCaption: 'Praha 6 – Dejvice a Vítězné náměstí',
    intro: 'Zámečnická pohotovost v Praze 6 – Dejvice, Břevnov, Střešovice, Vokovice a další lokality. Rychlý a spolehlivý servis.',
    description: 'Praha 6 je prestižní rezidenční čtvrť s vilovou zástavbou, ambasádami i moderními bytovými komplexy. Naši zámečníci mají zkušenosti s prací na všech typech nemovitostí v této oblasti, od historických vil po moderní smart bydlení.',
    coverage: 'Kompletní Praha 6 – Dejvice, Břevnov, Střešovice, Vokovice, Veleslavín, Bubeneč, Liboc, Ruzyně, Nebušice.',
    services: [
      'Otevírání dveří vil a bytů',
      'Bezpečnostní systémy pro vily',
      'Výměna zámků všech typů',
      'Montáž elektronických zámků',
      'Kamerové a přístupové systémy',
      'Zabezpečení ambasád a kanceláří',
    ],
    process: [
      { title: 'Kontakt', desc: 'Volejte 606 588 222 kdykoliv.' },
      { title: 'Cenová nabídka', desc: 'Férová cena sdělená předem.' },
      { title: 'Příjezd', desc: 'V Praze 6 do 20–40 minut.' },
      { title: 'Řešení', desc: 'Profesionální práce se zárukou.' },
    ],
  },
  '7': {
    num: 7,
    title: 'Zámečník Praha 7',
    district: 'Praha 7',
    areas: ['Holešovice', 'Letná', 'Troja', 'Bubeneč (část)'],
    time: '20–40 minut',
    imageUrl: 'https://info.munipolis.cz/wp-content/uploads/2020/05/Praha-7.jpg',
    imageAlt: 'Holešovice, Praha 7',
    imageCaption: 'Praha 7 – Holešovice',
    intro: 'Zámečník v Praze 7 – Holešovice, Letná, Troja. Nonstop pohotovost s příjezdem do 20–40 minut.',
    description: 'Praha 7 je dynamicky se rozvíjející městská část. Holešovice prošly v posledních letech výraznou proměnou a dnes patří k nejžádanějším lokalitám. Pomáháme s zabezpečením jak nových loftových bytů, tak tradičních činžovních domů.',
    coverage: 'Celá Praha 7 – Holešovice, Letná, Troja a část Bubenče. Rychlý příjezd zaručen.',
    services: [
      'Otevírání moderních i tradičních zámků',
      'Zabezpečení loftových bytů',
      'Výměna vložek a kování',
      'Montáž bezpečnostních dveří',
      'Smart zámky a videovrátniky',
      'Servis zámků v komerčních prostorách',
    ],
    process: [
      { title: 'Zavolejte', desc: '606 588 222 – nonstop.' },
      { title: 'Domluvíme se', desc: 'Cena a čas příjezdu ihned.' },
      { title: 'Jsme u vás', desc: 'V Praze 7 do 20–40 minut.' },
      { title: 'Vyřešeno', desc: 'Rychle, čistě, profesionálně.' },
    ],
  },
  '8': {
    num: 8,
    title: 'Zámečník Praha 8',
    district: 'Praha 8',
    areas: ['Karlín', 'Libeň', 'Kobylisy', 'Bohnice', 'Čimice', 'Ďáblice', 'Střížkov', 'Dolní Chabry'],
    time: '20–40 minut',
    imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/369073498.jpg?k=04d8c1cc6e86c3ec2e06e33d1d2a3b0e&o=',
    imageAlt: 'Karlín, Praha 8',
    imageCaption: 'Praha 8 – moderní Karlín',
    intro: 'Zámečnická pohotovost v Praze 8 – Karlín, Libeň, Kobylisy, Bohnice. Profesionální služby nonstop.',
    description: 'Praha 8 je pestrý městský obvod – od moderního Karlína přes tradiční Libeň až po klidné Kobylisy a Bohnice. Naši zámečníci znají specifika všech částí a jsou připraveni pomoci s jakýmkoliv typem zámku nebo dveří.',
    coverage: 'Celá Praha 8 – Karlín, Libeň, Kobylisy, Bohnice, Čimice, Ďáblice, Střížkov, Dolní Chabry.',
    services: [
      'Otevírání bytů a kanceláří',
      'Výměna zámků v novostavbách',
      'Zabezpečení starších domů',
      'Montáž přístupových systémů',
      'Opravy a servis zámků',
      'Bezpečnostní audit nemovitosti',
    ],
    process: [
      { title: 'Volejte', desc: '606 588 222 – jsme tu pro vás.' },
      { title: 'Cena předem', desc: 'Žádná překvapení, férové ceny.' },
      { title: 'Rychlý příjezd', desc: 'V Praze 8 za 20–40 minut.' },
      { title: 'Profesionální servis', desc: 'Kvalita a záruka na práci.' },
    ],
  },
  '9': {
    num: 9,
    title: 'Zámečník Praha 9',
    district: 'Praha 9',
    areas: ['Vysočany', 'Prosek', 'Letňany', 'Černý Most', 'Kyje', 'Hloubětín', 'Kbely', 'Čakovice', 'Satalice'],
    time: '20–40 minut',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Praha%2C_Vyso%C4%8Dany%2C_Harfa.jpg/1200px-Praha%2C_Vyso%C4%8Dany%2C_Harfa.jpg',
    imageAlt: 'Vysočany, Praha 9',
    imageCaption: 'Praha 9 – moderní Vysočany',
    intro: 'Zámečník v Praze 9 – Vysočany, Prosek, Letňany, Černý Most a další. Nonstop pohotovost s rychlým příjezdem.',
    description: 'Praha 9 je rozlehlý městský obvod s dynamickým rozvojem. Od moderních Vysočan přes sídliště na Proseku a Letňanech až po klidné Kbely – všude zde poskytujeme spolehlivé zámečnické služby.',
    coverage: 'Kompletní Praha 9 – Vysočany, Prosek, Letňany, Černý Most, Kyje, Hloubětín, Kbely, Čakovice, Satalice.',
    services: [
      'Otevírání zabouchnutých dveří',
      'Výměna vložek v panelových domech',
      'Zabezpečení novostaveb',
      'Montáž bezpečnostních dveří',
      'Autoklíče a otevírání aut',
      'Komplexní bezpečnostní řešení',
    ],
    process: [
      { title: 'Zavolejte nám', desc: '606 588 222 – nonstop dostupnost.' },
      { title: 'Dohodneme podmínky', desc: 'Transparentní cena po telefonu.' },
      { title: 'Technik na cestě', desc: 'V Praze 9 do 20–40 minut.' },
      { title: 'Vše vyřešeno', desc: 'Profesionální práce se zárukou.' },
    ],
  },
  '10': {
    num: 10,
    title: 'Zámečník Praha 10',
    district: 'Praha 10',
    areas: ['Vršovice', 'Strašnice', 'Hostivař', 'Malešice', 'Záběhlice', 'Michle (část)', 'Vinohrady (část)', 'Štěrboholy'],
    time: '15–30 minut',
    imageUrl: 'https://praha.rozhlas.cz/sites/default/files/styles/image_board_full/public/images/04087068.jpeg?itok=8TdN0j5X',
    imageAlt: 'Vršovice, Praha 10',
    imageCaption: 'Praha 10 – naše domovská čtvrť',
    intro: 'Praha 10 je naše domovská čtvrť! Sídlíme na adrese Herbenova 727/38 a díky tomu jsme v celé Praze 10 nejrychleji – obvykle do 15–30 minut.',
    description: 'Praha 10 je pro nás domov. Naše sídlo na Herbenově ulici nám umožňuje být v celé Praze 10 nejrychleji ze všech částí města. Ať už jste ve Vršovicích, Strašnicích, Hostivaři nebo Malešicích – jsme u vás dříve než kdokoliv jiný.',
    coverage: 'Praha 10 je naše domovská čtvrť – Vršovice, Strašnice, Hostivař, Malešice, Záběhlice, část Michle, část Vinohrad, Štěrboholy. Nejrychlejší příjezd ze všech obvodů!',
    services: [
      'Otevírání dveří – nejrychlejší příjezd',
      'Výměna vložek a zámků',
      'Montáž bezpečnostních dveří',
      'Zabezpečení rodinných domů',
      'Elektronické zámky a systémy',
      'Pravidelný servis a údržba zámků',
    ],
    process: [
      { title: 'Zavolejte', desc: '606 588 222 – jsme za rohem!' },
      { title: 'Okamžitá reakce', desc: 'Cena a čas příjezdu ihned.' },
      { title: 'Bleskový příjezd', desc: 'V Praze 10 za pouhých 15–30 minut!' },
      { title: 'Hotovo', desc: 'Kvalitní práce od místních profíků.' },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(prahaData).map((num) => ({
    num,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ num: string }> }): Promise<Metadata> {
  const { num } = await params
  const data = prahaData[num]
  if (!data) return {}

  return {
    title: data.title,
    description: `Zámečník Praha ${num} – nonstop zámečnická pohotovost v oblasti ${data.areas.join(', ')}. Příjezd do ${data.time}. ☎ 606 588 222`,
    alternates: { canonical: `https://zamecnictvi-husak.vercel.app/zamecnik-praha-${num}` },
    openGraph: {
      title: `${data.title} – Nonstop zámečnická pohotovost`,
      description: `Profesionální zámečnické služby v Praze ${num}. ${data.areas.join(', ')}. Příjezd do ${data.time}.`,
    },
  }
}

export default async function PrahaPage({ params }: { params: Promise<{ num: string }> }) {
  const { num } = await params
  const data = prahaData[num]

  if (!data) notFound()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Domů</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{data.title}</span>
          </div>
          <h1 className="page-title">{data.title.toUpperCase()}</h1>
          <p className="page-subtitle">Nonstop zámečnická pohotovost – příjezd do {data.time}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <h2>🔑 {data.title} – Rychlá pomoc 24/7</h2>
            <p>{data.intro}</p>

            <div className="location-image animate-fade-in">
              <img src={data.imageUrl} alt={data.imageAlt} loading="lazy" />
              <p className="image-caption">
                <i className="fas fa-map-marker-alt"></i> {data.imageCaption}
              </p>
            </div>

            <h2>📍 {data.district} – Kde přesně působíme</h2>
            <p>{data.description}</p>

            <h3>Městské části a lokality:</h3>
            <ul className="location-list">
              {data.areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>

            <div className="highlight-box">
              <h3><i className="fas fa-clock"></i> Příjezd do {data.time}</h3>
              <p>{data.coverage}</p>
            </div>

            <h2>🔧 Naše služby v Praze {data.num}</h2>
            <ul className="check-list">
              {data.services.map((svc) => (
                <li key={svc}><i className="fas fa-check"></i> {svc}</li>
              ))}
            </ul>

            <h2>📋 Jak to funguje</h2>
            <ol className="process-list">
              {data.process.map((step) => (
                <li key={step.title}><strong>{step.title}:</strong> {step.desc}</li>
              ))}
            </ol>

            <div className="cta-box">
              <h3>Potřebujete zámečníka v Praze {data.num}?</h3>
              <p>Zavolejte nám a budeme u vás co nejdříve!</p>
              <a href="tel:+420606588222" className="btn btn-primary btn-lg">
                <i className="fas fa-phone"></i> 606 588 222
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
