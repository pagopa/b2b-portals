export default {
  config: {
    'api::feedback.feedback': {
      columns: [
        'createdAt',
        'updatedAt',
        'slug',
        'useful',
        'notUsefulReason',
        'suggestions',
        'documentId',
      ],
      relation: {},
      locale: 'true',
    },
  },
};