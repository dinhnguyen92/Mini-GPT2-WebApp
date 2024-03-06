export interface TextCompletion {
	prompt_tokens: string[]
	result_tokens: string[]
	alt_token_groups: string[][]
	alt_token_prob_groups: number[][]
}

export const EmptyCompletion: TextCompletion = {
	prompt_tokens: [],
	result_tokens: [],
	alt_token_groups: [],
	alt_token_prob_groups: []
}

export const extractGeneratedTokens = (textCompletion: TextCompletion): string[] => {
	// Remove the prompt tokens from the result tokens
	// to obtain only tokens that were generated
	return textCompletion.result_tokens.slice(textCompletion.prompt_tokens.length)
}