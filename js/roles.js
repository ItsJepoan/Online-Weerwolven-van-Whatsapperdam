const rolesList = document.getElementById("roles-list");
const allianceFilter = document.getElementById("alliance-filter");
const typeFilter = document.getElementById("type-filter");
const roleSearch = document.getElementById("role-search");

const modal = document.getElementById("role-modal");
const modalClose = document.getElementById("role-modal-close");
const modalBackdrop = document.querySelector(".role-modal-backdrop");

const modalName = document.getElementById("modal-role-name");
const modalImage = document.getElementById("modal-role-image");
const modalAlliance = document.getElementById("modal-role-alliance");
const modalTypes = document.getElementById("modal-role-types");
const modalDescription = document.getElementById("modal-role-description");

const allianceOrder = ["Burger", "Onafhankelijke", "Weerwolf"];

const typeOrder = [
    "Basis",
    "Toevoegend",
    "Uitbreiding",
    "Bijrol",
    "Nieuw",
    "Dubbel",
    "Onzeker",
    "Invloedrijk",
    "Liefde",
    "Beschermer",
    "Informatie",
    "Dodelijk",
    "Ongrijpbaar",
    "Betrouwbaar",
    "Transformatie",
    "Kans",
    "Chaos",
    "Spoed",
    "Aankondiging",
    "Hiernamaals",
    "Kopiëren",
    "Alleskunner",
    "Gehard",
    "Upgrade",
    "Misinformatie",
    "Blokkade",
    "Aanhanger",
    "Effect",
    "Dronken",
    "Titaan"
];

const standardRoles = roles.filter(
  (role) => !role.types.includes("Uitbreiding")
);

function getUniqueAlliances(roleList) {
  return [...new Set(roleList.map((role) => role.alliance).filter(Boolean))].sort((a, b) => {
    return allianceOrder.indexOf(a) - allianceOrder.indexOf(b);
  });
}

function getUniqueTypes(roleList) {
  return [...new Set(roleList.flatMap((role) => role.types))].sort((a, b) => {
    const indexA = typeOrder.indexOf(a);
    const indexB = typeOrder.indexOf(b);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    return a.localeCompare(b, "nl");
  });
}

function sortTypes(items) {
  return [...items].sort((a, b) => {
    const indexA = typeOrder.indexOf(a);
    const indexB = typeOrder.indexOf(b);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    return a.localeCompare(b, "nl");
  });
}

function populateFilters() {
  const alliances = getUniqueAlliances(standardRoles);
  const types = getUniqueTypes(standardRoles);

  alliances.forEach((alliance) => {
    const option = document.createElement("option");
    option.value = alliance;
    option.textContent = alliance;
    allianceFilter.appendChild(option);
  });

  types.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    typeFilter.appendChild(option);
  });
}

function createBadges(items) {
  if (!items.length) {
    return `<span class="badge">Geen</span>`;
  }

  return sortTypes(items)
    .map((item) => `<span class="badge">${item}</span>`)
    .join("");
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
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function sortRoles(roleList) {
  return [...roleList].sort((a, b) => {
    const aAllianceIndex = allianceOrder.indexOf(a.alliance);
    const bAllianceIndex = allianceOrder.indexOf(b.alliance);

    const safeAAllianceIndex = aAllianceIndex === -1 ? 999 : aAllianceIndex;
    const safeBAllianceIndex = bAllianceIndex === -1 ? 999 : bAllianceIndex;

    const allianceCompare = safeAAllianceIndex - safeBAllianceIndex;

    if (allianceCompare !== 0) {
      return allianceCompare;
    }

    const aIsBasis = a.types.includes("Basis");
    const bIsBasis = b.types.includes("Basis");

    if (aIsBasis !== bIsBasis) {
      return aIsBasis ? -1 : 1;
    }

    return a.name.localeCompare(b.name, "nl");
  });
}

function getAllianceTitle(alliance) {
  if (alliance === "Burger") return "Burgers";
  if (alliance === "Onafhankelijke") return "Onafhankelijken";
  if (alliance === "Weerwolf") return "Weerwolven";
  return alliance;
}

function createRoleCard(role) {
  const card = document.createElement("div");
  card.className = "role-card";

  card.innerHTML = `
    <button class="role-card-button" type="button">
      <img src="${role.image}" class="role-image" alt="${role.name}">
      <div class="role-content">
        <h3 class="role-name">${role.name}</h3>

        <div class="role-meta">
          <div class="meta-block">
            <strong>Alliantie</strong>
            <div class="badges">
              ${
                role.alliance
                  ? `<span class="badge">${role.alliance}</span>`
                  : `<span class="badge">Geen</span>`
              }
            </div>
          </div>

          <div class="meta-block">
            <strong>Type</strong>
            <div class="badges">
              ${createBadges(role.types)}
            </div>
          </div>
        </div>

        <span class="role-open-text">Klik voor uitleg</span>
      </div>
    </button>
  `;

  card.querySelector("button").onclick = () => openModal(role);

  return card;
}

function renderRoles() {
  const selectedAlliance = allianceFilter.value;
  const selectedType = typeFilter.value;
  const searchQuery = roleSearch.value.trim().toLowerCase();

  const filteredRoles = standardRoles.filter((role) => {
    const allianceMatches =
      selectedAlliance === "all" || role.alliance === selectedAlliance;

    const typeMatches =
      selectedType === "all" || role.types.includes(selectedType);

    const searchMatches =
      searchQuery === "" || role.name.toLowerCase().includes(searchQuery);

    return allianceMatches && typeMatches && searchMatches;
  });

  rolesList.innerHTML = "";

  if (filteredRoles.length === 0) {
    rolesList.innerHTML = `
      <div class="empty-message">
        Geen rollen gevonden met deze filters of zoekopdracht.
      </div>
    `;
    return;
  }

  const sorted = sortRoles(filteredRoles);

  allianceOrder.forEach((alliance) => {
    const rolesPerAlliance = sorted.filter(
      (role) => role.alliance === alliance
    );

    if (!rolesPerAlliance.length) return;

    const section = document.createElement("section");
    section.className = "role-alliance-section";

    const title = document.createElement("h2");
    title.textContent = getAllianceTitle(alliance);
    title.className = "role-alliance-title";

    const grid = document.createElement("div");
    grid.className = "roles-grid";

    rolesPerAlliance.forEach((role) => {
      grid.appendChild(createRoleCard(role));
    });

    section.appendChild(title);
    section.appendChild(grid);

    rolesList.appendChild(section);
  });

  const specialRoles = sorted.filter((role) => role.alliance === null);

  if (specialRoles.length) {
    const section = document.createElement("section");
    section.className = "role-alliance-section";

    const title = document.createElement("h2");
    title.textContent = "Bijrollen";
    title.className = "role-alliance-title";

    const grid = document.createElement("div");
    grid.className = "roles-grid";

    specialRoles.forEach((role) => {
      grid.appendChild(createRoleCard(role));
    });

    section.appendChild(title);
    section.appendChild(grid);

    rolesList.appendChild(section);
  }
}

populateFilters();
renderRoles();

allianceFilter.addEventListener("change", renderRoles);
typeFilter.addEventListener("change", renderRoles);
roleSearch.addEventListener("input", renderRoles);

modalClose.onclick = closeModal;
modalBackdrop.onclick = closeModal;

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});