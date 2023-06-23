import { useContext } from "react"
import {BsFillSkipEndFill,BsSkipBackwardFill} from "react-icons/bs"
import { createstore } from "../context/Store"
 
const Pagination =()=>{
    const {totalcoins,page,setPage,perpage}=useContext(createstore)
    const total = Math.ceil(totalcoins/perpage)
    const multidec =()=>{
        setPage(page-2)
    }
    const mulinc =()=>{
        setPage(page+3)
    }
    const incpage =()=>{
        if(page>=total)
        {
            return null
        }
        else{
            setPage(page+1)
        }
    }
    const decpage =()=>{
        if(page<=1)
        {
            return null
        }
        else{
            setPage(page-1)
        }
    }
    return(
        <div className="flex items-center  flex-row ml-15 lg:ml-0">
            {
                page!==1? <BsFillSkipEndFill onClick={decpage} className="text-xl cursor-pointer text-black mx-2 rotate-180 "/>:null
            }
           {
            page!==1 ?<button onClick={()=>setPage(1)} className="w-8 h-8 outline-none border-0 bg-black text-white font-medium mx-1 rounded-full flex items-center justify-center" >1</button>  :null
           }
           {
             page<=2 ? null:<BsSkipBackwardFill onClick={multidec} className="text-xl cursor-pointer text-black  mx-2 "/>

           }
           
           {
            (page!==1 && page!==2)? <button onClick={decpage} className="w-8 h-8  outline-none border-0 bg-black text-white font-medium mx-1 rounded-full flex items-center justify-center" >{page-1}</button>:null
           }
            

           

            <button className="w-8 h-8 outline-none border-0 bg-white text-black font-medium mx-1 rounded-full flex items-center justify-center" >{page}</button>
            {
                page!==total&&page!==total-1?<button onClick={incpage} className="w-8 h-8 outline-none border-0 bg-black text-white font-medium mx-1 rounded-full flex items-center justify-center" >{page+1}</button>:null
            }
            {
                page>=total-2?null:
                  <BsSkipBackwardFill onClick={mulinc} className="text-xl cursor-pointer text-black mx-2 rotate-180"/>
            }

          
            {
                page!==total?<button onClick={()=>setPage(total)} className="w-8 h-8 outline-none border-0 bg-black text-white font-medium mx-1 rounded-full flex items-center justify-center" >{total}</button>:null
            }
            
            {
                 page!==total?<BsFillSkipEndFill onClick={incpage} className="text-xl cursor-pointer text-black  mx-2 "/>:null
            }
            

        </div>
    )
}
export default Pagination