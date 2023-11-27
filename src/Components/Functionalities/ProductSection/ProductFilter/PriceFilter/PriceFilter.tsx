import React from "react";
interface PriceRanges {
  label: string;
  minPrice: string;
  maxPrice: string;
}
interface MinMaxPriceRange {
  minPrice: string;
  maxPrice: string;
}
const PriceFilter: React.FC<{
  selectPrice: MinMaxPriceRange,
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
    <div className="PriceFilter">
      {priceRangeList.map((item: PriceRanges) => {
        return (
          <div
            key={item.label}
            onClick={(e) => {
              e.preventDefault();
              setSelectPrice({
                minPrice: item.minPrice,
                maxPrice: item.maxPrice,
              });
            }}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default PriceFilter;
