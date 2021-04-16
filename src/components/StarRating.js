import React from "react";
import {
  Star,
  StarFill,
  StarHalf,
} from "react-bootstrap-icons";

const StarRating = (props) => {
  const rating = props.rating;
  let starArray = ["full"];

  //lets us know how many star icons to use
  for (let i = 1; i < 5; i++) {
    if (rating >= i + 1) {
      starArray.push("full");
    } else if (rating < i + 1 && rating >= i + 0.5) {
      starArray.push("half");
    } else {
      starArray.push("empty");
    }
  }

  return (
    <div className="align-items-center justify-content-center">
      {starArray.map((el, i) => {
        if (el === "full") {
          return <StarFill key={i} color="orange" className="mb-1" />;
        } else if (el === "half") {
          return <StarHalf key={i} color="orange" className="mb-1" />;
        } else {
          return <Star key={i} color="orange" className="mb-1" />;
        }
      })}
      <span> ({rating}) </span>
    </div>
  );
};

export default StarRating;
