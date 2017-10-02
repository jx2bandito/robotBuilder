import React from 'react';

export default class HeadSelect extends React.Component{
	constructor(props){
		super(props);
		
		this.handleMouseLeave=this.handleMouseLeave.bind(this);
		this.handleMouseEnter=this.handleMouseEnter.bind(this);
	}
	
	handleMouseEnter(){
		this.props.handleMouseEnter(1);
	}
	
	handleMouseLeave(){
		this.props.handleMouseLeave(1);
	}
	
	render(){
		return (
			<span className={"tab " + this.props.addTabClass1} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
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
		);
	}
}	