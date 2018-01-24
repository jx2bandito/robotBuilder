import React from 'react';
import Style from './samuraiHeadStyle.scss';
import gsap from 'gsap';

export default class samuraiHead extends React.Component{
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
		let speed = 1.5;

		var samuraiHeadTL = new TimelineMax();
			samuraiHeadTL
			  .from(".animationWrapper .samuraiHead", 1, {
				y: "1000%",
				display: "none"
			  })
			  .from(".animationWrapper .helmet", 1 ,{
				  y: "-1000%",
				  autoAlpha: 0,
				  ease: Power4.easeOut
				},
				"armorForming"
			  )
			  .from(".animationWrapper .leftArmor", 1, {
				  x: "-1000%",
				  autoAlpha: 0,
				  ease: Power4.easeOut
				},
				"armorForming"
			  )
			  .from(".animationWrapper .rightArmor", 1, {
				  x: "1000%",
				  autoAlpha: 0,
				  ease: Power4.easeOut
				},
				"armorForming"
			  )
			  .set(".animationWrapper .samuraiV", { css: { zIndex: "-250" } })
			  .fromTo(".animationWrapper .samuraiV", 1, {
				  scale: "0",
				  rotationZ: "-10800deg",
				  x: "-1000%",
				  y: "-50%",
				  ease: Power4.easeOut
				},
				{
				  scale: "1.2",
				  rotationZ: "-1080deg",
				  x: "200%"
				},
				"-=.5"
			  )
			  .set(".animationWrapper .samuraiV", { css: { zIndex: "35" } })
			  .to(".animationWrapper .samuraiV", 0.5, {
				scale: 1,
				rotationZ: "0deg",
				x: "0%",
				y: "0%",
				ease: Power4.easeOut
			  })
			  .from(".animationWrapper .mouth", 1, {
				autoAlpha: 0,
				scale: 1.5,
				y: "20%"
			  })
			  .set(".animationWrapper .neckArmor", { css: { zIndex: "-5" } })
			  .from(".animationWrapper .neckArmor", 1, {
				y: "-40%",
				autoAlpha: 0,
				scale: 0
			  })
			  .to(".animationWrapper .rightEye", 0, {
				  rotationZ: "-18deg",
				  skew: "-18deg"
				},
				"-=.75"
			  )
			  .to(".animationWrapper .leftEye", 0, {
				  rotationZ: "18deg",
				  skew: "18deg"
				},
				"-=.75"
			  )
			  .from(".animationWrapper .eye", 1, {
				  autoAlpha: 0,
				  rotationX: "-89deg",
				  ease: Bounce.easeOut
				},
				"-=.75"
			  )
			  .to(".animationWrapper .eye", 1, {
				rotationX: "45deg",
				backgroundColor: "#f1c40f",
				ease: Elastic.easeOut
			  })
			  .timeScale(speed);
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

