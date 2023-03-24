import React from 'react'

// import CSS
import './MovieTemplate.css'

const MovieTemplate = ({title, poster_path }) => {
    const posterImage = "https://image.tmdb.org/t/p/w500/"
  return (
    <>
          <div className="movie-child">
            <img src={posterImage+poster_path} alt="Pathaan" />
            {/* <label htmlFor="" className="tag">
              {title}
            </label> */}
          </div>
    </>
  )
}

export default MovieTemplate