// Function to play the Mario jump sound and redirect to Expedition 1 page
function playJumpSoundAndRedirect() {
    var audio = new Audio('sounds/mario_jump.mp3'); // Path to your sound file
    audio.play(); // Play the sound
  
    // Wait for the sound to finish before redirecting
    audio.onended = function() {
      window.location.href = 'expedition1.html'; // Redirect to Expedition 1 page
    };
  }
  
  