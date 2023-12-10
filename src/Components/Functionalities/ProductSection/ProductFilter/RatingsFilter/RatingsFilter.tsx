import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./RatingsFilter.sass";
const RatingsFilter: React.FC<{
  ratingPts: Number;
  setRatingPts: (newRatingPoints: Number) => void;
}> = ({ ratingPts, setRatingPts }) => {
  const [value, setValue] = React.useState<number | null>(2);
  const ratingNumber: number[] = [5, 4, 3, 2, 1];
  return (
    <div>
      <Typography className="ratePtsBox">
        <Typography>RATINGS</Typography>
        {ratingNumber.map((ratingPoints) => {
          return (
            <Rating
              name="read-only"
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
