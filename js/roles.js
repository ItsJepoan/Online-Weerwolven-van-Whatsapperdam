const rolesList = document.getElementById("roles-list");
const allianceFilter = document.getElementById("alliance-filter");
const typeFilter = document.getElementById("type-filter");
const roleSearch = document.getElementById("role-search");

const modal = document.getElementById("role-modal");
const modalClose = document.getElementById("role-modal-close");
const modalBackdrop = document.querySelector(".role-modal-backdrop");
const modalPrevious = document.getElementById("role-modal-previous");
const modalNext = document.getElementById("role-modal-next");

const modalName = document.getElementById("modal-role-name");
const modalImage = document.getElementById("modal-role-image");
const modalAlliance = document.getElementById("modal-role-alliance");
const modalOrigin = document.getElementById("modal-role-origin");
const modalTypes = document.getElementById("modal-role-types");
const modalDescription = document.getElementById("modal-role-description");

const allianceOrder = [
  "Burger",
  "Moordenaar",
  "Onafhankelijke",
  "Weerwolf",
  "Titaan",
  "Onduidelijk"
];

const typeOrder = [
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

const standardRoles = roles;

let lockedScrollY = 0;
let visibleRoleSequence = [];
let activeRoleIndex = -1;

function getUniqueAlliances(roleList) {
  return [...new Set(roleList.map((role) => role.alliance).filter(Boolean))].sort((a, b) => {
    const indexA = allianceOrder.indexOf(a);
    const indexB = allianceOrder.indexOf(b);

    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    return a.localeCompare(b, "nl");
  });
}

function getUniqueTypes(roleList) {
  return [...new Set(roleList.flatMap((role) => role.types))].sort((a, b) => {
    const indexA = typeOrder.indexOf(a);
    const indexB = typeOrder.indexOf(b);

    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    return a.localeCompare(b, "nl");
  });
}

function sortTypes(items) {
  return [...items].sort((a, b) => {
    const indexA = typeOrder.indexOf(a);
    const indexB = typeOrder.indexOf(b);

    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
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

function formatRoleDescription(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replace(/\*\*\*([\s\S]+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*([\s\S]+?)\*\*/g, "<strong>$1</strong>");
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
  const isOpening = modal.classList.contains("hidden");
  activeRoleIndex = visibleRoleSequence.findIndex(
    (visibleRole) => visibleRole.id === role.id
  );

  modalName.textContent = role.name;
  modalImage.onerror = () => {
    modalImage.onerror = null;
    modalImage.src = "images/placeholder.png";
  };
  modalImage.src = role.image || "images/placeholder.png";
  modalImage.alt = role.name;

  modalAlliance.innerHTML = role.alliance
    ? `<span class="badge">${role.alliance}</span>`
    : `<span class="badge">Geen</span>`;

  modalOrigin.innerHTML = `<span class="badge">${role.origin || "Onbekend"}</span>`;

  modalTypes.innerHTML = createBadges(role.types);
  modalDescription.innerHTML = formatRoleDescription(role.description);

  modalPrevious.hidden = activeRoleIndex <= 0;
  modalNext.hidden =
    activeRoleIndex === -1 || activeRoleIndex >= visibleRoleSequence.length - 1;

  modal.classList.remove("hidden");
  if (isOpening) {
    lockPageScroll();
  }

  const scrollContainer = modal.querySelector(".role-modal-text");
  if (scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}

function closeModal() {
  modal.classList.add("hidden");
  activeRoleIndex = -1;
  unlockPageScroll();
}

function showAdjacentRole(direction) {
  const nextIndex = activeRoleIndex + direction;

  if (nextIndex < 0 || nextIndex >= visibleRoleSequence.length) {
    return;
  }

  openModal(visibleRoleSequence[nextIndex]);
}

function sortRoles(roleList) {
  return [...roleList].sort((a, b) =>
    a.name.localeCompare(b.name, "nl", { sensitivity: "base" })
  );
}

function getRoleSection(role) {
  if (role.types.includes("Bijrol")) return "Bijrollen";
  if (role.types.includes("Uitbreiding")) return "Uitbreidingen";
  if (role.alliance === "Weerwolf") return "Weerwolven";
  if (role.alliance === "Moordenaar") return "Moordenaars";
  if (role.alliance === "Onafhankelijke") return "Onafhankelijken";
  return "Burgers";
}

const roleSectionOrder = [
  "Burgers",
  "Onafhankelijken",
  "Moordenaars",
  "Weerwolven",
  "Uitbreidingen",
  "Bijrollen"
];

function createRoleCard(role) {
  const card = document.createElement("div");
  card.className = "role-card";

  card.innerHTML = `
    <button class="role-card-button" type="button">
      <img src="${role.image || "images/placeholder.png"}" class="role-image" alt="${role.name}" onerror="this.onerror=null;this.src='images/placeholder.png';">
      <div class="role-content">
        <h3 class="role-name">${role.name}</h3>

        <div class="role-meta">
          <div class="role-primary-meta">
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
              <strong>Afkomst</strong>
              <div class="badges">
                <span class="badge">${role.origin || "Onbekend"}</span>
              </div>
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
    visibleRoleSequence = [];
    rolesList.innerHTML = `
      <div class="empty-message">
        Geen rollen gevonden met deze filters of zoekopdracht.
      </div>
    `;
    return;
  }

  const rolesPerSection = roleSectionOrder.map((sectionName) => ({
    sectionName,
    roles: sortRoles(
      filteredRoles.filter((role) => getRoleSection(role) === sectionName)
    )
  }));

  visibleRoleSequence = rolesPerSection.flatMap((section) => section.roles);

  rolesPerSection.forEach(({ sectionName, roles: sectionRoles }) => {
    if (!sectionRoles.length) return;

    const section = document.createElement("section");
    section.className = "role-alliance-section";

    const title = document.createElement("h2");
    title.textContent = sectionName;
    title.className = "role-alliance-title";

    const grid = document.createElement("div");
    grid.className = "roles-grid";

    sectionRoles.forEach((role) => {
      grid.appendChild(createRoleCard(role));
    });

    section.appendChild(title);
    section.appendChild(grid);

    rolesList.appendChild(section);
  });
}

populateFilters();
renderRoles();

allianceFilter.addEventListener("change", renderRoles);
typeFilter.addEventListener("change", renderRoles);
roleSearch.addEventListener("input", renderRoles);

modalClose.onclick = closeModal;
modalBackdrop.onclick = closeModal;
modalPrevious.onclick = () => showAdjacentRole(-1);
modalNext.onclick = () => showAdjacentRole(1);

document.addEventListener("keydown", (event) => {
  if (modal.classList.contains("hidden")) return;

  if (event.key === "Escape") {
    closeModal();
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showAdjacentRole(-1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    showAdjacentRole(1);
  }
});
