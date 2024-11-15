import { useEffect } from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaStore, FaSearch } from "react-icons/fa";
import { dataFetched } from "../App.jsx";
import ItemAdded from "./ItemAdded.jsx";

function Store() {
  const data = useContext(dataFetched);
  const [itemAdded, setItemAdded] = useState(false);
  const [dataDisplay, setDataDiplay] = useState(data);

  const AddToCard = (id) => {
    const RestOfStorage =
      localStorage.length > 0
        ? [
            ...JSON.parse(localStorage.NewProduct).filter(
              (item) => item.idProduct != id
            ),
          ]
        : [];
    const AllQuantity = JSON.parse(localStorage.NewProduct)
      .filter((item) => item.idProduct == id)
      .map((item) => item.quantityProduct)
      .reduce((acc, n) => acc + n, 0);

    const FilterAddCard = data.filter((item) => item.id == id);
    const newItem = {
      idProduct: FilterAddCard[0].id,
      titleProduct: FilterAddCard[0].title,
      priceProduct: FilterAddCard[0].price,
      quantityProduct: AllQuantity + 1,
      imageProduct: FilterAddCard[0].path,
      Price_quantity: Number(FilterAddCard[0].price) * Number(AllQuantity + 1),
    };

    setItemAdded(true);
    setTimeout(() => {
      setItemAdded(false);
    }, 1500);
    RestOfStorage.push(newItem);
    localStorage.NewProduct = JSON.stringify(RestOfStorage);
  };

  const handleFiltreData = (e) => {
    if (!e.target.value == "") {
      const dataFiltered = data.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setDataDiplay(dataFiltered);
    } else {
      setDataDiplay(data);
    }
  };
  const handleInput = () => {
    document.getElementById("search-store").focus();
  };

  return (
    <div className="w-5/6 mx-auto md:py-36 py-24 " id="Store">
      <h1 className=" font-semibold text-center justify-center flex place-items-center md:text-2xl text-sm">
        <FaStore className="mx-2 md:text-2xl text-sm" />
        Our Store
        <input
          type="text"
          name="search-store"
          id="search-store"
          className="border mx-4 ps-2  md:py-2 py-1 text-sm font-thin hover:outline-transparent rounded text-slate-950 bg-slate-200"
          onChange={handleFiltreData}
        />
        <FaSearch
          className="cursor-pointer md:text-2xl text-sm text-slate-200"
          onClick={handleInput}
        />
      </h1>
      <div
        className={`grid md:grid-cols-3 grid-cols-1 gap-4 p-4 ${
          dataDisplay.length <= 0 ? "h-screen" : ""
        }`}
      >
        {dataDisplay.length > 0 ? (
          dataDisplay.map((item, index) => (
            <div
              key={index}
              className="w-full h-auto border rounded-sm py-3 bg-slate-50"
            >
              <img
                src={item.path}
                alt={`picture-${item.title}`}
                className=" h-80 object-cover w-full"
              />
              <h3 className="text-sm text-gray-800 text-center">
                {item.title}
              </h3>
              <h3 className="text-xl text-center font-semibold text-slate-950">
                {item.price},00${" "}
                <s className="text-red-600 text-sm font-thin">
                  {Number(item.price) - 1},00$
                </s>
              </h3>
              <div className="justify-center flex space-x-4 text-xs">
                <Link to={`/ProductDetails/${item.id}`}>
                  <button className="bg-slate-950 text-white px-4 py-2 rounded hover:bg-white hover:text-slate-950 border border-slate-950">
                    See Details
                  </button>
                </Link>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-white hover:text-red-600 border border-red-600"
                  onClick={() => {
                    AddToCard(item.id);
                  }}
                >
                  Add to card
                </button>
                {itemAdded && <ItemAdded text="this item has added successfolly "/>}
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-5xl text-center text-red-500 w-full absolute left-0 right-0 top-80 bottom-80">
            Not Found ..
          </h1>
        )}
      </div>
    </div>
  );
}

export default Store;
