import Aside from "./Content/Aside";
import Best from "./Content/Best";
import Main from "./Content/Main";

const Content = () => {
  return (
    <section className="grid grid-rows-3 grid-cols-3 gap-[30px]">
      <Main />
      <Aside />
      <Best />
    </section>
  );
};

export default Content;
