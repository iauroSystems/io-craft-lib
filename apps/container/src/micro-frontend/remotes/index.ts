import MFReactChild from './reactChild';
import MFReactFederatedApp from './reactFederatedApp';


export interface IMicroFrontend {
  url: string;
  scope: string;
  components: {
    [key: string]: string;
  };
  slices: {
    [key: string]: string;
  };
  routes: {
    [key: string]: string;
  };
}

export interface IMicroFrontends {
  [key: string]: IMicroFrontend;
}

const microFrontends: IMicroFrontends = {
  reactFederatedApp: MFReactFederatedApp,
  reactChild: MFReactChild,
};

export default microFrontends;
