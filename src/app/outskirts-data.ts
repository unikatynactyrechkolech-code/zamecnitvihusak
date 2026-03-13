// Data pro obce v okolí Prahy - Praha-západ a Praha-východ

export interface LocalityData {
  slug: string
  name: string
  parentDistrict: string | null
  type: 'district' | 'neighborhood' | 'village'
  arrivalTime: string
  description: string
  highlights: string[]
}

export const prahaZapadData: LocalityData[] = [
  { slug: 'zamecnik-praha-zapad', name: 'Praha-západ', parentDistrict: null, type: 'district', arrivalTime: '30–60 minut', description: 'Okres Praha-západ zahrnuje desítky obcí na západním a jižním okraji Prahy. Poskytujeme zde kompletní zámečnické služby s výjezdem po celém okrese.', highlights: ['Černošice', 'Dobřichovice', 'Řevnice', 'Roztoky', 'Jesenice', 'Průhonice'] },
  { slug: 'zamecnik-bojanovice', name: 'Bojanovice', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '40–55 minut', description: 'Bojanovice jsou malebnou obcí v okrese Praha-západ. Poskytujeme zde zámečnické služby pro místní rodinné domy.', highlights: ['Bojanovická náves'] },
  { slug: 'zamecnik-cernosice', name: 'Černošice', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '30–45 minut', description: 'Černošice jsou oblíbeným rezidenčním městem na Berounce. Vilové čtvrti zde chráníme kvalitním zabezpečením.', highlights: ['Berounka', 'Mokropsy'] },
  { slug: 'zamecnik-dobrichovice', name: 'Dobřichovice', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '35–50 minut', description: 'Dobřichovice leží v malebném údolí Berounky. Rodinné domy zde vybavujeme spolehlivými zámky.', highlights: ['Berounka', 'Karlík'] },
  { slug: 'zamecnik-dolni-brezany', name: 'Dolní Břežany', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '25–40 minut', description: 'Dolní Břežany jsou dynamicky se rozvíjející obcí s vědeckým centrem ELI. Novostavby zde zajišťujeme moderním zabezpečením.', highlights: ['ELI Beamlines', 'Zámek'] },
  { slug: 'zamecnik-hostivice', name: 'Hostivice', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '25–40 minut', description: 'Hostivice jsou velkým městem na západním okraji Prahy. Poskytujeme zde kompletní zámečnické služby.', highlights: ['Hostivické rybníky', 'Litovice'] },
  { slug: 'zamecnik-jesenice', name: 'Jesenice', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '25–40 minut', description: 'Jesenice jsou rozrůstajícím se městem na jihu Prahy. Novostavby i starší domy zde vybavujeme bezpečnými zámky.', highlights: ['Jesenická náves', 'Horní Jirčany'] },
  { slug: 'zamecnik-jilove-u-prahy', name: 'Jílové u Prahy', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '40–55 minut', description: 'Jílové u Prahy je historické hornické město. Poskytujeme zde zámečnické služby pro místní obyvatele.', highlights: ['Zlaté doly', 'Jílovský potok'] },
  { slug: 'zamecnik-mnisek-pod-brdy', name: 'Mníšek pod Brdy', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '40–55 minut', description: 'Mníšek pod Brdy leží na úpatí Brd. Rodinné domy zde chráníme spolehlivým zabezpečením.', highlights: ['Zámek Mníšek', 'Brdy'] },
  { slug: 'zamecnik-pruhonice', name: 'Průhonice', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '20–35 minut', description: 'Průhonice jsou známé zámkem a botanickým parkem. Vilové domy zde zajišťujeme kvalitním zabezpečením.', highlights: ['Průhonický park', 'Zámek Průhonice'] },
  { slug: 'zamecnik-revnice', name: 'Řevnice', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '40–55 minut', description: 'Řevnice jsou malebným městečkem na Berounce. Poskytujeme zde zámečnické služby pro rodinné domy.', highlights: ['Berounka', 'Řevnická náves'] },
  { slug: 'zamecnik-roztoky', name: 'Roztoky', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '25–40 minut', description: 'Roztoky jsou městem na Vltavě severně od Prahy. Vilové čtvrti zde vybavujeme bezpečnými zámky.', highlights: ['Zámek Roztoky', 'Tiché údolí'] },
  { slug: 'zamecnik-rudna', name: 'Rudná', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '30–45 minut', description: 'Rudná je městem na západním okraji Prahy. Poskytujeme zde kompletní zámečnický servis.', highlights: ['Rudná'] },
  { slug: 'zamecnik-stechovice', name: 'Štěchovice', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '45–60 minut', description: 'Štěchovice leží na Vltavě pod Slapskou přehradou. Rekreační objekty zde zajišťujeme spolehlivým zabezpečením.', highlights: ['Slapská přehrada', 'Svatojánské proudy'] },
  { slug: 'zamecnik-zvole', name: 'Zvole', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '30–45 minut', description: 'Zvole jsou obcí na jihu Prahy s přírodním charakterem. Rodinné domy zde chráníme kvalitními zámky.', highlights: ['Zvolská homole'] },
  { slug: 'zamecnik-davle', name: 'Davle', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '40–55 minut', description: 'Davle leží na soutoku Vltavy a Sázavy. Rekreační objekty i rodinné domy zde vybavujeme spolehlivými zámky.', highlights: ['Soutok Vltavy a Sázavy', 'Klášter'] },
  { slug: 'zamecnik-horomerice', name: 'Horoměřice', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '20–35 minut', description: 'Horoměřice jsou obcí severozápadně od Prahy. Novostavby zde zajišťujeme moderním zabezpečením.', highlights: ['Horoměřice'] },
  { slug: 'zamecnik-tuchormerice', name: 'Tuchoměřice', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '25–40 minut', description: 'Tuchoměřice leží blízko letiště. Rodinné domy zde vybavujeme kvalitními zámky.', highlights: ['Tuchoměřice'] },
  { slug: 'zamecnik-unetice', name: 'Únětice', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '25–40 minut', description: 'Únětice jsou známé pivovarem. Rodinné domy zde chráníme spolehlivým zabezpečením.', highlights: ['Únětický pivovar', 'Únětické údolí'] },
  { slug: 'zamecnik-velke-prilepy', name: 'Velké Přílepy', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '25–40 minut', description: 'Velké Přílepy jsou rostoucí obcí severně od Prahy. Poskytujeme zde kompletní zámečnický servis.', highlights: ['Velké Přílepy'] },
  { slug: 'zamecnik-chyne', name: 'Chýně', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '30–45 minut', description: 'Chýně jsou obcí na západním okraji Prahy. Novostavby zde zajišťujeme bezpečnými zámky.', highlights: ['Chýně'] },
  { slug: 'zamecnik-slapy', name: 'Slapy', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '50–65 minut', description: 'Slapy jsou rekreační oblastí u Slapské přehrady. Chaty a domy zde vybavujeme spolehlivými zámky.', highlights: ['Slapská přehrada'] },
  { slug: 'zamecnik-psary', name: 'Psáry', parentDistrict: 'Praha-západ', type: 'village', arrivalTime: '25–40 minut', description: 'Psáry jsou obcí na D1 jižně od Prahy. Rodinné domy zde chráníme kvalitním zabezpečením.', highlights: ['Dolní Jirčany'] },
]

export const prahaVychodData: LocalityData[] = [
  { slug: 'zamecnik-praha-vychod', name: 'Praha-východ', parentDistrict: null, type: 'district', arrivalTime: '30–60 minut', description: 'Okres Praha-východ zahrnuje desítky obcí na východním a severním okraji Prahy. Poskytujeme zde kompletní zámečnické služby s výjezdem po celém okrese.', highlights: ['Brandýs nad Labem', 'Říčany', 'Úvaly', 'Čelákovice', 'Mnichovice'] },
  { slug: 'zamecnik-brandys-nad-labem', name: 'Brandýs nad Labem', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '30–45 minut', description: 'Brandýs nad Labem je historické město s renesančním zámkem. Poskytujeme zde kompletní zámečnické služby.', highlights: ['Zámek Brandýs', 'Stará Boleslav'] },
  { slug: 'zamecnik-ricany', name: 'Říčany', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '25–40 minut', description: 'Říčany jsou velkým městem východně od Prahy. Rodinné domy i bytovky zde vybavujeme bezpečnými zámky.', highlights: ['Říčanský zámek', 'Říčanská rokle'] },
  { slug: 'zamecnik-uvaly', name: 'Úvaly', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '25–40 minut', description: 'Úvaly jsou městem na železniční trati do Kolína. Poskytujeme zde zámečnické služby pro všechny typy nemovitostí.', highlights: ['Úvaly'] },
  { slug: 'zamecnik-klecany', name: 'Klecany', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '25–40 minut', description: 'Klecany leží na Vltavě severně od Prahy. Rodinné domy zde chráníme spolehlivým zabezpečením.', highlights: ['Vltava', 'Klecany'] },
  { slug: 'zamecnik-libeznice', name: 'Líbeznice', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '25–40 minut', description: 'Líbeznice jsou rostoucí obcí severně od Prahy. Novostavby zde zajišťujeme moderním zabezpečením.', highlights: ['Líbeznice'] },
  { slug: 'zamecnik-mnichovice', name: 'Mnichovice', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '30–45 minut', description: 'Mnichovice jsou městečkem v Ladově kraji. Rodinné domy zde vybavujeme kvalitními zámky.', highlights: ['Ladův kraj', 'Mnichovice'] },
  { slug: 'zamecnik-mukarov', name: 'Mukařov', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '30–45 minut', description: 'Mukařov leží v přírodě Ladova kraje. Poskytujeme zde zámečnické služby pro místní obyvatele.', highlights: ['Ladův kraj'] },
  { slug: 'zamecnik-jirny', name: 'Jirny', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '25–40 minut', description: 'Jirny jsou obcí východně od Prahy. Rodinné domy zde chráníme spolehlivými zámky.', highlights: ['Jirny'] },
  { slug: 'zamecnik-sibrina', name: 'Sibřina', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '25–40 minut', description: 'Sibřina je obcí blízko Prahy. Novostavby zde zajišťujeme bezpečnými zámky.', highlights: ['Sibřina'] },
  { slug: 'zamecnik-horovorcovice', name: 'Hovorčovice', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '25–40 minut', description: 'Hovorčovice jsou obcí severně od Prahy. Poskytujeme zde kompletní zámečnický servis.', highlights: ['Hovorčovice'] },
  { slug: 'zamecnik-mesice', name: 'Měšice', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '25–40 minut', description: 'Měšice leží u dálnice D8. Rodinné domy zde vybavujeme kvalitními zámky.', highlights: ['Měšice'] },
  { slug: 'zamecnik-zdiby', name: 'Zdiby', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '20–35 minut', description: 'Zdiby jsou velkou obcí severně od Prahy. Vilové čtvrti zde zajišťujeme prvotřídním zabezpečením.', highlights: ['Zdiby', 'Přemyšlení'] },
  { slug: 'zamecnik-kamenice', name: 'Kamenice', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '25–40 minut', description: 'Kamenice jsou obcí jihovýchodně od Prahy. Rodinné domy zde chráníme spolehlivými zámky.', highlights: ['Kamenice', 'Štiřín'] },
  { slug: 'zamecnik-velke-popovice', name: 'Velké Popovice', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '30–45 minut', description: 'Velké Popovice jsou známé pivovarem Kozel. Poskytujeme zde zámečnické služby pro místní obyvatele.', highlights: ['Pivovar Kozel'] },
  { slug: 'zamecnik-cestlice', name: 'Čestlice', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '20–35 minut', description: 'Čestlice jsou známé nákupním centrem Průhonice. Komerční i rezidenční objekty zde zajišťujeme bezpečnými zámky.', highlights: ['Aquapalace', 'OC Průhonice'] },
  { slug: 'zamecnik-vestec', name: 'Vestec', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '20–35 minut', description: 'Vestec leží jižně od Prahy. Novostavby zde vybavujeme moderním zabezpečením.', highlights: ['Vestec'] },
  { slug: 'zamecnik-nehvizdy', name: 'Nehvizdy', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '30–45 minut', description: 'Nehvizdy jsou obcí východně od Prahy. Rodinné domy zde chráníme spolehlivými zámky.', highlights: ['Nehvizdy'] },
  { slug: 'zamecnik-zelenec', name: 'Zeleneč', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '25–40 minut', description: 'Zeleneč je obcí na východě Prahy. Poskytujeme zde kompletní zámečnické služby.', highlights: ['Zeleneč'] },
  { slug: 'zamecnik-skvorec', name: 'Škvorec', parentDistrict: 'Praha-východ', type: 'village', arrivalTime: '30–45 minut', description: 'Škvorec leží na Škvorecké oboře. Rodinné domy zde vybavujeme kvalitními zámky.', highlights: ['Škvorecký zámek'] },
]

// Kombinované exporty
export const allOutskirtsData = [...prahaZapadData, ...prahaVychodData]

export function getOutskirtsBySlug(slug: string): LocalityData | undefined {
  return allOutskirtsData.find(d => d.slug === slug)
}

export function getAllOutskirtsSlugs(): string[] {
  return allOutskirtsData.map(d => d.slug)
}
