import './App.css';
import { Outlet } from 'react-router-dom';
import Logo from './components/logo';
import Navigation from './components/navigation';
import Store from './context/Store';
import Savecontext from './context/Savecontext';
function App() {
  return (
    <Store>
      <Savecontext>

    <div className="App min-h-screen w-full   bg-gradient-to-tl from-cyan-500 to-red-500 text-white flex items-center flex-col ">
      
      <Logo/>
      <Navigation/>
      <Outlet/>
    </div>
      </Savecontext>
    
    </Store>
  );
}

export default App;
