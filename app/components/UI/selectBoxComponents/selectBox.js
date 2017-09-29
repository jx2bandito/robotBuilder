import React from 'react';
import Style from './selectBoxStyle.scss';
import HeadSelect from "./headSelect/headSelect.js";
export default class SelectBox extends React.Component{
	constructor(props){
		super(props);
		
	}
	
	render(){
		return (
			<div className='selectBoxContainer'>
				<HeadSelect />
				<span className='bodyContainer'>Body</span>
				<span className='rArmContainer'>Arms</span>
				<span className='feetContainer'>Feet</span>
			</div>
		);
	}
}