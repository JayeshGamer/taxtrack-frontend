# TaxTrack — Repository Overview

This repository contains the frontend for TaxTrack and some helper scripts at the repository root.

This README documents:
- What the project is
- How to set it up locally (Windows-focused commands)
- Available scripts and how to run them
- How to resolve `file > 100MB` issues (two safe approaches: Git LFS or removing large blobs from history using the helper scripts)
- Project structure and where to modify the main visual styles (background/gradients)
- Contributing, testing, and troubleshooting

---

## Quick summary

- Frontend app lives in `taxtrack-frontend/` (Next.js + TypeScript + Tailwind).
- Helpful scripts at repo root: `list_large_blobs.ps1`, `remove_large_with_bfg.bat`, `remove_large_with_filterrepo.bat` (use these carefully — they rewrite history).
- If you have a file too large to push (>100MB), preferred options are:
  - Use Git LFS for large assets you need to keep
  - Remove the large file(s) and their history using the included scripts and then force-push (requires team coordination)

---

## Project: taxtrack-frontend

A modern frontend built with Next.js, TypeScript and Tailwind CSS.

Tech stack (from `taxtrack-frontend/package.json`):
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion, Recharts, Three.js, wagmi, viem, etc.

Important scripts (run inside `taxtrack-frontend`):

```cmd
cd taxtrack-frontend
npm install
npm run dev       :: development server (next dev)
npm run build     :: production build
npm start         :: start built app
npm run lint      :: run linter (next lint)
```

Note: On Windows, run these commands in `cmd.exe` or PowerShell. If using WSL, adjust accordingly.

---

## Add a subtle off-white main background + gradient (design notes)

You mentioned the main landing page looks too dull and requested Off White `#FAF9F6` with subtle gradients for the main background only. The global CSS lives at `taxtrack-frontend/src/app/globals.css`. A non-invasive approach:

1. Keep the color family the same (off-white) and add a very subtle linear- or radial-gradient to the `body` or main container so sections and components keep their existing backgrounds.

Example CSS (copy into `globals.css` or `:root` where you define base styles):

```css
/* Add a subtle background with the requested off-white */
:root {
  --off-white: #FAF9F6;
}

html, body {
  background: radial-gradient(1200px 600px at 10% 10%, rgba(250,249,246,0.6), transparent 20%),
              radial-gradient(1000px 500px at 90% 90%, rgba(250,249,246,0.5), transparent 20%),
              var(--off-white);
  /* Keep text-color and other tokens unchanged */
}

/* If you want a lighter subtle sheen on top of the off-white without changing component colors */
.main-bg-overlay {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.01));
}
```

These rules preserve the off-white base (#FAF9F6) but add faint gradients that make the page feel less flat.

If you'd like, I can make this change directly in `taxtrack-frontend/src/app/globals.css` and run a quick dev server check — confirm if you want me to apply it.

---

## Resolving "file is more than 100 MB" when pushing

If `git push` fails because a file in your history exceeds GitHub's 100 MB limit, you have two safe options.

Option A — Use Git LFS (recommended for large binary assets you want to keep):

1. Install Git LFS (Windows):

```cmd
choco install git-lfs    :: if you use Chocolatey OR
winget install --id Git.GitLFS -e --source winget
```

or manually from https://git-lfs.com/

2. Enable LFS in your repo and track file types you want to store in LFS (example for images):

```cmd
cd D:\Web3Hackathon
git lfs install
git lfs track "*.psd" "*.png" "*.zip" "*.mov"
git add .gitattributes
```

3. Replace the large file by removing it from the index and re-adding (or commit new large files that are LFS tracked):

```cmd
git rm --cached path\to\large.file
git add path\to\large.file  :: now tracked by LFS
git commit -m "Move large assets to Git LFS"
git push origin main
```

Notes:
- LFS stores pointers in Git while keeping the actual large objects in LFS storage.
- If the big file is already in history, LFS won't retroactively rewrite old commits; you may still need to remove the historic blobs (see Option B).

Option B — Remove the large blob(s) from history (rewrites history; all collaborators must re-clone):

This repo already includes helper scripts at the root. Summary of recommended steps (using the filter-repo script which is modern and fast):

1. Create a backup of your repo (clone or copy). Never run history-rewriting commands on the only copy.

```cmd
cd D:\
mkdir repo-backups
cd D:\Web3Hackathon
git clone --mirror . ..\repo-backups\taxtrack-frontend-backup.git
```

2. Use the `remove_large_with_filterrepo.bat` script (it wraps `git filter-repo`). On Windows you may need Python and `git-filter-repo` available. The script should contain the common arguments to remove blobs above a threshold.

Run it from the repo root (in `cmd.exe`):

```cmd
cd D:\Web3Hackathon
remove_large_with_filterrepo.bat
```

If the script needs `git-filter-repo` installed, you can install it with pip:

```cmd
python -m pip install git-filter-repo
```

3. Verify the repo locally and force-push the cleaned history to the remote (this will rewrite remote history):

```cmd
git remote add origin-clean <your-remote-url>  :: OPTIONAL: prefer pushing to a new remote first
# or to overwrite origin (team coordination required):
git push --force origin main
```

4. Notify collaborators. Everyone must re-clone or run recovery steps.

Alternate: `BFG Repo Cleaner` (script `remove_large_with_bfg.bat`) is a widely used wrapper around BFG. It's simpler but also rewrites history.

---

## Recommended `.gitignore`

A `.gitignore` has been added to the repo root to help avoid committing build artefacts and node modules (see `.gitignore` in repo root). It includes common ignores for Node/Next/Tailwind/IDE files. If you want specific additions (e.g., certain large files), tell me and I can extend it.

---

## Repo structure (top-level)

- `taxtrack-frontend/` — Next.js app (source lives under `taxtrack-frontend/src/`)
- `list_large_blobs.ps1` — PowerShell helper to list large blobs in your Git history
- `remove_large_with_bfg.bat` — Batch wrapper to run BFG Repo Cleaner
- `remove_large_with_filterrepo.bat` — Batch wrapper to run git-filter-repo
- `README_CLEANUP.md` — existing cleanup notes

---

## Contributing & Workflow

- Use feature branches: `feature/describe-thing` or `fix/short-description`.
- Rebase or merge strategy is up to the team; if you rewrite history (filter-repo/BFG) coordinate with the team.

Pull request checklist:
- Lint passes: `npm run lint` inside `taxtrack-frontend`
- No accidentally committed secrets or large files
- Update the changelog if applicable

---

## Troubleshooting

- If you still see `error: GH001: Large files detected` after moving to LFS, make sure the large objects are removed from past commits (see Option B).
- If `git filter-repo` fails, ensure you run it from a mirrored repo clone and that Python + git-filter-repo are installed.

---

## Next steps I can take for you

- Apply the subtle off-white gradient to `taxtrack-frontend/src/app/globals.css` and run the dev server to confirm how it looks.
- Help remove or migrate large files to Git LFS and run the included scripts for you (I will only give commands; I cannot run pushes from here).

If you want me to apply the CSS change now, tell me and I will add it and validate locally (dev server check). If you'd like the full README content revised or printed here, tell me — otherwise the file is in the repo root at `D:\Web3Hackathon\README.md`.

