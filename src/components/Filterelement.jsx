import { useCallback, useContext, useRef } from "react"
import { BiSearch } from "react-icons/bi"
import {CgEnter} from "react-icons/cg"
import  { createstore } from "../context/Store"

function Filterelement() {
    const {sort,setSort,currency,setCurrency,setOnecoin,search,setSearch,searchapi,searchdata}=useContext(createstore)
    const debounce =(func)=>{
        let timer;
        return(...args)=>{
            timer&&clearTimeout(timer)
          timer = setTimeout(() => {
           func(...args)
          }, 500);
          
        }
        
      }
      //this func is used for sorting 
      const sorting =(e)=>{
        e.preventDefault()
        const value = e.target.value
        setSort(value)
        console.log(sort)
      }
      //this is used to handle submit 
      const handlesubmit =(e)=>{
        e.preventDefault()
      }
      //this func is used to set currency
      const currencyref = useRef(null)
      const setting_currency =(e)=>{
        e.preventDefault()
        const value = currencyref.current.value
        setCurrency(value)
        console.log(value)
        currencyref.current.value=""
      }
      //this is the function for setting one coin
      const settingcoin =(arg)=>
      {
        setOnecoin(arg)
        setSearch("")
        console.log(arg)
      }
      const fetchcoins = useCallback(debounce(searchapi),[] )
    const handleonchange =(e)=>{
        setSearch(e.target.value)
        fetchcoins(e.target.value)
    }
    
    
  return (
    <>
    <div className="rounded-lg border mt-20 w-full lg:h-10 h-40   flex lg:flex-row flex-col lg:items-center lg:justify-between justify-evenly items-start px-5">
        <form className="flex items-center justify-center relative">
            <input type="text" placeholder="search.." value={search}  className=" bg-red-200 rounded-lg lg:w-96 w-64 outline-none border-transparent placeholder:text-gray-600 font-medium pl-3 text-black py-1" onChange={handleonchange}/>
            <button onClick={handlesubmit}><BiSearch className="text-2xl absolute top-1 right-0 text-black"/></button>
        </form>
        <form onSubmit={setting_currency} className=" justify-center items-center flex">
          <label className="capitalize mr-2" htmlFor="currency">
            currency:
          </label>
          <input type="text" ref={currencyref} className="w-16 bg-red-200 px-2 py-1 text-black font-medium placeholder:text-gray-600 placeholder:pl-1 outline-none border-0 rounded-lg" placeholder={currency} name="currency"  />
          <button type="submit">
          <CgEnter  className="text-3xl ml-1 cursor-pointer text-cyan-500" />
          </button>
         
        </form>
        <div>
          <label className="capitalize mr-2 ">sort by:</label>
          <select onClick={sorting} className="bg-red-200 px-2 capitalize font-medium py-1 rounded-lg text-black " >
          
          // market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc
            <option  value="market_cap_desc">market_cap_desc</option>
            <option  value="market_cap_asc"> market_cap_asc</option>
            <option  value="volume_asc"> volume_asc</option>
            <option  value="volume_desc">volume_desc</option>
            <option  value="id_asc">id_ascc</option>
            <option  value="id_desc">id_desc</option>
          </select>
        </div>
    </div>
    {
        search.length > 0 ? <div className="lg:w-96 w-64 top-32 lg:top-28 rounded-lg left-5 bg-opacity-60 backdrop-blur-md bg-red-500 flex flex-col overflow-auto h-96 absolute">
            {
              (search.length) ?
             search && searchdata?.map(
                (val,i)=>(<span onClick={()=>settingcoin(val.id)} className="my-4 cursor-pointer flex justify-start items-center" key={val.id}><img src={val.thumb} className="px-5" alt={val.symbol}/>{val.name}</span>)
              )
              :
              <div className="flex justify-center  w-full h-full items-center ">
          <div className="animate-spin w-9 h-9 rounded-full border-cyan-600 border-b-red-500 border-4"/> <span className="ml-3">searching</span>
        </div>
            }
        </div>:
        null
        
    }
    </>
  )
}

export default Filterelement