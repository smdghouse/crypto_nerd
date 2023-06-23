import { createContext, useContext, useEffect, useState } from "react";
import  { createstore } from "./Store";

export const savestore = createContext({})

const Savecontext =({children})=>{
    const {currency}= useContext(createstore)
    const [savedcoins,setSavedcoins]=useState()
    const [saved_data,setSaved_data]=useState()
    const fetchsavedata = async (mycoins)=>{
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${mycoins?.join(",")}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`)
        const data = await response.json()
        setSaved_data(data)
    }
    useEffect(()=>{
        fetchsavedata(savedcoins)
        console.log(saved_data)
    },[savedcoins])
    const Addcoin = (coinid)=>{
        const oldcoins = JSON.parse(localStorage.getItem("coins"))
        if(oldcoins.includes(coinid))
        {
            let newcoins = oldcoins.filter(val=>val!=coinid)
            setSavedcoins(newcoins)
            console.log(newcoins,coinid)
            localStorage.setItem("coins",JSON.stringify(newcoins))
        }
        else{
            const newcoins = [...oldcoins,coinid]
            setSavedcoins(newcoins)
            console.log(newcoins)
            localStorage.setItem("coins",JSON.stringify(newcoins))
        }
    }
    useEffect(()=>{
        let bool = JSON.parse(localStorage.getItem("coins")) || false
        if(!bool){
            localStorage.setItem("coins",JSON.stringify([]))
        }
        else{
            const data = JSON.parse(localStorage.getItem("coins"))
            setSavedcoins(data)
        }
    },[])

    return (
        <savestore.Provider value={{Addcoin,savedcoins,saved_data}}>
            {children}
        </savestore.Provider>
    )

}
export default Savecontext