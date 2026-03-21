document.getElementById("year").textContent = new Date().getFullYear();

const profilePhoto = document.querySelector(".profile-photo");
const profileInitials = document.querySelector(".profile-initials");
const profileFrame = document.querySelector(".profile-frame");
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

function showProfilePhoto() {
  if (!profilePhoto) {
    return;
  }

  profilePhoto.classList.add("is-loaded");
  profileFrame?.classList.add("has-image");
  if (profileInitials) {
    profileInitials.setAttribute("aria-hidden", "true");
  }
}

function showProfileFallback() {
  if (!profilePhoto) {
    return;
  }

  profilePhoto.classList.remove("is-loaded");
  profileFrame?.classList.remove("has-image");
  if (profileInitials) {
    profileInitials.removeAttribute("aria-hidden");
  }
}

if (profilePhoto) {
  if (profilePhoto.complete && profilePhoto.naturalWidth > 0) {
    showProfilePhoto();
  } else {
    showProfileFallback();
  }

  profilePhoto.addEventListener("load", showProfilePhoto);
  profilePhoto.addEventListener("error", showProfileFallback);
}
