import React from 'react';
import Style from './samuraiheadStyle.scss';
import {TweenMax} from 'gsap';


export default class samuraiHead extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			className: "samuraiHead"
		}
		this.handleClick = this.handleClick.bind(this);
		
		
	}
	
	handleClick(){
		this.setState({
			className: "samuraiHead"
		})
	}
	
	componentDidMount(){
		var samuraiTL = new TimelineMax();
		samuraiTL
		.from(".samuraiHead", 1, {
			y: "1000%",
		})
		.from(".helmet", 1, {
			y: "-1000%",
			scale: 0,
			autoAlpha: 0
		}, "armorForming")
		.from(".leftArmor", 1, {
			x: "-1000%",
			scale: 0,
			autoAlpha: 0
		}, "armorForming")
		.from(".rightArmor", 1, {
			x: "1000%",
			scale: 0,
			autoAlpha: 0
		}, "armorForming")
		.set(".samuraiV", {css: {zIndex: "-250"}})
		.fromTo(".samuraiV", 1, {
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
		.set(".samuraiV", {css: {zIndex: "2"}})
		.to(".samuraiV", .5, {
			scale: 1,
			rotationZ: "0deg",
			x: "0%",
			y: "0%",
			ease: Power4.easeOut
		})
		.from(".mouth", 1, {
			autoAlpha: 0,
			scale: 1.5,
			y: "20%"
		})
		.from(".neckArmor", 1, {
			y: "-40%",
			autoAlpha: 0,
			scale: 0
		})
		.from(".eye", 1, {
			scale: "0%",
			rotationX: "180deg",
			ease: Bounce.easeOut
		}, "-=.75")
		.to(".eye", 1, {
			rotationX: "45deg",
			backgroundColor: "#f1c40f"
		})
		.to(".samuraiHead", 2, {
			scale: 1.1,
			ease: RoughEase.ease.config({
				points: 50
			})
		}, "-=1")
		.timeScale(2)
		;
		
		
	}
	
	render(){
		return (
			<div>
				<div className={this.state.className} onClick={this.handleClick}>
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

