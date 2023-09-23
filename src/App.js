import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import './App.css'
import { useState } from "react";

const App = () => {

    const [search,setSearch] = useState("");

    return (
        <div className="app">
            <NavBar 
            setSearch = {setSearch}
            />
            <Main
            search = {search}
            />
        </div>
    )
}

export default App