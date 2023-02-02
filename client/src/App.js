import "./App.css"
import { Route, Routes  } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="pages">
                <Routes>
                    <Route element={<Home/>} path='/' />
                </Routes>
            </div>
        </div>
    );
}

export default App