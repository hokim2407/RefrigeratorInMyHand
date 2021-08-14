import React from "react";
import "./App.css";

var savedItem = window.localStorage.getItem("refrigerator");
savedItem = savedItem ? JSON.parse(savedItem) : {};

function Result() {
  var itemList;
  var today = new Date();

  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);

  let imminentDate = year + "-" + month + "-" + day;
  console.log(imminentDate);

  var checkType = window.location.href.substr(
    window.location.href.lastIndexOf("=") + 1
  );

  var status = [0, 0, 0];
  var existence = "있습니다";

  for (var key in savedItem) {
    var item = savedItem[key];
    var lifeDate = new Date(item.date);
    var dateDiff = Math.ceil(
      (lifeDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
    );
    var index;
    if (item.type === "상온") index = 0;
    else if (item.type === "냉장") index = 1;
    else index = 2;

    if (dateDiff > 7 || item.date === "") continue;
    if (dateDiff >= 0 && status[index] === 0) status[index] = 1;
    else if (dateDiff < 0) status[index] = 2;
  }

  var image = [0, 0, 0];
  status.forEach((state, i) => {
    if (state === 0) {
      image[i] = "./icon/imo-good.png";
    } else if (state === 1) image[i] = "./icon/imo-imminent.png";
    else {
      image[i] = "./icon/imo-end.png";
    }
    if (image[checkType] === "./icon/imo-good.png") existence = "없습니다";
  });

  if (checkType == 0) var Type = "상온";
  else if (checkType == 1) Type = "냉장";
  else Type = "냉동";

  console.log(Type);
  window.addEventListener("load", () => {
    itemList = document.getElementById("item-list");
    for (const key in savedItem) {
      const item = savedItem[key];
      console.log(Type);
      if (item.type === Type)
        if (item.date < imminentDate) {
          itemList.insertAdjacentHTML(
            "beforeend",
            `<li id="li-${key}" class="list">
          <div class="list-text">${item.name}</div>
          <div class="list-text">~${item.date}</div>
        </li>`
          );
        }
    }
  });

  window.addEventListener("load", () => {
    itemList = document.getElementById("item-lists");
    for (const key in savedItem) {
      const item = savedItem[key];
      if (item.type === Type)
        itemList.insertAdjacentHTML(
          "beforeend",
          `<li id="li-${key}" class="list">
          <div class="list-text">${item.name}</div>
          <div class="list-text">~${item.date}</div>
        </li>`
        );
    }
  });

  return <div className="top-block"></div>;
}

export default Result;
