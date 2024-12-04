const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function palindrome() {
  if (!textInput.value.trim()) {
    alert("Please input a value");
    return;
  }

  const cleanString = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedString = cleanString.split('').reverse().join('');

  result.innerText = `${textInput.value} is ${cleanString === reversedString ? 'a' : 'not a'} palindrome`;
}

checkBtn.addEventListener("click", palindrome);
