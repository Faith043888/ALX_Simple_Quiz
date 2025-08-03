// 1. Create the CheckAnswer function
function CheckAnswer() {
    // 2. Retrieve the correct answer
    const correctAnswer = "4";

    // 3. Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    // 4. Compare the user's answer with the correct answer
    const feedback = document.getElementById("feedback");

    // 5. Provide feedback based on comparison
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct. Well done.";
    } else {
        feedback.textContent = "That's incorrect.";
    }
}

// 6 & 7. Retrieve the submit button and add an event listener
const submitAnswerButton = document.getElementById("submit-answer");
submitAnswerButton.addEventListener("click", CheckAnswer);