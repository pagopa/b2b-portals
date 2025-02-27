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
    regex: simpleHelper('', false),
    redirectTo: 'https://ioapp.it/firma-in-digitale',
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handler = (
  event: AWSCloudFrontFunction.Event,
): AWSCloudFrontFunction.Request | AWSCloudFrontFunction.Response => {
  if (event.context.eventType === 'viewer-request') {
    const { request } = event;
    const { uri } = request;
    const host = request.headers['host']?.value.toLowerCase();

    for (const pattern of regexPatterns) {
      if (pattern.host.toLowerCase() === host) {
        const match = pattern.regex.exec(uri);

        if (match) {
          let path: string | null = null;

          if (pattern.regex._helper === 'simpleHelper') {
            path = match[1] || null;
          }

          let targetUri = pattern.redirectTo;
          if (path) {
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

    if (uri !== '/') {
      if (uri.endsWith('/')) {
        request.uri = request.uri.replace(/\/$/, '');
      }
      if (!/\.[0-9a-zA-Z]+$/.test(request.uri)) {
        request.uri += '.html';
      }
    }

    return request;
  } else {
    return event.request;
  }
};
