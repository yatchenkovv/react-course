import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ProgressBar } from "../progress-bar/ProgressBar";
import { Cart } from "../cart/Cart";
import { useUser } from "../user-context/use-user";
import { Outlet } from "react-router";

export const Layout = () => {
  const { userName } = useUser();
  return (
    <>
      <ProgressBar />
      <Header />
      <main>{<Outlet />}</main>
      {userName ? <Cart /> : null}
      <Footer />
    </>
  );
};
