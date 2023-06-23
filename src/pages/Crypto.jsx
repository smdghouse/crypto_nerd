import { Outlet } from "react-router-dom"
import Filterelement from "../components/Filterelement.jsx"
import Table from "../components/Table.jsx"
function crypto(){

    return(
        <div className="lg:w-[80%] w-full[90%] h-full  mb-24 relative flex flex-col items-center">
          <Filterelement/>
          <Table/>
          <Outlet/>
        </div>
    )
}
export default crypto