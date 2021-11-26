import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/style.css";

function CardListMobile() {
  const slideRef = useRef();

  const style = {
    textAlign: "center",
    background: "teal",
    padding: "200px 0",
    fontSize: "30px",
  };

  const properties = {
    autoplay: false,
    arrows: false,
  };

  // The "goBack()" method shows the previous slide while "goNext()" shows the next slide. The "goTo(index)" method goes to a particular index. It takes an integer as the parameter.
  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  const goto = ({ target }) => {
    slideRef.current.goTo(parseInt(target.value, 10));
  };

  return (
    <div>
      <div>
        <Slide ref={slideRef} {...properties}>
          <div style={style} className="Card sad">
        <div className="headerCard">
          <p>
            <img src="assets/mood-sad-01.png" alt="sad" />
          </p>
          <p>Sad</p>
        </div>
        <div className="video">
          <video>insert youtube video</video>
        </div>
      </div>
          <div style={style}>Carte 2</div>
          <div style={style}>Carte 3</div>
        </Slide>
      </div>

      <div className="autoplay-buttons">
        <button type="button" onClick={back}>
          Back
        </button>
        <button type="button" onClick={next}>
          Next
        </button>
        <select onChange={goto}>
          <option>--Select--</option>
          <option value="0">First</option>
          <option value="1">Second</option>
          <option value="2">Third</option>
        </select>
      </div>
    </div>
  );
}

export default CardListMobile;
