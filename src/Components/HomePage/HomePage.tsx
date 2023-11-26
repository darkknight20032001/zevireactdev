import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
interface Products {
  name: string;
  price: string;
  image: string;
  rating: string;

}
const HomePage = () => {
  const [productInfo, setProductInfo] = useState<Products[]>([]);

  function getProductData() {
    let arr: Products[] = [];
    for (let i = 0; i < 1000; i++) {
      const randomProductName: string = faker.commerce.productName();
      const randomProductPrice: string = faker.commerce.price();
      const randomProductImg: string = faker.image.avatar();
      const productObj: Products = {
        name: randomProductName,
        price: randomProductPrice,
        image: randomProductImg,
        rating: String(Math.round(Math.random()*5))
      };
      arr.push(productObj);
    }
    setProductInfo(arr);
  }
  useEffect(() => {
    getProductData();
  }, []);
  console.log(productInfo);
  return (
    <div>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default HomePage;
