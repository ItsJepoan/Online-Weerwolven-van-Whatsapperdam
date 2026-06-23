const talentsList = document.getElementById("talents-list");
const talentSearch = document.getElementById("talent-search");
const talentsCount = document.getElementById("talents-count");

const categoryOrder = ["Bekend", "Nieuw"];

function getCategories() {
  return [...new Set(talents.map((talent) => talent.category))].sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);

    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    return a.localeCompare(b, "nl", { sensitivity: "base" });
  });
}

function sortTalents(talentList) {
  return [...talentList].sort((a, b) =>
    a.name.localeCompare(b.name, "nl", { sensitivity: "base" })
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatTalentText(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
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

function renderTalents() {
  const searchQuery = talentSearch.value.trim().toLowerCase();

  const filteredTalents = talents.filter((talent) => {
    return searchQuery === "" || talent.name.toLowerCase().includes(searchQuery);
  });

  talentsList.innerHTML = "";

  if (!filteredTalents.length) {
    talentsCount.textContent = "0 talenten";
    talentsList.innerHTML = `
      <div class="empty-message">
        Geen talenten gevonden met deze filters of zoekopdracht.
      </div>
    `;
    return;
  }

  talentsCount.textContent =
    filteredTalents.length === 1
      ? "1 talent"
      : `${filteredTalents.length} talenten`;

  getCategories().forEach((category) => {
    const talentsInCategory = sortTalents(
      filteredTalents.filter((talent) => talent.category === category)
    );

    if (!talentsInCategory.length) return;

    const section = document.createElement("section");
    section.className = "talent-section";

    const title = document.createElement("h2");
    title.className = "talent-section-title";
    title.textContent = category;

    const list = document.createElement("div");
    list.className = "talent-list";

    talentsInCategory.forEach((talent) => {
      list.appendChild(createTalentCard(talent));
    });

    section.appendChild(title);
    section.appendChild(list);
    talentsList.appendChild(section);
  });
}

renderTalents();

talentSearch.addEventListener("input", renderTalents);
