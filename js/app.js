// Declarar un arreglo que representara los asientos de nuestro
//  avion con vacios = false 
// ocupado = true
var airlineSeats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];

// Contador que nos ayudara a rastrear el numero de asientos acupados
var busySeats = 0;
// Pinte los asientos
var paintSeats = function(array) {
  var containerSeats = document.getElementById('seats');
  // pasar por el arreglo
  for (var i = 0; i < array.length; i++) {
    var seat = document.createElement('div');
    seat.className = 'seats';

    // asientos del 1 - 4 --> en nuestro arreglo va a ser (Primera clase), que seria del indice 0 al 3
    if (i < 4) {
      seat.style.background = 'purple';
    } else {
      seat.style.background = 'yellow';  
    }
    containerSeats.appendChild(seat);
  }
};
// reservar los asientos
var reserve = function() {
  var btn = document.getElementById('btn');
  btn.addEventListener('click', chooseZone);
};

var chooseZone = function() {
  var choice = prompt('En que zona prefieres reservar \n 1. Primera Clase \n 2. Economica \n \n Por favor ingresa el numero de tu preferencia');
  
  if (choice === 1) {
    checkFirstClassZone();
  } else if (choice === 2) {
      checkEconomicZone();
  } else {
      alert('Por favor ingresa un numero valido');
  }
};

var checkFirstClassZone = function() {
    var zone = 'Primera Clase';

    for (var i = 0; inde)
};

var checkEconomicZone = function() {

}
paintSeats(airlineSeats);
reserve();