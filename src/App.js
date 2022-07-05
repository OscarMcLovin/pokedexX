import './App.css';
import Main from './Components/Main';
import './Components/style.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <div>
      <h1>Menu React Routes Dom</h1>
      <nav style={{borderBottom:"solid 1px", paddingBottom:"1rem"}}>
       <Link to="/Card">Card</Link> |{""}
       <Link to="/Pokeinfo">Pokeinfo</Link>|{""}
       <Link to="/Dates">Dates</Link>
      </nav>
      <Outlet />
      </div>
    <Main/>
    </>
    
  );
}

export default App;