

window.onload = function() {
  var seats = [ 
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


  function dibujar() { 
    var seatsNode = document.getElementById('seats'); 
    seatsNode.textContent = '';
    // recorrer el array 
    seats.forEach(function(element, index) {
      var div = document.createElement('div');
      seatsNode.appendChild(div);
      div.className = 'seat';
      if (element === true) {
        div.className = div.className + ' busy';
      }
      if (index < 4) {
        div.className = div.className + ' primera';
      } else {
        div.className = div.className + ' economica';
      }
    });
  }
  // seleccionar el boton 
  var boton = document.getElementById('boton');
  boton.addEventListener('click', function reserve(event, clase) {
    var clase = clase || parseInt(prompt('1. Primera Clase \n 2. Económica'));
    if (clase > 2) {
      clase = 1;
    }
    var finalized = false;

    console.log(clase);

    if (clase === 1) {
      for (var i = 0; i < 4; i++) {
        if (seats[i] === false) {
          seats[i] = true;
          finalized = true;
          // escapamos  del for
          break;
        }
      }
    } else if (clase === 2) {
      for (var i = 4; i < 10; i++) {
        if (seats[i] === false) {
          seats[i] = true;
          finalized = true;
          break;
        }
      }
    } else {
      alert('Por favor ingrese un número válido');
    }

    if (!finalized) {
      if (confirm('Asientos no disponibles en esta clase, desea reservar en otra?')) {
        reserve(null, clase + 1);
      }
    }

    console.log(seats);
    dibujar();
  });

  dibujar();
};