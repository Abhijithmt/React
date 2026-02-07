
function Login(props){
    if(props.Islogin){
        return <h2>Welcome:{props.username}</h2>
    }else{
        return <h2>LOGIN FIRST</h2>
    }
}
export default Login