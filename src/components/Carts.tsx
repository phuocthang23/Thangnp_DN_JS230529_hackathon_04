import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductInCart extends Product {
  quantity: number;
}

interface CartProps {
  shop: ProductInCart[];
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ shop, onClose }) => {
  const totalPrice = shop.reduce((total, product) => total + product.price * product.quantity, 0);

  const [updatedShop, setUpdatedShop] = useState(shop);
  console.log(updatedShop);
  const changeIncrease = (id: number) => {
    const newShop = updatedShop.map((product) =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    );
    setUpdatedShop(newShop);
  };

  const changeDecrease = (id: number) => {
    const newShop = updatedShop.map((product) =>
      product.id === id && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
    );
    setUpdatedShop(newShop);
  };

  return (
    <div className="card">
      <h1>Cart</h1>
      <ul className="listCard">
        {shop.map((product, key) => (
          <li key={key}>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <div>{product.name}</div>
            <div>{product.price.toLocaleString()}</div>
            <div>
              <button onClick={() => changeDecrease(product.id)}>-</button>
              <div className="count">{product.quantity}</div>
              <button onClick={() => changeIncrease(product.id)}>+</button>
            </div>
            <div></div>
          </li>
        ))}
      </ul>
      <div className="checkOut">
        <div className="total">Total: {totalPrice.toLocaleString()} VNĐ</div>
        <div className="closeShopping" onClick={onClose}>
          Close
        </div>
      </div>
    </div>
  );
};

export default Cart;
