const inputContainer = document.querySelector("input");
const rootElement = document.documentElement;

const lightTheme = {
  "--background-color": "#fff",
  "--text-color": "#1a1a1a",
  "--button-background-color": "#9b8afb",
};

const darkTheme = {
  "--background-color": "#1a1a1a",
  "--text-color": "#fff",
  "--button-background-color": "#5925dc",
};

inputContainer.addEventListener("change", function () {
  const isChecked = inputContainer.checked;
  /*if (isChecked) {
      changeTheme(darkTheme)
  } else {
      changeTheme(lightTheme)
  } */
  isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme);
});

function changeTheme(theme) {
  //ALteração
  /*console.log(theme)
  for (let prop in theme) {
    changeProperty(prop, theme[prop]);*/

  console.log(Object.entries(theme));
  for (let [property, value] of Object.entries(theme)) {
    changeProperty(property, value);
  }
}

function changeProperty(property, value) {
  rootElement.style.setProperty(property, value);
}
