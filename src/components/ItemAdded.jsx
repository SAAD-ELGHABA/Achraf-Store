import { FaCheck } from "react-icons/fa";

function ItemAdded({text}) {
  return (
    <div className="px-10 bg-green-600 text-white space-x-3 flex justify-center place-items-center fixed left-0 right-0 bottom-0 text-center py-3 z-10">
      {text} <FaCheck className="ps-3 text-4xl" />
    </div>
  );
}

export default ItemAdded;
