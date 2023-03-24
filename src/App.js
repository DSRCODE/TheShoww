import { Route, Routes } from 'react-router-dom';

// CSS
import './App.css';

// Import Pages
import HomePage from './Pages/Homepage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import SearchPage from './Pages/SearchPage/SearchPage';
import PopUp from './Components/PopUp/PopUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='Navbar' element={<Navbar/>} />
      <Route path='SearchPage' element={<SearchPage/>} />
      <Route path='PopUp' element={<PopUp/>} />
    </Routes>
  );
}

export default App;
