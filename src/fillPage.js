import React from "react";
import "./fillPage.css";

var savedItem = window.localStorage.getItem("refrigerator");
savedItem = savedItem ? JSON.parse(savedItem) : {};
var keyCount =
  parseInt(Object.keys(savedItem)[Object.keys(savedItem).length - 1]) + 1;
console.log(keyCount);

function FillPage() {
  var itemList;
  const addItem = () => {
    const name = document.getElementById("name").value;
    if (!name) {
      alert("식품 이름을 입력해주세요");
      return;
    }

    const date = document.getElementById("date").value;
    const type = document.getElementById("type").value;
    document.getElementById("name").value = null;
    document.getElementById("date").value = null;

    itemList.insertAdjacentHTML(
      "beforeend",
      `<li id="li-${keyCount}" class="list">
        <div class="list-text">${name}</div>
        <div class="list-text">${date}</div>
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
    if (window.confirm(`[${savedItem[key]?.name}] 식품을 삭제하시겠습니까?`)) {
      delete savedItem[key];
      window.localStorage.setItem("refrigerator", JSON.stringify(savedItem));
      document.getElementById(`li-${key}`)?.remove();
    }
  };

  window.addEventListener("load", () => {
    itemList = document.getElementById("item-list");

    for (const key in savedItem) {
      const item = savedItem[key];
      itemList.insertAdjacentHTML(
        "beforeend",
        `<li id="li-${key}" class="list">
          <div class="list-text">${item.name}</div>
          <div class="list-text">${item.date}</div>
        </li>`
      );
      itemList.lastChild.addEventListener("click", () => {
        removeItem(key);
      });
    }
  });

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
                placeholder="식품명을 입력해주세요"
              />
            </li>
            <li>
              <input
                id="date"
                type="date"
                placeholder="유통기한을 입력해주세요"
              />
            </li>
            <li>
              <select id="type" name="type">
                <option value="0">상온</option>
                <option value="1">냉장</option>
                <option value="2">냉동</option>
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
