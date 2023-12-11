import * as React from "react";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./RatingsFilter.sass";
const RatingsFilter: React.FC<{
  ratingPts: string;
  setRatingPts: (newRatingPoints: string) => void;
}> = ({ ratingPts, setRatingPts }) => {
  const ratingNumber: string[] = [`5`, `4`, `3`, `2`, `1`];
  return (
    <div className="ratingBox">
      <Typography className="ratePtsBox">
        <Typography><p>RATINGS</p></Typography>
        {ratingNumber.map((ratingPoints: string) => {
          return (
            <div
            className="ratepts"
              key={String(ratingPoints)}
              onClick={(e) => {
                e.preventDefault();
                setRatingPts(ratingPoints);
                
              }}
            >
              <Rating value={Number(ratingPoints)} readOnly  />
            </div>
          );
        })}
      </Typography>
    </div>
  );
};
export default RatingsFilter;
