// ─── Dados ───────────────────────────────────────────────────────────────────

const MODULES = {
  1: {
    name: 'Fundação',
    subtitle: 'Linha guia ASDF JKLÇ',
    desc: 'Base de tudo — dedos sempre voltam aqui',
    hint: 'Coloque indicadores em <strong>F</strong> e <strong>J</strong> (as teclas com saliência). Não olhe para o teclado!',
    keys: 'ASDF JKL',
    texts: [
      'ala fala sala kale jade flask jada alfa salsa jalsa fada',
      'fala dada saal jade laska flada jalsa kale afada lassal',
      'sala flask dale jaka flas salad jakad alsa flask djala',
      'alas fakad jaka sald fald jaksal fada jalsa alfas daka',
      'lada jalf asal kald sjala dajak fals jalad salak fakad',
    ],
    focus: [
      'fala dada jade sala flask kale jada salsa alfas laksa',
      'ajal salak fald jaks dajal salfa kalja fadas dajak alfa',
    ]
  },
  2: {
    name: 'Expansão',
    subtitle: 'Linhas superior e inferior',
    desc: 'Alcance Q W E R T Y U I O P Z X C V B N M',
    hint: 'Mantendo os dedos na linha guia, estique para as linhas de cima e baixo.',
    keys: 'QWERTY UIOP',
    texts: [
      'toque rapido quer pedir roupas novas para o festival de verão',
      'você precisa treinar muito para digitar com velocidade e precisão',
      'o teclado moderno possui teclas pequenas que exigem prática diária',
      'bom treino exige paciência vontade e muita prática diária constante',
      'novo método visa aumentar velocidade mantendo precisão no texto livre',
    ],
    focus: [
      'porta roupa toque pedir você quer treinar muito mais rápido',
      'prática texto veloz rota porta quer toque muito você rever',
    ]
  },
  3: {
    name: 'Eficiência',
    subtitle: 'Shift, maiúsculas e pontuação',
    desc: 'Use Shift sem olhar. Vírgulas, pontos e exclamações!',
    hint: 'Shift com o dedo mindinho oposto. Exemplo: "S" → Shift direito + S.',
    keys: 'SHIFT . , ! ?',
    texts: [
      'Brasil, Portugal e Angola falam Português. Incrível, não é?',
      'Olá! Você está bem? A digitação rápida é essencial hoje.',
      'São Paulo, Fortaleza e Belém são cidades lindíssimas do Brasil.',
      'Ontem, Maria foi ao mercado. Ela comprou frutas, legumes e pão.',
      'Treine todos os dias! Assim você vai melhorar muito rapidamente.',
    ],
    focus: [
      'Ótimo! Você treinou hoje? São Paulo é linda. Vamos praticar!',
      'Brasil! Sim, muito lindo. Fortaleza, Belém e São Paulo também.',
    ]
  },
  4: {
    name: 'Avançado',
    subtitle: 'Código real: {} [] () ; ->',
    desc: 'JavaScript e Python — símbolos que programadores usam',
    hint: 'Símbolos ficam na extremidade direita. Use o mindinho direito e não deixe o olhar cair no teclado.',
    keys: '{ } [ ] ( ) ; :',
    texts: [
      'function soma(a, b) { return a + b; } console.log(soma(3, 5));',
      'const arr = [1, 2, 3]; arr.forEach((x) => { console.log(x); });',
      'def fib(n): return n if n <= 1 else fib(n-1) + fib(n-2)',
      'const obj = { nome: "Ana", idade: 25 }; console.log(obj.nome);',
      'for (let i = 0; i < 10; i++) { if (i % 2 === 0) continue; }',
    ],
    focus: [
      'const x = { a: 1, b: [2, 3] }; if (x.a > 0) { return true; }',
      'function add(x, y) { return x + y; } let r = add(2, 3);',
    ]
  },
  5: {
    name: 'Ritmo',
    subtitle: 'Digitação em fluxo constante',
    desc: 'Textos mais longos — foco em cadência e constância',
    hint: 'Não se apresse. Prefira ritmo uniforme a velocidade em rajadas.',
    keys: 'TODOS',
    texts: [
      'a vida é feita de pequenos momentos que se transformam em grandes memórias ao longo do tempo',
      'programar é como escrever uma carta para o futuro você mesmo precisa ser claro e organizado',
      'a digitação toca por toque revela quem somos somos rápidos lentos precisos ou descuidados',
      'cada erro é uma oportunidade de aprender a mão que erra também é a que melhora com prática',
      'teclados modernos respondem ao toque leve não precisa bater forte apenas toque com intenção',
    ],
    focus: [
      'ritmo lento mas constante vence quem corre e erra muito mais ao longo do treino diário',
      'cadência uniforme é o segredo dos digitadores profissionais que chegam a mais de cem palavras',
    ]
  },
  6: {
    name: 'Números',
    subtitle: 'Linha numérica 1–0',
    desc: 'Alcance a linha superior sem olhar para o teclado',
    hint: 'Dedo indicador vai em 4 e 5, dedo médio em 3 e 6, anular em 2 e 7, mindinho em 1 e 0.',
    keys: '1 2 3 4 5 6 7 8 9 0',
    texts: [
      'em 2024 o brasil teve 214 milhoes de habitantes e 35 estados planejados',
      'o celular custa 1299 reais mas com desconto de 10 por cento fica 1169',
      'o código postal de são paulo começa com 01 e termina com 999 em algumas regiões',
      'em 1988 a constituição foi promulgada com 250 artigos e 100 disposições',
      'digite os números 1 2 3 4 5 6 7 8 9 0 e depois 10 20 30 40 50 60 70 80 90',
    ],
    focus: [
      'ano 2024 mes 10 dia 15 hora 08 minuto 30 segundo 45 total 123456',
      'preço 49 desconto 15 total 34 parcelado em 3 de 11 reais e 33 centavos',
    ]
  },
};

const MG_WORDS = [
  'sala','fala','jade','teclado','rápido','você','brasil','função','código','array',
  'lista','retorna','enquanto','padrão','módulo','precisão','velocidade','desenvolver',
  'programar','digitar','tecla','dedos','ritmo','treino','exercício','fluente','prática',
  'montar','juntar','formar','criar','testar','melhorar','aprender','avançar'
];

const CODE_SNIPPETS = [
  "const x = [1, 2, 3];",
  "function soma(a, b) { return a + b; }",
  "if (n > 0) { console.log(n); }",
  "for (let i = 0; i < 5; i++) { }",
  "const obj = { nome: 'Ana', idade: 25 };",
  "arr.map(x => x * 2).filter(x => x > 4);",
  "def hello(name): print(f'Olá, {name}!')",
];

const KEYBOARD_ROWS = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L','Ç'],
  ['Z','X','C','V','B','N','M','.',','],
];
const HOME_KEYS = ['A','S','D','F','J','K','L','Ç'];

// ─── Estado ───────────────────────────────────────────────────────────────────

let state = {
  activeTab: 'treino',
  module: null,
  currentText: '',
  startTime: null,
  scores: [],
  timerInterval: null,
  mgRunning: false,
  mgWords: 0,
  _mgCurrentWord: '',
  blindMode: false,
};

// ─── Utilitários ──────────────────────────────────────────────────────────────

function renderChars(target, typed) {
  return target.split('').map((c, i) => {
    let cls = 'ch pending';
    if (i < typed.length) cls = typed[i] === c ? 'ch correct' : 'ch wrong';
    if (i === typed.length) cls += ' cursor';
    return `<span class="${cls}">${c === ' ' ? '&nbsp;' : c}</span>`;
  }).join('');
}

function getTopErrors(errs) {
  if (!errs.length) return 'nenhum';
  const map = {};
  errs.forEach(e => { const k = `'${e.exp}'→'${e.got}'`; map[k] = (map[k] || 0) + 1; });
  return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 3).map(e => e[0]).join(', ');
}

function badgeClass(acc) {
  return acc >= 95 ? 'badge-ok' : acc >= 85 ? 'badge-warn' : 'badge-bad';
}

function saveScores() {
  try { localStorage.setItem('dt_scores_v2', JSON.stringify(state.scores)); } catch (e) {}
}

function loadScores() {
  try {
    const d = localStorage.getItem('dt_scores_v2');
    if (d) state.scores = JSON.parse(d);
  } catch (e) {}
}

function clearScores() {
  state.scores = [];
  saveScores();
  renderProgress();
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

function showTab(t, btn) {
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach(d => d.classList.remove('active'));
  document.getElementById('tab-' + t).classList.add('active');
  state.activeTab = t;
  if (t === 'progresso') renderProgress();
}

// ─── Treino ───────────────────────────────────────────────────────────────────

function selectModule(n) {
  state.module = n;
  clearInterval(state.timerInterval);
  state.startTime = null;
  document.querySelectorAll('.module-card').forEach((c, i) => c.classList.toggle('selected', i === n - 1));
  const pool = MODULES[n].texts;
  state.currentText = pool[Math.floor(Math.random() * pool.length)];
  renderTreino();
}

function renderTreino() {
  const sec = document.getElementById('treino-section');
  const mod = MODULES[state.module];

  const kbHtml = KEYBOARD_ROWS.map(row =>
    `<div class="key-row">${row.map(k =>
      `<div class="k ${HOME_KEYS.includes(k) ? 'home-key' : ''}" id="kv-${k}">${k}</div>`
    ).join('')}</div>`
  ).join('');

  sec.innerHTML = `
    <div class="module-section">
      <div class="module-label">Módulo ${state.module} · ${mod.name}</div>
      <p class="hint" style="margin-bottom:.75rem">${mod.hint}</p>

      <div id="blind-mode-banner" class="${state.blindMode ? 'on' : ''}">
        🙈 MODO CEGO ATIVADO — não olhe para o teclado!
      </div>

      <div class="keyboard-vis" id="kb-vis">${kbHtml}</div>

      <p style="font-size:12px;color:var(--text-muted);margin-bottom:.5rem;font-family:var(--mono)">Texto para digitar:</p>
      <div class="live-wrap">
        <div class="live-display" id="live-display">${renderChars(state.currentText, '')}</div>
        <input class="live-input" id="live-input" oninput="onLiveInput()"
          autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/>
      </div>
      <div id="timer-section" style="display:none">
        <div class="timer-bar"><div class="timer-fill" id="timer-fill" style="width:100%"></div></div>
        <p style="font-size:11px;color:var(--text-muted);text-align:right;font-family:var(--mono)" id="timer-label">—</p>
      </div>
      <div id="result-section"></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">
        <button class="btn btn-sm" onclick="resetTreino()">↺ Novo texto</button>
        <button class="btn btn-sm" onclick="toggleBlindMode()">${state.blindMode ? '👁 Desativar cego' : '🙈 Modo cego'}</button>
      </div>
    </div>
  `;

  document.getElementById('live-input').focus();
}

function toggleBlindMode() {
  state.blindMode = !state.blindMode;
  const kbVis = document.getElementById('kb-vis');
  const banner = document.getElementById('blind-mode-banner');
  if (kbVis) kbVis.style.display = state.blindMode ? 'none' : 'block';
  if (banner) banner.classList.toggle('on', state.blindMode);
  // re-render to update button label
  renderTreino();
}

function onLiveInput() {
  const inp = document.getElementById('live-input');
  if (!inp) return;
  const typed = inp.value;
  const target = state.currentText;

  if (!state.startTime && typed.length > 0) {
    state.startTime = Date.now();
    document.getElementById('timer-section').style.display = 'block';
    startTimer();
  }

  // live display
  const disp = document.getElementById('live-display');
  if (disp) {
    disp.innerHTML = renderChars(target, typed);
    disp.classList.add('typing');
  }

  // highlight current key on keyboard
  const nextChar = target[typed.length];
  highlightKey(nextChar ? nextChar.toUpperCase() : null);

  if (typed.length >= target.length) {
    inp.disabled = true;
    clearInterval(state.timerInterval);
    showResult(target, typed);
  }
}

function highlightKey(char) {
  if (state.blindMode) return;
  document.querySelectorAll('.k').forEach(el => {
    el.classList.remove('highlight');
    if (!HOME_KEYS.includes(el.textContent)) el.classList.remove('correct-key');
  });
  if (!char) return;
  const el = document.getElementById('kv-' + char);
  if (el) el.classList.add('highlight');
}

function startTimer() {
  const start = Date.now();
  state.timerInterval = setInterval(() => {
    const elapsed = (Date.now() - start) / 1000;
    const bar = document.getElementById('timer-fill');
    const lbl = document.getElementById('timer-label');
    if (bar) bar.style.width = Math.max(0, 100 - elapsed * 2) + '%';
    if (lbl) lbl.textContent = elapsed.toFixed(1) + 's';
  }, 100);
}

function showResult(target, typed) {
  const elapsed = (Date.now() - state.startTime) / 1000;
  let correct = 0, errors = [];
  for (let i = 0; i < Math.min(target.length, typed.length); i++) {
    if (target[i] === typed[i]) correct++;
    else errors.push({ exp: target[i], got: typed[i] });
  }
  const acc = Math.round((correct / target.length) * 100);
  const words = typed.trim().split(/\s+/).length;
  const wpm = Math.round(words / (elapsed / 60));
  const topErros = getTopErrors(errors);
  const bc = badgeClass(acc);
  const msg = acc >= 95 ? '🎉 Excelente! Tente o próximo módulo.' :
              acc >= 85 ? '👍 Bom progresso! Continue praticando.' :
              '💡 Foque nos erros e tente novamente.';

  state.scores.push({ module: state.module, acc, wpm, date: new Date().toLocaleDateString('pt-BR'), elapsed: elapsed.toFixed(1) });
  saveScores();

  document.getElementById('result-section').innerHTML = `
    <div class="result-box">
      <div class="result-title">Resultado <span class="badge ${bc}">${acc}% precisão</span></div>
      <div class="metric"><span class="label">Precisão</span><span class="val">${acc}%</span></div>
      <div class="metric"><span class="label">WPM</span><span class="val">${wpm} wpm</span></div>
      <div class="metric"><span class="label">Tempo</span><span class="val">${elapsed.toFixed(1)}s</span></div>
      <div class="metric"><span class="label">Erros comuns</span><span class="val" style="font-size:12px">${topErros}</span></div>
      <p style="font-size:13px;color:var(--text-muted);margin-top:10px">${msg}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
        ${acc >= 95 && state.module < 6 ? `<button class="btn btn-accent btn-sm" onclick="selectModule(${state.module + 1})">Avançar para M${state.module + 1} →</button>` : ''}
        ${acc < 90 ? `<button class="btn btn-sm" onclick="genFocusText()">🎯 Treino focado nos erros</button>` : ''}
        <button class="btn btn-sm" onclick="resetTreino()">↺ Repetir</button>
      </div>
    </div>
  `;
}

function genFocusText() {
  const pool = MODULES[state.module].focus;
  state.currentText = pool[Math.floor(Math.random() * pool.length)];
  renderTreino();
}

function resetTreino() {
  state.startTime = null;
  clearInterval(state.timerInterval);
  selectModule(state.module);
}

// ─── Progresso ────────────────────────────────────────────────────────────────

function renderProgress() {
  loadScores();
  const d = document.getElementById('prog-content');
  if (!state.scores.length) {
    d.innerHTML = '<p style="color:var(--text-muted);font-size:14px;margin-top:1rem;text-align:center;padding:2rem 0">Nenhuma sessão registrada ainda.<br><span style="font-size:12px">Complete um treino para ver seu progresso.</span></p>';
    return;
  }

  const avg = s => s.length ? Math.round(s.reduce((a, b) => a + b, 0) / s.length) : 0;
  const totalSessions = state.scores.length;
  const avgAcc = avg(state.scores.map(s => s.acc));
  const avgWpm = avg(state.scores.map(s => s.wpm));
  const bestWpm = Math.max(...state.scores.map(s => s.wpm));

  const modRows = Object.keys(MODULES).map(m => {
    const n = parseInt(m);
    const sessions = state.scores.filter(s => s.module === n);
    const mAvgAcc = avg(sessions.map(s => s.acc));
    const mAvgWpm = avg(sessions.map(s => s.wpm));
    return { n, name: MODULES[n].name, sessions, mAvgAcc, mAvgWpm };
  });

  d.innerHTML = `
    <div class="stats-row">
      <div class="stat-pill"><div class="sp-num">${totalSessions}</div><div class="sp-lbl">Sessões</div></div>
      <div class="stat-pill"><div class="sp-num">${avgAcc}%</div><div class="sp-lbl">Precisão média</div></div>
      <div class="stat-pill"><div class="sp-num">${avgWpm}</div><div class="sp-lbl">WPM médio</div></div>
      <div class="stat-pill"><div class="sp-num">${bestWpm}</div><div class="sp-lbl">Melhor WPM</div></div>
    </div>
    <p style="font-size:13px;font-weight:600;margin-bottom:12px">Desempenho por módulo</p>
    ${modRows.map(b => `
      <div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
          <span style="font-weight:500">M${b.n} · ${b.name}</span>
          <span style="color:var(--text-muted)">${b.sessions.length ? b.mAvgAcc + '% · ' + b.mAvgWpm + ' wpm · ' + b.sessions.length + ' sessões' : '—'}</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${b.mAvgAcc}%"></div></div>
      </div>
    `).join('')}
    <div style="margin-top:1.5rem">
      <p style="font-size:12px;font-weight:600;margin-bottom:8px;color:var(--text-muted)">Últimas 5 sessões</p>
      ${state.scores.slice(-5).reverse().map(s => `
        <div class="metric">
          <span class="label">M${s.module} · ${s.date}</span>
          <span style="display:flex;gap:8px;align-items:center">
            <span class="badge ${badgeClass(s.acc)}">${s.acc}%</span>
            <span style="font-family:var(--mono);font-size:12px;color:var(--text-muted)">${s.wpm}wpm</span>
          </span>
        </div>
      `).join('')}
    </div>
    <button class="btn btn-sm" onclick="clearScores()" style="margin-top:1.25rem;color:var(--danger)">Limpar histórico</button>
  `;
}

// ─── Minigames ────────────────────────────────────────────────────────────────

function startMG(type) {
  const sec = document.getElementById('mg-section');
  clearInterval(state.timerInterval);
  state.mgRunning = false;

  // Sprint 30s
  if (type === 'speed') {
    state.mgWords = 0;
    const target = MG_WORDS[Math.floor(Math.random() * MG_WORDS.length)];
    state._mgCurrentWord = target;
    sec.innerHTML = `
      <div class="module-section">
        <p style="font-size:13px;font-weight:600;margin-bottom:8px">⚡ Sprint de 30 segundos</p>
        <div class="timer-bar"><div class="timer-fill" id="mg-bar" style="width:100%"></div></div>
        <p id="mg-timer" style="font-size:12px;color:var(--text-muted);text-align:right;font-family:var(--mono);margin-bottom:12px">30.0s</p>
        <div class="text-box" id="mg-word" style="text-align:center;font-size:32px;padding:1.5rem;font-weight:300">${target}</div>
        <input class="typing-area" id="mg-inp" oninput="checkSpeedWord()"
          autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
          placeholder="Digite a palavra acima..." style="margin-top:8px"/>
        <div id="mg-wpm-box"></div>
      </div>`;
    document.getElementById('mg-inp').focus();
    state.mgRunning = true;
    const started = Date.now();
    state.timerInterval = setInterval(() => {
      const rem = 30 - ((Date.now() - started) / 1000);
      if (rem <= 0) {
        clearInterval(state.timerInterval);
        state.mgRunning = false;
        const inp = document.getElementById('mg-inp');
        if (inp) inp.disabled = true;
        const box = document.getElementById('mg-wpm-box');
        if (box) box.innerHTML = `
          <div class="stat-big">
            <div class="stat-num">${state.mgWords}</div>
            <div class="stat-label">palavras em 30s · ~${Math.round(state.mgWords * 2)} WPM</div>
          </div>
          <button class="btn btn-sm" onclick="startMG('speed')" style="display:block;margin:0 auto">↺ Jogar novamente</button>`;
        return;
      }
      const bar = document.getElementById('mg-bar');
      const lbl = document.getElementById('mg-timer');
      if (bar) bar.style.width = (rem / 30 * 100) + '%';
      if (lbl) lbl.textContent = rem.toFixed(1) + 's';
    }, 100);
  }

  // Caça ao erro
  if (type === 'erro') {
    const originals = [
      'fala sala dada jade flask',
      'você treina muito rápido',
      'brasil é lindo sempre aqui',
      'o código precisa de testes',
      'função retorna valor correto',
    ];
    const orig = originals[Math.floor(Math.random() * originals.length)];
    const corrupted = orig.split('').map(c =>
      Math.random() < 0.18 && /[a-záéíóúãõêôâ]/i.test(c)
        ? String.fromCharCode(c.charCodeAt(0) + (Math.random() > .5 ? 1 : -1))
        : c
    ).join('');
    sec.innerHTML = `
      <div class="module-section">
        <p style="font-size:13px;font-weight:600;margin-bottom:8px">🔍 Corrija o texto com erros</p>
        <p class="hint">O texto abaixo tem letras trocadas. Digite-o corretamente.</p>
        <div class="text-box" style="background:var(--danger-light);border-color:var(--danger)">${corrupted}</div>
        <textarea class="typing-area" id="mg-err-inp" placeholder="Digite o texto corrigido aqui..." rows="2"></textarea>
        <button class="btn btn-sm" onclick="checkErro('${orig.replace(/'/g,"\\'")}')">Verificar</button>
        <div id="mg-err-result"></div>
      </div>`;
  }

  // Carta certa
  if (type === 'flip') nextFlip();

  // Copiar código
  if (type === 'code') {
    const snippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
    sec.innerHTML = `
      <div class="module-section">
        <p style="font-size:13px;font-weight:600;margin-bottom:8px">💻 Copie o trecho de código</p>
        <div class="text-box">${snippet}</div>
        <div class="live-wrap">
          <div class="live-display" id="code-display">${renderChars(snippet, '')}</div>
          <input class="live-input" id="code-inp" oninput="onCodeInput(${JSON.stringify(snippet)})"
            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/>
        </div>
        <div id="code-result"></div>
      </div>`;
    document.getElementById('code-inp').focus();
  }

  // Modo ditado — ouve e digita
  if (type === 'ditado') startDitado();

  // Jogo da memória de teclas
  if (type === 'memoria') startMemoria();
}

function checkSpeedWord() {
  if (!state.mgRunning) return;
  const inp = document.getElementById('mg-inp');
  if (!inp) return;
  if (inp.value.trim() === state._mgCurrentWord) {
    state.mgWords++;
    inp.value = '';
    const nw = MG_WORDS[Math.floor(Math.random() * MG_WORDS.length)];
    state._mgCurrentWord = nw;
    const box = document.getElementById('mg-word');
    if (box) box.textContent = nw;
  }
}

function checkErro(orig) {
  const typed = (document.getElementById('mg-err-inp') || {}).value || '';
  let correct = 0;
  for (let i = 0; i < Math.min(orig.length, typed.length); i++) if (orig[i] === typed[i]) correct++;
  const acc = Math.round((correct / orig.length) * 100);
  const bc = badgeClass(acc);
  document.getElementById('mg-err-result').innerHTML = `
    <div class="result-box" style="margin-top:.5rem">
      <div class="metric"><span class="label">Acertos</span><span class="badge ${bc}">${acc}%</span></div>
      <p style="font-size:13px;color:var(--text-muted);margin-top:8px">
        ${acc >= 90 ? '✅ Ótimo! Você identificou os erros.' : 'Tente novamente com mais atenção.'}
      </p>
      <button class="btn btn-sm" onclick="startMG('erro')" style="margin-top:8px">↺ Novo texto</button>
    </div>`;
}

function nextFlip() {
  const sec = document.getElementById('mg-section');
  const letters = 'ASDFGHJKLÇQWERTYUIOPZXCVBNM'.split('');
  const letter = letters[Math.floor(Math.random() * letters.length)];
  const row = KEYBOARD_ROWS[0].includes(letter) ? 'Linha superior' :
               KEYBOARD_ROWS[1].includes(letter) ? 'Linha do meio (guia)' : 'Linha inferior';
  sec.innerHTML = `
    <div class="module-section">
      <p style="font-size:13px;font-weight:600;margin-bottom:8px">🃏 Carta certa — adivinhe antes de virar</p>
      <p class="hint">Dica: a tecla está na <strong>${row}</strong>. Qual tecla é?</p>
      <div class="flip-card" onclick="this.querySelector('.flip-inner').classList.toggle('flipped')">
        <div class="flip-inner">
          <div class="flip-front">
            <p style="font-size:14px;color:var(--text-muted)">Toque para revelar</p>
            <p style="font-size:12px;color:var(--text-faint);margin-top:8px">${row}</p>
          </div>
          <div class="flip-back">
            <span style="font-size:56px;font-weight:300;color:var(--accent-text);font-family:var(--mono)">${letter}</span>
          </div>
        </div>
      </div>
      <button class="btn btn-sm" onclick="nextFlip()">Próxima carta →</button>
    </div>`;
}

function onCodeInput(snippet) {
  const inp = document.getElementById('code-inp');
  if (!inp) return;
  const typed = inp.value;
  const disp = document.getElementById('code-display');
  if (disp) disp.innerHTML = renderChars(snippet, typed);
  if (typed.length >= snippet.length) {
    inp.disabled = true;
    let correct = 0;
    for (let i = 0; i < snippet.length; i++) if (snippet[i] === typed[i]) correct++;
    const acc = Math.round((correct / snippet.length) * 100);
    const bc = badgeClass(acc);
    const res = document.getElementById('code-result');
    if (res) res.innerHTML = `
      <div class="result-box" style="margin-top:.5rem">
        <div class="metric"><span class="label">Precisão no código</span><span class="badge ${bc}">${acc}%</span></div>
        <p style="font-size:13px;color:var(--text-muted);margin-top:8px">
          ${acc >= 95 ? '✅ Perfeito! Sem erros.' : '⚠️ Pratique os símbolos: {} [] () ; :'}
        </p>
        <button class="btn btn-sm" onclick="startMG('code')" style="margin-top:8px">↺ Novo trecho</button>
      </div>`;
  }
}

// ─── Ditado (novo módulo) ─────────────────────────────────────────────────────

function startDitado() {
  const sec = document.getElementById('mg-section');
  const words = MG_WORDS.slice(0, 5);
  const sentence = words.sort(() => Math.random() - .5).slice(0, 4).join(' ');

  sec.innerHTML = `
    <div class="module-section">
      <p style="font-size:13px;font-weight:600;margin-bottom:8px">🎤 Ditado visual — memorize e escreva</p>
      <p class="hint">Leia o texto abaixo por <strong>5 segundos</strong>. Depois ele some e você digita de memória!</p>
      <div class="text-box" id="ditado-text" style="text-align:center;font-size:18px">${sentence}</div>
      <div id="ditado-countdown" style="text-align:center;font-family:var(--mono);font-size:24px;color:var(--accent);margin:8px 0">5</div>
      <textarea class="typing-area" id="ditado-inp" placeholder="Aguarde..." rows="2" disabled></textarea>
      <button class="btn btn-sm" id="ditado-btn" disabled onclick="checkDitado('${sentence.replace(/'/g,"\\'")}')">Verificar</button>
      <div id="ditado-result"></div>
    </div>`;

  let count = 5;
  const cd = setInterval(() => {
    count--;
    const el = document.getElementById('ditado-countdown');
    if (el) el.textContent = count;
    if (count <= 0) {
      clearInterval(cd);
      const txt = document.getElementById('ditado-text');
      if (txt) txt.style.filter = 'blur(8px)';
      const inp = document.getElementById('ditado-inp');
      const btn = document.getElementById('ditado-btn');
      if (inp) { inp.disabled = false; inp.placeholder = 'Digite o texto que você leu...'; inp.focus(); }
      if (btn) btn.disabled = false;
      const cdEl = document.getElementById('ditado-countdown');
      if (cdEl) cdEl.textContent = '';
    }
  }, 1000);
}

function checkDitado(original) {
  const typed = (document.getElementById('ditado-inp') || {}).value || '';
  let correct = 0;
  const orig = original.toLowerCase().trim();
  const typed2 = typed.toLowerCase().trim();
  for (let i = 0; i < Math.min(orig.length, typed2.length); i++) if (orig[i] === typed2[i]) correct++;
  const acc = Math.round((correct / orig.length) * 100);
  const bc = badgeClass(acc);

  // reveal
  const txt = document.getElementById('ditado-text');
  if (txt) txt.style.filter = '';

  document.getElementById('ditado-result').innerHTML = `
    <div class="result-box" style="margin-top:.5rem">
      <div class="metric"><span class="label">Acertos</span><span class="badge ${bc}">${acc}%</span></div>
      <p style="font-size:13px;color:var(--text-muted);margin-top:8px">
        ${acc >= 90 ? '🧠 Ótima memória!' : acc >= 70 ? 'Bom! Pratique para memorizar melhor.' : 'Releia com calma e tente de novo.'}
      </p>
      <button class="btn btn-sm" onclick="startDitado()" style="margin-top:8px">↺ Novo ditado</button>
    </div>`;
}

// ─── Memória de teclas (novo módulo) ─────────────────────────────────────────

function startMemoria() {
  const sec = document.getElementById('mg-section');
  const seq = Array.from({ length: 5 }, () => {
    const all = KEYBOARD_ROWS.flat();
    return all[Math.floor(Math.random() * all.length)];
  });

  sec.innerHTML = `
    <div class="module-section">
      <p style="font-size:13px;font-weight:600;margin-bottom:8px">🧩 Sequência de teclas</p>
      <p class="hint">Memorize a sequência e a reproduza sem olhar!</p>
      <div class="text-box" id="mem-seq" style="text-align:center;font-size:28px;letter-spacing:.3em;font-weight:300">${seq.join(' ')}</div>
      <div id="mem-countdown" style="text-align:center;font-family:var(--mono);font-size:20px;color:var(--accent);margin:6px 0">4</div>
      <input class="typing-area" id="mem-inp" placeholder="Aguarde..." disabled
        autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/>
      <div id="mem-result"></div>
    </div>`;

  let count = 4;
  const cd = setInterval(() => {
    count--;
    const el = document.getElementById('mem-countdown');
    if (el) el.textContent = count;
    if (count <= 0) {
      clearInterval(cd);
      const seqEl = document.getElementById('mem-seq');
      if (seqEl) seqEl.style.filter = 'blur(10px)';
      const inp = document.getElementById('mem-inp');
      if (inp) {
        inp.disabled = false;
        inp.placeholder = 'Digite a sequência que você viu...';
        inp.focus();
        inp.addEventListener('input', function() {
          if (this.value.length >= seq.length) checkMemoria(seq);
        });
      }
      const cdEl = document.getElementById('mem-countdown');
      if (cdEl) cdEl.textContent = '';
    }
  }, 1000);
}

function checkMemoria(seq) {
  const inp = document.getElementById('mem-inp');
  if (!inp) return;
  inp.disabled = true;
  const typed = inp.value.toUpperCase().replace(/\s/g, '').split('');
  let correct = 0;
  seq.forEach((k, i) => { if (typed[i] === k) correct++; });
  const acc = Math.round((correct / seq.length) * 100);
  const bc = badgeClass(acc);

  const seqEl = document.getElementById('mem-seq');
  if (seqEl) seqEl.style.filter = '';

  document.getElementById('mem-result').innerHTML = `
    <div class="result-box" style="margin-top:.5rem">
      <div class="metric"><span class="label">Acertos</span><span class="badge ${bc}">${correct}/${seq.length}</span></div>
      <p style="font-size:13px;color:var(--text-muted);margin-top:8px">
        ${acc >= 100 ? '🎯 Perfeito! Memória excelente.' : acc >= 60 ? 'Bom! Tente memorizar mais rápido.' : 'Pratique mais para fixar as posições.'}
      </p>
      <button class="btn btn-sm" onclick="startMG('memoria')" style="margin-top:8px">↺ Nova sequência</button>
    </div>`;
}

// ─── Init ─────────────────────────────────────────────────────────────────────

loadScores();
