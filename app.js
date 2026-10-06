/**
 * 오늘 뭐 먹지? (Today's Random Menu)
 * Application Logic with High-Detail Visual Assets
 */

// 1. 디테일한 메뉴 데이터 정의 (고화질 음식 이미지 URL 포함 총 19종)
const MENU_DATA = [
  // 한식 (Korean)
  {
    id: 'k1',
    name: '칼칼한 김치찌개',
    emoji: '🥘',
    category: 'korean',
    categoryName: '한식',
    desc: '돼지고기와 묵은지의 칼칼하고 깊은 국물에 밥 한 공기 뚝딱!',
    image: 'https://images.unsplash.com/photo-1547928576-965be7f5f6a6?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'k2',
    name: '구수한 된장찌개',
    emoji: '🍲',
    category: 'korean',
    categoryName: '한식',
    desc: '구수한 시골 된장에 부드러운 두부와 애호박이 듬뿍 들어간 집밥 맛',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'k3',
    name: '매콤달콤 제육볶음',
    emoji: '🥩',
    category: 'korean',
    categoryName: '한식',
    desc: '불맛 가득 입힌 매콤달콤한 양념에 든든한 밥도둑 메뉴!',
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'k4',
    name: '노릇노릇 삼겹살',
    emoji: '🥓',
    category: 'korean',
    categoryName: '한식',
    desc: '지글지글 바삭하게 구워 알싸한 파채와 쌈장에 싸 먹는 소울푸드',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'k5',
    name: '신선한 영양 비빔밥',
    emoji: '🥗',
    category: 'korean',
    categoryName: '한식',
    desc: '오색 나물과 참기름, 감칠맛 나는 고추장을 쓱쓱 비벼낸 한 그릇',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'k6',
    name: '진한 소고기 국밥',
    emoji: '🥣',
    category: 'korean',
    categoryName: '한식',
    desc: '오랜 시간 푹 끓여낸 깊고 뜨끈한 뚝배기 국물 요리',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80'
  },

  // 중식 (Chinese)
  {
    id: 'c1',
    name: '달콤짭조름 짜장면',
    emoji: '🍜',
    category: 'chinese',
    categoryName: '중식',
    desc: '갓 볶아낸 진한 춘장 소스와 쫄깃탱탱한 수타 면발의 정석',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'c2',
    name: '불맛 가득 짬뽕',
    emoji: '🦐',
    category: 'chinese',
    categoryName: '중식',
    desc: '싱싱한 해산물과 알싸한 채소에 불맛을 입힌 얼큰 시원한 국물',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'c3',
    name: '바삭바삭 탕수육',
    emoji: '🥟',
    category: 'chinese',
    categoryName: '중식',
    desc: '겉은 바삭 속은 촉촉한 튀김에 새콤달콤한 소스가 어우러진 별미',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'c4',
    name: '얼얼하고 중독적인 마라탕',
    emoji: '🌶️',
    category: 'chinese',
    categoryName: '중식',
    desc: '알싸한 마라유와 고소한 땅콩소스에 원하는 재료를 듬뿍 넣은 탕',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80'
  },

  // 일식 (Japanese)
  {
    id: 'j1',
    name: '두툼하고 바삭한 돈카츠',
    emoji: '🍱',
    category: 'japanese',
    categoryName: '일식',
    desc: '두툼한 생등심에 바삭한 생빵가루를 입혀 튀겨낸 겉바속촉 카츠',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'j2',
    name: '신선한 모둠 초밥',
    emoji: '🍣',
    category: 'japanese',
    categoryName: '일식',
    desc: '신선한 연어, 광어, 참치 등 바다의 풍미를 입안 가득 담은 한 점',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'j3',
    name: '진한 돈코츠 라멘',
    emoji: '🍜',
    category: 'japanese',
    categoryName: '일식',
    desc: '진한 사골 육수에 차슈와 반숙란을 얹은 따끈따끈한 일본식 생면',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'j4',
    name: '부드러운 소고기 규동',
    emoji: '🍚',
    category: 'japanese',
    categoryName: '일식',
    desc: '특제 쯔유 소스에 부드럽게 조려낸 소고기와 양파를 올린 덮밥',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=80'
  },

  // 양식 (Western)
  {
    id: 'w1',
    name: '마늘 풍미 알리오 올리오',
    emoji: '🍝',
    category: 'western',
    categoryName: '양식',
    desc: '황금빛 엑스트라 버진 올리브 오일과 마늘 향이 가득한 깔끔 파스타',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'w2',
    name: '육즙 팡팡 수제버거',
    emoji: '🍔',
    category: 'western',
    categoryName: '양식',
    desc: '두툼한 소고기 패티와 멜팅 치즈, 신선한 야채가 조화로운 버거',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'w3',
    name: '꿀 찍어먹는 고르곤졸라 피자',
    emoji: '🍕',
    category: 'western',
    categoryName: '양식',
    desc: '고소한 블루치즈 향과 달콤한 꿀의 거부할 수 없는 단짠 조합',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80'
  },

  // 분식 & 아시안 (Snack / Asian)
  {
    id: 's1',
    name: '매콤달콤 쌀떡볶이',
    emoji: '🍢',
    category: 'snack',
    categoryName: '분식·아시안',
    desc: '쫄깃한 떡에 매콤달콤한 소스, 어묵과 튀김 찍어먹기 딱 좋은 국민 간식',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 's2',
    name: '양지 쌀국수',
    emoji: '🍜',
    category: 'snack',
    categoryName: '분식·아시안',
    desc: '맑고 깊은 양지 육수에 숙주와 고수를 곁들여 속이 편안해지는 쌀국수',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=900&q=80'
  }
];

const DEFAULT_COVER_IMAGE = 'assets/hero_cover.jpg';

// 이미지 사전 로드 캐시 (깜빡임 방지)
function preloadImages() {
  MENU_DATA.forEach(item => {
    const img = new Image();
    img.src = item.image;
  });
}

// 2. 상태 관리
const state = {
  currentCategory: 'all',
  isRolling: false,
  selectedMenu: null,
  history: [],
  soundEnabled: true
};

// 3. Web Audio API 사운드 효과
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTick() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(460, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  playSuccess() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, index) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        const startTime = this.ctx.currentTime + index * 0.08;
        const endTime = startTime + 0.32;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, endTime);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(endTime);
      });
    } catch (e) {}
  }
}

const sfx = new SoundEffects();

// 4. DOM 요소 캐싱
const elements = {
  categoryTabs: document.getElementById('categoryTabs'),
  categoryBtns: document.querySelectorAll('.category-btn'),
  recommendCard: document.getElementById('recommendCard'),
  menuImage: document.getElementById('menuImage'),
  menuTag: document.getElementById('menuTag'),
  menuName: document.getElementById('menuName'),
  menuDesc: document.getElementById('menuDesc'),
  actionLinks: document.getElementById('actionLinks'),
  naverMapLink: document.getElementById('naverMapLink'),
  shareBtn: document.getElementById('shareBtn'),
  recommendBtn: document.getElementById('recommendBtn'),
  soundToggle: document.getElementById('soundToggle'),
  historySection: document.getElementById('historySection'),
  historyChips: document.getElementById('historyChips'),
  clearHistoryBtn: document.getElementById('clearHistoryBtn'),
  toast: document.getElementById('toast')
};

// 5. 유틸리티 함수
function getFilteredMenus() {
  if (state.currentCategory === 'all') {
    return MENU_DATA;
  }
  return MENU_DATA.filter(item => item.category === state.currentCategory);
}

function getRandomMenu(pool, excludeMenu = null) {
  let candidates = pool;
  if (excludeMenu && pool.length > 1) {
    candidates = pool.filter(item => item.id !== excludeMenu.id);
  }
  const randomIndex = Math.floor(Math.random() * candidates.length);
  return candidates[randomIndex];
}

let toastTimer = null;
function showToast(message) {
  if (!elements.toast) return;
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 2400);
}

function fireConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 55,
      spread: 65,
      origin: { y: 0.62 },
      colors: ['#FF5E36', '#FFA07A', '#FFD166', '#06D6A0', '#118AB2']
    });
  }
}

// 6. 히스토리 렌더링
function addToHistory(menu) {
  if (state.history.length > 0 && state.history[0].id === menu.id) {
    return;
  }
  state.history.unshift(menu);
  if (state.history.length > 6) {
    state.history.pop();
  }
  renderHistory();
}

function renderHistory() {
  if (state.history.length === 0) {
    elements.historySection.classList.add('hidden');
    return;
  }

  elements.historySection.classList.remove('hidden');
  elements.historyChips.innerHTML = '';

  state.history.forEach(item => {
    const chip = document.createElement('div');
    chip.className = 'history-chip';
    chip.innerHTML = `<span>${item.emoji}</span><span>${item.name}</span>`;
    chip.title = `${item.categoryName} • ${item.name}`;
    elements.historyChips.appendChild(chip);
  });
}

// 7. 추천 롤링 및 디테일한 비주얼 표시
function runRecommendation() {
  if (state.isRolling) return;

  const pool = getFilteredMenus();
  if (pool.length === 0) return;

  state.isRolling = true;
  elements.recommendBtn.disabled = true;
  elements.recommendCard.classList.remove('revealed');
  elements.recommendCard.classList.add('is-rolling');
  elements.actionLinks.classList.add('hidden');

  let tickCount = 0;
  const totalTicks = 14;
  let currentDelay = 50;

  function step() {
    tickCount++;
    const tempMenu = pool[Math.floor(Math.random() * pool.length)];

    // 롤링 중 텍스트 & 이미지 빠르게 전환
    elements.menuImage.src = tempMenu.image;
    elements.menuTag.textContent = `${tempMenu.emoji} ${tempMenu.categoryName}`;
    elements.menuName.textContent = tempMenu.name;
    elements.menuDesc.textContent = '맛있는 메뉴를 고르고 있어요...';
    
    sfx.playTick();

    if (tickCount < totalTicks) {
      currentDelay += 12;
      setTimeout(step, currentDelay);
    } else {
      const finalMenu = getRandomMenu(pool, state.selectedMenu);
      state.selectedMenu = finalMenu;
      finalizeRecommendation(finalMenu);
    }
  }

  step();
}

function finalizeRecommendation(menu) {
  state.isRolling = false;
  elements.recommendBtn.disabled = false;
  elements.recommendCard.classList.remove('is-rolling');
  elements.recommendCard.classList.add('revealed');

  // 디테일한 고화질 비주얼 및 정보 갱신
  elements.menuImage.src = menu.image;
  elements.menuImage.alt = menu.name;
  elements.menuTag.textContent = `${menu.emoji} ${menu.categoryName}`;
  elements.menuName.textContent = menu.name;
  elements.menuDesc.textContent = menu.desc;

  // 지도 검색 링크 (네이버 지도)
  elements.naverMapLink.href = `https://map.naver.com/v5/search/${encodeURIComponent(menu.name)}`;

  // 공유 버튼 노출
  elements.actionLinks.classList.remove('hidden');

  // 사운드 및 폭죽
  sfx.playSuccess();
  fireConfetti();

  // 히스토리에 추가
  addToHistory(menu);
}

// 8. 이벤트 바인딩
function setupEventListeners() {
  // 카테고리 탭 클릭
  elements.categoryTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-btn');
    if (!btn || state.isRolling) return;

    elements.categoryBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    state.currentCategory = btn.dataset.category;

    if (!state.selectedMenu) {
      const catText = btn.textContent.trim();
      elements.menuDesc.textContent = `[${catText}] 카테고리 중에서 맛있는 메뉴를 골라드릴게요!`;
    }
  });

  // 메뉴 추천 버튼 클릭
  elements.recommendBtn.addEventListener('click', () => {
    runRecommendation();
  });

  // 사운드 토글
  elements.soundToggle.addEventListener('change', (e) => {
    state.soundEnabled = e.target.checked;
    showToast(state.soundEnabled ? '효과음이 켜졌습니다 🔔' : '효과음이 꺼졌습니다 🔕');
  });

  // 공유하기 버튼 클릭
  elements.shareBtn.addEventListener('click', async () => {
    if (!state.selectedMenu) return;

    const shareText = `[오늘 뭐 먹지?] 오늘 추천 메뉴는 바로 '${state.selectedMenu.name}' (${state.selectedMenu.categoryName}) 입니다! 🍽️`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(shareText);
        showToast('클립보드에 메뉴가 복사되었습니다! 🎉');
      } catch (err) {
        showToast(`추천 메뉴: ${state.selectedMenu.name}`);
      }
    } else {
      showToast(`추천 메뉴: ${state.selectedMenu.name}`);
    }
  });

  // 히스토리 지우기
  elements.clearHistoryBtn.addEventListener('click', () => {
    state.history = [];
    renderHistory();
    showToast('추천 기록이 지워졌습니다.');
  });

  // 키보드 스페이스바 추천 지원
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body && !state.isRolling) {
      e.preventDefault();
      runRecommendation();
    }
  });
}

// 9. 앱 시작 & 이미지 사전 로드
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  preloadImages();
});
