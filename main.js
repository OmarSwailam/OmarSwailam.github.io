document.addEventListener("DOMContentLoaded", function () {
  // SPA
  const homeButton = document.querySelector("#home-button");
  const projectsButton = document.querySelector("#projects-button");
  const aboutButton = document.querySelector("#about-button");

  const homePage = document.querySelector("#home-page");
  const projectsPage = document.querySelector("#projects-page");
  const aboutPage = document.querySelector("#about-page");

  function hideAllPages() {
    homePage.style.display = "none";
    projectsPage.style.display = "none";
    aboutPage.style.display = "none";
  }

  function showPage(page) {
    hideAllPages();
    page.style.display = "block";
  }

  function removeActiveClass() {
    homeButton.classList.remove("active");
    projectsButton.classList.remove("active");
    aboutButton.classList.remove("active");
  }

  homeButton.addEventListener("click", (event) => {
    event.preventDefault();
    removeActiveClass();
    homeButton.classList.add("active");
    showPage(homePage);
  });

  projectsButton.addEventListener("click", (event) => {
    event.preventDefault();
    removeActiveClass();
    projectsButton.classList.add("active");
    showPage(projectsPage);
  });

  aboutButton.addEventListener("click", (event) => {
    event.preventDefault();
    removeActiveClass();
    aboutButton.classList.add("active");
    showPage(aboutPage);
  });

  showPage(homePage);
  homeButton.classList.add("active");

  // toggle theme
  const toggleButton = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const root = document.documentElement;

  toggleButton.addEventListener("click", () => {
    if (root.classList.contains("light-mode")) {
      root.classList.remove("light-mode");
      themeIcon.classList.remove("bi-sun-fill");
      themeIcon.classList.add("bi-moon-fill");
    } else {
      root.classList.add("light-mode");
      themeIcon.classList.remove("bi-moon-fill");
      themeIcon.classList.add("bi-sun-fill");
    }
  });

  // Text animation

  // List of sentences
  var _CONTENT = [
    "Backend developer",
    "DevOps enthusiast",
    "Pythonist",
    "Problem solver",
  ];

  // Current sentence being processed
  var _PART = 0;

  // Character number of the current sentence being processed
  var _PART_INDEX = 0;

  // Holds the handle returned from setInterval
  var _INTERVAL_VAL;

  // Element that holds the text
  var _ELEMENT = document.querySelector("#text");

  // Cursor element
  var _CURSOR = document.querySelector("#cursor");

  // Implements typing effect
  function Type() {
    // Get substring with 1 characater added
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === _CONTENT[_PART]) {
      clearInterval(_INTERVAL_VAL);
      setTimeout(function () {
        _INTERVAL_VAL = setInterval(Delete, 70);
      }, 1500);
    }
  }

  // Implements deleting effect
  function Delete() {
    // Get substring with 1 characater deleted
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (text === "") {
      clearInterval(_INTERVAL_VAL);

      // If current sentence was last then display the first one, else move to the next
      if (_PART == _CONTENT.length - 1) _PART = 0;
      else _PART++;

      _PART_INDEX = 0;

      // Start to display the next sentence after some time
      setTimeout(function () {
        _INTERVAL_VAL = setInterval(Type, 150);
      }, 200);
    }
  }

  // Start the typing effect on load
  if (_ELEMENT) {
    _INTERVAL_VAL = setInterval(Type, 100);
  }
});
