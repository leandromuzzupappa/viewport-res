let screenElement = null;
let resizeTimeout = null;
let defaultOptions = {
  position: 'top-left',
  color: '#ff3333',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  fontSize: '12px',
  debounceDelay: 100
};

function getPositionStyles(position) {
  const positions = {
    'top-left': { top: '8px', left: '8px' },
    'top-right': { top: '8px', right: '8px' },
    'bottom-left': { bottom: '8px', left: '8px' },
    'bottom-right': { bottom: '8px', right: '8px' }
  };
  return positions[position] || positions['top-left'];
}

function createElement(options) {
  const sr = document.createElement('div');
  sr.id = 'screen-res-display';
  sr.setAttribute('aria-hidden', 'true');

  const positionStyles = getPositionStyles(options.position);

  Object.assign(sr.style, {
    backgroundColor: options.backgroundColor,
    color: options.color,
    padding: '4px 8px',
    borderRadius: '4px',
    position: 'fixed',
    ...positionStyles,
    zIndex: '2147483647',
    fontSize: options.fontSize,
    fontFamily: 'system-ui',
    fontWeight: 'bold',
    pointerEvents: 'none',
    userSelect: 'none',
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
    transition: 'opacity 0.2s'
  });

  return sr;
}

function updateResolution() {
  if (!screenElement) return;

  const w = window.innerWidth;
  const h = window.innerHeight;
  screenElement.textContent = `${w} × ${h}`;
}

function handleResize(debounceDelay) {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateResolution();
  }, debounceDelay);
}

function init(options = {}) {
  if (typeof window === 'undefined') {
    console.warn('screen-res: window is not defined');
    return null;
  }

  const opts = { ...defaultOptions, ...options };

  const initElement = () => {
    if (document.getElementById('screen-res-display')) {
      screenElement = document.getElementById('screen-res-display');
      return;
    }

    screenElement = createElement(opts);
    (document.body || document.documentElement).appendChild(screenElement);
    updateResolution();

    window.addEventListener('resize', () => handleResize(opts.debounceDelay));
  };

  if (document.body) {
    initElement();
  } else {
    document.addEventListener('DOMContentLoaded', initElement);
  }

  return {
    hide: () => {
      if (screenElement) screenElement.style.opacity = '0';
    },
    show: () => {
      if (screenElement) screenElement.style.opacity = '1';
    },
    destroy: () => {
      if (screenElement && screenElement.parentNode) {
        screenElement.parentNode.removeChild(screenElement);
      }
      window.removeEventListener('resize', () => handleResize(opts.debounceDelay));
      clearTimeout(resizeTimeout);
      screenElement = null;
    },
    update: updateResolution
  };
}

if (typeof window !== 'undefined' && !window.screenResInstance) {
  window.screenResInstance = init();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = init;
}

export default init;