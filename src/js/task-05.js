// Refs
const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
console.dir(inputRef);

// Functions
const onInput = (event) => {
  if (inputRef.value === "") {
    return (outputRef.textContent = "Anonymus");
  }
  outputRef.textContent = inputRef.value.trim();
};

inputRef.addEventListener("input", onInput);
