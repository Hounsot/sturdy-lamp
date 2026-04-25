const CARD_CATEGORIES = {
  all: [
    {
      title: "test1",
      subtitle: "test subtitle1",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test2",
      subtitle: "test subtitle2",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test3",
      subtitle: "test subtitle3",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test4",
      subtitle: "test subtitle4",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test5",
      subtitle: "test subtitle5",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test6",
      subtitle: "test subtitle6",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test7",
      subtitle: "test subtitle7",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test8",
      subtitle: "test subtitle8",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
  ],
  "small-business": [
    {
      title: "1test",
      subtitle: "test subtitle1",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test2",
      subtitle: "test subtitle2",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test3",
      subtitle: "test subtitle3",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test4",
      subtitle: "test subtitle4",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test5",
      subtitle: "test subtitle5",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test6",
      subtitle: "test subtitle6",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test7",
      subtitle: "test subtitle7",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test8",
      subtitle: "test subtitle8",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
  ],
  "large-business": [
    {
      title: "test1",
      subtitle: "test subtitle1",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test2",
      subtitle: "test subtitle2",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test3",
      subtitle: "test subtitle3",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test4",
      subtitle: "test subtitle4",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test5",
      subtitle: "test subtitle5",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test6",
      subtitle: "test subtitle6",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test7",
      subtitle: "test subtitle7",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
    {
      title: "test8",
      subtitle: "test subtitle8",
      image:
        "https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png",
      href: "#",
    },
  ],
};
let segmentedControl = document.querySelector(".segmented-control");
let controlBackground = document.querySelector("[data-card-background]");
let controlButtons = document.querySelectorAll("[data-card-category]");
let cardsContainer = document.querySelector("[data-cards-container]");

renderCards("all");
controlButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderCards(button.dataset.cardCategory);
    for (let button of controlButtons) {
      button.classList.remove("active");
    }
    controlBackground.style.left = `${button.getBoundingClientRect().left - segmentedControl.getBoundingClientRect().left}px`;
    button.classList.add("active");
  });
});

function renderCards(category) {
  cardsContainer.innerHTML = "";
  CARD_CATEGORIES[category].forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
        <p>${card.title}</p>
        <p>${card.subtitle}</p>
      `;
    cardElement.style.backgroundImage = `url(${card.image})`;
    cardsContainer.appendChild(cardElement);
    console.log(card);
  });
}
