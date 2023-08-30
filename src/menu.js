const createHeading = () => {
  const headingDiv = document.createElement("heading-menu");
  headingDiv.className = "heading-menu";

  const headingContent = document.createElement("h1");
  headingContent.className = "heading";
  headingContent.textContent = "BigByte";

  const pElement = document.createElement("p");
  pElement.textContent =
    "Prepare yourself for a burger adventure like no other.";

  headingDiv.appendChild(headingContent);
  headingDiv.appendChild(pElement);

  return headingDiv;
};

const createProduct = (productImg, productName, productPrice, productInfo) => {
  const burgerElement = document.createElement("div");
  burgerElement.className = "burger-container";

  const burgerImgContainer = document.createElement("div");
  burgerImgContainer.className = "burger-img";

  const burgerImg = document.createElement("img");
  burgerImg.src = `${productImg}`;

  burgerImgContainer.appendChild(burgerImg);

  const burgerContentEl = document.createElement("div");
  burgerContentEl.className = "burger-content";

  const burgerTop = document.createElement("div");
  burgerTop.className = "burger-top-wrapper";

  const burgerName = document.createElement("div");
  burgerName.className = "burger-name";
  burgerName.textContent = `${productName}`;

  const burgerPrice = document.createElement("div");
  burgerPrice.className = "burger-price";
  burgerPrice.textContent = `${productPrice}`;

  burgerTop.appendChild(burgerName);
  burgerTop.appendChild(burgerPrice);

  const burgerInfo = document.createElement("div");
  burgerInfo.className = "burger-info";
  burgerInfo.textContent = `${productInfo}`;

  burgerContentEl.appendChild(burgerTop);
  burgerContentEl.appendChild(burgerInfo);

  burgerElement.appendChild(burgerImgContainer);
  burgerElement.appendChild(burgerContentEl);

  return burgerElement;
};

const createMenu = () => {
  const products = [
    {
      name: "Binary Burger",
      price: "PHP 399.00",
      info: "Beef and plant-based duo, symbolizing 0s and 1s. Topped with tangy binary sauce, epitomizing our concept.",
      img: "images/burger-main.png",
    },
    {
      name: "Megabyte Melt",
      price: "PHP 699.00",
      info: "Double beef, melted cheddar, crispy bacon, 'Megabyte Sauce' - a smoky, spicy flavor symphony in every bite.",
      img: "images/burger2.png",
    },
    {
      name: "Firewall Flname",
      price: "PHP 285.00",
      info: "Spice seekers rejoice: sriracha mayo, pepper jack, jalapeño-habanero relish deliver a fiery punch in this burger.",
      img: "images/burger3.png",
    },
    {
      name: "Bit Blast Burger",
      price: "PHP 390.00",
      info: "Experience explosion: pepper jack, chipotle mayo, roasted chili pepper salsa ignite a fiery burst of flavor.",
      img: "images/burger-main.png",
    },
    {
      name: "Virtual Delight",
      price: "PHP 690.00",
      info: "Grilled zucchini, eggplant, bell peppers, seasoned, with smoky chipotle aioli, satisfying herbivorous cravings.",
      img: "images/burger2.png",
    },
    {
      name: "Quantum Quake",
      price: "PHP 370.00",
      info: "Cheese explosion: gouda, cheddar, blue cheese blend, crafting an irresistible 'cheese quake' of flavors.",
      img: "images/burger3.png",
    },
  ];

  const menuContainerEl = document.createElement("div");
  menuContainerEl.className = "menu-container container";

  for (let product of products) {
    menuContainerEl.appendChild(
      createProduct(product.img, product.name, product.price, product.info)
    );
  }

  return menuContainerEl;
};

const loadMenu = () => {
  const mainElement = document.createElement("main");
  mainElement.className = "container";

  mainElement.appendChild(createHeading());
  mainElement.appendChild(createMenu());

  return mainElement;
};

export default loadMenu;
