const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"Ih serius nanti aku cari kamu ke Jakarta T_T", images:"images/cat-02.gif"},
  {text:"Coba pikir-pikir lagi 🥺", images:"images/cat-03.gif"},
  {text:"Ayo dong mauuu pliss ☹️", images:"images/cat-04.gif"},
  {text:"Kok Yusmita jahatt nolak gitu", images:"images/cat-05.gif"},
]
const ohyes = {text:"Hehehe tunggu ya di Jakarta nanti 😋<br> Happy Valentine Day Sayanggg!", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "YESS!!!"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'GAK!'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})