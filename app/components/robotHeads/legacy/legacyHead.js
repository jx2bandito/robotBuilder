import React from 'react';
import Style from './legacyHeadStyle.scss';
import gsap from 'gsap';

export default class samuraiHead extends React.Component{
	constructor(props){
		super(props);
	}
	
	
	render(){
		return (
			<div className="legacyHeadWrap">
			  <div className="legacyHead">
				<span className="vWrapper">
					<span className="legacyV vLeft"></span>
					<span className="legacyV vRight"></span>
					<span className="vCenter"></span>
				</span>
			  </div>
			</div>

		);
	}
}

