import { Layout } from "../layout/Layout";
import { RestaurantsPage } from "../restaurants-page/RestaurantsPage";
import { restaurants } from "../../../materials/mock";

export const App = () => (
  <Layout>
    <RestaurantsPage restaurants={restaurants}></RestaurantsPage>
  </Layout>
);
