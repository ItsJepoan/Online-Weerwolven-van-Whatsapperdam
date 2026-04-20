const rulesContent = document.getElementById("rules-content");

function renderRules() {
  rulesContent.innerHTML = "";

  rulesSections.forEach((section) => {
    const article = document.createElement("article");
    article.className = "rules-section";

    let html = `<h2>${section.title}</h2>`;

    if (section.content && section.content.length > 0) {
      html += section.content.map((paragraph) => `<p>${paragraph}</p>`).join("");
    }

    if (section.list && section.list.length > 0) {
      html += `
        <ul>
          ${section.list.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      `;
    }

    article.innerHTML = html;
    rulesContent.appendChild(article);
  });
}

renderRules();