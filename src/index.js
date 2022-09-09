const init = () => {
const inputForm = document.querySelector('form')
const searchByID = document.getElementById('searchByID')
inputForm.addEventListener('submit', event =>{
    event.preventDefault()
    movieID = searchByID.value
    console.log(movieID)
    fetch(`http://localhost:3000/movies/${movieID}`)
    .then(res => res.json())
    .then (movie => displayMovieDetails(movie))
function displayMovieDetails(movie){
    const movieTitle = document.querySelector('h4')
    const movieSummary = document.querySelector('p')
    movieTitle.textContent = movie.title
    movieSummary.textContent = movie.summary
    }
})
}

document.addEventListener('DOMContentLoaded', init);


// 1. Add event listeners to capture form data and override a form's default behavior
// 2. Fetch data based on what the user types into that form
// 3. Display that data on the page