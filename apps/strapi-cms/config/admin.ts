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
      subject: 'Strapi - Recupero Password',
      text: `Abbiamo ricevuto una richiesta di reimpostazione della password per il tuo account.
      Per crearne una nuova, clicca sul link qui sotto:
      
      <%= url %>
      
      Se non hai richiesto tu questa operazione, consigliamo di notificare un amministratore: la tua password attuale resterà invariata.
      
      Buon lavoro!`,
      html: `<p>Abbiamo ricevuto una richiesta di reimpostazione della password per il tuo account.<br/>Per crearne una nuova, clicca sul link qui sotto:</p>
      <a href='<%= url %>'><%= url %></a>
      <p>Se non hai richiesto tu questa operazione, consigliamo di notificare un amministratore: la tua password attuale resterà invariata.</p>
      <p>Buon lavoro!</p>`
    }
  }
});
