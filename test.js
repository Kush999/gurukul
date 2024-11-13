<script>
    // Function to handle the "Start" button click
    function startQuest(jobProfile) {
      // Store the selected job profile in localStorage
      localStorage.setItem('jobProfile', jobProfile);

      // Redirect to the Expedition 1 page
      window.location.href = "expedition1.html";
    }
  </script>