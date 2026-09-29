(() => {
  const S = window.SITE;
  const { $, esc, placeholder, tags, still, highlights, bullets, table } = window.UI;

  $("#nav-resume").href = S.resume;
  $("#year").textContent = new Date().getFullYear();

  const id = new URLSearchParams(location.search).get("id");
  const index = S.projects.findIndex((p) => p.id === id);
  if (index === -1) { location.replace("index.html#projects"); return; }
  const p = S.projects[index];
  document.title = `${p.title} — ${S.name}`;

  /* ---------- hero media: first item, shown large and fully visible ---------- */
  const heroMedia = (m) => {
    if (!m) return placeholder(p.icon);
    if (m.type === "video")
      return `<video src="${esc(m.src)}"${m.poster ? ` poster="${esc(m.poster)}"` : ""} controls playsinline preload="metadata"></video>`;
    if (m.type === "youtube")
      return `<iframe src="https://www.youtube-nocookie.com/embed/${esc(m.id)}?rel=0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    return `<button class="pp-hero-btn" data-open="0" aria-label="Enlarge image"><img src="${esc(m.src)}" alt="${esc(m.caption || p.title)}"></button>`;
  };

  /* ---------- gallery: every media item as a tile with its caption below ---------- */
  // Diagrams, schematics, and charts (PNGs) are shown whole; photos fill their tile
  const isDiagram = (m) => m.type === "image" && (m.fit === "contain" || /\.png$/i.test(m.src));
  const gallery = p.media
    .map(
      (m, i) => `
      <figure class="pp-tile reveal">
        <button class="pp-tile-media${isDiagram(m) ? " is-diagram" : ""}" data-open="${i}" aria-label="Open ${esc(m.caption || "media " + (i + 1))}">
          ${still(m, m.caption || p.title)}
          ${m.type !== "image" ? `<span class="play-badge" aria-hidden="true">▶</span>` : ""}
        </button>
        ${m.caption ? `<figcaption>${esc(m.caption)}</figcaption>` : ""}
      </figure>`
    )
    .join("");

  const sections = (p.sections || [])
    .map(
      (sec) => `
      <section class="pp-block pp-sub reveal">
        <div class="pp-block-head">
          <h2>${esc(sec.title)}</h2>
          ${sec.meta ? `<div class="sub-meta">${esc(sec.meta)}</div>` : ""}
        </div>
        ${sec.text ? `<p class="pp-text">${esc(sec.text)}</p>` : ""}
        ${highlights(sec.highlights)}
        ${bullets(sec.bullets)}
        ${table(sec.table)}
      </section>`
    )
    .join("");

  const links = p.links && p.links.length
    ? `<div class="pp-links">${p.links.map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>`
    : "";

  const nVideo = p.media.filter((m) => m.type !== "image").length;
  const nPhoto = p.media.length - nVideo;
  const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
  const mediaCount = [nPhoto && plural(nPhoto, "photo"), nVideo && plural(nVideo, "video")].filter(Boolean).join(" · ");

  const prev = S.projects[(index - 1 + S.projects.length) % S.projects.length];
  const next = S.projects[(index + 1) % S.projects.length];

  $("#project").innerHTML = `
    <article class="pp">
      <a class="pp-back" href="index.html#projects">← All projects</a>

      <header class="pp-header">
        <div class="project-meta"><span class="sub">${esc(p.subtitle)}</span><span>${esc(p.date)}</span></div>
        <h1>${esc(p.title)}</h1>
        <p class="pp-summary">${esc(p.summary)}</p>
        ${tags(p.tags)}
      </header>

      <div class="pp-hero">${heroMedia(p.media[0])}</div>
      ${p.media[0] && p.media[0].caption ? `<p class="pp-hero-caption">${esc(p.media[0].caption)}</p>` : ""}

      ${highlights(p.highlights)}

      <section class="pp-block reveal">
        <div class="pp-block-head"><h2>Overview</h2></div>
        <p class="pp-text">${esc(p.description || p.summary)}</p>
        ${links}
      </section>

      <section class="pp-block reveal">
        <div class="pp-block-head"><h2>What I did</h2></div>
        ${bullets(p.bullets)}
        ${table(p.table)}
      </section>

      ${sections}

      ${p.media.length > 1 ? `
      <section class="pp-block reveal">
        <div class="pp-block-head"><h2>Gallery</h2><div class="sub-meta">${mediaCount} · click to enlarge</div></div>
        <div class="pp-gallery">${gallery}</div>
      </section>` : ""}

      <nav class="pp-pager">
        <a href="project.html?id=${esc(prev.id)}"><span>← Previous</span><strong>${esc(prev.title)}</strong></a>
        <a href="project.html?id=${esc(next.id)}" class="next"><span>Next →</span><strong>${esc(next.title)}</strong></a>
      </nav>
    </article>`;

  /* ---------- lightbox ---------- */
  const lb = $("#lightbox");
  const stage = $("#lb-stage");
  let cur = 0, lastFocus = null;

  const renderLb = () => {
    const m = p.media[cur];
    stage.innerHTML =
      m.type === "video" ? `<video src="${esc(m.src)}"${m.poster ? ` poster="${esc(m.poster)}"` : ""} controls autoplay playsinline></video>`
      : m.type === "youtube" ? `<iframe src="https://www.youtube-nocookie.com/embed/${esc(m.id)}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
      : `<img src="${esc(m.src)}" alt="${esc(m.caption || p.title)}"${isDiagram(m) ? ` class="is-diagram"` : ""}>`;
    $("#lb-count").textContent = p.media.length > 1 ? `${cur + 1} / ${p.media.length}` : "";
    $("#lb-text").textContent = m.caption || "";
    lb.classList.toggle("single", p.media.length < 2);
  };
  const openLb = (i) => {
    // pause the inline hero video so audio doesn't overlap
    document.querySelectorAll(".pp-hero video").forEach((v) => v.pause());
    cur = i; lastFocus = document.activeElement;
    renderLb();
    lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lb.querySelector(".lb-close").focus();
  };
  const closeLb = () => {
    lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => (stage.innerHTML = ""), 200); // stops video playback
    if (lastFocus) lastFocus.focus();
  };
  const step = (d) => { cur = (cur + d + p.media.length) % p.media.length; renderLb(); };

  $("#project").addEventListener("click", (e) => {
    const t = e.target.closest("[data-open]");
    if (t) openLb(+t.dataset.open);
  });
  lb.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]") || e.target === lb) return closeLb();
    const s = e.target.closest("[data-step]");
    if (s) step(+s.dataset.step);
  });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  window.UI.initNav();
  window.UI.initReveal();
})();
