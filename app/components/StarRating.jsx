// components/StarRating.jsx
import React, { useEffect } from "react";

const StarRating = ({ rating }) => {
  useEffect(() => {
    console.log("Rating received:", rating);
  }, [rating]);

  // Calculate the number of full stars
  const fullStars = Math.floor(rating);

  // Generate an array to render the stars
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) {
      return (
        <span key={index} className="star full">
          &#9733;
        </span>
      );
    } else if (index === fullStars && rating % 1 !== 0) {
      return (
        <span key={index} className="star half">
          &#9733;
        </span>
      );
    } else {
      return (
        <span key={index} className="star empty">
          &#9733;
        </span>
      );
    }
  });

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
