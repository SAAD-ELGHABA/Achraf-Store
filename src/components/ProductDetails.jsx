import { FaPlus, FaMinus, FaThumbtack } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import OffersSection from "./OffersSection";
import { dataFetched } from "../App.jsx";
import { useParams } from "react-router-dom";
import ItemAdded from "./ItemAdded.jsx";

function ProductDetails() {
  const data = useContext(dataFetched);
  const { id } = useParams();

  const DataFiltred = data.filter((d) => d.id == id);
  const [DataFiltredState,setDataFiltredState] = useState(DataFiltred);
  let priceItme = DataFiltredState[0].price;
  const itemProductDetailsEye = (JSON.parse(localStorage.NewProduct).filter((item)=>(item.idProduct==id)));
  const quantityAfterChecking = itemProductDetailsEye.length > 0 ? Number(itemProductDetailsEye[0].quantityProduct) : 1;
  const totalAfterChecking = itemProductDetailsEye.length > 0 ? Number(itemProductDetailsEye[0].Price_quantity) : priceItme;
  const [settings, setSettings] = useState({quantity: quantityAfterChecking ,total:totalAfterChecking});

  const addQuantity = () => {
    let total_quantity = Number(Number(settings.quantity) + 1) * Number(priceItme);
    setSettings({quantity:Number(settings.quantity) + 1,total:total_quantity});
  };
  const MinesQuantity = () => {
    let total_quantity =
    Number(settings.quantity) == 1
        ? Number(settings.quantity) * Number(priceItme)
        : Number(settings.quantity - 1) * Number(priceItme);
    setSettings({quantity:(Number(settings.quantity) == 1 ? 1 : Number(settings.quantity) - 1),total:total_quantity});
  };
  const handleSize = () => {};
  const [itemAdded, setItemAdded] = useState(false);
  const handleAddCard = () => {
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

    const newItem = {
      idProduct: DataFiltredState[0].id,
      titleProduct: DataFiltredState[0].title,
      priceProduct: DataFiltredState[0].price,
      quantityProduct: settings.quantity,
      imageProduct: DataFiltredState[0].path,
      Price_quantity:
        Number(DataFiltredState[0].price) * Number(AllQuantity + settings.quantity),
    };
    RestOfStorage.push(newItem);
    localStorage.NewProduct = JSON.stringify(RestOfStorage);

    setItemAdded(true);
    setTimeout(() => {
      setItemAdded(false);
    }, 1500);
  };
  
  return (
    <div className=" py-20 px-10 ">
      <div className="md:flex w-full m-auto ">
        <div className="md:w-3/4  rounded md:flex  my-12">
          <div className="overflow-hidden md:w-2/6 w-full shadow-sm shadow-black">
            <img
              src={DataFiltredState[0].path}
              id="image-product"
              alt={`picture-${DataFiltredState[0].title}`}
              className=" rounded transform transition-transform duration-500 hover:scale-150 origin-center"
            />
          </div>
          <div className="px-1 md:w-4/6 w-full space-y-10 ps-5 grid place-items-center">
            <div>
              <h1 className="text-2xl font-semibold text-left md:mt-1 mt-3">
                {DataFiltredState[0].title}
              </h1>
              <p className="text-left text-sm ">{DataFiltredState[0].description}</p>
            </div>
            <div className="text-center sm:text-xs text-xl  px-2">
              <div className="space-x-2 text-center justify-center place-items-center flex">
                <h4 className="text-5xl ">{DataFiltredState[0].price},00$</h4>
                <s className="text-red-600 text-sm">
                  {Number(DataFiltredState[0].price) + 1},00$
                </s>
              </div>
              <div className="flex space-x-1 justify-center my-2">
                <span
                  className="border rounded bg-white text-black px-1 cursor-pointer text-sm"
                  onClick={() => {
                    handleSize();
                  }}
                >
                  S
                </span>
                <span className="border rounded bg-white text-black px-1 cursor-pointer  text-sm hover:bg-red-500">
                  M
                </span>
                <span className="border rounded bg-white text-black px-1 cursor-pointer text-sm ">
                  L
                </span>
                <span className="border rounded bg-white text-black px-1 cursor-pointer text-sm ">
                  Xl
                </span>
                <span className="border rounded bg-white text-black px-1 cursor-pointer text-sm ">
                  XXL
                </span>
              </div>
            </div>
            <hr className="w-full " />
            <div className="flex  w-full">
              <div className="px-1 justify-center flex  w-1/2">
                <button
                  onClick={addQuantity}
                  className=" rounded bg-transparent text-slate-50 hover:bg-slate-950 hover:text-white px-2"
                >
                  <FaPlus />
                </button>
                <span className="mx-3 px-1 text-center place-items-center flex">
                  {settings.quantity}
                </span>
                <button
                  onClick={MinesQuantity}
                  className="rounded bg-transparent text-slate-50 hover:bg-slate-950 hover:text-white px-2"
                >
                  <FaMinus />
                </button>
              </div>
              <div className=" justify-center flex py-1 w-1/2">
                <button
                  className="bg-slate-950 text-white hover:bg-white hover:text-slate-950 px-2 py-2 rounded w-full mx-auto border border-slate-50"
                  onClick={handleAddCard}
                >
                  Save Changes
                </button>
                {itemAdded && <ItemAdded text={`${itemProductDetailsEye.length > 0 ? "this item'settings have changed succesfoly":"this item has added succesfoly"}`}/>}
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/4  text-white mx-auto text-center w-5/6 justify-center grid place-items-center my-5">
          <div className=" grid  place-items-center mx-auto  w-full text-center  px-10 py-5 border rounded shadow-sm shadow-slate-50 bg-slate-950 relative">
            {/* <FaCircle className='absolute -top-3 -right-2 text-red-600 rotate-45 text-3xl '/> */}
            <FaThumbtack className="absolute -top-4 -right-4 text-red-600 rotate-45 text-3xl " />
            <h1 className="text-3xl ">
              Total (<span className="text-sm">Price x Quantity</span>)<hr />
            </h1>
            <h1>{settings.total},00 $</h1>
          </div>
        </div>
      </div>

      <div className="w-full">
        <hr className="mb-5" />
        <OffersSection displaySettings={1} />
      </div>
    </div>
  );
}

export default ProductDetails;
