import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Narbar from './components/navbar/Navbar';
import PrivateRoutes from './components/PrivateRoutes';
import SignInPage from './pages/SignIn';

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
            <Route element={<PrivateRoutes />}></Route>
        </Routes>
    );
}

export default App;
