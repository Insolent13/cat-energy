import {init as initMenuToggle} from './menu-toggle';

initMenuToggle();


// I hope this over-commenting helps. Let's do this!
// Let's use the 'active' variable to let us know when we're using it
let active = false;

// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
document.querySelector('.slider__control').addEventListener('mousedown',function(){
  active = true;
  // Add our scrolling class so the scroller has full opacity while active
  document.querySelector('.slider__control').classList.add('scrolling');
});
// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener('mouseup',function(){
  active = false;
  document.querySelector('.slider__control').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  document.querySelector('.slider__control').classList.remove('scrolling');
});

// Let's figure out where their mouse is at
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  // Their mouse is here...
  let x = e.pageX;
  // but we want it relative to our wrapper
  x -= document.querySelector('.slider__picture-wrapper').getBoundingClientRect().left;
  // Okay let's change our state
  scrollIt(x);
});

// Let's use this function
function scrollIt(x){
    let transform = Math.max(0,(Math.min(x,document.querySelector('.slider__picture-wrapper').offsetWidth)));
    document.querySelector('.slider__picture-wrapper--after').style.width = transform+"px";
    document.querySelector('.slider__control').style.left = transform-25+"px";
}

// Let's set our opening state based off the width, 
// we want to show a bit of both images so the user can see what's going on
scrollIt(150);

// And finally let's repeat the process for touch events
// first our middle scroller...
document.querySelector('.slider__control').addEventListener('touchstart',function(){
  active = true;
  document.querySelector('.slider__control').classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
  active = false;
  document.querySelector('.slider__control').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
  active = false;
  document.querySelector('.slider').classList.remove('scrolling');
});