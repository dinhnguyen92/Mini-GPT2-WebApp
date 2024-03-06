// More details on how to obtain the root URL here:
// https://stackoverflow.com/questions/11401897/get-the-current-domain-name-with-javascript-not-the-path-etc
const rootUrl = window.location.origin
const apiBaseUrl = rootUrl + '/api'

const ApiPaths = {
	rootUrl,
	apiBaseUrl,
	modelsPath: '/models',
	textCompletionPaths: '/textcompletions',
}

export default ApiPaths