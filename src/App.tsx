import { BrowserRouter, Route, Routes } from "react-router-dom";

import Provider from "./providers";

import Home from "./components/Home";
import TxViewer from "./components/TxViewer";

function App() {
    return (
        <BrowserRouter>
            <Provider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:chain/:txHash" element={<TxViewer />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
