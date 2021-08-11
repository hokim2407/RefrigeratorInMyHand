import React from "react";
import "./App.css";

function MainPage() {
  return (
    <div className="top-block">
      <div className="background main-background">
        <div className="dark-background">
          <div style={{ paddingTop: "20vh" }}>
            <p className="h3 h1">내손안에</p>
            <p className="h1">냉장고</p>
            <p className="h4">
              오늘 저녁은 <b>카레</b> 어떠세요?
            </p>
            <button
              className="green-button"
              style={{ marginTop: "15vh" }}
              onClick={() => {
                window.location.href = "/saveEnv";
              }}
            >
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
