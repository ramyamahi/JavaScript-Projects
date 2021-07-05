const joke = document.getElementById('joke')
const btn = document.getElementById('btn')

generateJoke()

btn.addEventListener('click', generateJoke)

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com', config)
    const data = await response.json()
    joke.innerHTML = data.joke
}


// function generateJoke() {
//     fetch('https://icanhazdadjoke.com', {
//         headers: {
//             Accept: 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {joke.innerHTML = data.joke})
// }
