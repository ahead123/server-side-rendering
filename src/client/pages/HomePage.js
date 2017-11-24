import React from 'react';

const HomePage = () => {
	return(
		<div>
			<div>I'm the only Home component</div>
			<button 
				onClick={() => console.log('Hi there')}
			>
				Press Me!
			</button>
		</div>
	)
}

export default {
	component: HomePage
}