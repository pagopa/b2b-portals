import { describe, expect, it } from 'vitest';
import { defineRedirectBehaviour } from '../localeGuard';

const supportedLangs = ['it', 'en', 'fr'];

describe('defineRedirectBehaviour - no preferredLang', () => {
  it('should redirect to the browser language and save it to local storage when browser language is supported and different from current language', () => {
    const supportedLocaleResult = defineRedirectBehaviour({
      preferredLang: null,
      browserLang: 'it',
      supportedLangs,
      locale: 'en',
    });
    const unsupportedLocaleResult = defineRedirectBehaviour({
      preferredLang: null,
      browserLang: 'it',
      supportedLangs,
      locale: 'sl',
    });
    const expectedResult = {
      redirect: 'browser',
      localStorage: 'write',
    };
    expect(supportedLocaleResult).toStrictEqual(expectedResult);
    expect(unsupportedLocaleResult).toStrictEqual(expectedResult);
  });

  it('should delete preferred language and redirect to default language when locale, browser language and preferred language are unsupported', () => {
    const result = defineRedirectBehaviour({
      preferredLang: 'sl',
      browserLang: 'sl',
      supportedLangs,
      locale: 'sl',
    });
    expect(result).toStrictEqual({
      redirect: 'default',
      localStorage: 'delete',
    });
  });

  it('should redirect to default language when neither current language or browser language are supported', () => {
    const sameLanguageResult = defineRedirectBehaviour({
      preferredLang: null,
      browserLang: 'sl',
      supportedLangs,
      locale: 'sl',
    });
    const differentLanguageResult = defineRedirectBehaviour({
      preferredLang: null,
      browserLang: 'sl',
      supportedLangs,
      locale: 'de',
    });
    const expectedResult = {
      redirect: 'default',
    };
    expect(sameLanguageResult).toStrictEqual(expectedResult);
    expect(differentLanguageResult).toStrictEqual(expectedResult);
  });

  it('should do nothing when browser language is unsupported and current language is supported', () => {
    const result = defineRedirectBehaviour({
      preferredLang: null,
      browserLang: 'sl',
      supportedLangs,
      locale: 'en',
    });
    expect(result).toStrictEqual({});
  });

  it('should do nothing when browser language and current language coincide and are supported', () => {
    const result = defineRedirectBehaviour({
      preferredLang: null,
      browserLang: 'en',
      supportedLangs,
      locale: 'en',
    });
    expect(result).toStrictEqual({});
  });
});

describe('defineRedirectBehaviour - with preferredLang', () => {
  it('should redirect to the preferred language when the current language is different from the preferred language', () => {
    const result = defineRedirectBehaviour({
      preferredLang: 'it',
      browserLang: 'en',
      supportedLangs,
      locale: 'en',
    });
    expect(result).toStrictEqual({ redirect: 'preferred' });
  });

  it('should delete preferred language and not redirect when preferred language and browser language are unsupported, but current language is supported', () => {
    const result = defineRedirectBehaviour({
      preferredLang: 'sl',
      browserLang: 'sl',
      supportedLangs,
      locale: 'en',
    });
    expect(result).toStrictEqual({
      localStorage: 'delete',
    });
  });

  it('should delete preferred language and not redirect when preferred language is unsupported but browser language and current language coincide and are supported', () => {
    const result = defineRedirectBehaviour({
      preferredLang: 'sl',
      browserLang: 'en',
      supportedLangs,
      locale: 'en',
    });
    expect(result).toStrictEqual({
      localStorage: 'delete',
    });
  });

  it('should redirect to the browser language and save it to local storage when the preferred language is unsupported and the browser language is supported and different from the current language', () => {
    const supportedLocaleResult = defineRedirectBehaviour({
      preferredLang: 'sl',
      browserLang: 'en',
      supportedLangs,
      locale: 'it',
    });
    const unsupportedLocaleResult = defineRedirectBehaviour({
      preferredLang: 'sl',
      browserLang: 'en',
      supportedLangs,
      locale: 'de',
    });
    const expectedResult = {
      redirect: 'browser',
      localStorage: 'write',
    };
    expect(supportedLocaleResult).toStrictEqual(expectedResult);
    expect(unsupportedLocaleResult).toStrictEqual(expectedResult);
  });

  it('should do nothing when the preferred language and the current language coincide and are supported', () => {
    const sameBrowserLanguageResult = defineRedirectBehaviour({
      preferredLang: 'it',
      browserLang: 'it',
      supportedLangs,
      locale: 'it',
    });
    const differentSupportedBrowserLanguageResult = defineRedirectBehaviour({
      preferredLang: 'it',
      browserLang: 'en',
      supportedLangs,
      locale: 'it',
    });
    const differentUnsupportedBrowserLanguageResult = defineRedirectBehaviour({
      preferredLang: 'it',
      browserLang: 'sl',
      supportedLangs,
      locale: 'it',
    });
    expect(sameBrowserLanguageResult).toStrictEqual({});
    expect(differentSupportedBrowserLanguageResult).toStrictEqual({});
    expect(differentUnsupportedBrowserLanguageResult).toStrictEqual({});
  });
});
