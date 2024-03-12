import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showCategory, setShowIndex }) => {
  // console.log(data);

//   const [showCategory, setShowCategory] = useState(false);

  const handleCLick = () => {
    // setShowCategory(!showCategory);
    setShowIndex();
  };

  return (
    <div>
      <div className="w-full bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleCLick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{!showCategory ? "🔽" : "🔼" }</span>
        </div>
        {showCategory && (
          <div className="bg-white mt-2">
            <ItemList menuItems={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
