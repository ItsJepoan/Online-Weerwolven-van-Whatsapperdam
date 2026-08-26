const rulesContent = document.getElementById("rules-content");

function createParagraphs(paragraphs) {
  if (!paragraphs || paragraphs.length === 0) {
    return "";
  }

  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function createList(items) {
  if (!items || items.length === 0) {
    return "";
  }

  return `
    <ul class="rules-list">
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function createSubSections(subSections) {
  if (!subSections || subSections.length === 0) {
    return "";
  }

  return subSections
    .map((subSection) => {
      return `
        <div class="rules-subsection">
          <h3>${subSection.title}</h3>
          ${createParagraphs(subSection.content)}
          ${createList(subSection.list)}
        </div>
      `;
    })
    .join("");
}

function createTypeDefinitions(typeDefinitions) {
  if (!typeDefinitions || typeDefinitions.length === 0) {
    return "";
  }

  return `
    <div class="type-definitions-grid">
      ${typeDefinitions
        .map(
          (type) => `
            <article class="type-definition-card">
              <h3>${type.name}</h3>
              <p>${type.description}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderRules() {
  rulesContent.innerHTML = "";

  rulesSections.forEach((section) => {
    const article = document.createElement("article");
    article.className = "rules-section content-card";

    article.innerHTML = `
      <h2>${section.title}</h2>
      ${createParagraphs(section.content)}
      ${createList(section.list)}
      ${createParagraphs(section.extraContent)}
      ${createSubSections(section.subSections)}
      ${createTypeDefinitions(section.typeDefinitions)}
    `;

    rulesContent.appendChild(article);
  });
}

renderRules();