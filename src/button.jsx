function Button(){
    const msgwhenclicking= () => console.log("click me");
    
    return(<button  onClick={msgwhenclicking}className="button">About me</button>)
}
export default Button