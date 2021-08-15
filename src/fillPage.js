import React from "react";
import "./fillPage.css";
import addButtonEnterEvent from "./ButtonEnter";
import shelflife from "./shelflife.json";

function getCalculDate(name, type) {
  try {
    for (var key in shelflife) {
      if (name.includes(key)) {
        const itemShelfLife = shelflife[key][type];
        if (itemShelfLife) {
          const today = new Date();
          today.setFullYear(today.getFullYear() + itemShelfLife[0]);
          today.setMonth(today.getMonth() + itemShelfLife[1]);
          today.setDate(today.getDate() + itemShelfLife[2]);
          return today.toISOString().slice(0, 10);
        }
      }
      //shelflifeArray.push(key);
    }
  } catch (e) {
    console.log(e);
    return "";
  }
  return "";
}

function FillPage() {
  var savedItem = window.localStorage.getItem("refrigerator");
  savedItem = savedItem ? JSON.parse(savedItem) : {};
  var keyCount =
    parseInt(Object.keys(savedItem)[Object.keys(savedItem).length - 1]) + 1;
  keyCount = isNaN(keyCount) ? 0 : keyCount;
  var itemList;
  const addItem = () => {
    const name = document.getElementById("name").value;
    if (!name) {
      alert("제품 이름을 입력해주세요");

      return;
    }

    var date = document.getElementById("date").value;
    const type = document.getElementById("type").value;
    document.getElementById("name").value = null;
    document.getElementById("date").value = null;

    if (!date || date === "") {
      date = getCalculDate(name, type);
    }
    var imgSrc;
    if (type === "상온") imgSrc = "./icon/sun.png";
    else if (type === "냉장") imgSrc = "./icon/water.png";
    else imgSrc = "./icon/ice.png";

    itemList.insertAdjacentHTML(
      "beforeend",
      `<li id="li-${keyCount}" class="list">
        <div class="list-text">${name}</div>
        <div class="list-text"><img 
         class="life-icon"
        src="${imgSrc}"
        
        alt="아이콘"></img>${date}</div>
      </li>`
    );
    itemList.lastChild.addEventListener("click", (e) => {
      removeItem(parseInt(e.target.id.split("-")[1]));
    });
    savedItem[keyCount++] = { name, date, type };
    window.localStorage.setItem("refrigerator", JSON.stringify(savedItem));
  };

  const removeItem = (key) => {
    if (!savedItem[key]) {
      console.error(`${key} is not exist`);
      return;
    }
    if (window.confirm(`[${savedItem[key]?.name}] 제품을 삭제하시겠습니까?`)) {
      delete savedItem[key];
      window.localStorage.setItem("refrigerator", JSON.stringify(savedItem));
      document.getElementById(`li-${key}`)?.remove();
      document.getElementById("name").focus();
    }
  };

  window.addEventListener("load", () => {
    itemList = document.getElementById("item-list");

    for (const key in savedItem) {
      const item = savedItem[key];
      var imgSrc;
      if (item.type === "상온") imgSrc = "./icon/sun.png";
      else if (item.type === "냉장") imgSrc = "./icon/water.png";
      else imgSrc = "./icon/ice.png";
      itemList.insertAdjacentHTML(
        "beforeend",
        `<li id="li-${key}" class="list">
          <div class="list-text">${item.name}</div>
          <div class="list-text"><img 
          class="life-icon"
         src="${imgSrc}"
         
         alt="아이콘"></img>${item.date}</div>
        </li>`
      );
      itemList.lastChild.addEventListener("click", () => {
        removeItem(key);
      });
    }
  });

  addButtonEnterEvent();

  return (
    <div className="top-block">
      <div className="background fill-background">
        <div className="dark-background vertical-flex-box ">
          <p className="h2" style={{ paddingTop: "10vh", marginTop: "0" }}>
            냉장고를 채워봅시다
          </p>
          <ul style={{ padding: "3vh" }}>
            <li style={{ marginTop: "0" }}>
              <input
                id="name"
                type="text"
                required
                placeholder="제품명을 입력해주세요"
              />
            </li>
            <li>
              <input
                id="date"
                type="text"
                onFocus={(e) => {
                  e.target.type = "date";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
                placeholder="유통기한을 입력해주세요"
              />
            </li>
            <li>
              <select id="type" name="type">
                <option value="상온">상온</option>
                <option value="냉장">냉장</option>
                <option value="냉동">냉동</option>
              </select>
            </li>
          </ul>
          <div className="item-flex-box">
            <div>
              <button
                className="green-button button-margin"
                style={{ margin: "1vh 0" }}
                onClick={addItem}
              >
                추가하기
              </button>
            </div>
            <div>
              <button
                className="white-border-button  button-margin"
                style={{ margin: "1vh 0" }}
                onClick={() => {
                  window.location.href = "/checkMine";
                }}
              >
                완료
              </button>
            </div>
          </div>
          <ul
            id="item-list"
            style={{ padding: "3vh 0 ", marginBottom: "0" }}
          ></ul>
        </div>
      </div>
    </div>
  );
}

export default FillPage;
