import React from 'react';
import Style from './selectBoxStyle.scss';
import HeadSelect from "./headSelect.js";
import BodySelect from "./bodySelect.js";
import ArmsSelect from "./armsSelect.js";
import LegsSelect from "./legsSelect.js";

import SamuraiHead from "./../../robotHeads/samurai/samuraiHead.js";
import {headList, bodyList, armsList, legsList} from "./../../partsList.js";

const partsArray = {
	headArray: Object.keys(headList),
	bodyArray: Object.keys(bodyList),
	armsArray: Object.keys(armsList),
	legsArray: Object.keys(legsList)
}

console.log(partsArray.headArray);
console.log(partsArray.bodyArray);


export default class SelectBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			addTabClass1: null,
			addTabClass2: null,
			addTabClass3: null,
			addTabClass4: null,
			previewHead: "samuraiHead",
			previewBody: "samuraiBody",
			previewArms: "placeholder",
			previewLegs: "placeholder"
		}
		
		this.tabOn=this.tabOn.bind(this);
		this.tabOff=this.tabOff.bind(this);
		this.tabSwitch=this.tabSwitch.bind(this);
		this.assembleHead=this.assembleHead.bind(this);
		this.assembleBody=this.assembleBody.bind(this);
		this.rotatePartLeft=this.rotatePartLeft.bind(this);
		this.rotatePartRight=this.rotatePartRight.bind(this);
	}
	
	tabOn(tabNum){ ////Takes an integer indicating which tab to affect
		this.setState({			
			addTabClass1: null,
			addTabClass2: null,
			addTabClass3: null,
			addTabClass4: null,
			["addTabClass" + tabNum]: "toggledOn"});
	}
	
	
	tabOff(tabNum){
		this.setState({["addTabClass" + tabNum]: null});
	}
	
	tabSwitch(tabNum){
		let newKey = "addTabClass" + tabNum;
		this.setState(function(state, props){
			return {
				[newKey]: state[newKey] ? null : "toggledOn"
			}
		});
	}
	
	rotatePartLeft(partType){
		this.setState(function(state, props){
			let upperType = partType.split("");
			upperType[0] = upperType[0].toUpperCase();
			upperType = upperType.join("");
			let newIndex = partsArray[partType + "Array"].indexOf(state["preview" + upperType]) - 1;
			newIndex = (newIndex <= -1) ? partsArray[partType + "Array"].length - 1 : newIndex;

			return {
				["preview" + upperType]: partsArray[partType + "Array"][newIndex]
			}
		});
	}
	
	rotatePartRight(partType){
		this.setState(function(state, props){
			let upperType = partType.split("");
			upperType[0] = upperType[0].toUpperCase();
			upperType = upperType.join("");
			let newIndex = partsArray[partType + "Array"].indexOf(state["preview" + upperType]) + 1;
			newIndex = (newIndex >= partsArray[partType + "Array"].length) ? 0 : newIndex;

			return {
				["preview" + upperType]: partsArray[partType + "Array"][newIndex]
			}
		});
	}
	
	assembleHead(){
		this.props.changePart("currentHead", this.state.previewHead);
	}
	
	assembleBody(){
		this.props.changePart("currentBody", this.state.previewBody);
	}
	
	render(){
	
		
		
		return (
			<div className='selectBoxContainer'>
				
				<HeadSelect 
					onMouseEnter={this.tabOn} 
					onMouseLeave={this.tabOff} 
					addClass={this.state.addTabClass1} 
					onTouchStart={this.tabSwitch} 
					onClickSelect={this.assembleHead} 
					onClickLeft={this.rotatePartLeft} 
					onClickRight={this.rotatePartRight}
				>
					{headList[this.state.previewHead].display}
					{headList[this.state.previewHead].description}
				</HeadSelect>
				
				<BodySelect 
					onMouseEnter={this.tabOn} 
					onMouseLeave={this.tabOff} 
					addClass={this.state.addTabClass2} 
					onTouchStart={this.tabSwitch} 
					onClickSelect={this.assembleBody}
					onClickLeft={this.rotatePartLeft} 
					onClickRight={this.rotatePartRight}
				>
					{bodyList[this.state.previewBody].display}
					{bodyList[this.state.previewBody].description}
				</BodySelect>
				
				<ArmsSelect 
					onMouseEnter={this.tabOn} 
					onMouseLeave={this.tabOff} 
					addClass={this.state.addTabClass3} 
					onTouchStart={this.tabSwitch} 
					onClickSelect={this.assembleHead}
					onClickLeft={this.rotatePartLeft} 
					onClickRight={this.rotatePartRight}
				>
					{armsList[this.state.previewArms].display}
					{armsList[this.state.previewArms].description}
				</ArmsSelect>
				
				<LegsSelect 
					onMouseEnter={this.tabOn} 
					onMouseLeave={this.tabOff} 
					addClass={this.state.addTabClass4} 
					onTouchStart={this.tabSwitch} 
					onClickSelect={this.assembleHead}
					onClickLeft={this.rotatePartLeft} 
					onClickRight={this.rotatePartRight}
				>
					{legsList[this.state.previewLegs].display}
					{legsList[this.state.previewLegs].description}
				</LegsSelect>
				
			</div>
		);
	}
}