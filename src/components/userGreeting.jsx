import PropTypes from 'prop-types'
function UserGreeting(props){
    let welcome = <h2> Welcome {props.username}</h2>
    let loginPrompt = <h2>Please log in</h2>

    return (props.isLoggedIn? welcome: loginPrompt)
    // if (props.isLoggedIn) {
    //     return <h2> Welcome {props.username}</h2>
    // } else{
    //     return <h2>Please log in</h2>
    // }
}

UserGreeting.proptypes ={
    isLoggedIn:PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps ={
    isLoggedIn:false,
    username: "Guest"
}
export default UserGreeting