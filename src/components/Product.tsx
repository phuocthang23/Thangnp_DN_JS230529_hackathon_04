import React, { useEffect, useState } from "react";
import Cart from "./Carts";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface quantity extends Product {
  quantity: number;
}
interface ProductsProps {
  products: quantity[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<quantity[]>([]);

  const AddCart = (id: number) => {
    const productToAdd = products.find((p) => p.id === id);
    if (productToAdd) {
      const existingProductIndex = cart.findIndex((item) => item.id === id);

      if (existingProductIndex !== -1) {
        // Sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
        const updatedCart = cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
        setCart(updatedCart);
      } else {
        // Sản phẩm chưa có trong giỏ hàng, thêm mới vào
        setCart((prev) => [...prev, { ...productToAdd, quantity: 1 }]);
      }
    }
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className={`container ${isOpen ? "active" : ""}`}>
      <header>
        <h1>Your Shopping Cart</h1>
        <div className="shopping" onClick={() => setIsOpen(true)}>
          <i className="bx bx-cart icon"></i>
          <span className="quantity">{cart.length}</span>
        </div>
      </header>
      <div className="list">
        {products.map((product, key) => (
          <div key={key} className="item">
            <img src={product.image} alt={product.image} />
            <div className="title">{product.name}</div>
            <div className="price">Giá: {product.price.toLocaleString()} VNĐ</div>
            <button onClick={() => AddCart(product.id)}>Add To Cart</button>
          </div>
        ))}
      </div>
      <Cart shop={cart} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Products;
