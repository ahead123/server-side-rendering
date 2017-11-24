import React, { Component } from 'react';
import axios from 'axios';


class TestPage extends Component {

	constructor(props){
		super(props);
		this.state = {
			users: []
		};
		this.showUsers = this.showUsers.bind(this);
		this.getUsers = this.getUsers.bind(this);
	}

	componentWillMount() {
		
	}

	showUsers() {
		const { users } = this.state;
		let peeps = [];
		users.map((user, index) => peeps.push(<li key={user.id}>{user.name}</li>) );
		return <ul>{ peeps }</ul>;
	}

	getUsers() {
		axios.get('https://react-ssr-api.herokuapp.com/users')
			.then(users => {
				this.setState({ users: users.data });
				console.log(this.state);
			})
			.catch(error => console.log(error))
	}
	
	render() {
		console.log(this.state);
		if(this.state.users.length){
			return(
				<div>
					<h1>Users:</h1>
					{this.showUsers()}
					<button 
						onClick={() => this.setState({ users: []})}
					>
						Hide Users
					</button>
				</div>
			)
		}else {
			return(
				<div>
					<h1>Click to get users</h1>
					<button 
						onClick={this.getUsers}
					>
						Get users
					</button>
				</div>
			)
		}
		
	}
}

export default {
	component: TestPage
}
