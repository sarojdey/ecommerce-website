import { useState, useEffect } from "react";
import { DataContext } from "./DataContext";
import data from "../data/data.json";

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    const storedSubtotal = JSON.parse(localStorage.getItem("subtotal"));

    if (storedCart && storedCart.length > 0) {
      setCart(storedCart);
    }
    if (storedWishlist && storedWishlist.length > 0) {
      setWishlist(storedWishlist);
    }
    if (storedSubtotal && !isNaN(storedSubtotal)) {
      setSubtotal(storedSubtotal);
    }

    setItems(data);
  }, []);

  useEffect(() => {
    if (cart.length >= 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    if (wishlist.length >= 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    if (subtotal >= 0) {
      localStorage.setItem("subtotal", JSON.stringify(subtotal));
    }
  }, [cart, wishlist, subtotal]);

  const addToCart = (newItem, quantity) => {
    const index = cart.findIndex((item) => item.id === newItem.id);

    if (index !== -1) {
      setCart(
        cart.map((item, idx) =>
          idx === index ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      setCart([...cart, { ...newItem, quantity }]);
    }

    setSubtotal((prev) => prev + newItem.price * quantity);
  };

  const removeFromCart = (index) => {
    const removedItem = cart[index];
    setSubtotal((prev) => prev - removedItem.price * removedItem.quantity);
    setCart(cart.filter((_, idx) => idx !== index));
  };

  const addToWishlist = (newItem) => {
    if (!wishlist.find((item) => item.id === newItem.id)) {
      setWishlist([...wishlist, newItem]);
    }
  };

  const removeFromWishlist = (index) => {
    setWishlist(wishlist.filter((_, idx) => idx !== index));
  };

  return (
    <DataContext.Provider
      value={{
        cart,
        wishlist,
        items,
        subtotal,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
