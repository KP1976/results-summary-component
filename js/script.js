async function loadData() {
  try {
    const response = await fetch("data.json");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

loadData().then((data) => {
  const cardList = document.querySelector(".result-card__list");

  const createCard = (data) => {
    const card = document.createElement("li");

    card.classList.add("result-card__list-item");
    card.classList.add(
      `result-card__list-item--${data.category.toLowerCase()}`
    );

    card.innerHTML = `
      <div class="result-card__list-icon-container">
        <img
          class="result-card__list-icon"
          src="${data.icon}"
          alt="${data.category} Icon"
        />
        <span class="result-card__list-text">${data.category}</span>
      </div>
      <span class="result-card__list-score">
        ${data.score}
        <span
          class="result-card__list-score result-card__list-score--light"
          >/ 100</span
        >
      </span>
    `;

    cardList.appendChild(card);
  };

  for (let i in data) {
    createCard(data[i]);
  }
});
