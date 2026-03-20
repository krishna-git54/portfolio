document.getElementById("year").textContent = new Date().getFullYear();

const profilePhoto = document.querySelector(".profile-photo");
const profileInitials = document.querySelector(".profile-initials");
const themeToggle = document.getElementById("theme-toggle");
const themeToggleLabel = themeToggle?.querySelector(".theme-toggle-label");
const themeStorageKey = "portfolio-theme";

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);

  if (themeToggle) {
    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");

    if (themeToggleLabel) {
      themeToggleLabel.textContent = isDark ? "Light Mode" : "Dark Mode";
    }
  }
}

const savedTheme = localStorage.getItem(themeStorageKey);
applyTheme(savedTheme === "dark" ? "dark" : "light");

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const nextTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(themeStorageKey, nextTheme);
  });
}

if (profilePhoto) {
  profilePhoto.addEventListener("load", function () {
    profilePhoto.style.display = "block";
    if (profileInitials) {
      profileInitials.style.display = "none";
    }
  });
}
