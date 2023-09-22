import React from "react";

const StarRating = ({ rating }) => {
  const starCount = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  const stars = [];

  for (let i = 1; i <= fullStars; i++) {
    stars.push(
      <span key={i} className="text-yellow-500 fill-current">
        ★
      </span>
    );
  }

  if (halfStar) {
    stars.push(
      <span key={fullStars + 1} className="text-yellow-500 fill-current">
        ★
      </span>
    );
  }

  for (let i = fullStars + (halfStar ? 2 : 1); i <= starCount; i++) {
    stars.push(
      <span key={i} className="text-gray-300">
        ★
      </span>
    );
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
