import React from "react";
import BgRating from "../rating/bg-rating";

const ShowOtherComment = (props) => {
  let { contexTitle, context, starPoin, userPost, time } = props.dataComment;

  return (
    <div className="container my-2">
      <div style={{ borderRadius: "33px" }} className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2">
              <img
                src="https://image.ibb.co/jw55Ex/def_face.jpg"
                className="img img-rounded img-fluid"
                alt="avata"
              />
              <p className="text-secondary text-center">
                {new Date(time).toLocaleDateString("en-GB")}
              </p>
            </div>
            <div className="col-md-10">
              <div style={{ textTransform: "capitalize" }} className="mb-2">
                <strong className="text-primary">{userPost}</strong>:{" "}
                {contexTitle}
                <BgRating
                  custome={{ display: "inherit", float: "right" }}
                  poinDefaul={starPoin}
                />
              </div>
              <div className="clearfix"></div>
              <p
                style={{
                  minHeight: "87px",
                  border: "1px solid",
                  padding: "5px",
                  borderRadius: "11px",
                }}
              >
                {context}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOtherComment;
