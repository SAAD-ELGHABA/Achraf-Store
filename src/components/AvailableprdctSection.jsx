import { Link } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";

function AvilableprdctSection() {
  return (
    <section className="py-5 mb-20 mt-10 bg-slate-950 text-white ">
      <div className=" w-full mx-auto md:w-4/6 md:h-1/2 bg-indigo-950 mt-5 relative border rounded-2xl border-slate-700">
        <div className="container m-auto rounded-xl shadow-xl">
          <img src="src/assets/Ad-v.0.3.jpg" alt="Ads" />
        </div>
        <div className="absolute md:top-1/2 top-20 w-2/5 md:w-1/3 ps-1  md:ps-5 block left-2 md:left-10">
          <p className="pb-5 md:text-xl text-xs ">
            Give your order now !! and get an anime Caputcheee !!
          </p>
          <Link to="/Store">
            <button className="border w-full border-red-600 md:px-2 md:py-2 px-1 py-1 bg-red-600 hover:bg-transparent hover:text-red-600  rounded md:text-sm text-xs flex text-center justify-center place-items-center">
              Give Your Order ! <FaHandPointRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AvilableprdctSection;
