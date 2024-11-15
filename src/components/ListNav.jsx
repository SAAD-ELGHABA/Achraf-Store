import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ListNav({ diplayList, handleListe }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bottom-0 w-2/3 bg-gray-950 text-white p-5 transform transition-transform duration-300 ease-in-out${
        diplayList ? "translate-x-0" : "-translate-x-full"
      }`}
      id="list"
    >
      <div  className="flex justify-end pr-5">
        <FaXmark  className=" my-5 rounded-full text-xl " onClick={handleListe} />
      </div>
      <div className="pt-5 w-full -ms-4">
        <ul className="w-full ">
          <Link to="/" >
            <li className="bg-gradient-to-r from-red-600 to-transparent my-5 hover:bg-slate-950 hover:cursor-pointer py-4 px-3 text-sm">
              Home
            </li>
          </Link>
          <Link to="/Store">
            <li className="hover:bg-slate-950 bg-gradient-to-r from-red-600 to-transparent hover:cursor-pointer py-4 px-3 text-sm">
              Store
            </li>
          </Link>
          <Link to="/Contact">
            <li className="hover:bg-slate-950 hover:cursor-pointer bg-gradient-to-r from-red-600 to-transparent my-5 py-4 px-3 text-sm">
              Contact
            </li>
          </Link>
          <li className="flex -space-x-4 justify-center absolute w-full bottom-10">
            <FaYoutube className="w-1/3  hover:text-slate-700 text-red-600" />
            <FaFacebook className="w-1/3 hover:text-slate-700 text-red-600" />
            <FaWhatsapp className="w-1/3 hover:text-slate-700 text-red-600" />
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default ListNav;
