import React, { Component } from 'react'
import { render } from 'react-dom'
import img from "../img/kouign_amann.jpg"
import '../scss/style.scss'

export default class App extends Component{
	constructor(){
		super();

		//Etat
		this.state = {
			message: 'Hello World !',
		}
	}

	//Comportement
	handleMessage(){
		this.setState({message: 'Coucou les gens!'})
	}

	//Rendu
	render(){
		let {message} = this.state;
	
		return (
			<div>
				<img src={img} alt="Une image bretonne" />
				<h1>{message}</h1>
				<button onClick={this.handleMessage.bind(this)}>Changer de message</button>
			</div>
		)
	}
};




render(
	<App />,
	document.getElementById('root')
)
