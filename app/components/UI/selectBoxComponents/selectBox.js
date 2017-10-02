import React from 'react';
import Style from './selectBoxStyleCompiled.scss';
import HeadSelect from "./headSelect/headSelect.js";


export default class SelectBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			addTabClass1: null
		}
		
		this.handleMouseEnter1 = this.handleMouseEnter1.bind(this);
		this.handleMouseLeave1 = this.handleMouseLeave1.bind(this);
	}
	
	handleMouseEnter1(param){
		alert(param)
		this.setState({addTabClass1: "toggledOn"});
	}
	
	handleMouseLeave1(){
		this.setState({addTabClass1: null});
	}
	
	render(){
		return (
			<div className='selectBoxContainer'>
			
				<span className={"tab " + this.state.addTabClass1} onMouseEnter={this.handleMouseEnter1} onMouseLeave={this.handleMouseLeave1}>
					<p>Head</p>
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