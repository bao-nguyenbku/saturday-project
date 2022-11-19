import HOME_ROUTES from "./pages/home/routes";
import TEST_ROUTES from "./pages/test/routes";
import CREATE_ROUTES from "./pages/create/routes";
import UPDATE_ROUTES from "./pages/update/routes";

const Routes = [...HOME_ROUTES, ...TEST_ROUTES, ...CREATE_ROUTES, ... UPDATE_ROUTES];

export default Routes;
