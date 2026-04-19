import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Catalog } from './page/Catalog';
import { Cart } from './page/Cart';

import { Header } from './components/Header';
import { Footer } from './components/Footer';



function App() {
	const [cartItems, setCartItems] = useState(() => {
		const data = localStorage.getItem('cart');
		return data ? JSON.parse(data) : [];
	  });

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartItems));
	  },[cartItems]);

	return (
		<>
			<BrowserRouter>
				<Header cartCount={cartItems.length} />
				<Routes>
					<Route path="/" element={<Catalog cartItems={cartItems} setCartItems={setCartItems} />} />
					<Route
						path="/Cart"
						element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
