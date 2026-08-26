const navDropdowns = [...document.querySelectorAll(".nav-dropdown")];

function closeOtherDropdowns(activeDropdown = null) {
  navDropdowns.forEach((dropdown) => {
    if (dropdown !== activeDropdown) {
      dropdown.classList.remove("is-open");
    }
  });
}

navDropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".nav-dropdown-toggle");

  dropdown.addEventListener("mouseenter", () => {
    closeOtherDropdowns(dropdown);
  });

  toggle?.addEventListener("click", (event) => {
    event.preventDefault();
    const shouldOpen = !dropdown.classList.contains("is-open");
    closeOtherDropdowns(dropdown);
    dropdown.classList.toggle("is-open", shouldOpen);
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-dropdown")) {
    closeOtherDropdowns();
  }
});
