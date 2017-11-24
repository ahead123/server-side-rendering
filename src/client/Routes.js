import React from 'react';
import Home from './components/Home';
import Test from './components/Test';
import UsersList from './components/UsersList';

export default [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		path: '/users',
		component: UsersList
	},
	{
		path: '/test',
		component: Test
	}
];