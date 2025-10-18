const URL = 'https://www.omdbapi.com/?apikey=70fb107d&s='

export async function fetchMovieDetails(searchQuery: string){
    try {
        const response = await fetch(`${URL}${searchQuery}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.Search || data.Response;
    }
     catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
    }
}