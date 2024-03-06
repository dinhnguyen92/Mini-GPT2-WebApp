export interface ModelConfig {
	batch_size: number
	max_len: number
	d_k: number
	d_model: number
	n_heads: number
	n_layers: number
	epochs: number
	dropout_rate: number
	lr: number
  lr_min: number
  T_0: number
  T_mult: number
}