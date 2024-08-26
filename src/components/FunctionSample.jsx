import PropTypes from 'prop-types';

export const FunctionSample = (props) => {

    const {handleClick } = props;
  return (
    <div>
        <p style={{color:"white", backgroundColor: "violet", justifyContent: "center", display : "flex", padding: "10px"}}> This is a function component
        </p>
        <button onClick={handleClick} style={{backgroundColor:"skyblue", border:"none", borderRadius:"10px", fontSize:"15px" , fontWeight:"bolder", padding:"10px", alignItems:"center", justifyContent:"center", display:"block", margin:"auto" }}>
            Click Me !
        </button>
    </div>
  )
}

FunctionSample.propTypes = {
  handleClick: PropTypes.func.isRequired,
  
}
