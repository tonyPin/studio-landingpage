const navList = document.querySelector(".nav-head__list")
const toggleBtn = document.querySelector(".mobile-toggle")

toggleBtn.addEventListener("click", () => {
  const visibility = navList.getAttribute("data-visible")

  if (visibility === "false") {
    navList.setAttribute("data-visible", "true")
    toggleBtn.setAttribute("aria-expanded", "true")
  } else if (visibility === "true") {
    navList.setAttribute("data-visible", "false")
    toggleBtn.setAttribute("aria-expanded", "false")
  }
})
