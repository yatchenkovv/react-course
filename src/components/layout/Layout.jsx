import { Fragment } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ProgressBar } from "../progress-bar/ProgressBar";

export const Layout = ({ children }) => (
  <>
    <ProgressBar />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
