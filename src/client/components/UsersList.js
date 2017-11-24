import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount() {
		this.props.fetchUsers();
	}

	renderUsers = () => {
		return this.props.users.map(user => {
			return <li key={user.id}>{user.name}</li>
		})
	}

	render() {
		return (
			<div>
				<p>Here's a big list of users:</p>
				<ul>{this.renderUsers()}</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);