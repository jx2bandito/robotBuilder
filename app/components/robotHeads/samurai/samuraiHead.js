import React from 'react';
import Style from './samuraiHeadStyle.scss';
import gsap from 'gsap';

export default class samuraiHead extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div className="samuraiHeadWrap">
			  <div className="samuraiHead">
				<span className="samuraiV"></span>
				<span className="leftEye eye"></span>
				<span className="rightEye eye"></span>
				<span className="mouth"></span>
				<span className="leftArmor armorPiece armor"></span>
				<span className="rightArmor armorPiece armor"></span>
				<span className="helmet armor"></span>
				<span className="neckArmor"></span>
			  </div>
			</div>

		);
	}
}

