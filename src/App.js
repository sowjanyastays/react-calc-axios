import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutMeComponent from './Components/Routes/AboutMeComponent/AboutMeComponent.jsx';
import GetDataComponent from './Components/Routes/GetDataComponent/GetDataComponent.jsx';
import CalculatorComponent from './Components/Routes/CalculatorComponent/CalculatorComponent.jsx';

function App() {
  return (
    <Router>
    <div className="App">
      <ul className='nav'>
        <li>
        <Link style={{textDecoration: 'none'}} to='/'>About Me</Link>
        </li>
        <li>
          <Link style={{textDecoration: 'none'}} to='/calc'>Calculator</Link>
        </li>
        <li>
        <Link style={{textDecoration: 'none'}} to='/rick'>Rick and Morty</Link>
        </li>
      </ul>
      <Routes>
      <Route exact path="/" element = {<AboutMeComponent/>}></Route>
      <Route exact path="/rick" element = {<GetDataComponent/>}></Route>
      <Route exact path="/calc" element={<CalculatorComponent/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
