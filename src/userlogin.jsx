import PropTypes from 'prop-types'
function Login(props){
    const welcome=<h2>welcome user</h2>
    const loginagain=<h2>login first</h2>


  return (props.Islogin ?  welcome:loginagain)
}
Login.protypes={
    Islogin: PropTypes.bool,
    username: PropTypes.string
}
Login.defaultProps={
    Islogin : false,
    username : "Guest"
}
export default Login