function SideBar({ categories, activeCategoryId, onSelectCategory }) {
  return (
    <aside className="w-[320px] h-full bg-[#FCF8F1] overflow-y-auto border-r border-stone-200 custom-scrollbar flex-shrink-0">
      <ul className="flex flex-col w-full py-4">
        {categories.map((category) => {
          const isActive = activeCategoryId === category.id;
          
          return (
            <li
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`
                w-full px-8 py-[14px] cursor-pointer text-[17px] transition-all duration-150
                ${isActive 
                  ? "bg-[#29221D] text-[#FCF8F1]" 
                  : "text-[#5C534A] hover:bg-[#f2eee7]"
                }
              `}
            >
              <span className="font-light tracking-wide">{category.name}</span>
              {category.time && (
                <span className={`ml-2 text-[14px] font-light ${isActive ? "text-stone-300" : "text-stone-400"}`}>
                  {category.time}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;