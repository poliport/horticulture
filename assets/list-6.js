const plants = [
  {
    id: 'hardenbergia',
    scientific: 'Hardenbergia violacea ‘Happy Wanderer’',
    scientificHtml: '<i>Hardenbergia violacea</i> ‘Happy Wanderer’',
    common: 'Happy Wanderer / Purple Coral Pea',
    image: '../../assets/images/list-6/hardenbergia-violacea-happy-wanderer.jpg',
    alt: 'Purple pea flowers and lance-shaped leaves of Happy Wanderer',
    habit: 'Vigorous twining climber or scrambling groundcover.',
    cycle: 'Evergreen perennial.',
    cue: 'Rich violet-purple pea flowers in sprays, with glossy lance-shaped leaves and twining stems.',
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
    image: '../../assets/images/list-6/trachelospermum-jasminoides.jpg',
    alt: 'White star-shaped flowers and glossy leaves of Star Jasmine',
    habit: 'Twining woody climber; it can also be pruned as a spreading groundcover.',
    cycle: 'Evergreen perennial.',
    cue: 'Clusters of strongly fragrant white pinwheel-shaped flowers and glossy oval leaves.',
    season: 'Flowers mainly in summer.',
    tags: ['Climber', 'Non-native', 'Fragrant flowers'],
    sources: [
      ['Botanic Gardens SA', 'https://plantselector.botanicgardens.sa.gov.au/Plants/Details/2562']
    ]
  },
  {
    id: 'alyogyne',
    scientific: 'Alyogyne wrayae ‘Blue Heeler’',
    scientificHtml: '<i>Alyogyne wrayae</i> ‘Blue Heeler’',
    common: 'Blue Heeler Native Hibiscus',
    image: '../../assets/images/list-6/alyogyne-wrayae-blue-heeler.jpg',
    alt: 'Purple hibiscus-shaped flowers and lobed leaves of Blue Heeler',
    habit: 'Dense, low, prostrate shrub or groundcover.',
    cycle: 'Evergreen perennial shrub.',
    cue: 'Low spreading growth, small lobed leaves and deep purple hibiscus-shaped flowers with blue tones.',
    season: 'Repeat flowers through the warmer months, especially spring and summer.',
    tags: ['Groundcover', 'Native cultivar', 'Purple flowers'],
    sources: [
      ['Royal Botanic Gardens Victoria', 'https://data.rbg.vic.gov.au/rbgcensus/census/taxon/ea5c968d-4ac4-4db3-9472-27dc843ed67a'],
      ['Plantmark profile', 'https://www.plantmark.com.au/alyogyne-huegelii-wrayae-blue-heeler']
    ]
  },
  {
    id: 'acacia',
    scientific: 'Acacia glaucoptera ‘Nana’',
    scientificHtml: '<i>Acacia glaucoptera</i> ‘Nana’',
    common: 'Dwarf Clay Wattle / Dwarf Flat Wattle',
    image: '../../assets/images/list-6/acacia-glaucoptera-nana.jpg',
    alt: 'Dwarf Clay Wattle with winged stems, red new growth and yellow flower heads',
    habit: 'Low, spreading dwarf shrub.',
    cycle: 'Evergreen perennial shrub.',
    cue: 'Flattened blue-green wing-like stems, reddish new growth and small golden ball-shaped flower heads.',
    season: 'Flowers mainly in spring.',
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
    image: '../../assets/images/list-6/dianella-brevicaulis.jpg',
    alt: 'Tufted strappy leaves and small blue flowers of Short Stem Flax Lily',
    habit: 'Small, closely tufted, grass-like perennial.',
    cycle: 'Evergreen perennial.',
    cue: 'Dense tufts of narrow strap-like leaves, small blue-violet star flowers and shiny purple berries.',
    season: 'Flowers from October to December in Victoria.',
    tags: ['Tufted perennial', 'Native', 'Purple berries'],
    sources: [
      ['VicFlora plant profile', 'https://vicflora.rbg.vic.gov.au/flora/taxon/485c41db-cc8f-4c17-af6e-a354365331e6']
    ]
  }
];

const modeCopy = {
  study: ['Know the five plants.', 'Use the cards to learn the strongest visual cues, plant habit and life cycle.'],
  quiz: ['Test your plant recognition.', 'Answer twenty mixed questions. Each round is shuffled.'],
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

function renderStudyCards() {
  const grid = document.querySelector('#study-grid');
  grid.replaceChildren(...plants.map((plant, index) => {
    const article = document.createElement('article');
    article.className = 'plant-card';
    article.innerHTML = `
      <div class="plant-image">
        <img src="${plant.image}" alt="${plant.alt}">
        <span class="plant-index">${String(index + 1).padStart(2, '0')}</span>
      </div>
      <div class="plant-content">
        <p class="plant-common">${plant.common}</p>
        <h2>${plant.scientificHtml}</h2>
        <div class="plant-tags">${plant.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        <dl class="plant-facts">
          <div><dt>Plant habit</dt><dd>${plant.habit}</dd></div>
          <div><dt>Life cycle</dt><dd>${plant.cycle}</dd></div>
          <div><dt>Look for</dt><dd>${plant.cue}</dd></div>
          <div><dt>Flowering</dt><dd>${plant.season}</dd></div>
        </dl>
        <div class="plant-sources">${plant.sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`).join('')}</div>
      </div>`;
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
      type: 'Identifying features', visual: 'text', plant,
      clue: plant.cue, prompt: 'Which plant matches these features?',
      answer: plant.scientific, choices: plants.map(item => item.scientific), italic: true
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
    image.src = question.plant.image;
    image.alt = 'Unlabelled plant photograph';
    clue.textContent = '';
  } else {
    visual.classList.add('text-clue');
    image.removeAttribute('src');
    image.alt = '';
    clue.textContent = question.clue;
  }

  const options = shuffle(question.choices).slice(0, 4);
  if (!options.includes(question.answer)) options[0] = question.answer;
  document.querySelector('#quiz-options').replaceChildren(...shuffle(options).map(option => {
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
  if (correct) quizScore++;
  document.querySelector('#quiz-score').textContent = quizScore;
  document.querySelector('#score-large').textContent = quizScore;

  document.querySelectorAll('.quiz-option').forEach(button => {
    button.disabled = true;
    if (button.dataset.answer === question.answer) button.classList.add('correct');
  });
  if (!correct) selected.classList.add('incorrect');

  const feedback = document.querySelector('#quiz-feedback');
  feedback.innerHTML = `<strong>${correct ? 'Correct.' : `The answer is ${question.answer}.`}</strong>${question.plant.common} · ${question.plant.cue}`;
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
  document.querySelector('#quiz-feedback').textContent = percent >= 80 ? 'You are recalling the names and diagnostic features well.' : 'Review the study cards, then try again.';
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
    ? `<span class="memory-face memory-back"></span><span class="memory-face memory-front"><img src="${plant.image}" alt="${plant.alt}"></span>`
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
  document.querySelector('#memory-note').innerHTML = `<span class="module-label">Matched</span><h3>${plant.scientificHtml}</h3><p>${plant.cue}</p>`;
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
  document.querySelector('#memory-note').innerHTML = '<span class="module-label">Memory match</span><h3>Pair each field photo with its scientific name.</h3><p>Match a pair to reveal its key identifying cue.</p>';
  const cards = plants.flatMap(plant => [makeMemoryCard(plant, 'photo'), makeMemoryCard(plant, 'name')]);
  document.querySelector('#memory-board').replaceChildren(...shuffle(cards));
}

document.querySelector('#restart-memory').addEventListener('click', resetMemory);
document.querySelector('#play-again').addEventListener('click', resetMemory);

renderStudyCards();
resetMemory();
