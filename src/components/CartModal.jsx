import { useState, useEffect, useRef } from "react";

function CartModal({ products, onClose, onIncrease, onDecrease, onClear }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  const cartItems = products.filter((p) => p.cartQuantity > 0);

  const totalPrice = cartItems.reduce(
    (sum, p) => sum + parseFloat(p.price) * p.cartQuantity,
    0,
  );

  const [fulfillmentMethod, setFulfillmentMethod] = useState("delivery");

  const minOrderValue = 50; 
  const missingAmount = minOrderValue - totalPrice;

  return (

    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="fixed  bg-transparent p-0 m-0 max-w-none max-h-none h-full w-full flex justify-center z-50 backdrop:bg-black/40 open:flex animate-fadeIn"
    >
      <div className="absolute" onClick={onClose} />

      <div className="relative w-full max-w-[550px] h-full bg-[#FCF8F1] shadow-2xl flex flex-col z-10 animate-slideLeft overflow-y-auto p-6">
        <div className="flex justify-between items-center border-b border-stone-200 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-normal text-[#29221D]">Cart</h2>
            {cartItems.length > 0 && (
              <button
                onClick={onClear}
                className="text-sm text-orange-600 hover:underline"
              >
                Clear all
              </button>
            )}
          </div>
          
          <button
            onClick={onClose}
            className="text-[#29221D] cursor-pointer text-2xl font-light"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-start border-b border-stone-100 pb-4"
            >
              <div>
                <h4 className="font-normal text-[#29221D] text-[17px]">
                  {item.name}
                </h4>
                <p className="text-stone-500 text-sm font-light">
                  {item.price} RON
                </p>
              </div>
              <div className="flex items-center bg-stone-100 rounded-full border border-stone-200 px-2 py-1 gap-3">
                <button
                  onClick={() => onDecrease(item.id)}
                  className="text-stone-600 hover:text-black font-semibold px-1"
                >
                  -
                </button>
                <span className="text-sm font-medium text-[#29221D]">
                  {item.cartQuantity}
                </span>
                <button
                  onClick={() => onIncrease(item.id)}
                  className="text-stone-600 hover:text-black font-semibold px-1"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {cartItems.length === 0 ? (
            <p className="text-stone-400 text-center font-light pt-10">
              Your cart is empty.
            </p>
          ) : (
            <div className="pt-6 border-t border-stone-200 space-y-4">
              <h3 className="text-md font-medium text-[#29221D]">
                Fulfillment Method
              </h3>

              <div className="space-y-2">
                {["delivery", "pickup", "dine-in"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-3 p-3 bg-white border border-stone-200 rounded-lg cursor-pointer hover:bg-stone-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="fulfillment"
                      checked={fulfillmentMethod === method}
                      onChange={() => setFulfillmentMethod(method)}
                      className="accent-[#29221D]"
                    />
                    <span className="capitalize text-stone-700 font-light text-[15px]">
                      {method === "dine-in" ? "Dine-in restaurant" : method}
                    </span>
                  </label>
                ))}
              </div>
              {fulfillmentMethod === "delivery" && (
                <div className="space-y-3 pt-2">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="text-sm text-stone-600 font-light">
                        Street
                      </label>
                      <input
                        type="text"
                        className="w-full border border-stone-300 rounded p-2 bg-white text-sm"
                      />
                    </div>
                    <div className="w-[100px]">
                      <label className="text-sm text-stone-600 font-light">
                        Number
                      </label>
                      <input
                        type="text"
                        className="w-full border border-stone-300 rounded p-2 bg-white text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-stone-600 font-light">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full border border-stone-300 rounded p-2 bg-white text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="pt-4 border-t border-stone-200 bg-[#FCF8F1]">
            {missingAmount > 0 && (
              <div className="bg-red-50 text-red-700 text-sm p-3 rounded-md mb-4 flex items-center gap-2">
                 Minimum order value is missing {missingAmount.toFixed(2)} RON
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 bg-white border border-stone-300 text-stone-700 py-3 rounded-full hover:bg-stone-50 transition-colors text-sm"
              >
                Continue Shopping
              </button>
              <button
                disabled={missingAmount > 0}
                className={`flex-1 py-3 rounded-full text-white text-sm font-medium transition-colors ${missingAmount > 0 ? "bg-stone-400 cursor-not-allowed" : "bg-[#29221D] cursor-pointer hover:bg-[#3d322a]"}`}
              >
                Checkout {totalPrice.toFixed(2)} RON
              </button>
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
}

export default CartModal;