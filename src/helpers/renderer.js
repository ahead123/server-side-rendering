import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';

export default (req, store) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				<Routes />
			</StaticRouter>
		</Provider>
	);

	return `
		<html>
			<head>
				<title>Server Side Rendering</title>
			</head>
			<body>
				<div id="view">${content}</div>
				<script src="bundle.js"></script>
			</body>
		</html>
	`
}