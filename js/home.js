const newRolesList = document.getElementById("new-roles-list");

const modal = document.getElementById("role-modal");
const modalClose = document.getElementById("role-modal-close");
const modalBackdrop = document.querySelector(".role-modal-backdrop");

const modalName = document.getElementById("modal-role-name");
const modalImage = document.getElementById("modal-role-image");
const modalAlliance = document.getElementById("modal-role-alliance");
const modalTypes = document.getElementById("modal-role-types");
const modalDescription = document.getElementById("modal-role-description");

/* ======================
   SCROLL LOCK FIX (iPhone)
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
   UI HELPERS
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

  // 🔥 reset scroll binnen modal
  const scrollContainer = modal.querySelector(".role-modal-text");
  if (scrollContainer) scrollContainer.scrollTop = 0;
}

function closeModal() {
  modal.classList.add("hidden");
  unlockPageScroll();
}

/* ======================
   CARDS
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
function renderNewRoles() {
  const newRoles = roles.filter((role) =>
    role.types.includes("Nieuw")
  );

  newRolesList.innerHTML = "";

  if (newRoles.length === 0) {
    newRolesList.innerHTML = `
      <p class="empty-message">Geen nieuwe rollen.</p>
    `;
    return;
  }

  newRoles.forEach((role) => {
    newRolesList.appendChild(createRoleCard(role));
  });
}

renderNewRoles();

/* ======================
   EVENTS
====================== */
modalClose.onclick = closeModal;
modalBackdrop.onclick = closeModal;

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});