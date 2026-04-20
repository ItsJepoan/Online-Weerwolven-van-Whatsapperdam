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
  const alliances = [...new Set(roles.map(r => r.alliance))];

  alliances.forEach(a => {
    const opt = document.createElement("option");
    opt.value = a;
    opt.textContent = a;
    allianceFilter.appendChild(opt);
  });
}

function createBadges(items) {
  if (!items.length) return `<span class="badge">Geen</span>`;
  return items.map(t => `<span class="badge">${t}</span>`).join("");
}

function openModal(role) {
  modalName.textContent = role.name;
  modalImage.src = role.image;
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

modalClose.onclick = closeModal;
modalBackdrop.onclick = closeModal;
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

function renderRoles() {
  const selectedAlliance = allianceFilter.value;
  const selectedType = typeFilter.value;

  rolesList.innerHTML = "";

  allianceOrder.forEach(alliance => {
    let group = roles.filter(r => r.alliance === alliance);

    if (selectedAlliance !== "all") {
      group = group.filter(r => r.alliance === selectedAlliance);
    }

    if (selectedType !== "all") {
      group = group.filter(r => r.types.includes(selectedType));
    }

    if (!group.length) return;

    group.sort((a,b) => a.name.localeCompare(b.name, "nl"));

    const section = document.createElement("div");
    section.className = "role-alliance-section";

    const title = document.createElement("h2");
    title.className = "role-alliance-title";
    const names = {
      "Burger": "Burgers",
      "Onafhankelijke": "Onafhankelijken",
      "Weerwolf": "Weerwolven"
    };

    title.textContent = names[alliance] || alliance;

    const grid = document.createElement("div");
    grid.className = "roles-grid";

    group.forEach(role => {
      const card = document.createElement("div");
      card.className = "role-card";

      card.innerHTML = `
        <button class="role-card-button">
          <img src="${role.image}" class="role-image">
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
}

populateFilters();
renderRoles();

allianceFilter.onchange = renderRoles;
typeFilter.onchange = renderRoles;