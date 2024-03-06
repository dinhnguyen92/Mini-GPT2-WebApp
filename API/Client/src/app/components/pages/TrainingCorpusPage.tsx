import AnimatedPage from "../../animation/AnimatedPage";
import AuthorGrid from "../widgets/authors/AuthorGrid";

export default function TrainingCorpusPage() {
  return (
		<AnimatedPage pageKey='training'>
			<AuthorGrid />
		</AnimatedPage>
	)
}