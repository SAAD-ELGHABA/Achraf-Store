function ConfirmOrder() {
  const dataFromLocalStorage =
    localStorage.length > 0 ? [...JSON.parse(localStorage.NewProduct)] : [];
  const dataFromLocaStorage =
    localStorage.length > 0 ? [...JSON.parse(localStorage.NewProduct)] : [];
  const Total = dataFromLocaStorage
    .map((item) => Number(item.Price_quantity))
    .reduce((pre, curr) => pre + curr, 0);
  return (
    <div className="container mx-auto py-32 px-20 text-sm ">
      <div className="md:flex grid space-x-1 place-items-start ">
        <div className="md:w-2/3 rounded p-5 ">
          <h1 className="text-sm ">Insert your informations</h1>
          <form action="" className="py-5">
            <div className="w-full md:flex space-x-2">
              <div className="relative z-0 md:w-1/2 mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
              </div>
              <div className="relative z-0 md:w-1/2 mb-5 group">
                <input
                  type="tel"
                  pattern="(06|07)[0-9]{8}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>
            </div>
            <div className="w-full md:flex space-x-2">
              <div className="relative z-0 md:w-1/2 mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 md:w-1/2 mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Adresse
                </label>
              </div>
            </div>
            <div className="full flex justify-start my-3">
              <button
                className="bg-slate-950 text-red-600 py-2 px-5 rounded hover:bg-red-600 hover:text-white  border md:w-1/2 w-full border-red-600 "
                type="submit"
              >
                Confirm My Order
              </button>
            </div>
          </form>
        </div> 
        <div className="md:w-1/3 border rounded bg-transparent p-5 my-5 ">
          <table>
            <tbody>
              {dataFromLocalStorage.map((item, index) => (
                <tr
                  key={index}
                  className="w-full flex place-items-center text-center justify-center"
                >
                  <td className="w-1/4 relative">
                    <img
                      src={item.imageProduct}
                      alt={`picture-${item.imageProduct}`}
                      className=" rounded-full  w-fit"
                    />
                    <span className="absolute bg-red-600 rounded-full -top-1 px-2 text-xs py-1 text-white -right-1">
                      {item.quantityProduct}
                    </span>
                  </td>
                  <td className="w-2/4">{item.titleProduct}</td>
                  <td className="w-1/4">{item.priceProduct},00$</td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className="border border-slate-600" />
          <div className="flex justify-between py-2">
            <h3 className="text-sm font-semibold">Total Price </h3>
            <h3 className="text-sm">{Total},00$</h3>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrder;
