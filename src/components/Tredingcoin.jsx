import { Link, Outlet } from "react-router-dom"

const Trendingcoin =({data})=>{
   
    return <>
    <div className=" px-2 w-[90%] lg:w-[40%] duration-300 ease-in-out transition-all rounded-br-full rounded-tr-full relative p-4 mb-12 flex flex-col items-start justify-start rounded-lg bg-gray-600 bg-opacity-60 hover:bg-opacity-60 cursor-pointer hover:bg-gray-400 text-cyan-500 text-lg font-semibold">
        <Link to={data.id}>
             <h3 className="capitalize"><span className="text-gray-400 capitalize text-base">name:</span>{data.id}</h3> 
               <h3 className="capitalize"><span className="text-gray-400 capitalize text-base">market cap rank:</span>{data.market_cap_rank}</h3>
                <h3 className="capitalize"><span className="text-gray-400 capitalize text-base">price(in btc):</span>{Number(data.price_btc).toFixed(10)}</h3> 
       <h3 className="capitalize"><span className="text-gray-400 capitalize text-base">score:</span>{data.score}</h3>
        <img src={data.large} alt={data.name} className=" absolute lg:top-2 top-9 rounded-full hover:scale-[1.1] transition-all ease-in-out duration-500 right-0 w-16 lg:w-32" />
        </Link>
            </div>
            <Outlet/>

            </>
}
export default Trendingcoin