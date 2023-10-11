export default {
  menus: {
    config: {
      layouts: {
        menuItem: {
          link: [
            {
              input: {
                label: 'Pagine',
                name: 'pagine',
                type: 'relation',
                required: true
              },
            },
            {
              input: {
                label: 'Visibile',
                name: 'visibile',
                type: 'bool',
                required: true
              },
            },
          ],
        },
      },
    },
  },
};