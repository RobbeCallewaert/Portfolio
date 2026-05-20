/**
 * transition.js
 * Shared element transition between carousel and project page.
 *
 * ON THE CAROUSEL (index.html):
 *   Call transition.navigateTo(projectKey, thumbElement) when a project is clicked.
 *   This stores the thumbnail's bounding rect and navigates to the project page.
 *
 * ON THE PROJECT PAGE (project.html):
 *   Call transition.playIn(heroElement) after the hero element is in the DOM.
 *   This animates the hero from the stored rect to its final position.
 *
 * BACK NAVIGATION:
 *   transition.back() reads the stored project key and navigates back to index,
 *   passing the key so the carousel can restore position.
 */

const transition = (() => {
  const STORAGE_KEY = 'rc_transition';
  const ACTIVE_KEY  = 'rc_active_project';

  /* Store the thumbnail rect + project key before navigating away */
  function navigateTo(projectKey, thumbEl, projectColor, thumbSrc) {
    const rect = thumbEl.getBoundingClientRect();
    const data = {
      key: projectKey,
      rect: {
        top:    rect.top,
        left:   rect.left,
        width:  rect.width,
        height: rect.height
      }
    };
    if (projectColor) data.color    = projectColor;
    if (thumbSrc)    data.thumbSrc  = thumbSrc;
    sessionStorage.setItem(STORAGE_KEY,  JSON.stringify(data));
    sessionStorage.setItem(ACTIVE_KEY, projectKey);
    window.location.href = `project.html?key=${projectKey}`;
  }

  /* Read the stored rect on the project page */
  function getStoredData() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  /* Animate the hero element in from the stored thumbnail rect */
  function playIn(heroEl, onComplete) {
    const data = getStoredData();
    const supportsVT = 'startViewTransition' in document;

    if (!data || !supportsVT) {
      // No stored rect, or browser doesn't support View Transitions (e.g. Firefox) —
      // skip the scale animation and just fade in normally.
      if (data) sessionStorage.removeItem(STORAGE_KEY);
      heroEl.style.opacity = '0';
      heroEl.style.transform = 'translateY(16px)';
      requestAnimationFrame(() => {
        heroEl.style.transition = 'opacity 600ms ease, transform 700ms cubic-bezier(.65,0,.2,1)';
        heroEl.style.opacity = '1';
        heroEl.style.transform = 'translateY(0)';
        if (onComplete) heroEl.addEventListener('transitionend', onComplete, { once: true });
      });
      return;
    }

    const { rect } = data;
    const heroRect = heroEl.getBoundingClientRect();

    // Compute the transform that makes heroEl sit exactly where the thumbnail was
    const scaleX = rect.width  / heroRect.width;
    const scaleY = rect.height / heroRect.height;
    const dx = rect.left + rect.width  / 2 - (heroRect.left + heroRect.width  / 2);
    const dy = rect.top  + rect.height / 2 - (heroRect.top  + heroRect.height / 2);

    // Apply the "from" state instantly (no transition yet)
    heroEl.style.transition = 'none';
    heroEl.style.transformOrigin = 'center center';
    heroEl.style.transform = `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`;
    heroEl.style.opacity = '1';
    heroEl.style.borderRadius = '4px';

    // Force layout flush, then start the transition to the natural position
    void heroEl.offsetWidth;

    heroEl.style.transition = [
      'transform 750ms cubic-bezier(.65,0,.2,1)',
      'border-radius 750ms cubic-bezier(.65,0,.2,1)',
      'opacity 300ms ease'
    ].join(', ');
    heroEl.style.transform   = 'translate(0, 0) scale(1, 1)';
    heroEl.style.borderRadius = '0px';

    if (onComplete) {
      const handler = (e) => {
        if (e.propertyName === 'transform') {
          heroEl.removeEventListener('transitionend', handler);
          onComplete();
        }
      };
      heroEl.addEventListener('transitionend', handler);
    }

    // Clean up storage after we've used it
    sessionStorage.removeItem(STORAGE_KEY);
  }

  /* Navigate back to index, restoring carousel position */
  function back() {
    const key = sessionStorage.getItem(ACTIVE_KEY) || '';
    window.location.href = `index.html${key ? '?restore=' + key : ''}`;
  }

  /* On the index page, read ?restore= param and return the key */
  function getRestoreKey() {
    const params = new URLSearchParams(window.location.search);
    return params.get('restore') || null;
  }

  return { navigateTo, playIn, back, getRestoreKey, getStoredData };
})();
