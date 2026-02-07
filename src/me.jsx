
function Me(props){

    return(
        <div className="mainfamily">
        <div className="familymembers">
             <p>Name:{props.name}  </p>
             <p>Age:{props.age}</p>
             <p>Gender:{props.gender}</p>
        </div>
        </div>


    )

}
export default Me