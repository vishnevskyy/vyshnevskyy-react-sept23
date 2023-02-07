import './App.css';
import {UsersPage} from "./pages/usersPage/usersPage";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {Route, Routes} from "react-router-dom";
import {CarsPage} from "./pages/carsPage/carsPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'cars'} element={<CarsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
