import React from 'react';

export default class HeadSelect extends React.Component{
	constructor(props){
		super(props);
		
		this.handleMouseLeave=this.handleMouseLeave.bind(this);
		this.handleMouseEnter=this.handleMouseEnter.bind(this);
		this.handleTouchStart=this.handleTouchStart.bind(this);
		this.handleClickSelect=this.handleClickSelect.bind(this);
		this.handleClickLeft=this.handleClickLeft.bind(this);
		this.handleClickRight=this.handleClickRight.bind(this);
	}
	
	handleMouseEnter(e){
		this.props.onMouseEnter(4);
	}
	
	handleMouseLeave(e){
		this.props.onMouseLeave(4);
	}
	
	handleTouchStart(e){
		if(e.target.className == "selectButton"){
			return false;
		}
		this.props.onMouseEnter(4);
	}
	
	handleClickSelect(e){
		this.props.onClickSelect()
		this.props.onMouseLeave(4);
	}
	
	handleClickLeft(e){
		this.props.onClickLeft("legs");
	}
	
	handleClickRight(e){
		this.props.onClickRight("legs");
	}
	
	render(){
		var Portrait = this.props.children[0];
		return (
			<span className={"tab " + this.props.addClass} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onTouchStart={this.handleTouchStart} >
				<p>LEGS</p>
				<span className="preview">
					<span className="portrait">
						<Portrait />
					</span>
						<span className="description">
						{this.props.children[1]}
						</span>
				</span>
				<span className="faColumn">
					<i onClick={this.handleClickRight} className="fa fa-toggle-right fa-lg"></i>
					<i onClick={this.handleClickLeft} className="fa fa-toggle-left fa-lg"></i>
				</span>
				<button className="selectButton" onClick={this.handleClickSelect}>SELECT</button>
			</span>
		);
	}
}	

