const navigationData = {
  "private-clients": [
    {
      title: "Карты",
      sections: [
        {
          title: "Дебетовые карты",
          links: [
            { label: "Альфа-Карта", href: "#" },
            { label: "Альфа-Карта с гравировкой", href: "#" },
            { label: "Платёжные Альфа-Стикеры", href: "#" },
            { label: "My-Карта", href: "#" },
            { label: "Карта Alfa Only", href: "#" },
            { label: "Детская карта", href: "#" },
            { label: "Alfa Travel", href: "#" },
            { label: "Карта Апельсин", href: "#" },
          ],
        },
        {
          title: "Кредитные карты",
          links: [
            { label: "Кредитная карта 100 дней", href: "#" },
            { label: "Полезные статьи", href: "#" },
          ],
        },
        {
          title: "Специальные условия",
          links: [
            { label: "Альфа-Карта для зарплаты", href: "#" },
            { label: "Альфа-Карта с кобо-счётом", href: "#" },
            { label: "Зарплата каждый день", href: "#" },
            { label: "15 привилегий Альфа-Смарт", href: "#" },
          ],
        },
      ],
    },
    { title: "Накопления", sections: [] },
    { title: "Кредиты", sections: [] },
    { title: "Ипотека", sections: [] },
    { title: "Инвестиции", sections: [] },
    { title: "Альфа-Смарт", sections: [] },
    { title: "Alfa Only", sections: [] },
    { title: "Мобильная связь", sections: [] },
    { title: "Самозанятость", sections: [] },
    { title: "Семья и дети", sections: [] },
    { title: "Альфа-Будущее", sections: [] },
    { title: "А-Клуб", sections: [] },
    { title: "Ещё", sections: [] },
  ],
  "small-business": [],
  "large-business": [],
};

let navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("pointerenter", () => {
    // console.log(item.dataset.nav);
    // console.log(navigationData[item.dataset.nav]);
    let navTitles = document.querySelector("[data-nav-titles]");
    let navContent = document.querySelector("[data-nav-content]");
    navTitles.innerHTML = "";
    navContent.innerHTML = "";
    navigationData[item.dataset.nav].forEach((section) => {
      let title = document.createElement("a");
      //   title.href = section.href;
      title.textContent = section.title;
      navTitles.appendChild(title);
      title.addEventListener("click", () => {
        console.log(section);
        console.log(section["sections"]);
        section["sections"].forEach((subsection) => {
          let content = document.querySelector("[data-nav-content]");
          let subsectionTitle = document.createElement("a");
          subsectionTitle.textContent = subsection.title;
          let subSection = document.createElement("div");
          subSection.classList.add("subsection");
          subSection.appendChild(subsectionTitle);
          content.appendChild(subSection);
          subsection.links.forEach((link) => {
            let linkElement = document.createElement("a");
            linkElement.textContent = link.label;
            linkElement.href = link.href;
            subSection.appendChild(linkElement);
          });
        });
      });
    });
    // section.forEach((subsection) => {
    //   console.log(subsection);
    // });
  });
});
