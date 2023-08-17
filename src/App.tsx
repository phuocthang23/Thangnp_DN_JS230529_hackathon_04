import React from "react";
import "./App.css";
import Products from "./components/Product";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

function App() {
  const product: Product[] = [
    {
      id: 1,
      name: "Salad",
      image: "https://e7.pngegg.com/pngimages/692/99/png-clipart-delicious-food-food-salad-thumbnail.png",
      price: 30000,
    },
    {
      id: 2,
      name: "Phở",
      image: "https://e7.pngegg.com/pngimages/571/870/png-clipart-noodle-noodle-thumbnail.png",
      price: 50000,
    },
    {
      id: 3,
      name: "Hamburger",
      image: "https://e7.pngegg.com/pngimages/716/741/png-clipart-gourmet-burgers-hamburger-food-thumbnail.png",
      price: 45000,
    },
    {
      id: 4,
      name: "Khoai tây chiên",
      image:
        "https://e7.pngegg.com/pngimages/989/464/png-clipart-fries-on-plate-french-fries-potato-chip-fried-rice-frying-french-fries-food-recipe-thumbnail.png",
      price: 26490000,
    },
    {
      id: 5,
      name: "Cơm chiên",
      image:
        "https://e7.pngegg.com/pngimages/376/741/png-clipart-fried-rice-chinese-cuisine-paella-pizza-pasta-rice-food-recipe-thumbnail.png",
      price: 26490000,
    },
    {
      id: 6,
      name: " bánh mì",
      image:
        "https://e7.pngegg.com/pngimages/475/139/png-clipart-sandwich-with-meat-and-lettuce-banh-mi-food-sandwiches-thumbnail.png",
      price: 26490000,
    },
  ];
  return (
    <div>
      <Products products={product} />
    </div>
  );
}

export default App;
