const list7Gallery = (plantId, count) =>
  Array.from({ length: count }, (_, index) =>
    `../../assets/images/list-7-galleries/${plantId}/${String(index + 1).padStart(2, '0')}.jpg`
  );

window.coursePlantLists = {
  ...(window.coursePlantLists || {}),
  7: [
    {
      id: 'ceanothus-yankee-point',
      scientific: 'Ceanothus griseus var. horizontalis ‘Yankee Point’',
      scientificHtml: '<i>Ceanothus griseus</i> var. <i>horizontalis</i> ‘Yankee Point’',
      common: 'Yankee Point Ceanothus / Californian Lilac',
      image: '../../assets/images/list-7-galleries/ceanothus-yankee-point/02.jpg',
      quizImage: '../../assets/images/list-7-galleries/ceanothus-yankee-point/01.jpg',
      memoryImage: '../../assets/images/list-7-galleries/ceanothus-yankee-point/01.jpg',
      gallery: list7Gallery('ceanothus-yankee-point', 5),
      alt: 'Yankee Point Ceanothus with glossy leaves and pale blue flower clusters',
      habit: 'Low, broad and densely spreading evergreen shrub or groundcover.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Arching branches form a dense shrub about 0.6–0.9 metres high and 2.4–3 metres wide.',
        'Oval leaves have a glossy dark-green upper surface and paler underside.',
        'Abundant blue flowers are held in rounded to short panicle-like clusters.',
        'Outer branches often touch the ground, reinforcing its low spreading habit.'
      ],
      season: 'Produces a heavy display of blue flowers in spring.',
      tags: ['Groundcover shrub', 'Non-native cultivar', 'Blue flower clusters'],
      sources: [
        ['Oregon State University', 'https://landscapeplants.oregonstate.edu/plants/ceanothus-griseus-var-horizontalis-yankee-point'],
        ['UC Davis cultivar history', 'https://library.ucdavis.edu/wp-content/uploads/2022/02/Ceanothus.pdf']
      ]
    },
    {
      id: 'hebe-blue-gem',
      scientific: 'Hebe × franciscana ‘Blue Gem’',
      scientificHtml: '<i>Hebe</i> × <i>franciscana</i> ‘Blue Gem’',
      common: 'Blue Gem Hebe',
      image: '../../assets/images/list-7-galleries/hebe-blue-gem/01.jpg',
      quizImage: '../../assets/images/list-7-galleries/hebe-blue-gem/02.jpg',
      memoryImage: '../../assets/images/list-7-galleries/hebe-blue-gem/02.jpg',
      gallery: list7Gallery('hebe-blue-gem', 2),
      alt: 'Blue Gem Hebe with dense glossy oval green leaves',
      habit: 'Compact, dense and rounded evergreen shrub.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Dense branching forms a rounded shrub about 1–1.5 metres high and wide.',
        'Oval to elliptic leaves are light to mid-green and almost succulent in texture.',
        'Leaves are closely spaced along stout stems.',
        'Violet-blue flowers are held in dense upright clusters.'
      ],
      season: 'Flowers mainly from summer into autumn.',
      tags: ['Medium shrub', 'Non-native cultivar', 'Violet-blue flowers'],
      sources: [
        ['Botanic Gardens South Australia', 'https://plantselector.botanicgardens.sa.gov.au/Plants/Details/1183'],
        ['RHS plant profile', 'https://www.rhs.org.uk/plants/215186/hebe-blue-gem/details']
      ]
    },
    {
      id: 'lavandula-dentata',
      scientific: 'Lavandula dentata',
      scientificHtml: '<i>Lavandula dentata</i>',
      common: 'French Lavender',
      image: '../../assets/images/list-7-galleries/lavandula-dentata/01.jpg',
      quizImage: '../../assets/images/list-7-galleries/lavandula-dentata/02.jpg',
      memoryImage: '../../assets/images/list-7-galleries/lavandula-dentata/02.jpg',
      gallery: list7Gallery('lavandula-dentata', 2),
      alt: 'French Lavender with grey-green toothed leaves and purple flower spikes',
      habit: 'Small, bushy and spreading evergreen shrub.',
      cycle: 'Short-lived woody perennial.',
      characteristics: [
        'Bushy growth reaches about 0.5–1 metre high and 1–1.5 metres wide.',
        'Narrow grey-green leaves have finely toothed or lobed edges.',
        'Foliage is strongly aromatic when brushed or crushed.',
        'Long unbranched stalks carry short purple-blue flower spikes topped by purple bracts.'
      ],
      season: 'Flowers mainly in summer, often for longer in mild climates.',
      tags: ['Small shrub', 'Non-native', 'Aromatic foliage'],
      sources: [
        ['RHS plant profile', 'https://www.rhs.org.uk/plants/77547/lavandula-dentata/details']
      ]
    },
    {
      id: 'leucadendron-jester',
      scientific: 'Leucadendron salignum × laureolum ‘Jester’',
      scientificHtml: '<i>Leucadendron salignum</i> × <i>laureolum</i> ‘Jester’',
      common: 'Jester Conebush',
      image: '../../assets/images/list-7-galleries/leucadendron-jester/02.jpg',
      quizImage: '../../assets/images/list-7-galleries/leucadendron-jester/01.jpg',
      memoryImage: '../../assets/images/list-7-galleries/leucadendron-jester/01.jpg',
      gallery: list7Gallery('leucadendron-jester', 3),
      alt: 'Jester Conebush with narrow green, cream, gold and red variegated leaves',
      habit: 'Medium evergreen shrub with strong upright, densely branching growth.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Strong upright stems form a structured shrub about 2 metres high and wide.',
        'Narrow leaves and bracts are variegated green, cream, gold and pink.',
        'Cool weather intensifies the foliage to red and burgundy tones.',
        'Colourful bracts surround compact cone-like flower heads near the stem tips.'
      ],
      season: 'The strongest bract and foliage colour develops from autumn through winter.',
      tags: ['Medium shrub', 'Non-native hybrid', 'Variegated foliage'],
      sources: [
        ['Proteaflora plant profile', 'https://www.proteaflora.com.au/products/proteaflora-plants-leucadendron-jester'],
        ['Plantmark plant profile', 'https://www.plantmark.com.au/leucadendron-laureolum-salignum-jester']
      ]
    },
    {
      id: 'salvia-leucantha',
      scientific: 'Salvia leucantha',
      scientificHtml: '<i>Salvia leucantha</i>',
      common: 'Mexican Bush Sage',
      image: '../../assets/images/list-7-galleries/salvia-leucantha/05.jpg',
      quizImage: '../../assets/images/list-7-galleries/salvia-leucantha/01.jpg',
      memoryImage: '../../assets/images/list-7-galleries/salvia-leucantha/01.jpg',
      gallery: list7Gallery('salvia-leucantha', 5),
      alt: 'Mexican Bush Sage with arching velvety purple flower spikes',
      habit: 'Bushy, upright to arching perennial herb or subshrub.',
      cycle: 'Perennial herb or subshrub.',
      characteristics: [
        'White-hairy stems form a bushy plant up to about 1.5 metres high.',
        'Narrow lance-shaped leaves are wrinkled above and softly white-hairy below.',
        'Long arching flower spikes carry repeated groups of flowers.',
        'Violet calyces and velvety white to purple flowers create a mauve-and-white effect.'
      ],
      season: 'Flowers mainly in late summer and autumn.',
      tags: ['Perennial subshrub', 'Non-native', 'Velvety flower spikes'],
      sources: [
        ['Royal Botanic Gardens Victoria', 'https://hortflora.rbg.vic.gov.au/taxon/ada1ccda-5340-11e7-b82b-005056b0018f'],
        ['PlantNET', 'https://plantnet.rbgsyd.nsw.gov.au/cgi-bin/NSWfl.pl?lvl=sp&name=Salvia~leucantha&page=nswfl']
      ]
    }
  ]
};
