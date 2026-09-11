let vierkant = document.querySelector("#vierkant");

vierkant.addEventListener("click", function () {
  vierkant.style.width = "250px";
  vierkant.style.backgroundColor = "#6666FF";
  vierkant.style.transform = "rotate(146deg)";
});

const button = document.getElementById("btn");
button.addEventListener("mouseover", function () {
  button.textContent = "love capybara's";
});

button.addEventListener("click", function () {
  if (button.textContent == "love") {
    button.textContent = "capybara's";
  } else {
    button.textContent = "natuurlijk";
  }
});
