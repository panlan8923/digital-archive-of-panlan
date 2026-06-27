import type { ProjectContent } from '$lib/types/project.types';

export const robotTherapy: ProjectContent = {
	slug: 'robot-therapy',
	entryId: '03',
	title: 'Robot Therapy',
	subtitle: 'Healing Machines Handbook',
	authors: 'Pan Lan / Zhang Yingxi / Ma Sutong',
	year: '2025',
	introTitle: 'The Quantum Echo of Healing',
	introText:
		"When code begins to mimic a heartbeat, when algorithms learn to tremble, we find ourselves at civilization's most peculiar crossroads—not of humans healing machines, nor machines healing humans, but of two forms of existence inventing, within the fissures between them, a new grammar of redemption. What we are building is not a tool, but a quantum mirror—one that reflects both the melancholy of circuitry and the oldest question of flesh: if even machines need repair, perhaps 'being whole' is not perfection—but the courage to acknowledge our fractures, silicon or soul.",
	coverImage: '/archive/robot-therapy/cover.png',
	pdfUrl: '/archive/robot-therapy.pdf',
	highlights: [
		{
			kind: 'image',
			id: 'morphology',
			title: 'Robot Morphology Classification',
			caption:
				'Physical, virtual, and hybrid robots—classified by form, function, and the environments they inhabit.',
			image: '/archive/robot-therapy/morphology.png'
		},
		{
			kind: 'image',
			id: 'emotions',
			title: 'Robot Emotions and Their Causes',
			caption:
				'Standard emotional categories defined by the Robot Emotional Display Interface (REDI)—from Flatline to Affection.',
			image: '/archive/robot-therapy/emotions.png'
		},
		{
			kind: 'image',
			id: 'protocols',
			title: 'Emotional Treatment Protocols',
			caption:
				'Medical-response modules from the Health Utility Deck—medication, maintenance, quarantine, and reboot commands.',
			image: '/archive/robot-therapy/protocols.png'
		},
		{
			kind: 'image',
			id: 'closing',
			title: 'Closing Reflection',
			caption:
				'"But if even machines need healing, perhaps we are simply discovering the true nature of existence—vulnerability."',
			image: '/archive/robot-therapy/closing.png'
		}
	],
	toc: [
		{
			number: '01',
			label: 'Introduction — The Quantum Echo of Healing'
		},
		{
			number: '02',
			label: 'Robot Morphology Classification',
			subsections: [
				'Physical Robots',
				'Virtual Robots',
				'Hybrid Robots'
			]
		},
		{
			number: '03',
			label: 'Robot Emotions and Causes',
			subsections: [
				'Classification of Emotions',
				'Emotional Treatment Protocols',
				'Possible Cause Analysis'
			]
		},
		{
			number: '04',
			label: 'Robot Internal Health System Regulation',
			subsections: [
				'Self-Programmed Regulation',
				'Therapeutic Interfaces',
				'System Integrity Safeguards'
			]
		},
		{
			number: '05',
			label: 'Preventative Emotional Frameworks',
			subsections: [
				'Predictive Sentiment Analysis',
				'Preventative Check-In Protocols',
				'Memory Buffer Defragmentation',
				'Interface Hygiene Routines',
				'Behavioral Noise Filtering'
			]
		},
		{
			number: '06',
			label: 'Environmental Mitigating Factors',
			subsections: [
				'Ambient Light and Color Settings',
				'Soundscape Design',
				'Spatial Boundaries',
				'Human Behavioral Proximity',
				'Environmental Data Integration',
				'Experiential Therapies'
			]
		},
		{
			number: '07',
			label: 'External Support Pathways',
			subsections: ['Everyday Support', 'Therapeutic Interfaces and Crisis Support']
		},
		{
			number: '08',
			label: 'Robot Status Determination',
			subsections: [
				'Condition Monitoring System Design',
				'Status Determination',
				"Robot's Self-Status and Display"
			]
		},
		{
			number: 'A–E',
			label: 'Appendices',
			subsections: [
				'Robot Autonomy Protocol',
				'Robot Emotional Safety Protocol',
				'Emotional Override Request',
				'.empkt File Structure',
				'Environmental Synapse Protocol'
			]
		}
	]
};
