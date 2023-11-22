
function validateForm() {
    // Get values from the form
    const userEmail = document.getElementById('userEmail').value;
    const userName = document.getElementById('userName').value;

    // Check if any field is empty
    if (userEmail === '' || userName === '') {
      document.getElementById('message').innerHTML = '=>All fields must be filled out.<=';
      return;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      document.getElementById('message').innerHTML = '=>Please enter a valid email address.<=';
      return;
    }

    // If all checks pass, display success message
    document.getElementById('message').innerHTML = '=>Email is valid, and all fields are filled out!<=';

    
  }