import React, { useEffect, useState } from "react";
import "./SuggestionList.sass";
import { faker } from "@faker-js/faker";
const SuggestionList: React.FC = () => {
  const [arrList, setArrList] = useState<string[]>([]);
  function getList() {
    let arr: string[] = [];
    for (let i = 1; i <= 5; i++) {
      const randomProductName: string = faker.commerce.productName();
      arr.push(randomProductName);
    }
    setArrList(arr);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="suggestionList">
      <p><b>Popular suggestions</b></p>
      <div className="suggestionListItems">
        {arrList.length > 0 &&
          arrList.map((suggestionItems: string) => {
            return <div>{suggestionItems}</div>;
          })}
      </div>
    </div>
  );
};

export default SuggestionList;
