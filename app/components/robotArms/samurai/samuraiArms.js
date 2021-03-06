import React from 'react';
import Style from './samuraiArmsStyle.scss';
import gsap from 'gsap';

export default class samuraiArms extends React.Component{
	constructor(props){
		super(props);
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

