const createAbout = () => {
  const aboutContainer = document.createElement("div");
  aboutContainer.className = "about-container";

  const aboutHeading = document.createElement("h1");
  aboutHeading.className = "heading";
  aboutHeading.textContent = "About";

  const aboutContent = document.createElement("p");
  aboutContent.className = "about-content";
  aboutContent.textContent = `At BigByte Burger, we're not just your ordinary burger joint – we're
  a culinary journey that combines the art of crafting mouthwatering
  burgers with a touch of digital innovation. Our story began with a
  passion for great food and a vision to create a unique dining
  experience that caters to both your taste buds and your tech-savvy
  lifestyle.`;

  aboutContainer.appendChild(aboutHeading);
  aboutContainer.appendChild(aboutContent);

  return aboutContainer;
};

const createContact = () => {
  const contactHeading = document.createElement("h1");
  contactHeading.className = "heading";
  contactHeading.textContent = "Contact";

  const contactContent = document.createElement("div");
  contactContent.className = "contact-content";

  contactContent.appendChild(contactHeading);

  const ulElement = document.createElement("ul");

  const list1 = document.createElement("li");
  list1.innerHTML = `<i class="fa-solid fa-phone"></i>+631234567890`;

  const list2 = document.createElement("li");
  list2.innerHTML = `<i class="fa-solid fa-envelope"></i>bigbyte.offical@example.com`;

  const list3 = document.createElement("li");
  list3.innerHTML = `<i class="fa-solid fa-location-dot"></i>Cavite, Philippines`;

  ulElement.appendChild(list1);
  ulElement.appendChild(list2);
  ulElement.appendChild(list3);

  contactContent.appendChild(ulElement);

  return contactContent;
};

const loadAbout = () => {
  const mainElement = document.createElement("main");
  mainElement.className = "container about-page";

  mainElement.appendChild(createAbout());
  mainElement.appendChild(createContact());

  return mainElement;
};

export default loadAbout;
