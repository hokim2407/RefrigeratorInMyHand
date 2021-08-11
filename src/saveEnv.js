import React from "react";
import "./App.css";

function SaveEnv() {
  return (
    <div className="top-block">
      <div className="env-background background">
        <div
          className="dark-background item-middle-box"
          style={{ justifyContent: "flex-end" }}
        >
          <div
            style={{
              bottom: "7vh",
              position: "relative",
              marginRight: "5%",
            }}
          >
            <p className="h2">
              환경과 냉장고 <br />
              무슨 관련이 있을까요?
            </p>
          </div>
        </div>
        <div className="white-box">
          <p className="p1">
            낮은 온도에서 보관하면 상태가 오히려 <br />
            나빠지는 식재료가 있습니다. <br />
            냉장고에 지나치게 오래 보관하다가 <br />
            버리게 되는 식재료도 많습니다. <br />
            감자, 사과는 빛이 차단되면서도 통풍이 잘 되는 <br />
            뚜껑 달린 바구니에 함께 넣어 보관하면 <br />
            오래 먹을 수 있습니다.
            <br />
            <br />
            4인 가족 기준 음식물 쓰레기를 20%만 줄여도 <br />
            연간 온실가스 144㎾h를 절약할 수 있습니다. <br />
            <br />
            이는 냉장고 3.3개월을 사용할 수 있는 <br />
            에너지입니다.
          </p>
          <button
            className="green-button"
            onClick={() => {
              window.location.href = "/checkMine";
            }}
          >
            NAXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default SaveEnv;
