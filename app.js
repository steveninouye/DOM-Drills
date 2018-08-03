document.addEventListener("DOMContentLoaded", () => {
  // starting list item number
  let listNum = 1;

  // list of random colors
  const colors = [
    "teal",
    "tomato",
    "peru",
    "azure",
    "moccasin",
    "lime",
    "wheat",
    "cyan",
    "navy",
    "violet",
    "indigo"
  ];

  // FUNCTION change element to random color
  const changeRdmColor = element => {
    let index = Math.floor(Math.random() * (colors.length - 1));
    element.style.color = colors[index];
  };

  // FUNCTION create a list item in ordered list
  const createListItem = () => {
    const item = document.createElement("li");
    const itemTxt = document.createTextNode(`this is list item ${listNum}`);
    item.appendChild(itemTxt);
    document.querySelector("ol").appendChild(item);

    // event listener listens for a single click on the list item and changes it to a random color
    item.addEventListener("click", () => changeRdmColor(item));
    // event listener listens for a double click and removes it from the DOM
    item.addEventListener("dblclick", () => {
      item.remove();
    });
    // increments listNum by 1 so it will keep track what number to write next
    listNum++;
  };

  // create div with class name 'header-container'
  let mainDiv = document.createElement("div");
  mainDiv.className = "header-container";

  // create h1 element with text 'This is an h1'
  let mainHeader = document.createElement("h1");
  let headerText = document.createTextNode("This is an h1");
  mainHeader.appendChild(headerText);

  // add h1 into main div
  mainDiv.appendChild(mainHeader);
  // add main div into the body
  document.body.appendChild(mainDiv);

  // create h2 element with text 'This is an h2' and add into main div
  let subHeader = document.createElement("h2");
  subHeader.innerText = "This is an h2";
  mainDiv.appendChild(subHeader);

  // add h3 - h6 element into main div with text 'This is an ___'
  for (let headNum = 3; headNum <= 6; headNum++) {
    let newHeader = document.createElement(`h${headNum}`);
    newHeader.innerText = `This is an h${headNum}`;
    mainDiv.appendChild(newHeader);
  }

  // add class name to match the element of each header
  for (let allHeadNum = 1; allHeadNum <= 6; allHeadNum++) {
    document.getElementsByTagName(
      `h${allHeadNum}`
    )[0].className = `h${allHeadNum}`;
  }

  // add an event listener to all header elements
  // event listener will listen for a double click and change it to a random color
  let childs = document.querySelector(".header-container").children;
  for (let idx = 0; idx < childs.length; idx++) {
    childs[idx].addEventListener("dblclick", () => changeRdmColor(childs[idx]));
  }

  // add an ordered list to the body
  const odrList = document.createElement("ol");
  document.body.appendChild(odrList);

  // adds an event listener to the button listening for a single click
  // when clicked, a new list item will appear in the ordered list
  document
    .querySelector(".addNewItemBtn")
    .addEventListener("click", createListItem);
});
