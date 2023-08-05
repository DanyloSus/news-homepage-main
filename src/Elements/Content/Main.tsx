const Main = () => {
  return (
    <article className="row-span-2 col-span-2 grid grid-rows-[300px_1fr] grid-cols-2 gap-5">
      <img
        src="./image-web-3-desktop.jpg"
        alt="image web 3 desktop"
        className="col-span-2"
      />
      <h1 className="text-6xl font-extrabold">The Bright Future of Web 3.0?</h1>
      <section className="flex flex-col justify-between items-start">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back it the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="px-8 py-3 bg-soft-red text-white font-bold text-sm tracking-[4px] hover:bg-very-dark-blue">
          READ MORE
        </button>
      </section>
    </article>
  );
};

export default Main;
