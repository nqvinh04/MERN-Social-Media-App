import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Auth from "./pages/auth/Auth";
import Chat from "./pages/chat/Chat";

function App() {
    const user = useSelector(
        (state) => state.auth.authData
    )

    return (
        <div className="App">
            <div className="blur" style={{top: '-18%', right: '0'}}>Home</div>
            <div className="blur" style={{top: '36%', left: '-8rem'}}>Home 1</div>
            <Routes>
                <Route
                    path="/"
                    element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
                />
                <Route
                    path="/home"
                    element={user ? <Home /> : <Navigate to="../auth" />}
                />
                <Route
                    path="/auth"
                    element={user ? <Navigate to="../home" /> : <Auth />}
                />
                <Route
                    path="/profile/:id"
                    element={user ? <Profile />: <Navigate to=".../auth" />}
                />
                <Route
                    path="/chat"
                    element={user ? <Chat />: <Navigate to=".../auth" />}
                />
                {/*<Route path="/" element={<Home/>}/>*/}
                {/*<Route path="/login" element={<Auth/>}/>*/}
                {/*<Route path="/register" element={<Auth/>}/>*/}
            </Routes>
            {/*<Home/>*/}
            {/*<Profile/>*/}
            {/*<Auth/>*/}
        </div>
    );
}

export default App;
