import PropTypes from 'prop-types'
import '/src/styles/Buttons.css'

function OperationButton({digit , input, setinput}) {

    function handleInput(){
        input += digit
        setinput(input)
    }

  return (
    <button className='button operation' id={digit} onClick={() => handleInput()}>{digit}</button>
  )
}

OperationButton.propTypes = {
    digit: PropTypes.any,
    input: PropTypes.string,
    setinput: PropTypes.func 
}

export default OperationButton
