import Head from 'next/head';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseconfig';

const Login = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<main className="main">
				<section className="login-section">
					<div className="container">
						<button className="btn" onClick={()=>signInWithGoogle("", {prompt: "select_account"})}>Sign In with Google</button>
					</div>
				</section>
			</main>
		</>
	);
};

export default Login;