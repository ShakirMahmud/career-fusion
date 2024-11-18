import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ServiceTitle from "../components/ServiceTitle";

const HomeLayout = () => {
    return (
        <div>
            <header className="relative bg-nav text-white">
                <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
                <div className="relative">
                    <NavBar />
                </div>
            </header>
            <main className="w-11/12 mx-auto my-6">
                <section>
                    <Banner/>
                </section>
                <section>
                    <ServiceTitle/>
                </section>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;