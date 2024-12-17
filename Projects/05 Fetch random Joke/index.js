

const jokeText = document.getElementById("jokeText")

const fetchJokebtn = document.getElementById("fetchJokeBtn")

async function fetchJoke(){
    try {
        jokeText.textContent = "Loading..."
        
        const res = await fetch("https://official-joke-api.appspot.com/random_joke")
        const joke = await res.json()
        console.log(joke)
        jokeText.textContent = `${joke.setup} - ${joke.punchline}`
        
    } catch (error) {
        jokeText.textContent = "Unbale to fetch Joke! Try again."
        
    }
    
}

fetchJokebtn.addEventListener('click',fetchJoke)
fetchJoke()