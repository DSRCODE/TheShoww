import React, { useState } from 'react'
import './Category.css'

const Category = ({name, id}) => {
    const [searchmovie, setSearchmovie] = useState();
    const [data, setData] = useState([]);
  
    // const handleClick = () => {
    //   const fetchApi = async () => {
    //     const url = `https://api.themoviedb.org/3/search/movie?api_key=65bc2beace23a21ca84b23072bd30a06&language=en-US&query=${searchmovie}&page=1&include_adult=false`;
    //     const response = await fetch(url);
    //     const resJson = await response.json();
    //     const list = resJson.results;
    //     console.log(list);
    //     setData(list);
    //   };
    //   fetchApi();
    //   setSearchmovie("");
    // };
  return (
    <>
        <div className="category" >

            <h2 onClick={(e)=>setSearchmovie(e.target.value)}>{name}</h2>
        </div>
    </>
  )
}

export default Category