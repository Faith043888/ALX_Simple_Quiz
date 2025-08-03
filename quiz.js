function CheckAnswer() {
    // 1. Declare the correct answer
    const correctAnswer = "4";

    // 2. Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // 3. Get the user's answer value
    const userAnswer = selectedOption ? selectedOption.value : null;

    // 4. Get the feedback element
    const feedback = document.getElementById("feedback");

    // 5. Compare user's answer to correct answer and display result
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct. Well done.";
    } else {
        feedback.textContent = "That's incorrect.";
    }
}

// 6. Add event listener without calling the function directly
document.getElementById("submit-answer").addEventListener("click", CheckAnswer);