const movieResults = 'https://www.omdbapi.com/?apikey=70fb107d&s='
const movieDetails = 'https://www.omdbapi.com/?apikey=70fb107d&t='

export async function fetchMovieResults(searchQuery: string){
    try {
        const response = await fetch(`${movieResults}${searchQuery}`);
        if (!response?.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data?.Search || data.Response;
    }
     catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
    }
}

export async function getMovieResults(searchQuery: string) {
    try{
        const response = await fetch(`${movieDetails}${searchQuery}`);
        if(!response?.ok){
            throw new Error("Network response are not ok");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
}