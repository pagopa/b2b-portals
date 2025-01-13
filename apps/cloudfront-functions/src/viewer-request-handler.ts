// This code is executed in the CloudFront Functions JavaScript runtime. In this
// context we prefer performance over immutability.
// https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html#function-code-modify-request
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statements */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handler = (
  event: AWSCloudFrontFunction.Event
): AWSCloudFrontFunction.Request => {
  if (event.context.eventType === 'viewer-request') {
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
      if (!/\.[a-zA-Z]+$/.test(request.uri)) {
        request.uri += '.html';
      }
    }

    return request;
  } else {
    // do nothing
    return event.request;
  }
};
