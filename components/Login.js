import Head from 'next/head';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseconfig';
import Image from 'next/image'

const Login = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<main className="main">
				<section className="login-section">
					<div className="login-box">
						<div className="login-box__title">Chat App</div>
						<div className="login-box__image">
							<Image src={'/../public/chat-icon.png'} alt="chat icon" layout='fill' />
							<Image src='https://cdn-icons-png.flaticon.com/512/309/309666.png' alt="chat icon" layout='fill' />
						</div>
						<button className="btn" onClick={() => signInWithGoogle("", { prompt: "select_account" })}>Sign In with Google</button>
					</div>
				</section>
			</main>
		</>
	);
};

export default Login;