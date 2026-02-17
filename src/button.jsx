function Button(){

    let count=0

    const msgwhenclicking= (name) => {
        if(count < 5){
            count ++
            console.log(`${name} you have Click ${count}`); 
        }else{
            console.log(`STOP CLICKING${name}`);
            
        }

    }
    
    return(<button  onClick={ () => msgwhenclicking("abhi")}className="button">About me</button>)
}
export default Button