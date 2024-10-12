// Fetch data from the backend API
fetch('http://localhost:3000/data')
  .then(response => response.json())
  .then(data => {
    // Update the UI with the received data
    document.getElementById('message').textContent = data.message;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
