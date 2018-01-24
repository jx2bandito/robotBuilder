import React from 'react';
import SamuraiHead from './robotHeads/samurai/samuraiHead.js';
import SamuraiHeadAnimate from './robotHeads/samurai/samuraiHeadAnimate.js';
import SamuraiBody from "./robotBodies/samurai/samuraiBody.js";
import SamuraiBodyAnimate from "./robotBodies/samurai/samuraiBodyAnimate.js";
import SamuraiArms from "./robotArms/samurai/samuraiArms.js";
import SamuraiArmsAnimate from "./robotArms/samurai/samuraiArmsAnimate.js";
import SamuraiLegs from "./robotLegs/samurai/samuraiLegs.js";
import SamuraiLegsAnimate from "./robotLegs/samurai/samuraiLegsAnimate.js";
/*import LegacyHead from './robotHeads/legacy/legacyHead.js';
import LegacyHeadAnimate from "./robotHeads/legacy/legacyHeadAnimate.js";*/
import Placeholder from "./placeholder.js";


export const headList = {
	samuraiHead: {
		display: SamuraiHead,
		animate: SamuraiHeadAnimate,
		description: (<span>
			Kabuto helmet <br />
			Demoralize enemies <br />
			Behind it, third eye
			</span>)
	},
	/*legacyHead: {
		display: LegacyHead,
		animate: LegacyHeadAnimate,
		description: (<span>Legacy Head: A robot head reminiscent of an old prototype.</span>)
	},*/
	placeholder: {
		display: Placeholder,
		animate: Placeholder,
		description: (<span>ERROR! Element shortage: Robotitanium</span>)
	}
}

export const bodyList = {
	samuraiBody: {
		display: SamuraiBody,
		animate: SamuraiBodyAnimate,
		description: (<span>
			Samurai armor <br />
			Roar, flames of the bushido<br />
			Take no prisoner
			</span>)
	},
	placeholder: {
		display: Placeholder,
		animate: Placeholder,
		description: (<span>ERROR! Blueprint has been stolen by cyborg ninjas</span>)
	}
}

export const armsList = {
	samuraiArms: {
		display: SamuraiArms,
		animate: SamuraiArmsAnimate,
		description: (<span>
			Dual katanas <br />
			Miyamoto Musashi<br />
			Would be proud indeed
			</span>)
	},
	placeholder: {
		display: Placeholder,
		animate: Placeholder,
		description: (<span>ERROR! Insufficient funds</span>)
	}
}

export const legsList = {
	samuraiLegs: {
		display: SamuraiLegs,
		animate: SamuraiLegsAnimate,
		description: (<span>
			Quick as a swallow<br />
			Running through the battlefield<br />
			Leaving death behind
			</span>)
	},
	placeholder: {
		display: Placeholder,
		animate: Placeholder,
		description: (<span>ERROR! Not yet authorized to build this part</span>)
	}
}