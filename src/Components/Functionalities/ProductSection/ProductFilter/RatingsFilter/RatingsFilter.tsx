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
    <div className="ratingBox">
      <Typography className="ratePtsBox">
        <Typography><p>RATINGS</p></Typography>
        {ratingNumber.map((ratingPoints) => {
          return (
            <div
            className="ratepts"
              key={ratingPoints}
              onClick={(e) => {
                e.preventDefault();
                setRatingPts(ratingPoints);
              }}
            >
              <Rating value={ratingPoints} readOnly  />
            </div>
          );
        })}
      </Typography>
    </div>
  );
};
export default RatingsFilter;
