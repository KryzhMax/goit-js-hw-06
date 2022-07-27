// Ref
const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

// Func
const onGrow = (event) => {
  const { value } = event.target;
  textRef.style.fontSize = value + "px";
  console.dir(value);
};

// Listeners
inputRef.addEventListener("input", onGrow);
