import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-slate-950 pb-5 text-white text-xl  w-full bottom-0  ">
      <div className="container m-auto">
        <div className="w-1/6 m-auto grid justify-center ">
          <img src="src/assets/Logo-v.0.4.png" alt="footer-logo" className="" />
        </div>
        <hr />
        <div className="flex place-items-center pt-5">
          <div className="w-2/3 m-auto space-x-10 text-sm">
            <a href="#AboutUs">about us</a>
            <Link to="/Contact">Contact Us</Link>
          </div>
          <div className="flex md:text-xl text-sm space-x-2 me-5">
            <FaYoutube className="  hover:text-slate-700" />
            <FaFacebook className=" hover:text-slate-700" />
            <FaWhatsapp className=" hover:text-slate-700" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
