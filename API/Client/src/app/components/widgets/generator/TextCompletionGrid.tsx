import { Grid } from "semantic-ui-react";
import { TextCompletion } from "../../../../model/textCompletion";
import AnimatedDiv from "../../../animation/AnimatedDiv";
import CommonStyles from "../../../style/commonStyles";
import TextCompletionCard from "./TextCompletionCard";

interface Props {
  promptText: string
  textCompletions: TextCompletion[]
  heightPercent: number
  widthPercent: number
  addContent: (content: string) => void
  onAnalysis: (textCompletion: TextCompletion) => void
}

export default function TextCompletionGrid(props: Props) {

  const completionGridWrapperStyle = {
    width: '100%',
    height: props.heightPercent + '%',
    ...CommonStyles.centerContentStyle
  }

  const gridStyle = {
    margin: '0',
    height: '100%',
    width: props.widthPercent + '%',
  }

  return (
    <AnimatedDiv
      divKey='textCompletionDisplay'
      style={completionGridWrapperStyle}
    >
      <Grid style={gridStyle}>
        {props.textCompletions.map((completion, i) => (
          <Grid.Row>
            <TextCompletionCard
              index={i}
              promptText={props.promptText}
              textCompletion={completion}
              addContent={props.addContent}
              onAnalysisClick={() => props.onAnalysis(completion)}
            />
          </Grid.Row>
        ))}
      </Grid>    
    </AnimatedDiv>
  )
}