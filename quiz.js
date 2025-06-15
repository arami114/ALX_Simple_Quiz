// Step 1: Declare the function
    function checkAnswer() {
      // Step 2: Set the correct answer
      const correctAnswer = "4";

      // Step 3: Retrieve the user's selected answer
      const selectedOption = document.querySelector('input[name="quiz"]:checked');
      
      // Guard against no selection
      if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
      }

      const userAnswer = selectedOption.value;

      // Step 4: Compare the answers and provide feedback
      if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
      } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
      }
    }

    // Step 5: Add click event listener to the submit button
    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);