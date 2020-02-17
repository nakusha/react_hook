import React from "react";
import { useUser } from "./context";

const Header = () => {
    //const {user:{name, loggedIn}} = useContext(UserContext);
    const{ name, loggedIn} = useUser();
    
    return (
        <header>
            <a href="#">Home</a> Hello, {name} you are {loggedIn ? "Logged In" : "anonymous"}
        </header>
    )
};

export default Header;