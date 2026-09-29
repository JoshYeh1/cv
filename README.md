# Josh Yeh — EE Portfolio

Static portfolio site (plain HTML/CSS/JS, no build step), hosted on GitHub Pages.

## Editing content
All text, projects, and media live in **`data.js`**. Put images in `assets/img/`, videos in `assets/video/`, and your résumé PDF at `assets/Josh_Yeh_Resume_EE.pdf`.

Media entry types for a project's `media` array:
```js
{ type: "image",   src: "assets/img/goniometer-1.jpg", caption: "Assembled stage" }
{ type: "video",   src: "assets/video/robot.mp4",      caption: "Obstacle avoidance run" }
{ type: "youtube", id:  "VIDEO_ID",                    caption: "Demo" }
```
Keep videos under ~25 MB (GitHub rejects files over 100 MB); use YouTube for longer clips.

## Preview locally
```bash
python3 -m http.server 8080
```
Then open http://localhost:8080.

## Deploy (GitHub Pages project site)
This site is served as a **project site** at **https://joshyeh1.github.io/cv/**, separate from the
existing user site in the `joshyeh1.github.io` repo. That repo stays untouched.

1. Create a new **public** repo named **`cv`** (the repo name becomes the URL path).
2. Upload or push the contents of this folder to the repo root (`index.html` must be at the top level).
3. In the repo, go to Settings → Pages → Build and deployment and set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Live at **https://joshyeh1.github.io/cv/** within a minute or two.

All asset paths are relative, so the site works under `/cv/` (or any repo name) without changes.
Don't add a `CNAME` file to this repo. A project site automatically uses the custom domain of the
user site, if the user site has one.
