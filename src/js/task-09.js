// Ref
const textRef = document.querySelector(".color");
const btnRef = document.querySelector(".change-color");

// Functions
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBodyColor = () => {
  const colorRef = getRandomHexColor();
  textRef.textContent = colorRef;
  document.body.style.backgroundColor = colorRef;
};

// Listeners
btnRef.addEventListener("click", changeBodyColor);
