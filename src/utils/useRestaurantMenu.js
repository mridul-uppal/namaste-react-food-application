import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_URL } from "../utils/constants";

const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_URL + resid);
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
