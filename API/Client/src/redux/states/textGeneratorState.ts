import { ModelInfo } from "../../model/modelInfo";
import { EmptyPrompt, Prompt } from "../../model/prompt";
import { TextCompletion } from "../../model/textCompletion";

export interface TextGeneratorState {
    allVersions: string[]
    selectedVersion: string
    prompt: Prompt
    isFetchingCompletions: boolean
    textCompletions: TextCompletion[]
    modelInfo: ModelInfo | null
    modelPlotBase64String: string | null
}

export const InitialTextGeneratorState: TextGeneratorState = {
    allVersions: [],
    selectedVersion: '',
    prompt: EmptyPrompt,
    isFetchingCompletions: false,
    textCompletions: [],
    modelInfo: null,
    modelPlotBase64String: null
    
}