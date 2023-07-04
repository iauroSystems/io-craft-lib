import { environment } from '../../environments/environment';



const MFReactFederatedApp = {
  url: environment.react_federated_app + 'remoteEntry.js',
  scope: 'reactFederatedApp',
  components: {
    App: './App',
  },
  slices: {},
  routes: {},
};

export default MFReactFederatedApp;