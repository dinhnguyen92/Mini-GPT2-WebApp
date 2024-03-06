import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.min.css';
import './app/style/styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import { router } from './app/router/Routes';

const root = ReactDOM.createRoot(
  	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={reduxStore}>
			<RouterProvider router={router} /> 
		</Provider>
	</React.StrictMode>
);
