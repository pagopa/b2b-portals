export default () => ({
    navigation: {
      enabled: true,
      config: {
        contentTypes: ['api::page.page'],
        contentTypesNameFields: {
            'api::page.page': ['name']
        },
        pathDefaultFields: {
            'api::page.page': ['slug']
        },
        allowedLevels: 2,
        cascadeMenuAttached: false
    }
    },
  });