import Home from './pages/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import './styles.sass';
import './Loader.sass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import About from './components/About';
import Footer from './components/Footer';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import Page404 from './components/404Page';
import Cart from './components/Cart';
import Navigation from './components/Navigation';
import Contact from './components/Contact'
import Cookie from './components/Cookie'

function App() {
	return (
		<BrowserRouter>
    <Cookie />
			<Routes>
				<Route
					exact
					path="/"
					element={
						<>
							<Navbar />
							<Home />
							<Footer />
						</>
					}
				/>
				<Route
					path="/products"
					element={
						<>
							<Navbar />
							<Products />
							<Footer />
						</>
					}
				/>
				<Route
					path="/products/:id"
					element={
						<>
							<Navbar />
							<Product />
							<Footer />
						</>
					}
				/>
				<Route
					path="/about"
					element={
						<>
							<Navbar />
							<About />
							<Footer />
						</>
					}
				/>
				<Route
					path="/cart"
					element={
						<>
							<Navbar />
							<Cart />
							<Footer />
						</>
					}
				/>
				<Route
					path="/contact"
					element={
						<>
							<Navbar />
							<Contact />
							<Footer />
						</>
					}
				/>
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/sign-in" element={<SignInPage />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
			{window.location.pathname == '/sign-in' ||
			window.location.pathname == 'sign-up' ? null : (
				<Navigation />
			)}
		</BrowserRouter>
	);
}

export default App;
