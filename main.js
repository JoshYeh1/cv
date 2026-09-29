(() => {
  const S = window.SITE;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- icons ---------- */
  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  };

  // Schematic-style placeholder art per project (shown until real media is added)
  const ART = {
    gonio: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.6">
      <circle cx="60" cy="60" r="44" stroke-dasharray="3 5"/><circle cx="60" cy="60" r="30"/>
      <ellipse cx="60" cy="60" rx="44" ry="14" opacity=".6"/><ellipse cx="60" cy="60" rx="14" ry="44" opacity=".6"/>
      <circle cx="60" cy="60" r="5" fill="currentColor"/><path d="M60 16v-8M60 112v-8M16 60H8M112 60h-8"/>
      <path d="M86 22a44 44 0 0 1 12 14" stroke-width="2.4"/><path d="m98 36 1-7-6 3" /></svg>`,
    wafer: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4">
      <defs><clipPath id="wclip"><circle cx="60" cy="60" r="44"/></clipPath></defs>
      <path d="M60 14a46 46 0 1 1-12 1.6"/><path d="M48 15.6 54 22h12l6-6.4" opacity=".8"/>
      <g clip-path="url(#wclip)">${Array.from({ length: 9 }, (_, i) => `<path d="M${12 + i * 12} 10v100" opacity=".35"/><path d="M10 ${12 + i * 12}h100" opacity=".35"/>`).join("")}</g>
      <rect x="48" y="50" width="24" height="20" fill="currentColor" fill-opacity=".25"/></svg>`,
    glasses: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
      <rect x="14" y="48" width="38" height="26" rx="10"/><rect x="68" y="48" width="38" height="26" rx="10"/>
      <path d="M52 58c4-4 12-4 16 0M14 54 6 46M106 54l8-8"/>
      <path d="M33 38v-6M87 38v-6M60 30v-8" opacity=".6"/><path d="M40 92q10 8 20 0t20 0" opacity=".7"/>
      <path d="M30 100q15 10 30 0t30 0" opacity=".4"/></svg>`,
    robot: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round">
      <rect x="26" y="44" width="68" height="36" rx="6"/><rect x="42" y="30" width="36" height="14" rx="3"/>
      <circle cx="60" cy="37" r="4" fill="currentColor"/><circle cx="38" cy="86" r="10"/><circle cx="82" cy="86" r="10"/>
      <path d="M64 37h36M64 37l34-14M64 37l34 14" opacity=".45" stroke-dasharray="3 4"/>
      <path d="M36 58h14v10H36zM58 60h26M58 66h18" opacity=".7"/></svg>`,
  };

  const placeholder = (icon) => `<div class="placeholder">${ART[icon] || ART.gonio}</div>`;

  /* ---------- hero / static ---------- */
  document.title = `${S.name} — ${S.role}`;
  $("#hero-name").textContent = S.name;
  $("#hero-role").textContent = S.role;
  $("#hero-tagline").textContent = S.tagline;
  ["#nav-resume", "#hero-resume"].forEach((id) => ($(id).href = S.resume));
  $("#year").textContent = new Date().getFullYear();

  const initials = S.name.split(" ").map((w) => w[0]).join("");
  const frame = $("#photo-frame");
  if (S.photo) {
    const img = new Image();
    img.alt = S.name;
    img.onload = () => { frame.innerHTML = ""; frame.appendChild(img); };
    img.src = S.photo;
  }
  frame.innerHTML = `<span class="initials">${esc(initials)}</span>`;

  const social = `
    <a class="icon-link" href="${S.github}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>
    <a class="icon-link" href="${S.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
    <a class="icon-link" href="mailto:${S.email}" aria-label="Email">${ICONS.mail}</a>`;
  $("#hero-social").innerHTML = social;
  $("#contact-social").innerHTML = social;
  const mail = $("#contact-email");
  mail.href = `mailto:${S.email}`;
  mail.textContent = S.email;

  $("#stats").innerHTML = S.stats
    .map((s) => `<div class="stat"><div class="stat-value">${esc(s.value)}</div><div class="stat-label">${esc(s.label)}</div></div>`)
    .join("");
  $("#about-body").innerHTML = S.about.map((p) => `<p>${esc(p)}</p>`).join("");

  /* ---------- projects ---------- */
  const tags = (arr) => `<div class="tags">${arr.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;

  const cover = (p) => {
    const m = p.media[0];
    if (!m) return placeholder(p.icon);
    const count = p.media.length > 1 ? `<span class="media-count mono">${p.media.length} media</span>` : "";
    if (m.type === "image") return `<img src="${esc(m.src)}" alt="${esc(m.caption || p.title)}" loading="lazy">${count}`;
    if (m.type === "video") return `<video src="${esc(m.src)}" muted loop playsinline autoplay preload="metadata"></video>${count}`;
    if (m.type === "youtube") return `<img src="https://i.ytimg.com/vi/${esc(m.id)}/hqdefault.jpg" alt="${esc(p.title)}" loading="lazy">${count}`;
    return placeholder(p.icon);
  };

  $("#project-grid").innerHTML = S.projects
    .map(
      (p, i) => `
    <article class="project-card reveal" tabindex="0" data-index="${i}" style="transition-delay:${(i % 2) * 80}ms">
      <div class="project-cover">${cover(p)}</div>
      <div class="project-info">
        <div class="project-meta mono"><span class="sub">${esc(p.subtitle)}</span><span>${esc(p.date)}</span></div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        ${tags(p.tags)}
        <span class="project-more mono">Details <span>→</span></span>
      </div>
    </article>`
    )
    .join("");

  /* ---------- experience ---------- */
  $("#timeline").innerHTML = S.experience
    .map(
      (e) => `
    <li class="tl-item reveal"><div class="tl-card">
      <div class="tl-head"><h3>${esc(e.role)}</h3><span class="tl-date mono">${esc(e.date)}</span></div>
      <div class="tl-org">${esc(e.org)}</div>
      <ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
    </div></li>`
    )
    .join("");

  /* ---------- skills / edu ---------- */
  $("#skills-grid").innerHTML = S.skills
    .map((g) => `<div class="skill-group reveal"><h4>${esc(g.group)}</h4>${tags(g.items)}</div>`)
    .join("");
  $("#edu").innerHTML = S.education
    .map(
      (e) => `<div class="edu-card reveal"><h3>${esc(e.school)}</h3>
      <span class="tl-date mono">${esc(e.date)} · ${esc(e.place)}</span>
      ${e.degrees.map((d) => `<p>${esc(d)}</p>`).join("")}</div>`
    )
    .join("");

  /* ---------- modal + gallery ---------- */
  const modal = $("#modal");
  const mediaEl = $("#modal-media");
  const bodyEl = $("#modal-body");
  let current = null, slide = 0, lastFocus = null;

  const renderSlide = () => {
    const p = current, list = p.media;
    if (!list.length) { mediaEl.innerHTML = placeholder(p.icon); return; }
    const m = list[slide];
    let stage = "";
    if (m.type === "image") stage = `<img src="${esc(m.src)}" alt="${esc(m.caption || p.title)}">`;
    else if (m.type === "video") stage = `<video src="${esc(m.src)}" controls autoplay playsinline></video>`;
    else if (m.type === "youtube") stage = `<iframe src="https://www.youtube-nocookie.com/embed/${esc(m.id)}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    const nav = list.length > 1
      ? `<button class="gallery-nav prev" data-step="-1" aria-label="Previous">‹</button><button class="gallery-nav next" data-step="1" aria-label="Next">›</button>`
      : "";
    const thumbs = list.length > 1
      ? `<div class="thumbs">${list
          .map((t, i) => {
            const inner = t.type === "image" ? `<img src="${esc(t.src)}" alt="">`
              : t.type === "youtube" ? `<img src="https://i.ytimg.com/vi/${esc(t.id)}/default.jpg" alt="">`
              : `<span class="mono">▶ video</span>`;
            return `<button class="thumb ${i === slide ? "active" : ""}" data-slide="${i}" aria-label="Media ${i + 1}">${inner}</button>`;
          })
          .join("")}</div>`
      : "";
    mediaEl.innerHTML = `<div style="position:relative"><div class="stage">${stage}</div>${nav}${m.caption ? `<div class="caption">${esc(m.caption)}</div>` : ""}</div>${thumbs}`;
  };

  const openModal = (i) => {
    current = S.projects[i];
    slide = 0;
    lastFocus = document.activeElement;
    renderSlide();
    const p = current;
    bodyEl.innerHTML = `
      <div class="project-meta mono"><span class="sub">${esc(p.subtitle)}</span><span>${esc(p.date)}</span></div>
      <h3>${esc(p.title)}</h3>
      <p class="lead">${esc(p.description || p.summary)}</p>
      <ul>${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      ${tags(p.tags)}
      ${p.links && p.links.length ? `<div class="links">${p.links.map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}`;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => (mediaEl.innerHTML = ""), 250); // stops video playback
    if (lastFocus) lastFocus.focus();
  };

  const step = (d) => {
    if (!current || current.media.length < 2) return;
    slide = (slide + d + current.media.length) % current.media.length;
    renderSlide();
  };

  $("#project-grid").addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (card) openModal(+card.dataset.index);
  });
  $("#project-grid").addEventListener("keydown", (e) => {
    const card = e.target.closest(".project-card");
    if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openModal(+card.dataset.index); }
  });
  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) return closeModal();
    const s = e.target.closest("[data-step]");
    if (s) return step(+s.dataset.step);
    const t = e.target.closest("[data-slide]");
    if (t) { slide = +t.dataset.slide; renderSlide(); }
  });
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  /* ---------- nav + reveal ---------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
