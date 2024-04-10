import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import DeployButton from './components/DeployButton';

const name = pluginPkg.strapi.name;

export default {
  register(app: any) {
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app: any) {
    app.injectContentManagerComponent('listView', 'actions', {
      name: 'DeployButton',
      Component: DeployButton,
    });
  },
};
