import React from "react";
import "./App.css";
import "./choice.css"

function Choice() {
  return (
    <div className="top-block">
      <div className="background fill-background">
        <div className="dark-background vertical-flex-box ">
          <p className="h2" style={{ paddingTop: "10vh", marginTop: "0" }}>
            냉장고를 채워봅시다
          </p>
          <div>
            <div
              className="icon-image"
              style={{
                margin: "5vh 0",
                left: "50%",
                backgroundImage: 'url("./icon.png")',
              }}
            >
            </div>
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
        </div>
      </div>
    </div>
  );
}

export default Choice;
