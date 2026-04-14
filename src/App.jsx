import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Catalog } from './page/Catalog';
import { Cart } from './page/Cart';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import appleByz from './assets/apple-byz.png';

// import './App.css'

function App() {
	const [cart, setCart] = useState([]);
	console.log(cart);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	  },[cart]);

	return (
		<>
			<BrowserRouter>
				<Header cart={cart} />
				<Routes>
					<Route path="/" element={<Catalog cart={cart} setCart={setCart} />} />
					<Route
						path="/Cart"
						element={<Cart cart={cart} setCart={setCart} />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
