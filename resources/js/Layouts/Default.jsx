import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

const Layout = ({ children }) => {
    return (
        <>
            <header>The header</header>
            <main>{children}</main>
            <footer>The footer</footer>
        </>
    );
};

export default Layout;
