import { createBrowserRouter } from "react-router";

import { Main } from "../pages/Main";
import { PageNotFound } from "../pages/PageNotFound";
import { Welcome } from "../pages/Welcome";
import { MealsList } from "../pages/MealsList";
import { ROUTES } from "../constants/routes";
import { RandomMeal } from "../pages/RandomMeal";
import { MealSearch } from "../pages/MealSearch";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: Main,
    children: [
      {
        path: ROUTES.HOME,
        Component: Welcome,
      },
      {
        path: ROUTES.MEALS_LIST,
        Component: MealsList,
      },
      {
        path: ROUTES.RANDOM,
        Component: RandomMeal,
      },
      {
        path: ROUTES.SEARCH,
        Component: MealSearch,
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);
