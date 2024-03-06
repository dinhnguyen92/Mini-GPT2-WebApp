import { ModelConfig } from "./modelConfig"

export interface ModelInfo {
	version: string
	config: ModelConfig
	train_losses: number[]
	num_params: number
}