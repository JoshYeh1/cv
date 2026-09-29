(() => {
  const S = window.SITE;
  const { $, esc, placeholder, tags, still, highlights, bullets, table } = window.UI;

  $("#year").textContent = new Date().getFullYear();

  const id = new URLSearchParams(location.search).get("id");
  const index = S.projects.findIndex((p) => p.id === id);
  if (index === -1) { location.replace("index.html#projects"); return; }
  const p = S.projects[index];

  // Per-project title, description, and canonical URL
  const pageUrl = `https://joshyeh1.github.io/cv/project.html?id=${encodeURIComponent(p.id)}`;
  document.title = `${p.title} · ${S.name}, Electrical Engineer`;
  const setMeta = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
  setMeta('meta[name="description"]', "content", p.summary);
  setMeta('meta[property="og:title"]', "content", `${p.title} · ${S.name}`);
  setMeta('meta[property="og:description"]', "content", p.summary);
  setMeta('meta[property="og:url"]', "content", pageUrl);
  setMeta('link[rel="canonical"]', "href", pageUrl);

  /* ---------- hero media: first item, shown large and fully visible ---------- */
  const heroMedia = (m) => {
    if (!m) return placeholder(p.icon);
    const alt = esc(m.caption || p.title);
    if (m.type === "video")
      return `<video src="${esc(m.src)}"${m.poster ? ` poster="${esc(m.poster)}"` : ""} controls playsinline preload="metadata" aria-label="${alt}"></video>`;
    if (m.type === "youtube")
      return `<iframe src="https://www.youtube-nocookie.com/embed/${esc(m.id)}?rel=0" title="${alt}" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    return `<button class="pp-hero-btn" data-open="0" aria-label="Enlarge: ${alt}"><img src="${esc(m.src)}" alt="${alt}"></button>`;
  };

  /* ---------- gallery ---------- */
  // Diagrams, schematics, and charts (PNGs) are shown whole; photos fill their tile
  const isDiagram = (m) => m.type === "image" && (m.fit === "contain" || /\.png$/i.test(m.src));
  const tile = (m, i) => `
      <figure class="pp-tile">
        <button class="pp-tile-media${isDiagram(m) ? " is-diagram" : ""}" data-open="${i}" aria-label="Enlarge: ${esc(m.caption || "media " + (i + 1))}">
          ${still(m, m.caption || p.title)}
          ${m.type !== "image" ? `<span class="play-badge" aria-hidden="true">▶</span>` : ""}
        </button>
        ${m.caption ? `<figcaption>${esc(m.caption)}</figcaption>` : ""}
      </figure>`;
  const indexed = p.media.map((m, i) => ({ m, i }));
  const primary = indexed.filter(({ m }) => !m.more);
  const extra = indexed.filter(({ m }) => m.more);

  const nVideo = p.media.filter((m) => m.type !== "image").length;
  const nImage = p.media.length - nVideo;
  const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
  const mediaCount = [nImage && plural(nImage, "image"), nVideo && plural(nVideo, "video")].filter(Boolean).join(" · ");

  /* ---------- case-study blocks ---------- */
  const block = (title, inner, cls = "") =>
    inner ? `<section class="pp-block ${cls}"><div class="pp-block-head"><h2>${title}</h2></div>${inner}</section>` : "";
  const para = (text) => (text ? `<p class="pp-text">${esc(text)}</p>` : "");

  const iteration = (list) =>
    list && list.length
      ? `<ol class="iter-list">${list
          .map(
            (it, n) => `
          <li class="iter">
            <div class="iter-n" aria-hidden="true">${String(n + 1).padStart(2, "0")}</div>
            <dl>
              <div><dt>Issue</dt><dd>${esc(it.issue)}</dd></div>
              <div><dt>Root cause</dt><dd>${esc(it.cause)}</dd></div>
              <div><dt>Fix</dt><dd>${esc(it.fix)}</dd></div>
              <div class="iter-result"><dt>Result</dt><dd>${esc(it.result)}</dd></div>
            </dl>
          </li>`
          )
          .join("")}</ol>`
      : "";

  const results = (p.results && p.results.length) || p.table
    ? `${bullets(p.results)}${table(p.table)}`
    : "";

  const sections = (p.sections || [])
    .map(
      (sec) => `
      <section class="pp-sub reveal" aria-label="${esc(sec.title)}">
        <div class="pp-block-head">
          <h2>${esc(sec.title)}</h2>
          ${sec.meta ? `<span class="sub-meta">${esc(sec.meta)}</span>` : ""}
        </div>
        <div class="pp-cols pp-cols-tight">
          <div>
            ${sec.text ? `<p class="pp-text">${esc(sec.text)}</p>` : ""}
            ${highlights(sec.highlights)}
          </div>
          <div>${bullets(sec.bullets)}</div>
        </div>
        ${table(sec.table)}
      </section>`
    )
    .join("");

  const links = p.links && p.links.length
    ? `<div class="pp-links">${p.links.map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>`
    : "";

  const prev = S.projects[(index - 1 + S.projects.length) % S.projects.length];
  const next = S.projects[(index + 1) % S.projects.length];

  $("#project").innerHTML = `
    <article class="pp" aria-labelledby="pp-title">
      <a class="pp-back" href="index.html#projects">← All projects</a>

      <div class="pp-top">
        <header class="pp-header">
          <p class="project-meta"><span class="sub">${esc(p.subtitle)}</span><span>${esc(p.date)}</span></p>
          <h1 id="pp-title">${esc(p.title)}</h1>
          <p class="pp-summary">${esc(p.summary)}</p>
          ${p.highlights ? `<p class="kr-label">Key results</p>${highlights(p.highlights)}` : ""}
          ${links}
        </header>
        <figure class="pp-hero-wrap">
          <div class="pp-hero">${heroMedia(p.media[0])}</div>
          ${p.media[0] && p.media[0].caption ? `<figcaption class="pp-hero-caption">${esc(p.media[0].caption)}</figcaption>` : ""}
        </figure>
      </div>

      <div class="pp-cols reveal">
        ${block("Problem", para(p.problem || p.summary))}
        ${block("My role", para(p.role))}
      </div>

      <div class="pp-cols reveal">
        ${block("System / Design", bullets(p.system))}
        ${block("Engineering implementation", bullets(p.implementation))}
      </div>

      ${block("Test &amp; iteration", iteration(p.iteration), "reveal")}
      ${block("Results", results, "reveal")}

      ${sections}

      ${block("Technologies", tags(p.tags), "reveal pp-tech")}

      ${p.media.length > 1 ? `
      <section class="pp-block pp-gallery-block reveal">
        <div class="pp-block-head"><h2>Gallery</h2><span class="sub-meta">${mediaCount} · click to enlarge</span></div>
        <div class="pp-gallery">${primary.map(({ m, i }) => tile(m, i)).join("")}</div>
        ${extra.length ? `
        <details class="pp-more">
          <summary>More development photos (${extra.length})</summary>
          <div class="pp-gallery pp-gallery-sm">${extra.map(({ m, i }) => tile(m, i)).join("")}</div>
        </details>` : ""}
      </section>` : ""}

      <nav class="pp-pager" aria-label="More projects">
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
