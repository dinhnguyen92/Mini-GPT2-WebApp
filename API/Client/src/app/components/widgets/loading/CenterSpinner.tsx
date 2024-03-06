import { Loader } from 'semantic-ui-react';
import AnimatedDiv from '../../../animation/AnimatedDiv';
import CommonStyles from '../../../style/commonStyles';

interface Props {
	children?: React.ReactNode
}

export default function CenterSpinner({ children }: Props) {

	const spinnerWrapperStyle = {
		height: '100%',
		width: '100%',
    ...CommonStyles.centerContentStyle
  }

	const loaderStyle = {
		lineHeight: '1.75',
		width: '80%'
	}

	return (
		<AnimatedDiv
			divKey='CenterSpinner'
			style={spinnerWrapperStyle}
		>
			<Loader
				active
				inverted
				size='big'
				style={loaderStyle}
			>
				{children}
			</Loader>
		</AnimatedDiv>
	)
}