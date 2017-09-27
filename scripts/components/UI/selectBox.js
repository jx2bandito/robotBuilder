import React from 'react';
import Style from './selectBoxStyle.scss';

export default class SelectBox extends React.Component{
	constructor(props){
		super(props);
		
	}
	
	render(){
		return (
			<div className='selectBoxContainer'>
				<span className='headContainer'>Head</span>
				<span className='bodyContainer'>Body</span>
				<span className='rArmContainer'>Arms</span>
				<span className='feetContainer'>Feet</span>
			</div>
		);
	}
}