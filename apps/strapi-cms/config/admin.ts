export default ({ env }: any) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  autoOpen: false,
  forgotPassword: {
    emailTemplate: {
      subject: "Strapi - Password Reset",
      text: 'Admin configuration template testing',
      html: '<p>Admin configuration <em>template</em> testing</p>'
    }
  }
});
