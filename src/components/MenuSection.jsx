import { Link } from "react-router-dom"


function MenuSection() {
  return (
    <>
    <section className="menu-section relative h-2/4 hidden md:block">
        <div className="menu-bg relative">
            <img src="src/assets/background-v.0.7.png" alt="menu-background " style={{backGround:"attachement"}} />
        </div>
        <div className="absolute text-white top-1/3  text-left ps-16 flex flex-col ">
          <div className="ms-24 mt-10 space-y-5">
            <h1 className="text-3xl font-thin ">
              Achraf-Store
            </h1>
            <p className="text-sm font-thin text-slate-300 w-1/2 pb-5">Achraf-Store offers a diverse range of high-quality products, delivering exceptional value and convenient online shopping. </p>
            <Link to="/Store" >
              <button className="border border-red-600 px-2 py-2 bg-red-600 hover:bg-transparent hover:text-red-600 w-1/2 rounded text-sm">Let&apos;s Figure Out</button>
            </Link>
          </div>
        </div>
    </section>
    <section className="menu-section relative h-2/4 block md:hidden ">
        <div className="menu-bg relative">
            <img src="src/assets/bg-phone-v.0.1.png" alt="menu-background " style={{backGround:"attachement"}} />
        </div>
        <div className="absolute text-white top-1/3 inset-0 m-auto mt-20">
          <div className=" mt-28 space-y-3 grid justify-center text-center">
            <h1 className="text-xl font-thin ">
              Achraf-Store
            </h1>
            <p className="text-xs font-thin text-slate-300 pb-3 text-center m-auto w-1/2">Achraf-Store offers a diverse range of high-quality products, delivering exceptional value and convenient online shopping. </p>
            <Link to="/Store" >
              <button className="border border-red-600 px-2 py-2 bg-red-600 hover:bg-transparent hover:text-red-600 w-1/2 rounded text-sm">Let&apos;s Figure Out</button>
            </Link>
          </div>
        </div>
    </section>
    </>
  ) 
}

export default MenuSection