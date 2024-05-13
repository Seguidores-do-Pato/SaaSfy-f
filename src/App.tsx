import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Narbar from './components/navbar/Navbar';
import PrivateRoutes from './components/PrivateRoutes';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Narbar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Home />} />
            </Route>
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
            <Route element={<PrivateRoutes />}></Route>
        </Routes>
    );
}

export default App;
