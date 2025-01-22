import { pipe } from 'fp-ts/lib/function';
import * as t from 'io-ts';
import * as PR from 'io-ts/lib/PathReporter';
import * as TE from 'fp-ts/lib/TaskEither';
import * as E from 'fp-ts/lib/Either';

// Given a response decode from the structure with the given codec
export const extractFromResponse = <A, O, I>(
  response: Promise<Response>,
  codec: t.Type<A, O, I>
): Promise<A> =>
  pipe(
    // handle any promise result
    TE.tryCatch(() => response, E.toError),
    // handle any error on json function
    TE.chain((response) => TE.tryCatch(() => response.json(), E.toError)),
    TE.chainEitherK((json) =>
      // decode the response with the given codec
      pipe(
        codec.decode(json),
        E.mapLeft((errors) => new Error(PR.failure(errors).join('\n')))
      )
    ),
    TE.fold(
      // eslint-disable-next-line functional/no-promise-reject
      (errors) => () => Promise.reject(errors),
      (result) => () => Promise.resolve(result)
    )
  )();
