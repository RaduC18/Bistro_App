function MenuButtons({ index, total, onLeft, onRight }) {
  return (
    <>
      <div className="flex items-center justify-center gap-1">
        <span>Page</span>
        <span className="font-medium">{index + 1}</span>
        <span>out of</span>
        <span>{total}</span>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6 pb-20">
        <button
          data-slot="menu-btn"
          onClick={onLeft}
        >
          ← Prev
        </button>
        <button
          data-slot="menu-btn"
          onClick={onRight}
        >
          Next →
        </button>
      </div>
    </>
  );
}

export default MenuButtons;