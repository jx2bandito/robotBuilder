import React from 'react';
import Style from './samuraiBodyStyle.scss';
import death from '../../.././death.png';
import gsap from 'gsap';

export default class samuraiBody extends React.Component{
	constructor(props){
		super(props);
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

