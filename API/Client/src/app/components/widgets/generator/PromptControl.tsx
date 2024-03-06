import { Button, ButtonGroup, Form, TextArea, TextAreaProps } from "semantic-ui-react"
import ModelDropdown from "./ModelDropdown"
import Colors from "../../../style/colors"
import EventsUtil from "../../../../util/eventsUtil"
import StringUtil from "../../../../util/stringUtil"
import { toast } from "react-toastify"
import copy from "copy-to-clipboard"

interface Props {
  textAreaValue?: string
  widthPercent: number
  isFetchingCompletion: boolean
  versions: string[]
  selectedVersion: string
  onVersionChange: (version: string) => void
  onInputChange: (input: string | undefined) => void
  handleSubmit: () => void
}

export default function PromptControl(props: Props) {

  const minPromptLength = 3
  const textAreaWordCount = StringUtil.splitToWords(props.textAreaValue).length
  const canSubmit = textAreaWordCount >= minPromptLength && !props.isFetchingCompletion

  const modelDropdown = (
    <ModelDropdown
      versions={props.versions}
      value={props.selectedVersion}
      handleVersionChange={props.onVersionChange}
    />
  )

  const buttonStyle = {
    color: Colors.textWhite
  }

  const downloadGeneratedText = () => {
    if (props.textAreaValue) {
      const blob = new Blob([props.textAreaValue], { type: 'text/plain' })

      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);

      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'generated_text.txt';

      // Programmatically click the anchor to start the download
      link.click();

      // Clean up by revoking the URL
      URL.revokeObjectURL(url);
    }
  }

  const downloadButton = (
    <Button
      color='teal'
      content='Download'
      labelPosition='right'
      icon='download'
      style={buttonStyle}
      onClick={downloadGeneratedText}
      disabled={textAreaWordCount === 0}
    />
  )
  
  const copyToClipboard = () => {
    if (props.textAreaValue && copy(props.textAreaValue)) {
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
      disabled={textAreaWordCount === 0}
    />
  )

  const generateButton = (
    <Button
      primary
      content='Generate'
      labelPosition='right'
      icon='pencil'
      style={buttonStyle}
      onClick={props.handleSubmit}
      loading={props.isFetchingCompletion}
      disabled={!canSubmit}
    />
  )

  const handleInputChange = (event: React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => {
    // Since we'll submit the prompt when the user presses Enter, we don't want
    // the Enter key to add new line characters to the input.
    const normalizedInput = event.currentTarget.value.replace(/[\r\n]+/g, '')
    props.onInputChange(normalizedInput)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (EventsUtil.getKeyboardEventKey(event) === EventsUtil.ENTER_EVENT && canSubmit) {
      props.handleSubmit()
    }
  }

  const placeholder = `Please type at least ${minPromptLength} words that the generator can use as writing prompt. For example: "I have never imagined"`

  const textAreaHeight = '80px'
  const textAreaStyle = {
    width: '100%',
    minHeight: textAreaHeight,
    maxHeight: textAreaHeight,
    color: Colors.textWhite,
    backgroundColor: Colors.backgroundGray
  }
  const textArea = (
    <TextArea
      style={textAreaStyle}
      value={props.textAreaValue}
      placeholder={placeholder}
      onInput={handleInputChange}
      onKeyPress={handleKeyPress}
    />
  )

  const promptControlWrapperStyle = {
    width: props.widthPercent + '%'
  }

  const formStyle = {
    marginTop: '15px'
  }

  return (
    <div style={promptControlWrapperStyle}>
      <ButtonGroup widths={4}>
        {modelDropdown}
        {downloadButton}
        {copyButton}
        {generateButton}
      </ButtonGroup>
      <Form style={formStyle}>
        {textArea}
      </Form>
    </div>
  )
}