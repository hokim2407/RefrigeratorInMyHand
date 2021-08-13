import React from "react";
import "./App.css";
import axios from "axios";

function chageMenu(title, href) {
  const text = document.getElementsByClassName("h4")[0];
  if (!title) {
    text.innerHTML = `오늘 저녁은 <br /><b>집밥</b><br /> 어떠세요?`;
  } else if (href) {
    text.innerHTML = `오늘 저녁은 <br /><a href="${href}"><b>${title}</b></a> <br /> 어떠세요?`;
  } else {
    text.innerHTML = `오늘 저녁은 <br /><b>${title}</b><br /> 어떠세요?`;
  }
}

function MainPage() {
  const keyword = "계란";
  axios
    .get(`api/recipe/${keyword}`, {
      responseType: "json",
    })
    .then((res) => {
      console.log(res.data);

      if (!res.data.title) throw new Error("no data");
      if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", () =>
          chageMenu(res.data.title, res.data.href)
        );
      } else chageMenu(res.data.title, res.data.href);
    })
    .catch((e) => {
      console.log(e);
      if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", () =>
          chageMenu(null, null)
        );
      } else chageMenu(null, null);
    });
  return (
    <div className="top-block">
      <div className="background main-background">

        <div
          className="main-dark-background"
          style={{ flexDirection: "column" }}
        >
          <div className="item-flex-box" style={{ paddingTop: "20vh" }}>
            <p className="h3 h1">내손안에</p>
            <p className="h1">냉장고</p>
          </div>
          <p className="h4 item-flex-box">
            오늘 저녁은 <br />
            <b>...</b>
            <br /> 어떠세요?
          </p>
          <div className="item-flex-box">
            <button
              className="green-button"
              style={{ margin: "5vh 0" }}
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
