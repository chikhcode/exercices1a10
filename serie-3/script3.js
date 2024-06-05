function checkAnswer() {
    const correctAnswer = "Rome";
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const result = document.getElementById('result');

    if (selectedOption) {
        if (selectedOption.value === correctAnswer) {
            result.textContent = "Bien joué, continuez comme ça !";
            result.style.color = "green";
        } else {
            result.textContent = `Incorrecte ! La bonne réponse est ${correctAnswer}. Continuez, c’est par ses erreurs qu’on s’améliore.`;
            result.style.color = "red";
        }
        document.getElementById('nextExercise').style.display = 'block';
    } else {
        result.textContent = "Veuillez sélectionner une réponse.";
        result.style.color = "orange";
    }
}

function nextExercise() {
    window.location.href = 'exercice4.html';
}
