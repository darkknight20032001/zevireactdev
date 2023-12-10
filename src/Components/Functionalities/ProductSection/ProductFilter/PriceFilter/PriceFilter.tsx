// import React, { useState } from "react";
// import { MinMaxPriceRange } from "../../../../../Interfaces/MinMaxPriceRange";
// import { PriceRanges } from "../../../../../Interfaces/PriceRanges";
// import "./PriceFilter.sass";
// import {
//   Checkbox,
//   FormControlLabel,
//   FormGroup,
//   ToggleButton,
// } from "@mui/material";

// const PriceFilter: React.FC<{
//   selectPrice: MinMaxPriceRange;
//   setSelectPrice: (newPriceRange: MinMaxPriceRange) => void;
// }> = ({ selectPrice, setSelectPrice }) => {
//   const [checked, setChecked] = useState<boolean>(false);
//   const priceRangeList: PriceRanges[] = [
//     {
//       label: "Below 500",
//       minPrice: "0",
//       maxPrice: "500",
//     },
//     {
//       label: "500 To 1000",
//       minPrice: "500",
//       maxPrice: "1000",
//     },
//     {
//       label: "1000 to 2000",
//       minPrice: "1000",
//       maxPrice: "2000",
//     },
//     {
//       label: "Above 500",
//       minPrice: "2000",
//       maxPrice: "Infinite",
//     },
//   ];

//   return (
//     <div className="PriceFilter">
//       <form>
//         {priceRangeList.map((item: PriceRanges) => {
//           return (
//             <div className="checkBoxItem">
//               <input
//                 type="radio"
//                 id={item.label}
//                 name={item.label}
//                 value={item.label}
//                 onChange={(e) => {
//                   e.preventDefault();
//                   setSelectPrice({
//                     minPrice: item.minPrice,
//                     maxPrice: item.maxPrice,
//                   });
//                 }}
//               />
//              {item.label}
//             </div>
//           );
//         })}
//       </form>
//     </div>
//   );
// };

// export default PriceFilter;
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { MinMaxPriceRange } from "../../../../../Interfaces/MinMaxPriceRange";
import { PriceRanges } from "../../../../../Interfaces/PriceRanges";
import "./PriceFilter.sass";
const PriceFilter: React.FC<{
  selectPrice: MinMaxPriceRange;
  setSelectPrice: (newPriceRange: MinMaxPriceRange) => void;
}> = ({ selectPrice, setSelectPrice }) => {
  const priceRangeList: PriceRanges[] = [
    {
      label: "Below 500",
      minPrice: "0",
      maxPrice: "500",
    },
    {
      label: "500 To 1000",
      minPrice: "500",
      maxPrice: "1000",
    },
    {
      label: "1000 to 2000",
      minPrice: "1000",
      maxPrice: "2000",
    },
    {
      label: "Above 500",
      minPrice: "2000",
      maxPrice: "Infinite",
    },
  ];
  return (
    <FormControl className="priceRange">
      PRICE RANGE
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Price Range"
        name="radio-buttons-group"
      >
        {priceRangeList.map((item: PriceRanges) => {
          return (
            <FormControlLabel
              value={item.label}
              control={<Radio />}
              label={item.label}
              onChange={(e) => {
                e.preventDefault();
                setSelectPrice({
                  minPrice: item.minPrice,
                  maxPrice: item.maxPrice,
                });
              }}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
export default PriceFilter;
