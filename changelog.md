## v2.0 — Catppuccin overhaul

feat: Complete Catppuccin theme with dark/light toggle
- Catppuccin Mocha as default dark theme, Catppuccin Latte as light
- Theme toggle button (🌙/☀️) with localStorage persistence
- Dark mode by default, class-based CSS variables

feat: Restructure navigation links
- New "~/lalamos" category: ChatGPT, Gemini, Claude, OpenRouter
- Merged DeepL Write + Translator into single "DeepL" link
- Removed Phind and Osu! entries

feat: Add favicon — Nakiri Ayame (Hololive) chibi sticker

feat: Light mode background image (repo-assets/img-light.jpg)

fix: Footer visibility in dark mode (use var(--links-color))
fix: Category group colors properly applied via CSS selectors
fix: Remove text-shadow glow on nav link hover
fix: img-resize.js placement (was outside <body>)
fix: Invalid ::root → :root (cosmetic, no-op)
fix: Telegram target="_blank" typo (extra space)

style: Glassmorphism panel (backdrop-filter blur)
style: Clean nav link hover (opacity: 0.65, no glow)
style: Gradient backgrounds for both themes
style: All colors via CSS variables for single-point theming

---

## v1.0

feat: Enhance link styling in CSS

- Increase the interactivity for the 'rozy' class by applying bold font weight and underline on hover and focus.
- Add styling for the 'link' class with the same hover and focus effects.

Update the footer section in index.html:
- Include a new Gmail link in the navigation menu. The link is targeted to open in a new tab (`target="_blank"`) and directs to the [Gmail inbox](https://mail.google.com/mail/u/0/#inbox).

For more details, check the diff [here](https://github.com/LitFill/startpage/compare/3750bf4..1b0f19b).

fitur: Tingkatkan gaya tautan dalam CSS

- Tingkatkan interaktivitas untuk kelas 'rozy' dengan menerapkan berat huruf tebal dan garis bawah saat dihover dan difokuskan.
- Tambah gaya untuk kelas 'link' dengan efek hover dan focus yang sama.

Perbarui bagian footer di index.html:
- Sertakan tautan Gmail baru dalam menu navigasi. Tautan ini ditargetkan untuk dibuka dalam tab baru (`target="_blank"`) dan mengarah ke [kotak masuk Gmail](https://mail.google.com/mail/u/0/#inbox).

Untuk lebih jelasnya, lihat perbedaan [di sini](https://github.com/LitFill/startpage/compare/3750bf4..1b0f19b).

