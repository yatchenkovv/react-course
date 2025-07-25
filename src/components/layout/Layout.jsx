import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ProgressBar } from "../progress-bar/ProgressBar";
import { Cart } from "../cart/Cart";
import { useUser } from "../user-context/use-user";

export const Layout = ({ children }) => {
  const { userName } = useUser();
  return (
    <>
      <ProgressBar />
      <Header />
      <main>{children}</main>
      {userName ? <Cart /> : null}
      <Footer />
    </>
  );
};
