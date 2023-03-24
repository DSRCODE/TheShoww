import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// CSS
import "./HomePage.css";

// Import Components
import Navbar from "../../Components/Navbar/Navbar";
import MovieComp from "../../Components/MovieComp/MovieComp";

// Import Images
import slide1 from "../../assets/john.png";
import slide2 from "../../assets/avatar.png";
import slide3 from "../../assets/spider.jpg";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="image_slider">
        <Carousel
        className="main_slide"
          autoPlay={true}
          interval={3000}
          controls={false}
          showThumbs={false}
          infiniteLoop={true}
        >
          <div style={{display:"flex", alignItems:"center", objectFit:"fill"}}>
            <img src={slide1} alt="" />
          </div>
          <div>
            <img src={slide2} alt="" />
          </div>
          <div>
            <img src={slide3} alt="" />
          </div>
        </Carousel>
      </div>
      <h2>Still Waiting !!! Go and get your Snacks</h2>
      <div className="movie_list_slider">
        <MovieComp/>
      </div>
    </>
  );
};

export default HomePage;
