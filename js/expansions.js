const expansionsList = document.getElementById("expansions-list");

const modal = document.getElementById("role-modal");
const modalClose = document.getElementById("role-modal-close");
const modalBackdrop = document.querySelector(".role-modal-backdrop");

const modalName = document.getElementById("modal-role-name");
const modalImage = document.getElementById("modal-role-image");
const modalAlliance = document.getElementById("modal-role-alliance");
const modalTypes = document.getElementById("modal-role-types");
const modalDescription = document.getElementById("modal-role-description");

const allianceOrder = ["Burger", "Onafhankelijke", "Weerwolf"];

/* ======================
   SCROLL LOCK FIX
====================== */
let lockedScrollY = 0;

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

/* ======================
   HELPERS
====================== */
function createBadges(items) {
  if (!items.length) {
    return `<span class="badge">Geen</span>`;
  }

  return items.map((item) => `<span class="badge">${item}</span>`).join("");
}

/* ======================
   MODAL
====================== */
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
  lockPageScroll();

  // 🔥 reset scroll
  const scrollContainer = modal.querySelector(".role-modal-text");
  if (scrollContainer) scrollContainer.scrollTop = 0;
}

function closeModal() {
  modal.classList.add("hidden");
  unlockPageScroll();
}

/* ======================
   SORT
====================== */
function sortExpansionRoles(roleList) {
  return [...roleList].sort((a, b) => {
    const allianceCompare =
      allianceOrder.indexOf(a.alliance) - allianceOrder.indexOf(b.alliance);

    if (allianceCompare !== 0) {
      return allianceCompare;
    }

    return a.name.localeCompare(b.name, "nl");
  });
}

/* ======================
   CARD
====================== */
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

/* ======================
   RENDER
====================== */
function renderExpansions() {
  expansionsList.innerHTML = "";

  expansions.forEach((expansion) => {
    const section = document.createElement("section");
    section.className = "expansion-card";

    const expansionRoles = sortExpansionRoles(
      roles.filter(
        (role) =>
          role.isExpansionRole &&
          role.expansionKey === expansion.key
      )
    );

    const title = document.createElement("h2");
    title.className = "expansion-title";
    title.textContent = expansion.name;

    const descriptionBlock = document.createElement("div");
    descriptionBlock.className = "expansion-description-block";

    const description = document.createElement("div");
    description.className = "expansion-description";
    description.textContent = expansion.description;

    descriptionBlock.appendChild(description);

    section.appendChild(title);
    section.appendChild(descriptionBlock);

    const rolesTitle = document.createElement("h3");
    rolesTitle.className = "expansion-roles-title";
    rolesTitle.textContent = "Rollen in deze uitbreiding";

    section.appendChild(rolesTitle);

    if (!expansionRoles.length) {
      const empty = document.createElement("div");
      empty.className = "empty-message";
      empty.textContent = "Nog geen rollen toegevoegd.";
      section.appendChild(empty);
    } else {
      const grid = document.createElement("div");
      grid.className = "roles-grid";

      expansionRoles.forEach((role) => {
        grid.appendChild(createRoleCard(role));
      });

      section.appendChild(grid);
    }

    expansionsList.appendChild(section);
  });
}

renderExpansions();

/* ======================
   EVENTS
====================== */
modalClose.onclick = closeModal;
modalBackdrop.onclick = closeModal;

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});