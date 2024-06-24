
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './pages/home';
import About from './pages/about';
function App(){
  return(
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='about' element={<About/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;