import { Link } from "react-router-dom"
import {FaHandPointRight} from 'react-icons/fa'

function AvilableprdctSection() {
  return (
    <section className="py-20  my-20 bg-slate-950 text-white w-full grid justify-center space-y-16" id="Subscribe">
        <div>
            <h1 className="text-center md:text-2xl text-xl font-semibold">join the family</h1>
        </div>
        <div className="flex justify-center">
            <p className="w-2/3 text-center text-sm md:text-sm">Subscribe to discover new products, private sales, new recipes & to save 15% off your first order!</p>
        </div>
        <div className="flex md:flex-row flex-col justify-center md:space-x-2 space-y-2 md:space-y-0">
            <input type="email" name="email" placeholder="email" id="email"  className="border rounded px-2 focus:outline-none py-1 text-slate-950 w-1/2 self-center text-sm font-thin"/>
            <button type="submit" className="w-1/2 self-center px-3 py-1 bg-slate-50 text-slate-950 border border-slate-50 hover:bg-transparent rounded hover:text-slate-50 text-sm ">subscribe</button>
        </div>
    </section>
  )
}

export default AvilableprdctSection