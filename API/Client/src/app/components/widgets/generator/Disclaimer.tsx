import { Message, MessageHeader } from "semantic-ui-react"
import AnimatedDiv from "../../../animation/AnimatedDiv"
import Colors from "../../../style/colors"

interface Props {
  widthPercent: number
}

export default function Disclaimer(props: Props) {

  const messageWrapperStyle = {
    width: '100%',
    paddingTop: '30px',
    display: 'flex',
    justifyContent: 'center'
  }

  const messageStyle = {
    width: props.widthPercent + '%',
    color: Colors.textWhite,
    backgroundColor: '#092d75',
  }

  const headerStyle = {
    color: Colors.textWhite,
  }

  return (
    <AnimatedDiv
      divKey='disclaimer'
      style={messageWrapperStyle}
    >
      <Message style={messageStyle} color='blue'>
        <MessageHeader style={headerStyle}>Thank you for using my Fiction Writing Generator.</MessageHeader>
        <p></p>
        <p>{`
        The purpose of this tool is to assist your creative writing endeavors 
        by generating texts that mimick great authors such as Mark Twain, Charles Dicken, and Leo Tolstoy. 
        It is powered by a transfomer neural network that I trained from scratch following the architecture of GPT-2, 
        albeit at a much smaller scale with significantly fewer parameters and a much smaller training data set.
        `}
        </p>
        <p>{`
        Given the limited resources available to me 
        (only 16 GB of GPU RAM per Google Colab notebook and a maximum of 3 notebooks running concurrently), 
        I have done my best to improve the generator by iterating through and refining multiple versions 
        of the underlying transformer (the largest of which took 2 weeks to train) 
        while working a full-time job and looking after a very demanding cat. 
        `}
        </p>
        <p>{`
        Considering the generator's shortcomings, please take whatever it writes 
        with a generous sense of humour and a light-hearted imagination. Should it offends 
        your exquisite taste for sensible prose, which it inevitably will, remember what 
        American author Nora Roberts said about writing:
        `}
        </p>
        <p></p>
        <MessageHeader style={headerStyle}>"You can fix anything but a blank page."</MessageHeader>
      </Message>
    </AnimatedDiv>
  )
}