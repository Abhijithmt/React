import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            <h1>STUDYING REACT</h1>
            <hr></hr>
            <div className="header">
            <Link to='/basic'><ol>basic</ol></Link>
            <Link to='/button'><ol>button</ol></Link>
            <Link to='/card'><ol>card</ol></Link>
            </div>
        </header>

    )

}
export default Header