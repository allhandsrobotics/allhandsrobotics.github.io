const hero = document.querySelector('#hero-video');
const heroButton = document.querySelector('#hero-toggle');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
function updateHeroButton() { heroButton.textContent = hero.paused ? 'Play demo ↗' : 'Pause demo Ⅱ'; }
hero.addEventListener('play', updateHeroButton);
hero.addEventListener('pause', updateHeroButton);
heroButton.addEventListener('click', () => { if (hero.paused) hero.play().catch(updateHeroButton); else hero.pause(); });
if (reducedMotion.matches) { hero.autoplay = false; hero.pause(); }
updateHeroButton();
document.addEventListener('visibilitychange', () => { if (document.hidden) hero.pause(); });
