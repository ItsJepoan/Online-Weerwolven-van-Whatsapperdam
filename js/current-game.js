const currentRolesList = document.getElementById("current-roles-list");
const activeExpansionsList = document.getElementById("active-expansions-list");

const modal = document.getElementById("role-modal");
const modalClose = document.getElementById("role-modal-close");
const modalBackdrop = document.querySelector(".role-modal-backdrop");

const modalName = document.getElementById("modal-role-name");
const modalImage = document.getElementById("modal-role-image");
const modalAlliance = document.getElementById("modal-role-alliance");
const modalTypes = document.getElementById("modal-role-types");
const modalDescription = document.getElementById("modal-role-description");

let lockedScrollY = 0;

const currentRoleIdSet = new Set(currentGameRoleIds);

const activeExpansionRoleIds = roles
  .filter(
    (role) =>
      role.expansionKey && activeExpansionKeys.includes(role.expansionKey)
  )
  .map((role) => role.id);

const allActiveRoleIds = new Set([
  ...currentGameRoleIds,
  ...activeExpansionRoleIds
]);

const currentRoles = roles.filter((role) => allActiveRoleIds.has(role.id));

const normalCurrentRoles = currentRoles.filter(
  (role) => !role.types.includes("Uitbreiding")
);

const sectionOrder = [
  { key: "Burger", title: "Burgers" },
  { key: "Moordenaar", title: "Moordenaars" },
  { key: "Onafhankelijke", title: "Onafhankelijken" },
  { key: "Weerwolf", title: "Weerwolven" },
  { key: "Bijrol", title: "Bijrollen" }
];

function getRoleTypeRank(role) {
  if (role.types.includes("Basis")) return 0;
  if (role.types.includes("Toevoegend")) return 1;
  return 2;
}

function sortRoles(roleList) {
  return [...roleList].sort((a, b) => {
    const typeCompare = getRoleTypeRank(a) - getRoleTypeRank(b);

    if (typeCompare !== 0) {
      return typeCompare;
    }

    return a.name.localeCompare(b.name, "nl", { sensitivity: "base" });
  });
}

function createBadges(items) {
  if (!items || !items.length) {
    return `<span class="badge">Geen</span>`;
  }

  return items.map((item) => `<span class="badge">${item}</span>`).join("");
}

function lockPageScroll() {
  lockedScrollY = window.scrollY || window.pageYOffset || 0;

  document.body.classList.add("modal-open");
  document.body.style.top = `-${lockedScrollY}px`;
}

function unlockPageScroll() {
  document.body.classList.remove("modal-open");
  document.body.style.top = "";
  window.scrollTo(0, lockedScrollY);
}

function openModal(role) {
  modalName.textContent = role.name;
  modalImage.src = role.image;
  modalImage.alt = role.name;

  modalAlliance.innerHTML = role.alliance
    ? `<span class="badge">${role.alliance}</span>`
    : `<span class="badge">Geen</span>`;

  modalTypes.innerHTML = createBadges(role.types);
  modalDescription.textContent = role.description;

  modal.classList.remove("hidden");
  lockPageScroll();
}

function closeModal() {
  modal.classList.add("hidden");
  unlockPageScroll();
}

function createRoleCard(role) {
  const card = document.createElement("article");
  card.className = "current-role-card";
  card.tabIndex = 0;

  card.innerHTML = `
    <img src="${role.image}" alt="${role.name}" class="current-role-image">
    <div class="current-role-content">
      <h3 class="current-role-name">${role.name}</h3>
    </div>
  `;

  card.addEventListener("click", () => openModal(role));

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(role);
    }
  });

  return card;
}

function renderRoleSections() {
  currentRolesList.innerHTML = "";

  const groupedRoles = {
    Burger: normalCurrentRoles.filter((role) => role.alliance === "Burger"),
    Moordenaar: normalCurrentRoles.filter((role) => role.alliance === "Moordenaar"),
    Onafhankelijke: normalCurrentRoles.filter((role) => role.alliance === "Onafhankelijke"),
    Weerwolf: normalCurrentRoles.filter((role) => role.alliance === "Weerwolf"),
    Bijrol: normalCurrentRoles.filter((role) => role.alliance === null)
  };

  let hasAnyRoles = false;

  sectionOrder.forEach((sectionData) => {
    const rolesInSection = sortRoles(groupedRoles[sectionData.key]);

    if (!rolesInSection.length) return;

    hasAnyRoles = true;

    const section = document.createElement("section");
    section.className = "current-role-section";

    const title = document.createElement("h2");
    title.className = "current-role-title";
    title.textContent = sectionData.title;

    const grid = document.createElement("div");
    grid.className = "current-roles-grid";

    rolesInSection.forEach((role) => {
      grid.appendChild(createRoleCard(role));
    });

    section.appendChild(title);
    section.appendChild(grid);

    currentRolesList.appendChild(section);
  });

  if (!hasAnyRoles) {
    currentRolesList.innerHTML = `
      <div class="current-empty-message">
        Er zijn nog geen rollen geselecteerd voor dit huidige spel.
      </div>
    `;
  }
}

function renderActiveExpansions() {
  activeExpansionsList.innerHTML = "";

  const activeExpansions = expansions.filter((expansion) =>
    activeExpansionKeys.includes(expansion.key)
  );

  if (!activeExpansions.length) {
    return;
  }

  activeExpansions.forEach((expansion) => {
    const relatedRoles = sortRoles(
      roles.filter((role) => role.expansionKey === expansion.key)
    );

    const card = document.createElement("section");
    card.className = "current-expansion-card";

    const rolesContainer = document.createElement("div");

    if (relatedRoles.length) {
      const rolesTitle = document.createElement("h3");
      rolesTitle.className = "current-expansion-roles-title";
      rolesTitle.textContent = "Rollen in deze uitbreiding";

      const grid = document.createElement("div");
      grid.className = "current-roles-grid";

      relatedRoles.forEach((role) => {
        grid.appendChild(createRoleCard(role));
      });

      rolesContainer.appendChild(rolesTitle);
      rolesContainer.appendChild(grid);
    }

    card.innerHTML = `
      <h2 class="current-expansion-title">${expansion.name}</h2>
      <p class="current-expansion-description">${expansion.description}</p>
    `;

    card.appendChild(rolesContainer);
    activeExpansionsList.appendChild(card);
  });
}

renderActiveExpansions();
renderRoleSections();

modalClose.onclick = closeModal;
modalBackdrop.onclick = closeModal;

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});