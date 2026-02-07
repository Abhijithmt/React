import Header from './header.jsx'
import Footer from './Footer.jsx'
import Basics from './basics.jsx'
import Card from './card.jsx'
import Button from './button.jsx'
import Me from './me.jsx'
function App() {
  return(
    <>
    <Header/>
    <Footer/>
    <Basics/>
    <Card/>
    <Button/>
    <Me name="abhijith" age={20} gender="male"/>
    <Me name='diljith' age={13} gender="male"/>
    <Me name="akhilesh" age={50} gender="male"/>
    <Me name="Shyni" age={42} gender="female"/>
    
    </>
  )
  
}

export default App
