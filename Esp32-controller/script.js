// OPEN CONTROL PAGE
function openPage(pageId) {
  document.getElementById("home").style.display = "none";

  let pages = document.querySelectorAll(".page");

  pages.forEach(function (page) {
    page.style.display = "none";
  });

  document.getElementById(pageId).style.display = "block";

  window.scrollTo(0, 0);
}

// GO BACK TO HOME
function goHome() {
  let pages = document.querySelectorAll(".page");

  pages.forEach(function (page) {
    page.style.display = "none";
  });

  document.getElementById("home").style.display = "block";

  window.scrollTo(0, 0);
}

// CHANGE LIGHT AND FAN STATUS
function changeStatus(elementId, state) {
  let name = elementId === "lightStatus" ? "Light" : "Fan";

  document.getElementById(elementId).innerHTML = name + " Status: " + state;
}
