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

## Deploy (GitHub Pages)
1. Create a public repo named **`JoshYeh1.github.io`** on GitHub.
2. Push this folder to it:
   ```bash
   git remote add origin https://github.com/JoshYeh1/JoshYeh1.github.io.git
   git push -u origin main
   ```
3. On GitHub, go to Settings → Pages and set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. The site goes live at **https://joshyeh1.github.io** within a minute or two. Every later push updates it.
