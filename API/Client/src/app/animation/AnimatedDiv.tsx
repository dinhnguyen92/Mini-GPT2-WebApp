import { motion, MotionStyle } from 'framer-motion';
import Animation from '../style/animation';

interface Props {
	divKey: string
	children?: React.ReactNode
	style?: MotionStyle
}

export default function AnimatedDiv({ divKey, children, style }: Props) {
	return (
    <motion.div
      key={divKey}
      style={style}
      {...Animation.Defaults.animationProps}
    >
      {children}
    </motion.div>
  )
}


