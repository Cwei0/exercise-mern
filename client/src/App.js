import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Provider } from "./context/Provider";

function App() {
    return (
        <Provider>
            <div className="App">
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route element={<Home />} path='/' />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default App