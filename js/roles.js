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
    option.value = "all";
    option.textContent = "Alle types";
    typeFilter.innerHTML = "";
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

function createBadges(items) {
  if (!items || items.length === 0) {
    return `<span class="badge">Nog geen types</span>`;
  }

  return items.map((item) => `<span class="badge">${item}</span>`).join("");
}

function closeOtherCards(cardToKeepOpen) {
  const cards = document.querySelectorAll(".role-card");

  cards.forEach((card) => {
    if (card !== cardToKeepOpen) {
      card.classList.remove("is-open");
    }
  });
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
      <div class="role-card-header" tabindex="0" role="button" aria-expanded="false">
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
      </div>

      <div class="role-description">
        <p>${role.description}</p>
      </div>
    `;

    const header = card.querySelector(".role-card-header");

    function toggleCard() {
      const isOpen = card.classList.contains("is-open");

      closeOtherCards(card);

      if (isOpen) {
        card.classList.remove("is-open");
        header.setAttribute("aria-expanded", "false");
      } else {
        card.classList.add("is-open");
        header.setAttribute("aria-expanded", "true");
      }

      const allHeaders = document.querySelectorAll(".role-card-header");
      allHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.setAttribute("aria-expanded", "false");
        }
      });
    }

    header.addEventListener("click", toggleCard);

    header.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleCard();
      }
    });

    rolesList.appendChild(card);
  });
}

populateFilters();
renderRoles();

allianceFilter.addEventListener("change", renderRoles);
typeFilter.addEventListener("change", renderRoles);