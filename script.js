/**
 * Theme toggle — system-preference-aware, persisted in localStorage
 */
((doc, store) => {
  const html = doc.documentElement;
  const stored = store.getItem("theme");
  const btn = doc.querySelector(".toggle-theme");

  const setTheme = (isLight) => {
    html.classList.toggle("light", isLight);
    html.classList.toggle("dark", !isLight);
    store.setItem("theme", isLight ? "light" : "dark");
    const img = doc.getElementById("image");
    if (img)
      img.src = isLight
        ? "repo-assets/img-light.webp"
        : "repo-assets/img-dark.webp";
  };

  // Initial theme: prefer stored → system → dark
  if (stored === "light") html.classList.add("light");
  else if (stored === "dark") html.classList.add("dark");
  else if (matchMedia("(prefers-color-scheme: light)").matches)
    html.classList.add("light");
  else html.classList.add("dark");

  // Sync toggle button
  btn.textContent = html.classList.contains("light")
    ? "\u2600\uFE0F"
    : "\u{1F319}";
  btn.addEventListener("click", () =>
    setTheme(!html.classList.contains("light")),
  );
})(document, localStorage);

/**
 * Clock — live HH:MM:SS display
 */
const jam = document.querySelector(".jam");
const menit = document.querySelector(".menit");
const detik = document.querySelector(".detik");

const pad = (n) => `${n}`.padStart(2, "0");

let prev = "";

function tick() {
  const { hour, minute, second } = Temporal.Now.plainTimeISO();
  const hh = pad(hour),
    mm = pad(minute),
    ss = pad(second);
  const hms = `${hh}:${mm}:${ss}`;

  if (hms !== prev) {
    jam.textContent = hh;
    menit.textContent = mm;
    detik.textContent = ss;
    prev = hms;
  }
  requestAnimationFrame(tick);
}

tick();

/**
 * Refresh page on click
 */
document
  .querySelector(".refresh")
  ?.addEventListener("click", () => location.reload());

/**
 * Keyboard shortcuts
 */
document.addEventListener("keydown", (e) => {
  const input = document.getElementById("q");
  if (!input) return;

  // / or Ctrl+K → focus search
  if (e.key === "/" && e.target !== input) {
    e.preventDefault();
    input.focus();
    return;
  }
  if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    input.focus();
    return;
  }

  // Escape → clear, then blur
  if (e.key === "Escape" && document.activeElement === input) {
    if (input.value) {
      input.value = "";
      e.preventDefault();
    } else {
      input.blur();
    }
    return;
  }

  // 1-4 → focus first <a> in group N
  const n = parseInt(e.key, 10);
  if (
    n >= 1 &&
    n <= 4 &&
    e.target !== input &&
    !e.ctrlKey &&
    !e.metaKey &&
    !e.altKey
  ) {
    e.preventDefault();
    document.querySelectorAll("nav > ul")[n - 1]?.querySelector("a")?.focus();
  }
});
