import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './assets/icons/logo.svg'

// Global Components
import { ContactButton, Header } from "./components";
import { Desenvolvedor, Design, Home } from "./pages";

const Router = () => {
    return(
        <BrowserRouter>
            <Header logo={logo} />
            <ContactButton />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/dev" exact element={<Desenvolvedor />} />
                <Route path="/design" exact element={<Design />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;