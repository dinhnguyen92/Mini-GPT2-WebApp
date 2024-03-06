import { DefaultLinkFactory } from "@projectstorm/react-diagrams";
import { DataFlowLinkModel } from "./DataFlowLinkModel";
import { DataFlowLinkSegment } from "./DataFlowLinkSegment";

export class DataFlowLinkFactory extends DefaultLinkFactory {
  
  static NAME = 'dashed-flow'

  constructor() {
    super(DataFlowLinkFactory.NAME);
  }

  generateModel(): DataFlowLinkModel {
    return new DataFlowLinkModel();
  }

  generateLinkSegment(model: DataFlowLinkModel, selected: boolean, path: string) {
    return (
      <g>
        <DataFlowLinkSegment model={model} path={path} rgbColor={model.rgbColor}/>
      </g>
    )
  }
}