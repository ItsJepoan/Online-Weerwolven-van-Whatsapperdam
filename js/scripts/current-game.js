const currentRolesList = document.getElementById("current-roles-list");
const activeExpansionsList = document.getElementById("active-expansions-list");
const currentTalentsList = document.getElementById("current-talents-list");
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

let lockedScrollY = 0;

const currentRoleIdSet = new Set(currentGameRoleIds);

const configuredActiveExpansionRoleIds = new Set(
  expansions
    .filter((expansion) => activeExpansionKeys.includes(expansion.key))
    .flatMap((expansion) => [
      ...(expansion.roleIds || []),
      ...(expansion.activeRoleIds || [])
    ])
);

const activeExpansionKeysWithAutomaticRoles = new Set(
  expansions
    .filter(
      (expansion) =>
        activeExpansionKeys.includes(expansion.key) &&
        !Array.isArray(expansion.activeRoleIds)
    )
    .map((expansion) => expansion.key)
);

const activeExpansionRoleIds = roles
  .filter(
    (role) =>
      ((role.expansionKey &&
        activeExpansionKeysWithAutomaticRoles.has(role.expansionKey)) ||
        configuredActiveExpansionRoleIds.has(role.id)) &&
      !(typeof excludedActiveExpansionRoleIds !== "undefined" &&
        excludedActiveExpansionRoleIds.includes(role.id))
  )
  .map((role) => role.id);

const replacedActiveRoleIds = new Set(
  expansions
    .filter((expansion) => activeExpansionKeys.includes(expansion.key))
    .flatMap((expansion) => expansion.replaceRoleIds || [])
);

const allActiveRoleIds = new Set([
  ...currentGameRoleIds.filter((roleId) => !replacedActiveRoleIds.has(roleId)),
  ...activeExpansionRoleIds
]);
const activeExpansionRoleIdSet = new Set(activeExpansionRoleIds);

const currentRoles = roles.filter((role) => allActiveRoleIds.has(role.id));

const normalCurrentRoles = currentRoles.filter(
  (role) =>
    !role.types.includes("Uitbreiding") ||
    configuredActiveExpansionRoleIds.has(role.id) ||
    activeExpansionRoleIdSet.has(role.id)
);

const currentGameBasisRoleIdSet = new Set([
  ...(typeof currentGameBasisRoleIds !== "undefined" ? currentGameBasisRoleIds : []),
  ...(typeof currentGameBasisWerewolfRoleId !== "undefined" && currentGameBasisWerewolfRoleId
    ? [currentGameBasisWerewolfRoleId]
    : [])
]);

const sectionOrder = [
  { key: "Burger", title: "Burgers" },
  { key: "Twijfelachtig", title: "Twijfelachtig" },
  { key: "Moordenaar", title: "Moordenaars" },
  { key: "Onafhankelijke", title: "Onafhankelijken" },
  { key: "Weerwolf", title: "Weerwolven" },
  { key: "Titaan", title: "Titanen" },
  { key: "Bijrol", title: "Bijrollen" }
];

function getRoleTypeRank(role) {
  if (currentGameBasisRoleIdSet.has(role.id)) return 0;
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

function sortExpansions(expansionList) {
  return [...expansionList].sort((a, b) =>
    a.name.localeCompare(b.name, "nl", { sensitivity: "base" })
  );
}

const talentCategoryOrder = ["Basis", "Gevorderd", "Expert"];

function sortTalents(talentList) {
  return [...talentList].sort((a, b) =>
    a.name.localeCompare(b.name, "nl", { sensitivity: "base" })
  );
}

function sortTalentCategories(categories) {
  return [...categories].sort((a, b) => {
    const indexA = talentCategoryOrder.indexOf(a);
    const indexB = talentCategoryOrder.indexOf(b);

    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    return a.localeCompare(b, "nl", { sensitivity: "base" });
  });
}

function createBadges(items) {
  if (!items || !items.length) {
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

function normalizeSearch(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function formatInlineText(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function formatAnnouncementText(value) {
  return escapeHtml(value).replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function formatTalentText(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
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
  modalDescription.innerHTML = formatRoleDescription(getCurrentRoleDescription(role));

  modal.classList.remove("hidden");
  lockPageScroll();
}

function closeModal() {
  modal.classList.add("hidden");
  unlockPageScroll();
}

function createRoleCard(role) {
  const card = document.createElement("article");
  card.className = `current-role-card${currentGameBasisRoleIdSet.has(role.id) ? " current-role-card-basis" : ""}`;
  card.tabIndex = 0;

  card.innerHTML = `
    <img src="${role.image || "images/placeholder.png"}" alt="${role.name}" class="current-role-image" onerror="this.onerror=null;this.src='images/placeholder.png';">
    <div class="current-role-content">
      <h3 class="current-role-name">${role.name}</h3>
    </div>
  `;

  card.addEventListener("click", () => openModal(role));

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(role);
    }
  });

  return card;
}

function isPlayerAlive(player) {
  if (typeof player.alive === "boolean") return player.alive;
  return String(player.status || "levend").toLowerCase() !== "dood";
}

function getCurrentGameMasters() {
  if (typeof currentGameMasters !== "undefined") return currentGameMasters;
  if (typeof currentGameMaster !== "undefined" && currentGameMaster) {
    return [currentGameMaster];
  }
  return [];
}

function isCurrentGameMasterName(name) {
  const normalizedName = normalizeSearch(name);
  return getCurrentGameMasters().some(
    (gameMaster) => normalizeSearch(gameMaster) === normalizedName
  );
}

function getPlayerSpecialStatusLabel(player) {
  if (player.specialStatus === "boeren-burgemeester") {
    return "Burgemeester";
  }

  return "";
}

function getPlayerSpecialStatusClass(player) {
  return player.specialStatus ? ` ${player.specialStatus}` : "";
}

function renderCurrentPlayers() {
  if (!currentPlayerList) return;

  const players =
    typeof currentGamePlayers !== "undefined" ? currentGamePlayers : [];

  currentPlayerList.innerHTML = "";

  if (!players.length) {
    currentPlayerList.innerHTML = `<p class="current-empty-message">Nog geen spelers ingevuld.</p>`;
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
      const gameMaster = isCurrentGameMasterName(player.name);
      const specialStatusLabel = getPlayerSpecialStatusLabel(player);
      const row = document.createElement("div");
      row.className = `current-player-row ${alive ? "alive" : "dead"}${gameMaster ? " game-master" : ""}${getPlayerSpecialStatusClass(player)}`;
      row.innerHTML = `
        <span class="current-player-name">${escapeHtml(player.name)}</span>
        <span class="current-player-status">${gameMaster ? "GM" : specialStatusLabel || (alive ? "Levend" : "Dood")}</span>
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
    currentAnnouncementsList.innerHTML = `<p class="current-empty-message">Nog geen aankondigingen.</p>`;
    return;
  }

  [...announcements]
    .sort((a, b) => String(b.datetime || "").localeCompare(String(a.datetime || "")))
    .forEach((announcement) => {
      const row = document.createElement("article");
      row.className = `current-announcement-row${announcement.kind ? ` ${announcement.kind}` : ""}`;
      row.innerHTML = `
        <time class="current-announcement-time">${escapeHtml(announcement.label || announcement.datetime || "")}</time>
        <div class="current-announcement-message">${formatAnnouncementText(announcement.message || "")}</div>
      `;
      currentAnnouncementsList.appendChild(row);
    });
}

function isCircleSessionActive() {
  return (
    typeof activeExpansionKeys !== "undefined" &&
    (activeExpansionKeys.includes("de-cirkelzitting") ||
      activeExpansionKeys.includes("back-to-basics-wakkerdam-editie"))
  );
}

function getCurrentRoleDescription(role) {
  if (isCircleSessionActive() && role.circleSessionDescription) {
    return role.circleSessionDescription;
  }

  return role.description;
}

function renderCircleSessionLink() {
  if (!circleSessionLink) return;
  circleSessionLink.classList.toggle("hidden", !isCircleSessionActive());
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

  const gameMasters = getCurrentGameMasters();

  if (!gameMasters.length) {
    currentGameMasterElement.textContent = "";
    currentGameMasterElement.classList.add("hidden");
    return;
  }

  currentGameMasterElement.textContent = `${gameMasters.length === 1 ? "GameMaster" : "GameMasters"}: ${gameMasters.join(", ")}`;
  currentGameMasterElement.classList.remove("hidden");
}

function createTalentCard(talent) {
  const card = document.createElement("article");
  card.className = "talent-card";

  const metaParts = [];

  if (talent.originalRole) {
    metaParts.push(`
      <div class="talent-meta-block">
        <strong>Oorspronkelijke rol</strong>
        <div class="badges">
          <span class="badge">${talent.originalRole}</span>
        </div>
      </div>
    `);
  }

  if (talent.canBeSecret) {
    metaParts.push(`
      <div class="talent-meta-block">
        <strong>Geheim Talent</strong>
        <div class="badges">
          <span class="badge">Kan geheim zijn</span>
        </div>
      </div>
    `);
  }

  if (talent.note) {
    metaParts.push(`
      <div class="talent-meta-block talent-note">
        <strong>Let op</strong>
        <span>${talent.note}</span>
      </div>
    `);
  }

  card.innerHTML = `
    <div class="talent-card-header">
      <h3>${talent.name}</h3>
      <span class="talent-category-badge">${talent.category}</span>
    </div>
    <p class="talent-description">${formatTalentText(talent.description)}</p>
    ${metaParts.length ? `<div class="talent-meta">${metaParts.join("")}</div>` : ""}
  `;

  return card;
}

function renderCurrentTalents() {
  if (!currentTalentsList) return;

  const selectedTalentNames = new Set(currentGameTalentNames || []);
  const selectedTalents = [
    ...talents.filter((talent) => selectedTalentNames.has(talent.name)),
    ...(typeof currentGameExtraTalents !== "undefined" ? currentGameExtraTalents : [])
  ];

  currentTalentsList.innerHTML = "";

  if (!selectedTalents.length) {
    return;
  }

  const section = document.createElement("section");
  section.className = "current-talent-section";

  const header = document.createElement("div");
  header.className = "current-talent-header";
  header.innerHTML = `
    <div>
      <h2 class="current-role-title">Talenten</h2>
      <p>Alle actieve talenten in het huidige spel.</p>
    </div>
    <span class="talents-count">${selectedTalents.length} talenten</span>
  `;

  section.appendChild(header);

  sortTalentCategories([...new Set(selectedTalents.map((talent) => talent.category))]).forEach((category) => {
    const talentsInCategory = sortTalents(
      selectedTalents.filter((talent) => talent.category === category)
    );

    if (!talentsInCategory.length) return;

    const categorySection = document.createElement("section");
    categorySection.className = "talent-section current-talent-category";

    const title = document.createElement("h3");
    title.className = "talent-section-title";
    title.textContent = category;

    const list = document.createElement("div");
    list.className = "talent-list";

    talentsInCategory.forEach((talent) => {
      list.appendChild(createTalentCard(talent));
    });

    categorySection.appendChild(title);
    categorySection.appendChild(list);
    section.appendChild(categorySection);
  });

  currentTalentsList.appendChild(section);
}

function renderRoleSections() {
  currentRolesList.innerHTML = "";

  const groupedRoles = {
    Burger: normalCurrentRoles.filter((role) => role.alliance === "Burger"),
    Moordenaar: normalCurrentRoles.filter((role) => role.alliance === "Moordenaar"),
    Onafhankelijke: normalCurrentRoles.filter((role) => role.alliance === "Onafhankelijke"),
    Weerwolf: normalCurrentRoles.filter((role) => role.alliance === "Weerwolf"),
    Titaan: normalCurrentRoles.filter((role) => role.alliance === "Titaan"),
    Twijfelachtig: normalCurrentRoles.filter((role) => role.alliance === "Twijfelachtig"),
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

  const activeExpansions = sortExpansions(
    expansions.filter((expansion) =>
      activeExpansionKeys.includes(expansion.key)
    )
  );

  if (!activeExpansions.length) {
    return;
  }

  activeExpansions.forEach((expansion) => {
    const relatedRoles = expansion.hideRoles || Array.isArray(expansion.activeRoleIds)
      ? []
      : sortRoles(
          roles.filter((role) =>
            ((role.expansionKey === expansion.key) ||
              (expansion.roleIds || []).includes(role.id)) &&
            !(typeof excludedActiveExpansionRoleIds !== "undefined" &&
              excludedActiveExpansionRoleIds.includes(role.id))
          )
        );

    const card = document.createElement("section");
    card.className = "current-expansion-card";

    const titleId = `current-expansion-title-${expansion.key}`;
    const panelId = `current-expansion-panel-${expansion.key}`;
    const displayName = `${expansion.name}${activeExpansionVariants && activeExpansionVariants[expansion.key] ? ` (${activeExpansionVariants[expansion.key]})` : ""}`;

    const toggle = document.createElement("button");
    toggle.className = "current-expansion-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", panelId);
    toggle.innerHTML = `
      <span id="${titleId}" class="current-expansion-title">${displayName}</span>
      <span class="current-expansion-toggle-icon" aria-hidden="true">+</span>
    `;

    const panel = document.createElement("div");
    panel.id = panelId;
    panel.className = "current-expansion-panel";
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", titleId);
    panel.hidden = true;

    const description = document.createElement("div");
    description.className = "current-expansion-description";
    description.innerHTML = createFormattedDescription(expansion.description);
    panel.appendChild(description);

    if (relatedRoles.length) {
      const rolesTitle = document.createElement("h3");
      rolesTitle.className = "current-expansion-roles-title";
      rolesTitle.textContent =
        (expansion.category || "uitbreiding") === "speloptie"
          ? "Rollen bij deze speloptie"
          : "Rollen in deze uitbreiding";

      const grid = document.createElement("div");
      grid.className = "current-roles-grid";

      relatedRoles.forEach((role) => {
        grid.appendChild(createRoleCard(role));
      });

      panel.appendChild(rolesTitle);
      panel.appendChild(grid);
    }

    if (expansion.talentsUrl) {
      const talentsLink = document.createElement("a");
      talentsLink.className = "current-expansion-action-link";
      talentsLink.href = expansion.talentsUrl;
      talentsLink.textContent = "Bekijk talenten";
      panel.appendChild(talentsLink);
    }

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
      card.classList.toggle("is-open", !isOpen);
    });

    card.appendChild(toggle);
    card.appendChild(panel);
    activeExpansionsList.appendChild(card);
  });
}

renderCurrentPlayers();
renderCurrentAnnouncements();
renderCircleSessionLink();
renderCurrentGameNumber();
renderCurrentGameMaster();
renderActiveExpansions();
renderCurrentTalents();
renderRoleSections();

modalClose.onclick = closeModal;
modalBackdrop.onclick = closeModal;

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
