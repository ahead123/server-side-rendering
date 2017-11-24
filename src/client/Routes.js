import React from 'react';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import UsersListPage from './pages/UsersListPage';

export default [
	{
		...HomePage,
		path: '/',
		exact: true
	},
	{
		...UsersListPage,
		path: '/users'
	},
	{
		...TestPage,
		path: '/test'
	}
];