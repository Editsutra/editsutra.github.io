// EditSutra website behaviour: config wiring, honest fallbacks, campaign tracking, light motion.
(function () {
  'use strict';
  const S = window.SITE || {};
  const $ = (id) => document.getElementById(id);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- campaign parameters (Instagram Reels, creator referrals) ----------
  // utm_* and ref from the landing URL are kept for the visit and passed on to checkout.
  const params = new URLSearchParams(location.search);
  const campaign = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'ref'].forEach((k) => { if (params.get(k)) campaign[k] = params.get(k).slice(0, 100); });
  try {
    if (Object.keys(campaign).length) sessionStorage.setItem('es_campaign', JSON.stringify(campaign));
    else Object.assign(campaign, JSON.parse(sessionStorage.getItem('es_campaign') || '{}'));
  } catch (e) { /* storage blocked: campaign only for this page view */ }
  const withCampaign = (url) => {
    if (!Object.keys(campaign).length) return url;
    try { const u = new URL(url); Object.entries(campaign).forEach(([k, v]) => u.searchParams.set(k, v)); return u.href; } catch (e) { return url; }
  };

  // ---------- analytics events ----------
  // No third-party tracker is loaded. Events go to window.dataLayer, so a privacy-friendly analytics
  // tool can be connected later without changing the page; nothing is sent anywhere by default.
  window.dataLayer = window.dataLayer || [];
  const track = (event, data) => window.dataLayer.push(Object.assign({ event, ...campaign }, data || {}));
  track('landing_visit', { path: location.pathname });
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-track]');
    if (a) track(a.dataset.track, { where: a.dataset.where, os: a.dataset.os });
  });

  // ---------- canonical / announcement ----------
  if (S.url) $('canonical').href = S.url;
  if (!S.betaOffer) $('announce').hidden = true;

  // ---------- checkout ----------
  const checkoutMsg = $('checkout-msg');
  document.querySelectorAll('.js-buy').forEach((a) => {
    if (S.checkoutUrl) { a.href = withCampaign(S.checkoutUrl); a.target = '_blank'; a.rel = 'noopener'; return; }
    a.addEventListener('click', (e) => {
      e.preventDefault();
      checkoutMsg.hidden = false;
      checkoutMsg.textContent = '';
      checkoutMsg.append('Online checkout opens soon. To buy now for ₹999, email ');
      const m = document.createElement('a'); m.href = 'mailto:' + (S.support || '') + '?subject=Buy%20EditSutra%20Beta%20(%E2%82%B9999)'; m.textContent = S.support || 'support';
      checkoutMsg.append(m, ' — you get a UPI payment link and your licence key by email.');
    });
  });

  // ---------- downloads ----------
  const dlMsg = $('dl-msg');
  [['dl-mac', 'mac'], ['dl-win', 'windows']].forEach(([id, os]) => {
    const a = $(id), url = (S.downloads || {})[os];
    if (url) { a.href = url; return; }
    a.addEventListener('click', (e) => {
      e.preventDefault();
      dlMsg.hidden = false;
      dlMsg.textContent = 'Downloads open with the public beta. ' + (S.support ? 'Contact ' + S.support + ' for early access.' : 'Early-access testers receive the installer directly.');
    });
  });

  // ---------- support, policies ----------
  if (S.support) {
    const isUrl = /^https?:/.test(S.support), isMail = /@/.test(S.support);
    const link = () => { const a = document.createElement('a'); a.textContent = S.support.replace(/^https?:\/\//, ''); a.href = isUrl ? S.support : isMail ? 'mailto:' + S.support : '#'; return a; };
    const faq = $('faq-support'); faq.textContent = 'Write to '; faq.appendChild(link()); faq.append('. Include a screenshot and the log file from the app if something went wrong.');
    const foot = $('foot-support'); foot.textContent = ''; foot.appendChild(link());
  }
  if (S.updatePolicy && $('update-policy')) $('update-policy').querySelector('span').textContent = S.updatePolicy;

  // ---------- demo video ----------
  const slot = $('demo-slot');
  if (S.demoVideo) {
    slot.textContent = '';
    if (/\.(mp4|webm)$/i.test(S.demoVideo)) {
      const v = document.createElement('video');
      v.src = S.demoVideo; v.controls = true; v.playsInline = true; v.preload = 'metadata';
      v.addEventListener('play', () => track('demo_play'), { once: true });
      slot.appendChild(v);
    } else {
      // YouTube: a click-to-load poster, so nothing from YouTube loads until the visitor asks
      const b = document.createElement('button');
      b.className = 'yt'; b.type = 'button'; b.setAttribute('aria-label', 'Play the EditSutra demo video');
      b.style.backgroundImage = `url(https://i.ytimg.com/vi/${encodeURIComponent(S.demoVideo)}/hqdefault.jpg)`;
      b.addEventListener('click', () => {
        track('demo_play');
        const f = document.createElement('iframe');
        f.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(S.demoVideo)}?autoplay=1&rel=0`;
        f.title = 'EditSutra demo'; f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true;
        slot.replaceChildren(f);
      });
      slot.appendChild(b);
    }
  }

  // ---------- value calculator (visitor's own numbers) ----------
  const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
  const calc = () => {
    const v = +$('c-videos').value, h = +$('c-hours').value, r = +$('c-rate').value;
    $('o-videos').textContent = v; $('o-hours').textContent = h; $('o-rate').textContent = inr(r);
    const hours = v * h, value = hours * r;
    $('r-hours').textContent = (Number.isInteger(hours) ? hours : hours.toFixed(1)) + ' hours';
    $('r-value').textContent = inr(value) + ' / month';
    const days = value > 0 ? Math.max(1, Math.ceil(999 / (value / 30))) : 0;
    $('r-payback').textContent = days ? (days === 1 ? 'about a day' : 'about ' + days + ' days') : '—';
  };
  ['c-videos', 'c-hours', 'c-rate'].forEach((id) => $(id).addEventListener('input', calc));
  let calcTracked = false;
  ['c-videos', 'c-hours', 'c-rate'].forEach((id) => $(id).addEventListener('change', () => { if (!calcTracked) { calcTracked = true; track('calculator_used'); } }));
  calc();

  // ---------- Pro waitlist: name, email, WhatsApp ----------
  // With SITE.waitlistUrl (e.g. a Google Form) the visitor goes there; otherwise their email app opens a
  // ready-written message to support, so nothing is lost and no data is sent anywhere else.
  const form = $('waitlist'), proMsg = $('pro-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(form), name = (f.get('name') || '').trim(), email = (f.get('email') || '').trim(), wa = (f.get('whatsapp') || '').trim();
    const say = (t) => { proMsg.hidden = false; proMsg.textContent = t; };
    if (!name) return say('Please add your name.');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return say('Please add a valid email.');
    if (!/^\+?[0-9 ()-]{8,20}$/.test(wa)) return say('Please add your WhatsApp number with country code, e.g. +91 98765 43210.');
    if (!f.get('consent')) return say('Please tick the box so we can contact you.');
    track('waitlist_complete', { plan: 'pro' });
    if (S.waitlistUrl) { window.open(S.waitlistUrl, '_blank', 'noopener'); return say('Thanks! Finish joining in the form that just opened.'); }
    const body = `Please add me to the EditSutra Pro waitlist.%0D%0A%0D%0AName: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AWhatsApp: ${encodeURIComponent(wa)}`;
    location.href = `mailto:${S.support || ''}?subject=${encodeURIComponent('Pro waitlist: ' + name)}&body=${body}`;
    say('Your email app is opening with your details — press Send to join. Beta buyers get the Pro upgrade offer first.');
  });

  // ---------- mobile menu ----------
  const btn = $('menu-btn'), menu = $('menu');
  btn.addEventListener('click', () => { const open = btn.getAttribute('aria-expanded') !== 'true'; btn.setAttribute('aria-expanded', open); menu.classList.toggle('open', open); btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) { btn.setAttribute('aria-expanded', 'false'); menu.classList.remove('open'); } });

  // ---------- illustration: a timeline whose pauses and retake are removed ----------
  const pattern = ['sp', 'pa', 'sp', 're', 'sp', 'pa', 'sp', 'sp', 'pa', 'sp'], widths = [14, 6, 11, 9, 16, 5, 9, 12, 7, 11];
  ['tl-v', 'tl-a'].forEach((id) => {
    const row = $(id);
    pattern.forEach((k, i) => { const b = document.createElement('i'); b.className = 'blk ' + k; b.style.flexGrow = widths[i]; row.appendChild(b); });
  });
  const label = $('tl-label');
  const runCut = () => {
    document.querySelectorAll('.timeline .blk.pa, .timeline .blk.re').forEach((b) => b.classList.add('gone'));
    label.textContent = 'After · review-ready';
  };

  // ---------- scroll reveals (light; off for reduced motion) ----------
  const io = 'IntersectionObserver' in window && !reduceMotion ? new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      if (en.target.classList.contains('timeline')) setTimeout(runCut, 700);
      io.unobserve(en.target);
    });
  }, { threshold: 0.2 }) : null;
  document.querySelectorAll('.reveal').forEach((el) => (io ? io.observe(el) : el.classList.add('in')));
  if (!io) runCut();
})();
