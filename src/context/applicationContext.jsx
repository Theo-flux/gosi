import React, {useState} from "react";
const App = React.createContext();

function ApplicationProvider({children}){
    let [showSidebar, setShowSidebar] = useState(false);
    const [showChart, setShowChart] = useState(false);
    const [graphData, setGraphData] = useState(false);
    const [activeSidebar, setActiveSidebar] = useState("");
    const [showChartOptions, setChartOptions] = useState(false);
    const [chartType, setChartType] = useState("bar");

    function handleChartoptions(){
        setChartOptions(!showChartOptions);
    }

    function handleChartType(type){
        setChartOptions(!showChartOptions);
        setChartType(type);
    }

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
            handleActiveSidebar: handleActiveSidebar,

            showChartOptions: showChartOptions,
            setChartOptions: setChartOptions,
            handleChartoptions: handleChartoptions,

            chartType: chartType,
            setChartType: setChartType,
            handleChartType: handleChartType
        }}>
            {children}
        </App.Provider>
    );
}

export {App, ApplicationProvider};