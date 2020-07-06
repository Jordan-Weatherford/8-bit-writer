import React from 'react'
import '../styles/Input.css'
import '../styles/App.css'

const Input = props => {
    return(
        <div className='InputWrapper'>
            <input name='UserInput' className="UserInput" value={props.userInput} onChange={event => props.handleUserInputChange(event.target.value)} />
            <button className="Button" onClick={props.compileBinaryCode}>Compile</button>
            <button className="Button" onClick={props.clearOutput} style={{'margin-left': '10px'}}>Clear</button>
        </div>
    )
}

export default Input