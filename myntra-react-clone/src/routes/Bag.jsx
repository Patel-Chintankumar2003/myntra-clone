import { useSelector } from "react-redux";
import Bagitem from "../Components/Bagitem";
import BagSummary from "../Components/BagSummary";

const Bag = () => {
  const bagitem = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagitem.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <Bagitem item={item} />
            ))}
          </div>

          <div className="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
    </>
  );
};
export default Bag;
