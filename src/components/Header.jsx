import {
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
  FaCartPlus,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartPlus from "./CartPlus.jsx";
import ListNav from "./ListNav.jsx";

function Header() {
  const LocalStorageLength =
    localStorage.length > 0
      ? JSON.parse(localStorage.getItem("NewProduct")).length
      : 0;
  const [CardItemNumber, setCardItemNumber] = useState(0);
  useEffect(() => {
    setCardItemNumber(LocalStorageLength);
  }, [LocalStorageLength]);
  const handleHiddenState = (hiddenState) => {
    setDisplayState(hiddenState);
  };
  const [displayState, setDisplayState] = useState(false);
  const handleDisplayState = () => {
    setDisplayState(true);
  };
  const [handleClick, setHandleClick] = useState("Home");
  const handleNavClick = (state) => {
    setHandleClick(state);
  };
  const [diplayList, setDiplayList] = useState(false);
  const handleListe = () => {
    setDiplayList(!diplayList);
  };
  return (
    <>
      <header
        className={`py-1 bg-slate-950 px-10 text-white shadow-sm shadow-gray-600 fixed w-screen z-10 transition-colors duration-500 md:block hidden`}
      >
        <nav className="flex ">
          <div className="w-2/5 text-center flex justify-center ">
              <img
                className="w-1/6"
                src="src/assets/Logo-v.0.4.png"
                alt="Logo"
              />
            {/* <Link to="/"> */}
              <h1 className="font-semibold grid place-items-center text-sm">
                Achraf-Store
              </h1>
            {/* </Link> */}
            
          </div>
          <div className="w-2/5 text-center  justify-center grid place-items-center">
            <ul className="flex space-x-4 align-center text-sm">
              <Link
                to="/"
                className={`hover:text-slate-700 border-red-600 ${
                  handleClick == "Home" ? "border-b" : ""
                }`}
                onClick={() => {
                  handleNavClick("Home");
                }}
              >
                Home
              </Link>
              <Link
                to="/Store"
                className={`hover:text-slate-700 border-red-600 ${
                  handleClick == "Store" ? "border-b" : ""
                }`}
                onClick={() => {
                  handleNavClick("Store");
                }}
              >
                Store
              </Link>
              <Link
                to="/Contact"
                className={`hover:text-slate-700 border-red-600 ${
                  handleClick == "Contact" ? "border-b" : ""
                }`}
                onClick={() => {
                  handleNavClick("Contact");
                }}
              >
                Contact
              </Link>
            </ul>
          </div>
          <div className="w-1/5 text-center grid place-items-center">
            <div className="flex justify-between w-1/4">
              <FaYoutube className="w-1/3  hover:text-slate-700" />
              <FaFacebook className="w-1/3 hover:text-slate-700" />
              <FaWhatsapp className="w-1/3 hover:text-slate-700" />
            </div>
          </div>
          <div className="w-1/5 text-center grid place-items-center">
            <div className="w-auto relative">
              <FaCartPlus
                className="w-full hover:text-slate-700 text-xl cursor-pointer"
                onClick={handleDisplayState}
              />
              <span className="absolute -top-1 -right-2 bg-red-500 text-xs rounded-full px-1 cursor-none">
                {CardItemNumber}
              </span>
            </div>

            {displayState && <CartPlus handleHiddenState={handleHiddenState} />}
          </div>
        </nav>
      </header>
      <header
        className={`py-1 bg-slate-950 px-10 text-white shadow-sm shadow-gray-600 fixed w-screen z-10 transition-colors duration-500 md:hidden`}
      >
        <nav className="flex py-1 items-center px-5">
          <div className="w-1/3">
            <FaBars className="cursor-pointer text-xl" onClick={handleListe} />
            {diplayList && (
              <ListNav diplayList={diplayList} handleListe={handleListe} />
            )}
          </div>
          <div className="w-1/3 text-center flex justify-center ">
            <img className="w-3/6" src="src/assets/Logo-v.0.4.png" alt="Logo" />
            <h1 className="font-semibold grid place-items-center text-xs w-3/6">
              Achraf-Store
            </h1>
          </div>
          <div className="w-1/3 text-center grid place-items-center justify-end">
            <div className="w-auto relative ">
              <FaCartPlus
                className="w-full hover:text-slate-700 text-xl cursor-pointer"
                onClick={handleDisplayState}
              />
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full px-1 cursor-none">
                {CardItemNumber}
              </span>
            </div>
            {displayState && <CartPlus handleHiddenState={handleHiddenState} />}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
