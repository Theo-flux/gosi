import React, {useState} from "react";
const App = React.createContext();

function ApplicationProvider({children}){
    let [showSidebar, setShowSidebar] = useState(false);
    const [showChart, setShowChart] = useState(false);
    const [graphData, setGraphData] = useState(false);
    const [activeSidebar, setActiveSidebar] = useState("");

    function handleActiveSidebar(arg){
        
        setActiveSidebar(arg)
    }

    function handleSidebar(){
        setShowSidebar(!showSidebar);
    }

    function handleShowchart(){
        setShowChart(!showChart);
    }

    function handleGraphData(arg){
        setGraphData(arg);
    }

    return(
        <App.Provider value={{
            showSidebar: showSidebar, 
            handleSidebar: handleSidebar,
            showChart: showChart,
            setShowChart: setShowChart,
            handleShowchart: handleShowchart,
            graphData: graphData,
            handleGraphData: handleGraphData,
            activeSidebar: activeSidebar,
            setActiveSidebar: setActiveSidebar,
            handleActiveSidebar: handleActiveSidebar
        }}>
            {children}
        </App.Provider>
    );
}

export {App, ApplicationProvider};