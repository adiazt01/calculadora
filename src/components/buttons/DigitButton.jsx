import PropTypes from 'prop-types'
import '/src/styles/Buttons.css'

function DigitButton({digit , input, setinput}) {

    function handleInput(){
        input += digit
        setinput(input)
    }

  return (
    <button className='button digit' id={digit} onClick={() => handleInput()}>{digit}</button>
  )
}

DigitButton.propTypes = {
    digit: PropTypes.any,
    input: PropTypes.string,
    setinput: PropTypes.func 
}

export default DigitButton
