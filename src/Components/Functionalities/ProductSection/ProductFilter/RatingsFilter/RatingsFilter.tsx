import * as React from "react";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./RatingsFilter.sass";
const RatingsFilter: React.FC<{
  ratingPts: Number;
  setRatingPts: (newRatingPoints: Number) => void;
}> = ({ ratingPts, setRatingPts }) => {
  
  const ratingNumber: number[] = [5, 4, 3, 2, 1];
  return (
    <div>
      <Typography className="ratePtsBox">
        <Typography>RATINGS</Typography>
        {ratingNumber.map((ratingPoints) => {
          return (
            <Rating
              key={ratingPoints}
              value={ratingPoints}
              readOnly
              className="ratepts"
              onClick={(e) => {
                e.preventDefault();
                console.log(ratingPoints);
                setRatingPts(ratingPoints);
              }}
            />
          );
        })}
      </Typography>
    </div>
  );
};
export default RatingsFilter;
