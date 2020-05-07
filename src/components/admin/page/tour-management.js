import React from "react";
import PostTour from "../component/editor/post-tour ";

const TourManagement = () => {
  return (
    <div
      style={{
        borderRadius: "1rem",
        marginBottom: "1rem",
        // transform: "translate(0, -70px)",
      }}
      className="p-3 bg-white shadow"
    >
      <PostTour />
    </div>
  );
};

export default TourManagement;
