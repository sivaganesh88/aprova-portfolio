# APROVA — Videography Portfolio

React + Vite + Tailwind CSS.

    npm install
    cp .env.example .env   # add your Cloudinary cloud name
    npm run dev

- Edit all media in `src/data/media.js` (Cloudinary public IDs, delivered with `f_auto,q_auto`).
- Local files: put them in `public/media/` and use `src: '/media/file.mp4'`.
- Replace `public/aprova-logo.svg` with your final logo.
- Without a cloud name set, the player shows a colour-bar "no signal" screen.
