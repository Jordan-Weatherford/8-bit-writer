import React, { useState } from 'react'
import '../styles/App.css'

// custom components
import Input from './Input'
import Footer from './Footer'
import Output from './Output'

function App() {
	const [userInput, setUserInput] = useState('')
	const [binaryOutput, setBinaryOutput] = useState([])
	const [charOutput, setCharOutput] = useState([])
	const values = [128, 64, 32, 16, 8, 4, 2, 1]

	const clearOutput = () => {
		setBinaryOutput([])
		setCharOutput([])
		setUserInput('')
	}

	const compileBinaryCode = () => {
		let binaryCode = []
		let chars = []

		for (let i = 0; i < userInput.length; i++) {
			let n = userInput.charCodeAt(i)
			let bit = []

			for (let j = 0; j < values.length; j++) {
				if (n >= values[j]) {
					bit.push(1)
					n -= values[j]
				} else {
					bit.push(0)
				}
			}


			binaryCode.push(bit)
			chars.push(userInput.charAt(i))
		}

		setBinaryOutput(binaryCode)
		setCharOutput(chars)
	}


	const handleUserInputChange = value => {
		setUserInput(value)
	}

	return (
		<div className="AppWrapper">
			<h1 className="Title">8-bit Writer</h1>
			<h4 className="SubTitle">developed by <span className="Red">Jordan Weatherford</span></h4>
			<Output binaryOutput={binaryOutput} charOutput={charOutput} />
			<Input userInput={userInput} handleUserInputChange={handleUserInputChange} compileBinaryCode={compileBinaryCode} clearOutput={clearOutput} />
			<Footer />
		</div>
	)
}

export default App
