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
    vista: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
      <circle cx="60" cy="60" r="16"/><circle cx="60" cy="60" r="6" fill="currentColor"/>
      <path d="M20 60q40-40 80 0q-40 40-80 0"/>
      <path d="M14 30h14M14 38h9M92 30h14M97 38h9M14 90h14M14 82h9M92 90h14M97 82h9" opacity=".55"/>
      <path d="M60 16v10M60 94v10" opacity=".55" stroke-dasharray="2 3"/></svg>`,
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

  $("#about-body").innerHTML = S.about.map((p) => `<p>${esc(p)}</p>`).join("");

  /* ---------- projects ---------- */
  const tags = (arr) => `<div class="tags">${arr.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;

  const cover = (p) => {
    const m = p.media[0];
    if (!m) return placeholder(p.icon);
    const count = p.media.length > 1 ? `<span class="media-count">+${p.media.length - 1}</span>` : "";
    const fit = m.fit === "contain" ? ` class="fit-contain"` : m.fit === "top" ? ` class="fit-top"` : "";
    const focus = m.focus ? ` style="object-position:${esc(m.focus)}"` : "";
    if (m.type === "image") return `<img src="${esc(m.src)}" alt="${esc(m.caption || p.title)}"${fit}${focus} loading="lazy">${count}`;
    if (m.type === "video") return `<video src="${esc(m.teaser || m.src)}"${m.poster ? ` poster="${esc(m.poster)}"` : ""} muted loop playsinline autoplay preload="metadata"></video><span class="play-badge" aria-hidden="true">▶</span>${count}`;
    if (m.type === "youtube") return `<img src="https://i.ytimg.com/vi/${esc(m.id)}/hqdefault.jpg" alt="${esc(p.title)}" loading="lazy">${count}`;
    return placeholder(p.icon);
  };

  $("#project-grid").innerHTML = S.projects
    .map(
      (p, i) => `
    <article class="project-card reveal${p.featured ? " featured" : ""}" tabindex="0" data-index="${i}">
      <div class="project-cover">${cover(p)}</div>
      <div class="project-info">
        <div class="project-meta"><span class="sub">${esc(p.subtitle)}</span><span>${esc(p.date)}</span></div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        ${tags(p.tags)}
        <span class="project-more">View project <span>→</span></span>
      </div>
    </article>`
    )
    .join("");

  /* ---------- experience ---------- */
  $("#timeline").innerHTML = S.experience
    .map(
      (e) => `
    <li class="tl-item reveal"><div class="tl-card">
      <div class="tl-head"><h3>${esc(e.role)}</h3><span class="tl-date">${esc(e.date)}</span></div>
      <div class="tl-org">${esc(e.org)}</div>
      <ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      ${e.links ? `<div class="tl-links">${e.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}
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
      <span class="tl-date">${esc(e.date)} · ${esc(e.place)}</span>
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
    else if (m.type === "video") stage = `<video src="${esc(m.src)}"${m.poster ? ` poster="${esc(m.poster)}"` : ""} controls autoplay playsinline></video>`;
    else if (m.type === "youtube") stage = `<iframe src="https://www.youtube-nocookie.com/embed/${esc(m.id)}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    const nav = list.length > 1
      ? `<button class="gallery-nav prev" data-step="-1" aria-label="Previous">‹</button><button class="gallery-nav next" data-step="1" aria-label="Next">›</button>`
      : "";
    const thumbs = list.length > 1
      ? `<div class="thumbs">${list
          .map((t, i) => {
            const inner = t.type === "image" ? `<img src="${esc(t.src)}" alt="">`
              : t.type === "youtube" ? `<img src="https://i.ytimg.com/vi/${esc(t.id)}/default.jpg" alt="">`
              : t.poster ? `<img src="${esc(t.poster)}" alt=""><span class="thumb-play">▶</span>`
              : `<span>▶ video</span>`;
            return `<button class="thumb ${i === slide ? "active" : ""}" data-slide="${i}" aria-label="Media ${i + 1}">${inner}</button>`;
          })
          .join("")}</div>`
      : "";
    mediaEl.innerHTML = `<div style="position:relative"><div class="stage">${stage}</div>${nav}</div>${m.caption ? `<div class="caption">${esc(m.caption)}</div>` : ""}${thumbs}`;
  };

  // highlights → bullets → table; shared by the project body and its sub-sections
  const detail = (d) => `
      ${d.highlights ? `<div class="highlights">${d.highlights.map((h) => `<div class="hl"><div class="hl-value">${esc(h.value)}</div><div class="hl-label">${esc(h.label)}</div></div>`).join("")}</div>` : ""}
      ${d.bullets ? `<ul>${d.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
      ${d.table ? `<div class="table-wrap"><table>
        <caption>${esc(d.table.caption)}</caption>
        <thead><tr>${d.table.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${d.table.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>` : ""}`;

  const openModal = (i) => {
    current = S.projects[i];
    slide = 0;
    lastFocus = document.activeElement;
    renderSlide();
    const p = current;
    bodyEl.innerHTML = `
      <div class="project-meta"><span class="sub">${esc(p.subtitle)}</span><span>${esc(p.date)}</span></div>
      <h3>${esc(p.title)}</h3>
      <p class="lead">${esc(p.description || p.summary)}</p>
      ${detail(p)}
      ${(p.sections || []).map((sec) => `
        <section class="sub-section">
          <h4>${esc(sec.title)}</h4>
          ${sec.meta ? `<div class="sub-meta">${esc(sec.meta)}</div>` : ""}
          ${sec.text ? `<p>${esc(sec.text)}</p>` : ""}
          ${detail(sec)}
        </section>`).join("")}
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

  /* ---------- design picker (temporary: remove once a design is chosen) ---------- */
  const THEMES = [["clean", "Clean"], ["graphite", "Graphite"], ["blueprint", "Blueprint"], ["notebook", "Lab Notebook"]];
  const setTheme = (t) => {
    if (t === "clean") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
    picker.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.pick === t));
  };
  const picker = document.createElement("div");
  picker.className = "theme-picker";
  picker.innerHTML = THEMES.map(([id, label]) => `<button data-pick="${id}">${label}</button>`).join("");
  picker.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) setTheme(b.dataset.pick); });
  document.body.appendChild(picker);
  setTheme(new URLSearchParams(location.search).get("theme") || localStorage.getItem("theme") || "clean");

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
