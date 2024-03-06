import { Button, ButtonGroup, Label, Message, Segment } from "semantic-ui-react"
import Colors from "../../../style/colors"
import { toast } from "react-toastify"
import copy from "copy-to-clipboard"
import { TextCompletion, extractGeneratedTokens } from "../../../../model/textCompletion"
import StringUtil from "../../../../util/stringUtil"

interface Props {
  index: number
  promptText: string
  textCompletion: TextCompletion
  addContent: (content: string) => void
  onAnalysisClick: () => void
}

export default function TextCompletionCard(props: Props) {

  const generatedText = extractGeneratedTokens(props.textCompletion).join('')

  const buttonStyle = {
    color: Colors.textWhite
  }

  const copyToClipboard = () => {
    if (copy(generatedText)) {
      // Inform the user that the copy is successufl
      toast.success("Copied to clipboard")
    }
  }

  const copyButton = (
    <Button
      color='violet'
      content='Copy to clipboard'
      labelPosition='right'
      icon='copy'
      style={buttonStyle}
      onClick={copyToClipboard}
    />
  )

  const addButton = (
    <Button
      color='blue'
      content='Add to prompt'
      labelPosition='right'
      icon='add'
      style={buttonStyle}
      onClick={() => props.addContent(generatedText)}
    />
  )

  const analyzeButton = (
    <Button
      color='teal'
      content='Analyze'
      labelPosition='left'
      icon='search'
      style={buttonStyle}
      onClick={props.onAnalysisClick}
    />
  )

  const messageStyle = {
    color: Colors.textWhite,
    backgroundColor: '#1b1c1d',
    width: '100%',
    height: '100%',
    margin: '0'
  }

  const segmentStyle = {
    padding: '14px 0 0 0'
  }

  const cardWrapperStyle = {
    width: '100%'
  }

  // Only display up to 10 words from the prompt in the label
  const promptLabelLength = 10
  const promptLabel = StringUtil.getLastNWords(props.textCompletion.prompt_tokens.join(''), promptLabelLength)
  
  return (
    <div style={cardWrapperStyle}>
      <Segment style={segmentStyle} inverted attached='top'>
        <Label color='red' ribbon>{`Option ${props.index + 1}`}</Label>
        <span>{promptLabel + '...'}</span>
        <Message style={messageStyle} content={'...' + generatedText} />
      </Segment>
      <ButtonGroup widths={3} attached='bottom'>
        {analyzeButton}
        {copyButton}
        {addButton}
      </ButtonGroup>
    </div>
  )
}