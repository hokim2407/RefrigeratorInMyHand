import React from "react";
import "./App.css";

var savedItem = window.localStorage.getItem("refrigerator");
savedItem = savedItem ? JSON.parse(savedItem) : {};

function Result() {
  var itemList;
  var today = new Date();

  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + (today.getDate())).slice(-2);

  let imminentDate = year + '-' + month + '-' + day;
  console.log(imminentDate);

  var checkType = window.location.href.substr(
    window.location.href.lastIndexOf('=') + 1
  );

  if (checkType === 0)
    var Type = "상온";
  else if (checkType === 1)
    Type = "냉장";
  else
    Type = "냉동";

  var existence = '있습니다';
  window.addEventListener("load", () => {
    itemList = document.getElementById("item-list");
    for (const key in savedItem) {
      const item = savedItem[key];
      console.log(item.type);
      if (item.type === checkType)
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
      if (item.type === checkType)
        itemList.insertAdjacentHTML(
          "beforeend",
          `<li id="li-${key}" class="list">
          <div class="list-text">${item.name}</div>
          <div class="list-text">~${item.date}</div>
        </li>`
        );
    }
  });

  return (
    <div className="top-block">
      <div className="background fill-background">
        <div className="dark-background vertical-flex-box ">
        <div
          className="transparent-box"
          style={{ top: "0", height: "100%", padding: "0" }}
        >
          <div
            style={{
              position: "relative", align: "left",
            }}
          >
            <p className="pb1" style={{
              color: "white",
              position: "relative"
            }}>{Type}</p>
          </div>
          <div
            style={{
              paddingBottom: "3vw", textAlign: "left", position: "relative", align: "left", backgroundColor: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <div style={{}}>
              <img
                className="button-icon"
                src="./icon/imo-imminent.png"
                align="left"
                hight="30px"
                alt="아이콘"
              ></img>
              <p id="answer" style={{ marginBottom: "0", fontSize: "min(5vw, 4rem)", paddingBlockStart: "3vw", color: "white", textDecoration: "underline", textUnderlinePosition: "under" }}>
                유통기한 임박 제품이 {existence}</p>
              <ul >
                <li>
                  <ul
                    id="item-list"
                    style={{ marginBlockEnd: "0" }}
                  ></ul>
                </li>
              </ul>

            </div>
          </div>
          <div>
            <ul
              id="item-lists"
              style={{ padding: "3vh 0 ", marginBottom: "0" }}
            ></ul>

          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
