import { Hyperlink } from "../../shared";
import zoboLogo from "../../images/zobomap-icon.svg";
import menu from "../../images/menu.svg";

function ExploreNav({className}) {
  return (
    <section className={className}>
        <div className="py-4 mx-auto w-11/12">
            <nav className="">
                <Hyperlink
                    to="/"
                    className="z-50 flex justify-between items-center cursor-pointer w-[137px]"
                >
                    <figure>
                        <img src={zoboLogo} className="w-100%" alt="zobo-logo" />
                    </figure>
                
                    <p className="font-gilmer font-bold text-primary-600 text-xl">
                        Zobomap
                    </p>
                </Hyperlink>
            </nav>
        </div>
    </section>
  );
}

export default ExploreNav;
