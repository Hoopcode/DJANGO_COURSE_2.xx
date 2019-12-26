//Let's explore some events samples!

var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

// Hover (mouseover and mouseout)
headOne.addEventListener('mouseover',function(){
  headOne.textContent = "Mouse currently Over";
  headOne.style.color = 'red';
})

headOne.addEventListener('mouseout',function(){
  headOne.textContent = "Mouse Not On me."
  headOne.style.color = 'blue';
})


// On Click
let clicked = false;
headTwo.addEventListener("click",function(){
  if (clicked) {
    headTwo.textContent = "Clicked off";
    headTwo.style.color = 'black';
    clicked = !(clicked);
  } else {
    headTwo.textContent = "Clicked On";
    headTwo.style.color = 'blue';
    clicked = !(clicked);
  }
})

// Double Click
headThree.addEventListener("dblclick",function(){
  headThree.textContent = "Double Clicked!";
  headThree.style.color = 'red';
})
