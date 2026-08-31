const expansionsList = document.getElementById("expansions-list");

const modal = document.getElementById("role-modal");
const modalClose = document.getElementById("role-modal-close");
const modalBackdrop = document.querySelector(".role-modal-backdrop");

const modalName = document.getElementById("modal-role-name");
const modalImage = document.getElementById("modal-role-image");
const modalAlliance = document.getElementById("modal-role-alliance");
const modalOrigin = document.getElementById("modal-role-origin");
const modalTypes = document.getElementById("modal-role-types");
const modalDescription = document.getElementById("modal-role-description");

const allianceOrder = ["Burger", "Onafhankelijke", "Weerwolf"];

/* ======================
   SCROLL LOCK FIX
====================== */
let lockedScrollY = 0;

function formatRoleDescription(value) {
  return String(value)
    .trim()
    .split(/\n\s*\n/)
    .map((block) => `<p>${block
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .replace(/\*\*\*([\s\S]+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*([\s\S]+?)\*\*/g, "<strong>$1</strong>")}</p>`)
    .join("");
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
   HELPERS
====================== */
function createBadges(items) {
  if (!items.length) {
    return `<span class="badge">Geen</span>`;
  }

  return items.map((item) => `<span class="badge">${item}</span>`).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatInlineText(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function createFormattedDescription(text) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((block) => {
      const trimmed = block.trim();

      const listItems = trimmed
        .split("\n")
        .filter((line) => line.startsWith("* "));

      if (listItems.length && listItems.length === trimmed.split("\n").length) {
        return `<ul>${listItems
          .map((line) => `<li>${formatInlineText(line.slice(2))}</li>`)
          .join("")}</ul>`;
      }

      if (trimmed.startsWith("## ")) {
        return `<h3>${formatInlineText(trimmed.slice(3))}</h3>`;
      }

      return `<p>${formatInlineText(trimmed)}</p>`;
    })
    .join("");
}

function isCircleSessionActive() {
  return (
    typeof activeExpansionKeys !== "undefined" &&
    (activeExpansionKeys.includes("de-cirkelzitting") ||
      activeExpansionKeys.includes("back-to-basics-wakkerdam-editie"))
  );
}

function getRoleDescription(role) {
  if (isCircleSessionActive() && role.circleSessionDescription) {
    return role.circleSessionDescription;
  }

  return role.description;
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
  modalDescription.innerHTML = formatRoleDescription(getRoleDescription(role));

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

function sortExpansions(expansionList) {
  return [...expansionList].sort((a, b) =>
    a.name.localeCompare(b.name, "nl", { sensitivity: "base" })
  );
}

/* ======================
   CARD
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

/* ======================
   RENDER
====================== */
function renderExpansions() {
  expansionsList.innerHTML = "";
  const selectedCategory = expansionsList.dataset.category || "uitbreiding";

  sortExpansions(
    expansions.filter((expansion) =>
      (expansion.category || "uitbreiding") === selectedCategory
    )
  ).forEach((expansion) => {
    const section = document.createElement("section");
    section.className = "expansion-card";

    const configuredRoleIds = new Set(expansion.roleIds || []);

    const expansionRoles = expansion.hideRoles
      ? []
      : sortExpansionRoles(
          roles.filter(
            (role) =>
              configuredRoleIds.has(role.id) ||
              (role.isExpansionRole && role.expansionKey === expansion.key)
          )
        );

    const titleId = `expansion-title-${expansion.key}`;
    const panelId = `expansion-panel-${expansion.key}`;

    const toggle = document.createElement("button");
    toggle.className = "expansion-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", panelId);
    toggle.innerHTML = `
      <span id="${titleId}" class="expansion-title">${expansion.name}</span>
      <span class="expansion-toggle-icon" aria-hidden="true">+</span>
    `;

    const panel = document.createElement("div");
    panel.id = panelId;
    panel.className = "expansion-panel";
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", titleId);
    panel.hidden = true;

    const descriptionBlock = document.createElement("div");
    descriptionBlock.className = "expansion-description-block";

    const description = document.createElement("div");
    description.className = "expansion-description";
    description.innerHTML = createFormattedDescription(expansion.description);

    descriptionBlock.appendChild(description);

    panel.appendChild(descriptionBlock);

    if (expansion.talentsUrl) {
      const talentsLink = document.createElement("a");
      talentsLink.className = "expansion-action-link";
      talentsLink.href = expansion.talentsUrl;
      talentsLink.textContent = "Bekijk talenten";
      panel.appendChild(talentsLink);
    }

    const rolesTitle = document.createElement("h3");
    rolesTitle.className = "expansion-roles-title";
    rolesTitle.textContent =
      selectedCategory === "speloptie"
        ? "Rollen bij deze speloptie"
        : "Rollen in deze uitbreiding";

    if (!expansion.hideRoles) {
      panel.appendChild(rolesTitle);
    }

    if (!expansion.hideRoles && !expansionRoles.length) {
      const empty = document.createElement("div");
      empty.className = "empty-message";
      empty.textContent = "Nog geen rollen toegevoegd.";
      panel.appendChild(empty);
    } else if (!expansion.hideRoles) {
      const grid = document.createElement("div");
      grid.className = "roles-grid";

      expansionRoles.forEach((role) => {
        grid.appendChild(createRoleCard(role));
      });

      panel.appendChild(grid);
    }

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
      section.classList.toggle("is-open", !isOpen);
    });

    section.appendChild(toggle);
    section.appendChild(panel);
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
