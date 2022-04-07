import React, {useState, useContext} from "react";
const App = React.createContext();

function ApplicationProvider({children}){
    let [showSidebar, setShowSidebar] = useState(false);

    function handleSidebar(){
        setShowSidebar(!showSidebar);
    }


    return(
        <App.Provider value={{showSidebar:showSidebar, handleSidebar:handleSidebar}}>
            {children}
        </App.Provider>
    );
}

export {App, ApplicationProvider};