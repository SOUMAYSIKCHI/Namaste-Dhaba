import './App.css'
import Navbar from './Components/Navbar'
import Shimming from './Components/Shimming'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Unkown from './Pages/Unkown'
import Delivery from './Pages/Delivery'

function App() {
    return(
        <div className=''>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Cart' element={<Cart/>}/>
                <Route path='/*' element={<Unkown/>}/>
                <Route path='/success' element={<Delivery/>}/>
            </Routes>
            
        </div>
    )
}

export default App
