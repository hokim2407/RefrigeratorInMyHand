import React from "react";
import "./App.css";
import "./choice.css"

function Choice() {
  return (
    <div className="background minor-background">
      <div className="dark-backgound item-middle-box">
        <div
          className="transparent-box"
          style={{ top: "0", height: "100%", padding: "0" }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <p className="pb1" style={{ color: "white" }}>냉장고를 채워봅시다!</p>
          </div>
          <div
            className="icon-image"
            style={{
              margin: "5vh 0",
              backgroundImage: 'url("./icon.png")',
            }}
          >
          </div>
          <div className="item-flex-box">
            <ul
              style={{
                marginTop: "4vh",
              }}
            >
              <li>
                <div className="item-flex-box">
                  <button
                    className="green-button"
                    onClick={() => {
                      window.location.href = "/choice";
                    }}
                  >
                    바코드
            </button>
                </div>
              </li>

              <li>
                <div className="item-flex-box">
                  <button
                    className="transparent-button"
                    onClick={() => {
                      window.location.href = "/fill";
                    }}
                  >
                    직접입력하기
            </button>
                </div>
              </li>
            </ul>
          </div>
        </div>\
      </div>
    </div>
  );
}

export default Choice;
