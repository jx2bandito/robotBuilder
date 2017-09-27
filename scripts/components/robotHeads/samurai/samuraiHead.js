import React from 'react';
import Style from './samuraiheadStyle.scss';

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
	
	render(){
		return (
			<div>
				<div className={this.state.className} onClick={this.handleClick}>
					<span className="samuraiV"></span>
					<span className="leftEye eye"></span>
					<span className="rightEye eye"></span>
					<span className="mouth"></span>
				</div>
			</div>
		);
	}
	
}

