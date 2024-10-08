import {init as initMenuToggle} from './menu-toggle';

initMenuToggle();


// Let's use the 'active' variable to let us know when we're using it
let active = false;

// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
document.querySelector('.slider__control').addEventListener('mousedown',function(){
  active = true;