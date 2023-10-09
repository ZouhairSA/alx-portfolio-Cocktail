import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, //5 mins(time until a query result is cached)
    },
  },
});

import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
  SinglePageError,
} from "./pages";

import { loader as landingloader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsletteraction } from "./pages/NewsLetter";

const router = createBrowserRouter([
  {
    // ! home page route
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />, //used to set global error element for undefined route
    //! children are used to set 'nested routes' relative to parent route
    children: [
      {
        // sets this as the index page of all routes --> entry yhi se hgi mtlb
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />, //used to set error element for a individual page(for error other than undefined route)
        loader: landingloader(queryClient),
      },
      {
        path: "cocktail/:id", //is used to assign a 'id' tht we will access dynamically for every cocktail
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
        action: newsletteraction,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};
export default App;
