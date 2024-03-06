import AnimatedPage from '../../animation/AnimatedPage';
import TextGenerator from '../widgets/generator/TextGenerator';

export default function HomePage() {
	return (
		<AnimatedPage pageKey='home'>
			<TextGenerator />
		</AnimatedPage>
	)
}
