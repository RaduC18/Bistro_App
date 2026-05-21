function Location() {
  return (
    <section id="location" className="w-full py-20 px-6 flex justify-center"> 
      
      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100 max-w-lg w-full text-center">
        <h3 className="font-bold text-stone-900 mb-2 uppercase tracking-widest text-xs">
          Where to find us
        </h3>
        <p className="text-stone-700 font-bold text-xl mt-2">
          Șoseaua Mihai Bravu 307
        </p>

        <div className="mt-6">
          <a
            href="https://maps.google.com/?q=Bucharest+McDonald`s+Dristor"
            target="_blank"
            className="text-orange-600 font-bold hover:underline text-sm"
          >
            Google Maps Directions
          </a>
        </div>
      </div>

    </section>
  );
}

export default Location;