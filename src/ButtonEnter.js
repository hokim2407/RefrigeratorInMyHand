function addButtonEnterEvent() {
  window.addEventListener("load", () => {
    const buttons = document.getElementsByTagName("button");
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
}
export default addButtonEnterEvent;
