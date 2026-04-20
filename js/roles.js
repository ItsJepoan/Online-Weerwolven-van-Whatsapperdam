const rolesList = document.getElementById("roles-list");
const allianceFilter = document.getElementById("alliance-filter");
const typeFilter = document.getElementById("type-filter");

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
    const option = document.createElement("option");
    option.value = "empty";
    option.textContent = "Nog geen types toegevoegd";
    typeFilter.appendChild(option);
    return;
  }

  types.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    typeFilter.appendChild(option);
  });
}

function createBadges(items, emptyText) {
  if (!items || items.length === 0) {
    return `<span class="badge">${emptyText}</span>`;
  }
  return items.map((item) => `<span class="badge">${item}</span>`).join("");
}

function renderRoles() {
  const selectedAlliance = allianceFilter.value;
  const selectedType = typeFilter.value;

  const filteredRoles = standardRoles.filter((role) => {
    const allianceMatches = selectedAlliance === "all" || role.alliance === selectedAlliance;
    const typeMatches =
      selectedType === "all" ||
      selectedType === "empty" ||
      role.types.includes(selectedType);
    return allianceMatches && typeMatches;
  });

  rolesList.innerHTML = "";

  if (filteredRoles.length === 0) {
    rolesList.innerHTML = `<div class="empty-message">Geen rollen gevonden met deze filters.</div>`;
    return;
  }

  filteredRoles.forEach((role) => {
    const card = document.createElement("article");
    card.className = "role-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Bekijk uitleg over ${role.name}`);

    card.innerHTML = `
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
              ${createBadges(role.types, "Geen type")}
            </div>
          </div>
        </div>
        <span class="role-open-text">Klik voor uitleg</span>
      </div>
    `;

    function openRole() {
      window.location.href = `role.html?id=${role.id}`;
    }

    card.addEventListener("click", openRole);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openRole();
      }
    });

    rolesList.appendChild(card);
  });
}

populateFilters();
renderRoles();

allianceFilter.addEventListener("change", renderRoles);
typeFilter.addEventListener("change", renderRoles);