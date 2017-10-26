import React from 'react';
import SamuraiHead from './robotHeads/samurai/samuraiHead.js';
import SamuraiBody from "./robotBodies/samurai/samuraiBody.js";
import SamuraiArms from "./robotArms/samurai/samuraiArms.js";
import SamuraiLegs from "./robotLegs/samurai/samuraiLegs.js";
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
	samuraiBody: {
		display: SamuraiBody,
		description: (<span>
			Samurai armor <br />
			Roar, flames of the bushido<br />
			Take no prisoner
			</span>)
	},
	placeholder: {
		display: Placeholder,
		description: (<span>ERROR! Blueprint has been stolen by cyborg ninjas</span>)
	}
}

export const armsList = {
	samuraiArms: {
		display: SamuraiArms,
		description: (<span>
			Dual katanas <br />
			Miyamoto Musashi<br />
			Would be proud indeed
			</span>)
	},
	placeholder: {
		display: Placeholder,
		description: (<span>ERROR! Insufficient funds</span>)
	}
}

export const legsList = {
	samuraiLegs: {
		display: SamuraiLegs,
		description: (<span>
			Quick as a swallow<br />
			Running through the battlefield<br />
			Leaving death behind
			</span>)
	},
	placeholder: {
		display: Placeholder,
		description: (<span>ERROR! Not yet authorized to build this part</span>)
	}
}