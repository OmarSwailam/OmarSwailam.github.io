document.addEventListener("DOMContentLoaded", function () {
  # TODO: Single Page Application (SPA)
  
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
