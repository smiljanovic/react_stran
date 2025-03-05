import {useEffect, useState } from 'react'
import Search from './components/search.jsx'
import Spinner from './components/Spinner.jsx'
import MovieCard from './components/MovieCard.jsx';



const API_BASE_URL = "https://api.themoviedb.org/3";


const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  }
}




const App = () => {

const [searchTerm, setSeachTerm] = useState("");

const[errorMessage, setErrorMessage] = useState("");

const[movies, setMovies] = useState([]);

const[isLoading, setIsLoading] = useState(false);



const fetchMovies = async (query = '') => {


setIsLoading(true);
setErrorMessage("");

  try {
    const endpoint = query 
    ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;


    


    const response = await fetch(endpoint, API_OPTIONS);

    
   
    if(!response.ok){
      throw new Error("Error pri dobivanju filmov");
    }

    const data = await response.json();

    if(data.Response=="false"){
      throw new Error("Error pri dobivanju filmov");
      setMovies([]);
      return;

    }

    setMovies(data.results || []);

  } catch (error) {
    console.error("Error pri dobivanju filmov",error);
    setErrorMessage("Error pri dobivanju filmov");
  
  } finally{
    setIsLoading(false);
  }
}

useEffect(() => {
  fetchMovies(searchTerm);

}, [searchTerm]);

  return (
    <main>

    <div className ="pattern"/>

    <div className ="wrapper">

      <header>
      {/*<img class="h-250 w-250 " src="./heroes.jpg"  alt="Hero Banner"></img>*/}
      <img  src="./dc-heroes.jpg"  alt="Hero Banner"></img>
      <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without Hassle</h1>

      <Search searchTerm={searchTerm} setSeachTerm={setSeachTerm}/>
      </header>

    <section className="movies"> 
      <h2 className="mt-[40px]">Vsi filmi</h2>

      {isLoading ? (
      <Spinner/>
      ): errorMessage ? (
        <p className='text-red-500'>{errorMessage}</p>
        ): (
          <ul>
          {movies.map((movie) => (
           <MovieCard key={movie.id} movie={movie}/>

          ))}
          </ul>
        )}

    </section>
    

    </div>
  
  
  </main>
  )
}

export default App