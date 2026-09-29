/* Helpers shared by the home page (main.js) and project pages (project.js). */
window.UI = (() => {
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  };

  // Simple line-art placeholders, shown only for projects with no media yet
  const ART = {
    gonio: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="60" cy="60" r="44" stroke-dasharray="3 5"/><circle cx="60" cy="60" r="30"/><circle cx="60" cy="60" r="5" fill="currentColor"/></svg>`,
    wafer: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="60" cy="60" r="46"/><rect x="48" y="50" width="24" height="20" fill="currentColor" fill-opacity=".25"/></svg>`,
    glasses: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="14" y="48" width="38" height="26" rx="10"/><rect x="68" y="48" width="38" height="26" rx="10"/><path d="M52 58c4-4 12-4 16 0"/></svg>`,
    vista: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="60" cy="60" r="16"/><path d="M20 60q40-40 80 0q-40 40-80 0"/></svg>`,
    robot: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="26" y="44" width="68" height="36" rx="6"/><circle cx="38" cy="86" r="10"/><circle cx="82" cy="86" r="10"/></svg>`,
  };
  const placeholder = (icon) => `<div class="placeholder">${ART[icon] || ART.gonio}</div>`;

  // Minimal line icons for skill groups (24×24, stroke = currentColor)
  const SKILL_ICONS = {
    chip: '<rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx=".5"/><path d="M9 2.5v3.5M15 2.5v3.5M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/>',
    scope: '<rect x="2.5" y="4" width="19" height="14" rx="2"/><path d="M5.5 11c1.2-4 2.4-4 3.6 0s2.4 4 3.6 0 2.4-4 3.6 0 1.2 2 2.2 2"/><path d="M8 21h8"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4 5.3 5.3"/><circle cx="12" cy="12" r="6.5"/>',
    code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4.5l-3 15"/>',
    check: '<rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="m8 12.5 2.8 2.8L16.5 9"/>',
    network: '<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><path d="M7 6.8 10.2 11M7 17.2l3.2-4.2M14 12h3"/>',
  };
  const skillIcon = (name) =>
    SKILL_ICONS[name] ? `<svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SKILL_ICONS[name]}</svg>` : "";

  // Org badge: the real logo recolored to the accent via CSS mask, or text initials as a fallback
  const orgMark = (o) =>
    o.logo ? `<div class="org-mark has-logo" role="img" aria-label="${esc(o.org || o.school || "")} logo"><span style="-webkit-mask-image:url('${esc(o.logo)}');mask-image:url('${esc(o.logo)}')"></span></div>`
    : o.mark ? `<div class="org-mark" aria-hidden="true">${esc(o.mark)}</div>` : "";

  const tags = (arr) => `<div class="tags">${arr.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;

  // Still image for a media item (used for card covers and gallery tiles)
  const still = (m, alt, extraAttrs = "") => {
    if (m.type === "image") return `<img src="${esc(m.src)}" alt="${esc(alt)}"${extraAttrs} loading="lazy">`;
    if (m.type === "youtube") return `<img src="https://i.ytimg.com/vi/${esc(m.id)}/hqdefault.jpg" alt="${esc(alt)}" loading="lazy">`;
    if (m.poster) return `<img src="${esc(m.poster)}" alt="${esc(alt)}"${extraAttrs} loading="lazy">`;
    return `<video src="${esc(m.src)}#t=0.5" muted playsinline preload="metadata"></video>`;
  };

  const highlights = (list) =>
    list ? `<div class="highlights">${list.map((h) => `<div class="hl"><div class="hl-value">${esc(h.value)}</div><div class="hl-label">${esc(h.label)}</div></div>`).join("")}</div>` : "";

  // A bullet is a string, or [lead, detail] to render a bold lead-in for easy scanning
  const bullets = (list) =>
    list ? `<ul class="bullets">${list.map((b) => Array.isArray(b) ? `<li><strong>${esc(b[0])}</strong> ${esc(b[1])}</li>` : `<li>${esc(b)}</li>`).join("")}</ul>` : "";

  const table = (t) =>
    t ? `<div class="table-wrap"><table>
        <caption>${esc(t.caption)}</caption>
        <thead><tr>${t.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${t.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>${t.note ? `<p class="table-note">${esc(t.note)}</p>` : ""}</div>` : "";

  const socialLinks = (S) => `
    <a class="icon-link" href="${S.github}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>
    <a class="icon-link" href="${S.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
    <a class="icon-link" href="mailto:${S.email}" aria-label="Email">${ICONS.mail}</a>`;

  const initNav = () => {
    const nav = $("#nav");
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Mobile menu
    const toggle = $("#nav-toggle"), links = $("#nav-links");
    if (toggle && links) {
      const set = (open) => { links.classList.toggle("open", open); toggle.setAttribute("aria-expanded", String(open)); toggle.textContent = open ? "Close" : "Menu"; };
      toggle.addEventListener("click", () => set(!links.classList.contains("open")));
      links.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
    }

    // Highlight the nav link for the section in view (home page only)
    const map = new Map();
    document.querySelectorAll('.nav-links a[href^="#"]').forEach((a) => {
      const sec = document.querySelector(a.getAttribute("href"));
      if (sec) map.set(sec, a);
    });
    if (map.size) {
      const spy = new IntersectionObserver(
        (entries) => entries.forEach((en) => {
          if (en.isIntersecting) { map.forEach((a) => a.classList.remove("active")); map.get(en.target).classList.add("active"); }
        }),
        { rootMargin: "-45% 0px -50% 0px" }
      );
      map.forEach((_, sec) => spy.observe(sec));
    }
  };

  const initReveal = () => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  };


  return { $, esc, ICONS, placeholder, skillIcon, orgMark, tags, still, highlights, bullets, table, socialLinks, initNav, initReveal };
})();
