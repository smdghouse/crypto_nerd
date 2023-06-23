import { NavLink } from "react-router-dom"

function navigation()
{
    return(
        <nav className="w-[40%] border-none items-center justify-around flex  mt-20 lg:mt-8 ">
            <NavLink to="/" className={({isActive})=>{return ` lg:px-10 px-5 m-2  font-medium capitalize rounded-lg ${isActive ? "bg-slate-600 text-white":"text-black bg-white"} hover:bg-slate-600 hover:text-white `}}>crypto</NavLink>
            <NavLink to="/trending" className={({isActive})=>{return ` lg:px-10 px-5 m-2  font-medium capitalize rounded-lg ${isActive ? "bg-slate-600 text-white":"text-black bg-white"} hover:bg-slate-600 hover:text-white `}}>trending</NavLink>
            <NavLink to="/saved" className={({isActive})=>{return ` lg:px-10 px-5 m-2  font-medium capitalize rounded-lg ${isActive ? "bg-slate-600 text-white":"text-black bg-white"} hover:bg-slate-600 hover:text-white `}}>saved</NavLink>
        </nav>
    )
}
export default navigation
//"text-black font-medium active:bg-slate-600 active:text-white hover:bg-slate-600 hover:text-white capitalize bg-white rounded-lg m-2 px-10"