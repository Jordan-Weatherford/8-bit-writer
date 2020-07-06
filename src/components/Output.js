import React from 'react'
import '../styles/Output.css'

const Output = props => {
    let output = []

    for (let i = 0; i < props.binaryOutput.length; i++) {
        output.push(
            <div className='CompiledOutputWrapper' key={i} >
                <span className='CharOutput'>{props.charOutput[i] !== " " ? props.charOutput[i] : '<space>'}</span>
                <span className="BinaryOutput">{props.binaryOutput[i]}</span>
            </div>
        )
    }

    return(
        <div className='OutputWrapper'>
            { output.length > 0 ? output : <p>Enter some text and compile...</p> }
        </div>
    )
}

export default Output