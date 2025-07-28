import { Layout } from "../layout/Layout";
import "./app.css";
import "./reset.css";
import { ThemeContextProvider } from "../theme-context/ThemeContextProvider";
import { UserContextProvider } from "../user-context/UserContextProvider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { RestaurantPage } from "../../pages/restaurant-page/RestaurantPage";
import { HomePage } from "../../pages/home-page/HomePage";
import { RestaurantsPage } from "../restaurants-page/RestaurantsPage";
import { DishPage } from "../../pages/dish-page/DishPage";
import { RestaurantMenuContainer } from "../restaurant-menu/RestaurantMenuContainer";
import { RestaurantReviewsContainer } from "../restaurant-reviews/RestaurantReviewsContainer";

export const App = () => (
  <Provider store={store}>
    <ThemeContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/restaurants" element={<RestaurantsPage />} />
              <Route
                path="restaurants/:restaurantId"
                element={<RestaurantPage />}
              >
                <Route index element={<Navigate to="menu" />} />
                <Route path="menu" element={<RestaurantMenuContainer />} />
                <Route
                  path="reviews"
                  element={<RestaurantReviewsContainer />}
                />
              </Route>
            </Route>
            <Route path="/dish/:dishId" element={<DishPage />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </ThemeContextProvider>
  </Provider>
);
