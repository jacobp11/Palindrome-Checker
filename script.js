const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const inputTrimmed = inputText.value.trim()
  const inputValue = inputTrimmed.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()



  if (inputValue === "") {
    alert("Please input a value");
    return;
  }

  const reversed = inputValue.split("").reverse().join("");

  if (inputValue === reversed) {
    result.textContent = `${inputTrimmed} is a palindrome`;
  } else {
    result.textContent = `${inputTrimmed} is not a palindrome`;
  }
});