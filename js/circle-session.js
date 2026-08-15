const circleSessionContent = document.getElementById("circle-session-content");
const circleSessionLocked = document.getElementById("circle-session-locked");
const circleBoard = document.getElementById("circle-board");
const neighborSearchInput = document.getElementById("neighbor-search-input");
const neighborSelect = document.getElementById("neighbor-select");
const neighborSearchButton = document.getElementById("neighbor-search-button");
const neighborResult = document.getElementById("neighbor-result");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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

function normalizeSearch(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getCirclePlayers() {
  const players =
    typeof currentGamePlayers !== "undefined" ? currentGamePlayers : [];

  return [...players].sort((a, b) => {
    const orderA = Number.isFinite(a.circleOrder) ? a.circleOrder : null;
    const orderB = Number.isFinite(b.circleOrder) ? b.circleOrder : null;

    if (orderA !== null && orderB !== null && orderA !== orderB) {
      return orderA - orderB;
    }

    if (orderA !== null) return -1;
    if (orderB !== null) return 1;

    return a.name.localeCompare(b.name, "nl", { sensitivity: "base" });
  });
}

function renderCircle(players) {
  circleBoard.innerHTML = `<div class="circle-center-label">Cirkel<br>Zitting</div>`;

  if (!players.length) {
    circleBoard.innerHTML += `<div class="circle-empty">Nog geen spelers ingevuld.</div>`;
    return;
  }

  players.forEach((player, index) => {
    const angle = ((360 / players.length) * index - 90) * (Math.PI / 180);
    const x = 50 + Math.cos(angle) * 44;
    const y = 50 + Math.sin(angle) * 36;
    const item = document.createElement("div");
    item.className = `circle-player ${isPlayerAlive(player) ? "alive" : "dead"}`;
    item.style.setProperty("--x", `${x}%`);
    item.style.setProperty("--y", `${y}%`);
    item.textContent = player.name;
    circleBoard.appendChild(item);
  });
}

function populateNeighborSelect(players) {
  neighborSelect.innerHTML = `<option value="">Kies een speler</option>`;

  [...players]
    .sort((a, b) => a.name.localeCompare(b.name, "nl", { sensitivity: "base" }))
    .forEach((player) => {
      const option = document.createElement("option");
      option.value = player.name;
      option.textContent = player.name;
      neighborSelect.appendChild(option);
    });
}

function findPlayerBySearch(players) {
  const selectedName = neighborSelect.value;
  const typedName = neighborSearchInput.value;
  const searchValue = normalizeSearch(typedName || selectedName);

  if (!searchValue) return null;

  return (
    players.find((player) => normalizeSearch(player.name) === searchValue) ||
    players.find((player) => normalizeSearch(player.name).startsWith(searchValue))
  );
}

function findLivingNeighbor(players, startIndex, direction) {
  if (players.length <= 1) return null;

  for (let step = 1; step < players.length; step += 1) {
    const index = (startIndex + direction * step + players.length) % players.length;
    const player = players[index];

    if (isPlayerAlive(player)) {
      return player;
    }
  }

  return null;
}

function renderNeighborResult(players) {
  const player = findPlayerBySearch(players);

  if (!player) {
    neighborResult.innerHTML = `<div class="neighbor-result-empty">Geen speler gevonden.</div>`;
    return;
  }

  const index = players.findIndex((item) => item.name === player.name);
  const left = findLivingNeighbor(players, index, -1);
  const right = findLivingNeighbor(players, index, 1);
  const statusText = isPlayerAlive(player)
    ? ""
    : `<div class="neighbor-result-status">Deze speler is dood en telt niet meer mee in de Cirkel Zitting.</div>`;

  neighborResult.innerHTML = `
    <article class="neighbor-result-card${isPlayerAlive(player) ? "" : " dead"}">
      <div class="neighbor-result-name">${escapeHtml(player.name)}</div>
      ${statusText}
      <div class="neighbor-result-grid">
        <div class="neighbor-result-item">
          <span class="neighbor-result-label">Linkerbuur</span>
          <span class="neighbor-result-value">${left ? escapeHtml(left.name) : "Geen levende buur"}</span>
        </div>
        <div class="neighbor-result-item">
          <span class="neighbor-result-label">Rechterbuur</span>
          <span class="neighbor-result-value">${right ? escapeHtml(right.name) : "Geen levende buur"}</span>
        </div>
      </div>
    </article>
  `;
}

let circleScale = 1;
let pinchStartDistance = 0;
let pinchStartScale = 1;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getTouchDistance(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}

function setCircleZoom(value) {
  circleScale = clamp(value, 0.55, 1.35);
  circleBoard.style.setProperty("--circle-zoom", String(circleScale));
}

function enablePinchZoom() {
  circleBoard.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 2) return;
    pinchStartDistance = getTouchDistance(event.touches);
    pinchStartScale = circleScale;
  }, { passive: true });

  circleBoard.addEventListener("touchmove", (event) => {
    if (event.touches.length !== 2 || !pinchStartDistance) return;
    event.preventDefault();
    const nextDistance = getTouchDistance(event.touches);
    setCircleZoom(pinchStartScale * (nextDistance / pinchStartDistance));
  }, { passive: false });

  circleBoard.addEventListener("touchend", (event) => {
    if (event.touches.length < 2) {
      pinchStartDistance = 0;
    }
  }, { passive: true });
}

if (!isWakkerdamActive()) {
  circleSessionLocked.classList.remove("hidden");
} else {
  circleSessionContent.classList.remove("hidden");
  const players = getCirclePlayers();
  setCircleZoom(1);
  renderCircle(players);
  populateNeighborSelect(players);
  enablePinchZoom();

  neighborSearchButton.addEventListener("click", () => renderNeighborResult(players));
  neighborSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      renderNeighborResult(players);
    }
  });
  neighborSelect.addEventListener("change", () => {
    neighborSearchInput.value = "";
  });
}
