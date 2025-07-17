import { Layout } from "../layout/Layout";
import { RestaurantsPage } from "../restaurants-page/RestaurantsPage";
import { restaurants } from "../../../materials/mock";
import "./app.css";

export const App = () => (
  <Layout>
    <RestaurantsPage restaurants={restaurants} />
  </Layout>
);
