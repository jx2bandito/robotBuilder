import React from 'react';
import SelectBox from "./UI/selectBoxComponents/selectBox.js";
import {headList, bodyList, armsList, legsList} from "./partsList.js";


export default class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			currentHead: "placeholder",
			currentBody: "placeholder",
			currentArms: "placeholder",
			currentLegs: "placeholder"
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
		let Head = headList[this.state.currentHead].animate; 
		let Body = bodyList[this.state.currentBody].animate; 
		let Arms = armsList[this.state.currentArms].animate; 
		let Legs = legsList[this.state.currentLegs].animate; 
		
		return (
			<div>
				<SelectBox changePart={this.changePart}/>
				<div className="animationWrapper">
					<Head />
					<Body />
					<Arms />
					<Legs />
				</div>
			</div>
		)
		
	}
}
