import { faker } from "@faker-js/faker";
import { Products } from "../Interfaces/Products";

let arr: Products[] = [];
let arrProduct: Products[] = [];

function getArrData() {
  for (let i = 1; i <= 100; i++) {
    const randomProductName: string = faker.commerce.productName();
    const randomProductPrice: string = faker.commerce.price();
    const randomProductImg: string = faker.image.avatar();
    const productObj: Products = {
      id: String(i),
      name: randomProductName,
      price: randomProductPrice,
      image: randomProductImg,
      rating: String(Math.round(Math.random() * 5)),
    };
    arr.push(productObj);
  }
}
function getProductData() {
  for (let i = 1; i <= 5; i++) {
    const randomProductName: string = faker.commerce.productName();
    const randomProductPrice: string = faker.commerce.price();
    const randomProductImg: string = faker.image.avatar();
    const productObj: Products = {
      id: String(i),
      name: randomProductName,
      price: randomProductPrice,
      image: randomProductImg,
      rating: String(Math.round(Math.random() * 5)),
    };
    arrProduct.push(productObj);
  }
}

getArrData();
getProductData();

export { arr, arrProduct };
