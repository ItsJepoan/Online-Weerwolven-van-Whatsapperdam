const rolesList = document.getElementById("roles-list");
const allianceFilter = document.getElementById("alliance-filter");
const typeFilter = document.getElementById("type-filter");

const roleModal = document.getElementById("role-modal");
const roleModalBackdrop = document.querySelector(".role-modal-backdrop");
const roleModalClose = document.getElementById("role-modal-close");

const modalRoleImage = document.getElementById("modal-role-image");
const modalRoleName = document.getElementById("modal-role-name");
const modalRoleAlliance = document.getElementById("modal-role-alliance");
const modalRoleTypes = document.getElementById("modal-role-types");
const modalRoleDescription = document.getElementById("modal-role-description");

const standardRoles = roles.filter((role) => !role.isExpansionRole);

function getUniqueAlliances(roleList) {
  return [...new Set(roleList.map((role) => role.alliance))].sort();
}

function getUniqueTypes(roleList) {
  return [...new Set(roleList.flatMap((role) => role.types))].sort();
}

function populateFilters() {
  const alliances = getUniqueAlliances(standardRoles);
  const types = getUniqueTypes(standardRoles).filter((type) => type !== "Uitbreiding");

  alliances.forEach((alliance) => {
    const option = document.createElement("option");
    option.value = alliance;
    option.textContent = alliance;
    allianceFilter.appendChild(option);
  });

  if (types.length === 0) {
    typeFilter.innerHTML = '<option value="all">Alle types</option>';
    return;
  }

  types.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    typeFilter.appendChild(option);
  });
}

function createBadges(items) {
  if (!items || items.length === 0) {
    return `<span class="badge">Nog geen types</span>`;
  }

  return items.map((item) => `<span class="badge">${item}</span>`).join("");
}

function openRoleModal(role) {
  modalRoleImage.src = role.image;
  modalRoleImage.alt = role.name;

  modalRoleName.textContent = role.name;
  modalRoleAlliance.innerHTML = `<span class="badge">${role.alliance}</span>`;
  modalRoleTypes.innerHTML = createBadges(role.types.filter((type) => type !== "Uitbreiding"));
  modalRoleDescription.textContent = role.description;

  roleModal.classList.remove("hidden");
  roleModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeRoleModal() {
  roleModal.classList.add("hidden");
  roleModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderRoles() {
  const selectedAlliance = allianceFilter.value;
  const selectedType = typeFilter.value;

  const filteredRoles = standardRoles.filter((role) => {
    const allianceMatches =
      selectedAlliance === "all" || role.alliance === selectedAlliance;

    const typeMatches =
      selectedType === "all" || role.types.includes(selectedType);

    return allianceMatches && typeMatches;
  });

  rolesList.innerHTML = "";

  if (filteredRoles.length === 0) {
    rolesList.innerHTML = `
      <div class="empty-message">
        Geen rollen gevonden met deze filters.
      </div>
    `;
    return;
  }

  filteredRoles.forEach((role) => {
    const card = document.createElement("article");
    card.className = "role-card";

    card.innerHTML = `
      <button class="role-card-button" type="button" aria-label="Bekijk uitleg van ${role.name}">
        <img src="${role.image}" alt="${role.name}" class="role-image">

        <div class="role-content">
          <h3 class="role-name">${role.name}</h3>

          <div class="role-meta">
            <div class="meta-block">
              <strong>Alliantie</strong>
              <div class="badges">
                <span class="badge">${role.alliance}</span>
              </div>
            </div>

            <div class="meta-block">
              <strong>Type</strong>
              <div class="badges">
                ${createBadges(role.types.filter((type) => type !== "Uitbreiding"))}
              </div>
            </div>
          </div>

          <span class="role-open-text">Klik voor uitleg</span>
        </div>
      </button>
    `;

    const button = card.querySelector(".role-card-button");
    button.addEventListener("click", () => openRoleModal(role));

    rolesList.appendChild(card);
  });
}

populateFilters();
renderRoles();

allianceFilter.addEventListener("change", renderRoles);
typeFilter.addEventListener("change", renderRoles);

roleModalClose.addEventListener("click", closeRoleModal);
roleModalBackdrop.addEventListener("click", closeRoleModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !roleModal.classList.contains("hidden")) {
    closeRoleModal();
  }
});