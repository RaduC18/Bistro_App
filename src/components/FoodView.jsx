function FoodView({ products, categories, activeCategoryId, onAddToCart }) {

  const filteredProducts = products.filter(
    (product) => product.categoryId === activeCategoryId
  );


  return (
    <div className="flex-1 px-8 py-6 bg-[#FCF8F1]">
      <div className="border-b border-stone-200 pb-4 mb-8 w-full">
        <h3 className="text-[15px] font-light text-stone-600 tracking-wide">
          {categories[activeCategoryId-1].name} {categories[activeCategoryId-1].time}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col pb-10 border-b border-stone-200 group">

            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-stone-100 mb-4 cursor-pointer shadow-sm">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105" 
              />
            </div>

            {/* Numele și Descrierea */}
            <h4 className="text-[18px] text-[#29221D] mb-1.5 font-normal  decoration-stone-300">
              {product.name}
            </h4>
            
            <p className="text-[14px] text-stone-500 font-light leading-relaxed mb-5 flex-1">
              {product.description}
            </p>

            <div>
              <button 
                onClick={() => onAddToCart(product.id)}
                className="flex items-center gap-2 bg-[#29221D] text-white px-5 py-2.5 cursor-pointer rounded-full hover:bg-[#3d322a] transition-colors w-max select-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-[18px] h-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <span className="text-[14px] font-semibold tracking-wide">
                  {product.price} RON
                </span>
                
                {product.cartQuantity > 0 && (
                  <span className="ml-1 bg-white text-[#29221D] text-[12px] font-bold w-5 h-5 flex items-center justify-center rounded-full leading-none">
                    {product.cartQuantity}
                  </span>
                )}
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodView;