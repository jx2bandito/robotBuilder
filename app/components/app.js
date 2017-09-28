import React from 'react';
import SamuraiHead from './robotHeads/samurai/samuraiHead.js';
import SelectBox from "./UI/selectBox.js";



export default class App extends React.Component{
	constructor(props){
		super(props);
		this.setState = {
		};
	}
	
	render(){
		return (
		<div>
		<SelectBox />
		<SamuraiHead className="roboto"/>
		</div>
		)
	}
}
