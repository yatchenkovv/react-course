import { Layout } from "../layout/Layout";
import { RestaurantsPage } from "../restaurants-page/RestaurantsPage";
import { restaurants } from "../../../materials/mock";
import "./app.css";
import { ThemeContextProvider } from "../theme-context/ThemeContextProvider";
import { UserContextProvider } from "../user-context/UserContextProvider";

export const App = () => (
  <ThemeContextProvider>
    <UserContextProvider>
      <Layout>
        <RestaurantsPage restaurants={restaurants} />
      </Layout>
    </UserContextProvider>
  </ThemeContextProvider>
);
