
function menuToggle() {
  // Only toggle if screen is less than 640px wide
  if (window.innerWidth < 640) {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }
}