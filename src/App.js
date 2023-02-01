import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {UsersPage} from "./pages/UsersPage/UsersPage";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {UserDetailsPage} from "./pages/UserDetailsPage/UserDetailsPage";
import {TodosPage} from "./pages/TodosPage/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {UserLayout} from "./layouts/UserLayout/UserLayout";
import {UserAlbumsPage} from "./pages/UserAlbumsPage/UserAlbumsPage";
import {UserTodosPage} from "./pages/UserTodosPage/UserTodosPage";
import {UserCommentsPage} from "./pages/UserCommentsPage/UserCommentsPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={'details/:postId'} element={<UserDetailsPage/>}>
                        <Route path={'actions'} element={<UserLayout/>}>
                            <Route path={'albums'} element={<UserAlbumsPage/>}/>
                            <Route path={'todos'} element={<UserTodosPage/>}/>
                            <Route path={'comments'} element={<UserCommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
