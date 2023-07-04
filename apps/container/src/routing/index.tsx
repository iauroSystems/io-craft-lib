import { Redirect } from 'react-router-dom';
import { IPageConfig } from '../types/pageConfig';
import getRoutesFromConfig from '../utils/getRoutesFromConfig';



const routeConfigs: Array<IPageConfig> = [];
const routes: Array<IRoute> = [...getRoutesFromConfig(routeConfigs)];

export default routes;