import createEngine from '@projectstorm/react-diagrams';
import { DataFlowLinkFactory } from './links/DataFlowLinkFactory';
import { CardNodeFactory } from './nodes/CardNodeFactory';

export default function createDefaultEngine() {

  const defaultEngine = createEngine();

  // Register all customized link and node factories
  defaultEngine.getLinkFactories().registerFactory(new DataFlowLinkFactory())
  defaultEngine.getNodeFactories().registerFactory(new CardNodeFactory())

  return defaultEngine
}