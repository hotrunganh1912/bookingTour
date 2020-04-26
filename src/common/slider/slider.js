import React, { useState, useEffect } from "react";
import FormBoxTour from "../../components/bodys/listTour/formBoxTour";
import "./slider.css";

const Slider = (props) => {
  const data = [...props.data] || [];
  let mytimeOut;

  const [currentMove, setCurrentMove] = useState(0);
  const [maxMove] = useState(364 * (data.length - 3));
  const [isHover, setIsHover] = useState(false);
  const [isToLeft, setIsLeft] = useState(true);

  useEffect(() => {
    if (data.length <= 5) return;
    let interval = setInterval(() => {
      if (isHover) return;
      if (isToLeft) {
        if (currentMove <= -maxMove) {
          setIsLeft(false);
          return;
        }
        setCurrentMove(currentMove - 364);
      } else {
        if (currentMove >= 0) {
          setIsLeft(true);
          return;
        }
        setCurrentMove(currentMove + 364);
      }
    }, 2000);
    return () => clearInterval(interval);
  });

  const handerUnHover = () => {
    setIsHover(false);
  };

  const handerHover = () => {
    setIsHover(true);
  };

  const handerClickPrev = () => {
    if (currentMove <= -maxMove) return;
    clearTimeout(mytimeOut);
    mytimeOut = setTimeout(() => {
      setCurrentMove(currentMove - 364);
    }, 300);
  };

  const handerClickNext = () => {
    console.log("currentMove :>> ", currentMove);
    if (currentMove >= 0) return;
    clearTimeout(mytimeOut);
    mytimeOut = setTimeout(() => {
      setCurrentMove(currentMove + 364);
    }, 300);
  };

  return (
    <>
      <div
        onMouseOut={handerUnHover}
        onMouseOver={handerHover}
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {data.length < 6 ? (
          ""
        ) : (
          <a
            onClick={handerClickNext}
            className="carousel-control-prev my-auto hover-next-prev"
            href="#prev"
            style={{
              height: "80%",
              transform: "translate(-72px, 0)",
            }}
          >
            <span
              style={{
                transform: "translate(50px, 0)",
              }}
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
        )}

        <div
          style={
            data.length >= 6
              ? {
                  overflow: "hidden",
                  justifyContent: "flex-start",
                }
              : { overflow: "overlay" }
          }
          // justify-content-around
          className={`mover-list bg-light p-3 rounded d-flex  ${
            data.length >= 6 ? "" : "justify-content-between"
          }`}
        >
          {data.length > 0 &&
            data.map((e, i) => (
              //   <Card currentMove={currentMove} key={"data" + i} title={e} />
              <FormBoxTour
                lenght={data.length}
                key={"FormBoxTour" + i}
                isToLeft={isToLeft}
                data={e}
                currentMove={currentMove}
              />
            ))}
        </div>

        {data.length < 6 ? (
          ""
        ) : (
          <a
            onClick={handerClickPrev}
            className="carousel-control-next my-auto hover-next-prev"
            href="#next"
            style={{
              height: "80%",
              transform: "translate(72px, 0)",
            }}
          >
            <span
              style={{
                transform: "translate(-38px, 0)",
              }}
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
        )}
      </div>
    </>
  );
};

export default Slider;
