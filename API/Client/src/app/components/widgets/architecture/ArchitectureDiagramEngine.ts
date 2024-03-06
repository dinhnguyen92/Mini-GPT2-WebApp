import { DiagramModel } from '@projectstorm/react-diagrams';
import { DataPortModel } from '../diagram/ports/DataPortModel';
import { DataFlowLinkModel } from '../diagram/links/DataFlowLinkModel';
import { CardNodeModel } from '../diagram/nodes/CardNodeModel';
import createDefaultEngine from '../diagram/DefaultDiagramEngine';

export default function generateArchitectureDiagramEngine(canvasHeight: number, canvasWidth: number) {

  const engine = createDefaultEngine()
  const diagram = new DiagramModel()

  const yMargin = canvasHeight/ 40
  const rowGap = yMargin / 2
  const rowHeight = (canvasHeight - yMargin * 2 - rowGap) / 2

  const row1YOffset = yMargin
  const row2YOffset = row1YOffset + rowHeight

  const xMargin = canvasWidth / 20
  const colGap = xMargin * 2
  const colWidth = (canvasWidth - xMargin * 2 - colGap * 2) / 3
  
  const col1XOffset = xMargin
  const col2XOffset = xMargin + colWidth + colGap
  const col3XOffset = col2XOffset + colWidth + colGap

  const colabNode = new CardNodeModel({
    title: 'Google Colab Notebook',
    image: 'google-colab.png',
    tech: 'PyTorch, Hugging Face, NumPy',
    role: 'Trains transformers from scratch following GPT-2 architecture using AdamW optimizer and cosine annealing with warm restarts.',
    sourceLink: 'https://colab.research.google.com/drive/170wAM19ru9AZuOFzaK8VQp5HauPoldcY?usp=sharing'
  })
  colabNode.setPosition(col1XOffset, row1YOffset)

  const azureStorageNode = new CardNodeModel({
    title: 'Azure Blob Storage',
    image: 'azure-blob-storage.png',
    tech: 'Azure VPN and Firewalls',
    role: 'Stores hyperparameters, training data, training checkpoints (for resuming interrupted training sessions), and trained transformers.'
  })
  azureStorageNode.setPosition(col2XOffset, row1YOffset)

  const trainingDataOutPort = azureStorageNode.addPort(new DataPortModel(true, 'training-data-out', 'Training data & hyperparameters'))
  const trainingDataIntPort = colabNode.addPort(new DataPortModel(false, 'training-data-in', 'Initializes and trains transformers'))
  const trainingDataLink = trainingDataOutPort.link(trainingDataIntPort)

  const checkpointOutPort = colabNode.addPort(new DataPortModel(false, 'checkpoint-out', 'Saves training checkpoints', DataFlowLinkModel.BLUE))
  const checkpointInPort = azureStorageNode.addPort(new DataPortModel(true, 'checkpoint-in', 'Stores training checkpoints', DataFlowLinkModel.BLUE))
  const checkpointLink = checkpointOutPort.link(checkpointInPort)

  const trainedModelOutPort = colabNode.addPort(new DataPortModel(false, 'trained-model-out', 'Saves trained transformers', DataFlowLinkModel.BLUE))
  const savedModelInPort = azureStorageNode.addPort(new DataPortModel(true, 'stored-model-in', 'Stores trained transformers', DataFlowLinkModel.BLUE))
  const trainedModelLink = trainedModelOutPort.link(savedModelInPort)

  diagram.addAll(colabNode, azureStorageNode, trainingDataLink, checkpointLink, trainedModelLink)

  const fastApiNode = new CardNodeModel({
    title: 'Containerized FastAPI App in Azure',
    image: 'fast-api.svg',
    tech: 'Docker, FastAPI, PyTorch, Hugging Face, Azure App Service',
    role: "Hosts trained transformers and apply sampling function on transformers' output logits to generate text.",
    sourceLink: 'https://github.com/dinhnguyen92/Mini-GPT2-API'
  })
  fastApiNode.setPosition(col1XOffset, row2YOffset)

  const deployingModelOutPort = azureStorageNode.addPort(new DataPortModel(true, 'deploying-model-out', 'Trained transformers', DataFlowLinkModel.BLUE))
  const deployingModelInPort = fastApiNode.addPort(new DataPortModel(false, 'deploying-model-in', 'Deploys transformers in app', DataFlowLinkModel.BLUE))
  const deployingModelLink = deployingModelOutPort.link(deployingModelInPort)

  diagram.addAll(fastApiNode, deployingModelLink)

  const dotNetWebApiNode = new CardNodeModel({
    title: 'ASP.NET Web API in Azure',
    image: 'asp-net.png',
    tech: 'ASP.NET, C# 8.0, Azure App Service',
    role: "Public-facing API to expose transformer's capabilities using CQRS and Mediator design patterns.",
    sourceLink: 'https://github.com/dinhnguyen92/Mini-GPT2-WebApp'
  })
  dotNetWebApiNode.setPosition(col2XOffset, row2YOffset)

  const promptOutPort = dotNetWebApiNode.addPort(new DataPortModel(true, 'prompt-out', "Relay user's prompt"))
  const promptInPort = fastApiNode.addPort(new DataPortModel(false, 'prompt-in', 'Feeds prompt into transformers'))
  const promptLink = promptOutPort.link(promptInPort)

  const infereceOutPort = fastApiNode.addPort(new DataPortModel(false, 'inference-out', 'Generates text from transformers', DataFlowLinkModel.BLUE))
  const inferenceInPort = dotNetWebApiNode.addPort(new DataPortModel(true, 'inference-in', 'Relay generated text', DataFlowLinkModel.BLUE))
  const inferenceLink = infereceOutPort.link(inferenceInPort)

  diagram.addAll(dotNetWebApiNode, inferenceLink, promptLink)

  const reactClientNode = new CardNodeModel({
    title: "React Single-page Application",
    image: 'react.png',
    tech: 'React, Redux, Typescript, npm',
    role: 'Provides dynamic GUI in web browser for end user to interact with transformers.',
    sourceLink: 'https://github.com/dinhnguyen92/Mini-GPT2-WebApp/tree/main/API/Client'
  })
  reactClientNode.setPosition(col3XOffset, canvasHeight / 3)

  const userInputOutPort = reactClientNode.addPort(new DataPortModel(true, 'input-out', "Submits user's prompt"))
  const userInputInPort = dotNetWebApiNode.addPort(new DataPortModel(false, 'input-in', "Relay user's prompt"))
  const userInputLink = userInputOutPort.link(userInputInPort)

  const finalTextOutPort = dotNetWebApiNode.addPort(new DataPortModel(false, 'final-text-out', 'Relay generated text', DataFlowLinkModel.BLUE))
  const finalTextInPort = reactClientNode.addPort(new DataPortModel(true, 'final-text-in', "Displays generated text", DataFlowLinkModel.BLUE))
  const finalTextLink = finalTextOutPort.link(finalTextInPort)

  diagram.addAll(reactClientNode, userInputLink, finalTextLink)

  // Lock the diagram to prevent users from dragging elements
  diagram.setLocked(true)
  engine.setModel(diagram)
  return engine
}