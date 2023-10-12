//javascript

let rangeValue = document.getElementById("rangeValue")
let customRange1 = document.getElementById("customRange1")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "%", "^", "&", "*", "(", ")", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let newRangeValue = [8]


// Values from range
function getRangeValue() {
    newRangeValue = ""
    let sliderValue = document.getElementById("customRange1").value;
    document.getElementById("rangeValue").innerHTML = sliderValue;
    newRangeValue = sliderValue
}

// Password generator
 function genPass() {
        password = ""
        for (let i = 0; i < newRangeValue; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length)
        password += chars[randomIndex]
    }
   return password
}

// Password to buttons
gen.addEventListener("click", function getPasses() {
    btn1.textContent = genPass()
    btn2.textContent = genPass()
    btn3.textContent = genPass()
    btn4.textContent = genPass()
})

// Copy to clipbord buttons

function copy1() {
  const element1 = document.querySelector('#btn1');
  const storage1 = document.createElement('textarea');
  storage1.value = element1.innerHTML;
  element1.appendChild(storage1);
  storage1.select();
  storage1.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element1.removeChild(storage1);
  alert(`Password copied to clipboard!`);
}

function copy2() {
  const element1 = document.querySelector('#btn2');
  const storage1 = document.createElement('textarea');
  storage1.value = element1.innerHTML;
  element1.appendChild(storage1);
  storage1.select();
  storage1.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element1.removeChild(storage1);
  alert(`Password copied to clipboard!`);
}

function copy3() {
  const element1 = document.querySelector('#btn3');
  const storage1 = document.createElement('textarea');
  storage1.value = element1.innerHTML;
  element1.appendChild(storage1);
  storage1.select();
  storage1.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element1.removeChild(storage1);
  alert(`Password copied to clipboard!`);
}

function copy4() {
  const element1 = document.querySelector('#btn4');
  const storage1 = document.createElement('textarea');
  storage1.value = element1.innerHTML;
  element1.appendChild(storage1);
  storage1.select();
  storage1.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element1.removeChild(storage1);
  alert(`Password copied to clipboard!`);
}

// Enable buttons for copy

gen.addEventListener("click", function enableBnt() {
  btn1.removeAttribute('disabled');
  btn2.removeAttribute('disabled');
  btn3.removeAttribute('disabled');
  btn4.removeAttribute('disabled');
})