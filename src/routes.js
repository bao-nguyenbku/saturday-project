import HOME_ROUTES from "./pages/home/routes";
import SEARCH_ROUTES from "./pages/search/routes";
import TEST_ROUTES from "./pages/test/routes";

const Routes = [...HOME_ROUTES, ...TEST_ROUTES, ...SEARCH_ROUTES];

export default Routes;
