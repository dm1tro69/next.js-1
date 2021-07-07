import React, { useEffect, useState } from "react";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating,props";

// @ts-ignore
import cn from "classnames";

const Rating = ({
  rating,
  isEditable = false,
  setRating,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRatings(rating);
  }, [rating]);

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRatings(i);
  };

  const constructRatings = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <img
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
          })}
          src="./Star.svg"
          alt="star"
        />
      );
    });
    setRatingArray(updatedArray);
  };
  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
