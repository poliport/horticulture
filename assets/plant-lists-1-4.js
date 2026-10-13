const courseGallery = (list, plantId, count) =>
  Array.from({ length: count }, (_, index) =>
    `../../assets/images/list-${list}-galleries/${plantId}/${String(index + 1).padStart(2, '0')}.jpg`
  );

window.coursePlantLists = {
  1: [
    {
      id: 'eucalyptus-caesia',
      scientific: 'Eucalyptus caesia subsp. magna',
      scientificHtml: '<i>Eucalyptus caesia</i> subsp. <i>magna</i>',
      common: 'Silver Princess',
      image: '../../assets/images/list-1-galleries/eucalyptus-caesia/02.jpg',
      quizImage: '../../assets/images/list-1-galleries/eucalyptus-caesia/01.jpg',
      memoryImage: '../../assets/images/list-1-galleries/eucalyptus-caesia/01.jpg',
      gallery: courseGallery(1, 'eucalyptus-caesia', 2),
      alt: 'Silver Princess with pendulous branches, silver foliage and pink-red flowers',
      habit: 'Small evergreen mallee or ornamental tree with an open, weeping habit.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Open crown with slender, pendulous branches.',
        'Silver-grey, lance-shaped to curved leaves.',
        'Reddish-brown minni-ritchi bark curls from the trunk and branches.',
        'Large pink to red flowers, silvery buds and prominent seed capsules.'
      ],
      season: 'Large pink to red flowers hang from the branches.',
      tags: ['Small tree', 'Native', 'Weeping habit'],
      sources: []
    },
    {
      id: 'acacia-lasiocarpa',
      scientific: 'Acacia lasiocarpa ‘Prostrate’',
      scientificHtml: '<i>Acacia lasiocarpa</i> ‘Prostrate’',
      common: 'Glow Wattle / Panjang',
      image: '../../assets/images/list-1-galleries/acacia-lasiocarpa/02.jpg',
      quizImage: '../../assets/images/list-1-galleries/acacia-lasiocarpa/01.jpg',
      memoryImage: '../../assets/images/list-1-galleries/acacia-lasiocarpa/01.jpg',
      gallery: courseGallery(1, 'acacia-lasiocarpa', 2),
      alt: 'Prostrate Glow Wattle with fine foliage and golden flower heads',
      habit: 'Low-growing, prostrate and spreading evergreen shrub or groundcover.',
      cycle: 'Short-lived woody perennial.',
      characteristics: [
        'Forms a dense, spreading mound about 0.2–1 metre high.',
        'Spreads roughly 1–1.5 metres wide.',
        'Fine green foliage covers the low branches.',
        'Masses of small golden-yellow ball-shaped flower heads.'
      ],
      season: 'Flowers mainly during winter and spring.',
      tags: ['Groundcover', 'Native', 'Golden flowers'],
      sources: []
    },
    {
      id: 'correa-nummulariifolia',
      scientific: 'Correa nummulariifolia',
      scientificHtml: '<i>Correa nummulariifolia</i>',
      common: 'Round-leaf Correa',
      image: '../../assets/images/list-1-galleries/correa-nummulariifolia/02.jpg',
      quizImage: '../../assets/images/list-1-galleries/correa-nummulariifolia/01.jpg',
      memoryImage: '../../assets/images/list-1-galleries/correa-nummulariifolia/01.jpg',
      gallery: courseGallery(1, 'correa-nummulariifolia', 2),
      alt: 'Round-leaf Correa with compact growth and small rounded leaves',
      habit: 'Low-growing, spreading evergreen shrub or groundcover.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Dense, compact and spreading growth.',
        'Small rounded leaves closely cover the stems.',
        'Pendulous tubular flowers are greenish-yellow to cream.',
        'Low habit suits borders and groundcover planting.'
      ],
      season: 'Flowers mainly from autumn through winter.',
      tags: ['Groundcover', 'Native', 'Rounded leaves'],
      sources: []
    },
    {
      id: 'alyogyne-west-coast-gem',
      scientific: 'Alyogyne huegelii ‘West Coast Gem’',
      scientificHtml: '<i>Alyogyne huegelii</i> ‘West Coast Gem’',
      common: 'West Coast Gem',
      image: '../../assets/images/list-1-galleries/alyogyne-west-coast-gem/01.jpg',
      quizImage: '../../assets/images/list-1-galleries/alyogyne-west-coast-gem/01.jpg',
      memoryImage: '../../assets/images/list-1-galleries/alyogyne-west-coast-gem/01.jpg',
      gallery: courseGallery(1, 'alyogyne-west-coast-gem', 1),
      alt: 'West Coast Gem with purple hibiscus-shaped flower and divided foliage',
      habit: 'Medium to large, upright and spreading evergreen shrub.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Upright stems develop into a broad spreading shrub.',
        'Coarse green leaves are deeply divided.',
        'Large purple flowers have a hibiscus-like form.',
        'Individual flowers are short-lived but produced freely over a long period.'
      ],
      season: 'Flowers prolifically over an extended period.',
      tags: ['Large shrub', 'Native cultivar', 'Purple flowers'],
      sources: []
    },
    {
      id: 'salvia-blue-lagoon',
      scientific: 'Salvia rosmarinus ‘Blue Lagoon’',
      scientificHtml: '<i>Salvia rosmarinus</i> ‘Blue Lagoon’',
      common: 'Blue Lagoon Rosemary',
      image: '../../assets/images/list-1-galleries/salvia-blue-lagoon/02.jpg',
      quizImage: '../../assets/images/list-1-galleries/salvia-blue-lagoon/02.jpg',
      memoryImage: '../../assets/images/list-1-galleries/salvia-blue-lagoon/02.jpg',
      gallery: courseGallery(1, 'salvia-blue-lagoon', 2),
      alt: 'Blue Lagoon Rosemary with narrow aromatic foliage and blue flowers',
      habit: 'Low, semi-prostrate evergreen shrub with arching, spreading stems.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Low arching stems spread about 0.5–1 metre wide.',
        'Short, narrow, dark-green leaves are strongly aromatic.',
        'Small bright to dark-blue tubular flowers.',
        'Usually remains about 0.1–0.5 metres high.'
      ],
      season: 'Flowers mainly from spring into summer.',
      tags: ['Low shrub', 'Non-native cultivar', 'Aromatic foliage'],
      sources: []
    }
  ],
  2: [
    {
      id: 'adenanthos-sericeus',
      scientific: 'Adenanthos sericeus',
      scientificHtml: '<i>Adenanthos sericeus</i>',
      common: 'Albany Woolly Bush',
      image: '../../assets/images/list-2-galleries/adenanthos-sericeus/01.jpg',
      quizImage: '../../assets/images/list-2-galleries/adenanthos-sericeus/01.jpg',
      memoryImage: '../../assets/images/list-2-galleries/adenanthos-sericeus/01.jpg',
      gallery: courseGallery(2, 'adenanthos-sericeus', 1),
      alt: 'Albany Woolly Bush with soft silver-green needle-like foliage',
      habit: 'Medium evergreen shrub with upright, dense and bushy growth.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Dense upright growth forms a bushy shrub.',
        'Soft needle-like foliage has a silky or woolly texture.',
        'Foliage is silver-green and lighter at the growing tips.',
        'Small red flowers are partly hidden among the foliage.'
      ],
      season: 'Small red flowers occur among the foliage.',
      tags: ['Medium shrub', 'Native', 'Silky foliage'],
      sources: []
    },
    {
      id: 'grevillea-simplex',
      scientific: 'Grevillea simplex',
      scientificHtml: '<i>Grevillea simplex</i>',
      common: 'Banana Custard Grevillea',
      image: '../../assets/images/list-2-galleries/grevillea-simplex/01.jpg',
      quizImage: '../../assets/images/list-2-galleries/grevillea-simplex/01.jpg',
      memoryImage: '../../assets/images/list-2-galleries/grevillea-simplex/01.jpg',
      gallery: courseGallery(2, 'grevillea-simplex', 1),
      alt: 'Banana Custard Grevillea with narrow prickly foliage and cream flowers',
      habit: 'Evergreen shrub with erect to spreading growth.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Erect branches may spread as the shrub matures.',
        'Leaves are narrow, linear and prickly.',
        'Small flowers are white to cream.',
        'Flowers have a strong banana-custard fragrance.'
      ],
      season: 'Small fragrant white to cream flowers.',
      tags: ['Shrub', 'Native', 'Fragrant flowers'],
      sources: []
    },
    {
      id: 'grevillea-flexuosa',
      scientific: 'Grevillea flexuosa',
      scientificHtml: '<i>Grevillea flexuosa</i>',
      common: 'Zig Zag Grevillea',
      image: '../../assets/images/list-2-galleries/grevillea-flexuosa/01.jpg',
      quizImage: '../../assets/images/list-2-galleries/grevillea-flexuosa/01.jpg',
      memoryImage: '../../assets/images/list-2-galleries/grevillea-flexuosa/01.jpg',
      gallery: courseGallery(2, 'grevillea-flexuosa', 1),
      alt: 'Zig Zag Grevillea with divided foliage and pale yellow flower clusters',
      habit: 'Medium evergreen shrub with upright, branching growth.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Upright growth branches into an open shrub.',
        'Distinctive foliage bends in a zig-zag pattern.',
        'Leaves are deeply divided into narrow segments.',
        'Cream to pale-yellow flowers form cylindrical clusters.'
      ],
      season: 'Cream to pale-yellow cylindrical flower clusters.',
      tags: ['Medium shrub', 'Native', 'Zig-zag foliage'],
      sources: []
    },
    {
      id: 'goodenia-ovata',
      scientific: 'Goodenia ovata',
      scientificHtml: '<i>Goodenia ovata</i>',
      common: 'Hop Goodenia',
      image: '../../assets/images/list-2-galleries/goodenia-ovata/01.jpg',
      quizImage: '../../assets/images/list-2-galleries/goodenia-ovata/01.jpg',
      memoryImage: '../../assets/images/list-2-galleries/goodenia-ovata/01.jpg',
      gallery: courseGallery(2, 'goodenia-ovata', 1),
      alt: 'Hop Goodenia with toothed ovate leaves and yellow fan-shaped flowers',
      habit: 'Small evergreen shrub with erect, spreading or straggling growth.',
      cycle: 'Woody perennial.',
      characteristics: [
        'Small shrub with variable erect or spreading branches.',
        'Leaves are bright green and ovate or egg-shaped.',
        'Leaf margins are visibly toothed.',
        'Yellow flowers have a distinctive fan-shaped form.'
      ],
      season: 'Produces bright yellow fan-shaped flowers.',
      tags: ['Small shrub', 'Native', 'Fan-shaped flowers'],
      sources: []
    },
    {
      id: 'prostanthera-rotundifolia',
      scientific: 'Prostanthera rotundifolia',
      scientificHtml: '<i>Prostanthera rotundifolia</i>',
      common: 'Round-leaf Mint Bush',
      image: '../../assets/images/list-2-galleries/prostanthera-rotundifolia/01.jpg',
      quizImage: '../../assets/images/list-2-galleries/prostanthera-rotundifolia/01.jpg',
      memoryImage: '../../assets/images/list-2-galleries/prostanthera-rotundifolia/01.jpg',
      gallery: courseGallery(2, 'prostanthera-rotundifolia', 1),
      alt: 'Round-leaf Mint Bush with rounded aromatic leaves and mauve flowers',
      habit: 'Medium evergreen shrub with bushy, upright to spreading growth.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Bushy shrub with upright to spreading branches.',
        'Leaves are small, rounded and strongly aromatic.',
        'Foliage has a fresh mint, eucalyptus and earthy oregano scent.',
        'Masses of purple to mauve flowers cover the stems.'
      ],
      season: 'Flowers in spring.',
      tags: ['Medium shrub', 'Native', 'Aromatic leaves'],
      sources: []
    }
  ],
  3: [
    {
      id: 'banksia-marginata',
      scientific: 'Banksia marginata',
      scientificHtml: '<i>Banksia marginata</i>',
      common: 'Silver Banksia / Coastal Banksia',
      image: '../../assets/images/list-3-galleries/banksia-marginata/01.jpg',
      quizImage: '../../assets/images/list-3-galleries/banksia-marginata/01.jpg',
      memoryImage: '../../assets/images/list-3-galleries/banksia-marginata/02.jpg',
      gallery: courseGallery(3, 'banksia-marginata', 3),
      alt: 'Silver Banksia with yellow flower spikes and narrow two-toned leaves',
      habit: 'Variable evergreen shrub or small tree, growing to about 12 metres.',
      cycle: 'Perennial woody native.',
      characteristics: [
        'Narrow leaves are dark green above.',
        'Leaf undersides are distinctly silvery-white.',
        'Flower heads form pale-yellow cylindrical spikes.',
        'Woody cones remain after flowering.'
      ],
      season: 'Flowers mainly from February to July in Victoria.',
      tags: ['Shrub or tree', 'Native', 'Silver leaf undersides'],
      sources: []
    },
    {
      id: 'westringia-wild-river',
      scientific: 'Westringia ‘Wild River’',
      scientificHtml: '<i>Westringia</i> ‘Wild River’',
      common: 'Native Rosemary / Wild River Westringia',
      image: '../../assets/images/list-3-galleries/westringia-wild-river/01.jpg',
      quizImage: '../../assets/images/list-3-galleries/westringia-wild-river/01.jpg',
      memoryImage: '../../assets/images/list-3-galleries/westringia-wild-river/01.jpg',
      gallery: courseGallery(3, 'westringia-wild-river', 1),
      alt: 'Wild River Westringia with narrow green leaves and deep purple flowers',
      habit: 'Compact, dense evergreen shrub, usually about 0.5–1 metre high and wide.',
      cycle: 'Perennial woody cultivar.',
      characteristics: [
        'Compact dense growth forms a neat rounded mound.',
        'Small narrow leaves are a lush green.',
        'Deep purple flowers have the typical mint-family shape.',
        'Tolerates drought and frost once established.'
      ],
      season: 'Long flowering period, strongest in spring.',
      tags: ['Compact shrub', 'Native cultivar', 'Purple flowers'],
      sources: []
    },
    {
      id: 'banksia-integrifolia',
      scientific: 'Banksia integrifolia',
      scientificHtml: '<i>Banksia integrifolia</i>',
      common: 'Coast Banksia / Coastal Banksia',
      image: '../../assets/images/list-3-galleries/banksia-integrifolia/01.jpg',
      quizImage: '../../assets/images/list-3-galleries/banksia-integrifolia/01.jpg',
      memoryImage: '../../assets/images/list-3-galleries/banksia-integrifolia/01.jpg',
      gallery: courseGallery(3, 'banksia-integrifolia', 1),
      alt: 'Coast Banksia with pale yellow flower spikes and green leaves',
      habit: 'Evergreen upright tree, commonly 5–25 metres high and smaller when exposed.',
      cycle: 'Perennial woody native.',
      characteristics: [
        'Tall upright growth forms a substantial coastal tree.',
        'Adult leaves are often arranged in whorls.',
        'Leaves are green above and white-felted underneath.',
        'Mature trunks develop thick tessellated bark.'
      ],
      season: 'Pale-yellow flower spikes appear mainly from January to June.',
      tags: ['Tree', 'Native', 'Tessellated bark'],
      sources: []
    },
    {
      id: 'prostanthera-nivea',
      scientific: 'Prostanthera nivea',
      scientificHtml: '<i>Prostanthera nivea</i>',
      common: 'Native Mint / Snowy Mint-bush',
      image: '../../assets/images/list-3-galleries/prostanthera-nivea/01.jpg',
      quizImage: '../../assets/images/list-3-galleries/prostanthera-nivea/01.jpg',
      memoryImage: '../../assets/images/list-3-galleries/prostanthera-nivea/02.jpg',
      gallery: courseGallery(3, 'prostanthera-nivea', 3),
      alt: 'Snowy Mint-bush with narrow leaves and pale tubular flowers',
      habit: 'Erect to spreading evergreen shrub, about 1–4 metres high.',
      cycle: 'Perennial woody native.',
      characteristics: [
        'Very narrow linear leaves give the foliage a fine texture.',
        'Branches are distinctly four-ridged.',
        'White to pale-mauve tubular flowers have yellow throat spots.',
        'Unlike many mint-bushes, the foliage is not aromatic.'
      ],
      season: 'Flowers from spring to early summer.',
      tags: ['Erect shrub', 'Native', 'Non-aromatic foliage'],
      sources: []
    },
    {
      id: 'philotheca-myoporoides',
      scientific: 'Philotheca myoporoides',
      scientificHtml: '<i>Philotheca myoporoides</i>',
      common: 'Long-leaf Wax Flower / Native Daphne',
      image: '../../assets/images/list-3-galleries/philotheca-myoporoides/01.jpg',
      quizImage: '../../assets/images/list-3-galleries/philotheca-myoporoides/01.jpg',
      memoryImage: '../../assets/images/list-3-galleries/philotheca-myoporoides/01.jpg',
      gallery: courseGallery(3, 'philotheca-myoporoides', 1),
      alt: 'Long-leaf Wax Flower with pink buds and white five-petalled flowers',
      habit: 'Evergreen shrub, rarely a small tree, usually to about 2.5 metres.',
      cycle: 'Perennial woody native.',
      characteristics: [
        'Leathery leaves are aromatic when crushed.',
        'Many visible oil glands dot the leaves.',
        'Pink buds open in the leaf axils.',
        'Waxy white flowers have five distinct petals.'
      ],
      season: 'Flowers commonly from autumn through spring.',
      tags: ['Shrub', 'Native', 'Waxy white flowers'],
      sources: []
    }
  ],
  4: [
    {
      id: 'leucadendron-galpinii',
      scientific: 'Leucadendron galpinii',
      scientificHtml: '<i>Leucadendron galpinii</i>',
      common: 'Hairless Conebush / Galpin’s Conebush',
      image: '../../assets/images/list-4-galleries/leucadendron-galpinii/01.jpg',
      quizImage: '../../assets/images/list-4-galleries/leucadendron-galpinii/02.jpg',
      memoryImage: '../../assets/images/list-4-galleries/leucadendron-galpinii/02.jpg',
      gallery: courseGallery(4, 'leucadendron-galpinii', 2),
      alt: 'Galpin’s Conebush with narrow silver-grey foliage and cone-like flower heads',
      habit: 'Evergreen woody shrub with upright to rounded growth.',
      cycle: 'Long-lived perennial.',
      characteristics: [
        'Upright stems form a rounded shrub about 1.8–3 metres high.',
        'Narrow leaves are grey-green to silvery.',
        'Closely spaced leaves spiral around the stems.',
        'Numerous rounded silvery cone-like flower heads are distinctive.'
      ],
      season: 'Male and female flower heads occur on separate plants.',
      tags: ['Medium shrub', 'Non-native', 'Silver cones'],
      sources: []
    },
    {
      id: 'leucophyta-brownii',
      scientific: 'Leucophyta brownii',
      scientificHtml: '<i>Leucophyta brownii</i>',
      common: 'Cushion Bush / Silver Cushion Bush',
      image: '../../assets/images/list-4-galleries/leucophyta-brownii/02.jpg',
      quizImage: '../../assets/images/list-4-galleries/leucophyta-brownii/01.jpg',
      memoryImage: '../../assets/images/list-4-galleries/leucophyta-brownii/01.jpg',
      gallery: courseGallery(4, 'leucophyta-brownii', 2),
      alt: 'Cushion Bush with dense coral-like silver-grey stems',
      habit: 'Small, compact evergreen shrub with a dense rounded cushion form.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Dense branching forms a rounded cushion about 0.5–1 metre high.',
        'Stems and foliage are a distinctive silver-grey.',
        'Tiny leaves are held tightly against the stems.',
        'Fine branching gives the plant a soft coral-like appearance.'
      ],
      season: 'Small yellowish flower heads may appear; the foliage is the main feature.',
      tags: ['Small shrub', 'Native', 'Silver foliage'],
      sources: []
    },
    {
      id: 'tagetes-lemmonii',
      scientific: 'Tagetes lemmonii',
      scientificHtml: '<i>Tagetes lemmonii</i>',
      common: 'Passionfruit Marigold / Mexican Marigold',
      image: '../../assets/images/list-4-galleries/tagetes-lemmonii/02.jpg',
      quizImage: '../../assets/images/list-4-galleries/tagetes-lemmonii/02.jpg',
      memoryImage: '../../assets/images/list-4-galleries/tagetes-lemmonii/02.jpg',
      gallery: courseGallery(4, 'tagetes-lemmonii', 3),
      alt: 'Passionfruit Marigold with divided aromatic foliage and bright yellow flowers',
      habit: 'Medium evergreen or semi-evergreen shrub with a loose, spreading habit.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Loose spreading growth usually reaches about 1–2 metres high.',
        'Green foliage is finely divided.',
        'Leaves have a strong scent when brushed or crushed.',
        'Masses of bright yellow daisy-like flowers cover the shrub.'
      ],
      season: 'Flowers mainly in autumn and winter.',
      tags: ['Medium shrub', 'Non-native', 'Aromatic foliage'],
      sources: []
    },
    {
      id: 'senecio-serpens',
      scientific: 'Senecio serpens',
      scientificHtml: '<i>Senecio serpens</i>',
      common: 'Blue Chalk Sticks / Dwarf Blue Chalk Sticks',
      image: '../../assets/images/list-4-galleries/senecio-serpens/02.jpg',
      quizImage: '../../assets/images/list-4-galleries/senecio-serpens/01.jpg',
      memoryImage: '../../assets/images/list-4-galleries/senecio-serpens/01.jpg',
      gallery: courseGallery(4, 'senecio-serpens', 2),
      alt: 'Blue Chalk Sticks with upright blue-grey cylindrical succulent leaves',
      habit: 'Low-growing, spreading succulent groundcover.',
      cycle: 'Evergreen perennial succulent.',
      characteristics: [
        'Spreads outward into a dense mat about 15–30 centimetres high.',
        'Fleshy leaves are narrow and cylindrical.',
        'Blue-grey leaves point upward from the stems.',
        'Leaf surfaces have a chalky or powdery appearance.'
      ],
      season: 'Small white to cream flowers may appear on upright stems.',
      tags: ['Groundcover', 'Non-native', 'Succulent foliage'],
      sources: []
    },
    {
      id: 'loropetalum-china-pink',
      scientific: 'Loropetalum chinense ‘China Pink’',
      scientificHtml: '<i>Loropetalum chinense</i> ‘China Pink’',
      common: 'Chinese Fringe Flower / China Pink',
      image: '../../assets/images/list-4-galleries/loropetalum-china-pink/01.jpg',
      quizImage: '../../assets/images/list-4-galleries/loropetalum-china-pink/01.jpg',
      memoryImage: '../../assets/images/list-4-galleries/loropetalum-china-pink/01.jpg',
      gallery: courseGallery(4, 'loropetalum-china-pink', 1),
      alt: 'China Pink with burgundy foliage and bright pink fringe flowers',
      habit: 'Evergreen dense shrub with rounded to spreading growth.',
      cycle: 'Long-lived woody perennial.',
      characteristics: [
        'Dense rounded to spreading growth reaches about 1–2 metres high.',
        'Foliage is deep burgundy to purple, especially on new growth.',
        'Flowers are held in bright pink clusters.',
        'Each flower has narrow ribbon-like fringe petals.'
      ],
      season: 'Flowers mainly in spring, often with repeat flowering.',
      tags: ['Medium shrub', 'Non-native cultivar', 'Purple foliage'],
      sources: []
    }
  ]
};
