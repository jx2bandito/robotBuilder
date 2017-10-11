import React from 'react';
import Style from './samuraiBodyStyle.scss';
import death from '../../.././death.png';
import gsap from 'gsap';

export default class samuraiBody extends React.Component{
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
		let speed = 2;
		if(this.props.addClass == "mini"){
			return false;
		}
		
	var samuraiBodyTL = new TimelineMax();

	samuraiBodyTL
	  .from(".jumbo.samuraiBody", 1, {
		y: "100%"
	  })
	  .to(
		".jumbo.coreCoverLeft",
		1,
		{
		  width: "0",
		  right: "50%"
		},
		"coverMove"
	  )
	  .to(
		".jumbo.coreCoverRight",
		1,
		{
		  width: "0",
		  onStart: function() {
			document.getElementsByClassName("core")[1].className += " animated";
		  }
		},
		"coverMove"
	  )
	  .from(".jumbo.backPlate.plate1", 1, {
		y: "10",
		scale: 0.8,
		display: "none",
		delay: 0.25,
		ease: Power4.easeInOut
	  })
	  .from(".jumbo.backPlate.plate2", 1, {
		y: "-60%",
		display: "none",
		ease: Power4.easeInOut
	  }, "-=.25")
	  .from(".jumbo.frontPlate.plate1", 1, {
		y: "-10",
		display: "none",
		scale: 1.11,
		delay: 0.25,
		ease: Power4.easeInOut
	  })
	  .from(".jumbo.frontPlate.plate2", 1, { y: "-60%", display: "none", ease: Power4.easeInOut }, "-=.25")
	  .from(
		".padLeft",
		1,
		{
		  x: "35%",
		  ease: Power4.easeInOut 
		},
		"padMove"
	  )
	  .from(
		".jumbo.padRight",
		1,
		{
		  x: "-35%",
		  ease: Power4.easeInOut 
		},
		"padMove"
	  )
	  .from(".jumbo.penta", 1, {
		rotationX: "90deg",
		ease: Back.easeOut
	  })
	  .from(".jumbo.bodyAnimWrap", 1, {
		y: "5%",
		ease: Bounce.easeOut
	  })
	  .timeScale(2);
		
	}
	
	render(){
		return (
			<div className={"bodyAnimWrap " + this.props.addClass}>
				<div className={"samuraiBodyWrapper " + this.props.addClass}>
					<span className={"backPlate plate1 " + this.props.addClass}></span>
					<span className={"backPlate plate2 " + this.props.addClass}></span>
					<div className={"samuraiBody " + this.props.addClass}>
					<span className={"core " + this.props.addClass}>
						<span className={"coreCoverLeft coreCover " + this.props.addClass}></span>
						<span className={"coreCoverRight coreCover " + this.props.addClass}></span>
						<span className={"coreMiddle " + this.props.addClass}></span>
						<span className={"coreEnd " + this.props.addClass}></span>
					</span>
					</div>
				<span className={"frontPlate plate1 " + this.props.addClass}>
					<span className={"pad padLeft " + this.props.addClass}></span>
					<span className={"pad padRight " + this.props.addClass}></span>
					<span className={"penta " + this.props.addClass}>
						<img className={"shi " + this.props.addClass} 
						src={death} 
						alt="Japanese character for death"/>
					</span>
				</span>
				<span className={"frontPlate plate2 " + this.props.addClass}>
					<span className={"belt " + this.props.addClass}></span>
				</span>
				</div>
			</div>
				
		);
	}
}

