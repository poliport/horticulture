const galleryPaths = (plantId, count) =>
  Array.from({ length: count }, (_, index) =>
    `../../assets/images/list-6-galleries/${plantId}/${String(index + 1).padStart(2, '0')}.jpg`
  );

const list6Plants = [
  {
    id: 'hardenbergia',
    scientific: 'Hardenbergia violacea ‘Happy Wanderer’',
    scientificHtml: '<i>Hardenbergia violacea</i> ‘Happy Wanderer’',
    common: 'Happy Wanderer / Purple Coral Pea',
    image: '../../assets/images/list-6-galleries/hardenbergia/02.jpg',
    quizImage: '../../assets/images/list-6-galleries/hardenbergia/02.jpg',
    memoryImage: '../../assets/images/list-6-galleries/hardenbergia/02.jpg',
    memoryPosition: '50% 58%',
    gallery: galleryPaths('hardenbergia', 8),
    alt: 'Purple pea flowers and lance-shaped leaves of Happy Wanderer',
    habit: 'Vigorous twining climber or scrambling groundcover.',
    cycle: 'Evergreen perennial.',
    characteristics: [
      'Vigorous twining or scrambling stems climb over supports.',
      'Dark green, glossy, lance-shaped leaves.',
      'Long sprays of rich violet-purple pea-shaped flowers.',
      'Flowers mainly in winter and spring.'
    ],
    season: 'Flowers mainly in winter and spring.',
    tags: ['Climber', 'Native', 'Winter–spring flowers'],
    sources: [
      ['ANPSA plant profile', 'https://anpsa.org.au/plant_profiles/hardenbergia-violacea/'],
      ['Cultivar description', 'https://anpsa.org.au/wp-content/uploads/Australian-Plants/Australian-Plants-Vol11-91.pdf']
    ]
  },
  {
    id: 'trachelospermum',
    scientific: 'Trachelospermum jasminoides',
    scientificHtml: '<i>Trachelospermum jasminoides</i>',
    common: 'Star Jasmine',
    image: '../../assets/images/list-6-galleries/trachelospermum/02.jpg',
    quizImage: '../../assets/images/list-6-galleries/trachelospermum/04.jpg',
    memoryImage: '../../assets/images/list-6-galleries/trachelospermum/04.jpg',
    gallery: galleryPaths('trachelospermum', 8),
    alt: 'White star-shaped flowers and glossy leaves of Star Jasmine',
    habit: 'Twining woody climber; it can also be pruned as a spreading groundcover.',
    cycle: 'Evergreen perennial.',
    characteristics: [
      'Woody twining stems climb around a support.',
      'Glossy, dark green, oval leaves may turn bronze-red in cool weather.',
      'Clusters of strongly fragrant white star-shaped flowers.',
      'Dense spreading growth can be maintained as a groundcover.'
    ],
    season: 'Flowers mainly in summer.',
    tags: ['Climber', 'Non-native', 'Fragrant flowers'],
    sources: [
      ['Botanic Gardens SA', 'https://plantselector.botanicgardens.sa.gov.au/Plants/Details/2562']
    ]
  },
  {
    id: 'alyogyne',
    scientific: 'Alyogyne huegelii ‘Blue Heeler’',
    scientificHtml: '<i>Alyogyne huegelii</i> ‘Blue Heeler’',
    common: 'Blue Heeler Native Hibiscus',
    image: '../../assets/images/list-6-galleries/alyogyne/03.jpg',
    quizImage: '../../assets/images/list-6-galleries/alyogyne/01.jpg',
    memoryImage: '../../assets/images/list-6-galleries/alyogyne/01.jpg',
    memoryPosition: '50% 42%',
    gallery: galleryPaths('alyogyne', 3),
    alt: 'Purple hibiscus-shaped flowers and lobed leaves of Blue Heeler',
    habit: 'Dense, low, prostrate shrub or groundcover.',
    cycle: 'Evergreen perennial shrub.',
    characteristics: [
      'Low, dense, prostrate to spreading growth.',
      'Relatively small, lobed and textured green leaves.',
      'Dark purple flowers with blue tones fade to mid-purple as they age.',
      'Repeat flowers through the warmer months.'
    ],
    season: 'Repeat flowers through the warmer months, especially spring and summer.',
    tags: ['Groundcover', 'Native cultivar', 'Purple flowers'],
    sources: [
      ['Plantmark profile', 'https://www.plantmark.com.au/alyogyne-huegelii-wrayae-blue-heeler']
    ]
  },
  {
    id: 'acacia',
    scientific: 'Acacia glaucoptera ‘Nana’',
    scientificHtml: '<i>Acacia glaucoptera</i> ‘Nana’',
    common: 'Dwarf Clay Wattle / Dwarf Flat Wattle',
    image: '../../assets/images/list-6-galleries/acacia/18.jpg',
    quizImage: '../../assets/images/list-6-galleries/acacia/14.jpg',
    memoryImage: '../../assets/images/list-6-galleries/acacia/01.jpg',
    gallery: galleryPaths('acacia', 33),
    alt: 'Dwarf Clay Wattle with winged stems, reddish new growth and yellow flower heads',
    habit: 'Low, spreading dwarf shrub.',
    cycle: 'Evergreen perennial shrub.',
    characteristics: [
      'Distinctive flattened, blue-green wing-like stems or cladodes.',
      'New growth often develops purple-red colouring.',
      'Small golden-yellow globular flower heads.',
      'Naturally spreading growth; ‘Nana’ is the dwarf form.'
    ],
    season: 'Flowers mainly from late winter through spring.',
    tags: ['Dwarf shrub', 'Native cultivar', 'Winged stems'],
    sources: [
      ['Australian Plants Society Victoria', 'https://apsvic.org.au/australian-native-plants-guide/'],
      ['Australian National Botanic Gardens', 'https://www.anbg.gov.au/acacia/species/A-glaucoptera.html']
    ]
  },
  {
    id: 'dianella',
    scientific: 'Dianella brevicaulis',
    scientificHtml: '<i>Dianella brevicaulis</i>',
    common: 'Short Stem Flax Lily',
    image: '../../assets/images/list-6-galleries/dianella/04.jpg',
    quizImage: '../../assets/images/list-6-galleries/dianella/01.jpg',
    memoryImage: '../../assets/images/list-6-galleries/dianella/01.jpg',
    gallery: galleryPaths('dianella', 5),
    alt: 'Tufted strappy leaves and small blue flowers of Short Stem Flax Lily',
    habit: 'Small, closely tufted, grass-like perennial.',
    cycle: 'Evergreen perennial.',
    characteristics: [
      'Dense tufts of narrow, upright, strap-like leaves.',
      'Branching flower stems are generally shorter than the foliage.',
      'Small blue to violet star-shaped flowers.',
      'Flowers are followed by shiny purple berries.'
    ],
    season: 'Flowers from October to December in Victoria.',
    tags: ['Tufted perennial', 'Native', 'Purple berries'],
    sources: [
      ['VicFlora plant profile', 'https://vicflora.rbg.vic.gov.au/flora/taxon/485c41db-cc8f-4c17-af6e-a354365331e6']
    ]
  }
];

const list5Plants = [
  {
    id: 'doryanthes',
    scientific: 'Doryanthes palmeri',
    scientificHtml: '<i>Doryanthes palmeri</i>',
    common: 'Giant Spear Lily',
    image: 'assets/doryanthes-palmeri.jpg',
    quizImage: 'assets/doryanthes-palmeri.jpg',
    memoryImage: 'assets/doryanthes-palmeri.jpg',
    memoryPosition: '50% 68%',
    gallery: ['assets/doryanthes-palmeri.jpg'],
    alt: 'Large sword-shaped leaves and red flower spike of Giant Spear Lily',
    habit: 'Large, upright, clumping rosette-forming plant.',
    cycle: 'Long-lived evergreen perennial.',
    characteristics: [
      'Large sword-shaped leaves form a dense basal rosette.',
      'Leaves arch outward from a large upright clump.',
      'A very tall flowering stem carries red to reddish-brown flowers.',
      'The flowering stem may reach several metres high.'
    ],
    season: 'Flowers mainly in spring.',
    tags: ['Clumping perennial', 'Native', 'Tall flower spike'],
    sources: []
  },
  {
    id: 'chorizema',
    scientific: 'Chorizema cordatum',
    scientificHtml: '<i>Chorizema cordatum</i>',
    common: 'Heart-leaf Flame Pea',
    image: 'assets/chorizema-cordatum.jpg',
    quizImage: 'assets/chorizema-cordatum.jpg',
    memoryImage: 'assets/chorizema-cordatum.jpg',
    memoryPosition: '50% 38%',
    gallery: ['assets/chorizema-cordatum.jpg'],
    alt: 'Orange, red and yellow pea flowers of Heart-leaf Flame Pea',
    habit: 'Small, spreading or scrambling shrub.',
    cycle: 'Evergreen perennial shrub.',
    characteristics: [
      'Slender stems form a spreading or scrambling shrub.',
      'Leaves are heart-shaped and leathery.',
      'Bright red, orange and yellow pea-shaped flowers.',
      'Usually grows to about 0.5–1 metre high.'
    ],
    season: 'Flowers mainly from late winter to spring.',
    tags: ['Scrambling shrub', 'Native', 'Pea flowers'],
    sources: []
  },
  {
    id: 'grevillea',
    scientific: 'Grevillea ‘Moonlight’',
    scientificHtml: '<i>Grevillea</i> ‘Moonlight’',
    common: 'Moonlight Grevillea',
    image: 'assets/grevillea-moonlight.jpg',
    quizImage: 'assets/grevillea-moonlight.jpg',
    memoryImage: 'assets/grevillea-moonlight.jpg',
    memoryPosition: '50% 22%',
    gallery: ['assets/grevillea-moonlight.jpg'],
    alt: 'Cream flower cluster and divided foliage of Moonlight Grevillea',
    habit: 'Large, dense, spreading shrub.',
    cycle: 'Evergreen perennial shrub.',
    characteristics: [
      'Dense spreading growth forms a large shrub.',
      'Dark green leaves are deeply divided and often paler underneath.',
      'Large cylindrical flower clusters are cream to pale yellow.',
      'Flowers can appear for much of the year.'
    ],
    season: 'Flowers for much of the year.',
    tags: ['Large shrub', 'Native cultivar', 'Cream flowers'],
    sources: []
  },
  {
    id: 'eremophila',
    scientific: 'Eremophila hygrophana',
    scientificHtml: '<i>Eremophila hygrophana</i>',
    common: 'Blue Emu Bush',
    image: 'assets/eremophila-hygrophana.jpg',
    quizImage: 'assets/eremophila-hygrophana.jpg',
    memoryImage: 'assets/eremophila-hygrophana.jpg',
    gallery: ['assets/eremophila-hygrophana.jpg'],
    alt: 'Silvery foliage and purple tubular flowers of Blue Emu Bush',
    habit: 'Small, erect, compact shrub.',
    cycle: 'Evergreen perennial shrub.',
    characteristics: [
      'Densely branched, compact and upright growth.',
      'Leaves are soft, hairy and grey to silvery green.',
      'Tubular flowers are violet to purple.',
      'Usually grows to about 0.3–1.2 metres high.'
    ],
    season: 'Flowers can occur through much of the year.',
    tags: ['Compact shrub', 'Native', 'Silver foliage'],
    sources: []
  },
  {
    id: 'mahonia',
    scientific: 'Mahonia lomariifolia',
    scientificHtml: '<i>Mahonia lomariifolia</i>',
    common: 'Mahonia / Chinese Holly',
    image: 'assets/mahonia-lomariifolia.jpg',
    quizImage: 'assets/mahonia-lomariifolia.jpg',
    memoryImage: 'assets/mahonia-lomariifolia.jpg',
    memoryPosition: '50% 38%',
    gallery: ['assets/mahonia-lomariifolia.jpg'],
    alt: 'Long divided leaves and blue-black berries of Mahonia',
    habit: 'Upright, medium to large shrub.',
    cycle: 'Evergreen perennial shrub.',
    characteristics: [
      'Long pinnate leaves have many sharply toothed leaflets.',
      'Growth is upright with several woody stems.',
      'Upright yellow flower clusters appear in autumn to winter.',
      'Flowers are followed by blue-black berries.'
    ],
    season: 'Flowers mainly in autumn and winter.',
    tags: ['Upright shrub', 'Non-native', 'Toothed leaflets'],
    sources: []
  }
];

const plantListNumber = document.body.dataset.plantList;
const builtInLists = { 5: list5Plants, 6: list6Plants };
const plants = window.coursePlantLists?.[plantListNumber] || builtInLists[plantListNumber];

if (!plants) throw new Error(`No plant data found for Plant List ${plantListNumber}.`);

const modeCopy = {
  study: ['Know the five plants.', 'Use the cards to learn the strongest visual cues, plant habit and life cycle.'],
  quiz: ['Test your plant recognition.', 'Answer twenty-five mixed questions. Each round is shuffled.'],
  memory: ['Match the plant to its name.', 'Turn over two cards at a time and pair each photograph with its scientific name.']
};

const shuffle = items => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const characteristicsText = plant => plant.characteristics.join(' ');
const characteristicsList = plant =>
  `<ul class="characteristics-list">${plant.characteristics.map(item => `<li>${item}</li>`).join('')}</ul>`;
const normalizeScientificName = value => value
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[×‘’'".]/g, ' ')
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();

function renderStudyCards() {
  const grid = document.querySelector('#study-grid');
  grid.replaceChildren(...plants.map((plant, index) => {
    const article = document.createElement('article');
    article.className = 'plant-card';
    article.innerHTML = `
      <button class="plant-image" type="button" aria-label="Open image gallery for ${plant.scientific}">
        <img src="${plant.image}" alt="${plant.alt}" style="object-position:${plant.studyPosition || '50% 50%'}">
        <span class="plant-index">${String(index + 1).padStart(2, '0')}</span>
        <span class="gallery-badge">View ${plant.gallery.length} ${plant.gallery.length === 1 ? 'photo' : 'photos'}</span>
      </button>
      <div class="plant-content">
        <p class="plant-common">${plant.common}</p>
        <h2>${plant.scientificHtml}</h2>
        <div class="plant-tags">${plant.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        <dl class="plant-facts">
          <div><dt>Plant habit</dt><dd>${plant.habit}</dd></div>
          <div><dt>Life cycle</dt><dd>${plant.cycle}</dd></div>
          <div><dt>Growth characteristics</dt><dd>${characteristicsList(plant)}</dd></div>
          <div><dt>Flowering</dt><dd>${plant.season}</dd></div>
        </dl>
        ${plant.sources.length ? `<div class="plant-sources">${plant.sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`).join('')}</div>` : ''}
      </div>`;
    article.querySelector('.plant-image').addEventListener('click', () => openGallery(plant));
    return article;
  }));
}

function setMode(mode) {
  document.querySelectorAll('.mode-button').forEach(button => {
    button.setAttribute('aria-selected', String(button.dataset.mode === mode));
  });
  document.querySelectorAll('.mode-panel').forEach(panel => {
    panel.hidden = panel.id !== `${mode}-panel`;
  });
  document.querySelector('#mode-title').textContent = modeCopy[mode][0];
  document.querySelector('#mode-intro').textContent = modeCopy[mode][1];
  if (mode === 'quiz' && quizQuestions.length === 0) resetQuiz();
}

document.querySelectorAll('.mode-button').forEach(button => {
  button.addEventListener('click', () => setMode(button.dataset.mode));
});

let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

function makeQuizQuestions() {
  return shuffle(plants.flatMap(plant => [
    {
      type: 'Photo identification', visual: 'photo', plant,
      prompt: 'Which plant is shown?', answer: plant.scientific,
      choices: plants.map(item => item.scientific), italic: true
    },
    {
      type: 'Common name', visual: 'text', plant,
      clue: plant.scientific, prompt: `What is the common name of ${plant.scientific}?`,
      answer: plant.common, choices: plants.map(item => item.common)
    },
    {
      type: 'Plant habit', visual: 'text', plant,
      clue: plant.scientific, prompt: 'Which plant habit is correct?',
      answer: plant.habit, choices: plants.map(item => item.habit)
    },
    {
      type: 'Growth characteristics', visual: 'text', plant,
      clue: characteristicsText(plant), prompt: 'Which plant matches these growth characteristics?',
      answer: plant.scientific, choices: plants.map(item => item.scientific), italic: true
    },
    {
      type: 'Scientific name', visual: 'photo', plant, input: true,
      prompt: 'Type all or part of the scientific name.', answer: plant.scientific
    }
  ]));
}

function resetQuiz() {
  quizQuestions = makeQuizQuestions();
  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  document.querySelector('#quiz-score').textContent = '0';
  document.querySelector('#score-large').textContent = '0';
  renderQuestion();
}

function renderQuestion() {
  const question = quizQuestions[quizIndex];
  const visual = document.querySelector('#quiz-visual');
  const image = document.querySelector('#quiz-image');
  const clue = document.querySelector('#quiz-clue');
  quizAnswered = false;

  document.querySelector('#quiz-count').textContent = `${quizIndex + 1} / ${quizQuestions.length}`;
  document.querySelector('#quiz-progress').style.width = `${(quizIndex / quizQuestions.length) * 100}%`;
  document.querySelector('#question-type').textContent = question.type;
  document.querySelector('#question-text').textContent = question.prompt;
  document.querySelector('#quiz-feedback').textContent = 'Choose the best answer.';
  document.querySelector('#next-question').hidden = true;

  if (question.visual === 'photo') {
    visual.classList.remove('text-clue');
    image.src = question.plant.quizImage || question.plant.image;
    image.alt = 'Unlabelled plant photograph';
    image.style.objectPosition = question.plant.quizPosition || '50% 50%';
    clue.textContent = '';
  } else {
    visual.classList.add('text-clue');
    image.removeAttribute('src');
    image.alt = '';
    clue.textContent = question.clue;
  }

  const optionsContainer = document.querySelector('#quiz-options');
  if (question.input) {
    const form = document.createElement('form');
    form.className = 'typed-answer-form';
    form.innerHTML = `
      <label for="typed-scientific-name">Scientific name</label>
      <div><input id="typed-scientific-name" name="scientific-name" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="For example: Salvia or leucantha" required minlength="4"><button class="button button-secondary" type="submit">Check answer</button></div>
      <small>Enter at least four letters. A genus, species or cultivar name is enough.</small>`;
    form.addEventListener('submit', event => {
      event.preventDefault();
      answerTypedQuestion(form);
    });
    optionsContainer.replaceChildren(form);
    return;
  }

  const options = shuffle(question.choices).slice(0, 4);
  if (!options.includes(question.answer)) options[0] = question.answer;
  optionsContainer.replaceChildren(...shuffle(options).map(option => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.dataset.answer = option;
    button.innerHTML = question.italic ? `<i>${option}</i>` : option;
    button.addEventListener('click', () => answerQuestion(button, option));
    return button;
  }));
}

function answerQuestion(selected, answer) {
  if (quizAnswered) return;
  quizAnswered = true;
  const question = quizQuestions[quizIndex];
  const correct = answer === question.answer;

  document.querySelectorAll('.quiz-option').forEach(button => {
    button.disabled = true;
    if (button.dataset.answer === question.answer) button.classList.add('correct');
  });
  if (!correct) selected.classList.add('incorrect');

  finishQuizAnswer(question, correct);
}

function answerTypedQuestion(form) {
  if (quizAnswered) return;
  const input = form.querySelector('input');
  const guess = normalizeScientificName(input.value);
  if (guess.length < 4) {
    input.setCustomValidity('Enter at least four letters from the scientific name.');
    input.reportValidity();
    input.setCustomValidity('');
    return;
  }

  quizAnswered = true;
  const question = quizQuestions[quizIndex];
  const correct = normalizeScientificName(question.answer).includes(guess);
  form.classList.add(correct ? 'correct' : 'incorrect');
  input.disabled = true;
  form.querySelector('button').disabled = true;
  finishQuizAnswer(question, correct);
}

function finishQuizAnswer(question, correct) {
  if (correct) quizScore++;
  document.querySelector('#quiz-score').textContent = quizScore;
  document.querySelector('#score-large').textContent = quizScore;

  const feedback = document.querySelector('#quiz-feedback');
  feedback.innerHTML = `<strong>${correct ? `Correct: ${question.answer}.` : `The answer is ${question.answer}.`}</strong>${question.plant.common} · ${characteristicsText(question.plant)}`;
  const next = document.querySelector('#next-question');
  next.textContent = quizIndex === quizQuestions.length - 1 ? 'See result' : 'Next question';
  next.hidden = false;
  document.querySelector('#quiz-progress').style.width = `${((quizIndex + 1) / quizQuestions.length) * 100}%`;
}

function nextQuestion() {
  if (quizIndex < quizQuestions.length - 1) {
    quizIndex++;
    renderQuestion();
    return;
  }
  const percent = Math.round((quizScore / quizQuestions.length) * 100);
  document.querySelector('#question-type').textContent = 'Quiz complete';
  document.querySelector('#question-text').textContent = `You scored ${quizScore} out of ${quizQuestions.length}.`;
  document.querySelector('#quiz-visual').classList.add('text-clue');
  document.querySelector('#quiz-clue').textContent = percent >= 80 ? 'Strong plant recognition.' : 'Restart for a freshly shuffled round.';
  document.querySelector('#quiz-options').replaceChildren();
  document.querySelector('#quiz-feedback').textContent = percent >= 80 ? 'You are recalling the names and growth characteristics well.' : 'Review the study cards, then try again.';
  document.querySelector('#next-question').hidden = true;
}

document.querySelector('#restart-quiz').addEventListener('click', resetQuiz);
document.querySelector('#next-question').addEventListener('click', nextQuestion);

let firstCard = null;
let secondCard = null;
let memoryLocked = false;
let memoryMoves = 0;
let memoryMatches = 0;
let memorySeconds = 0;
let memoryTimer = null;
let memoryStarted = false;

function formatTime(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

function makeMemoryCard(plant, type) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'memory-card';
  card.dataset.id = plant.id;
  card.dataset.type = type;
  card.setAttribute('aria-label', 'Hidden memory card');
  card.innerHTML = type === 'photo'
    ? `<span class="memory-face memory-back"></span><span class="memory-face memory-front"><img src="${plant.memoryImage || plant.image}" alt="${plant.alt}" style="object-position:${plant.memoryPosition || '50% 50%'}"></span>`
    : `<span class="memory-face memory-back"></span><span class="memory-face memory-front memory-name"><strong>${plant.scientificHtml}</strong><span>${plant.common}</span></span>`;
  card.addEventListener('click', () => flipCard(card));
  return card;
}

function startMemoryTimer() {
  if (memoryStarted) return;
  memoryStarted = true;
  memoryTimer = window.setInterval(() => {
    memorySeconds++;
    document.querySelector('#memory-time').textContent = formatTime(memorySeconds);
  }, 1000);
}

function flipCard(card) {
  if (memoryLocked || card === firstCard || card.classList.contains('is-matched')) return;
  startMemoryTimer();
  card.classList.add('is-flipped');
  card.setAttribute('aria-label', 'Revealed memory card');
  if (!firstCard) {
    firstCard = card;
    return;
  }
  secondCard = card;
  memoryMoves++;
  document.querySelector('#memory-moves').textContent = memoryMoves;
  checkMemoryPair();
}

function checkMemoryPair() {
  const matched = firstCard.dataset.id === secondCard.dataset.id && firstCard.dataset.type !== secondCard.dataset.type;
  if (!matched) {
    memoryLocked = true;
    window.setTimeout(() => {
      firstCard.classList.remove('is-flipped');
      secondCard.classList.remove('is-flipped');
      firstCard.setAttribute('aria-label', 'Hidden memory card');
      secondCard.setAttribute('aria-label', 'Hidden memory card');
      firstCard = secondCard = null;
      memoryLocked = false;
    }, 760);
    return;
  }

  firstCard.classList.add('is-matched');
  secondCard.classList.add('is-matched');
  firstCard.disabled = true;
  secondCard.disabled = true;
  const plant = plants.find(item => item.id === firstCard.dataset.id);
  memoryMatches++;
  document.querySelector('#memory-matches').textContent = `${memoryMatches} / ${plants.length}`;
  document.querySelector('#memory-progress').style.width = `${(memoryMatches / plants.length) * 100}%`;
  document.querySelector('#memory-note').innerHTML = `<span class="module-label">Matched</span><h3>${plant.scientificHtml}</h3>${characteristicsList({ characteristics: plant.characteristics.slice(0, 2) })}`;
  firstCard = secondCard = null;

  if (memoryMatches === plants.length) {
    window.clearInterval(memoryTimer);
    window.setTimeout(() => {
      document.querySelector('#complete-summary').textContent = `${memoryMoves} moves in ${formatTime(memorySeconds)}.`;
      document.querySelector('#complete-dialog').showModal();
    }, 450);
  }
}

function resetMemory() {
  window.clearInterval(memoryTimer);
  const dialog = document.querySelector('#complete-dialog');
  if (dialog.open) dialog.close();
  firstCard = secondCard = null;
  memoryLocked = false;
  memoryMoves = 0;
  memoryMatches = 0;
  memorySeconds = 0;
  memoryStarted = false;
  document.querySelector('#memory-moves').textContent = '0';
  document.querySelector('#memory-matches').textContent = `0 / ${plants.length}`;
  document.querySelector('#memory-time').textContent = '0:00';
  document.querySelector('#memory-progress').style.width = '0%';
  document.querySelector('#memory-note').innerHTML = '<span class="module-label">Memory match</span><h3>Pair each close-up photo with its scientific name.</h3><p>Match a pair to reveal its key growth characteristics.</p>';
  const cards = plants.flatMap(plant => [makeMemoryCard(plant, 'photo'), makeMemoryCard(plant, 'name')]);
  document.querySelector('#memory-board').replaceChildren(...shuffle(cards));
}

document.querySelector('#restart-memory').addEventListener('click', resetMemory);
document.querySelector('#play-again').addEventListener('click', resetMemory);

let galleryPlant = null;
let galleryIndex = 0;
const galleryDialog = document.createElement('dialog');
galleryDialog.className = 'gallery-dialog';
galleryDialog.innerHTML = `
  <div class="gallery-shell">
    <div class="gallery-heading">
      <div><span class="module-label">Image gallery</span><h2 id="gallery-title"></h2></div>
      <button class="gallery-close" type="button" aria-label="Close gallery">×</button>
    </div>
    <div class="gallery-stage">
      <button class="gallery-arrow gallery-previous" type="button" aria-label="Previous image">←</button>
      <img id="gallery-image" src="" alt="">
      <button class="gallery-arrow gallery-next" type="button" aria-label="Next image">→</button>
    </div>
    <div class="gallery-meta"><span id="gallery-count"></span><span>Use the arrows or select a thumbnail.</span></div>
    <div class="gallery-thumbnails" id="gallery-thumbnails"></div>
  </div>`;
document.body.append(galleryDialog);

function renderGalleryImage() {
  const images = galleryPlant.gallery;
  const image = galleryDialog.querySelector('#gallery-image');
  image.src = images[galleryIndex];
  image.alt = `${galleryPlant.common}, photograph ${galleryIndex + 1} of ${images.length}`;
  galleryDialog.querySelector('#gallery-count').textContent = `${galleryIndex + 1} / ${images.length}`;
  galleryDialog.querySelectorAll('.gallery-thumbnail').forEach((thumbnail, index) => {
    thumbnail.setAttribute('aria-current', String(index === galleryIndex));
    if (index === galleryIndex && galleryDialog.open) thumbnail.scrollIntoView({ block: 'nearest', inline: 'center' });
  });
}

function openGallery(plant) {
  galleryPlant = plant;
  galleryIndex = 0;
  galleryDialog.querySelector('#gallery-title').innerHTML = `${plant.scientificHtml} <small>${plant.common}</small>`;
  galleryDialog.querySelector('#gallery-thumbnails').replaceChildren(...plant.gallery.map((src, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'gallery-thumbnail';
    button.setAttribute('aria-label', `Show photograph ${index + 1}`);
    button.innerHTML = `<img src="${src}" alt="" loading="lazy">`;
    button.addEventListener('click', () => { galleryIndex = index; renderGalleryImage(); });
    return button;
  }));
  const multiple = plant.gallery.length > 1;
  galleryDialog.querySelector('.gallery-previous').hidden = !multiple;
  galleryDialog.querySelector('.gallery-next').hidden = !multiple;
  renderGalleryImage();
  galleryDialog.showModal();
}

function moveGallery(direction) {
  galleryIndex = (galleryIndex + direction + galleryPlant.gallery.length) % galleryPlant.gallery.length;
  renderGalleryImage();
}

galleryDialog.querySelector('.gallery-close').addEventListener('click', () => galleryDialog.close());
galleryDialog.querySelector('.gallery-previous').addEventListener('click', () => moveGallery(-1));
galleryDialog.querySelector('.gallery-next').addEventListener('click', () => moveGallery(1));
galleryDialog.addEventListener('click', event => { if (event.target === galleryDialog) galleryDialog.close(); });
galleryDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' && galleryPlant.gallery.length > 1) moveGallery(-1);
  if (event.key === 'ArrowRight' && galleryPlant.gallery.length > 1) moveGallery(1);
});

renderStudyCards();
resetMemory();
