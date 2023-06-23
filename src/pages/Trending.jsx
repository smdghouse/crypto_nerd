import { useEffect, useState } from "react"
import Trendingcoin from "../components/Tredingcoin"

const trending=()=>
{
    const [trendingdata,setTrendingdata]=useState()
    useEffect(()=>{
        const getTrending = async()=>{
          const response = await fetch("https://api.coingecko.com/api/v3/search/trending")
          const data = await response.json()
          setTrendingdata(data)
          console.log(data.coins,"this is the trending data")
        }
        getTrending()
      },[])
    return(
        <div className="w-[80%]  h-full  mb-24 relative flex flex-col items-center">
          <div className="w-full min-h-[60vh] flex-col lg:flex-row flex flex-wrap justify-evenly  items-center mt-16 rounded-lg border-white border py-16 ">
            {trendingdata?
            trendingdata?.coins?.map((items,i)=><Trendingcoin key={i} data={items.item}/>)
            :  <div className="flex justify-center  w-full h-full items-center ">
            <div className="animate-spin w-9 h-9 rounded-full border-cyan-600 border-b-red-500 border-4"/> <span className="ml-3">searching</span>
          </div>}
          </div>
        </div>
    )
}
export default trending