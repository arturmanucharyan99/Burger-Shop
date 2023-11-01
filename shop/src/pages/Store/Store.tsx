import { FC, useEffect, useState } from "react";
import "./Store.css";
import Footer from "../../components/Footer/Footer";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useActions } from "../../hooks/useActions";
import InstaImage from "../../components/InstaImage/InstaImage";
import Burgers from "../../components/Burgers/Burgers";

const Store: FC = () => {
  const { burgers, loading, error, limit, page } = useTypedSelector(
    (state) => state.burgers
  );
  const { fetchBurgers } = useActions();
  const pages = [1, 2, 3, 4, 5];
  const [selectedPage, setSelectedPage] = useState<number>(1);

  useEffect(() => {
    fetchBurgers(page, limit);
  }, []);

  function handleClick(page: number) {
    setSelectedPage(page);
    fetchBurgers(page, limit);
  }

  if (loading) {
    return <h1 className="load">Loading ...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <div className="cont">
        <div className="store">
          <div className="title-burger">
            <h2>Our Burgers</h2>
          </div>
          <div className="products">
            {burgers?.map((el) => (
              <Burgers key={el.id} view="store" selectedPage={selectedPage} {...el} />
            ))}
          </div>
          <div className="pages">
            {pages.map((el) => (
              <div
                className={"page"}
                style={{ color: el === selectedPage ? "orange" : "" }}
                onClick={(e) => handleClick(el)}
                key={el}
              >
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>
      <InstaImage />
      <Footer />
    </>
  );
}

export default Store;
