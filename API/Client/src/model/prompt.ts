export interface Prompt {
  text: string | undefined
	max_resp_len: number
	sampling_temp: number
}

export const EmptyPrompt: Prompt = {
	text: undefined,
	max_resp_len: 45,
	sampling_temp: 0.575
}