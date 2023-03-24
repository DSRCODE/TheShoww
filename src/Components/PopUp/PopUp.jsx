import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import "./PopUp.css";

const PopUp = ({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
}) => {
  const posterImage = "https://image.tmdb.org/t/p/w500";
  const [show, setShow] = useState(false);
  const [mdata, setMdata] = useState([]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleAdd = () => {
    setMdata([title,posterImage + poster_path])
  }

  return (
    <>
      <div className="movie_Card">
        <div className="card_body">
          <img className="movie_img_i" src={posterImage + poster_path} alt="" />
          <div className="card_body_modal">
            <button onClick={handleShow} className="view_btn">
              View More
            </button>
            <button onClick={handleAdd} className="view_btn">
              Add to Watchlist
            </button>
            <Modal
              show={show}
              onHide={handleClose}
              dialogClassName="custome-dialog"
            >
              <Modal.Body className="modal_body">
                <div className="details">
                  <img
                    className="movie_img"
                    src={posterImage + poster_path}
                    alt="Loading........"
                  />
                  <div className="movie_details">
                    <h3>{title}</h3>
                    <div className="date">
                      <h4>ImDb: {vote_average} </h4>
                      <h4>Release Date: {release_date}</h4>
                    </div>
                    <p>
                      <span>OverView : </span>
                      {overview}
                    </p>
                    <div className="btns">
                      {/* <button onClick={handleAdd}>Add to Watchlist</button> */}
                      <button onClick={handleClose}>Close</button>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
