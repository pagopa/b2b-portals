import { Typography } from '@strapi/design-system';
import { Thead } from '@strapi/design-system';
import { Tr } from '@strapi/design-system';
import { Table } from '@strapi/design-system';
import { Main } from '@strapi/design-system';
import { useFetchClient, useNotification, useRBAC } from '@strapi/strapi/admin';
import pluginPermissions from '../permissions';
import { Th } from '@strapi/design-system';
import { Box } from '@strapi/design-system';
import { useEffect, useState } from 'react';
import { PLUGIN_ID } from '../pluginId';
import { Tbody } from '@strapi/design-system';
import { Td } from '@strapi/design-system';
import { Button } from '@strapi/design-system';
import { Flex } from '@strapi/design-system';

const HomePage = () => {
  const { get, post } = useFetchClient();
  const [loading, setLoading] = useState<boolean>(false);
  const [triggering, setTriggering] = useState<boolean>(false);
  const [deployments, setDeployments] = useState<string[]>([]);
  const {
    allowedActions: { canTrigger },
  } = useRBAC(pluginPermissions.trigger);
  const { toggleNotification } = useNotification();

  async function fetchDeployments() {
    setLoading(true);

    try {
      const res = await get<string[]>(`/${PLUGIN_ID}/deployments`);
      setDeployments(res.data);
    } catch (error: any) {
      if (error.name === 'AbortError') {
        // User likely just changed page before fetch completed, do nothing
        return;
      } else {
        console.error(error);
        toggleNotification({
          type: 'danger',
          title: 'Impossibile recuperare la lista di deploy passati!',
        });
      }
    } finally {
      setLoading(false);
    }
  }

  async function triggerRollback(deployment: string) {
    setTriggering(true);

    try {
      const { data } = await post(`/${PLUGIN_ID}/trigger`, { deployment });
      if (data.success) {
        toggleNotification({
          type: 'success',
          title: 'Rollback lanciato con successo!',
        });
      } else {
        throw new Error(`GITHUB WORKFLOW ERROR.\n\nStatus: ${data.status}\nError: ${data.err}`);
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        // User likely just changed page before fetch completed, do nothing
        return;
      } else {
        console.error(error);
        toggleNotification({
          type: 'danger',
          title: 'Impossibile lanciare il rollback!',
        });
      }
    } finally {
      setTriggering(false);
    }
  }

  const formatDeployment = (deployment: string) => {
    const date = deployment.split('_')[0].split('-').reverse().join('/');
    const time = deployment.split('_')[1].replaceAll('-', ':');

    return `${date} (${time})`;
  }

  useEffect(() => {
    fetchDeployments();
  }, [])

  return (
    <Main
      style={{
        padding: '3.2rem 5.4rem',
      }}
    >
      <Box style={{ marginBottom: '3.2rem' }}>
        <Typography variant="alpha">Rollback di Produzione</Typography>
      </Box>
      
      <Table colCount={5} rowCount={11}>
        <Thead>
          <Tr>
            <Th key={'date'}>
              <Typography variant="sigma">
                Deploy passati disponibili
              </Typography>
            </Th>
            <Th key={'actions'}/>
          </Tr>
        </Thead>
        <Tbody>
          {loading ? (
            <Tr>
              <Td>
                <Typography variant="sigma">Recuperando i deploy passati...</Typography>
              </Td>
            </Tr>
          ) : deployments.map((deployment, index) => (
            <Tr key={deployment}>
              <Td>
                <Typography variant="sigma">{formatDeployment(deployment)}{index === 0 && ' (Attualmente in prod)'}</Typography>
              </Td>
              <Td>
                <Flex justifyContent='flex-end'>
                  <Button disabled={!canTrigger || triggering || index === 0} onClick={() => {triggerRollback(deployment)}}>
                    ROLLBACK A QUESTO DEPLOY
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Main>
  );
};

export { HomePage };
