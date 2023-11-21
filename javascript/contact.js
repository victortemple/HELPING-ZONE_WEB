
function validateForm() {
    // Get values from the form
    const yourNmame = document.getElementById('yourNmame').value;
    const yourEmail = document.getElementById('yourEmail').value;
    const messageToHz = document.getElementById('messageToHz').value;

    // Check if any field is empty
    if (yourNmame === '' || yourEmail === '' || messageToHz === "") {
      document.getElementById('feedBack').innerHTML = '=>All fields must be filled out.<=';
      return;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(yourEmail)) {
      document.getElementById('feedBack').innerHTML = '=>Please enter a valid email address.<=';
      return;
    }

    // If all checks pass, display success message
    document.getElementById('feedBack').innerHTML = '=>Email is valid, and all fields are filled out!<=';

    
  }