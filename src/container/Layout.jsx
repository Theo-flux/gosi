import { Footer, Navbar } from "../components";

function Layout({children}){
    return(
        <div>
            <Navbar/>
            <div>
                { children }
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;