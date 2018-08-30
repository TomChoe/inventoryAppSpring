import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<p> Header is here</p>
			<Link to="/"><button>HOME</button></Link>
		</nav>
	)
}

export default Header;