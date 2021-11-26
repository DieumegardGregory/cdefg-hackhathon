import React, { useRef } from "react";
import "./CardList.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function CardList() {
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
    infinite: true,
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
      <div className="mobile">
        <Slide ref={slideRef} {...properties}>
          <div style={style}>
            <div className="Card sad">
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
          </div>

          <div style={style}>
            <div className="Card happy">
              <div className="headerCard">
                <p>
                  <img src="assets/mood-happy-01.png" alt="happy" />
                </p>
                <p>Happy</p>
              </div>
              <div className="video">
                <video>insert youtube video</video>
              </div>
            </div>
          </div>
          <div style={style}>
            {" "}
            <div className="Card angry">
              <div className="headerCard">
                <p>
                  <img src="assets/mood-angry-01.png" alt="angry" />
                </p>
                <p>Angry</p>
              </div>
              <div className="video">
                <video>insert youtube video</video>
              </div>
            </div>
          </div>
          <div style={style}>
            {" "}
            <div className="Card sporty">
              <div className="headerCard">
                <p>
                  <img src="assets/mood-sport-01.png" alt="sporty" />
                </p>
                <p>Sporty</p>
              </div>
              <div className="video">
                <video>insert youtube video</video>
              </div>
            </div>
          </div>
          <div style={style}>
            {" "}
            <div className="Card epic">
              <div className="headerCard">
                <p>
                  <img src="assets/mood-epic-01.png" alt="epic" />
                </p>
                <p>Epic</p>
              </div>
              <div className="video">
                <video>insert youtube video</video>
              </div>
            </div>
          </div>
          <div style={style}>
            {" "}
            <div className="Card chlid">
              <div className="headerCard">
                <p>
                  <img src="assets/mood-chlid-01.png" alt="childish" />
                </p>
                <p>Childish</p>
              </div>
              <div className="video">
                <video>insert youtube video</video>
              </div>
            </div>
          </div>
          <div style={style}>
            {" "}
            <div className="Card calm">
              <div className="headerCard">
                <p>
                  <img src="assets/mood-calm-01.png" alt="calm" />
                </p>
                <p>Calm</p>
              </div>
              <div className="video">
                <video>insert youtube video</video>
              </div>
            </div>
          </div>
          <div style={style}>
            {" "}
            <div className="Card romance">
              <div className="headerCard">
                <p>
                  <img src="assets/mood-romance-01.png" alt="romance" />
                </p>
                <p>Romantic</p>
              </div>
              <div className="video">
                <video>insert youtube video</video>
              </div>
            </div>
          </div>
          <div style={style}>
            <div className="Card comedy">
              <div className="headerCard">
                <p>
                  <img src="assets/mood-comedy-01.png" alt="comedy" />
                </p>
                <p>Comic</p>
              </div>
              <div className="video">
                <video>insert youtube video</video>
              </div>
            </div>
          </div>
          <div style={style}>
            {" "}
            <div className="Card hot">
              <div className="headerCard">
                <p>
                  <img src="assets/mood-hot-01.png" alt="hot" />
                </p>
                <p>Hot</p>
              </div>

              <div className="video">
                <video>insert youtube video</video>
              </div>
            </div>
          </div>
        </Slide>
      </div>
      {/* <div className="autoplay-buttons">
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
      </div> */}

    {/* code pour la version desktop */}

      <div className="desktop">
        <div className="CardList">
          <div className="Card sad">
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

          <div className="Card happy">
            <div className="headerCard">
              <p>
                <img src="assets/mood-happy-01.png" alt="happy" />
              </p>
              <p>Happy</p>
            </div>
            <div className="video">
              <video>insert youtube video</video>
            </div>
          </div>

          <div className="Card angry">
            <div className="headerCard">
              <p>
                <img src="assets/mood-angry-01.png" alt="angry" />
              </p>
              <p>Angry</p>
            </div>
            <div className="video">
              <video>insert youtube video</video>
            </div>
          </div>

          <div className="Card sporty">
            <div className="headerCard">
              <p>
                <img src="assets/mood-sport-01.png" alt="sporty" />
              </p>
              <p>Sporty</p>
            </div>
            <div className="video">
              <video>insert youtube video</video>
            </div>
          </div>

          <div className="Card epic">
            <div className="headerCard">
              <p>
                <img src="assets/mood-epic-01.png" alt="epic" />
              </p>
              <p>Epic</p>
            </div>
            <div className="video">
              <video>insert youtube video</video>
            </div>
          </div>

          <div className="Card chlid">
            <div className="headerCard">
              <p>
                <img src="assets/mood-chlid-01.png" alt="childish" />
              </p>
              <p>Childish</p>
            </div>
            <div className="video">
              <video>insert youtube video</video>
            </div>
          </div>

          <div className="Card calm">
            <div className="headerCard">
              <p>
                <img src="assets/mood-calm-01.png" alt="calm" />
              </p>
              <p>Calm</p>
            </div>
            <div className="video">
              <video>insert youtube video</video>
            </div>
          </div>

          <div className="Card romance">
            <div className="headerCard">
              <p>
                <img src="assets/mood-romance-01.png" alt="romance" />
              </p>
              <p>Romantic</p>
            </div>
            <div className="video">
              <video>insert youtube video</video>
            </div>
          </div>

          <div className="Card comedy">
            <div className="headerCard">
              <p>
                <img src="assets/mood-comedy-01.png" alt="comedy" />
              </p>
              <p>Comic</p>
            </div>
            <div className="video">
              <video>insert youtube video</video>
            </div>
          </div>

          <div className="Card hot">
            <div className="headerCard">
              <p>
                <img src="assets/mood-hot-01.png" alt="hot" />
              </p>
              <p>Hot</p>
            </div>

            <div className="video">
              <video>insert youtube video</video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
