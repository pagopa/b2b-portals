import { describe, expect, it } from 'vitest';
import { defineRedirectBehaviour } from '../localeGuard';

const supportedLangs = ['it', 'en', 'fr'];

describe('LocalGuard - localStorage data does not exists', () => {
  it('Browser language is different from current language and is supported - redirect to browser language home page, write local storage', () => {
    const result = defineRedirectBehaviour({
      preferredLang: null,
      browserLang: 'it',
      supportedLangs,
      locale: 'en',
    });
    expect(result).toStrictEqual({
      redirect: 'browser',
      localStorage: 'write',
    });
  });

  it('Current language unsupported, browser language supported - redirect to browser language home page, write local storage', () => {
    const result = defineRedirectBehaviour({
      preferredLang: null,
      browserLang: 'it',
      supportedLangs,
      locale: 'sl',
    });
    expect(result).toStrictEqual({
      redirect: 'browser',
      localStorage: 'write',
    });
  });

  it('Current language unsupported, browser language unsupported - redirect to default home page, write local storage', () => {
    const result = defineRedirectBehaviour({
      preferredLang: null,
      browserLang: 'sl',
      supportedLangs,
      locale: 'sl',
    });
    expect(result).toStrictEqual({
      redirect: 'default',
    });
  });

  it('Browser language different from current language and is also unsupported - do nothing', () => {
    const result = defineRedirectBehaviour({
      preferredLang: null,
      browserLang: 'sl',
      supportedLangs,
      locale: 'en',
    });
    expect(result).toStrictEqual({});
  });

  it('Browser language is equals to current language - do nothing', () => {
    const result = defineRedirectBehaviour({
      preferredLang: null,
      browserLang: 'en',
      supportedLangs,
      locale: 'en',
    });
    expect(result).toStrictEqual({});
  });
});

describe('LocaleGuard - localStorage data exists', () => {
  it('Current language is different from local storage language - redirect to local storage language home page', () => {
    const result = defineRedirectBehaviour({
      preferredLang: 'it',
      browserLang: 'en',
      supportedLangs,
      locale: 'en',
    });
    expect(result).toStrictEqual({ redirect: 'preferred' });
  });

  it('Current language is different from local storage language and also unsupported - delete local storage and redirect to default home page', () => {
    const result = defineRedirectBehaviour({
      preferredLang: 'sl',
      browserLang: 'sl',
      supportedLangs,
      locale: 'en',
    });
    expect(result).toStrictEqual({
      redirect: 'default',
      localStorage: 'delete',
    });
  });

  it('Browser language and current language are different from local storage language and also current language is unsupported - delete local storage and redirect to browser language home page', () => {
    const result = defineRedirectBehaviour({
      preferredLang: 'sl',
      browserLang: 'en',
      supportedLangs,
      locale: 'en',
    });
    expect(result).toStrictEqual({
      redirect: 'browser',
      localStorage: 'delete',
    });
  });

  it('Current language and browser language are to local storage language - do nothing', () => {
    const result = defineRedirectBehaviour({
      preferredLang: 'it',
      browserLang: 'it',
      supportedLangs,
      locale: 'it',
    });
    expect(result).toStrictEqual({});
  });

  it('Current language is equals to local storage language, browser language is different - do nothing', () => {
    const result = defineRedirectBehaviour({
      preferredLang: 'it',
      browserLang: 'en',
      supportedLangs,
      locale: 'it',
    });
    expect(result).toStrictEqual({});
  });
});
