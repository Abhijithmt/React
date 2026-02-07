import image from './assets/advance-haircut.jpg'
function Card(){
    return(
        <div className='card'>
            <img src={image}></img>
            <h2 className='tittle'>ABHIJITH</h2>
            <p className='para'>Learning REACT</p>
        </div>
    )
}
export default Card