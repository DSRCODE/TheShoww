import React, { useEffect, useState } from "react";


// CSS
import "./MovieComp.css";

// Import Template
import MovieTemplate from "../MovieTemplate/MovieTemplate";


const MovieComp = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
      const fetchApi = async () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=65bc2beace23a21ca84b23072bd30a06`;
        const response = await fetch(url);
        const resJson = await response.json();
        const list = resJson.results;
        console.log(list);
        setMovie(list);
      };
      fetchApi();
    }, []);



  return (
    <>
      <div className="maingrid">
        <div className="heading">
          <h1>Latest & Trending</h1>
          <h4>See All..</h4>
        </div>
        <hr />
        <div className="grid-component">
        {
            movie.map((item)=> <MovieTemplate key={item.id} {...item} />)
        }
          </div>

      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
      
    </>
  );
};

export default MovieComp;

