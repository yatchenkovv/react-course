import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ProgressBar } from "../progress-bar/ProgressBar";
import { Cart } from "../cart/Cart";

export const Layout = ({ children }) => (
  <>
    <ProgressBar />
    <Header />
    <main>{children}</main>
    <Cart />
    <Footer />
  </>
);
