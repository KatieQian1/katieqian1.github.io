# Junyi Qian — Personal Portfolio

A responsive, dependency-free portfolio prepared for `https://kaiteq04.github.io/`.

## Files

The complete deployable website is inside `dist/`. Open `dist/index.html` directly to inspect it. No npm install or build step is needed.

## Publish on GitHub Pages

1. Sign in to GitHub as **KaiteQ04**.
2. Create a public repository named **kaiteq04.github.io**. If it already exists, review its contents before replacing anything.
3. Upload the **contents** of `dist/` to the repository root, preserving the `assets/` directory. `index.html` must be at the root, not inside a `dist` folder.
4. In **Settings → Pages**, choose **Deploy from a branch**, branch **main**, directory **/(root)**, then **Save**.
5. Wait for GitHub's deployment to succeed. Use the URL shown in Settings → Pages to verify the live site before sharing it in job applications.

Alternatively, use Git locally after creating the empty repository:

```sh
cd dist
git init -b main
git add .
git commit -m "Build Junyi Qian portfolio"
git remote add origin https://github.com/KaiteQ04/kaiteq04.github.io.git
git push -u origin main
```

Then configure Pages as described above. Authenticate through GitHub's supported sign-in flow; do not put tokens in source code.

## Editing

- Copy, experience, project details and links: `dist/index.html`
- Colors, spacing, responsive layouts: `dist/styles.css`
- Project category filters: `dist/script.js`
- Résumé: replace `dist/assets/Junyi-Qian-Resume.pdf` using the same filename.
- Portrait: replace `dist/assets/portrait.png` using the same filename, then adjust CSS `object-position` if needed.

The current résumé is the supplied October 13, 2026 version. The website uses the broader Summer 2027 availability. Update the PDF when a newer résumé is ready.

Project art is illustrative, not a screenshot or a measured chart. All project results are taken from supplied résumé content; ongoing speech research is explicitly labeled. Industry project source is not linked. No analytics, cookies, API keys, backend, or contact-form service is included. Email opens the visitor's email application.

The `.openai` directory is for the private review deployment and is not needed on GitHub Pages. The original design uses no Pixelarity template code or paid assets.
