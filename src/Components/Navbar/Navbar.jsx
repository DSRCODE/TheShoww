import React from 'react';
import {Link} from 'react-router-dom'

// CSS
import "./Navbar.css";

// import Logo
import logo from '../../assets/theShow.png'

const Navbar = () => {
  function Loginbar() {
    var content = document.getElementById("loginbar");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }



  return (
    <>
      <div className="Nav">
        <nav className="navbar" id="foryou">
          <div className="logo">
            <img src={logo} alt="logo" />
            <Link style={{ textDecoration: "none" }} to={"/home"}>
              {/* <i class="fa-solid fa-house"></i> */}
            </Link>
          </div>
          <div className="search-bar">
            <Link style={{ textDecoration: "none" }} to="/SearchPage">
              <input type="search" id="text" placeholder="Get Your Movie" />
              <i class="fa-solid fa-magnifying-glass"></i>
            </Link>
            {/* <Link style={{ textDecoration: "none" }} to="">
              <label htmlFor="text">
                <i class="fa-solid fa-magnifying-glass"></i>
              </label>
            </Link> */}
          </div>
          <div className="userin">
            <i
              className="fa-solid fa-circle-user"
              onClick={Loginbar}
              id="userdash"
            ></i>
            <ul id="loginbar">
              <li>
                <Link style={{ textDecoration: "none" }} to={"/login"}>
                  Login
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }}>Signin</Link>
              </li>
              {/* <li>
                <Link style={{ textDecoration: "none" }} to={"/dashbord"}>
                  Dashbord
                </Link>
              </li> */}
            </ul>
            <button className="login">Login</button>
            <button className="signin">Register</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
