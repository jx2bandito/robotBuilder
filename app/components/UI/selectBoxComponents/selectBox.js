import React from 'react';
import Style from './selectBoxStyle.scss';
import HeadSelect from "./headSelect.js";
import SamuraiHead from "./../../robotHeads/samurai/samuraiHead.js";

var headChoices = {
	samurai: {
		component: SamuraiHead,
		description: (<span>
			Kabuto helmet <br />
			Demoralize enemies <br />
			Behind it, third eye
			</span>)
	}
}

export default class SelectBox extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			addTabClass1: null,
			addTabClass2: null,
			addTabClass3: null,
			addTabClass4: null,
			currentHead: headChoices["samurai"]
		}
		
		this.tabOn = this.tabOn.bind(this);
		this.tabOff = this.tabOff.bind(this);
		this.tabSwitch = this.tabSwitch.bind(this);
	}
	
	tabOn(tabNum){ ////Takes an integer indicating which tab to affect
		var newKey = "addTabClass" + tabNum
		var newState = {};
		newState[newKey] = "toggledOn";
		this.setState(newState);
	}
	
	
	tabOff(tabNum){////Takes an integer indicating which tab to affect
		var newKey = "addTabClass" + tabNum
		var newState = {};
		newState[newKey] = null;
		this.setState(newState);
	}
	
	tabSwitch(tabNum){
		var newKey = "addTabClass" + tabNum
		var newState = {};
		newState[newKey] = this.state[newKey] ? null : "toggledOn";
		this.setState(newState);
	}
	
	render(){
		return (
			<div className='selectBoxContainer'>
				
				<HeadSelect 
					onMouseEnter={this.tabOn} 
					onMouseLeave={this.tabOff} 
					addTabClass1={this.state.addTabClass1} 
					onTouchStart={this.tabSwitch} 
				>
					{this.state.currentHead.description}
				</HeadSelect>
				
				<span className="tab">
					<p>BODY</p>
					<span className="preview">
						<span className="portrait"></span>
						<span className="description">
							Kabuto helmet <br/>
							Demoralize enemies <br/>
							Behind it, third eye
						</span>
					</span>
					<span className="faColumn">
						<i className="fa fa-toggle-right fa-lg"></i>
						<i className="fa fa-toggle-left fa-lg"></i>
					</span>
				</span>
				
				<span className="tab">
					<p>ARMS</p>
					<span className="preview">
						<span className="portrait"></span>
						<span className="description">
							Kabuto helmet <br/>
							Demoralize enemies <br/>
							Behind it, third eye
						</span>
					</span>
					<span className="faColumn">
						<i className="fa fa-toggle-right fa-lg"></i>
						<i className="fa fa-toggle-left fa-lg"></i>
					</span>
				</span>
				
				<span className="tab">
					<p>LEGS</p>
					<span className="preview">
						<span className="portrait"></span>
						<span className="description">
							Kabuto helmet <br/>
							Demoralize enemies <br/>
							Behind it, third eye
						</span>
					</span>
					<span className="faColumn">
						<i className="fa fa-toggle-right fa-lg"></i>
						<i className="fa fa-toggle-left fa-lg"></i>
					</span>
				</span>
				
			</div>
		);
	}
}