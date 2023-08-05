const Main = () => {
  return (
    <article className="row-span-2 col-span-2 grid grid-rows-[300px_1fr] grid-cols-2 gap-5 md:flex flex-col main-anim">
      <img
        src="./image-web-3-desktop.jpg"
        alt="image web 3 desktop"
        className="col-span-2 md:hidden"
      />
      <img
        src="image-web-3-mobile.jpg"
        alt="image web 3 mobile"
        className="hidden md:block"
      />
      <h1 className="text-6xl font-extrabold overflow-hidden md:text-5xl">
        The Bright Future of Web 3.0?
      </h1>
      <section className="flex flex-col justify-between items-start md:gap-5">
        <p className="md:text-[15.5px]">
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
