import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './assets/logo.svg'

// Global Components
import { Header } from "./components";
import { Desenvolvedor, Design, Home, Trafego } from "./pages";

const Router = () => {
    return(
        <BrowserRouter>
            <Header logo={logo} />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/dev" exact element={<Desenvolvedor />} />
                <Route path="/design" exact element={<Design />} />
                <Route path="/trafego" exact element={<Trafego />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;