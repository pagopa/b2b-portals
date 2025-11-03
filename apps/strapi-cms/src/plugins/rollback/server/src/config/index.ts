import Config from '../../../types/config'

type Validator = Partial<Config>;

export default {
  default: {},
  validator({ githubToken, environment }: Validator) {
    // Check if required keys are present
    if (!(environment && githubToken)) {
      throw new Error('`environment` and `githubToken` keys in your plugin config are required');
    }
    
    // Check if config is valid
    if (githubToken && typeof githubToken !== 'string') {
      throw new Error('`githubToken` key in your plugin config has to be a string');
    }
    if (environment && typeof environment !== 'string') {
      throw new Error('`environment` key in your plugin config has to be a string');
    }
  },
};
