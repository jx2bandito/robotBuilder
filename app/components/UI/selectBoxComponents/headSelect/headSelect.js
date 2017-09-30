import React from 'react';
import Style from "./headSelect.scss";
import gsap from "gsap";
export default class HeadSelect extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {open:true};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(){
		if (!this.state.open){
			this.setState({open: true});
			TweenMax.to(".headSelect", .5, {width: "100%"});
		}
		else if (this.state.open){
			this.setState({open: false});
			TweenMax.to(".headSelect", .5, {width: "20%"});
		}
	}
	
	render(){
		return (
			<span className='headSelect' onClick={this.handleClick}>
			</span>
		);
	}
}	