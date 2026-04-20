const roleDetail = document.getElementById("role-detail");

const params = new URLSearchParams(window.location.search);
const roleId = params.get("id");

const role = roles.find((r) => r.id === roleId);

if (!role) {
  roleDetail.innerHTML = `
    <div class="empty-message">
      Rol niet gevonden. <a href="roles.html">Terug naar rollen</a>.
    </div>
  `;
} else {
  document.title = `${role.name} - Online Weerwolven van Whatsapperdam`;

  function createBadges(items, emptyText) {
    if (!items || items.length === 0) {
      return `<span class="badge">${emptyText}</span>`;
    }
    return items.map((item) => `<span class="badge">${item}</span>`).join("");
  }

  roleDetail.innerHTML = `
    <div class="role-detail-card">
      <div class="role-detail-top">
        <img src="${role.image}" alt="${role.name}" class="role-detail-image">
        <div class="role-detail-info">
          <h2 class="role-detail-name">${role.name}</h2>
          <div class="role-detail-meta">
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
        </div>
      </div>
      <div class="role-detail-description">
        <h3>Uitleg</h3>
        <p>${role.description}</p>
      </div>
    </div>
  `;
}