import React from 'react';
import SelectBox from "./UI/selectBoxComponents/selectBox.js";
import {headList, bodyList, armsList, legsList} from "./partsList.js";


export default class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			currentHead: "none",
			currentBody: "none",
			currentArms: "none",
			currentLegs: "none"
		};
		
		this.changePart=this.changePart.bind(this);
	}
	
	changePart(partType, partName){
		if(!/(currentHead|currentBody|currentArms|currentLegs)/.test(partType)){
			//Limit power of changePart
			console.log("Cannot use changePart in app.js to change unrelated states");
			return false;
		}
		
		this.setState({[partType]: partName})
	}
	
	render(){
		let Head = headList[this.state.currentHead].display; 
		let Body = bodyList[this.state.currentBody].display; 
		let Arms = armsList[this.state.currentArms].display; 
		let Legs = legsList[this.state.currentLegs].display; 
		
		return (
			<div>
				<SelectBox changePart={this.changePart}/>
				{Head ? <Head addClass="jumbo" /> : false}
				{Body ? <Body /> : false}
				{Arms ? <Arms /> : false}
				{Legs ? <Legs /> : false}
				{/*Render parts if they exist*/}
			</div>
		)
		
	}
}
