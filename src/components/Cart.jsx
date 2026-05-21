function Cart({ products = [], onOpenCart }) {
  const totalItems = products.reduce(
    (sum, product) => sum + product.cartQuantity,
    0,
  );

  return (
    <div className="flex justify-end text-center pt-20 pb-5 px-6">
      <button
        onClick={onOpenCart}
        className="relative flex items-center gap-2 bg-white  border border-stone-200 px-4 py-1.5 rounded-[0.9rem] shadow-sm hover:bg-stone-50"
      >
        {totalItems > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-[#29221D] text-[white] text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full z-10">
            {totalItems}
          </span>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>

        <span className="text-[15px] font-light tracking-wide">Cart</span>
      </button>
    </div>
  );
}

export default Cart;
