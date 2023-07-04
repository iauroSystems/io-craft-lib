

interface IRoute {
  path?: string | string[];
  component:
    | React.LazyExoticComponent<FunctionComponent>
    | (() => EmotionJSX.Element);
  exact?: boolean;
  showInNavbar?: boolean;
  name?: string;
  settings?: ISettings;
}

type RouteContextType = {
  routes: IRoute[];
  addRoute: (route: IRoute) => void;
  removeRoute: (route: IRoute) => void;
};