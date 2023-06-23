import { useContext } from "react"
import { savestore } from "../context/Savecontext"
import { AiOutlineStar,AiFillStar } from "react-icons/ai"
import { Link } from "react-router-dom"
import { createstore } from "../context/Store"


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
const saved =()=>{
    const {saved_data,savedcoins}= useContext(savestore)
    const {  currency } = useContext(createstore);

    console.log("from saved data",saved_data)
    if(!saved_data) return <div className="flex justify-center  w-full h-[50vh] items-center ">
    <div className="animate-spin w-9 h-9 rounded-full border-cyan-600 border-b-transparent border-4"/> <span className="ml-3">searching</span>
  </div>;
    return(
      <div className="w-full flex mt-16  min-h-screen items-center justify-center ">
        {savedcoins.length>0?<div className="my-20 min-h-screen  w-[85%]">
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
          {  saved_data?.map((i,key) => (
            <tr key={key} className="border-b-[1px]    border-white last:border-b-0 ">
              <td  className="text-center py-6 capitalize flex justify-start items-start">
              {savedcoins.includes(i.id)?<Savebtn2 data={i.id}/>:<Savebtn data={i.id}/>}<Link to={`/${i.id}`}>
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
          ))}
        </tbody>
      </table>
      </div>:<div className="absolute top-1/2 ">
        <span className="capitalize font-bold text-black text-2xl"> there is no saved coins yet 🥲</span>
        </div>}
      </div>
    )
}
export default saved