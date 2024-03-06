import { ChangeEvent, KeyboardEvent } from "react"

const getKeyboardEventKey = (keyboardEvent: KeyboardEvent<HTMLInputElement>) => keyboardEvent.key.toLowerCase()
const getInputChangeEventString = (changeEvent: ChangeEvent<HTMLInputElement>) => (changeEvent.currentTarget.value)
const getCheckboxChangeEventBoolean = (changeEvent: ChangeEvent<HTMLInputElement>) => changeEvent.currentTarget.checked

const ENTER_EVENT = "enter"
const ARROW_UP_EVENT = "arrowup"
const ARROW_DOWN_EVENT = "arrowdown"


const EventsUtil = {
  ENTER_EVENT,
  ARROW_UP_EVENT,
  ARROW_DOWN_EVENT,
  getKeyboardEventKey,
  getInputChangeEventString,
  getCheckboxChangeEventBoolean
}

export default EventsUtil