// Data pro všechny lokality - městské části Prahy a okolní obce
// Generátor originálního obsahu pro každou lokalitu

export interface LocalityData {
  slug: string
  name: string
  parentDistrict: string | null // Praha 1, Praha 2, Praha-západ, Praha-východ
  type: 'district' | 'neighborhood' | 'village'
  arrivalTime: string
  description: string
  highlights: string[]
}

// Pomocná funkce pro generování slug z názvu
export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

// Šablony pro generování unikátního obsahu
const serviceTemplates = [
  'Nouzové otevírání dveří a zámků',
  'Výměna cylindrických vložek všech typů',
  'Montáž bezpečnostního kování',
  'Otevírání trezorů a sejfů',
  'Výroba klíčů na počkání',
  'Oprava a seřízení zámků',
  'Instalace přídavných zámků',
  'Zabezpečení proti vloupání',
  'Elektronické přístupové systémy',
  'Výměna zámků po vloupání',
]

const processSteps = [
  { title: 'Zavolejte nám', desc: 'Na lince 606 588 222 jsme k dispozici nonstop.' },
  { title: 'Sdělíme cenu', desc: 'Přesnou cenu a čas příjezdu se dozvíte ihned.' },
  { title: 'Technik vyráží', desc: 'Nejbližší zámečník se vydá na cestu k vám.' },
  { title: 'Problém vyřešen', desc: 'Profesionálně a rychle vyřešíme vaši situaci.' },
]

// Praha 1-10 jsou v zamecnik-praha-data.ts
// Zde definujeme Praha 11-22 a všechny městské části + obce

export const extendedPrahaData: Record<string, LocalityData> = {
  // Praha 11-22
  '11': {
    slug: 'zamecnik-praha-11',
    name: 'Praha 11',
    parentDistrict: null,
    type: 'district',
    arrivalTime: '25–40 minut',
    description: 'Praha 11 zahrnuje rozsáhlé sídliště Jižní Město, které patří k největším v Evropě. Najdete zde tisíce bytových jednotek, kde denně řešíme zabouchnuté dveře, výměny zámků i kompletní zabezpečení bytů.',
    highlights: ['Háje', 'Chodov', 'Opatov', 'Roztyly', 'Šeberov'],
  },
  '12': {
    slug: 'zamecnik-praha-12',
    name: 'Praha 12',
    parentDistrict: null,
    type: 'district',
    arrivalTime: '25–40 minut',
    description: 'Praha 12 nabízí kombinaci panelové zástavby a rodinných domů v oblastech jako Modřany a Komořany. Naši zámečníci zde pravidelně pomáhají s otevíráním dveří i instalací moderních zabezpečovacích systémů.',
    highlights: ['Modřany', 'Komořany', 'Cholupice', 'Točná', 'Kamýk'],
  },
  '13': {
    slug: 'zamecnik-praha-13',
    name: 'Praha 13',
    parentDistrict: null,
    type: 'district',
    arrivalTime: '25–45 minut',
    description: 'Praha 13 se rozkládá na jihozápadě města a zahrnuje rozlehlá sídliště Stodůlky a Lužiny. Oblast prošla v posledních letech modernizací a my zde poskytujeme kompletní zámečnické služby pro bytové domy i rodinné domy.',
    highlights: ['Stodůlky', 'Lužiny', 'Nové Butovice', 'Řepy'],
  },
  '14': {
    slug: 'zamecnik-praha-14',
    name: 'Praha 14',
    parentDistrict: null,
    type: 'district',
    arrivalTime: '25–45 minut',
    description: 'Praha 14 na severovýchodě města zahrnuje Černý Most s velkým nákupním centrem i klidnější oblasti jako Hloubětín. Poskytujeme zde rychlou pomoc při zabouchnutých dveřích i plánované výměny zámků.',
    highlights: ['Černý Most', 'Hloubětín', 'Kyje', 'Hostavice'],
  },
  '15': {
    slug: 'zamecnik-praha-15',
    name: 'Praha 15',
    parentDistrict: null,
    type: 'district',
    arrivalTime: '20–35 minut',
    description: 'Praha 15 sousedí s naším domovským obvodem Praha 10. Díky tomu se do oblastí jako Hostivař, Horní Měcholupy či Petrovice dostaneme velmi rychle. Známe zde každou ulici a můžeme garantovat bleskový příjezd.',
    highlights: ['Hostivař', 'Horní Měcholupy', 'Dolní Měcholupy', 'Petrovice', 'Dubeč'],
  },
  '16': {
    slug: 'zamecnik-praha-16',
    name: 'Praha 16',
    parentDistrict: null,
    type: 'district',
    arrivalTime: '30–45 minut',
    description: 'Praha 16 na jihozápadním okraji města zahrnuje malebné oblasti podél Vltavy. Radotín, Zbraslav i Velká Chuchle nabízejí klidné bydlení, kde poskytujeme kompletní zámečnický servis.',
    highlights: ['Radotín', 'Zbraslav', 'Velká Chuchle', 'Lahovice', 'Lipence'],
  },
  '17': {
    slug: 'zamecnik-praha-17',
    name: 'Praha 17',
    parentDistrict: null,
    type: 'district',
    arrivalTime: '30–45 minut',
    description: 'Praha 17 – Řeporyje leží na západním okraji Prahy a nabízí venkovský charakter bydlení. Místní rodinné domy často vyžadují kvalitní zabezpečení, se kterým rádi pomůžeme.',
    highlights: ['Řeporyje', 'Zličín'],
  },
  '18': {
    slug: 'zamecnik-praha-18',
    name: 'Praha 18',
    parentDistrict: null,
    type: 'district',
    arrivalTime: '25–40 minut',
    description: 'Praha 18 – Letňany je známá především díky výstavišti PVA Expo. Kromě komerčních prostor zde najdete i rozsáhlou rezidenční zástavbu, kde poskytujeme nonstop zámečnické služby.',
    highlights: ['Letňany', 'Čakovice'],
  },
  '19': {
    slug: 'zamecnik-praha-19',
    name: 'Praha 19',
    parentDistrict: null,
    type: 'district',
    arrivalTime: '30–45 minut',
    description: 'Praha 19 – Kbely je bývalá letecká obec s klidným charakterem. Rodinné domy a menší bytové domy zde vyžadují spolehlivé zabezpečení, které zajistíme.',
    highlights: ['Kbely', 'Vinoř', 'Satalice'],
  },
  '20': {
    slug: 'zamecnik-praha-20',
    name: 'Praha 20',
    parentDistrict: null,
    type: 'district',
    arrivalTime: '30–45 minut',
    description: 'Praha 20 zahrnuje Horní Počernice s průmyslovou zónou i rezidenční oblastí. Poskytujeme zde služby jak pro firmy, tak pro domácnosti.',
    highlights: ['Horní Počernice', 'Dolní Počernice', 'Chvaly'],
  },
  '21': {
    slug: 'zamecnik-praha-21',
    name: 'Praha 21',
    parentDistrict: null,
    type: 'district',
    arrivalTime: '30–50 minut',
    description: 'Praha 21 na východním okraji města zahrnuje vilové čtvrti jako Klánovice a Újezd nad Lesy. Zajišťujeme zde kompletní zabezpečení rodinných domů.',
    highlights: ['Újezd nad Lesy', 'Klánovice', 'Koloděje', 'Běchovice'],
  },
  '22': {
    slug: 'zamecnik-praha-22',
    name: 'Praha 22',
    parentDistrict: null,
    type: 'district',
    arrivalTime: '30–50 minut',
    description: 'Praha 22 – Uhříněves a okolí nabízí klidné bydlení na jihovýchodě Prahy. Rodinné domy i novostavby zde chráníme kvalitními zámky a bezpečnostními systémy.',
    highlights: ['Uhříněves', 'Pitkovice', 'Kolovraty', 'Benice', 'Křeslice', 'Nedvězí', 'Královice'],
  },
}

// Městské části pod jednotlivými Prahami
export const neighborhoodData: LocalityData[] = [
  // Praha 1
  { slug: 'zamecnik-praha-josefov', name: 'Josefov', parentDistrict: 'Praha 1', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Josefov je historická židovská čtvrť v samém srdci Prahy. Starobylé budovy zde vyžadují citlivý přístup k zámečnickým pracím, který naši technici perfektně ovládají.', highlights: ['Staronová synagoga', 'Starý židovský hřbitov', 'Pařížská ulice'] },
  { slug: 'zamecnik-praha-mala-strana', name: 'Malá Strana', parentDistrict: 'Praha 1', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Malá Strana pod Pražským hradem je jednou z nejkrásnějších čtvrtí Prahy. Barokní paláce a historické domy zde chráníme s maximální péčí a bez poškození.', highlights: ['Nerudova ulice', 'Kampa', 'Valdštejnská zahrada'] },
  { slug: 'zamecnik-praha-nove-mesto', name: 'Nové Město', parentDistrict: 'Praha 1', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Nové Město založené Karlem IV. dnes pulzuje životem. Václavské náměstí, obchody, hotely i kanceláře – všude zde poskytujeme profesionální zámečnické služby.', highlights: ['Václavské náměstí', 'Národní třída', 'Karlovo náměstí'] },
  { slug: 'zamecnik-praha-hradcany', name: 'Hradčany', parentDistrict: 'Praha 1', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Hradčany v blízkosti Pražského hradu jsou prestižní adresou. Historické budovy a ambasády zde vyžadují diskrétní a profesionální zámečnický servis.', highlights: ['Pražský hrad', 'Loreta', 'Strahovský klášter'] },
  { slug: 'zamecnik-praha-ujezd', name: 'Újezd', parentDistrict: 'Praha 1', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Újezd pod Petřínem je klidnou částí centra Prahy. Poskytujeme zde rychlou pomoc při zabouchnutých dveřích i plánované výměny zámků.', highlights: ['Petřínská rozhledna', 'Lanová dráha', 'Tyršův dům'] },
  { slug: 'zamecnik-praha-vyton', name: 'Výtoň', parentDistrict: 'Praha 1', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Výtoň na břehu Vltavy nabízí krásné výhledy na řeku. Bytové domy zde zajišťujeme kvalitním zabezpečením.', highlights: ['Nábřeží', 'Vyšehradský tunel'] },
  
  // Praha 2
  { slug: 'zamecnik-praha-vinohrady', name: 'Vinohrady', parentDistrict: 'Praha 2', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Vinohrady jsou jednou z nejžádanějších rezidenčních čtvrtí Prahy. Krásné činžovní domy z přelomu století zde chráníme moderními bezpečnostními systémy.', highlights: ['Náměstí Míru', 'Riegrovy sady', 'Havlíčkovy sady'] },
  { slug: 'zamecnik-praha-nusle', name: 'Nusle', parentDistrict: 'Praha 2', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Nusle nabízejí kombinaci starší zástavby a moderních bytů. Poskytujeme zde kompletní zámečnické služby od otevírání až po instalaci bezpečnostních dveří.', highlights: ['Nuselský most', 'Kongresové centrum'] },
  { slug: 'zamecnik-praha-vysehrad', name: 'Vyšehrad', parentDistrict: 'Praha 2', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Vyšehrad s legendární historií je klidnou oázou v centru Prahy. Bytové domy v okolí hradiště chráníme spolehlivými zámky.', highlights: ['Vyšehradský hřbitov', 'Rotunda sv. Martina', 'Kasematy'] },
  
  // Praha 3
  { slug: 'zamecnik-praha-zizkov', name: 'Žižkov', parentDistrict: 'Praha 3', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Žižkov je čtvrť s nezaměnitelnou atmosférou a charakteristickou televizní věží. Starší zástavba zde často vyžaduje modernizaci zámků, se kterou rádi pomůžeme.', highlights: ['Žižkovská televizní věž', 'Parukářka', 'Olšanské hřbitovy'] },
  
  // Praha 4
  { slug: 'zamecnik-praha-branik', name: 'Braník', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Braník na břehu Vltavy je známý pivovarem a klidným bydlením. Rodinné domy i bytovky zde zabezpečujeme kvalitními zámky.', highlights: ['Branický pivovar', 'Branická skála'] },
  { slug: 'zamecnik-praha-chodov', name: 'Chodov', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '20–35 minut', description: 'Chodov s rozsáhlým nákupním centrem je rušnou částí Prahy 4. Panelové domy i novostavby zde vybavujeme bezpečnými zámky.', highlights: ['Centrum Chodov', 'Milíčovský les'] },
  { slug: 'zamecnik-praha-krc', name: 'Krč', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Krč je příjemnou rezidenční čtvrtí s nemocnicí a parky. Bytové domy zde zajišťujeme spolehlivým zabezpečením.', highlights: ['Nemocnice Krč', 'Krčský les', 'Thomayerova nemocnice'] },
  { slug: 'zamecnik-praha-michle', name: 'Michle', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Michle nabízí dobrou dostupnost do centra a různorodou zástavbu. Poskytujeme zde nonstop zámečnické služby.', highlights: ['Michelský les', 'Kačerov'] },
  { slug: 'zamecnik-praha-modrany', name: 'Modřany', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '25–35 minut', description: 'Modřany na jihu Prahy nabízejí klidné bydlení u Vltavy. Panelové domy i rodinné domy zde vybavujeme kvalitními zámky.', highlights: ['Modřanská rokle', 'Komořanské tůně'] },
  { slug: 'zamecnik-praha-podoli', name: 'Podolí', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Podolí je prestižní vilová čtvrť na břehu Vltavy. Rodinné domy zde chráníme prvotřídními bezpečnostními systémy.', highlights: ['Podolská porodnice', 'Plavecký stadion Podolí'] },
  { slug: 'zamecnik-praha-kunratice', name: 'Kunratice', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '25–35 minut', description: 'Kunratice na okraji Prahy nabízejí rodinné bydlení v blízkosti přírody. Zajišťujeme zde kompletní zabezpečení domů.', highlights: ['Kunratický les', 'Kunratický zámek'] },
  { slug: 'zamecnik-praha-lhotka', name: 'Lhotka', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Lhotka je klidnou okrajovou částí Prahy 4. Rodinné domy zde vybavujeme bezpečnostními zámky a kováním.', highlights: ['Milíčovský háj'] },
  { slug: 'zamecnik-praha-libus', name: 'Libuš', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '25–35 minut', description: 'Libuš kombinuje panelovou zástavbu s rodinnými domy. Poskytujeme zde kompletní zámečnický servis.', highlights: ['Libušské sídliště'] },
  { slug: 'zamecnik-praha-hodkovicky', name: 'Hodkovičky', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Hodkovičky jsou vilovou čtvrtí na svazích nad Vltavou. Rodinné domy zde chráníme kvalitním zabezpečením.', highlights: ['Přírodní památka Dvorecké stráně'] },
  { slug: 'zamecnik-praha-kamyk', name: 'Kamýk', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '25–35 minut', description: 'Kamýk je sídlištní část Prahy 4 s dobrou občanskou vybaveností. Bytové domy zde vybavujeme bezpečnými zámky.', highlights: ['Sídliště Kamýk'] },
  { slug: 'zamecnik-praha-cholupice', name: 'Cholupice', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '30–40 minut', description: 'Cholupice na jižním okraji Prahy nabízejí venkovské bydlení. Rodinné domy zde zajišťujeme spolehlivým zabezpečením.', highlights: ['Cholupická náves'] },
  { slug: 'zamecnik-praha-pisnice', name: 'Písnice', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '30–40 minut', description: 'Písnice jsou malou obcí na okraji Prahy s venkovským charakterem. Poskytujeme zde zámečnické služby pro rodinné domy.', highlights: ['Kostel sv. Máří Magdalény'] },
  { slug: 'zamecnik-praha-tocna', name: 'Točná', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '35–45 minut', description: 'Točná je nejjižnější částí Prahy s přírodním charakterem. Zajišťujeme zde zabezpečení rodinných domů.', highlights: ['Přírodní rezervace'] },
  { slug: 'zamecnik-praha-svepravice', name: 'Svépravice', parentDistrict: 'Praha 4', type: 'neighborhood', arrivalTime: '30–40 minut', description: 'Svépravice jsou klidnou okrajovou částí s rodinnými domy. Poskytujeme zde kompletní zámečnické služby.', highlights: ['Klidné rodinné bydlení'] },
  
  // Praha 5
  { slug: 'zamecnik-praha-smichov', name: 'Smíchov', parentDistrict: 'Praha 5', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Smíchov je dynamickou čtvrtí s nákupním centrem Nový Smíchov a moderními kancelářemi. Poskytujeme zde rychlé zámečnické služby pro firmy i domácnosti.', highlights: ['Nový Smíchov', 'Anděl', 'Staropramen'] },
  { slug: 'zamecnik-praha-kosire', name: 'Košíře', parentDistrict: 'Praha 5', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Košíře jsou klidnou rezidenční čtvrtí s vilami a činžovními domy. Zajišťujeme zde kompletní zabezpečení nemovitostí.', highlights: ['Klamovka', 'Košířský hřbitov'] },
  { slug: 'zamecnik-praha-jinonice', name: 'Jinonice', parentDistrict: 'Praha 5', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Jinonice kombinují historickou obec s moderní zástavbou. Bytové domy i rodinné domy zde vybavujeme kvalitními zámky.', highlights: ['Waltrovka', 'Jinočanská'] },
  { slug: 'zamecnik-praha-motol', name: 'Motol', parentDistrict: 'Praha 5', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Motol je známý především díky nemocnici FN Motol. Poskytujeme zde zámečnické služby pro okolní bytovou zástavbu.', highlights: ['FN Motol', 'Motolský háj'] },
  { slug: 'zamecnik-praha-radlice', name: 'Radlice', parentDistrict: 'Praha 5', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Radlice jsou klidnou čtvrtí s převážně rodinnou zástavbou. Zajišťujeme zde zabezpečení domů a bytů.', highlights: ['Radlická kulturní sportovna'] },
  { slug: 'zamecnik-praha-hlubocepy', name: 'Hlubočepy', parentDistrict: 'Praha 5', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Hlubočepy leží v údolí mezi Barrandovem a Smíchovem. Bytové domy zde vybavujeme spolehlivými zámky.', highlights: ['Prokopské údolí', 'Barrandovské skály'] },
  { slug: 'zamecnik-praha-slivenec', name: 'Slivenec', parentDistrict: 'Praha 5', type: 'neighborhood', arrivalTime: '25–35 minut', description: 'Slivenec na jihozápadním okraji Prahy nabízí klidné rodinné bydlení. Poskytujeme zde kompletní zámečnický servis.', highlights: ['Sliveneční hřiště'] },
  { slug: 'zamecnik-praha-lochkov', name: 'Lochkov', parentDistrict: 'Praha 5', type: 'neighborhood', arrivalTime: '30–40 minut', description: 'Lochkov je malebnou vesničkou na okraji Prahy. Rodinné domy zde chráníme kvalitním zabezpečením.', highlights: ['Lochkovský zámek'] },
  { slug: 'zamecnik-praha-sobin', name: 'Sobín', parentDistrict: 'Praha 5', type: 'neighborhood', arrivalTime: '30–40 minut', description: 'Sobín je malou obcí v jižní části Prahy 5. Zajišťujeme zde zámečnické služby pro místní obyvatele.', highlights: ['Klidná vesnice'] },
  { slug: 'zamecnik-praha-holyne', name: 'Holyně', parentDistrict: 'Praha 5', type: 'neighborhood', arrivalTime: '25–35 minut', description: 'Holyně jsou okrajovou částí Prahy s venkovským charakterem. Poskytujeme zde zabezpečení rodinných domů.', highlights: ['Holyňská náves'] },
  
  // Praha 6
  { slug: 'zamecnik-praha-dejvice', name: 'Dejvice', parentDistrict: 'Praha 6', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Dejvice jsou univerzitním centrem Prahy s ČVUT a dalšími vysokými školami. Vilová zástavba i bytové domy zde vyžadují kvalitní zabezpečení.', highlights: ['Vítězné náměstí', 'ČVUT', 'Stromovka'] },
  { slug: 'zamecnik-praha-brevnov', name: 'Břevnov', parentDistrict: 'Praha 6', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Břevnov s nejstarším klášterem v Čechách je prestižní rezidenční čtvrtí. Historické budovy i moderní domy zde chráníme s péčí.', highlights: ['Břevnovský klášter', 'Hvězda', 'Ladronka'] },
  { slug: 'zamecnik-praha-bubenec', name: 'Bubeneč', parentDistrict: 'Praha 6', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Bubeneč je elegantní vilovou čtvrtí v blízkosti Stromovky. Ambasády a luxusní vily zde zajišťujeme prvotřídním zabezpečením.', highlights: ['Stromovka', 'Výstaviště Praha', 'Ambasády'] },
  { slug: 'zamecnik-praha-stresovice', name: 'Střešovice', parentDistrict: 'Praha 6', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Střešovice patří k nejprestižnějším adresám Prahy. Vilová zástavba zde vyžaduje diskrétní a profesionální zámečnický servis.', highlights: ['Ořechovka', 'Hanspaulka', 'Baba'] },
  { slug: 'zamecnik-praha-veleslavin', name: 'Veleslavín', parentDistrict: 'Praha 6', type: 'neighborhood', arrivalTime: '20–35 minut', description: 'Veleslavín je rezidenční čtvrtí s dobrou dostupností metra. Bytové domy i rodinné domy zde vybavujeme bezpečnými zámky.', highlights: ['Metro Veleslavín', 'Obora Hvězda'] },
  { slug: 'zamecnik-praha-vokovice', name: 'Vokovice', parentDistrict: 'Praha 6', type: 'neighborhood', arrivalTime: '20–35 minut', description: 'Vokovice jsou klidnou rezidenční čtvrtí v blízkosti letiště. Poskytujeme zde kompletní zámečnické služby.', highlights: ['Divoká Šárka', 'Vokovický rybník'] },
  { slug: 'zamecnik-praha-liboc', name: 'Liboc', parentDistrict: 'Praha 6', type: 'neighborhood', arrivalTime: '25–35 minut', description: 'Liboc na okraji Prahy 6 nabízí klidné bydlení u Hvězdy. Rodinné domy zde chráníme kvalitním zabezpečením.', highlights: ['Obora Hvězda', 'Libocká náves'] },
  { slug: 'zamecnik-praha-ruzyne', name: 'Ruzyně', parentDistrict: 'Praha 6', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Ruzyně je známá především díky letišti Václava Havla. Okolní zástavba zde vyžaduje spolehlivé zabezpečení.', highlights: ['Letiště Václava Havla', 'Ruzyňská věznice'] },
  { slug: 'zamecnik-praha-nebusice', name: 'Nebušice', parentDistrict: 'Praha 6', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Nebušice jsou vilovou čtvrtí na severozápadě Prahy. Luxusní domy zde zajišťujeme prémiových zabezpečením.', highlights: ['Nebušická náves'] },
  { slug: 'zamecnik-praha-predni-kopanina', name: 'Přední Kopanina', parentDistrict: 'Praha 6', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Přední Kopanina je malebnou vesnicí na okraji Prahy. Poskytujeme zde zámečnické služby pro místní obyvatele.', highlights: ['Rotunda sv. Máří Magdalény'] },
  { slug: 'zamecnik-praha-zadni-kopanina', name: 'Zadní Kopanina', parentDistrict: 'Praha 6', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Zadní Kopanina leží v chráněné krajinné oblasti. Rodinné domy zde vybavujeme spolehlivými zámky.', highlights: ['Chráněná krajinná oblast'] },
  { slug: 'zamecnik-praha-lysolaje', name: 'Lysolaje', parentDistrict: 'Praha 6', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Lysolaje jsou klidnou okrajovou částí s vilovou zástavbou. Zajišťujeme zde kompletní zabezpečení nemovitostí.', highlights: ['Lysolajské údolí'] },
  { slug: 'zamecnik-praha-suchdol', name: 'Suchdol', parentDistrict: 'Praha 6', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Suchdol je univerzitním městečkem s ČZU. Bytové domy i rodinné domy zde vybavujeme kvalitními zámky.', highlights: ['ČZU', 'Údolí Únětického potoka'] },
  
  // Praha 7
  { slug: 'zamecnik-praha-holesovice', name: 'Holešovice', parentDistrict: 'Praha 7', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Holešovice jsou dynamickou čtvrtí, která prošla výraznou transformací. Moderní lofty i tradiční činžovní domy zde vybavujeme bezpečnými zámky.', highlights: ['Veletržní palác', 'DOX', 'Holešovická tržnice'] },
  { slug: 'zamecnik-praha-troja', name: 'Troja', parentDistrict: 'Praha 7', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Troja je známá především zoo a zámkem. Vilová zástavba zde vyžaduje kvalitní zabezpečení, které poskytujeme.', highlights: ['Zoo Praha', 'Trojský zámek', 'Botanická zahrada'] },
  
  // Praha 8
  { slug: 'zamecnik-praha-karlin', name: 'Karlín', parentDistrict: 'Praha 8', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Karlín je jednou z nejmodernějších čtvrtí Prahy po povodních 2002. Nové bytové projekty zde vybavujeme moderním zabezpečením.', highlights: ['Karlínské náměstí', 'Forum Karlín', 'River City Prague'] },
  { slug: 'zamecnik-praha-liben', name: 'Libeň', parentDistrict: 'Praha 8', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Libeň nabízí pestrou směs historické zástavby a panelových domů. Poskytujeme zde kompletní zámečnické služby.', highlights: ['Libeňský zámek', 'Thomayerovy sady'] },
  { slug: 'zamecnik-praha-kobylisy', name: 'Kobylisy', parentDistrict: 'Praha 8', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Kobylisy jsou příjemnou rezidenční čtvrtí s dobrou dostupností metra. Bytové domy zde vybavujeme spolehlivými zámky.', highlights: ['Metro Kobylisy', 'Ďáblický háj'] },
  { slug: 'zamecnik-praha-bohnice', name: 'Bohnice', parentDistrict: 'Praha 8', type: 'neighborhood', arrivalTime: '25–35 minut', description: 'Bohnice jsou rozlehlým sídlištěm na severu Prahy. Panelové domy zde zajišťujeme bezpečným zabezpečením.', highlights: ['Psychiatrická nemocnice Bohnice', 'Čimický háj'] },
  { slug: 'zamecnik-praha-cimice', name: 'Čimice', parentDistrict: 'Praha 8', type: 'neighborhood', arrivalTime: '25–35 minut', description: 'Čimice jsou klidnou okrajovou částí Prahy 8. Rodinné domy zde vybavujeme kvalitními zámky.', highlights: ['Čimický háj'] },
  { slug: 'zamecnik-praha-dablice', name: 'Ďáblice', parentDistrict: 'Praha 8', type: 'neighborhood', arrivalTime: '25–35 minut', description: 'Ďáblice jsou příjemnou rezidenční čtvrtí s rodinnými domy. Zajišťujeme zde kompletní zabezpečení nemovitostí.', highlights: ['Ďáblický hřbitov', 'Ďáblická skládka'] },
  { slug: 'zamecnik-praha-dolni-chabry', name: 'Dolní Chabry', parentDistrict: 'Praha 8', type: 'neighborhood', arrivalTime: '30–40 minut', description: 'Dolní Chabry jsou klidnou vesnicí na severním okraji Prahy. Poskytujeme zde zámečnické služby pro místní obyvatele.', highlights: ['Chaberský háj'] },
  { slug: 'zamecnik-praha-strizkov', name: 'Střížkov', parentDistrict: 'Praha 8', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Střížkov je moderním sídlištěm s výbornou dostupností metra. Bytové domy zde vybavujeme bezpečnými zámky.', highlights: ['Metro Střížkov', 'Sídliště Střížkov'] },
  
  // Praha 9
  { slug: 'zamecnik-praha-vysocany', name: 'Vysočany', parentDistrict: 'Praha 9', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Vysočany prošly velkým rozvojem a dnes nabízejí moderní bydlení i kanceláře. Poskytujeme zde kompletní zámečnické služby.', highlights: ['O2 Arena', 'Harfa', 'Kolbenova'] },
  { slug: 'zamecnik-praha-prosek', name: 'Prosek', parentDistrict: 'Praha 9', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Prosek je rozlehlým sídlištěm s dobrou občanskou vybaveností. Panelové domy zde vybavujeme spolehlivými zámky.', highlights: ['Metro Prosek', 'Prosecké skály'] },
  { slug: 'zamecnik-praha-letnany', name: 'Letňany', parentDistrict: 'Praha 9', type: 'neighborhood', arrivalTime: '25–35 minut', description: 'Letňany jsou známé výstavištěm PVA Expo a nákupním centrem. Bytové domy i rodinné domy zde zajišťujeme bezpečnými zámky.', highlights: ['PVA Expo', 'OC Letňany', 'Metro Letňany'] },
  { slug: 'zamecnik-praha-hloubetin', name: 'Hloubětín', parentDistrict: 'Praha 9', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Hloubětín kombinuje průmyslovou historii s moderním bydlením. Poskytujeme zde nonstop zámečnické služby.', highlights: ['Metro Hloubětín', 'Rokytka'] },
  { slug: 'zamecnik-praha-kyje', name: 'Kyje', parentDistrict: 'Praha 9', type: 'neighborhood', arrivalTime: '20–35 minut', description: 'Kyje jsou sídlištní částí s dobrým napojením na centrum. Bytové domy zde vybavujeme kvalitními zámky.', highlights: ['Sídliště Kyje', 'Kyjský rybník'] },
  { slug: 'zamecnik-praha-kbely', name: 'Kbely', parentDistrict: 'Praha 9', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Kbely jsou bývalou vojenskou leteckou obcí s klidným charakterem. Rodinné domy zde chráníme spolehlivým zabezpečením.', highlights: ['Letecké muzeum Kbely', 'Letiště Kbely'] },
  { slug: 'zamecnik-praha-satalice', name: 'Satalice', parentDistrict: 'Praha 9', type: 'neighborhood', arrivalTime: '30–40 minut', description: 'Satalice jsou klidnou vilovou čtvrtí na okraji Prahy. Zajišťujeme zde kompletní zabezpečení rodinných domů.', highlights: ['Satalická obora'] },
  { slug: 'zamecnik-praha-cakovice', name: 'Čakovice', parentDistrict: 'Praha 9', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Čakovice jsou příjemnou rezidenční čtvrtí s historickým jádrem. Poskytujeme zde zámečnické služby pro všechny typy nemovitostí.', highlights: ['Čakovický zámek'] },
  { slug: 'zamecnik-praha-miskovice', name: 'Miškovice', parentDistrict: 'Praha 9', type: 'neighborhood', arrivalTime: '30–40 minut', description: 'Miškovice jsou malou obcí s venkovským charakterem. Rodinné domy zde vybavujeme kvalitními zámky.', highlights: ['Miškovická náves'] },
  { slug: 'zamecnik-praha-treboradice', name: 'Třeboradice', parentDistrict: 'Praha 9', type: 'neighborhood', arrivalTime: '30–40 minut', description: 'Třeboradice jsou klidnou vesnicí na severovýchodě Prahy. Poskytujeme zde zabezpečení rodinných domů.', highlights: ['Třeboradická náves'] },
  { slug: 'zamecnik-praha-vinor', name: 'Vinoř', parentDistrict: 'Praha 9', type: 'neighborhood', arrivalTime: '30–40 minut', description: 'Vinoř je příjemnou vesnicí s historickým zámkem. Zajišťujeme zde kompletní zámečnický servis.', highlights: ['Vinořský zámek', 'Vinořský park'] },
  { slug: 'zamecnik-praha-hrdlorezy', name: 'Hrdlořezy', parentDistrict: 'Praha 9', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Hrdlořezy jsou menší čtvrtí s převážně rodinnou zástavbou. Poskytujeme zde zámečnické služby.', highlights: ['Rokytka'] },
  
  // Praha 10
  { slug: 'zamecnik-praha-vrsovice', name: 'Vršovice', parentDistrict: 'Praha 10', type: 'neighborhood', arrivalTime: '10–20 minut', description: 'Vršovice jsou naší domovskou čtvrtí! Známe zde každou ulici a jsme schopni přijet nejrychleji ze všech částí Prahy.', highlights: ['Eden', 'Bohemians', 'Náměstí Svatopluka Čecha'] },
  { slug: 'zamecnik-praha-strasnice', name: 'Strašnice', parentDistrict: 'Praha 10', type: 'neighborhood', arrivalTime: '10–20 minut', description: 'Strašnice s historickým hřbitovem a krematoriem nabízí klidné bydlení. Díky blízkosti našeho sídla jsme zde velmi rychle.', highlights: ['Strašnické krematorium', 'Strašnické divadlo'] },
  { slug: 'zamecnik-praha-malesice', name: 'Malešice', parentDistrict: 'Praha 10', type: 'neighborhood', arrivalTime: '10–20 minut', description: 'Malešice jsou rozvojovou částí Prahy 10 s novými bytovými projekty. Poskytujeme zde moderní zabezpečení.', highlights: ['Malešický park', 'Malešice'] },
  { slug: 'zamecnik-praha-zabehlice', name: 'Záběhlice', parentDistrict: 'Praha 10', type: 'neighborhood', arrivalTime: '10–20 minut', description: 'Záběhlice kombinují sídlištní zástavbu s rodinnými domy. Jsme zde velmi rychle díky blízkosti našeho sídla.', highlights: ['Botič', 'Záběhlický zámek'] },
  { slug: 'zamecnik-praha-sterboholy', name: 'Štěrboholy', parentDistrict: 'Praha 10', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Štěrboholy jsou klidnou okrajovou částí Prahy 10. Rodinné domy zde vybavujeme kvalitními zámky.', highlights: ['Štěrboholská náves'] },
  
  // Praha 11
  { slug: 'zamecnik-praha-haje', name: 'Háje', parentDistrict: 'Praha 11', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Háje jsou součástí sídliště Jižní Město s metrem. Panelové domy zde vybavujeme bezpečnými zámky.', highlights: ['Metro Háje', 'Jižní Město'] },
  { slug: 'zamecnik-praha-seberov', name: 'Šeberov', parentDistrict: 'Praha 11', type: 'neighborhood', arrivalTime: '25–35 minut', description: 'Šeberov je klidnou vilovou čtvrtí na jižním okraji Prahy. Zajišťujeme zde kompletní zabezpečení rodinných domů.', highlights: ['Šeberovská náves'] },
  
  // Praha 12
  { slug: 'zamecnik-praha-komorany', name: 'Komořany', parentDistrict: 'Praha 12', type: 'neighborhood', arrivalTime: '25–35 minut', description: 'Komořany nabízejí klidné bydlení u Vltavy. Rodinné domy i bytovky zde vybavujeme spolehlivými zámky.', highlights: ['Komořanské tůně', 'Vltava'] },
  
  // Praha 13
  { slug: 'zamecnik-praha-stodulky', name: 'Stodůlky', parentDistrict: 'Praha 13', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Stodůlky jsou rozlehlým sídlištěm s výbornou dostupností metra. Panelové domy zde zajišťujeme bezpečnými zámky.', highlights: ['Metro Stodůlky', 'Centrální park'] },
  { slug: 'zamecnik-praha-repy', name: 'Řepy', parentDistrict: 'Praha 13', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Řepy jsou sídlištní částí s dobrým napojením na centrum. Poskytujeme zde kompletní zámečnické služby.', highlights: ['Metro Řepy', 'Řepský rybník'] },
  
  // Praha 14
  { slug: 'zamecnik-praha-cerny-most', name: 'Černý Most', parentDistrict: 'Praha 14', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Černý Most je konečnou stanicí metra B s velkým nákupním centrem. Bytové domy zde vybavujeme bezpečnými zámky.', highlights: ['Metro Černý Most', 'Centrum Černý Most'] },
  { slug: 'zamecnik-praha-hostavice', name: 'Hostavice', parentDistrict: 'Praha 14', type: 'neighborhood', arrivalTime: '20–35 minut', description: 'Hostavice jsou klidnou okrajovou částí Prahy 14. Poskytujeme zde zámečnické služby pro rodinné domy.', highlights: ['Hostavická náves'] },
  
  // Praha 15
  { slug: 'zamecnik-praha-hostivar', name: 'Hostivař', parentDistrict: 'Praha 15', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Hostivař s velkou přehradou je oblíbenou rezidenční čtvrtí. Díky blízkosti našeho sídla jsme zde velmi rychle.', highlights: ['Hostivařská přehrada', 'Hostivař'] },
  { slug: 'zamecnik-praha-horni-mecholupy', name: 'Horní Měcholupy', parentDistrict: 'Praha 15', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Horní Měcholupy jsou sídlištní částí s dobrým napojením na centrum. Bytové domy zde vybavujeme spolehlivými zámky.', highlights: ['Sídliště Horní Měcholupy'] },
  { slug: 'zamecnik-praha-dolni-mecholupy', name: 'Dolní Měcholupy', parentDistrict: 'Praha 15', type: 'neighborhood', arrivalTime: '15–25 minut', description: 'Dolní Měcholupy jsou klidnou čtvrtí s převážně rodinnou zástavbou. Poskytujeme zde kompletní zámečnický servis.', highlights: ['Dolní Měcholupy'] },
  { slug: 'zamecnik-praha-petrovice', name: 'Petrovice', parentDistrict: 'Praha 15', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Petrovice jsou moderním sídlištěm na jihovýchodě Prahy. Bytové domy zde vybavujeme bezpečnými zámky.', highlights: ['Sídliště Petrovice'] },
  { slug: 'zamecnik-praha-dubec', name: 'Dubeč', parentDistrict: 'Praha 15', type: 'neighborhood', arrivalTime: '20–30 minut', description: 'Dubeč je klidnou vesnicí na východním okraji Prahy. Rodinné domy zde chráníme kvalitním zabezpečením.', highlights: ['Dubečská náves'] },
  
  // Praha 16
  { slug: 'zamecnik-praha-radotin', name: 'Radotín', parentDistrict: 'Praha 16', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Radotín leží v malebném údolí Berounky. Bytové domy i rodinné domy zde vybavujeme spolehlivými zámky.', highlights: ['Radotínské údolí', 'Berounka'] },
  { slug: 'zamecnik-praha-velka-chuchle', name: 'Velká Chuchle', parentDistrict: 'Praha 16', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Velká Chuchle je známá dostihový závodištěm. Rodinné domy zde zajišťujeme kvalitním zabezpečením.', highlights: ['Závodiště Chuchle', 'Velká Chuchle'] },
  { slug: 'zamecnik-praha-zbraslav', name: 'Zbraslav', parentDistrict: 'Praha 16', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Zbraslav s historickým zámkem leží na soutoku Vltavy a Berounky. Poskytujeme zde kompletní zámečnické služby.', highlights: ['Zbraslavský zámek', 'Soutok Vltavy a Berounky'] },
  { slug: 'zamecnik-praha-lahovice', name: 'Lahovice', parentDistrict: 'Praha 16', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Lahovice jsou malou vesnicí na jihozápadním okraji Prahy. Zajišťujeme zde zabezpečení rodinných domů.', highlights: ['Lahovice'] },
  { slug: 'zamecnik-praha-lipence', name: 'Lipence', parentDistrict: 'Praha 16', type: 'neighborhood', arrivalTime: '35–50 minut', description: 'Lipence jsou klidnou obcí v údolí Berounky. Poskytujeme zde zámečnické služby pro místní obyvatele.', highlights: ['Berounka', 'Lipence'] },
  
  // Praha 17
  { slug: 'zamecnik-praha-reporyje', name: 'Řeporyje', parentDistrict: 'Praha 17', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Řeporyje jsou klidnou vesnicí na západním okraji Prahy. Rodinné domy zde vybavujeme spolehlivými zámky.', highlights: ['Řeporyjská náves', 'Prokopské údolí'] },
  
  // Praha 20
  { slug: 'zamecnik-praha-horni-pocernice', name: 'Horní Počernice', parentDistrict: 'Praha 20', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Horní Počernice kombinují průmyslovou zónu s klidným bydlením. Poskytujeme zde kompletní zámečnický servis.', highlights: ['Průmyslová zóna', 'Xaverovský háj'] },
  { slug: 'zamecnik-praha-dolni-pocernice', name: 'Dolní Počernice', parentDistrict: 'Praha 20', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Dolní Počernice jsou klidnou čtvrtí s historickým zámkem. Zajišťujeme zde zabezpečení rodinných domů.', highlights: ['Počernický zámek', 'Počernický rybník'] },
  
  // Praha 21
  { slug: 'zamecnik-praha-bechovice', name: 'Běchovice', parentDistrict: 'Praha 21', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Běchovice jsou klidnou obcí na východním okraji Prahy. Rodinné domy zde vybavujeme kvalitními zámky.', highlights: ['Běchovická náves'] },
  { slug: 'zamecnik-praha-klanovice', name: 'Klánovice', parentDistrict: 'Praha 21', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Klánovice jsou vilovou čtvrtí obklopenou lesy. Luxusní domy zde chráníme prvotřídním zabezpečením.', highlights: ['Klánovický les', 'Klánovice'] },
  { slug: 'zamecnik-praha-kolodeje', name: 'Koloděje', parentDistrict: 'Praha 21', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Koloděje jsou malou vesnicí s historickým zámkem. Poskytujeme zde zámečnické služby pro rodinné domy.', highlights: ['Kolodějský zámek'] },
  { slug: 'zamecnik-praha-ujezd-nad-lesy', name: 'Újezd nad Lesy', parentDistrict: 'Praha 21', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Újezd nad Lesy je příjemnou vilovou čtvrtí na východě Prahy. Zajišťujeme zde kompletní zabezpečení domů.', highlights: ['Újezd nad Lesy'] },
  
  // Praha 22
  { slug: 'zamecnik-praha-uhrineves', name: 'Uhříněves', parentDistrict: 'Praha 22', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Uhříněves jsou centrem Prahy 22 s rozvojovou zástavbou. Poskytujeme zde kompletní zámečnické služby.', highlights: ['Uhříněveská náves', 'Pitkovická stráň'] },
  { slug: 'zamecnik-praha-pitkovice', name: 'Pitkovice', parentDistrict: 'Praha 22', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Pitkovice jsou klidnou obcí s novou zástavbou. Rodinné domy zde vybavujeme bezpečnými zámky.', highlights: ['Pitkovice'] },
  { slug: 'zamecnik-praha-kolovraty', name: 'Kolovraty', parentDistrict: 'Praha 22', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Kolovraty jsou příjemnou vesnicí na jihovýchodě Prahy. Zajišťujeme zde zabezpečení rodinných domů.', highlights: ['Kolovratská náves'] },
  { slug: 'zamecnik-praha-benice', name: 'Benice', parentDistrict: 'Praha 22', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Benice jsou malou vesnicí s venkovským charakterem. Poskytujeme zde zámečnické služby pro místní obyvatele.', highlights: ['Benická náves'] },
  { slug: 'zamecnik-praha-kreslice', name: 'Křeslice', parentDistrict: 'Praha 22', type: 'neighborhood', arrivalTime: '25–40 minut', description: 'Křeslice jsou obcí s moderní zástavbou rodinných domů. Zajišťujeme zde kompletní zabezpečení nemovitostí.', highlights: ['Křeslice'] },
  { slug: 'zamecnik-praha-nedvezi', name: 'Nedvězí', parentDistrict: 'Praha 22', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Nedvězí jsou klidnou vesnicí na okraji Prahy. Rodinné domy zde vybavujeme spolehlivými zámky.', highlights: ['Nedvězí'] },
  { slug: 'zamecnik-praha-kralovice', name: 'Královice', parentDistrict: 'Praha 22', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Královice jsou malou obcí s rodinnými domy. Poskytujeme zde zámečnické služby pro místní obyvatele.', highlights: ['Královice'] },
  { slug: 'zamecnik-praha-brezineves', name: 'Březiněves', parentDistrict: 'Praha 19', type: 'neighborhood', arrivalTime: '30–45 minut', description: 'Březiněves jsou klidnou obcí na severním okraji Prahy. Zajišťujeme zde zabezpečení rodinných domů.', highlights: ['Březiněves'] },
]

// Pomocná funkce pro získání services
export function getServicesForLocality(): string[] {
  return serviceTemplates
}

// Pomocná funkce pro získání procesu
export function getProcessSteps(): { title: string; desc: string }[] {
  return processSteps
}

// Získání všech slug pro statické generování
export function getAllLocalitySlugs(): string[] {
  // Lazy import to avoid circular dependency
  const { allOutskirtsData } = require('./outskirts-data')
  const districtSlugs = Object.values(extendedPrahaData).map((d: LocalityData) => d.slug)
  const neighborhoodSlugs = neighborhoodData.map(n => n.slug)
  const outskirtsSlugs = allOutskirtsData.map((o: LocalityData) => o.slug)
  return [...districtSlugs, ...neighborhoodSlugs, ...outskirtsSlugs]
}

// Získání dat podle slug
export function getLocalityBySlug(slug: string): LocalityData | undefined {
  // Lazy import to avoid circular dependency
  const { allOutskirtsData } = require('./outskirts-data')
  
  const district = Object.values(extendedPrahaData).find((d: LocalityData) => d.slug === slug) as LocalityData | undefined
  if (district) return district
  
  const neighborhood = neighborhoodData.find(n => n.slug === slug)
  if (neighborhood) return neighborhood
  
  return allOutskirtsData.find((o: LocalityData) => o.slug === slug)
}
