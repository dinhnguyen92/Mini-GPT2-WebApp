import { connect } from "react-redux"
import { Prompt } from "../../../../model/prompt"
import { EmptyCompletion, TextCompletion } from "../../../../model/textCompletion"
import { CommonThunkDispatch } from "../../../../redux/actions/commonActions"
import TextGeneratorActions from "../../../../redux/actions/textGeneratorActions"
import { RootState } from "../../../../redux/store"
import CommonStyles from "../../../style/commonStyles"
import ModelInfoDisplay from "./ModelInfoDisplay"
import { ModelInfo } from "../../../../model/modelInfo"
import { useEffect, useState } from "react"
import TextCompletionGrid from "./TextCompletionGrid"
import { Grid, SemanticWIDTHS } from "semantic-ui-react"
import { AnimatePresence } from "framer-motion"
import CenterSpinner from "../loading/CenterSpinner"
import PromptControl from "./PromptControl"
import Disclaimer from "./Disclaimer"
import StringUtil from "../../../../util/stringUtil"
import LoadingMessages from "../../../../model/loadingMessages"
import AnalysisModal from "./AnalysisModal"

interface StateProps {
  allVersions: string[]
  selectedVersion: string
  prompt: Prompt
  isFetchingCompletions: boolean
  textCompletions: TextCompletion[]
  modelInfo: ModelInfo | null
  modelPlotBase64String: string | null
}

interface DispatchProps {
  setSelectedVersion: (version: string) => void
  setPrompt: (prompt: Prompt) => void
  setModelPlot: (modelPlotBase64String: string | null) => void
  setModelInfo: (modelInfo: ModelInfo | null) => void
  setTextCompletions: (completions: TextCompletion[]) => void
  setCompletionsBeingFetched: (isFetchingCompletion: boolean) => void
  fetchAllVersion: () => Promise<void>
  fetchTextCompletions: (modelVersion: string, prompt: Prompt) => Promise<void>
  fetchModelInfo: (modelVersion: string) => Promise<void>
  fetchModelPlot: (modelVersion: string) => Promise<void>
}

type Props = StateProps & DispatchProps

const mapStateToProps = (state: RootState) => ({ ...state.textGenerator })

const mapDispatchToProps = (dispatch: CommonThunkDispatch): DispatchProps => ({
  setSelectedVersion: (version: string) => dispatch(TextGeneratorActions.actionToSetSelectedVersion(version)),
  setPrompt: (prompt: Prompt) => dispatch(TextGeneratorActions.actionToSetPrompt(prompt)),
  setModelPlot: (modelPlotBase64String: string | null) => dispatch(TextGeneratorActions.actionToSetModelPlot(modelPlotBase64String)),
  setModelInfo: (modelInfo: ModelInfo | null) => dispatch(TextGeneratorActions.actionToSetModelInfo(modelInfo)),
  setCompletionsBeingFetched: (isFetchingCompletion: boolean) => dispatch(TextGeneratorActions.actionToSetCompletionsBeingFetched(isFetchingCompletion)),
  setTextCompletions: (completions: TextCompletion[]) => dispatch(TextGeneratorActions.actionToSetTextCompletions(completions)),
  fetchAllVersion: () => dispatch(TextGeneratorActions.asyncActionToFetchAllVersions()),
  fetchTextCompletions: (modelVersion: string, prompt: Prompt) => dispatch(TextGeneratorActions.asyncActionToFetchTextCompletions(modelVersion, prompt)),
  fetchModelInfo: (modelVersion: string) => dispatch(TextGeneratorActions.asyncActionToFetchModelInfo(modelVersion)),
  fetchModelPlot: (modelVersion: string) => dispatch(TextGeneratorActions.asyncActionToFetchModelPlot(modelVersion))
})

function TextGenerator(props: Props) {
  
  const [ textAreaValue, setTextAreaValue ] = useState<string | undefined>(undefined)
  const { selectedVersion, fetchModelInfo, fetchModelPlot } = props

  const [ selectedCompletion, setSelectedCompletion ] = useState<TextCompletion>(EmptyCompletion)
  const [ analysisIsOpen, setAnalysisIsOpen ] = useState(false)

  const onAnalysis = (textCompletion: TextCompletion) => {
    setSelectedCompletion(textCompletion)
    setAnalysisIsOpen(true)
  }

  const onAnalysisClose = () => setAnalysisIsOpen(false)

  useEffect(() => {
    fetchModelInfo(selectedVersion)
    fetchModelPlot(selectedVersion)
  }, [selectedVersion, fetchModelInfo, fetchModelPlot])

  const updatePromptText = (newText: string | undefined) => {
    props.setPrompt({ ...props.prompt, text: newText })
  }

  const updateTextArea = (newText: string | undefined) => {
    setTextAreaValue(newText)

    // Use at most 20 words from the text area as prompt to reduce generation time
    const maxPromptLength = 20
    const newPrompt = StringUtil.getLastNWords(newText, maxPromptLength)

    updatePromptText(newPrompt)
  }

  const updateModelVersion = (newModelVersion: string) => {
    props.setModelPlot(null)
    props.setModelInfo(null)
    props.setSelectedVersion(newModelVersion)
  }

  const submitPrompt = () => {
    props.fetchTextCompletions(props.selectedVersion, props.prompt)
  }

  const addContentToTextArea = (content: string) => {

    updateTextArea(textAreaValue?.trim() + ' ' + content.trim())

    // Once the new content has been added, remove all generated completions
    props.setTextCompletions([])
  }

  const promptControlWrapperHeight = 24
  const promptControlWrapperStyle = {
    width: '100%',
    height: promptControlWrapperHeight + '%',
    ...CommonStyles.centerContentStyle
  }
  const promptControlWidthPercent = 90

  const promptControl = (
    <div style={promptControlWrapperStyle}>
      <PromptControl
        textAreaValue={textAreaValue}
        isFetchingCompletion={props.isFetchingCompletions}
        widthPercent={promptControlWidthPercent}
        versions={props.allVersions}
        selectedVersion={props.selectedVersion}
        onVersionChange={updateModelVersion}
        onInputChange={updateTextArea}
        handleSubmit={submitPrompt}
      />
    </div>
  )

  const generatorWrapperStyle = {
    height: '100%',
    width: '100%',
    margin: '0'
  }

  const resultColStyle = {
    padding: '0',
    height: '100%'
  }

  const modelInfoColStyle = {
    padding: '0',
    height: '100%',
    backgroundColor: '#1b1c1d'
  }

  // Semantic UI Grid can only have at most 16 columns so the max width is 16
  const maxGridWidth = 16
  const resultWidth = 11
  const modelInfoWidth = maxGridWidth - resultWidth

  const modelInfoLoaderWrapperStyle = {
    height: '100%',
    width: '100%'
  }

  const textCompletionHeight = 100 - promptControlWrapperHeight
  const textCompletionLoaderWrapperStyle = {
    height: textCompletionHeight + '%',
    width: '100%'
  }

  const getSubmissionSpinner = () => {
    const loadingMessage = LoadingMessages.sampleLoadingMessage()
    return (
      <div style={textCompletionLoaderWrapperStyle}>
        <CenterSpinner>
          <>
            <p>{loadingMessage.message}</p>
            {loadingMessage.author && <p>{' - ' + loadingMessage.author}</p>}
          </>
        </CenterSpinner>
      </div>
    )
  }

  return (
    <>
      <AnalysisModal open={analysisIsOpen} textCompletion={selectedCompletion} onClose={onAnalysisClose}/>
      <Grid style={generatorWrapperStyle}>
        <Grid.Column style={resultColStyle} width={resultWidth as SemanticWIDTHS}>
          {promptControl}
          <AnimatePresence mode='wait'>
            {props.isFetchingCompletions && getSubmissionSpinner()}
            {(!props.isFetchingCompletions && props.textCompletions.length === 0) && (
              <Disclaimer widthPercent={promptControlWidthPercent} />
            )}
            {(!props.isFetchingCompletions && props.textCompletions.length > 0 && props.prompt.text) && (
              <TextCompletionGrid
                promptText={props.prompt.text}
                textCompletions={props.textCompletions}
                heightPercent={textCompletionHeight}
                widthPercent={promptControlWidthPercent}
                addContent={addContentToTextArea}
                onAnalysis={onAnalysis}
              />
            )}
          </AnimatePresence>
        </Grid.Column>
        <Grid.Column style={modelInfoColStyle} width={modelInfoWidth as SemanticWIDTHS}>
          <AnimatePresence mode='wait'>
            {!props.modelInfo && (
              <div style={modelInfoLoaderWrapperStyle}>
                <CenterSpinner>Loading transformer...</CenterSpinner>
              </div>
            )}
            {(props.modelInfo && props.modelPlotBase64String) && (
              <ModelInfoDisplay
                modelInfo={props.modelInfo}
                modelPlotBase64String={props.modelPlotBase64String}
              />
            )}
          </AnimatePresence>   
        </Grid.Column>
      </Grid>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TextGenerator)