import { useRef, useState } from "react";

function FoodScroll({ photos }) {
  const scrollRef = useRef();
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  function handleMouseDown(e) {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }

  function handleMouseUp() {
    setIsDown(false);
  }

  function handleMouseLeave() {
    setIsDown(false);
  }

  function handleMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }

  return (
    <section className="w-full py-12 bg-transparent">
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={`
          flex overflow-x-auto gap-6 px-10 no-scrollbar select-none
        `}
      >
        {photos.map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] h-[480px] flex-shrink-0 snap-center relative rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <img
              src={item.img}
              alt={item.name}
              className="absolute  w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 p-8">
              <p className="text-white font-bold text-2xl">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FoodScroll;