import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export const NextArrow = ({onclick})=>{
    return(
        <div className=" left-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-500" onClick={onclick}>
            <FaArrowLeft  size={24}/>
        </div>
    )
}
export const PrevArrow = ({onclick})=>{
    return(
        <div className=" left-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-500" onClick={onclick}>
            <FaArrowRight size={24}/>
        </div>
    )
} 