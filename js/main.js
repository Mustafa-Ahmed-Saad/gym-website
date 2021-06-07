// navbar Opacity
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.8;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();
    console.log('fed');
    const hash = this.hash;

    $('html, body').animate({ scrollTop: $(hash).offset().top - 100 }, 800);
  }
});

// Initialize and add the map
function initMap() {
  // The location of Cairo
  var cairo = { lat: 30.04442, lng: 31.235712 };
  // The map, centered at Cairo
  var map = new google.maps.Map(document.querySelector('.map'), { zoom: 4, center: cairo });
  // The marker, positioned at Cairo
  var marker = new google.maps.Marker({ position: cairo, map: map });
}
