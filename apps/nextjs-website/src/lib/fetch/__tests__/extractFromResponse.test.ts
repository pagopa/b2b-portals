import { describe, it, expect, vi } from 'vitest';
import { PreHeaderCodec, PreHeaderData } from '../preHeader';
import { extractFromResponse } from '../extractFromResponse';

const preHeaderData: {
  readonly valid: PreHeaderData;
  readonly missingData: {
    readonly data: {
      readonly leftCtas: readonly []; // Using empty arrays for simplicity
    };
  };
} = {
  valid: {
    data: {
      leftCtas: [],
      rightCtas: [],
      include: [],
    },
  },
  missingData: {
    data: {
      leftCtas: [],
    },
  },
};

describe('extractFromResponse', () => {
  it('should return correctly structured data', async () => {
    const fetchMock = vi.fn(fetch);
    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preHeaderData.valid),
    } as unknown as Response);

    const actual = await extractFromResponse(
      fetchMock('PreHeader'),
      PreHeaderCodec,
    );
    expect(actual).toStrictEqual(preHeaderData.valid);
  });
  it('should return error and response if incoming data is missing expected fields', () => {
    const fetchMock = vi.fn(fetch);
    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preHeaderData.missingData),
    } as unknown as Response);

    expect(
      extractFromResponse(fetchMock('PreHeader'), PreHeaderCodec),
    ).rejects.toThrow('RESPONSE');
  });
});
