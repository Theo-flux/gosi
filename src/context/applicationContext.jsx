import React, {useState} from "react";
const App = React.createContext();

function ApplicationProvider({children}){
    let [showSidebar, setShowSidebar] = useState(false);
    const [showChart, setShowChart] = useState(false);
    const [graphData, setGraphData] = useState(false);
    const [activeSidebar, setActiveSidebar] = useState("");
    const [showChartOptions, setChartOptions] = useState(false);
    const [chartType, setChartType] = useState("bar");
    const [openChild, setChild] = useState(false);
    const [openGrandChild, setGrandChild] = useState(false);
    const [presentSidebarData, setPresentSidebarData] = useState("");
    

    function handleSidebar(){
        setShowSidebar(!showSidebar);
    }

    function handleShowchart(){
        setShowChart(!showChart);
    }

    function handleGraphData(arg){
        setGraphData(arg);
    }

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

    function handleChild(arg){
        if(openChild === arg){
            return setChild(null)
        }
        setChild(arg)
    }

    function handleGrandChild(arg){
        if(openGrandChild === arg){
            return setGrandChild(arg)
        }
        setGrandChild(arg)
    }

    function handlePresentSidebarData(parent, children){
        setPresentSidebarData(parent);
        setActiveSidebar(`${parent} / ${children[0]}`);
        setGrandChild(0);
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
            handleChartType: handleChartType,

            openChild: openChild,
            setChild: setChild,
            handleChild: handleChild,

            openGrandChild: openGrandChild,
            setGrandChild: setGrandChild,
            handleGrandChild: handleGrandChild,

            presentSidebarData: presentSidebarData,
            setPresentSidebarData: setPresentSidebarData,
            handlePresentSidebarData: handlePresentSidebarData,
        }}>
            {children}
        </App.Provider>
    );
}

export {App, ApplicationProvider};