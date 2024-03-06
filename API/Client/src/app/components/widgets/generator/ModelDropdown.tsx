import { SyntheticEvent } from "react"
import { Dropdown, DropdownItem, DropdownItemProps, DropdownMenu } from "semantic-ui-react"
import Colors from "../../../style/colors"

interface Props {
  versions: string[]
  value: string
  handleVersionChange: (version: string) => void 
}

export default function ModelDropdown(props: Props) {

  const options = props.versions.map(version => {
    const versionNumber = version.substring(1)
    return { key: parseInt(versionNumber), text: 'Tiny GPT-2 ' + version.toUpperCase(), value: version }
  })

  const handleOnChange = (event: SyntheticEvent<HTMLElement, Event>, data: DropdownItemProps) => {
    const version = data.value as string
    if (version !== props.value) {
      props.handleVersionChange(version)
    }
  }

  const dropdownText = options.find(option => option.value === props.value)?.text

  const dropdownStyle = {
    color: Colors.textWhite,
    backgroundColor: "#a333c8"
  }

  return (
    <Dropdown
      button
      labeled
      floating
      className='icon'
      options={options}
      text={dropdownText}
      style={dropdownStyle}
    >
      <DropdownMenu style={dropdownStyle}>
        {options.map(option => (
          <DropdownItem
            key={option.key}
            text={option.text}
            value={option.value}
            onClick={handleOnChange}
            className="modelDropdownItem"
            style={{ color: Colors.textWhite }}
            selected={option.value === props.value}
          />
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}