import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ menuItems, cart }) => {
  const dispatch = useDispatch();
  const handleAddItem = (cartItem) => {
    dispatch(addItem(cartItem));
  };
  console.log(menuItems);
  return (
    <>
      <ul className="flex flex-wrap">
        {menuItems?.map((items) => {
          console.log(items.card.info);
          return (
            <li key={items.card.info.id}>
              <div className="mx-auto my-4 p-4 w-full hover:bg-gray-100 cursor-pointer grid grid-cols-12">
                <div className="col-start-1 col-end-11 mr-2">
                  <h3 className="font-bold py-2 text-lg">
                    {items.card.info.name}
                  </h3>
                  <h4>{items.card.info.description}</h4>
                  <h4 className="font-semibold mt-2 mb-2">
                    Rs.{" "}
                    {items.card.info.price / 100 ||
                      items.card.info.defaultPrice / 100}
                    /-
                  </h4>
                </div>
                <div className="col-span-1">
                  {!cart && (
                    <div className="absolute">
                      <button
                        className="p-2 bg-green-500 hover:bg-green-700 text-white shadow-lg rounded-lg m-16"
                        onClick={() => handleAddItem(items)}
                      >
                        Add +
                      </button>
                    </div>
                  )}
                  <img
                    className="w-56 rounded-lg"
                    src={CDN_URL + items.card.info.imageId}
                  ></img>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ItemList;
