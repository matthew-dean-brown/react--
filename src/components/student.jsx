import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Is Student:{props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
// to make sure the data being passed though is he correct data tyoe

Student.propTypes ={
    name: PropTypes.string,
    age:PropTypes.number,
    isStudent: PropTypes.bool
}
// indicates default values for data being passed through to child component
Student.defaultProps ={
    name:'Guest',
    age:0,
    isStudent:false
}

export default Student