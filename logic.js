document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke-container');

    document.addEventListener('keydown', (event) => {
        if (event.key === 'J' || event.key === 'j') {
            fetchJoke();
        }
    });

    jokeContainer.addEventListener('mouseover', fetchJoke); // Changed 'mousehover' to 'mouseover'

    function fetchJoke() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(joke => {
                jokeContainer.innerHTML = `<p>${joke.setup} <br> ${joke.punchline}</p>`; // This replaces the current joke with a new one
            })
            .catch(error => console.log('Error:', error));
    }
});