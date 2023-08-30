const loadHome = () => {
  //CREATING MAIN
  const mainElement = document.createElement("main");
  mainElement.className = "container home-page";

  const restoNameWrapper = document.createElement("div");
  restoNameWrapper.className = "resto-name-wrapper";

  //CREATING MAIN IMAGE
  const burgerMainDiv = document.createElement("div");
  burgerMainDiv.className = "burger-main";

  const imageElement = document.createElement("img");
  imageElement.src = "images/burger-main.png";
  imageElement.alt = "burger";

  burgerMainDiv.appendChild(imageElement);

  //CREATING MAIN TEXT
  const h1Element = document.createElement("h1");
  h1Element.className = "resto-heading";

  const span1Element = document.createElement("span");
  span1Element.className = "heading-yellow";
  span1Element.textContent = "Big";

  const span2Element = document.createElement("span");
  span2Element.textContent = "Byte";

  h1Element.appendChild(span1Element);
  h1Element.appendChild(span2Element);

  //APPEND MAIN TEXT AND IMAGE
  restoNameWrapper.appendChild(burgerMainDiv);
  restoNameWrapper.appendChild(h1Element);

  //CREATE SLOGAN ELEMENT
  const sloganElement = document.createElement("p");
  sloganElement.className = "resto-slogan";

  const quoteLeftElement = document.createElement("i");
  quoteLeftElement.className = "fa-solid fa-quote-left";

  const sloganContent = document.createElement("span");
  sloganContent.className = "slogan";
  sloganContent.textContent = "Taste Innovation, Byte by Byte!";

  const quoteRightElement = document.createElement("i");
  quoteRightElement.className = "fa-solid fa-quote-right";

  sloganElement.appendChild(quoteLeftElement);
  sloganElement.appendChild(sloganContent);
  sloganElement.appendChild(quoteRightElement);

  //APPEND ON MAIN
  mainElement.appendChild(restoNameWrapper);
  mainElement.appendChild(sloganElement);

  return mainElement;
};

export default loadHome;
