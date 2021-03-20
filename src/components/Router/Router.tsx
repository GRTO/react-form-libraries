import { useState, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import { Menu, MenuItemProps } from "semantic-ui-react";
import { loaderWithDelay } from "../../utils/loaderDelay";
import LoaderSpinner from "../Loader/Loader";

const FormikForm = lazy(() =>
  loaderWithDelay(import("../../Formik/Formik"), 1500)
);
const KendoForm = lazy(() =>
  loaderWithDelay(import("../../Kendo/Kendo"), 1500)
);

type FormLibraryOptions = "Formik" | "Kendo";

const MenuBar: React.FC = () => {
  const [menuOption, setMenuOption] = useState<FormLibraryOptions>("Formik");

  const handleOptionClick = (
    _event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) => setMenuOption(data.name as FormLibraryOptions);

  return (
    <Suspense fallback={<LoaderSpinner />}>
      <Router>
        <Menu>
          <Menu.Item
            name="Formik"
            active={menuOption === "Formik"}
            onClick={handleOptionClick}
          >
            <NavLink to="/formik">Formik</NavLink>
          </Menu.Item>

          <Menu.Item
            name="Kendo"
            active={menuOption === "Kendo"}
            onClick={handleOptionClick}
          >
            <NavLink to="/kendo">Kendo</NavLink>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route exact path="/formik" render={() => <FormikForm />}></Route>
          <Route exact path="/kendo" render={() => <KendoForm />}></Route>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default MenuBar;
