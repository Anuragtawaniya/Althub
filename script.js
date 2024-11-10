const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');

// Update the value display
slider.addEventListener('input', function() {
  sliderValue.textContent = slider.value;
});



 // Initialize votes array
 let votes = [0, 0, 0, 0, 0]; // Each element represents the vote count for each option
 let totalVotes = 0; // Keep track of the total number of votes cast

 // Function to handle the voting logic
 function vote() {
   const selectedOption = document.querySelector('input[name="voteOption"]:checked');
   if (selectedOption) {
     const index = parseInt(selectedOption.value); // Get the selected option index
     votes[index] += 1; // Increment the vote count for the selected option
     totalVotes += 1; // Increment the total number of votes

     updateUI(); // Update the UI with the new vote counts and progress bars
   } else {
     alert("Please select an option before voting.");
   }
 }

 // Function to update the UI with the latest vote counts and progress bars
 function updateUI() {
   let maxVotes = Math.max(...votes); // Find the maximum vote count to calculate percentage

   for (let i = 0; i < votes.length; i++) {
     const voteCount = document.getElementById(`voteCount${i}`);
     const progressBar = document.getElementById(`progressBar${i}`);
     const percentage = maxVotes === 0 ? 0 : (votes[i] / maxVotes) * 100; // Calculate percentage based on maxVotes
     voteCount.textContent = votes[i]; // Update vote count
     progressBar.style.width = `${percentage}%`; // Update progress bar width
   }

   // Update total votes display
   document.getElementById('totalVotes').textContent = totalVotes;
 }