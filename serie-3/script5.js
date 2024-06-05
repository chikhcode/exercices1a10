function checkAnswer() {
    const correctAnswer = "Tokyo";
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
        showNextButton(); // Affiche le bouton après la vérification de la réponse
    } else {
        result.textContent = "Veuillez sélectionner une réponse.";
        result.style.color = "orange";
    }
}

function showNextButton() {
    // Change le libellé et la destination du bouton pour le dernier exercice
    const nextButton = document.getElementById('nextExercise');
    nextButton.textContent = "Retour à l'apprentissage";
    nextButton.setAttribute('onclick', "returnToLearning()");
    nextButton.style.display = 'block'; // Assure que le bouton est affiché
}

function returnToLearning() {
    // Redirige vers la page "Cours"
    window.location.href = 'https://www.w3schools.com/'; // Remplacez "cours.html" par le chemin de votre page "Cours"
}
