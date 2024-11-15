import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartPlus({ handleHiddenState }) {
  const dataLocalStorage =
    localStorage.length > 0 ? [...JSON.parse(localStorage.NewProduct)] : [];
  const [localStorageState, setLocalStorageState] = useState(dataLocalStorage);
  const [hidden, setHidden] = useState(true);
  const handleHiddenCard = () => {
    setHidden(false);
    handleHiddenState(false);
  };

  useEffect(() => {
    setLocalStorageState(localStorageState);
  }, [localStorageState]);

  const dataFromLocaStorage =
    localStorage.length > 0 ? [...JSON.parse(localStorage.NewProduct)] : [];
  const Total = dataFromLocaStorage
    .map((item) => Number(item.Price_quantity))
    .reduce((pre, curr) => pre + curr, 0);

  return (
    <aside
      className={`h-screen md:w-1/4 w-2/3 bg-white border absolute top-0 bottom-0 right-0 text-black transition-transform duration-500 ${
        !hidden ? "hidden" : ""
      } shadow-2xl flex flex-col `}
    >
      <div className="relative w-full"> 
        <div className="bg-slate-950 px-1 md:pb-6 md:pt-7 pb-4 pt-6  text-white flex ">
          <h3 className="w-2/3">
            My Pannel <b>{localStorageState.length}</b> Articles
          </h3>
          <div className="w-1/3">
            <button
              className="text-xs font-bold border rounded-full px-2 py-1 "
              onClick={handleHiddenCard}
            >
              X
            </button>
          </div>
        </div>
        <div className="">
          <div className="  pb-56 justify-center h-screen overflow-y-scroll ">
            {localStorageState.map((item, index) => (
              <div
                key={index}
                className="flex text-center place-items-center border hover:bg-slate-100 text-sm"
              >
                <div className="w-1/4">
                  <img
                    src={item.imageProduct}
                    alt={`picture-${item.titleProduct}`}
                    className=" rounded-full py-2 px-1 object-cover"
                  />
                </div>
                <div className="w-2/4 ">
                  <h5>{item.titleProduct}</h5>
                  <p className="text-left">{item.priceProduct},00$</p>
                </div>
                <div className="md:w-1/4 w-2/4 text-center flex justify-center">
                  <Link to={`/ProductDetails/${item.idProduct}`}>
                    <FaEye className="w-full"/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-950  py-4 text-white flex sticky w-full bottom-0   object-cover">
          <div className="w-5/6 mx-auto">
            <div className="flex justify-between mb-2">
              <h4 className="text-sm ">Current Total </h4>
              <h4 className="text-sm ">{Total},00$</h4>
            </div>
            <Link to="/CompleteOrders">
              <button className="text-xs w-full  font-bold border rounded px-2 py-3 hover:bg-white hover:text-slate-950">
                Complete My Orders
              </button>
            </Link>
          </div>
        </div>
      </div>

    </aside>
  );
}

export default CartPlus;
