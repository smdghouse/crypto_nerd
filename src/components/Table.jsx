import React, { useContext, useRef } from "react";
import {CgEnter} from "react-icons/cg"
import {AiOutlineStar,AiFillStar} from "react-icons/ai"
import { createstore } from "../context/Store";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import  { savestore } from "../context/Savecontext";
const Savebtn = ({data})=>{
 const {Addcoin,savedcoins} =useContext(savestore)
return(
  <AiOutlineStar  onClick={()=>Addcoin(data)}  className={`text-2xl ml-5 hover:text-cyan-400  `}/>
)
}
const Savebtn2 = ({data})=>{
  const {Addcoin,savedcoins} =useContext(savestore)
 return(
   <AiFillStar  onClick={()=>Addcoin(data)}  className={`text-2xl ml-5 hover:text-cyan-400 text-cyan-400 `}/>
 )
 }
const Table = () => {
  const { coindata, isloading, currency,setPerpage } = useContext(createstore);
  const {savedcoins} =useContext(savestore)
 
  const pageele =useRef()
  // setting elements per page 
  const setelements=(e)=>{
    e.preventDefault()
    const value = pageele.current.value

    setPerpage(value)
    pageele.current.value=null
  }
  
  if (isloading) return <div className="flex justify-center  w-full h-[50vh] items-center ">
  <div className="animate-spin w-9 h-9 rounded-full border-cyan-600 border-b-transparent border-4"/> <span className="ml-3">searching</span>
</div>;
  return (
    <div className="my-20 min-h-screen  w-full">
      <table className=" border-white border-b-[1px] border-t-[1px] w-full  table-auto min-h-full">
        <thead>
          <tr className="capitalize border-b-[1px] border-white ">
            <th className="py-3 text-black font-bold text-center">asset</th>
            <th className="py-3 text-black font-bold text-start">name</th>
            <th className="py-3 text-black font-bold text-start">price</th>
            <th className="py-3 hidden lg:table-cell text-black font-bold text-start">total volume</th>
            <th className="py-3 hidden lg:table-cell text-black font-bold text-start">market cap change</th>
            <th className="py-3 hidden lg:table-cell text-black font-bold text-start">1h</th>
            <th className="py-3 hidden lg:table-cell text-black font-bold text-start">24h</th>
            <th className="py-3 hidden lg:table-cell text-black font-bold text-start">7d</th>
          </tr>
        </thead>
        <tbody>
          {  coindata? coindata?.map((i,key) => (
            <tr key={key} className="border-b-[1px]    border-white last:border-b-0 ">
              <td  className="lg:text-center py-6 capitalize flex justify-start  items-center">
              {savedcoins.includes(i?.id)?<Savebtn2 data={i.id}/>:<Savebtn data={i.id}/>}<Link to={`/${i.id}`}>
                  <img src={i.image} alt={i.symbol}  className="w-8 mx-4"/>
              </Link>
            <Link to={`/${i.id}`}>{i.symbol}</Link> </td>
              
              <td className="text-start py-6 capitalize"><Link to={`/${i.id}`}>{i.name}</Link></td>
              <td className="text-start py-6 capitalize">{
                new Intl.NumberFormat("en-in",{
                  style:"currency",
                  currency:currency
                }).format(i.current_price)
              }</td>
              <td className="text-start hidden lg:table-cell py-6 capitalize">{i.total_volume}</td>
              <td className="text-start hidden lg:table-cell py-6 capitalize">
                {i.market_cap_change_percentage_24h}%
              </td>
              <td className={`text-start hidden lg:table-cell py-6 capitalize font-bold ${i.price_change_percentage_1h_in_currency>0?"text-green-700":"text-red-700"} `}>
                {i.price_change_percentage_1h_in_currency?.toFixed(2)}
              </td>
              <td className={`text-start hidden lg:table-cell py-6 capitalize font-bold ${i.price_change_percentage_1h_in_currency>0?"text-green-700":"text-red-700"} `}>
                {i.price_change_percentage_24h_in_currency?.toFixed(2)}
              </td>
              <td className={`text-start hidden lg:table-cell py-6 capitalize font-bold ${i.price_change_percentage_1h_in_currency>0?"text-green-700":"text-red-700"} `}>
                {Number(i.price_change_percentage_7d_in_currency)?.toFixed(2)}
              </td>
            </tr>
          )):null}
        </tbody>
      </table>
      <div className="flex mt-8 flex-wrap flex-col  w-full h-56 items-center lg:flex-row  justify-between">
        <span className="font-medium">Data Provided by:<a target="_blank" className=" p-1 texts-black rounded-lg  font-semibold ml-2 capitalize bg-cyan-600 cursor-pointer" href="https://www.coingecko.com">coingecko</a></span>
        <form onSubmit={setelements} className=" justify-center items-center my-5 flex">
          <label className="capitalize mr-2" htmlFor="currency">
            no of coins:
          </label>
          <input min={10} max={100} type="text" ref={pageele} className="w-16 bg-red-200 px-2 py-1 text-black font-medium placeholder:text-gray-600 placeholder:pl-1 outline-none border-0 rounded-lg" placeholder="coins" name="currency"  />
          <button type="submit">
          <CgEnter  className="text-3xl ml-1 cursor-pointer text-cyan-500" />
          </button>
         
        </form>
        <Pagination/>
      </div>
      
    </div>
  );
};

export default Table;
