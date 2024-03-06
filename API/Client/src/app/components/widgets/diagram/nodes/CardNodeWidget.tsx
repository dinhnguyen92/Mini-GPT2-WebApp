import { DiagramEngine } from "@projectstorm/react-diagrams";
import { CardNodeModel } from "./CardNodeModel";
import React from "react";
import { DataPortModel } from "../ports/DataPortModel";
import { Button, Card, CardContent, CardHeader, CardMeta, Icon, Image } from "semantic-ui-react";
import DataPortContainer from "../ports/DataPortContainer";
import Colors from "../../../../style/colors";
import DataPortabel from "../ports/DataPortLabel";

export interface CardNodeProps {
  model: CardNodeModel
  engine: DiagramEngine
}

const cardStyle = {
  background: '#2F2F2F',
  color: Colors.textWhite,
  boxShadow: 'none'
}

const textColorStyle = {
  color: Colors.textWhite
}

const metaTextColorStyle = {
  color: '#7d7e80'
}

const cardExtraStyle = {
  display: 'flex',
  flexDirection: 'row'
}

const sourceButtonStyle = {
  marginLeft: 'auto'
}

const portWrapperStyle = {
  display: 'flex',
  paddingBottom: '10px'
}

export class CardNodeWidget extends React.Component<CardNodeProps> {

  generatePort = (port: DataPortModel) => {
    return <DataPortabel engine={this.props.engine} port={port} key={port.getID()} />
  }

  render() {
    return (
      <Card style={cardStyle}>
        <CardContent>
          {this.props.model.image && (
            <Image
              floated='right'
              size='mini'
              src={require(`../../../../images/${this.props.model.image}`)}
            />
          )}
          <CardHeader style={textColorStyle}>{this.props.model.title}</CardHeader>
          {this.props.model.tech && <CardMeta style={metaTextColorStyle}>Tech: {this.props.model.tech}</CardMeta>}
        </CardContent>
        <CardContent style={textColorStyle}>{this.props.model.role}</CardContent>
        <div style={portWrapperStyle}>
          <DataPortContainer>{this.props.model.getLeftPorts().map(port => this.generatePort(port))}</DataPortContainer>
          <DataPortContainer>{this.props.model.getRightPorts().map(port => this.generatePort(port))}</DataPortContainer>
        </div>
        {this.props.model.sourceLink && (
          <CardContent extra style={cardExtraStyle}>
            <Button
              icon
              compact
              style={sourceButtonStyle}
              color='teal'
              labelPosition='right'
              as='a'
              href={this.props.model.sourceLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              Source code
              <Icon name='external'/>
            </Button>
          </CardContent>
        )}
      </Card>
    )
  }
}