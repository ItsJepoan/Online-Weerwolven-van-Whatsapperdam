const appendixList = document.getElementById("appendix-list");
const appendixDetail = document.getElementById("appendix-detail");

let activeAppendixId = appendices.length ? appendices[0].id : null;

function createNotesHtml(notes) {
  if (!notes || !notes.length) {
    return "";
  }

  return `
    <div class="appendix-notes">
      ${notes.map((note) => `<div class="appendix-note">${note}</div>`).join("")}
    </div>
  `;
}

function createTableHtml(columns, rows) {
  if (!rows || !rows.length) {
    return `<div class="appendix-empty">Geen inhoud beschikbaar.</div>`;
  }

  return `
    <div class="appendix-table-wrap">
      <table class="appendix-table">
        <thead>
          <tr>
            ${columns.map((column) => `<th>${column}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td class="appendix-role-name">${row[0]}</td>
              <td class="appendix-value">${row[1]}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderAppendixList() {
  appendixList.innerHTML = "";

  appendices.forEach((appendix) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "appendix-list-button";

    if (appendix.id === activeAppendixId) {
      button.classList.add("active");
    }

    button.textContent = appendix.title;
    button.addEventListener("click", () => {
      activeAppendixId = appendix.id;
      renderAppendixList();
      renderAppendixDetail();
    });

    appendixList.appendChild(button);
  });
}

function renderAppendixDetail() {
  const appendix = appendices.find((item) => item.id === activeAppendixId);

  if (!appendix) {
    appendixDetail.innerHTML = `
      <div class="content-card">
        <p>Geen appendix geselecteerd.</p>
      </div>
    `;
    return;
  }

  appendixDetail.innerHTML = `
    <article class="appendix-card">
      <div class="appendix-header">
        <h2 class="appendix-title">${appendix.title}</h2>
        ${createNotesHtml(appendix.notes)}
      </div>
      ${createTableHtml(appendix.columns, appendix.rows)}
    </article>
  `;
}

renderAppendixList();
renderAppendixDetail();