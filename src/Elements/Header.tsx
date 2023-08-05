const Header = () => {
  const handleClick = () => {
    document.getElementById("menu")?.classList.toggle("-right-full");
    document.getElementById("menu")?.classList.toggle("-right-0");
    document.getElementById("menu")?.classList.toggle("hidden");
  };

  return (
    <header className="flex items-center mb-14 top-0 head-anim">
      <img src="./logo.svg" alt="logo" className="mr-auto" />
      <nav className="flex gap-10 md:hidden">
        <a href="home">Home</a>
        <a href="new">New</a>
        <a href="popular">Popular</a>
        <a href="trending">Trending</a>
        <a href="categories">Categories</a>
      </nav>
      <img
        src="./icon-menu.svg"
        alt="icon menu"
        className="hidden md:block cursor-pointer"
        onClick={handleClick}
      />
      <nav
        id="menu"
        className="absolute -top-0 -right-full h-screen w-menu bg-white  flex-col transition-all z-20 px-4 py-12 hidden"
      >
        <img
          src="./icon-menu-close.svg"
          alt="icon menu close"
          className="cursor-pointer ml-auto"
          onClick={handleClick}
        />
        <div className="flex flex-col gap-5 text-very-dark-blue font-bold mt-10">
          <a href="home">Home</a>
          <a href="new">New</a>
          <a href="popular">Popular</a>
          <a href="trending">Trending</a>
          <a href="categories">Categories</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
