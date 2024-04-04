export default {
  routes: [
    {
     method: 'GET',
     path: '/multi-tenant-single-type',
     handler: 'multi-tenant-single-type.default',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
