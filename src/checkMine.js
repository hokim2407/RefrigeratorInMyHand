import React from "react";
import "./App.css";

function CheckMine() {
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
        style={{ top: "0", height: "100%", padding: "0" }}
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
                    window.location.href = "/result?index="+0;
                  }}
                >
                  <p className="h2 button-text">상온</p>
                  <img
                    className="button-icon"
                    src="./icon/imo-good.png"
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
                    window.location.href = "/result?index="+1;
                  }}
                >
                  <p className="h2 button-text">냉장</p>
                  <img
                    className="button-icon"
                    src="./icon/imo-good.png"
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
                    window.location.href = "/result?index="+2;
                  }}
                >
                  <p className="h2 button-text">냉동</p>
                  <img
                    className="button-icon"
                    src="./icon/imo-good.png"
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
