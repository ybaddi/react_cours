
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home"
import About  from "../views/About";

const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="/" elemnt={<Home />} />
            <Route path="/about" elemnt={<About />} />
        </Routes>
    )
}

export default AppRoutes;