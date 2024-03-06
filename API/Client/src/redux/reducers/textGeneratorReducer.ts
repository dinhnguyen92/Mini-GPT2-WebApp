import TextGeneratorActions, { SetAllVersionsAction, SetCompletionsBeingFetchedAction, SetModelInfoAction, SetModelPlotAction, SetPromptAction, SetSelectedVersionAction, SetTextCompletionsAction, TextGeneratorAction } from "../actions/textGeneratorActions";
import { InitialTextGeneratorState, TextGeneratorState } from "../states/textGeneratorState";

export default function reduce(textGeneratorState: TextGeneratorState = InitialTextGeneratorState, action: TextGeneratorAction): TextGeneratorState {

    switch (action.type) {

        case TextGeneratorActions.SET_ALL_VERSIONS:
            return { ...textGeneratorState, allVersions: (action as SetAllVersionsAction).allVersions}

        case TextGeneratorActions.SET_SELECTED_VERSION:
            return { ...textGeneratorState, selectedVersion: (action as SetSelectedVersionAction).selectedVersion}

        case TextGeneratorActions.SET_PROMPT:
            return { ...textGeneratorState, prompt: (action as SetPromptAction).prompt}

        case TextGeneratorActions.SET_COMPLETIONS_BEING_FETCHED:
            return { ...textGeneratorState, isFetchingCompletions: (action as SetCompletionsBeingFetchedAction).isFetchingCompletions}

        case TextGeneratorActions.SET_TEXT_COMPLETIONS:
            return { ...textGeneratorState, textCompletions: (action as SetTextCompletionsAction).textCompletions}

        case TextGeneratorActions.SET_MODEL_INFO:
            return { ...textGeneratorState, modelInfo: (action as SetModelInfoAction).modelInfo}

        case TextGeneratorActions.SET_MODEL_PLOT:
            return { ...textGeneratorState, modelPlotBase64String: (action as SetModelPlotAction).modelPlotBase64String}

        default:
            return textGeneratorState
    }
}