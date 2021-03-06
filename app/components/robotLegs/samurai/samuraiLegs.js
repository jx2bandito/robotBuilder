import React from 'react';
import Style from './samuraiLegsStyle.scss';
import gsap from 'gsap';

export default class samuraiLegs extends React.Component{
	constructor(props){
		super(props);
	}

	
	render(){
		return (
			<div className="legAnimWrap">
			  <span className="samuraiLegs">
				  <span className="legToBody"></span>
			  <span className="pelvis">
				  </span>
			  <span className="pelvisConnectors"></span>

			  <span className="leftUpThigh upperThigh">
					<span className="lowerThigh">
					  <span className="thighShadow"></span>
			  <span className="knee">
						<span className="leftShin shin">
						</span>
			  <span className="footWrapper">
						  <span className="footConnector"></span>
			  <span className="foot footLeft"></span>
			  </span>
			  </span>
			  </span>
			  </span>

			  <span className="rightUpThigh upperThigh">
					<span className="lowerThigh">
					  <span className="thighShadow"></span>
			  <span className="knee">
						<span className="rightShin shin"></span>
			  <span className="footWrapper">
						  <span className="footConnector"></span>
			  <span className="foot footRight"></span>
			  </span>
			  </span>
			  </span>
			  </span>


			  </span>
			</div>
		);
	}
}

