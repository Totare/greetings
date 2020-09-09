import React, { Component } from 'react'
import { render } from 'react-dom'
import img from "../img/kouign_amann.jpg"
import '../scss/style.scss'
import axios from 'axios';
import Request from 'axios-react';

export default class App extends Component{
	constructor(){
		super();

		//Etat
		this.state = {
			message: 'Hello World !',
			pokemon: []
		};
		
	}

	//Comportement
	handleMessage(){
		this.setState({message: 'Les 5 pokémons'})
		this.getPokemon(5)
	}

	getPokemon(number) {
		axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=`+number)
		.then(res => {
		  const pokemon = res.data.results;
		  this.setState({ pokemon });
		})
	}

	//Rendu
	render(){
		let {message} = this.state;
		let {pokemon} = this.state;
		return (			
			<div>
				<img src={img} alt="Une image bretonne" />
				<h1>{message}</h1>
				<button onClick={this.handleMessage.bind(this)}>Changer de message</button>

				<ul>
					{ pokemon.map(pokemon => <li>{pokemon.name}</li>)}
				</ul>
			</div>
		)
	}
};




render(
	<App />,
	document.getElementById('root')
)
