var carouselButtons = document.getElementsByClassName('carousel__pics')
var limaraItems = document.getElementsByClassName('tst__limara')
for (var i = 0; i<carouselButtons.length; i++) {
   carouselButtons[i].addEventListener('click', switchTestimonial)
   if (i>0) {
      limaraItems[i].style.display = 'none'
   }
}

function switchTestimonial (event) {
   var button = event.target
   var currentButton = document.getElementsByClassName('current')
   currentButton[0].classList.remove('current')
   button.classList.add('current')
   var currentButtonNum = getNumberCurrentButton()
   for (var i = 0; i< limaraItems.length; i++) {
      if (i === currentButtonNum) {
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
