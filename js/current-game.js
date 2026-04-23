const currentRolesList = document.getElementById("current-roles-list");
const activeExpansionsList = document.getElementById("active-expansions-list");

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

function createRoleCard(role) {
  const card = document.createElement("article");
  card.className = "current-role-card";

  card.innerHTML = `
    <img src="${role.image}" alt="${role.name}" class="current-role-image">
    <div class="current-role-content">
      <h3 class="current-role-name">${role.name}</h3>
    </div>
  `;

  return card;
}

function renderRoleSections() {
  currentRolesList.innerHTML = "";

  const groupedRoles = {
    Burger: normalCurrentRoles.filter((role) => role.alliance === "Burger"),
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

    const rolesHtml = relatedRoles.length
      ? `
        <h3 class="current-expansion-roles-title">Rollen in deze uitbreiding</h3>
        <div class="current-roles-grid">
          ${relatedRoles.map((role) => `
            <article class="current-role-card">
              <img src="${role.image}" alt="${role.name}" class="current-role-image">
              <div class="current-role-content">
                <h4 class="current-role-name">${role.name}</h4>
              </div>
            </article>
          `).join("")}
        </div>
      `
      : "";

    card.innerHTML = `
      <h2 class="current-expansion-title">${expansion.name}</h2>
      <p class="current-expansion-description">${expansion.description}</p>
      ${rolesHtml}
    `;

    activeExpansionsList.appendChild(card);
  });
}

renderActiveExpansions();
renderRoleSections();