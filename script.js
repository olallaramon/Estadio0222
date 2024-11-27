// Este código puede ser ampliado para mover elementos como las gradas, puertas, etc.
document.addEventListener('DOMContentLoaded', () => {
  let stadium = document.getElementById('stadium');

  // Implementación de un simple movimiento con el mouse
  stadium.addEventListener('mousemove', (event) => {
    console.log('Mouse moved over the stadium area!');
  });

  // Función para cambiar el color de las gradas
  function changeSeatColor() {
    const seats = document.querySelectorAll('.section');
    seats.forEach(seat => {
      seat.style.backgroundColor = '#9acd32';
    });
  }

  // Cambiar el color de las gradas cuando se hace clic en el estadio
  stadium.addEventListener('click', changeSeatColor);
});
