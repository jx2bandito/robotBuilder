import React from 'react';

export default class HeadSelect extends React.Component{
	constructor(props){
		super(props);
		
		this.handleMouseLeave=this.handleMouseLeave.bind(this);
		this.handleMouseEnter=this.handleMouseEnter.bind(this);
		this.handleTouchStart=this.handleTouchStart.bind(this);
	}
	
	handleMouseEnter(e){
		this.props.onMouseEnter(1);
	}
	
	handleMouseLeave(e){
		this.props.onMouseLeave(1);
	}
	
	handleTouchStart(e){
		this.props.onClick(1);
	}
	
	render(){
		return (
			<span className={"tab " + this.props.addTabClass1} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onTouchStart={this.handleTouchStart} >
				<p>HEAD</p>
				<span className="preview">
					<span className="portrait"></span>
						<span className="description">
						{this.props.children}
						</span>
				</span>
				<span className="faColumn">
					<i className="fa fa-toggle-right fa-lg"></i>
					<i className="fa fa-toggle-left fa-lg"></i>
				</span>
				<button className="selectButton">SELECT</button>
			</span>
		);
	}
}	