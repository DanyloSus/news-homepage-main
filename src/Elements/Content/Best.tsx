const Best = () => {
  return (
    <article
      id="best"
      className="col-span-3 flex items-center gap-6 md:flex-col best-anim"
    >
      <div className="flex">
        <img src="./image-retro-pcs.jpg" alt="image retro pcs" />
        <div>
          <h2>01</h2>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="flex">
        <img src="./image-top-laptops.jpg" alt="image top laptops" />
        <div>
          <h2>02</h2>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets</p>
        </div>
      </div>
      <div className="flex">
        <img src="./image-gaming-growth.jpg" alt="image gaming growth" />
        <div>
          <h2>03</h2>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities</p>
        </div>
      </div>
    </article>
  );
};

export default Best;
