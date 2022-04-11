import React, {useState} from "react";
const App = React.createContext();

function ApplicationProvider({children}){
    let [showSidebar, setShowSidebar] = useState(false);
    const [showChart, setShowChart] = useState(false);
    const [graphData, setGraphData] = useState(false);

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
            handleShowchart: handleShowchart,
            graphData: graphData,
            handleGraphData: handleGraphData
        }}>
            {children}
        </App.Provider>
    );
}

export {App, ApplicationProvider};