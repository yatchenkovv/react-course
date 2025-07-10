import { Fragment } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
