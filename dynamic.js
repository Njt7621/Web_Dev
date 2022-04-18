let btn = document.getElementById('button')

let hiddenBox = document.getElementById('hiddenBox')
let shownBox = document.getElementById('shownBox')

let fontFam = document.getElementById('font')
let colorFam = document.getElementById('#colors')

function toggleButton() {
   if (btn.innerText == "More..."){
       hiddenBox.style.display = "block";
       btn.innerText = "Less...";
   }else{
       btn.innerText = "More...";
       hiddenBox.style.display = "none";
   }
 }

function fontChange() {
   let font = fontFam.options[fontFam.selectedIndex].value;
   if (font == "Gothic"){
       font = "Century Gothic, CenturyGothic, AppleGothic, sans-serif"
   }
   hiddenBox.style.fontFamily = font;
   shownBox.style.fontFamily = font;
   }
   
function colorChange(x) {
   let color = x.value;
   hiddenBox.style.color = color;
   shownBox.style.color = color;
   }
