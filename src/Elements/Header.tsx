const Header = () => {
  return (
    <header className="flex items-center mb-14">
      <img src="./logo.svg" alt="logo" />
      <nav className="flex ml-auto gap-10">
        <a href="home">Home</a>
        <a href="new">New</a>
        <a href="popular">Popular</a>
        <a href="trending">Trending</a>
        <a href="categories">Categories</a>
      </nav>
    </header>
  );
};

export default Header;
