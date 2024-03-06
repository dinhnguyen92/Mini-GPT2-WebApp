import { Header, HeaderContent, Icon, Statistic } from "semantic-ui-react";
import { ModelInfo } from "../../../../model/modelInfo";
import CommonStyles from "../../../style/commonStyles";
import AnimatedDiv from "../../../animation/AnimatedDiv";

interface Props {
  modelInfo: ModelInfo
  modelPlotBase64String: string
}

export default function ModelInfoDisplay(props: Props) {

  const headerWrapperHeight = 10
  const modelHeaderWrapperStyle = {
    width: '100%',
    height: headerWrapperHeight + '%',
    ...CommonStyles.centerContentStyle
  }

  const modelInfoHeader = (
    <div style={modelHeaderWrapperStyle}>
      <Header inverted size='medium'>
        <Icon name='settings'/>
        <HeaderContent>Transformer Configurations</HeaderContent>
      </Header>
    </div>
  )

  const modelStatsWrapperHeight = 25
  const modelStatsWrapperStyle = {
    width: '100%',
    height: modelStatsWrapperHeight + '%',
    ...CommonStyles.centerContentStyle
  }

  const modelStats = (
    <div style={modelStatsWrapperStyle}>
      <Statistic.Group horizontal color='blue' inverted size='mini'>
        <Statistic>
          <Statistic.Value>{props.modelInfo.config.d_k}</Statistic.Value>
          <Statistic.Label>Context Size</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{props.modelInfo.config.d_model}</Statistic.Value>
          <Statistic.Label>Emdedding Size</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{props.modelInfo.config.n_layers}</Statistic.Value>
          <Statistic.Label>Transformer Blocks</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{props.modelInfo.config.n_heads}</Statistic.Value>
          <Statistic.Label>Attention Heads / Block</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </div>
  )

  const paramStatsWrapperHeight = 12
  const paramStatsWrapperStyle = {
    width: '100%',
    height: paramStatsWrapperHeight + '%',
    ...CommonStyles.centerContentStyle
  }

  // Round number of parameters to millions with 3 significant figure
  const millions = props.modelInfo.num_params / 1000000
  const numParams = parseFloat(millions.toPrecision(3))

  const paramsStats = (
    <div style={paramStatsWrapperStyle}>
      <Statistic color='teal' inverted size='tiny'>
        <Statistic.Value>{`${numParams} Million`}</Statistic.Value>
        <Statistic.Label>Parameters</Statistic.Label>
      </Statistic>
    </div>
  )

  const plotWrapperHeight = 100 - headerWrapperHeight - modelStatsWrapperHeight - paramStatsWrapperHeight
  const plotWrapperStyle = {
    width: '100%',
    height: plotWrapperHeight + '%',
    ...CommonStyles.centerContentStyle
  }

  const plotStyle = {
    width: '90%'
  }
  const modelPlot = (
    <div style={plotWrapperStyle}>
      <img
        src={`data:image/png;base64,${props.modelPlotBase64String}`}
        style={plotStyle}
        alt='Model training/test losses plot'
      />
    </div>
  )

  const modelInfoWrapperStyle = {
    height: '100%',
    width: '100%',
    backgroundColor: '#1b1c1d'
  }

  return (
    <AnimatedDiv
      divKey='modelInfo'
      style={modelInfoWrapperStyle}
    >
      {modelInfoHeader}
      {modelStats}
      {paramsStats}
      {modelPlot}
    </AnimatedDiv>
  )
}