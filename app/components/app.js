import React from 'react';
import SamuraiHead from './robotHeads/samurai/samuraiHead.js';
import SelectBox from "./UI/selectBoxComponents/selectBox.js";


const HeadList = {
	samuraiHead: {
		display: SamuraiHead
	}
}
export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			currentHead: "samuraiHead"
		};
	}
	
	render(){
		let Head = HeadList[this.state.currentHead].display
		return (
			<div>
				<SelectBox />
				<Head />
			</div>
		)
	}
}
