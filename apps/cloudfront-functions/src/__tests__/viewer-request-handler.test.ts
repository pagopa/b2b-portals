import { describe, it, expect } from 'vitest';
import rewire from 'rewire';

// the path is not ../../dist/<file> because the resolution starts from the
// 'cloudfront-functions' folder
const rewired = rewire('./dist/viewer-request-handler');
/* eslint-disable-next-line no-underscore-dangle */
const handler = rewired.__get__('handler');

// eslint-disable-next-line prettier/prettier
const makeEvent = (host_uri: string, uri_optional?: string): AWSCloudFrontFunction.Event => {
  const hostname = uri_optional || uri_optional == '' ? host_uri : '';
  const uri = uri_optional == '' ? '/' : uri_optional || host_uri;
  const headers = hostname ? { host: { value: hostname } } : {};

  return {
    version: '1.0',
    context: {
      distributionDomainName: 'aDistName',
      distributionId: 'aDistId',
      eventType: 'viewer-request',
      requestId: 'aRequestId',
    },
    viewer: {
      ip: '1.2.3.4',
    },
    request: {
      method: 'GET',
      uri,
      querystring: {},
      headers,
      cookies: {},
    },
    response: {
      statusCode: 200,
    },
  };
};

const buildResponse = (path: string) => {
  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: {
      location: { value: path },
    },
  };
};

describe('handler', () => {
  it('should append the html suffix', () => {
    expect(handler(makeEvent('/page')).uri).toBe('/page.html');
    expect(handler(makeEvent('/page/')).uri).toBe('/page.html');
    expect(handler(makeEvent('/image.jpg')).uri).toBe('/image.jpg');
    expect(handler(makeEvent('/font.woff2')).uri).toBe('/font.woff2'); // new test case
    const example0 = '/i-s/g/mo/v1.0/i-p/p-i/v-d';
    expect(handler(makeEvent(example0)).uri).toBe(`${example0}.html`);
    const example1 = '/i-s/g/mo/v1.0';
    expect(handler(makeEvent(example1)).uri).toBe(example1);
  });
});

describe('ioapp.it redirects', () => {
  it('Should intercept ioapp.it redirects', () => {
    expect(
      handler(makeEvent('ioapp.it', '/it/blocco-accesso/magic-link/')),
    ).toEqual(
      buildResponse('https://account.ioapp.it/it/blocco-accesso/link-scaduto/'),
    );
    expect(
      handler(makeEvent('ioapp.it', '/it/blocco-accesso/magic-link')),
    ).toEqual(
      buildResponse('https://account.ioapp.it/it/blocco-accesso/link-scaduto/'),
    );
    expect(
      handler(makeEvent('ioapp.it', '/it/blocco-accesso/magic-link/something')),
    ).toEqual(
      buildResponse('https://account.ioapp.it/it/blocco-accesso/link-scaduto/'),
    );
  });

  it('Should intercept firma con IO redirects', () => {
    expect(handler(makeEvent('firma.io.italia.it', '/whatever'))).toEqual(
      buildResponse('https://ioapp.it/firma-in-digitale'),
    );

    expect(handler(makeEvent('firma.io.italia.it', ''))).toEqual(
      buildResponse('https://ioapp.it/firma-in-digitale'),
    );
    expect(handler(makeEvent('firma.io.italia.it', '/'))).toEqual(
      buildResponse('https://ioapp.it/firma-in-digitale'),
    );
  });
});
