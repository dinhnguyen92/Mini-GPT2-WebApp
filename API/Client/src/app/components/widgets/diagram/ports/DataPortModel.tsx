import { AbstractModelFactory, CanvasEngine, CanvasEngineListener, CanvasModel, CanvasModelGenerics, DefaultPortModel, LinkModel, LinkModelGenerics } from "@projectstorm/react-diagrams";
import { DataFlowLinkModel } from "../links/DataFlowLinkModel";

export class DataPortModel extends DefaultPortModel {

  color?: string
  isLeft: boolean

  // When creating port, the first parameter in the base constructor is named "isIn"
  // This is misleading. If "isIn" is true, the port will be
  // placed on the left of the node and vice versa.
  // So just think of the first param as determining which
  // side of the node the port will be placed (true is left and false is right).
  constructor(isLeft: boolean, name?: string, label?: string, color?: string) {
    super(isLeft, name, label)
    this.color = color
    this.isLeft = isLeft
  }

  createLinkModel(factory?: AbstractModelFactory<LinkModel<LinkModelGenerics>,
    CanvasEngine<CanvasEngineListener, CanvasModel<CanvasModelGenerics>>> | undefined): DataFlowLinkModel {
    return new DataFlowLinkModel(this.color);
  }
}