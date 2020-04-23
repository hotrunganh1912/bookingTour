import React, { useState, useEffect } from "react";
import FormBoxTour from "../../components/bodys/listTour/formBoxTour";

const Slider = (props) => {
  const data = [...props.data] || [];

  const [currentMove, setCurrentMove] = useState(0);
  const [maxMove] = useState(364 * (data.length - 4));
  const [isHover, setIsHover] = useState(false);
  const [isToLeft, setIsLeft] = useState(true);

  useEffect(() => {
    if (data.length !== 10) return;
    let interval = setInterval(() => {
      if (isHover) return;
      if (isToLeft) {
        console.log("left");
        if (currentMove >= maxMove) {
          setIsLeft(false);
          return;
        }
        setCurrentMove(currentMove + 364);
      } else {
        console.log("right");
        if (currentMove <= 364) {
          setIsLeft(true);
          return;
        }
        setCurrentMove(currentMove - 364);
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

  const handerClickNext = () => {
    if (currentMove < 364) return;
    setCurrentMove(currentMove - 364);
  };

  const handerClickPrev = () => {
    if (currentMove >= maxMove) return;
    setCurrentMove(currentMove + 364);
  };

  return (
    <>
      <div
        onMouseOut={handerUnHover}
        onMouseOver={handerHover}
        style={{
          position: "relative",
        }}
        className=""
      >
        {data.length !== 10 ? (
          ""
        ) : (
          <a
            onClick={handerClickNext}
            className="carousel-control-prev my-auto"
            href="#prev"
            style={{
              height: "80%",
              transform: "translate(-72px, 0)",
            }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
        )}

        <div
          style={{
            overflow: "hidden",
            justifyContent: "flex-start",
            minWidth: "445px",
          }}
          // justify-content-around
          className={`mover-list bg-light p-3 rounded d-flex  ${
            data.length === 10 ? "" : "justify-content-around"
          }`}
        >
          {data.length > 0 &&
            data.map((data, i) => (
              //   <Card currentMove={currentMove} key={"data" + i} title={e} />
              <FormBoxTour
                key={"FormBoxTour" + i}
                isToLeft={isToLeft}
                data={data}
                currentMove={currentMove}
              />
            ))}
        </div>

        {data.length !== 10 ? (
          ""
        ) : (
          <a
            onClick={handerClickPrev}
            className="carousel-control-next my-auto"
            href="#next"
            style={{
              height: "80%",
              transform: "translate(72px, 0)",
            }}
          >
            <span
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
