import { Breadcrumb, BreadcrumbDivider, BreadcrumbSection, Feed, FeedContent, FeedEvent, FeedExtra, FeedSummary, Grid, Header, Label, Message, Modal, Segment, SemanticCOLORS, SemanticWIDTHS, TransitionablePortal } from "semantic-ui-react"
import { TextCompletion, extractGeneratedTokens } from "../../../../model/textCompletion"
import CommonStyles from "../../../style/commonStyles"
import Colors from "../../../style/colors"
import { useState } from "react"

interface Props {
  open: boolean
  textCompletion: TextCompletion
  onClose: () => void
}

export default function AnalysisModal({ open, textCompletion, onClose }: Props) {

  const generatedTokens = extractGeneratedTokens(textCompletion)
  const [generatedTokenIndex, setGeneratedTokenIndex] = useState(0)
  const selectedToken = generatedTokens[generatedTokenIndex]
  
  const textCompletionTokenIndex = generatedTokenIndex + textCompletion.prompt_tokens.length
  // We need to subtract 1 since alt_token_groups is one element shorter than textCompletion.result_tokens
  // This is because the very first token has no alt group as it is also the first token in the prompt
  const alt_token_group_Index = textCompletionTokenIndex - 1
  const altTokens = textCompletion.alt_token_groups.length > 0 ? textCompletion.alt_token_groups[alt_token_group_Index] : []
  const altTokenProbs = textCompletion.alt_token_groups.length > 0 ? textCompletion.alt_token_prob_groups[alt_token_group_Index] : []

  const leftColContentWidth = 90

  const labelColors: SemanticCOLORS[] = ['teal', 'blue']

  const sectionMargin = 15
  const sectionStyle = {
    marginTop: sectionMargin + 'px',
    marginBottom: sectionMargin + 'px'
  }
  const breadcrumb = (
    <Breadcrumb style={{ width: '100%' }}>
      {generatedTokens.map((token, i) => {
        const selected = i === generatedTokenIndex
        return (
          <>
            <BreadcrumbSection style={sectionStyle}>
              <Label
                as='a'
                size={selected ? 'huge' : undefined}
                onClick={() => setGeneratedTokenIndex(i)}
                color={selected ? 'red' : labelColors[i % labelColors.length]}
              >
                {token}
              </Label>
            </BreadcrumbSection>
            {i < generatedTokens.length - 1 && (
              <BreadcrumbDivider
                icon='right arrow'
                style={{ color: 'white' }}
              />
            )}
          </>
        )
      })}
    </Breadcrumb>
  )

  const messageStyle = {
    color: Colors.textWhite,
    backgroundColor: '#2F2F2F',
    width: '100%',
    margin: '0'
  }
  const segmentStyle = {
    width: leftColContentWidth+ '%',
    padding: '14px 0 0 0',
    backgroundColor: '#2F2F2F',
  }
  const generatedTokensSegment = (
    <Segment style={segmentStyle} inverted>
      <Label color='violet' attached='top'>Raw generated tokens:</Label>
      <Message style={messageStyle}>{breadcrumb}</Message>
    </Segment>
  )

  const formattedTextCompletionSegment = (
    <Segment style={segmentStyle} inverted>
      <Label color='violet' attached='top'>Formatted output text:</Label>
      <Message
        style={messageStyle}
        content={generatedTokens.join('')}
      />
    </Segment>
  )

  const leftColHeaderStyle = {
    color: Colors.textWhite,
    margin: '0'
  }
  const leftColHeader = (
    <Header as='h3' style={leftColHeaderStyle}>
      {`Top ${altTokens.length} most probable tokens for the selected position:`}
    </Header>
  )

  const maxPrefixTokens = 7
  const startIndex = Math.max(textCompletionTokenIndex - maxPrefixTokens, 0)
  const prefixTokens = textCompletion.result_tokens.slice(startIndex, textCompletionTokenIndex)

  const feedEventMargin = 20
  const feedEventStyle = {
    marginTop: feedEventMargin + 'px',
    marginBottom: feedEventMargin + 'px',
  }
  const feedExtraStyle = {
    color: '#7d7e80',
    marginTop: '10px'
  }
  const altTokenFeed = (
    <Feed>
      {altTokens.map((altToken, i) => (
        <FeedEvent style={feedEventStyle}>
          <FeedContent>
            <FeedSummary style={{ color: Colors.textWhite }}>
              {'...' + prefixTokens.join('') + ' '}
              <Label color='red'>{altToken}</Label>
            </FeedSummary>
            <FeedExtra style={feedExtraStyle}>
              {'Probability: ' + (altTokenProbs[i] * 100).toPrecision(4) + '%'}
              {altToken === selectedToken && (
                <span style={{ paddingLeft: '10px' }}>
                  <Label color='green' size='mini' tag>SELECTED</Label>
                </span>           
              )}
            </FeedExtra>
            
          </FeedContent>
        </FeedEvent>
      ))}
    </Feed>
  )

  const gridStyle = {
    margin: '0',
    height: '70vh',
    backgroundColor: '#1b1c1d',
    color: Colors.textWhite
  }
  const gridColStyle = {
    height: '100%',
    flexDirection: 'column',
    ...CommonStyles.centerContentStyle
  }

  // Semantic UI Grid can only have at most 16 columns so the max width is 16
  const maxGridWidth = 16
  const leftColWidth = 10
  const rightColWidth = maxGridWidth - leftColWidth

  return (
    <TransitionablePortal
      open={open}      
      transition={{
        animation: 'fade',
        duration: 700
      }}
    >
      <Modal open onClose={onClose} size='fullscreen'>
        <Grid inverted divided style={gridStyle} columns={2}>
          <Grid.Column width={leftColWidth as SemanticWIDTHS} style={gridColStyle}>
            {generatedTokensSegment}
            {formattedTextCompletionSegment}
          </Grid.Column>
          <Grid.Column width={rightColWidth as SemanticWIDTHS} style={gridColStyle}>
            {leftColHeader}
            {altTokenFeed}
          </Grid.Column>
        </Grid>
      </Modal>
    </TransitionablePortal>
  )
}