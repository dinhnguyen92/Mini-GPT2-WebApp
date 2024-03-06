import { Action } from "redux";
import { Prompt } from "../../model/prompt";
import { TextCompletion } from "../../model/textCompletion";
import { AsyncThunkAction } from "./commonActions";
import DataBridge from "../../app/api/dataBridge";
import { ModelInfo } from "../../model/modelInfo";

const SET_ALL_VERSIONS = 'Set all versions'
export interface SetAllVersionsAction extends Action {
    type: string
    allVersions: string[]
}
const actionToSetAllVersions = (allVersions: string[]): SetAllVersionsAction => ({
    type: SET_ALL_VERSIONS,
    allVersions
})

const SET_SELECTED_VERSION = 'Set selected version'
export interface SetSelectedVersionAction extends Action {
    type: string
    selectedVersion: string
}
const actionToSetSelectedVersion = (selectedVersion: string): SetSelectedVersionAction => ({
    type: SET_SELECTED_VERSION,
    selectedVersion
})

const SET_PROMPT = 'Set prompt'
export interface SetPromptAction extends Action {
    type: string
    prompt: Prompt
}
const actionToSetPrompt = (prompt: Prompt): SetPromptAction => ({
    type: SET_PROMPT,
    prompt
})

const SET_COMPLETIONS_BEING_FETCHED = 'Set completions being fetched'
export interface SetCompletionsBeingFetchedAction extends Action {
    type: string
    isFetchingCompletions: boolean
}
const actionToSetCompletionsBeingFetched = (isFetchingCompletions: boolean): SetCompletionsBeingFetchedAction => ({
    type: SET_COMPLETIONS_BEING_FETCHED,
    isFetchingCompletions
})

const SET_TEXT_COMPLETIONS = 'Set text completions'
export interface SetTextCompletionsAction extends Action {
    type: string
    textCompletions: TextCompletion[]
}
const actionToSetTextCompletions = (textCompletions: TextCompletion[]): SetTextCompletionsAction => ({
    type: SET_TEXT_COMPLETIONS,
    textCompletions
})

const SET_MODEL_INFO = 'Set model info'
export interface SetModelInfoAction extends Action {
    type: string
    modelInfo: ModelInfo | null
}
const actionToSetModelInfo = (modelInfo: ModelInfo | null): SetModelInfoAction => ({
    type: SET_MODEL_INFO,
    modelInfo
})

const SET_MODEL_PLOT = 'Set model plot'
export interface SetModelPlotAction extends Action {
    type: string
    modelPlotBase64String: string | null
}
const actionToSetModelPlot = (modelPlotBase64String: string | null): SetModelPlotAction => ({
    type: SET_MODEL_PLOT,
    modelPlotBase64String
})

export type TextGeneratorAction = SetAllVersionsAction | SetSelectedVersionAction
    | SetPromptAction | SetCompletionsBeingFetchedAction | SetTextCompletionsAction
    | SetModelInfoAction | SetModelPlotAction

const asyncActionToFetchModelInfo = (modelVersion: string): AsyncThunkAction => async dispatch => {
    try {
        var modelInfo = await DataBridge.Models.getInfo(modelVersion)

        // Set the result
        dispatch(actionToSetModelInfo(modelInfo))
    } catch (error) {
        console.log(error)
    }
}

const asyncActionToFetchModelPlot = (modelVersion: string): AsyncThunkAction => async dispatch => {
    try {
        var plotBase64String = await DataBridge.Models.getPlot(modelVersion)
        if (plotBase64String) {
            dispatch(actionToSetModelPlot(plotBase64String))
        }
    } catch (error) {
        console.log(error)
    }
}

const asyncActionToFetchAllVersions = (): AsyncThunkAction => async dispatch => {
    try {
        var versions = await DataBridge.Models.getVersions()
        if (versions) {
            dispatch(actionToSetAllVersions(versions))
        }
        else throw new Error('No model version was fetched')
    } catch (error) {
        console.log(error)
    }
}

const asyncActionToFetchTextCompletions = (modelVersion: string, prompt: Prompt): AsyncThunkAction => async dispatch => {
    try {
        // Dispatch action to mark that the completions are being fetched
        dispatch(actionToSetCompletionsBeingFetched(true))

        var completions = await DataBridge.TextCompletions.generate(modelVersion, prompt)
        if (completions) {
            dispatch(actionToSetTextCompletions(completions))
        }
    } catch (error) {
        console.log(error)
    } finally {
        // Regardless of whether the fetch is successful,
        // we still dispatch action to mark that the fetch operation is finished
        dispatch(actionToSetCompletionsBeingFetched(false))
    }
}

const TextGeneratorActions = {
    SET_ALL_VERSIONS,
    actionToSetAllVersions,
    SET_SELECTED_VERSION,
    actionToSetSelectedVersion,
    SET_PROMPT,
    actionToSetPrompt,
    SET_COMPLETIONS_BEING_FETCHED,
    actionToSetCompletionsBeingFetched,
    SET_TEXT_COMPLETIONS,
    actionToSetTextCompletions,
    SET_MODEL_INFO,
    actionToSetModelInfo,
    SET_MODEL_PLOT,
    actionToSetModelPlot,
    asyncActionToFetchModelInfo,
    asyncActionToFetchModelPlot,
    asyncActionToFetchAllVersions,
    asyncActionToFetchTextCompletions
}

export default TextGeneratorActions
