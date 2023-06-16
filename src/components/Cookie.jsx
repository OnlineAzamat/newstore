import React from 'react';
import { Link } from 'react-router-dom';

function Cookie() {
	function getCookies() {
		document.cookie = `token=${
			window.localStorage.getItem('token')
				? window.localStorage.getItem('token')
				: 'username'
		}`;
	}
	return (
		<>
			{document.cookie ? <></> : (
				<div className="cookie">
					<h6>Cookies</h6>
					<p>
						By using this website. You automatically accept that with use
						cookies. <Link to={'/about'}>What for?</Link>
					</p>
					<button onClick={() => getCookies()}>Accept</button>
				</div>
			)}
		</>
	);
}

export default Cookie;
