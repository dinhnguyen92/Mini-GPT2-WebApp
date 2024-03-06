import { DefaultLinkModel } from "@projectstorm/react-diagrams";
import { DataFlowLinkFactory } from "./DataFlowLinkFactory";

export class DataFlowLinkModel extends DefaultLinkModel {

  static TEAL = 'rgba(0,181,172)'
  static BLUE = 'rgba(33,133,208)'

  rgbColor: string

  constructor(rgbColor?: string) {
    super({ type: DataFlowLinkFactory.NAME })
    this.rgbColor = rgbColor ?? DataFlowLinkModel.TEAL
  }
}