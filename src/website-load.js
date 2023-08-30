import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const createNav = () => {
  const navElement = document.createElement("nav");

  const ulElement = document.createElement("ul");
  ulElement.className = "container";

  //FIRST LIST ELEMENT
  const list1 = document.createElement("li");
  list1.innerHTML = `<i class="fa-solid fa-burger"></i>BigByte`;
  ulElement.appendChild(list1);

  list1.addEventListener("click", () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
    contentDiv.appendChild(createNav());
    contentDiv.appendChild(loadHome());
    contentDiv.appendChild(createFooter());
  });

  //SECOND LIST ELEMENT
  const list2 = document.createElement("li");
  list2.innerHTML = `Menu`;
  ulElement.appendChild(list2);

  list2.addEventListener("click", () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
    contentDiv.appendChild(createNav());
    contentDiv.appendChild(loadMenu());
    contentDiv.appendChild(createFooter());
  });

  //THIRD LIST ELEMENT
  const list3 = document.createElement("li");
  list3.innerHTML = `About`;
  ulElement.appendChild(list3);

  list3.addEventListener("click", () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
    contentDiv.appendChild(createNav());
    contentDiv.appendChild(loadAbout());
    contentDiv.appendChild(createFooter());
  });

  navElement.appendChild(ulElement);

  return navElement;
};

const createFooter = () => {
  // FOOTER CONTENT
  const footerElement = document.createElement("footer");
  footerElement.className = "footer";

  const footerContentDiv = document.createElement("div");
  footerContentDiv.className = "footer-content";
  footerContentDiv.textContent = "© Amiel Ian Mendoza 2023";

  footerElement.appendChild(footerContentDiv);

  return footerElement;
};

const websiteInit = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.appendChild(createNav());
  contentDiv.appendChild(loadHome());
  contentDiv.appendChild(createFooter());
};

export default websiteInit;
