import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
    return (
        <div>
            <header className="">
                <NavBar></NavBar>
            </header>
            <main className="w-11/12 mx-auto my-6">
            <section>
                banner
            </section>
            <section>
                service title
            </section>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;