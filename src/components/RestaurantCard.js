import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-64 h-96 bg-gray-100 rounded-lg hover:shadow-2xl hover:bg-gray-200 relative">
      <img
        className="w-56 h-56 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="w-36 text-sm mb-2">{cuisines.slice(0, 3).join(", ")}</h4>
      <div className="absolute bottom-0 right-0 text-right p-2">
        <h4 className="font-semibold">⭐ {avgRatingString}</h4>
        <h4 className="text-green-500">{sla.slaString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white ml-5 mt-2 p-1 z-10 rounded-lg">Pure Veg</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
