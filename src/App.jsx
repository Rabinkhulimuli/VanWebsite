import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home'
import {Layout} from './layout'
import About from './about'
import Vans from './vans'
import Detail from './detail'
export default function App(){
  return (
    <>
      <div className="app-size">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/vans" element={<Vans/>}/>
                <Route path="/Detail/:id" element={<Detail/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
        <div className="home-color">2020/2040</div>
      </div>
    </>
  )
}