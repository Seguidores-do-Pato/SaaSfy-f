import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Narbar from './components/navbar/Navbar';

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
        </Routes>
    );
}

export default App;
