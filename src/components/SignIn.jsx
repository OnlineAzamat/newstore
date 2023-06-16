import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/firebase';

const SignInPage = () => {
	// Sign in with google
	const googleProvider = new GoogleAuthProvider();
	const GoogleLogin = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			console.log(result.user);
		} catch (error) {
			console.log(error);
		}
	};

	const navigate = useNavigate();
	const [check, setcheck] = useState({});
	const [token, settoken] = useState('');
	const [username, setUsername] = useState('mor_2314');
	const [password, setPassword] = useState('83r5^_');
	const [loading, setloading] = useState(
		<button type="submit">
			<span>Sign In</span>
		</button>
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		getLogin();
		setloading(
			<div className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		);
	};

	const body = {
		username: username,
		password: password,
	};
	function getLogin() {
		axios
			.post('https://fakestoreapi.com/auth/login', body)
			.then((data) => {
				console.log(data);
				settoken(data.data.token);
				window.localStorage.setItem('token', data.data.token);
			})
			.catch((err) => {
				console.log(err);
				setcheck(err.response);
			});
	}
	function analyze() {
		setloading(
			<button type="submit">
				<span>Sign In</span>
			</button>
		);
		setcheck({});
	}

	return (
		<div className="inner">
			<Link to="/" className="logo">
				<img
					src="https://www.svgrepo.com/show/228332/shopping-cart.svg"
					className="bi me-2"
					width="80"
					height="80"
					aria-label="Bootstrap"
					alt="logo"
				/>
			</Link>
			<div className="sign-up-page">
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit} onChange={analyze}>
					<div className="form-group">
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={(event) => setUsername(event.target.value)}
							placeholder="Username"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							placeholder="Password"
							required
						/>
					</div>
					{loading}
				</form>
				{check == undefined ? null : check.status == 401 ? (
					<div class="alert alert-danger error" role="alert">
						{check.data}
					</div>
				) : null}
				{token ? navigate('/') : null}
				<button className="google p-2 ps-3 px-3 mt-4" onClick={GoogleLogin}>
					<i className="bi bi-google"></i>
					<span className="ms-2">Sign in with Google</span>
				</button>
			</div>
		</div>
	);
};

export default SignInPage;
