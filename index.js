
const charSmall = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let characters = charSmall
const charBig = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charSpec = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const pass1 = document.getElementById("pass1")
const pass2 = document.getElementById("pass2")
let big = document.getElementById("big")
let num = document.getElementById("num")
let spec = document.getElementById("spec")
const genBtn = document.getElementById("gen_btn")
let passwordLength = [8]

function getRangeValue() {
    passwordLength = ""
    let sliderValue = document.getElementById("customRange1").value;
    document.getElementById("rangeValue").innerHTML = sliderValue;
    passwordLength = sliderValue
}

function addChar() {
    if (big.checked === true && num.checked === true && spec.checked === true) {
        characters = charSmall.concat(charBig, charNum, charSpec)
    } else if (big.checked === true && num.checked === true && spec.checked === false) {
        characters = charSmall.concat(charBig, charNum)
    } else if (big.checked === true && num.checked === false && spec.checked === true) {
        characters = charSmall.concat(charBig, charSpec)
    } else if (big.checked === false && num.checked === true && spec.checked === true) {
        characters = charSmall.concat(charNum, charSpec)
    } else if (big.checked === true && num.checked === false && spec.checked === false) {
        characters = charSmall.concat(charBig)
    } else if (big.checked === false && num.checked === true && spec.checked === false) {
        characters = charSmall.concat(charNum)
    } else if (big.checked === false && num.checked === false && spec.checked === true) {
        characters = charSmall.concat(charSpec)
    } else {
        characters = charSmall
    }
}

function genPass() {
    pass = ""
    for (let i = 0; i < passwordLength; i++) {
        randomIndex = Math.floor ( Math.random() * characters.length)
        pass += characters[randomIndex]
    }
    return pass
}

genBtn.addEventListener("click", function() {
    pass1.textContent = genPass()
    pass2.textContent = genPass()
})

pass1.addEventListener("click", function() {
  const pass1 = document.getElementById("pass1").innerText
  const el = document.createElement("textarea")
  el.value = pass1
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  alert(`Password copied to clipboard!`);
})

pass2.addEventListener("click", function() {
  const pass2 = document.getElementById("pass2").innerText
  const el = document.createElement("textarea")
  el.value = pass2
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  alert(`Password copied to clipboard!`);
})
