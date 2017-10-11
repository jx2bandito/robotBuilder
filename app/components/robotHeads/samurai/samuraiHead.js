import React from 'react';
import Style from './samuraiHeadStyle.scss';
import gsap from 'gsap';

export default class samuraiHead extends React.Component{
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
		let speed = 2;
		if(this.props.addClass == "mini"){
			return false;
		}
		
		
		var samuraiHeadTL = new TimelineMax();
		samuraiHeadTL
		.from(".jumbo.samuraiHead", 1, {
			y: "1000%",
		})
		.from(".jumbo.helmet", 1, {
			y: "-1000%",
			autoAlpha: 0,
			ease: Power4.easeOut
		}, "armorForming")
		.from(".jumbo.leftArmor", 1, {
			x: "-1000%",
			autoAlpha: 0,
			ease: Power4.easeOut
		}, "armorForming")
		.from(".jumbo.rightArmor", 1, {
			x: "1000%",
			autoAlpha: 0,
			ease: Power4.easeOut
		}, "armorForming")
		.set(".jumbo.samuraiV", {css: {zIndex: "-250"}})
		.fromTo(".jumbo.samuraiV", 1, {
			scale: "0",
			rotationZ: "-10800deg",
			x: "-1000%",
			y: "-50%",
			ease: Power4.easeOut
		}, {
			scale: "1.2",
			rotationZ: "-1080deg",
			x: "200%"
		}, "-=.5")
		.set(".jumbo.samuraiV", {css: {zIndex: "35"}})
		.to(".jumbo.samuraiV", .5, {
			scale: 1,
			rotationZ: "0deg",
			x: "0%",
			y: "0%",
			ease: Power4.easeOut
		})
		.from(".jumbo.mouth", 1, {
			autoAlpha: 0,
			scale: 1.5,
			y: "20%"
		})
		.set(".jumbo.neckArmor", {css: {zIndex: "-5"}})
		.from(".jumbo.neckArmor", 1, {
			y: "-40%",
			autoAlpha: 0,
			scale: 0
		})
		.to(".jumbo.rightEye", 0, {
			rotationZ: "-18deg",
			skew: "-18deg"
		},"-=.75")
		.to(".jumbo.leftEye", 0, {
			rotationZ: "18deg",
			skew: "18deg"
		}, "-=.75")
		.from(".jumbo.eye", 1, {
			autoAlpha: 0,
			rotationX: "-89deg",
			ease: Bounce.easeOut
		}, "-=.75")
		.to(".jumbo.eye", 1, {
			rotationX: "45deg",
			backgroundColor: "#f1c40f",
			ease: Elastic.easeOut
		})
		/*.to(".samuraiHead", 2, {
			scale: 1.1,
			ease: RoughEase.ease.config({
				points: 50
			})
		}, "-=1")*/
		.timeScale(speed)
		;
	}
	
	render(){
		return (
			<div className={"samuraiHeadWrap " + this.props.addClass}>
				<div className={"samuraiHead " + this.props.addClass} >
					<span className={"samuraiV " + this.props.addClass}></span>
					<span className={"leftEye eye " + this.props.addClass}></span>
					<span className={"rightEye eye " + this.props.addClass}></span>
					<span className={"mouth " + this.props.addClass}></span>
					<span className={"leftArmor armorPiece armor " + this.props.addClass}></span>
					<span className={"rightArmor armorPiece armor " + this.props.addClass}></span>
					<span className={"helmet armor " + this.props.addClass}></span>
					<span className={"neckArmor " + this.props.addClass}></span>
				</div>
			</div>
		);
	}
}

