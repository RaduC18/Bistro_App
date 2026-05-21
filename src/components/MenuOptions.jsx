import { useState } from "react";
import startingMenu from "../assets/startingMenu.png";
import SideBar from "./SideBar";
import FoodView from "./FoodView";
import Cart from "./Cart";
import CartModal from "./CartModal";
import { INITIAL_PRODUCTS, CATEGORIES } from "../db/db.js";
import useScroll from "../useScroll.js";

function MenuOptions() {
  useScroll("cart");
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleAddToCart(productId) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, cartQuantity: product.cartQuantity + 1 }
          : product,
      ),
    );
  }

  function handleRemoveFromCart(productId) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.cartQuantity > 0
          ? { ...product, cartQuantity: product.cartQuantity - 1 }
          : product,
      ),
    );
  }

  function handleClearCart() {
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({ ...product, cartQuantity: 0 })),
    );
  }

  return (
    <>
      <Cart products={products} onOpenCart={() => setIsCartOpen(true)} />
      <div className="flex pl-10">
        <SideBar
          categories={CATEGORIES}
          activeCategoryId={activeCategoryId}
          onSelectCategory={setActiveCategoryId}
        />
        <FoodView
          products={products}
          categories={CATEGORIES}
          activeCategoryId={activeCategoryId}
          onAddToCart={handleAddToCart}
        />
      </div>
      {isCartOpen && (
        <CartModal
          products={products}
          onClose={() => setIsCartOpen(false)}
          onIncrease={handleAddToCart}
          onDecrease={handleRemoveFromCart}
          onClear={handleClearCart}
          open={isCartOpen}
        />
      )}
    </>
  );
}

export default MenuOptions;
