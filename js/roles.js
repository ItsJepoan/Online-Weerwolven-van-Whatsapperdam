const rolesList = document.getElementById("roles-list");
const allianceFilter = document.getElementById("alliance-filter");
const typeFilter = document.getElementById("type-filter");

const modal = document.getElementById("role-modal");
const modalClose = document.getElementById("role-modal-close");
const modalBackdrop = document.querySelector(".role-modal-backdrop");

const modalName = document.getElementById("modal-role-name");
const modalImage = document.getElementById("modal-role-image");
const modalAlliance = document.getElementById("modal-role-alliance");
const modalTypes = document.getElementById("modal-role-types");
const modalDescription = document.getElementById("modal-role-description");

const allianceOrder = ["Burger", "Onafhankelijke", "Weerwolf"];

function populateFilters() {
  const alliances = [...new Set(roles.map((role) => role.alliance))];
  const allTypes = [...new Set(roles.flatMap((role) => role.types))];

  alliances
    .sort((a, b) => allianceOrder.indexOf(a) - allianceOrder.indexOf(b))
    .forEach((alliance) => {
      const opt = document.createElement("option");
      opt.value = alliance;
      opt.textContent = alliance;
      allianceFilter.appendChild(opt);
    });

  allTypes
    .filter((type) => type !== "Uitbreiding")
    .sort((a, b) => {
      const typeOrder = ["Basis", "Toevoegend"];
      const indexA = typeOrder.indexOf(a);
      const indexB = typeOrder.indexOf(b);

      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }

      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;

      return a.localeCompare(b, "nl");
    })
    .forEach((type) => {
      const opt = document.createElement("option");
      opt.value = type;
      opt.textContent = type;
      typeFilter.appendChild(opt);
    });
}

function createBadges(items) {
  if (!items.length) {
    return `<span class="badge">Geen</span>`;
  }

  return items.map((type) => `<span class="badge">${type}</span>`).join("");
}

function openModal(role) {
  modalName.textContent = role.name;
  modalImage.src = role.image;
  modalImage.alt = role.name;
  modalAlliance.innerHTML = `<span class="badge">${role.alliance}</span>`;
  modalTypes.innerHTML = createBadges(role.types);
  modalDescription.textContent = role.description;

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function getAllianceTitle(alliance) {
  const names = {
    Burger: "Burgers",
    Onafhankelijke: "Onafhankelijken",
    Weerwolf: "Weerwolven"
  };

  return names[alliance] || alliance;
}

function getRolePriority(role) {
  if (role.types.includes("Basis")) return 0;
  if (role.types.includes("Toevoegend")) return 1;
  return 2;
}

function sortRoles(group) {
  return [...group].sort((a, b) => {
    const priorityA = getRolePriority(a);
    const priorityB = getRolePriority(b);

    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }

    return a.name.localeCompare(b.name, "nl");
  });
}

function renderRoles() {
  const selectedAlliance = allianceFilter.value;
  const selectedType = typeFilter.value;

  rolesList.innerHTML = "";

  allianceOrder.forEach((alliance) => {
    let group = roles.filter((role) => role.alliance === alliance);

    if (selectedAlliance !== "all") {
      group = group.filter((role) => role.alliance === selectedAlliance);
    }

    if (selectedType !== "all") {
      group = group.filter((role) => role.types.includes(selectedType));
    }

    if (!group.length) return;

    group = sortRoles(group);

    const section = document.createElement("div");
    section.className = "role-alliance-section";

    const title = document.createElement("h2");
    title.className = "role-alliance-title";
    title.textContent = getAllianceTitle(alliance);

    const grid = document.createElement("div");
    grid.className = "roles-grid";

    group.forEach((role) => {
      const card = document.createElement("div");
      card.className = "role-card";

      card.innerHTML = `
        <button class="role-card-button" type="button" aria-label="Bekijk uitleg van ${role.name}">
          <img src="${role.image}" class="role-image" alt="${role.name}">
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
                  ${createBadges(role.types)}
                </div>
              </div>
            </div>

            <span class="role-open-text">Klik voor uitleg</span>
          </div>
        </button>
      `;

      card.querySelector("button").onclick = () => openModal(role);
      grid.appendChild(card);
    });

    section.appendChild(title);
    section.appendChild(grid);
    rolesList.appendChild(section);
  });

  if (!rolesList.children.length) {
    rolesList.innerHTML = `
      <div class="empty-message">
        Geen rollen gevonden met deze filters.
      </div>
    `;
  }
}

populateFilters();
renderRoles();

allianceFilter.onchange = renderRoles;
typeFilter.onchange = renderRoles;
modalClose.onclick = closeModal;
modalBackdrop.onclick = closeModal;

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});