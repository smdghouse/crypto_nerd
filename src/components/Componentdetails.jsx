import React, { useContext, useEffect } from 'react'
import ReactDOM  from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { createstore } from '../context/Store'
import { AiFillCaretDown, AiFillCloseCircle } from 'react-icons/ai'

const Componentdetails = () => {
    const {coinid} =useParams()
    const naviagate = useNavigate()
    const close = ()=>{
        naviagate("..")
    }
    const {iddata,idfetch,currency} = useContext(createstore)
    console.log(iddata?.market_data?.price_change_percentage_24h
,"this is changed percentage")

console.log("the price is ",iddata?.market_data?.current_price?.[currency])
console.log(currency)
    useEffect(()=>{
        idfetch(coinid)
        console.log(iddata)
    },[coinid])
  return (
    ReactDOM.createPortal(
        iddata?(<div onClick={close} className='fixed  top-0 right-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-70 backdrop-blur-md'>
        <div onClick={(e)=>e.stopPropagation()}  className=' relative min-w-[35%] min-h-[75%] bg-gray-500 flex items-center justify-center text-black font-medium bg-opacity-30'>
        
        <div className=' p-4 '>
          <div className='flex flex-wrap items-center'>
          <img className=' w-[3rem] h-[3rem]' src={iddata?.image.large} alt={iddata.name} />
          <span className='mx-3 font-bold text-xl '>{iddata.name}</span>
          <div className='bg-gray-800 bg-opacity-25 text-sm px-2 uppercase  rounded-md text-cyan-300'>{iddata?.symbol}</div>
          </div>
          <div className='w-full items-start mt-5  flex flex-col justify-center'>
            <div className='flex w-full  justify-between items-center'>
              <span className='text-gray-400 capitalize text-sm'> price</span>
              <div className={`flex items-center rounded-lg px-3 justify-start bg-opacity-30 ${iddata?.market_data?.price_change_percentage_24h>0?'bg-green-400 text-green-800':'bg-red-400 text-red-800'} ` } >
                <span className='rounded-lg  py-1  text-base  '>
                  {Number(iddata?.market_data?.price_change_percentage_24h
).toFixed(2)}% 
                </span>{iddata?.market_data?.price_change_percentage_24h>0 ? <AiFillCaretDown className='rotate-180'/> : <AiFillCaretDown/>}
              </div>
            </div>
            <span className=' text-white text-lg font-bold'>
            {
            new Intl.NumberFormat("en-in",{
              style:"currency",
              currency:currency,
              maximumSignificantDigits:5,
          }).format(iddata?.market_data?.current_price?.[currency])
          }
         
            </span>
          </div>
          <AiFillCloseCircle  onClick={close} className='absolute text-cyan-500 text-lg top-0 right-0'/>


          {/* // this div for market cap and fully diluted maket cap */}




          <div className=' flex flex-wrap mt-5 items-center justify-between'>
            <div className='flex flex-col items-start justify-center'>
            <span className='text-gray-400 capitalize text-sm'>market cap</span>
           < span className=' text-white text-lg font-bold'>
            {
            new Intl.NumberFormat("en-in",{
              style:"currency",
              currency:currency,
              notation: 'compact',
          }).format(iddata?.market_data?.market_cap?.[currency])
          }
         
            </span>
            </div>
            <div className='flex flex-col items-start ml-20 justify-center'>
            <span className='text-gray-400 capitalize text-sm'>fully_diluted_market_cap</span>
           < span className=' text-white text-lg font-bold'>
            {
            new Intl.NumberFormat("en-in",{
              style:"currency",
              currency:currency,
              notation: 'compact',
          }).format(iddata?.market_data?.fully_diluted_valuation?.[currency])
          }
         
            </span>
            </div>
          </div>
          {/* this is for the total volume  */}

          <div className='flex items-center mt-5'>
            <div className=' flex flex-col items-start justify-center'>
            <span className='text-gray-400 capitalize text-sm'>total volume</span>
           < span className=' text-white text-lg font-bold'>
            {
            new Intl.NumberFormat("en-in",{
              style:"currency",
              currency:currency,
          }).format(iddata?.market_data?.total_volume?.[currency])
          }
         
            </span>
            </div>

          </div>
          {/* this is for the  high and low  */}
          
          <div className=' flex flex-wrap mt-5 items-center justify-between'>
            <div className='flex flex-col items-start justify-center'>
            <span className='text-gray-400 capitalize text-sm'>24h high</span>
           < span className=' text-white text-lg font-bold'>
            {
            new Intl.NumberFormat("en-in",{
              style:"currency",
              currency:currency,
              maximumSignificantDigits:5,
          }).format(iddata?.market_data?.high_24h
            ?.[currency])
          }
         
            </span>
            </div>
            <div className='flex flex-col mr-[5.5rem] items-start justify-center'>
            <span className='text-gray-400 capitalize text-sm'>24H Low </span>
           < span className=' text-white text-lg font-bold'>
            {
            new Intl.NumberFormat("en-in",{
              style:"currency",
              currency:currency,
              maximumSignificantDigits:5,
          }).format(iddata?.market_data?.low_24h
            ?.[currency])
          }
         
            </span>
            </div>
          </div>

          {/* this is for max supply and circulating supply  */}
          


          <div className=' flex flex-wrap mt-5 items-center justify-between'>
            <div className='flex flex-col items-start justify-center'>
            <span className='text-gray-400 capitalize text-sm'>max supply</span>
           < span className=' text-white text-lg font-bold'>
            {
            new Intl.NumberFormat("en-in",{
              style:"currency",
              currency:currency,
              notation: 'compact',
          }).format(iddata?.market_data?.max_supply)
          }
         
            </span>
            </div>
            <div className='flex flex-col items-start mr-10 justify-center'>
            <span className='text-gray-400 capitalize text-sm'>circulating supply</span>
           < span className=' text-white text-lg font-bold'>
            {
            new Intl.NumberFormat("en-in",{
              style:"currency",
              currency:currency,
              notation: 'compact',
          }).format(iddata?.market_data?.circulating_supply)
          }
         
            </span>
            </div>
          </div>


        </div>
        </div></div>)
        :<div className="flex justify-center  w-full h-[50vh] items-center ">
        <div className="animate-spin w-9 h-9 rounded-full border-cyan-600 border-b-transparent border-4"/> <span className="ml-3">searching</span>
      </div>,
        document.getElementById("root2")
    )
    
  )
}

export default Componentdetails