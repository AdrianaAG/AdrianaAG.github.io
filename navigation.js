// Content and anchor links work without this script. It only highlights the current section.
const sidebar = document.querySelector('.sidebar');
const navigationLinks = [...document.querySelectorAll('.section-navigation a')];
const sections = navigationLinks.map(link => document.querySelector(link.hash));
const mobileMenu = window.matchMedia('(max-width: 820px)');
let updateScheduled = false;

function updateCurrentSection() {
  updateScheduled = false;

  // On small screens, activate a section just below the sticky navigation.
  const menuBottom = mobileMenu.matches ? sidebar.getBoundingClientRect().bottom : 0;
  const readingLine = menuBottom + Math.min(120, (window.innerHeight - menuBottom) * 0.2);
  let currentSection = sections[0];

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= readingLine) currentSection = section;
  }

  // The final section may be too short to reach the reading line at the bottom of the page.
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    currentSection = sections[sections.length - 1];
  }

  for (const link of navigationLinks) {
    if (link.hash === `#${currentSection.id}`) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

function scheduleUpdate() {
  if (!updateScheduled) {
    updateScheduled = true;
    window.requestAnimationFrame(updateCurrentSection);
  }
}

window.addEventListener('scroll', scheduleUpdate, {passive: true});
window.addEventListener('resize', scheduleUpdate);
window.addEventListener('hashchange', scheduleUpdate);
window.addEventListener('pageshow', scheduleUpdate);
window.addEventListener('load', scheduleUpdate);
document.addEventListener('toggle', scheduleUpdate, true);
document.fonts.ready.then(scheduleUpdate);
scheduleUpdate();
