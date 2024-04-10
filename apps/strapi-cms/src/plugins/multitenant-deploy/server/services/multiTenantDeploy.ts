import buildPluginConfig from '../utils/buildPluginConfig';
import axios from 'axios';

const environmentFromUserRole = {
    "SEND Editor": "send",
    "AppIO Editor": "appio",
}

async function trigger(userRole: 'SEND Editor' | 'AppIO Editor') {
    try {
      const { owner, repo, workflowId, branch, githubToken } = buildPluginConfig(strapi);
      const res = await axios.post(
        `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/dispatches`,
        {
          ref: branch,
          inputs: {
            environment: environmentFromUserRole[userRole]
          },
        },
        {
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `token ${githubToken}`,
          },
        }
      );
      return res;
    } catch (err) {
      return {
        status: err.response.status,
        statusText: err.response.statusText,
      };
    }
  }

export default { trigger };