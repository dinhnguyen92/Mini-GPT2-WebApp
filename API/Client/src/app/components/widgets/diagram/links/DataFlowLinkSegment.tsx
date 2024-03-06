import React from "react";
import { DataFlowLinkModel } from "./DataFlowLinkModel";

interface DashedFlowLinkProps {
  path: string
  model: DataFlowLinkModel
	rgbColor: string
}

const DATA_FLOW_CLASS = "data-flow"

export class DataFlowLinkSegment extends React.Component<{ model: DataFlowLinkModel, path: string, rgbColor: string }> {

  path: SVGPathElement | null;

  constructor(props: DashedFlowLinkProps) {
    super(props);
    this.path = null;
  }

  render() {
		return (
			<>
				<path
					fill="none"
          className={DATA_FLOW_CLASS}
					ref={(ref) => {
						this.path = ref;
					}}
					strokeWidth={3}
					stroke={this.props.rgbColor}
					d={this.props.path}
				/>
        <path
					fill="none"
					ref={(ref) => {
						this.path = ref;
					}}
					strokeWidth={20}
          strokeLinecap="round"
          strokeOpacity={0.1}
					stroke={this.props.rgbColor}
					d={this.props.path}
				/>
			</>
		);
	}
}