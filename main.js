(() => {
  const S = window.SITE;
  const { $, esc, placeholder, skillIcon, orgMark, tags } = window.UI;

  $("#year").textContent = new Date().getFullYear();

  /* ---------- engineering highlights ---------- */
  $("#stats").innerHTML = S.stats
    .map((s) => {
      const p = S.projects.find((x) => x.id === s.project);
      return `<a class="stat" href="project.html?id=${esc(s.project)}">
        <span class="stat-value">${esc(s.value)}</span>
        <span class="stat-label">${esc(s.label)}</span>
        ${p ? `<span class="stat-link">${esc(p.title)} →</span>` : ""}
      </a>`;
    })
    .join("");

  /* ---------- projects: featured / selected / additional ---------- */
  const cover = (p, { showCount = true } = {}) => {
    const m = p.media[0];
    if (!m) return placeholder(p.icon);
    const n = p.media.length;
    const count = showCount && n > 1 ? `<span class="media-count" aria-hidden="true">+${n - 1}</span>` : "";
    const fit = m.fit === "contain" ? ` class="fit-contain"` : m.fit === "top" ? ` class="fit-top"` : "";
    const focus = m.focus ? ` style="object-position:${esc(m.focus)}"` : "";
    const alt = esc(m.caption || p.title);
    if (m.type === "image") return `<img src="${esc(m.src)}" alt="${alt}"${fit}${focus} loading="lazy">${count}`;
    if (m.type === "video")
      return `<video src="${esc(m.teaser || m.src)}"${m.poster ? ` poster="${esc(m.poster)}"` : ""} muted loop playsinline autoplay preload="metadata" aria-label="${alt}"></video><span class="play-badge" aria-hidden="true">▶</span>${count}`;
    if (m.type === "youtube") return `<img src="https://i.ytimg.com/vi/${esc(m.id)}/hqdefault.jpg" alt="${alt}" loading="lazy">${count}`;
    return placeholder(p.icon);
  };

  const card = (p, level) => `
    <a class="project-card reveal ${level}" href="project.html?id=${esc(p.id)}">
      <div class="project-cover">${cover(p, { showCount: level !== "additional" })}</div>
      <div class="project-info">
        <div class="project-meta"><span class="sub">${esc(p.subtitle)}</span><span>${esc(p.date)}</span></div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        ${p.cardTags && p.cardTags.length ? tags(p.cardTags) : ""}
        <span class="project-more">View case study <span aria-hidden="true">→</span></span>
      </div>
    </a>`;

  const tier = (t) => S.projects.filter((p) => (p.tier || "selected") === t);
  const group = (label, list, level, cls) =>
    list.length
      ? `<div class="project-group">
          <p class="group-label">${label}</p>
          <div class="${cls}">${list.map((p) => card(p, level)).join("")}</div>
        </div>`
      : "";

  $("#project-list").innerHTML =
    group("Featured project", tier("featured"), "featured", "project-grid-featured") +
    group("Selected projects", tier("selected"), "selected", "project-grid") +
    group("Additional work", tier("additional"), "additional", "project-grid-additional");

  /* ---------- experience ---------- */
  $("#timeline").innerHTML = S.experience
    .map(
      (e) => `
    <li class="tl-item reveal"><article class="tl-card">
      <span class="tl-date">${esc(e.date)}</span>
      <div class="tl-body">
        <div class="tl-title">
          ${orgMark(e)}
          <div><h3>${esc(e.role)}</h3><p class="tl-org">${esc(e.org)}</p></div>
        </div>
        <ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        ${e.links ? `<div class="tl-links">${e.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}
      </div>
    </article></li>`
    )
    .join("");

  /* ---------- skills / education ---------- */
  $("#skills-grid").innerHTML = S.skills
    .map((g) => `<div class="skill-group reveal"><h3>${skillIcon(g.icon)}${esc(g.group)}</h3>${tags(g.items)}</div>`)
    .join("");
  $("#edu").innerHTML = S.education
    .map(
      (e) => `<article class="edu-card reveal">
      ${orgMark(e)}
      <div><h3>${esc(e.school)}</h3>
      <span class="tl-date">${esc(e.date)} · ${esc(e.place)}</span>
      ${e.degrees.map((d) => `<p>${esc(d)}</p>`).join("")}</div></article>`
    )
    .join("");

  window.UI.initNav();
  window.UI.initReveal();
})();
