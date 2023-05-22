import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Noticia from './pages/Noticia';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} >
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
