document.addEventListener("DOMContentLoaded", () => {
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

  const changeRdmColor = element => {
    let index = Math.floor(Math.random() * (colors.length - 1));
    element.style.color = colors[index];
  };

  const createListItem = num => {
    const item = document.createElement("li");
    const itemTxt = document.createTextNode(`this is list item ${listNum}`);
    item.appendChild(itemTxt);
    document.querySelector("ol").appendChild(item);
    item.addEventListener("click", () => changeRdmColor(item));
    item.addEventListener("dblclick", () => {
      item.remove();
    });
    listNum++;
  };

  let mainDiv = document.createElement("div");
  mainDiv.className = "header-container";

  let mainHeader = document.createElement("h1");
  let headerText = document.createTextNode("This is an h1");
  mainHeader.appendChild(headerText);
  mainDiv.appendChild(mainHeader);
  document.body.appendChild(mainDiv);

  let subHeader = document.createElement("h2");
  subHeader.innerText = "This is an h2";
  mainDiv.appendChild(subHeader);

  for (let headNum = 3; headNum <= 6; headNum++) {
    let newHeader = document.createElement(`h${headNum}`);
    newHeader.innerText = `This is an h${headNum}`;
    mainDiv.appendChild(newHeader);
  }

  for (let allHeadNum = 1; allHeadNum <= 6; allHeadNum++) {
    document.getElementsByTagName(
      `h${allHeadNum}`
    )[0].className = `h${allHeadNum}`;
  }

  let childs = document.querySelector(".header-container").children;
  for (let idx = 0; idx < childs.length; idx++) {
    childs[idx].addEventListener("dblclick", () => changeRdmColor(childs[idx]));
  }

  const odrList = document.createElement("ol");
  document.body.appendChild(odrList);
  let listNum = 1;

  document
    .querySelector(".addNewItemBtn")
    .addEventListener("click", createListItem);
});
