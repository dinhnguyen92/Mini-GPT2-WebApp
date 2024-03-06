const Timing = {
	veryShortDurationSec: 0.2,
	shortDurationSec: 0.5,
	mediumDurationSec: 0.7,
	longDurationSec: 1
}

const hidden = { opacity: 0 }
const visible = { opacity: 1 }

const Effects = {
	hidden,
	visible,
	fadeIn: (delaySec: number, durationSec: number) => ({
		...visible,
		transition: {
			delay: delaySec,
			duration: durationSec
		}
	}),
	fadeOut: (delaySec: number, durationSec: number) => ({
		...hidden,
		transition: {
			delay: delaySec,
			duration: durationSec
		}
	}),
}

const Defaults = {
	animationProps: {
		initial: Effects.hidden,
		animate: Effects.fadeIn(0, Timing.shortDurationSec),
		exit: Effects.fadeOut(0, Timing.shortDurationSec)
	}
}

const Animation = {
	Timing,
	Effects,
	Defaults
}

export default Animation
