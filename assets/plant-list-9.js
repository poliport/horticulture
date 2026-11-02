const list9Gallery = (plantId, count) =>
  Array.from({ length: count }, (_, index) =>
    `../../assets/images/list-9-galleries/${plantId}/${String(index + 1).padStart(2, '0')}.jpg`
  );

window.coursePlantLists = {
  ...(window.coursePlantLists || {}),
  9: [
    {
      id: 'acer-palmatum',
      scientific: 'Acer palmatum',
      scientificHtml: '<i>Acer palmatum</i>',
      common: 'Japanese Maple',
      image: '../../assets/images/list-9-galleries/acer-palmatum/02.jpg',
      quizImage: '../../assets/images/list-9-galleries/acer-palmatum/01.jpg',
      memoryImage: '../../assets/images/list-9-galleries/acer-palmatum/01.jpg',
      gallery: list9Gallery('acer-palmatum', 4),
      alt: 'Japanese Maple with fine branches and palm-shaped green leaves',
      habit: 'Small, rounded and often multi-stemmed tree or large shrub, usually with a delicate branching structure.',
      cycle: 'Deciduous woody perennial tree or shrub.',
      characteristics: [
        'Palm-shaped leaves usually have five to nine pointed lobes with finely toothed margins.',
        'Young twigs are slender and may be green or reddish, creating a fine-textured canopy.',
        'Small reddish-purple flowers appear with the new leaves and develop into paired winged seeds called samaras.',
        'Foliage commonly changes to yellow, orange or red before falling in autumn.'
      ],
      season: 'Flowers in spring; strongest foliage colour is in autumn.',
      tags: ['Small tree', 'Non-native', 'Palm-shaped leaves'],
      sources: [
        ['RHS plant profile', 'https://www.rhs.org.uk/plants/225/i-acer-palmatum-i/details'],
        ['Oregon State University', 'https://landscapeplants.oregonstate.edu/plants/acer-palmatum'],
        ['University of Florida IFAS', 'https://ask.ifas.ufl.edu/publication/fp009']
      ]
    },
    {
      id: 'lagerstroemia-tuscarora',
      scientific: 'Lagerstroemia indica ‘Tuscarora’',
      scientificHtml: '<i>Lagerstroemia indica</i> ‘Tuscarora’',
      common: 'Tuscarora Crepe Myrtle',
      image: '../../assets/images/list-9-galleries/lagerstroemia-tuscarora/04.jpg',
      quizImage: '../../assets/images/list-9-galleries/lagerstroemia-tuscarora/05.jpg',
      memoryImage: '../../assets/images/list-9-galleries/lagerstroemia-tuscarora/05.jpg',
      gallery: list9Gallery('lagerstroemia-tuscarora', 5),
      alt: 'Tuscarora Crepe Myrtle with several smooth pale trunks and glossy foliage',
      habit: 'Upright, vase-shaped deciduous small tree that develops a spreading rounded crown and is often grown with several trunks.',
      cycle: 'Deciduous woody perennial tree.',
      characteristics: [
        'Large terminal flower clusters carry bright coral-pink flowers with strongly crinkled petals.',
        'Glossy oval leaves emerge with bronze or red tones, become green, then colour orange-red in autumn.',
        'Smooth bark sheds in patches to reveal pale cream, grey and cinnamon-brown colouring.',
        'The upright branches broaden with age to form an open, vase-shaped crown.'
      ],
      season: 'Flowers for an extended period through summer.',
      tags: ['Small tree', 'Non-native cultivar', 'Coral-pink flowers'],
      sources: [
        ['City of West Torrens tree fact sheet', 'https://www.westtorrens.sa.gov.au/files/sharedassets/public/v/1/objective-digitalpublications/external-website/fact-sheets/tree-fact-sheet-crepe-myrtle-march-2019.pdf'],
        ['City of Sydney street tree guide', 'https://www.cityofsydney.nsw.gov.au/-/media/corporate/files/2020-07-migrated/files_s-2/stmp2011-150501-parte-treespecies.pdf?download=true'],
        ['Wikimedia Commons — Tuscarora flowers', 'https://commons.wikimedia.org/wiki/File:2021-08-10_11_17_00_Tuscarora_Crape_Myrtle_flowers_along_Tranquility_Court_in_the_Franklin_Farm_section_of_Oak_Hill,_Fairfax_County,_Virginia.jpg']
      ]
    },
    {
      id: 'parthenocissus-quinquefolia',
      scientific: 'Parthenocissus quinquefolia',
      scientificHtml: '<i>Parthenocissus quinquefolia</i>',
      common: 'Virginia Creeper',
      image: '../../assets/images/list-9-galleries/parthenocissus-quinquefolia/02.jpg',
      quizImage: '../../assets/images/list-9-galleries/parthenocissus-quinquefolia/01.jpg',
      memoryImage: '../../assets/images/list-9-galleries/parthenocissus-quinquefolia/01.jpg',
      gallery: list9Gallery('parthenocissus-quinquefolia', 4),
      alt: 'Virginia Creeper climbing a support with leaves divided into five leaflets',
      habit: 'Vigorous self-clinging woody climber that can also spread across the ground as a dense groundcover.',
      cycle: 'Deciduous woody perennial vine.',
      characteristics: [
        'Each palmately compound leaf usually has five pointed leaflets with toothed margins.',
        'Branched tendrils end in small adhesive discs that attach the stems to walls, trunks and other supports.',
        'Small green flowers are followed by clusters of blue-black berries on red stalks.',
        'Green summer foliage changes to vivid red, burgundy or purple in autumn.'
      ],
      season: 'Flowers in late spring to summer; berries and strong leaf colour develop from late summer into autumn.',
      tags: ['Climber', 'Non-native', 'Five leaflets'],
      sources: [
        ['RHS plant profile', 'https://www.rhs.org.uk/plants/12349/parthenocissus-quinquefolia/details'],
        ['Oregon State University', 'https://landscapeplants.oregonstate.edu/plants/parthenocissus-quinquefolia'],
        ['US Forest Service species review', 'https://research.fs.usda.gov/feis/species-reviews/parqui']
      ]
    },
    {
      id: 'pyrus-calleryana-capital',
      scientific: 'Pyrus calleryana ‘Capital’',
      scientificHtml: '<i>Pyrus calleryana</i> ‘Capital’',
      common: 'Capital Ornamental Pear',
      image: '../../assets/images/list-9-galleries/pyrus-calleryana-capital/03.jpg',
      quizImage: '../../assets/images/list-9-galleries/pyrus-calleryana-capital/04.jpg',
      memoryImage: '../../assets/images/list-9-galleries/pyrus-calleryana-capital/04.jpg',
      gallery: list9Gallery('pyrus-calleryana-capital', 4),
      alt: 'Capital Ornamental Pear growing as a narrow upright street tree',
      habit: 'Narrow, upright and strongly column-shaped small to medium tree with a clear central leader.',
      cycle: 'Deciduous woody perennial tree.',
      characteristics: [
        'Glossy oval to rounded leaves have pointed tips and turn reddish-purple in autumn.',
        'Masses of white five-petalled flowers are held in clusters before or with the new spring leaves.',
        'Branches grow steeply upward, producing a narrow crown suited to confined spaces.',
        'Young bark is smooth grey-brown and becomes more fissured or wrinkled as the trunk matures.'
      ],
      season: 'Flowers in early spring; foliage colours in autumn.',
      tags: ['Columnar tree', 'Non-native cultivar', 'White spring flowers'],
      sources: [
        ['Botanic Gardens SA Plant Selector', 'https://plantselector.botanicgardens.sa.gov.au/Plants/Details/12002'],
        ['ACT Government tree information', 'https://www.cityservices.act.gov.au/__data/assets/pdf_file/0008/1502891/Pyrus-calleryana-Capital.pdf'],
        ['City of Parramatta tree fact sheet', 'https://cityofparramatta.nsw.gov.au/sites/council/files/2022-03/Callery%20Pear.pdf']
      ]
    },
    {
      id: 'themeda-triandra',
      scientific: 'Themeda triandra',
      scientificHtml: '<i>Themeda triandra</i>',
      common: 'Kangaroo Grass',
      image: '../../assets/images/list-9-galleries/themeda-triandra/02.jpg',
      quizImage: '../../assets/images/list-9-galleries/themeda-triandra/03.jpg',
      memoryImage: '../../assets/images/list-9-galleries/themeda-triandra/03.jpg',
      gallery: list9Gallery('themeda-triandra', 5),
      alt: 'Kangaroo Grass with narrow leaves and copper-brown seed heads',
      habit: 'Dense, upright and tufted native grass that forms a rounded tussock, commonly about 0.9–1.5 metres high when flowering.',
      cycle: 'Warm-season C4 perennial grass.',
      characteristics: [
        'Narrow green to blue-green leaves arise from a dense basal tussock and are often folded along the midrib.',
        'Tall slender stems carry distinctive clustered seed heads that mature from green to copper, orange or reddish-brown.',
        'Each fertile seed is dark brown with a long, twisted black awn and a hairy base.',
        'Older foliage may change to rusty purple or straw colour during cool or dry periods.'
      ],
      season: 'Produces its most distinctive flowering stems and seed heads from late spring through summer.',
      tags: ['Tussock grass', 'Australian native', 'Copper seed heads'],
      sources: [
        ['Botanic Gardens SA Plant Selector', 'https://plantselector.botanicgardens.sa.gov.au/Plants/Details/2779'],
        ['NSW Department of Primary Industries', 'https://www.dpird.nsw.gov.au/agriculture/pastures-and-rangelands/species-varieties/kangaroo-grass'],
        ['Royal Botanic Gardens Victoria HortFlora', 'https://hortflora.rbg.vic.gov.au/taxon/adb006f6-5340-11e7-b82b-005056b0018f']
      ]
    }
  ]
};
