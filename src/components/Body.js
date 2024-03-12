import { useState, useEffect, useContext } from "react";
import { resData } from "../utils/DummyApi";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const { setUserName } = useContext(UserContext);

  const VegRestaurantCard = withVegLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);

      const json = await data.json();
      if (
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ) {
        setListOfRestaurants(
          json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
        setFilteredRestaurant(
          json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
      } else {
        setListOfRestaurants(resData);
        setFilteredRestaurant(resData);
      }
    } catch (error) {
      console.log(error);
      setListOfRestaurants(resData);
      setFilteredRestaurant(resData);
    }
  };

  filterTopRatedRestaurants = () => {
    const filteredListOfRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4.2
    );
    setFilteredRestaurant(filteredListOfRestaurants);
  };

  showAllRestaurants = () => {
    setFilteredRestaurant(listOfRestaurants);
    setUserName("Mridul Uppal");
  };

  searchRestaurants = () => {
    if (searchText === "") {
      setFilteredRestaurant(listOfRestaurants);
    } else {
      const searchedRestaurants = listOfRestaurants.filter((res) =>
        res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(searchedRestaurants);
    }
  };

  if (!onlineStatus) {
    return <h1>You seem offline!</h1>;
  }
  // console.log(filteredRestaurant);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4">
          <input
            type="text"
            className="p-1 border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="px-2 py-1 ml-3 bg-green-100 rounded-lg hover:bg-green-200"
            onClick={() => searchRestaurants()}
          >
            Search
          </button>
        </div>
        <div className="m-3">
          <button
            className="px-2 py-2 bg-green-100 rounded-lg  hover:bg-green-200"
            onClick={() => filterTopRatedRestaurants()}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-3">
          <button
            className="px-2 py-2 bg-green-100 rounded-lg  hover:bg-green-200"
            onClick={() => showAllRestaurants()}
          >
            Show All Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        {filteredRestaurant?.map((resItems) => (
          <Link
            key={resItems?.info?.id}
            to={"/restaurant/" + resItems?.info?.id}
          >
            {resItems?.info?.veg ? (
              <VegRestaurantCard resData={resItems} />
            ) : (
              <RestaurantCard resData={resItems} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
