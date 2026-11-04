const list10Gallery = (plantId, count) =>
  Array.from({ length: count }, (_, index) =>
    `../../assets/images/list-10-galleries/${plantId}/${String(index + 1).padStart(2, '0')}.jpg`
  );

window.coursePlantLists = {
  ...(window.coursePlantLists || {}),
  10: [
    {
      id: 'kniphofia-uvaria',
      scientific: 'Kniphofia uvaria',
      scientificHtml: '<i>Kniphofia uvaria</i>',
      common: 'Red Hot Poker / Torch Lily',
      image: '../../assets/images/list-10-galleries/kniphofia-uvaria/01.jpg',
      quizImage: '../../assets/images/list-10-galleries/kniphofia-uvaria/02.jpg',
      memoryImage: '../../assets/images/list-10-galleries/kniphofia-uvaria/02.jpg',
      gallery: list10Gallery('kniphofia-uvaria', 3),
      alt: 'Red Hot Poker forming a clump of strap-shaped leaves with upright flower spikes',
      habit: 'Upright, clump-forming herb with a dense basal fountain of leaves and tall flower stems, commonly reaching about 1–1.5 metres in flower.',
      cycle: 'Rhizomatous evergreen to semi-evergreen herbaceous perennial.',
      characteristics: [
        'Coarse, narrow strap-shaped leaves form a dense basal clump and arch outward from the crown.',
        'Thick leafless flower stems rise well above the foliage and carry dense cylindrical flower spikes.',
        'Numerous tubular flowers hang downward, opening from the base of the spike upward.',
        'Young flowers are red or orange and fade to yellow-green as they mature, creating a two-coloured torch effect.'
      ],
      season: 'Flowers mainly from late spring through summer, with timing varying in mild climates.',
      tags: ['Clumping perennial', 'Asphodelaceae', 'Torch-like flowers'],
      sources: [
        ['PlantNET FloraOnline', 'https://plantnet.rbgsyd.nsw.gov.au/cgi-bin/NSWfl.pl?lvl=sp&name=Kniphofia~uvaria&page=nswfl'],
        ['NC State Extension', 'https://plants.ces.ncsu.edu/plants/kniphofia-uvaria/'],
        ['World Flora Online', 'https://www.worldfloraonline.org/taxon/wfo-0000675300']
      ]
    },
    {
      id: 'canna-tropicanna',
      scientific: 'Canna ‘Tropicanna’',
      scientificHtml: '<i>Canna</i> ‘Tropicanna’',
      common: 'Tropicanna Canna Lily',
      image: '../../assets/images/list-10-galleries/canna-tropicanna/02.jpg',
      quizImage: '../../assets/images/list-10-galleries/canna-tropicanna/01.jpg',
      memoryImage: '../../assets/images/list-10-galleries/canna-tropicanna/01.jpg',
      gallery: list10Gallery('canna-tropicanna', 3),
      alt: 'Tropicanna Canna Lily with large striped leaves and vivid orange flowers',
      habit: 'Fast-growing, upright and clump-forming tropical-looking plant, usually about 1.2–1.8 metres high.',
      cycle: 'Rhizomatous herbaceous perennial; top growth may die back during cold or frosty weather.',
      characteristics: [
        'Large paddle-shaped leaves are striped with burgundy, green, yellow, pink and orange tones.',
        'Thick upright pseudostems arise in groups from spreading underground rhizomes.',
        'Bright orange flowers are carried in loose clusters above the colourful foliage.',
        'New shoots emerge strongly in warm weather and develop quickly into a bold, dense clump.'
      ],
      season: 'Flowers mainly from summer into early autumn; the foliage provides colour throughout active growth.',
      tags: ['Upright perennial', 'Cannaceae', 'Striped foliage'],
      sources: [
        ['Royal Botanic Garden Sydney', 'https://rbgsydney.gardenexplorer.org/taxon-118714.aspx'],
        ['RHS plant profile', 'https://www.rhs.org.uk/plants/523886/canna-phaison-tropicana/details'],
        ['Missouri Botanical Garden', 'https://plantfinder.mobot.org/PlantFinderDetails.aspx?isprofile=0&letter=C&taxonid=256855']
      ]
    },
    {
      id: 'clivia-miniata',
      scientific: 'Clivia miniata',
      scientificHtml: '<i>Clivia miniata</i>',
      common: 'Clivia / Bush Lily',
      image: '../../assets/images/list-10-galleries/clivia-miniata/03.jpg',
      quizImage: '../../assets/images/list-10-galleries/clivia-miniata/02.jpg',
      memoryImage: '../../assets/images/list-10-galleries/clivia-miniata/02.jpg',
      gallery: list10Gallery('clivia-miniata', 3),
      alt: 'Clivia with broad dark green leaves and a rounded cluster of orange flowers',
      habit: 'Slow-growing, upright and clump-forming plant with broad evergreen leaf fans, commonly about 0.4–0.6 metres high.',
      cycle: 'Long-lived evergreen herbaceous perennial.',
      characteristics: [
        'Thick dark green strap-shaped leaves grow in opposite ranks to form broad arching fans.',
        'A swollen bulb-like stem base and fleshy roots gradually produce additional shoots and a wider clump.',
        'Strong leafless stalks carry rounded umbels of large orange funnel-shaped flowers with yellow centres.',
        'Pollinated flowers may be followed by rounded berries that change from green to orange-red as they ripen.'
      ],
      season: 'Flowers mainly from late winter through spring.',
      tags: ['Clumping perennial', 'Amaryllidaceae', 'Orange flower umbels'],
      sources: [
        ['NParks Singapore', 'https://www.nparks.gov.sg/florafaunaweb/flora/3/8/3832'],
        ['Kew Plants of the World Online', 'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A994513-1/general-information'],
        ['New York Botanical Garden', 'https://libguides.nybg.org/Clivia']
      ]
    },
    {
      id: 'liriope-muscari',
      scientific: 'Liriope muscari',
      scientificHtml: '<i>Liriope muscari</i>',
      common: 'Lily Turf',
      image: '../../assets/images/list-10-galleries/liriope-muscari/04.jpg',
      quizImage: '../../assets/images/list-10-galleries/liriope-muscari/03.jpg',
      memoryImage: '../../assets/images/list-10-galleries/liriope-muscari/03.jpg',
      gallery: list10Gallery('liriope-muscari', 4),
      alt: 'Lily Turf forming a dense tuft with purple flower spikes above narrow leaves',
      habit: 'Compact, grass-like and slowly spreading clumping groundcover, generally about 30–45 centimetres high and wide.',
      cycle: 'Evergreen rhizomatous herbaceous perennial.',
      characteristics: [
        'Dense basal tufts are made up of narrow, arching, glossy dark green leaves.',
        'Short underground rhizomes and fleshy roots allow the clump to broaden gradually without running aggressively.',
        'Erect spikes carry closely spaced whorls of small violet-purple flowers above or among the leaves.',
        'Flowers are followed by round glossy black berry-like fruits that may remain into winter.'
      ],
      season: 'Flowers from late summer into autumn; dark fruits follow in autumn and winter.',
      tags: ['Groundcover', 'Asparagaceae', 'Purple flower spikes'],
      sources: [
        ['RHS plant profile', 'https://www.rhs.org.uk/plants/10344/liriope-muscari/details'],
        ['NC State Extension', 'https://plants.ces.ncsu.edu/plants/liriope-muscari/'],
        ['Missouri Botanical Garden', 'https://www.missouribotanicalgarden.org/PlantFinder/PlantFinderDetails.aspx?ht=3&isprofile=0&taxonid=244864']
      ]
    },
    {
      id: 'pycnosorus-globosus',
      scientific: 'Pycnosorus globosus',
      scientificHtml: '<i>Pycnosorus globosus</i>',
      common: 'Billy Buttons / Drumsticks',
      image: '../../assets/images/list-10-galleries/pycnosorus-globosus/01.jpg',
      quizImage: '../../assets/images/list-10-galleries/pycnosorus-globosus/04.jpg',
      memoryImage: '../../assets/images/list-10-galleries/pycnosorus-globosus/04.jpg',
      gallery: list10Gallery('pycnosorus-globosus', 5),
      alt: 'Billy Buttons with silvery foliage and bright yellow spherical flower heads',
      habit: 'Tufted upright native herb with low silvery foliage and long slender flower stems reaching about 0.5–1.2 metres high.',
      cycle: 'Rhizomatous herbaceous perennial.',
      characteristics: [
        'Linear leaves are covered in fine white-grey woolly hairs, giving the plant a soft silvery appearance.',
        'Long, slender and usually unbranched flower stems rise well above the basal foliage.',
        'Each golden-yellow globe is a compound flower head made from many tightly packed tiny florets.',
        'The rounded flower heads are usually about 8–35 millimetres across and remain decorative as they dry.'
      ],
      season: 'Flowers mainly from early spring through summer.',
      tags: ['Tufted perennial', 'Asteraceae', 'Yellow globe flowers'],
      sources: [
        ['PlantNET FloraOnline', 'https://plantnet.rbgsyd.nsw.gov.au/cgi-bin/NSWfl.pl?lvl=sp&name=Pycnosorus~globosus&page=nswfl'],
        ['Australian Plants Society', 'https://resources.austplants.com.au/plant/pycnosorus-globosus/'],
        ['Australian Botanic Garden Mount Annan', 'https://australianbg.gardenexplorer.org/taxon-737.aspx']
      ]
    }
  ]
};
