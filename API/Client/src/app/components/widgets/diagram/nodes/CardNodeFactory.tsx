import { AbstractReactFactory, DiagramEngine } from "@projectstorm/react-diagrams";
import { CardNodeModel } from "./CardNodeModel";
import { CardNodeWidget } from "./CardNodeWidget";

export class CardNodeFactory extends AbstractReactFactory<CardNodeModel, DiagramEngine> {

  static NAME = 'card'

  constructor() {
    super(CardNodeFactory.NAME)
  }

  generateReactWidget(event: any): JSX.Element {
		return <CardNodeWidget engine={this.engine} model={event.model} />;
	}

	generateModel(event: any): CardNodeModel {
		return new CardNodeModel();
	}
}