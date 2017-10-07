import React from 'react';
import SamuraiHead from './robotHeads/samurai/samuraiHead.js';
import Placeholder from "./placeholder.js";


export const headList = {
	samuraiHead: {
		display: SamuraiHead,
		description: (<span>
			Kabuto helmet <br />
			Demoralize enemies <br />
			Behind it, third eye
			</span>)
	},
	placeholder: {
		display: Placeholder,
		description: (<span>ERROR! Element shortage: Robotitanium</span>)
	}
}

export const bodyList = {
	placeholder: {
		display: Placeholder,
		description: (<span>ERROR! Blueprint has been stolen by cyborg ninjas</span>)
	}
}

export const armsList = {
	placeholder: {
		display: Placeholder,
		description: (<span>ERROR! Insufficient funds</span>)
	}
}

export const legsList = {
	placeholder: {
		display: Placeholder,
		description: (<span>ERROR! Not yet authorized to build this part</span>)
	}
}