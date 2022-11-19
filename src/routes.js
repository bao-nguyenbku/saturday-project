import HOME_ROUTES from "./pages/home/routes";
import SEARCH_ROUTES from "./pages/search/routes";
import TEST_ROUTES from "./pages/test/routes";
import CREATE_ROUTES from "./pages/create/routes";
import UPDATE_ROUTES from "./pages/update/routes";

const Routes = [...HOME_ROUTES, ...TEST_ROUTES, ...CREATE_ROUTES, ... UPDATE_ROUTES, ...SEARCH_ROUTES];

export default Routes;
