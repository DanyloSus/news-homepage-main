const Aside = () => {
  return (
    <aside className=" row-span-2 bg-very-dark-blue asid-anim">
      <h2>New</h2>
      <div className="grid grid-rows-3 h-full">
        <div>
          <h3>Hydrogen VS Electric Cars</h3>{" "}
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr />
        </div>
        <div>
          <h3>The Downsides of Al Artistry</h3>{" "}
          <p>
            What are the possible adverse effects of on-demand Al image
            generation
          </p>
          <hr />
        </div>
        <div>
          <h3>Is VC Funding Drying Up?</h3>{" "}
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means..
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
