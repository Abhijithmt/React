import Header from './header.jsx'
import Footer from './Footer.jsx'
import Basics from './basics.jsx'
import Card from './card.jsx'
import Button from './button.jsx'
import Me from './me.jsx'
import Login from './userlogin.jsx'
import { Routes,Route } from 'react-router-dom'
import Usestates from './usestate.jsx'
function App() {
  return(
    <>
  
    <Header/>
    <Routes>
      <Route path='/basic' element={<Basics/>}/>
     <Route path='/button' element={<Button/>}/>
          <Route path='/card' element={<Card/>}/>
    </Routes>
    <Usestates/>

 
    </>
  )
  
}

export default App
