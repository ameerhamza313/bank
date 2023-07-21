function logout() {
    // Clear the logged-in status in localStorage
    localStorage.removeItem('isLoggedIn');

    // Redirect back to the login page
    window.location.href = 'index.html';
  }

  // Check if the user is logged in when the index.html page loads
  document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
      // Redirect back to the login page if not logged in
      window.location.href = 'index.html';
    }
  });