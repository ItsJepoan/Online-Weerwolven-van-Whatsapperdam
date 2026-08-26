const newRolesList = document.getElementById("new-roles-list");
const newExpansionsList = document.getElementById("new-expansions-list");
const currentPlayerList = document.getElementById("current-player-list");
const currentAnnouncementsList = document.getElementById("current-announcements-list");
const circleSessionLink = document.getElementById("circle-session-link");
const currentGameNumberElement = document.getElementById("current-game-number");
const currentGameMasterElement = document.getElementById("current-game-master");

const modal = document.getElementById("role-modal");
const modalClose = document.getElementById("role-modal-close");
const modalBackdrop = document.querySelector(".role-modal-backdrop");

const modalName = document.getElementById("modal-role-name");
const modalImage = document.getElementById("modal-role-image");
const modalAlliance = document.getElementById("modal-role-alliance");
const modalOrigin = document.getElementById("modal-role-origin");
const modalTypes = document.getElementById("modal-role-types");
const modalDescription = document.getElementById("modal-role-description");

/* ======================
   SCROLL LOCK FIX (iPhone)
====================== */
let lockedScrollY = 0;

function formatRoleDescription(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replace(/\*\*\*([\s\S]+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*([\s\S]+?)\*\*/g, "<strong>$1</strong>");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatAnnouncementText(value) {
  return escapeHtml(value).replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

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
  modalImage.onerror = () => {
    modalImage.onerror = null;
    modalImage.src = "images/placeholder.png";
  };
  modalImage.src = role.image || "images/placeholder.png";
  modalImage.alt = role.name;

  modalAlliance.innerHTML = role.alliance
    ? `<span class="badge">${role.alliance}</span>`
    : `<span class="badge">Geen</span>`;

  modalOrigin.innerHTML = `<span class="badge">${role.origin || "Onbekend"}</span>`;

  modalTypes.innerHTML = createBadges(role.types);
  modalDescription.innerHTML = formatRoleDescription(role.description);

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
      <img src="${role.image || "images/placeholder.png"}" class="role-image" alt="${role.name}" onerror="this.onerror=null;this.src='images/placeholder.png';">
      <div class="role-content">
        <h3 class="role-name">${role.name}</h3>

        <div class="role-meta">
          <div class="role-primary-meta">
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
              <strong>Afkomst</strong>
              <div class="badges">
                <span class="badge">${role.origin || "Onbekend"}</span>
              </div>
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

function createExpansionCard(expansion) {
  const card = document.createElement("article");
  card.className = "home-expansion-card";
  const href =
    (expansion.category || "uitbreiding") === "speloptie"
      ? "spelopties.html"
      : "uitbreidingen.html";

  card.innerHTML = `
    <h3>${expansion.name}</h3>
    <p>${expansion.shortDescription || "Nieuwe module voor Whatsapperdam."}</p>
    <a href="${href}" class="home-expansion-link">Bekijk module</a>
  `;

  return card;
}

function isWakkerdamActive() {
  return (
    typeof activeExpansionKeys !== "undefined" &&
    activeExpansionKeys.includes("back-to-basics-wakkerdam-editie")
  );
}

function isPlayerAlive(player) {
  if (typeof player.alive === "boolean") return player.alive;
  return String(player.status || "levend").toLowerCase() !== "dood";
}

function renderCurrentPlayers() {
  if (!currentPlayerList) return;

  const players =
    typeof currentGamePlayers !== "undefined" ? currentGamePlayers : [];

  currentPlayerList.innerHTML = "";

  if (!players.length) {
    currentPlayerList.innerHTML = `<p class="home-empty-message">Nog geen spelers ingevuld.</p>`;
    return;
  }

  [...players]
    .sort((a, b) => {
      const aliveCompare = Number(isPlayerAlive(b)) - Number(isPlayerAlive(a));
      if (aliveCompare !== 0) return aliveCompare;
      return a.name.localeCompare(b.name, "nl", { sensitivity: "base" });
    })
    .forEach((player) => {
      const alive = isPlayerAlive(player);
      const row = document.createElement("div");
      row.className = `home-player-row ${alive ? "alive" : "dead"}`;
      row.innerHTML = `
        <span class="home-player-name">${escapeHtml(player.name)}</span>
        <span class="home-player-status">${alive ? "Levend" : "Dood"}</span>
      `;
      currentPlayerList.appendChild(row);
    });
}

function renderCurrentAnnouncements() {
  if (!currentAnnouncementsList) return;

  const announcements =
    typeof currentGameAnnouncements !== "undefined" ? currentGameAnnouncements : [];

  currentAnnouncementsList.innerHTML = "";

  if (!announcements.length) {
    currentAnnouncementsList.innerHTML = `<p class="home-empty-message">Nog geen aankondigingen.</p>`;
    return;
  }

  [...announcements]
    .sort((a, b) => String(b.datetime || "").localeCompare(String(a.datetime || "")))
    .forEach((announcement) => {
      const row = document.createElement("article");
      row.className = "home-announcement-row";
      row.innerHTML = `
        <time class="home-announcement-time">${escapeHtml(announcement.label || announcement.datetime || "")}</time>
        <div class="home-announcement-message">${formatAnnouncementText(announcement.message || "")}</div>
      `;
      currentAnnouncementsList.appendChild(row);
    });
}

function renderCircleSessionLink() {
  if (!circleSessionLink) return;
  circleSessionLink.classList.toggle("hidden", !isWakkerdamActive());
}

function renderCurrentGameNumber() {
  if (!currentGameNumberElement) return;

  if (typeof currentGameNumber === "undefined" || currentGameNumber === null) {
    currentGameNumberElement.textContent = "";
    currentGameNumberElement.classList.add("hidden");
    return;
  }

  currentGameNumberElement.textContent = `#${currentGameNumber}`;
  currentGameNumberElement.classList.remove("hidden");
}

function renderCurrentGameMaster() {
  if (!currentGameMasterElement) return;

  const gameMasters =
    typeof currentGameMasters !== "undefined"
      ? currentGameMasters
      : typeof currentGameMaster !== "undefined" && currentGameMaster
        ? [currentGameMaster]
        : [];

  if (!gameMasters.length) {
    currentGameMasterElement.textContent = "";
    currentGameMasterElement.classList.add("hidden");
    return;
  }

  currentGameMasterElement.textContent = `${gameMasters.length === 1 ? "GameMaster" : "GameMasters"}: ${gameMasters.join(", ")}`;
  currentGameMasterElement.classList.remove("hidden");
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

function renderNewExpansions() {
  if (!newExpansionsList || typeof expansions === "undefined") return;

  const newExpansions = expansions.filter((expansion) => expansion.isNew);

  newExpansionsList.innerHTML = "";

  if (!newExpansions.length) {
    newExpansionsList.innerHTML = `
      <p class="empty-message">Geen nieuwe modules.</p>
    `;
    return;
  }

  newExpansions.forEach((expansion) => {
    newExpansionsList.appendChild(createExpansionCard(expansion));
  });
}

renderNewRoles();
renderNewExpansions();
renderCurrentPlayers();
renderCurrentAnnouncements();
renderCircleSessionLink();
renderCurrentGameNumber();
renderCurrentGameMaster();

/* ======================
   EVENTS
====================== */
modalClose.onclick = closeModal;
modalBackdrop.onclick = closeModal;

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});
