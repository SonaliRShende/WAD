document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const movie = document.getElementById("movie").value;
    const seats = document.getElementById("seats").value;
  
    document.getElementById("confirmation").innerHTML = `
      <h3>Booking Confirmed!</h3>
      <p>Name: ${name}</p>
      <p>Movie: ${movie}</p>
      <p>Seats: ${seats}</p>
    `;
  });
  