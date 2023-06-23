import {BsCurrencyBitcoin} from "react-icons/bs"
import { Link } from "react-router-dom"
function logo()
{
    return(


        <Link to="/" className="flex text-white  items-center mt-10 lg:mt-0 lg:absolute top-6 left-4 text-4xl">
            <BsCurrencyBitcoin/>
            <p className="text-3xl">CryptoNerd</p>
            
        </Link>
    )
}
export default logo