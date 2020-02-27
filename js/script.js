var carouselButtons = document.getElementsByClassName('carousel__pics')
var limaraItems = document.getElementsByClassName('tst__limara')
for (var i = 0; i<carouselButtons.length; i++) {
   carouselButtons[i].addEventListener('click', (event) => {
      switchTestimonialClicked(event), 
      currentIndex = getNumberCurrentButton()
   })
   if (i>0) {
      limaraItems[i].style.display = 'none'
   }
}

setInterval(switchTesimonialAuto, 2000)
var currentIndex = 0

function switchTestimonialClicked (event) {
   var button = event.target
   switchCurrentButton(button)
   switchCurrentItem()
}

function switchTesimonialAuto () {
   var button = carouselButtons[currentIndex]
   switchCurrentButton(button)
   switchCurrentItem()
   if (currentIndex >= carouselButtons.length-1) {
      currentIndex = 0
   }  else {
      currentIndex = currentIndex + 1 
   }
}

// меняет текущий "квадратик" снизу блока, добавляя ему класс current
function switchCurrentButton (button) {
   var currentButton = document.getElementsByClassName('current')
   currentButton[0].classList.remove('current')
   button.classList.add('current')
}

// меняет текущий блок в зависимости от текущего "квадратика", т.е синхронизирует их
function switchCurrentItem () {
   for (var i = 0; i< limaraItems.length; i++) {
      if (i === getNumberCurrentButton()) {
         limaraItems[i].style.display = 'flex'
      }
      else {
         limaraItems[i].style.display = 'none'
      }
   }
}

function getNumberCurrentButton() {
   for (var i = 0; i < carouselButtons.length; i++) {
      if (carouselButtons[i].classList.contains('current')) {
         return i
      }
   }
}
