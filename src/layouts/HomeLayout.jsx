import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ServiceTitle from "../components/ServiceTitle";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../pages/Loading";
import { Helmet } from "react-helmet-async";
import ClientFeedback from "../components/ClientFeedback";
import WhyChooseUs from "../components/WhyChooseUs";

const HomeLayout = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Loading />
    }
    return (
        <div className="bg-base-200">
            <Helmet>
                <title>Home - CareerFusion</title>
            </Helmet>
            <header className="relative bg-nav text-white">
                <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
                <div className="relative">
                    <NavBar />
                </div>
            </header>
            <main className="w-11/12 mx-auto my-6">
                <section>
                    <Banner />
                </section>
                <section>
                    <ServiceTitle />
                </section>
                <Outlet />
                <section>
                    <WhyChooseUs/>
                </section>
                <section>
                    <ClientFeedback/>
                </section>
            </main>
            <footer >
                <Footer/>
            </footer>
        </div>
    );
};

export default HomeLayout;