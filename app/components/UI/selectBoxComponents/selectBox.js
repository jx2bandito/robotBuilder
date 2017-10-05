import React from 'react';
import Style from './selectBoxStyle.scss';
import HeadSelect from "./headSelect.js";
import SamuraiHead from "./../../robotHeads/samurai/samuraiHead.js";
import {headList, bodyList, armsList, legsList} from "./../../partsList.js";


export default class SelectBox extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			addTabClass1: null,
			addTabClass2: null,
			addTabClass3: null,
			addTabClass4: null,
			previewHead: "samuraiHead"
		}
		
		this.tabOn = this.tabOn.bind(this);
		this.tabOff = this.tabOff.bind(this);
		this.tabSwitch = this.tabSwitch.bind(this);
		this.assembleHead = this.assembleHead.bind(this);
		
	}
	
	tabOn(tabNum){ ////Takes an integer indicating which tab to affect
		this.setState({["addTabClass" + tabNum]: "toggledOn"});
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
	
	assembleHead(){
		this.props.changePart("currentHead", this.state.previewHead);
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
				>
					{headList[this.state.previewHead].display}
					{headList[this.state.previewHead].description}
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