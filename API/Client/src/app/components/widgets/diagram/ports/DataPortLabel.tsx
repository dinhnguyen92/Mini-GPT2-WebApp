import { DiagramEngine, PortWidget } from "@projectstorm/react-diagrams";
import { DataPortModel } from "./DataPortModel";
import { Icon } from "semantic-ui-react";

interface DataPortLabel {
  engine: DiagramEngine
  port: DataPortModel
  key: string
}

export default function DataPortabel(props: DataPortLabel) {

  const portName = props.port.getName()
  const rawLabel = props.port.getOptions().label ?? ''

  const isRelayPort = rawLabel.startsWith('Relay ')
  const isOutPort = portName.endsWith('out')
  const isLeftPort = props.port.isLeft

  // Use left caret icon when:
  // 1. Port is out and on the left
  // 2. Port is in and on the right
  // Otherwise, use right caret icon
  const useLeftCaret = ((isOutPort && isLeftPort) || (!isOutPort && !isLeftPort))
  const portIcon = useLeftCaret ? 'caret square left outline' : 'caret square right outline'

  const iconStyle = {
    margin: '0 3px 0 3px'
  }

  const port = (
    <PortWidget engine={props.engine} port={props.port}>
      <Icon style={iconStyle} size='large' name={portIcon} color='yellow'/>
    </PortWidget>
  )

  const labelStyle = {
    padding: isRelayPort ? '0 2px' : '0 5px',
    flexGrow: '1'
  }

  const getRelayLabel = (isLeftPort: boolean, rawLabel: string) => {
    return isLeftPort ? "Relays" : rawLabel.replace("Relay ", "")
  }

  const labelText = isRelayPort ? getRelayLabel(isLeftPort, rawLabel) : rawLabel

  const label = <div style={labelStyle}>{labelText}</div>

  const leftAlign = 'left' as 'left'
  const rightAlign = 'right' as 'right'

  const portLabelWrapperStyle = {
    display: 'flex',
		marginTop: '10px',
		alignItems: 'center',
    textAlign: isRelayPort ? (isLeftPort ? rightAlign  : leftAlign) : (isLeftPort ? leftAlign : rightAlign)
  }

  return (
    <div style={portLabelWrapperStyle}>
      {isLeftPort ? port : label}
      {isLeftPort ? label : port}
    </div>
  )
}