const list8Gallery = (plantId, count) =>
  Array.from({ length: count }, (_, index) =>
    `../../assets/images/list-8-galleries/${plantId}/${String(index + 1).padStart(2, '0')}.jpg`
  );

window.coursePlantLists = {
  ...(window.coursePlantLists || {}),
  8: [
    {
      id: 'aloysia-triphylla',
      scientific: 'Aloysia triphylla',
      scientificHtml: '<i>Aloysia triphylla</i>',
      common: 'Lemon Verbena',
      image: '../../assets/images/list-8-galleries/aloysia-triphylla/05.jpg',
      quizImage: '../../assets/images/list-8-galleries/aloysia-triphylla/06.jpg',
      memoryImage: '../../assets/images/list-8-galleries/aloysia-triphylla/06.jpg',
      gallery: list8Gallery('aloysia-triphylla', 6),
      alt: 'Lemon Verbena growing as a loose shrub covered with pale flower panicles',
      habit: 'Upright, loosely branching aromatic shrub or subshrub, usually about 1.5–3 metres high and wide in the ground.',
      cycle: 'Deciduous woody perennial; it may remain evergreen through warm, frost-free winters.',
      characteristics: [
        'Narrow lance-shaped leaves are commonly arranged in groups of three along the stems.',
        'The rough green leaves release a strong lemon scent when rubbed or crushed.',
        'Tiny white to pale lilac flowers are carried in loose branching panicles at the stem tips.',
        'Growth is naturally open and can be pruned to encourage a denser, bushier shape.'
      ],
      season: 'Flowers mainly in summer.',
      tags: ['Aromatic shrub', 'Non-native', 'Lemon-scented foliage'],
      sources: [
        ['Auckland Botanic Gardens', 'https://www.aucklandbotanicgardens.co.nz/plants-for-auckland/plants/aloysia-triphylla/'],
        ['RHS plant profile', 'https://www.rhs.org.uk/plants/990/aloysia-triphylla/details']
      ]
    },
    {
      id: 'banksia-blechnifolia',
      scientific: 'Banksia blechnifolia',
      scientificHtml: '<i>Banksia blechnifolia</i>',
      common: 'Fern-leaved Banksia / Groundcover Banksia',
      image: '../../assets/images/list-8-galleries/banksia-blechnifolia/05.jpg',
      quizImage: '../../assets/images/list-8-galleries/banksia-blechnifolia/03.jpg',
      memoryImage: '../../assets/images/list-8-galleries/banksia-blechnifolia/03.jpg',
      gallery: list8Gallery('banksia-blechnifolia', 7),
      alt: 'Fern-leaved Banksia with deeply divided foliage and low upright flower spikes',
      habit: 'Low, prostrate and spreading groundcover shrub, generally to about 0.5 metres high and up to 4 metres wide.',
      cycle: 'Evergreen woody perennial shrub.',
      characteristics: [
        'Large blue-green leaves grow to about 45 centimetres long and are deeply divided like fern fronds.',
        'New leaves and shoots are covered with rusty-red hairs before becoming blue-green.',
        'Flower spikes are about 6–16 centimetres long and change from reddish pink or woolly orange to cream as they open.',
        'Old flower spikes develop into woody cone-like structures containing large follicles.'
      ],
      season: 'Flowers mainly in spring.',
      tags: ['Groundcover shrub', 'Australian native', 'Fern-like foliage'],
      sources: [
        ['Australian National Botanic Gardens', 'https://www.anbg.gov.au/gnp/interns-2014/banksia-blechnifolia.html'],
        ['Gardening with Angus', 'https://gardeningwithangus.com.au/banksia-blechnifolia-ground-cover-banksia/'],
        ['Kings Park plant profile', 'https://www.bgpa.wa.gov.au/plants/banksia-blechnifolia']
      ]
    },
    {
      id: 'crowea-exalata',
      scientific: 'Crowea exalata',
      scientificHtml: '<i>Crowea exalata</i>',
      common: 'Small Crowea / Waxflower',
      image: '../../assets/images/list-8-galleries/crowea-exalata/06.jpg',
      quizImage: '../../assets/images/list-8-galleries/crowea-exalata/04.jpg',
      memoryImage: '../../assets/images/list-8-galleries/crowea-exalata/04.jpg',
      gallery: list8Gallery('crowea-exalata', 6),
      alt: 'Small Crowea forming a low shrub with narrow foliage and pink star-shaped flowers',
      habit: 'Small rounded or spreading shrub, ranging from almost prostrate to about 1 metre high and wide.',
      cycle: 'Evergreen woody perennial shrub.',
      characteristics: [
        'Slender stems form a dome-shaped plant that may become open or twiggy without tip pruning.',
        'Narrow leaves are about 15–50 millimetres long and are dotted with aromatic oil glands.',
        'Waxy star-shaped flowers have five petals and are usually pale to mid pink; white forms also occur.',
        'Flowers are about 20–25 millimetres across and occur singly near the ends of leafy stems.'
      ],
      season: 'Flowers mainly from late summer through autumn and winter, with some forms flowering for longer.',
      tags: ['Small shrub', 'Australian native', 'Pink waxy flowers'],
      sources: [
        ['Australian Native Plants Society', 'https://anpsa.org.au/plant_profiles/crowea-exalata/'],
        ['Australian National Botanic Gardens', 'https://www.anbg.gov.au/gnp/gnp3/crowea-exalata.html'],
        ['VicFlora taxon profile', 'https://vicflora.rbg.vic.gov.au/flora/taxon/4020f90d-2a28-4c51-b9ba-67a079a08a5f']
      ]
    },
    {
      id: 'leptospermum-rhiannon',
      scientific: 'Leptospermum ‘Rhiannon’',
      scientificHtml: '<i>Leptospermum</i> ‘Rhiannon’',
      common: 'Rhiannon Tea Tree',
      image: '../../assets/images/list-8-galleries/leptospermum-rhiannon/01.jpg',
      quizImage: '../../assets/images/list-8-galleries/leptospermum-rhiannon/04.jpg',
      memoryImage: '../../assets/images/list-8-galleries/leptospermum-rhiannon/04.jpg',
      gallery: list8Gallery('leptospermum-rhiannon', 5),
      alt: 'Rhiannon Tea Tree growing as an upright shrub with mauve-pink flowers',
      habit: 'Medium, upright and fairly compact shrub, growing to about 2 metres high and approximately 1–1.5 metres wide.',
      cycle: 'Evergreen woody perennial shrub.',
      characteristics: [
        'Upright branching creates a narrow to column-shaped shrub that can be pruned for denser growth.',
        'Narrow lance-shaped leaves are approximately 10 millimetres long.',
        'Large five-petalled flowers are mauve pink, about 20 millimetres across, with green centres and many stamens.',
        'Woody seed capsules remain closed on the stems until they dry or the plant dies.'
      ],
      season: 'Produces a strong display of long-lasting flowers in spring.',
      tags: ['Medium shrub', 'Australian hybrid', 'Mauve-pink flowers'],
      sources: [
        ['Australian Native Plants Society', 'https://anpsa.org.au/plant_profiles/leptospermum-rhiannon/'],
        ['Gardening with Angus', 'https://gardeningwithangus.com.au/leptospermum-rhiannon-tea-tree/']
      ]
    },
    {
      id: 'westringia-fruticosa',
      scientific: 'Westringia fruticosa',
      scientificHtml: '<i>Westringia fruticosa</i>',
      common: 'Coastal Rosemary / Native Rosemary',
      image: '../../assets/images/list-8-galleries/westringia-fruticosa/06.jpg',
      quizImage: '../../assets/images/list-8-galleries/westringia-fruticosa/01.jpg',
      memoryImage: '../../assets/images/list-8-galleries/westringia-fruticosa/01.jpg',
      gallery: list8Gallery('westringia-fruticosa', 6),
      alt: 'Coastal Rosemary forming a dense rounded grey-green shrub',
      habit: 'Dense, stiff and bushy evergreen shrub that commonly forms a rounded or spreading dome, usually 1.5–2 metres high.',
      cycle: 'Long-lived evergreen woody perennial shrub.',
      characteristics: [
        'Narrow pointed leaves are arranged mainly in whorls of four around the stems.',
        'Leaves are dark green above and densely white-hairy underneath, with rolled margins that create a grey-green appearance.',
        'Small two-lipped flowers are white to very pale mauve with purple or brown spots in the throat.',
        'Flowers are borne singly in the leaf axils and can appear throughout the year.'
      ],
      season: 'Flowers through most of the year, often with heavier displays in spring.',
      tags: ['Dense shrub', 'Australian native', 'White to mauve flowers'],
      sources: [
        ['PlantNET FloraOnline', 'https://plantnet.rbgsyd.nsw.gov.au/cgi-bin/NSWfl.pl?lvl=sp&name=Westringia~fruticosa&page=nswfl'],
        ['Australian National Botanic Gardens', 'https://www.cpbr.gov.au/gnp/gnp1/westringia-fruticosa.html'],
        ['Botanic Gardens SA Plant Selector', 'https://plantselector.botanicgardens.sa.gov.au/Plants/Details/2780']
      ]
    }
  ]
};
