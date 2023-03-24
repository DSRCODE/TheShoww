import React, { useState } from "react";

import "./SearchPage.css";
import logo from "../../assets/theShow.png";
import PopUp from "../../Components/PopUp/PopUp";
import Category from "../Category/Category";



const SearchPage = () => {
  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  const posterImage = "https://image.tmdb.org/t/p/w500";
  const [searchmovie, setSearchmovie] = useState("");
  const [data, setData] = useState([]);
  const [mdata, setMdata] = useState([]);
  const [num, setNum] = useState();


  const handleClick = () => {
    const fetchApi = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=65bc2beace23a21ca84b23072bd30a06&language=en-US&query=${searchmovie}&page=1&include_adult=false`;
      const response = await fetch(url);
      const resJson = await response.json();
      const list = resJson.results;
      console.log(list);
      setData(list);
    };
    fetchApi();

    const x = Math.floor((Math.random() * 100) + 1);
    setNum(x);
  };

  const fetchApi2 = async () => {
    const api = `https://api.themoviedb.org/3/movie/popular?api_key=65bc2beace23a21ca84b23072bd30a06&language=en-US&page=${num}`
    const res = await fetch(api);
    const resJ = await res.json();
    const list2 = resJ.results;
    console.log(list2);
    setMdata(list2);
  };
  fetchApi2();

  return (
    <>
      <div className="search_nav">
        <div className="search">
          <img src={logo} alt="" className="logo" />
          <input
            type="text"
            placeholder="Search Here"
            value={searchmovie}
            onChange={(e) => {
              setSearchmovie(e.target.value);
            }}
          />
          <button className="search_btn" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
      <div className="genres">
      {
        genres.map((category)=> <Category key={category.id} {...category} />)
      }
           
      </div>

      {searchmovie === "" ? (
        <>
        <div className="movie_list">
          {mdata.map((item) => (
            <PopUp key={item.id} {...item} />
          ))}
        </div>
        </>
        
      ) : (
        <div className="movie_list">
          {data.map((item) => (
            <PopUp key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchPage;
