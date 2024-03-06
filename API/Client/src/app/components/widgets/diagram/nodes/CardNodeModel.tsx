import { DefaultNodeModelGenerics, NodeModel } from "@projectstorm/react-diagrams";
import { DataPortModel } from "../ports/DataPortModel";
import { CardNodeFactory } from "./CardNodeFactory";

interface CardNodeModelOptions {
  title?: string
  image?: string
  role?: string
  tech?: string
  sourceLink?: string
}

export class CardNodeModel extends NodeModel<DefaultNodeModelGenerics> {

  protected leftPorts: DataPortModel[];
  protected rightPorts: DataPortModel[];
  
  title?: string
  image?: string
  role?: string
  tech?: string
  sourceLink?: string

  constructor(options: CardNodeModelOptions = {}) {
    super({ type: CardNodeFactory.NAME })
    this.leftPorts = []
    this.rightPorts = []
    this.title = options.title
    this.image = options.image
    this.role = options.role
    this.tech = options.tech
    this.sourceLink = options.sourceLink
  }

  addPort(port: DataPortModel): DataPortModel {
    super.addPort(port)
    if (port.getOptions().in) {
      if (this.leftPorts.indexOf(port) === -1) {
        this.leftPorts.push(port)
      }
    } else if (this.rightPorts.indexOf(port) === -1) {
      this.rightPorts.push(port)
    }
    return port;
  }

  getLeftPorts(): DataPortModel[] {
    return this.leftPorts
  }

  getRightPorts(): DataPortModel[] {
    return this.rightPorts
  }
}