import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import NotFound from '../components/widgets/errors/NotFound';
import TestErrors from '../components/widgets/errors/TestErrors';
import MiniGPT2 from '../layout/MiniGPT2';
import ArchitecturePage from '../components/pages/ArchitecturePage';
import TrainingCorpusPage from '../components/pages/TrainingCorpusPage';

export const FrontEndParams = {
	searchQuery: 'search'
}

export const FrontEndPaths = {
	homePath: '/',
	architecturePath: '/architecture',
	trainingCorpusPath: '/training-data',
	errorsPath: '/errors',
	notFoundPath: '/not-found',
}

export const routes: RouteObject[] = [
	{
		path: '',
		element: <MiniGPT2 />,
		children: [
			{ path: FrontEndPaths.homePath, element: <HomePage /> },
			{ path: FrontEndPaths.architecturePath, element: <ArchitecturePage /> },
			{ path: FrontEndPaths.trainingCorpusPath, element: <TrainingCorpusPage /> },
			{ path: FrontEndPaths.errorsPath, element: <TestErrors /> },
			{ path: FrontEndPaths.notFoundPath, element: <NotFound /> },
			{ path: '*', element: <Navigate replace to='/not-found' /> }
		]
	}
]

export const router = createBrowserRouter(routes);