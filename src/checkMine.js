import React from "react";
import "./App.css";

function CheckMine() {
  var savedItem = window.localStorage.getItem("refrigerator");
  savedItem = savedItem ? JSON.parse(savedItem) : {};
  var status = [0, 0, 0];
  var today = new Date();
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
    if (state === 0) image[i] = "./icon/imo-good.png";
    else if (state === 1) image[i] = "./icon/imo-imminent.png";
    else image[i] = "./icon/imo-end.png";
  });

  window.addEventListener("load", () => {
    const buttons = document.getElementsByClassName(" button-image");
    Array.from(buttons).forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        btn.className = `${btn.className.toString()} button-click`;
        console.log("enter");
      });

      btn.addEventListener("mouseleave", () => {
        const className = btn.className.toString();
        if (className.indexOf(" button-click") !== -1)
          btn.className = className.substring(
            0,
            className.indexOf(" button-click")
          );
      });

      btn.addEventListener("mousedown", () => {
        const className = btn.className.toString();
        if (className.indexOf(" button-click") !== -1)
          btn.className = className.substring(
            0,
            className.indexOf(" button-click")
          );
      });
    });
  });

  return (
    <div className="top-block item-middle-box">
      <div
        className="white-box"
        style={{ top: "0", minHeight: "75vh", padding: "0" }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <p className="pb1">나의 냉장고를 확인해봅시다!</p>
        </div>

        <ul
          style={{
            marginTop: "4vh",
          }}
        >
          <li>
            <div
              className="button-image"
              style={{
                backgroundImage: 'url("./buttonImage/basil.jpg")',
              }}
            >
              <div
                className="dark-background"
                style={{
                  borderRadius: "2rem",
                }}
              >
                <button
                  className="image-button"
                  onClick={() => {
                    window.location.href = "/result?index=" + 0;
                  }}
                >
                  <p className="h2 button-text">상온</p>
                  <img
                    className="button-icon"
                    src={`${image[0]}`}
                    alt="아이콘"
                  ></img>
                </button>
              </div>
            </div>
          </li>

          <li>
            <div
              className="button-image"
              style={{
                backgroundImage: 'url("./buttonImage/spaghetti.jpg")',
              }}
            >
              <div
                className="dark-background"
                style={{
                  borderRadius: "2rem",
                }}
              >
                <button
                  className="image-button"
                  onClick={() => {
                    window.location.href = "/result?index=" + 1;
                  }}
                >
                  <p className="h2 button-text">냉장</p>
                  <img
                    className="button-icon"
                    src={`${image[1]}`}
                    alt="아이콘"
                  ></img>
                </button>
              </div>
            </div>
          </li>

          <li>
            <div
              className="button-image"
              style={{
                backgroundImage: 'url("./buttonImage/ice-cream.jpg")',
              }}
            >
              <div
                className="dark-background"
                style={{
                  borderRadius: "2rem",
                }}
              >
                <button
                  className="image-button"
                  onClick={() => {
                    window.location.href = "/result?index=" + 2;
                  }}
                >
                  <p className="h2 button-text">냉동</p>
                  <img
                    className="button-icon"
                    src={`${image[2]}`}
                    alt="아이콘"
                  ></img>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CheckMine;
