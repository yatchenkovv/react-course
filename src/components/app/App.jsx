import { Layout } from "../layout/Layout";
import "./app.css";
import "./reset.css";
import { ThemeContextProvider } from "../theme-context/ThemeContextProvider";
import { UserContextProvider } from "../user-context/UserContextProvider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { RestaurantsPageContainer } from "../restaurants-page/RestaurantsPageContainer";

export const App = () => (
  <Provider store={store}>
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <RestaurantsPageContainer></RestaurantsPageContainer>
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  </Provider>
);
