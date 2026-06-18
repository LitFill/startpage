/**
 * Theme toggle — system-preference-aware, persisted in localStorage
 */
(function () {
  var html = document.documentElement;
  var stored = localStorage.getItem("theme");

  function setTheme(isLight) {
    if (isLight) {
      html.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
    }
    updateThemeImage(html.classList.contains("light"));
  }

  function updateThemeImage(isLight) {
    var img = document.getElementById("image");
    if (!img) return;
    img.src = isLight
      ? "repo-assets/img-light.webp"
      : "repo-assets/img-dark.webp";
  }

  if (stored === "light") {
    html.classList.add("light");
  } else if (stored === "dark") {
    html.classList.add("dark");
  } else if (matchMedia("(prefers-color-scheme: light)").matches) {
    html.classList.add("light");
  } else {
    html.classList.add("dark");
  }

  var btn = document.querySelector(".toggle-theme");
  btn.addEventListener("click", function () {
    setTheme(!html.classList.contains("light"));
    btn.textContent = html.classList.contains("light") ? "\u2600\uFE0F" : "\u{1F319}";
  });

  // Sync toggle button text and image on load
  btn.textContent = html.classList.contains("light") ? "\u2600\uFE0F" : "\u{1F319}";
  updateThemeImage(html.classList.contains("light"));
})();

/**
 * Clock — live HH:MM:SS display
 */
var jamElem = document.querySelector(".jam");
var menitElem = document.querySelector(".menit");
var detikElem = document.querySelector(".detik");

function formatTimeValue(value) {
  return value < 10 ? "0" + value : value;
}

function updateClock() {
  var _a = Temporal.Now.plainTimeISO(), hour = _a.hour, minute = _a.minute, second = _a.second;
  jamElem.innerHTML = formatTimeValue(hour);
  menitElem.innerHTML = formatTimeValue(minute);
  detikElem.innerHTML = formatTimeValue(second);
}

updateClock();
setInterval(updateClock, 1000);

/**
 * Refresh page on click
 */
document.querySelector(".refresh").addEventListener("click", function () {
  return location.reload();
});

/**
 * Keyboard shortcuts
 *   / or Ctrl+K  → focus search
 *   Escape       → clear search, then blur
 *   1-4          → focus first link in link group N
 */
document.addEventListener("keydown", function (e) {
  var input = document.getElementById("q");

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

  // Escape → clear search value, then blur
  if (e.key === "Escape" && document.activeElement === input) {
    if (input.value) {
      input.value = "";
      e.preventDefault();
    } else {
      input.blur();
    }
    return;
  }

  // 1-4 → focus first link in link group N (only when search is not focused)
  var n = parseInt(e.key, 10);
  if (n >= 1 && n <= 4 && e.target !== input && !e.ctrlKey && !e.metaKey && !e.altKey) {
    e.preventDefault();
    var uls = document.querySelectorAll("nav > ul");
    var firstLink = uls[n - 1] && uls[n - 1].querySelector("a");
    if (firstLink) firstLink.focus();
    return;
  }
});