import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { ThemeStyles } from './data/ThemeStyles';

import { Catalog } from './page/Catalog';
import { Cart } from './page/Cart';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useLocalStorage } from './data/useLocalStorage';

function App() {
	const [cartItems, setCartItems] = useLocalStorage('cart-items', []);

	return (
		<>
			<ThemeProvider theme={ThemeStyles}>
				<BrowserRouter>
					<Header cartItems={cartItems} />
					<Routes>
						<Route
							path="/"
							element={
								<Catalog cartItems={cartItems} setCartItems={setCartItems} />
							}
						/>
						<Route
							path="/Cart"
							element={
								<Cart cartItems={cartItems} setCartItems={setCartItems} />
							}
						/>
					</Routes>
					<Footer />
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
}

export default App;
