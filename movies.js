const movies = {
    great: [
        "La Haine", "Donny Darko", "Parasite", "Into the Wild", 
        "Inception", "Interstellar", "City of God", "Godfather"
    ],
    funny: [
        "The Big Lebowski", "Forrest Gump", "Dumb and Dumber", 
        "Shaun of the Dead", "Neighbors"
    ]
};

function showMovies(category) {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = '';  // clear it

    // loop throuh selected category and trac peach movie and then add  to dom
    movies[category].forEach(movie => {
        console.log(movie);  // track  movie to  console
        
        const li = document.createElement("li");
        li.textContent = movie;
        movieList.appendChild(li);
    });
}
