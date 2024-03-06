import AnimatedDiv from './AnimatedDiv';

interface Props {
  pageKey: string,
  children?: React.ReactNode
}

export default function AnimatedPage(props: Props) {

  const pageStyle = {
    height: '100vh',
    width: '100%'
  }

  return (
    <AnimatedDiv
      divKey={props.pageKey}
      style={pageStyle}
    >
      {props.children}
    </AnimatedDiv>
  )
}