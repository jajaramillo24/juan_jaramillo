// profile-card.js - lightweight vanilla JS implementation adapted from the React component
(function(){
  const root = document.getElementById('profile-card-root');
  if(!root) return;

  // Create overlay and card
  const overlay = document.createElement('div');
  overlay.className = 'pc-overlay';
  overlay.setAttribute('role','dialog');
  overlay.setAttribute('aria-hidden','true');

  const wrapper = document.createElement('div');
  wrapper.className = 'pc-card-wrapper';

  const card = document.createElement('section');
  card.className = 'pc-card';

  card.innerHTML = `
    <div class="pc-inside">
      <button class="pc-close" aria-label="Close profile">✕</button>
      <div class="pc-shine"></div>
      <div class="pc-glare"></div>
      <div class="pc-content pc-avatar-content">
        <img class="avatar" src="/path/to/avatar.jpg" alt="Avatar">
        <div class="pc-user-info">
          <div style="display:flex;align-items:center">
            <div class="pc-mini-avatar"><img src="/path/to/avatar.jpg" alt="mini"></div>
            <div class="pc-user-text"><div class="pc-handle">@javicodes</div><div class="pc-status">Online</div></div>
          </div>
          <button class="pc-contact-btn">Contact Me</button>
        </div>
      </div>
      <div class="pc-content">
        <div class="pc-details"><h3>Javi A. Torres</h3><p>Software Engineer</p></div>
      </div>
    </div>
  `;

  wrapper.appendChild(card);
  overlay.appendChild(wrapper);
  root.appendChild(overlay);

  // State
  let isOpen = false;
  const logo = document.querySelector('.logo-icon');
  const closeBtn = overlay.querySelector('.pc-close');
  const contactBtn = overlay.querySelector('.pc-contact-btn');

  // basic tilt implementation
  let rafId = null;
  function updateTransform(x,y){
    const rect = wrapper.getBoundingClientRect();
    const offsetX = x - rect.left;
    const offsetY = y - rect.top;
    const percentX = Math.min(Math.max((100/rect.width)*offsetX,0),100);
    const percentY = Math.min(Math.max((100/rect.height)*offsetY,0),100);
    const centerX = percentX - 50;
    const centerY = percentY - 50;
    wrapper.style.setProperty('--pointer-x', percentX + '%');
    wrapper.style.setProperty('--pointer-y', percentY + '%');
    wrapper.style.setProperty('--pointer-from-center', Math.hypot(percentY - 50, percentX - 50)/50);
    wrapper.style.setProperty('--rotate-x', (-(centerX/5)).toFixed(2)+'deg');
    wrapper.style.setProperty('--rotate-y', (centerY/4).toFixed(2)+'deg');
    card.style.transform = `rotateX(var(--rotate-y)) rotateY(var(--rotate-x))`;
  }

  // throttle pointer move with rAF to improve performance
  let pending = false;
  let lastX = 0;
  let lastY = 0;
  function onPointerMove(e){
    lastX = e.clientX;
    lastY = e.clientY;
    if (!pending) {
      pending = true;
      requestAnimationFrame(() => {
        updateTransform(lastX, lastY);
        pending = false;
      });
    }
  }

  function onPointerEnter(){ wrapper.classList.add('active'); }
  function onPointerLeave(e){
    // animate back to center but DO NOT close the overlay; keep modal open
    const startX = e.offsetX || wrapper.clientWidth/2;
    const startY = e.offsetY || wrapper.clientHeight/2;
    const duration = 600;
    const startTime = performance.now();
    function anim(now){
      const elapsed = now - startTime;
      const t = Math.min(elapsed/duration,1);
      const ease = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3)/2;
      const curX = startX + (wrapper.clientWidth/2 - startX)*ease;
      const curY = startY + (wrapper.clientHeight/2 - startY)*ease;
      updateTransform(curX,curY);
      if(t<1) rafId = requestAnimationFrame(anim);
    }
    if(rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(anim);
    wrapper.classList.remove('active');
  }

  // Open/close logic
  function openCard(){
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    isOpen = true;
    // center initial pointer
    updateTransform(wrapper.getBoundingClientRect().left + wrapper.clientWidth - 70, 60);
    // attach pointer listeners
    card.addEventListener('pointermove', onPointerMove);
    card.addEventListener('pointerleave', onPointerLeave);
    card.addEventListener('pointerenter', onPointerEnter);
    document.addEventListener('keydown', onKeyDown);
  }

  function closeCard(){
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden','true');
    isOpen = false;
    card.removeEventListener('pointermove', onPointerMove);
    card.removeEventListener('pointerleave', onPointerLeave);
    card.removeEventListener('pointerenter', onPointerEnter);
    document.removeEventListener('keydown', onKeyDown);
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  function onKeyDown(e){ if(e.key === 'Escape') closeCard(); }

  // click handlers
  if(logo){
    logo.addEventListener('click', () => {
      if(isOpen) closeCard(); else openCard();
    });
  }

  closeBtn.addEventListener('click', closeCard);

  overlay.addEventListener('click', (e)=>{
    if(e.target === overlay) closeCard();
  });

  contactBtn.addEventListener('click', ()=>{
    // trigger existing contact nav item
    const contactNav = document.querySelector('.nav-item[data-section="contact"]');
    if(contactNav) contactNav.click();
    closeCard();
  });

  // expose for debugging
  window.__profileCard = { open: openCard, close: closeCard };
})();
