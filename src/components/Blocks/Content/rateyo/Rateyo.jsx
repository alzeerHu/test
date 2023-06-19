import React, { useRef, useEffect } from 'react';
import 'rateyo/dist/jquery.rateyo.min.css';
import $ from 'jquery';

const CircleRating = ({ value }) => {
  const ratingRef = useRef(null);

  useEffect(() => {
    // Initialize the rateYo plugin
    $(ratingRef.current).rateYo({
      rating: value,
      starWidth: '30px',
      spacing: '5px',
      numStars: 5,
      minValue: 1,
      maxValue: 5,
      readOnly: true,
      normalFill: 'gray',
      ratedFill: 'blue',
      precision: 1,
      svg: {
        content: '<circle cx="12" cy="12" r="10"/>',
      },
    });
  }, [value]);

  return <div ref={ratingRef} />;
};

export default CircleRating;
