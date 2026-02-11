import { Page, useRBAC } from '@strapi/strapi/admin';
import { Routes, Route, useLocation } from 'react-router-dom';

import { HomePage } from './HomePage';
import pluginPermissions from '../permissions';
import { NotificationsPage } from './NotificationsPage';
import { Flex } from '@strapi/design-system';
import { Typography } from '@strapi/design-system';
import { Link } from '@strapi/design-system';

const App = () => {
  const location = useLocation();
  const {
    allowedActions: { canNotifications },
  } = useRBAC(pluginPermissions.notifications);

  return (
    <Page.Protect permissions={pluginPermissions.access}>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, .2)',
          padding: '2rem 5.4rem',
          marginBottom: '3.2rem',
        }}
      >
        <Typography variant="beta">Deploy Static Site</Typography>

        <Flex direction="row" alignItems="center" gap="2rem">
          <Link
            href="/admin/plugins/static-deploy"
            style={{
              textDecoration: location.pathname === '/plugins/static-deploy' ? 'underline' : 'none',
            }}
          >
            <Typography variant="gamma" color="white !important">
              Deployments
            </Typography>
          </Link>
          <Link
            href="/admin/plugins/static-deploy/notifications"
            disabled={!canNotifications}
            style={{
              textDecoration:
                location.pathname === '/plugins/static-deploy/notifications' ? 'underline' : 'none',
            }}
          >
            <Typography variant="gamma" {...(canNotifications && { color: 'white !important' })}>
              Notifiche
            </Typography>
          </Link>
        </Flex>
      </Flex>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="*" element={<Page.Error />} />
      </Routes>
    </Page.Protect>
  );
};

export { App };
