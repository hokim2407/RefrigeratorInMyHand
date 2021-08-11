import React from "react";
import "./App.css";
import axios from "axios";

function chageMenu(title, href) {
  const text = document.getElementsByClassName("h4")[0];
  text.innerHTML = `오늘 저녁은  <br /><a href="${href}"><b>${title}</b></a> <br /> 어떠세요?`;
  console.log(document.getElementsByClassName("h4")[0].innerHTML);
}

function MainPage() {
  const keyword = "당근";
  axios
    .get(`http://localhost:7071/api/recipe/${keyword}`, {
      responseType: "json",
    })
    .then((res) => {
      console.log(res.data);
      if (!res.data.title) return;
      if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", () =>
          chageMenu(res.data.title, res.data.href)
        );
      } else chageMenu(res.data.title, res.data.href);
    });
  return (
    <div className="top-block">
      <div className="background main-background">
        <div className="dark-background">
          <div style={{ paddingTop: "20vh" }}>
            <p className="h3 h1">내손안에</p>
            <p className="h1">냉장고</p>
            <p className="h4">
              오늘 저녁은 <br />
              <b>집밥</b>
              <br /> 어떠세요?
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
