/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/no-loop-statements */
/* eslint-disable functional/no-let */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statements */
// This code is executed in the CloudFront Functions JavaScript runtime. In this
// context we prefer performance over immutability.
// https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html#function-code-modify-request

interface RegExp {
  _helper?: string;
}

const simpleHelper = (base: string, usePath = true): RegExp => {
  // eslint-disable-next-line functional/no-let
  let stringRegex =
    base == '' ? '.*' : base.replace(/\//g, '\\/').replace(/\./g, '\\.');
  if (usePath) {
    stringRegex += '(.*)';
  }
  const regex = new RegExp(stringRegex);
  regex._helper = 'simpleHelper';
  return regex;
};

interface RedirectRule {
  readonly host: string;
  readonly regex: RegExp;
  readonly redirectTo: string;
}

const regexPatterns: readonly RedirectRule[] = [
  {
    host: 'ioapp.it',
    regex: simpleHelper('/it/blocco-accesso/magic-link', false),
    redirectTo: 'https://account.ioapp.it/it/blocco-accesso/link-scaduto/',
  },
  {
    host: 'firma.io.italia.it',
    regex: simpleHelper('/note-legali', false),
    redirectTo: 'https://ioapp.it/firma-in-digitale/note-legali',
  },
  {
    host: 'firma.io.italia.it',
    regex: simpleHelper('/informativa-privacy', false),
    redirectTo: 'https://ioapp.it/firma-in-digitale/informativa-privacy',
  },
  {
    host: 'firma.io.italia.it',
    regex: simpleHelper('', false),
    redirectTo: 'https://ioapp.it/firma-in-digitale',
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handler = (
  event: AWSCloudFrontFunction.Event,
): AWSCloudFrontFunction.Request | AWSCloudFrontFunction.Response => {
  if (event.context.eventType === 'viewer-request') {
    const uri = event.request.uri;
    const host = event.request.headers['host']?.value.toLocaleLowerCase();

    for (const pattern of regexPatterns) {
      if (pattern.host.toLocaleLowerCase() === host) {
        const match = pattern.regex.exec(uri);

        if (match) {
          let path: string | null = null;

          if (pattern.regex._helper === 'simpleHelper') {
            path = match[1] || null;
          }

          let targetUri = pattern.redirectTo;
          if (path !== null) {
            targetUri += path;
          }

          return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
              location: { value: targetUri },
            },
          };
        }
      }
    }

    // do the rewrite
    const { request } = event;
    const uriEndsWithSlash = request.uri.endsWith('/');
    const isHomepage = request.uri === '/';

    // Add the .html extension if missing
    if (!isHomepage) {
      if (uriEndsWithSlash) {
        request.uri = request.uri.replace(/\/$/, '');
      }
      // Always add .html if there's no file extension, including special cases
      if (!/\.[0-9a-zA-Z]+$/.test(request.uri)) {
        request.uri += '.html';
      }
    }

    return request;
  } else {
    // do nothing
    return event.request;
  }
};
