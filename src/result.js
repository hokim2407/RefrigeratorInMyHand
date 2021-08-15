import React from "react";
import "./App.css";
import checkStatus from "./checkStatus";

function Result() {
  var checkType = parseInt(
    window.location.href.substr(window.location.href.lastIndexOf("=") + 1)
  );

  if (checkType === 0) var Type = "상온";
  else if (checkType === 1) Type = "냉장";
  else Type = "냉동";

  checkStatus();

  return (
    <div className="top-block">
      <div className="background fill-background">
        <div
          className="dark-background vertical-flex-box "
          style={{ justifyContent: "normal" }}
        >
          <div
            id="title-text"
            style={{
              position: "relative",
              align: "left",
            }}
          >
            <p
              className="pb1"
              style={{
                color: "white",
                position: "relative",
              }}
            >
              {Type}
            </p>
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
  );
}

export default Result;
