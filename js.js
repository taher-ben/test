function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Call the login API endpoint
    axios.post('https://api.showmore.ly/login', { email, password })
      .then(response => {
        const { token, token_type } = response.data;
  
        // Store token and token type in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('tokenType', token_type);
  
        // Redirect to the dashboard
        window.location.href = 'dashboard.html';
      })
      .catch(error => {
        console.error('Login failed:', error.response ? error.response.data : error.message);
      });
  }
  