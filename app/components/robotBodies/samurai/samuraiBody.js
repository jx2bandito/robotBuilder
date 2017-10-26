import React from 'react';
import Style from './samuraiBodyStyle.scss';
import death from '../../.././death.png';
import gsap from 'gsap';

export default class samuraiBody extends React.Component{
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
		let speed = 2.2;
		
		if(!document.querySelector(".animationWrapper .samuraiBody")){
			return false;
		}
		
		
		var samuraiBodyTL = new TimelineMax();
			samuraiBodyTL
			  .from(".animationWrapper .samuraiBody", 1, {
				scale: 1.05,
				display: "none"
			  })
			  .from(".animationWrapper .samuraiLowerBody", 1, {
				rotationX: "-90deg",
				display: "none"
			  })
			  .to(".animationWrapper .coreCoverLeft", 0.5, {
				  width: "0%",
				  right: "50%"
				},
				"coverMove"
			  )
			  .to(".animationWrapper .coreCoverRight", 0.5, {
				  width: "0%",
				  onStart: function() {
					document.querySelector(".animationWrapper .core").className += " animated";
				  }
				},
				"coverMove"
			  )
			  .from(".animationWrapper .backPlate.plate1", 1, {
				scale: 0.95,
				display: "none",
				onStart: function() {
					var legAnim = document.querySelector(".animationWrapper .legAnimWrap");
					if(legAnim){
						legAnim.style.zIndex = 301;
					}
				  document.querySelector(".animationWrapper .armContainerLeft").style.zIndex = 301;
				  document.querySelector(".animationWrapper .armContainerRight").style.zIndex = 301;
				},
				delay: 0.25,
				ease: Power4.easeInOut
			  })
			  .from(".animationWrapper .backPlate.plate2", 1, {
				  y: "-60%",
				  display: "none",
				  ease: Power4.easeInOut
				},
				"-=.25"
			  )
			  .from(".animationWrapper  .frontPlate.plate1", 1, {
				y: "-0.25%",
				onStart: function() {
				  document.querySelector(".animationWrapper .armContainerLeft").style.zIndex = 298;
				  document.querySelector(".animationWrapper .armContainerRight").style.zIndex = 298;
				},
				display: "none",
				scale: 1.11,
				delay: 0.25,
				ease: Power4.easeInOut
			  })
			  .from(".animationWrapper .frontPlate.plate2", 1, {
				  y: "-60%",
				  display: "none",
				  ease: Power4.easeInOut,
				  onStart: function() {
					document.querySelector(".animationWrapper .legAnimWrap").style.zIndex = 298;
				  }
				},
				"-=.25"
			  )
			  .from(".animationWrapper .padLeft", 1, {
				  x: "40%",
				  ease: Power4.easeInOut
				},
				"padMove"
			  )
			  .from(".animationWrapper .padRight", 1, {
				  x: "-40%",
				  ease: Power4.easeInOut
				},
				"padMove"
			  )
			  .from(".animationWrapper .penta", 1, {
				rotationX: "90deg",
				ease: Back.easeOut
			  })
			  .from(".animationWrapper .neck", 0.5, {
				  scale: "0"
				},
				"-=.15"
			  )
			  .timeScale(speed)
			  .play(0);
	}
	
	render(){
		return (
			<div className="bodyAnimWrap">
			  <div className="samuraiBodyWrapper">
				<span className="backPlate plate1">
				  <span className="neck"></span>
				</span>
				<span className="backPlate plate2"></span>
				<span className="samuraiBody">
				  <span className="core"><span className="coreMiddle"></span><span className="coreEnd"></span></span>
				<span className="coreCoverLeft coreCover"></span>
				<span className="coreCoverRight coreCover"></span>

				</span>
				<span className="samuraiLowerBody"></span>
					<span className="frontPlate plate1">
				  <span className="pad padLeft"></span>
				<span className="pad padRight"></span>
				<span className="penta"><img className="shi" src={death} alt="Japanese character for death"/></span>
				</span>
				<span className="frontPlate plate2">
				  <span className="belt"></span>
				</span>
			  </div>
			</div>		
		);
	}
}

