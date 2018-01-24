import React from 'react';
import Style from './samuraiArmsStyle.scss';
import gsap from 'gsap';

export default class samuraiArms extends React.Component{
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
		let speed = 1;
			
		var samuraiArmTL = new TimelineMax();
		samuraiArmTL
		  .from(".animationWrapper .armContainerLeft", 1, {
			  x: "-100%"
			},
			"initArms"
		  )
		  .from(".animationWrapper .armContainerRight", 1, {
			  x: "100%"
			},
			"initArms"
		  )
		  .from(".animationWrapper .shoulderJoint", 1, {
			  x: "-140%",
			  ease: Power4.easeInOut
			},
			"-=.75"
		  )
		  .from(".animationWrapper .upperArmGuard",	1, {
			  y: "45%",
			  ease: Power4.easeInOut
			},
			"-=.75"
		  )
		  .from(".animationWrapper .armContainerLeft .elbowJoint", 1, {
			  y: "180%",
			  ease: Bounce.easeInOut
			},
			"-=.75"
		  )
		  .from(".animationWrapper .armContainerRight .elbowJoint", 1, {
			  y: "180%",
			  ease: Elastic.easeInOut
			},
			"-=.75"
		  )
		  .from(".animationWrapper .lowerArmGuard", 1, {
			  y: "25%",
			  ease: Back.easeInOut
			},
			"-=.75"
		  )
		  .fromTo(".animationWrapper .shoulderJoint", 0.5, {
			  rotationZ: "90deg",
			  ease: Power4.easeOut
			},
			{
			  rotationZ: "3deg"
			}
		  )
		  .to(".animationWrapper .shoulderJoint", 0.5, {
			rotationZ: "30deg",
			ease: Power4.easeInOut
		  })
		  .to(".animationWrapper .elbowJointFront", 1, {
			  rotationZ: "35deg",
			  ease: Power4.easeInOut
			},
			"-=.75"
		  )
		  .from(".animationWrapper .fist", 0.5, {
			  y: "1000%",
			  ease: Power4.easeOut,
			  display: "none"
			},
			"-=.15"
		  )
		  .from(".animationWrapper .blade", 0.15, {
			scale: 0
		  })
		  .timeScale(speed);
	}
	
	render(){
		return (
			<div>
			<div className="armContainer armContainerLeft">
			  <span className="shoulder">
				<span className="shoulderConnector"></span>
			  </span>
			  <span className="shoulderJoint">
			  <span className="upperArmGuard armGuard">
			  </span>
			  <span className="elbowJoint elbowJointBack"></span>
			  <span className="elbowJoint elbowJointFront">
				<span className="lowerArmGuard armGuard">
				</span>
			  <span className="fist">
				<span className="fistConnector"></span>
			  <span className="finger"></span>
			  <span className="finger"></span>
			  <span className="finger"></span>
			  <span className="finger"></span>
			  <span className="thumb0">
				  <span className="thumb1"></span>
			  </span>
			  <span className="hilt">
				<span className="hiltGuard"></span>
			  <span className="hiltDesign">
					<span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  </span>
			  <span className="blade">
				  <span className="bladeDesign"></span>
			  </span>
			  </span>
			  </span>
			  </span>
			  </span>
			</div>

			<div className="armContainer armContainerLeft">
			  <span className="shoulder">
				<span className="shoulderConnector"></span>
			  </span>
			  <span className="shoulderJoint">
			  <span className="upperArmGuard armGuard">
			  </span>
			  <span className="elbowJoint elbowJointBack"></span>
			  <span className="elbowJoint elbowJointFront">
				<span className="lowerArmGuard armGuard">
				</span>
			  <span className="fist">
				<span className="fistConnector"></span>
			  <span className="finger"></span>
			  <span className="finger"></span>
			  <span className="finger"></span>
			  <span className="finger"></span>
			  <span className="thumb0">
				  <span className="thumb1"></span>
			  </span>
			  <span className="hilt">
				<span className="hiltGuard"></span>
			  <span className="hiltDesign">
					<span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  </span>
			  <span className="blade">
				  <span className="bladeDesign"></span>
			  </span>
			  </span>
			  </span>
			  </span>
			  </span>
			</div>

			<div className="armContainer armContainerRight">
			  <span className="shoulder">
				<span className="shoulderConnector"></span>
			  </span>
			  <span className="shoulderJoint">
			  <span className="upperArmGuard armGuard">
			  </span>
			  <span className="elbowJoint elbowJointBack"></span>
			  <span className="elbowJoint elbowJointFront">
				<span className="lowerArmGuard armGuard">
				</span>
			  <span className="fist">
				<span className="fistConnector"></span>
			  <span className="finger"></span>
			  <span className="finger"></span>
			  <span className="finger"></span>
			  <span className="finger"></span>
			  <span className="thumb0">
				  <span className="thumb1"></span>
			  </span>
			  <span className="hilt">
				<span className="hiltGuard"></span>
			  <span className="hiltDesign">
				  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  <span className="hiltPattern"></span>
			  </span>
			  <span className="blade">
				  <span className="bladeDesign"></span>
			  </span>
			  </span>
			  </span>
			  </span>
			  </span>
			</div>
			</div>
		);
	}
}

