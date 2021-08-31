window.onload = () => {
  var expander = document.querySelectorAll("#item");
  var expandedList = document.querySelector("#expandedList");
  var expandIcon = document.querySelector(".expand-icon");
  var SideMenu = document.querySelector(".sideMenu");
  var CloseBtn = document.querySelector("#close");
  var SideItems = document.querySelectorAll(".sideItem");

  console.log(SideItems);
  expander[1].onclick = () => {
    expandedList.classList.toggle("showList");
    expandIcon.classList.toggle("rotate");
  };
  SideItems.forEach((sideItem) => {
    sideItem.addEventListener("click", function () {
      SideItems.forEach((si) => {
        if (si.classList.contains("activeSideItem")) {
          si.classList.toggle("activeSideItem");
        }
      });
      sideItem.classList.toggle("activeSideItem");
      SideMenu.classList.add("showSideMenu");
    });
  });
  CloseBtn.onclick = () => {
    SideMenu.classList.remove("showSideMenu");
    SideItems.forEach((sideItem) => {
      sideItem.classList.remove("activeSideItem");
    });
  };
};
