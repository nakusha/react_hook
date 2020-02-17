import React from "react";
import Header from "./Header";
import { useFns, useUser } from "./context";


const Screen = () => {
    const { logUserIn, logUserOut } = useFns();
    const { loggedIn } = useUser();
    return (
        <div>
            <Header />
            <h1>First Screen</h1>
            <button onClick={loggedIn ? logUserOut : logUserIn }>Log user in</button>
        </div>
    )
};

export default Screen;
