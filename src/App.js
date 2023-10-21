import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import "react-router-dom"
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import Graphs from './Graphs';
function App() {
  function Login(){
    return(
      <>
        <h3>An app to keep track of <i>everything</i></h3>
        <button className="button">login</button>
      </>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
          <h1>STATS</h1>
      </header>
      <div className='main-container'>
        <Routes>
            <Route  index path='login' element={<Login/>}></Route>
            <Route path='account' element={<Account/>}></Route>
            <Route path='dashboard' element={<Dashboard/>}></Route>
            <Route path='graphs' element={<Graphs/>}></Route>
        </Routes>
      </div>
      <footer>
          <NavLink to="login" className="nav-button"><button >Home</button></NavLink>
          <NavLink to="account"className="nav-button"><button >Account</button></NavLink>
          <NavLink to="dashboard" className="nav-button"> <button>Dashboard</button></NavLink>
          <NavLink to="graphs" className="nav-button"> <button>Graphs</button></NavLink>
      </footer>
    </div>
  );
}



export default App;
