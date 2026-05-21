import MenuButtons from "./MenuButtons.jsx";

const Presentation = ({ title, description, menu, meniuPhotos, index }) => {
  return (
    <section className="w-full py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12 text-left">
          {
           title && <h2 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            {title}
          </h2>
          }
          
          {description && (
            <p className="mt-4 text-stone-500 text-lg md:text-xl max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {menu === false ? (
          <img
            src={meniuPhotos[0].img}
            alt={meniuPhotos[0].name}
            className="h-128 w-full rounded-[2.5rem]"
          />
        ) : (
          <img
            src={meniuPhotos[index].img}
            alt={meniuPhotos[index].name}
            className="max-w-full h-160 border border-gray-200 rounded-lg shadow-lg w-full select-none"
          />
        )}
      </div>
    </section>
  );
};

export default Presentation;