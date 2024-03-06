import axios, { AxiosResponse } from 'axios';
import ApiPaths from './apiPathMapper';
import { Prompt } from '../../model/prompt';
import { TextCompletion } from '../../model/textCompletion';
import { ModelInfo } from '../../model/modelInfo';

axios.defaults.baseURL = ApiPaths.apiBaseUrl;

const getResponseBody = <T>(response: AxiosResponse<T|null>) => response.data;

const ApiRequests = {
	get: <T>(relativePath: string, params: URLSearchParams | null = null) => axios.get<T>(relativePath, { params }).then(getResponseBody),
	post: <T>(relativePath: string, payload: {}, params: URLSearchParams | null = null) => axios.post<T>(relativePath, payload, { params }).then(getResponseBody),
	put: <T>(relativePath: string, payload: {}, params: URLSearchParams | null = null) => axios.put<T>(relativePath, payload, { params }).then(getResponseBody),
	delete: <T>(relativePath: string, params: URLSearchParams | null = null) => axios.delete<T>(relativePath, { params }).then(getResponseBody)
}

const TextCompletions = {
	generate: (modelVersion: string, prompt: Prompt) => ApiRequests.post<TextCompletion[]>(
		ApiPaths.textCompletionPaths + '/' + modelVersion, prompt
	)
}

const Models = {
	getInfo: (modelVersion: string) => ApiRequests.get<ModelInfo>(
		ApiPaths.modelsPath + `/${modelVersion}/info`
	),
	getPlot: (modelVersion: string) => ApiRequests.get<string>(
		ApiPaths.modelsPath + `/${modelVersion}/plot`
	),
	getVersions: () => ApiRequests.get<string[]>(ApiPaths.modelsPath + '/versions')
}

const DataBridge = {
	ApiRequests,
	Models,
	TextCompletions
}

export default DataBridge