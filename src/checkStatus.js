function addCheckBlock(imgSrc, preElemId, text, id) {
  document.getElementById(preElemId).insertAdjacentHTML(
    "afterend",
    ` <div
    id="item-block-${id}"
      class="life-block"
    >
      <div>
        <div
          style="
            align-items: center;
            display: flex;
            margin: 1rem;
            position: relative;
            height: 8rem;
          "
        >
          <img
            class="button-icon"
            src="${imgSrc}"
            style="
              float: left;
              margin: 0 3vw;
              min-height: 13px;"
            
            alt="아이콘"
          ></img>
          <p
            id="answer"
            class="h2 button-text"
            style="
              color: white;
              align: middle;
              text-decoration: underline;
              text-underline-position: under;
            "
          >
            ${text}
          </p>
        </div>
        <ul>
          <li
            style="
              margin-top: 1rem
            "
          >
            <ul id="item-list-${id}" style=" marginBlockEnd: 0 "></ul>
          </li>
        </ul>
      </div>
    </div>`
  );
}

function checkStatus() {
  var savedItem = window.localStorage.getItem("refrigerator");
  savedItem = savedItem ? JSON.parse(savedItem) : {};

  var today = new Date();

  var checkType = parseInt(
    window.location.href.substr(window.location.href.lastIndexOf("=") + 1)
  );

  var status = [0, 0, 0];

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

  if (checkType === 0) var Type = "상온";
  else if (checkType === 1) Type = "냉장";
  else Type = "냉동";

  console.log(Type);
  window.addEventListener("load", () => {
    addCheckBlock(
      "./icon/imo-good.png",
      "title-text",
      "유통기한 임박 제품이 없습니다",
      0
    );
    addCheckBlock(
      "./icon/imo-end.png",
      "item-block-0",
      "유통기한이 지난 제품이 있습니다",
      1
    );
    addCheckBlock(
      "./icon/imo-imminent.png",
      "item-block-1",
      "유통기한 임박 제품이 있습니다",
      2
    );

    const itemList = [];
    itemList.push(document.getElementById("item-lists"));
    itemList.push(document.getElementById("item-list-1"));
    itemList.push(document.getElementById("item-list-2"));

    var count_imm = 0;
    var count_end = 0;
    for (const key in savedItem) {
      const item = savedItem[key];
      console.log(Type);
      var index = 0;
      var lifeDate = new Date(item.date);
      var dateDiff = Math.ceil(
        (lifeDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
      );
      if (item.type === Type) {
        if (dateDiff < 0) {
          index = 1;
          count_end++;
        } else if (dateDiff < 7) {
          index = 2;
          count_imm++;
        }

        itemList[index].insertAdjacentHTML(
          "beforeend",
          `<li id="li-${key}" class="list-white"  >
          <div class="list-text">&middot ${item.name}</div>
          <div class="list-text">~${item.date}</div>
          </li>`
        );
      }
    }

    if (count_imm === 0) {
      document.getElementById("item-block-2").className += " hide";
    }
    if (count_end === 0) {
      document.getElementById("item-block-1").className += " hide";
    }
    if (count_end + count_imm !== 0) {
      console.log(document.getElementById("item-list-0"));
      document.getElementById("item-block-0").className += " hide";
    }
  });
}

export default checkStatus;
//
