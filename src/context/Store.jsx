import React, { createContext, useEffect, useState } from 'react'
// import { useFetcher } from 'react-router-dom'
 export const createstore = createContext({})
const Store = ({children}) => {
  const [coindata , setCoindata]= useState([])
  const [isloading , setIsloading]=useState(false)
  const [search, setSearch]=useState("")
  const [searchdata,setSearchdata]=useState([])
  const [onecoin,setOnecoin]=useState([])
  const [currency,setCurrency]=useState("usd")
  const[sort , setSort] = useState("market_cap_desc")
  const [page,setPage]=useState(1)
  const [totalcoins,settotalcoins]=useState(250)
  const [perpage,setPerpage]=useState(10)
  const [iddata,setIddata]= useState('')





// function to fetch coin from id 
const idfetch = async (id)=>{
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`)
  const data = await response.json()
  setIddata(data)
  

}

useEffect(()=>{
  const fetchtotalcoins=async ()=>{
    const response = await fetch('https://api.coingecko.com/api/v3/coins/list?include_platform=true')
    const data = await response.json()
    settotalcoins(data.length)
  }
  fetchtotalcoins()
},[])
  //calling api for search of coins
  const searchapi = async (search)=>{
    const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${search}`)
    const maindata = await data.json()
    setSearchdata(maindata.coins)
    // console.log("search api called")
    // console.log(maindata.coins)
  }
  //creating debouncing
  
  //using debouncing
  // const fetchsearch = debounce(searchapi)
  // useEffect(()=>{
  //   fetchsearch()
  // },[search])
    useEffect(()=>{

      const fetchdata =   async ()=>{
        try{

          setIsloading(true)
          const response= await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${onecoin}&order=${sort}&per_page=${perpage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`)
          const data = await response.json()
          // console.log("main api called")
          setCoindata(data)
         setIsloading(false)
        //  console.log(data)
         
        }
        catch(error)
        {
          <div className="w-full h-screen flex justify-center items-center ">
                <span className="capitalize text-black text-2xl font-bold">sorry you have heavily used api </span>
            </div>
        }
      
     }
       fetchdata()
     
      
    },[currency,onecoin,sort,page,perpage])

    
    

   
   
    
  return (
    <createstore.Provider value={{iddata,idfetch,setPerpage,perpage,totalcoins,page,setPage,sort,setSort,setCurrency,currency,setOnecoin,searchapi,coindata,isloading,searchdata,setSearch,search}}>
        {children}
    </createstore.Provider> 
  )
}

export default Store