import React from 'react';
import Style from './selectBoxStyleCompiled.scss';
import HeadSelect from "./headSelect.js";


export default class SelectBox extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			addTabClass1: null,
			addTabClass2: null,
			addTabClass3: null,
			addTabClass4: null
		}
		
		this.toggleOn = this.toggleOn.bind(this);
		this.toggleOff = this.toggleOff.bind(this);
	}
	
	toggleOn(tabNum){ ////Takes an integer indicating which tab to affe
		var newKey = "addTabClass" + tabNum
		var newState = {};
		newState[newKey] = "toggledOn";
		this.setState(newState);
	}
	
	toggleOff(tabNum){////Takes an integer indicating which tab to affect
		var newKey = "addTabClass" + tabNum
		var newState = {};
		newState[newKey] = null;
		this.setState(newState);
	}
	
	render(){
		return (
			<div className='selectBoxContainer'>
				
				<HeadSelect handleMouseEnter={this.toggleOn} handleMouseLeave={this.toggleOff} addTabClass1={this.state.addTabClass1} />
				
				<span className="tab">
					<p>Armor</p>
					<span className="preview">
						<span className="portrait"></span>
						<span className="description">
							Kabuto helmet <br/>
							Demoralize enemies <br/>
							Behind it, third eye
						</span>
					</span>
					<i className="fa fa-toggle-right fa-lg"></i>
					<i className="fa fa-toggle-left fa-lg"></i>
				</span>
				
				<span className="tab">
					<p>Arms</p>
					<span className="preview">
						<span className="portrait"></span>
						<span className="description">
							Kabuto helmet <br/>
							Demoralize enemies <br/>
							Behind it, third eye
						</span>
					</span>
					<i className="fa fa-toggle-right fa-lg"></i>
					<i className="fa fa-toggle-left fa-lg"></i>
				</span>
				
				<span className="tab">
					<p>Legs</p>
					<span className="preview">
						<span className="portrait"></span>
						<span className="description">
							Kabuto helmet <br/>
							Demoralize enemies <br/>
							Behind it, third eye
						</span>
					</span>
					<i className="fa fa-toggle-right fa-lg"></i>
					<i className="fa fa-toggle-left fa-lg"></i>
				</span>
				
			</div>
		);
	}
}