import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const data = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);

  return (
    <div className="flex justify-between bg-orange-100 shadow-lg items-center">
      <div className="flex">
        <Link to="/">
          <span className="text-6xl mx-4">🍜</span>
          <span className="text-2xl font-bold">
            Khaao Pioo Aish Kro Mitro 🕺
          </span>
          {/* <img className="w-14 mx-3" src={LOGO_URL}></img> */}
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({cart.length} items)</Link>
          </li>
          {btnName === "Logout" && (
            <li className="px-4 py-1 font-bold bg-orange-500 rounded-lg text-white">
              👤 {data.loggedInUser}
            </li>
          )}
          <button
            className="px-4"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
