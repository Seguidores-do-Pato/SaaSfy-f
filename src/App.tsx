import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Narbar from './components/navbar/Navbar';
import PrivateRoutes from './components/PrivateRoutes';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Products from './pages/Products';
import MyProducts from './pages/MyProducts';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import CreateProducts from './pages/CreateProducts'

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Narbar />
                        <Outlet />
                        <Footer />
                    </>
                }
            >
                <Route index element={<Home />} />
                <Route path="/cart" element={<Checkout />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/profile" element={<PrivateRoutes />}>
                    <Route index element={<Profile />} />
                </Route>
            </Route>

            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />

            <Route path="/sell" element={<PrivateRoutes />}>
                <Route index element={<Dashboard />} />
                <Route path="/sell/my-products" element={<MyProducts />} />
                <Route path="/sell/my-products/create" element={<CreateProducts/>} />
            </Route>
        </Routes>
    );
}

export default App;
