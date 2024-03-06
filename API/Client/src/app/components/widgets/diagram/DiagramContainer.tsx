import { DiagramEngine, CanvasWidget  } from "@projectstorm/react-diagrams";

interface DiagramContainerProps {
  engine: DiagramEngine
}

export default function DiagramContainer(props: DiagramContainerProps) {
  return <CanvasWidget className='diagram-container' engine={props.engine} />
}