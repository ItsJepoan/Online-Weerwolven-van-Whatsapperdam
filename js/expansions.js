const expansionsList = document.getElementById("expansions-list");

function createBadges(items) {
  return items.map((item) => `<span class="badge">${item}</span>`).join("");
}

function getRolesForExpansion(expansionKey) {
  return roles.filter(
    (role) => role.isExpansionRole && role.expansionKey === expansionKey
  );
}

function renderExpansionRole(role) {
  return `
    <details class="role-card">
      <summary class="role-summary">
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
              <strong>Types</strong>
              <div class="badges">
                ${createBadges(role.types.filter((type) => type !== "Uitbreiding"))}
              </div>
            </div>
          </div>
        </div>
      </summary>

      <div class="role-description">
        <p>${role.description}</p>
      </div>
    </details>
  `;
}

function renderExpansions() {
  expansionsList.innerHTML = "";

  expansions.forEach((expansion) => {
    const expansionRoles = getRolesForExpansion(expansion.key);

    const section = document.createElement("section");
    section.className = "expansion-card";

    section.innerHTML = `
      <h2>${expansion.name}</h2>
      <p>${expansion.description}</p>

      <div class="expansion-roles">
        <h3>Rollen in deze uitbreiding</h3>
        ${
          expansionRoles.length > 0
            ? `<div class="roles-grid">
                ${expansionRoles.map(renderExpansionRole).join("")}
              </div>`
            : `<div class="empty-message">Nog geen rollen toegevoegd aan deze uitbreiding.</div>`
        }
      </div>
    `;

    expansionsList.appendChild(section);
  });
}

renderExpansions();