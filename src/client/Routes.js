import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Test from './components/Test';
import UsersList from './components/UsersList';

export default () => {
	return (
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/test-users" component={Test} />
			<Route path="/users" component={UsersList} />
		</div>
	)
};