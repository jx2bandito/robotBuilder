import React from 'react';

export default class HeadSelect extends React.Component{
	constructor(props){
		super(props);
		
		this.handleMouseLeave=this.handleMouseLeave.bind(this);
		this.handleMouseEnter=this.handleMouseEnter.bind(this);
		this.handleTouchStart=this.handleTouchStart.bind(this);
		this.handleClickSelect=this.handleClickSelect.bind(this);
	}
	
	handleMouseEnter(e){
		this.props.onMouseEnter(1);
	}
	
	handleMouseLeave(e){
		this.props.onMouseLeave(1);
	}
	
	handleTouchStart(e){
		this.props.onTouchStart(1);
	}
	
	handleClickSelect(e){
		this.props.onClickSelect()
		this.props.onMouseLeave(1);
	}
	
	render(){
		var Portrait = this.props.children[0];
		return (
			<span className={"tab " + this.props.addClass} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onTouchStart={this.handleTouchStart} >
				<p>HEAD</p>
				<span className="preview">
					<span className="portrait">
						<Portrait addClass="mini"/>
					</span>
						<span className="description">
						{this.props.children[1]}
						</span>
				</span>
				<span className="faColumn">
					<i className="fa fa-toggle-right fa-lg"></i>
					<i className="fa fa-toggle-left fa-lg"></i>
				</span>
				<button className="selectButton" onClick={this.handleClickSelect}>SELECT</button>
			</span>
		);
	}
}	