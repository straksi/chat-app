import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseconfig';
import Preloader from '../components/Preloader'
import '../styles/style.sass'
function MyApp({ Component, pageProps }) {
	const [user, loading, error] = useAuthState(auth);
	if (loading) {
		return <Preloader />
	}
	if (!user) {
		return <Login />
	}
	return <Component {...pageProps} />
	// return <Login/>
	// return <Sidebar/>
}

export default MyApp
