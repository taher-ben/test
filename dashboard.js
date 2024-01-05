document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    const tokenType = localStorage.getItem('tokenType');
  
    if (!token || !tokenType) {
      // Redirect to login page if token is not available
      window.location.href = 'index.html';
    } else {
      const headers = {
        Authorization: `${tokenType} ${token}`,
      };
  
      // Call the protected data API endpoint
      axios.get('https://api.showmore.ly/dashboard/job-applications', { headers })
        .then(response => {
          const dataElement = document.getElementById('data');
          console.log(response);
          for(let i =0; i<=10;i++){
            // for (let j = 0; j < 10; j++) {
            let dat = response.data.data[i];
            console.log(dat);
            // }
            // console.log(response.data.data[i]);
          dataElement.textContent = response.data.data[i];


          }
        })
        .catch(error => {
          console.error('Error fetching protected data:', error.response ? error.response.data : error.message);
        });
    }
  });
  