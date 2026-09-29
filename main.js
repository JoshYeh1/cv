(() => {
  const S = window.SITE;
  const { $, esc, placeholder, tags, socialLinks } = window.UI;

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

  $("#hero-social").innerHTML = socialLinks(S);
  $("#contact-social").innerHTML = socialLinks(S);
  const mail = $("#contact-email");
  mail.href = `mailto:${S.email}`;
  mail.textContent = S.email;

  $("#about-body").innerHTML = S.about.map((p) => `<p>${esc(p)}</p>`).join("");

  /* ---------- projects ---------- */
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
      (p) => `
    <a class="project-card reveal${p.featured ? " featured" : ""}" href="project.html?id=${esc(p.id)}">
      <div class="project-cover">${cover(p)}</div>
      <div class="project-info">
        <div class="project-meta"><span class="sub">${esc(p.subtitle)}</span><span>${esc(p.date)}</span></div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        ${tags(p.tags)}
        <span class="project-more">View project <span>→</span></span>
      </div>
    </a>`
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

  window.UI.initNav();
  window.UI.initReveal();
})();
