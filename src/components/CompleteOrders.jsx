import { useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function CompleteOrders() {
  const dataFromLocaStorage =
    localStorage.length > 0 ? [...JSON.parse(localStorage.NewProduct)] : [];
  const [dataStorage, setDataStorage] = useState(dataFromLocaStorage);

  const handlePicture = () => {};
  const [deleteItemState, setDeleteItemState] = useState({
    state: false,
    idChoosed: null,
    titleElement: "",
  });
  const deleteItem = (id, title) => {
    setDeleteItemState({
      state: true,
      idChoosed: id,
      titleElement: title,
    });
  };
  const deleteCheked = () => {
    const RestData = (JSON.parse(localStorage.NewProduct)).filter((item)=>(item.idProduct != deleteItemState.idChoosed))
    localStorage.setItem('NewProduct',JSON.stringify(RestData));
    setDataStorage(RestData);
    setDeleteItemState({
      state: false,
      idChoosed: null,
      titleElement: '',
    })
  };
  const deleteRejected = ()=>{
    setDeleteItemState({state:false})
  }
  const Total = dataStorage
  .map((item) => Number(item.Price_quantity))
  .reduce((pre, curr) => pre + curr, 0);
  console.log(dataStorage);
  
  return (
    <div className="container mx-auto pt-32 md:px-20 px-5 ">
      {dataStorage.length > 0 ? (
        <div className="h-full">
          <div className="flex justify-between place-items-center">
            <h2 className="md:text-2xl text-xl font-semibold text-slate-50">
              My Card
            </h2>
            <h1 className="md:text-2xl  font-semibold text-slate-50">
              Total :{" "}
              <span className="text-xl font-thin text-slate-50">
                {Total},00$
              </span>
            </h1>
            <Link to="/CompleteOrders/ConfirmOrder">
              <button className=" text-xs bg-slate-950 border border-slate-50 text-white hover:text-slate-950 font-bold  rounded px-8 py-3 hover:bg-white  ">
                Order
              </button>
            </Link>
          </div>
          <div className="my-5">
            <table className="border-collapse border border-slate-900 text-center w-full text-sm">
              <thead>
                <tr className="border-collapse border border-slate-900 flex text-xs text-center py-3">
                  <th className="w-1/5"></th>
                  <th className="w-1/5 ">Name of product</th>
                  <th className="w-1/5">Price</th>
                  <th className="w-1/5 ">Quantity</th>
                  <th className="w-1/5">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dataFromLocaStorage.map((item, index) => (
                  <tr
                    key={index}
                    className="border-collapse border border-slate-900 flex place-items-center md:text-sm text-xs hover:bg-slate-900 py-1"
                  >
                    <td className="md:w-1/5 w-2/6 justify-center flex place-items-center">
                      <img 
                        onClick={handlePicture}
                        src={item.imageProduct}
                        alt={`picture-${item.imageProduct}`}
                        className="md:w-1/3 w-2/3  rounded-full"
                      />
                    </td>
                    <td className="w-1/5 ">{item.titleProduct}</td>
                    <td className="w-1/5 ">{item.priceProduct},00$</td>
                    <td className="w-1/5 text-center">
                      {item.quantityProduct}
                    </td>
                    <td className="w-1/5 place-items-center text-xl md:text-sm  flex justify-center space-x-4">
                      <FaTrash
                        className="text-slate-50 cursor-pointer"
                        onClick={() => {
                          deleteItem(item.idProduct, item.titleProduct);
                        }}
                      />
                      {deleteItemState.state && 
                      <div className="fixed -inset-3 flex items-center justify-center backdrop-blur-sm">
                        <div className=" border border-slate-700 bg-slate-900 text-white rounded pt-5 pb-3 px-5 backdrop-brightness-0 pointer-events-auto  text-xs md:text-sm">
                          Do you want to delete &quot; {deleteItemState.titleElement}{" "}
                          &quot; ?
                          <div className="flex justify-evenly text-sm pt-3">
                            <button className="bg-white text-slate-950 rounded px-4 py-1" onClick={deleteCheked}>
                              YES
                            </button>
                            <button className="border rounded text-slate-50 px-4 py-1 hover:bg-white hover:text-slate-950" onClick={deleteRejected}>
                              NO
                            </button>
                          </div>
                        </div>
                      </div>
                      }
                      <Link
                        key={index}
                        to={`/ProductDetails/${item.idProduct}`}
                      >
                        <FaEye className="text-slate-50" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="h-screen grid place-items-center w-full  ">
          <Link to="/Store" className="flex flex-col justify-center -mt-20">
            <h1 className="text-2xl  text-center font-semibold py-2">
              Your Card is empty !!
            </h1>
            <button className=" text-xs bg-slate-950 text-white hover:text-slate-950 font-bold border rounded px-10 py-3 hover:bg-white  ">
              Explore
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CompleteOrders;
