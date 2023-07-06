import {IPageConfig} from '../types/pageConfig';


export default function getRoutesFromConfig(
  configs: Array<IPageConfig>
): Array<IRoute> {
  const routes: Array<IRoute> = [];

  // Iterate over configs for each page
  configs.forEach((config: IPageConfig) => {
    // If settings are available, map to all available routes of that config
    config.forEach((route) => {
      const routeData = {
        ...route,
      };
      routes.push(routeData);
    });
  });

  return routes;
}
