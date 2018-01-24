import React from 'react';
import Style from './samuraiLegsStyle.scss';
import gsap from 'gsap';

export default class samuraiLegs extends React.Component{
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
		let speed = 1.5;
			
		let samuraiLegTL = new TimelineMax({});
		samuraiLegTL
		  .from(".animationWrapper .samuraiLegs", 1, {
			y: "600%",
			display: "none"
		  })
		  .from(".animationWrapper .leftUpThigh", 1, {
			  x: "-600%",
			  display: "none"
			},
			"upThigh"
		  )
		  .from(".animationWrapper .rightUpThigh", 1, {
			  x: "600%",
			  display: "none"
			},
			"upThigh"
		  )
		  .from(".animationWrapper .lowerThigh", 1, {
			rotationX: "-90deg"
		  })
		  .from(".animationWrapper .shin", 1, {
			  rotationX: "-90deg"
			},
			"-=0.5"
		  )
		  .fromTo(".animationWrapper .footWrapper", 1, {
			  y: "-600%"
			},
			{
			  y: "300%"
			},
			"footdown"
		  )
		  .from(".animationWrapper .foot, .animationWrapper .footConnector", 1, {
			  display: "none"
			},
			"footdown"
		  )
		  .from(".animationWrapper .footLeft", 1, {
			  rotationZ: "-90deg"
			},
			"footRotate"
		  )
		  .from(".animationWrapper .footRight", 1, {
			  rotationZ: "90deg"
			},
			"footRotate"
		  )
		  .to(".animationWrapper .footWrapper", 1, {
			y: "0%"
		  })
		  .timeScale(speed);
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

