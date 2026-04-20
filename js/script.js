const rolesList = document.getElementById("roles-list");

function renderRoles() {
  rolesList.innerHTML = "";

  roles.forEach((role) => {
    const card = document.createElement("article");
    card.classList.add("role-card");

    card.innerHTML = `
      <img src="${role.image}" alt="${role.name}" class="role-image">
      <div class="role-content">
        <h3 class="role-name">${role.name}</h3>
        <p class="role-description">${role.description}</p>
      </div>
    `;

    rolesList.appendChild(card);
  });
}

renderRoles();