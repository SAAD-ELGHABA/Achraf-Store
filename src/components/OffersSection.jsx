import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { dataFetched } from "../App.jsx";
import { useContext } from "react";
import { FaHandHoldingUsd ,FaArrowRight, FaArrowLeft} from "react-icons/fa";
import {NextArrow,PrevArrow} from './Arrows.jsx'
function OffersSection({displaySettings}) {
  const OffersFetched = useContext(dataFetched);

  const offersData = OffersFetched.filter((item) => item.id <= 3);

  var settingsDesctop = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    customPaging: () => (
      <div className="bg-red-600 w-2 h-2 rounded-full"></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };
  var settingsPhone = {
    infinite: true,
    speed: 500,
    slidesToShow: displaySettings,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      <section
        className={` bg-slate-950 w-5/6 mx-auto shadow-xl pb-5 shadow-gray-900 border border-slate-700 text-white rounded-xl
        } md:block hidden`}
      >
        <h1 className="text-3xl font-semibold text-center flex justify-center pt-6">
          <FaHandHoldingUsd className="text-red-600 mx-2" />
          Offers
        </h1>
        <div className=" w-3/4 m-auto">
          <div className="mt-5 ">
            <Slider {...settingsDesctop}>
              {offersData.map((item, index) => (
                <Link to={`/ProductDetails/${item.id}`} key={index}>
                  <div className="m-1 p-2 ">
                    <img
                      src={item.path}
                      alt="prdct"
                      className={`relative hover:scale-105 duration-100 `}
                    />
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section
        className={`pb-5 mb-3 bg-slate-950 shadow-xl shadow-gray-900 border border-slate-700 text-white  rounded-xl w-5/6 mx-auto
        md:hidden block`}
      >
        <h1 className="text-xl font-semibold text-center flex justify-center pt-6 ">
          <FaHandHoldingUsd className="text-red-600  -ms-2 mr-2" />
          Offers
        </h1>
        <div className=" w-5/6 m-auto">
          <div className="mt-3 ">
            <Slider {...settingsPhone}>
              {offersData.map((item, index) => (
                <Link to={`/ProductDetails/${item.id}`} key={index}>
                  <div className="m-1 p-2 ">
                    <img
                      src={item.path}
                      alt="prdct"
                      className={`relative hover:scale-105 duration-100  object-cover`}
                    />
                  </div>
                </Link>
              ))}
            </Slider>
            <div
              className="border-b  border-red-600 w-full animate-bounce duration-1000 animate-expandWidth"
              id="scroll-div"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OffersSection;
