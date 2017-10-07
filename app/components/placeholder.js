import React from 'react';
import Background from "./glitch.jpg";
import Style from "./placeholderStyle.scss";



export default class Placeholder extends React.Component{
	
	constructor(props){
		super(props);
	}
	
	render(){
		return (<span><img className={"placeholder " + this.props.addClass} src={Background} /></span>)
	}
	
	
	
}