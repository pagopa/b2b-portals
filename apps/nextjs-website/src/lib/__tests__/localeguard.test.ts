import { describe, expect, it } from 'vitest';
import { defineRedirectBehaviour } from '../localeGuard';

const supportedLangs = ['it', 'en', 'fr'];

describe('defineRedirectBehaviour - no preferredLang', () => {
  it('should redirect to the browser language when browser language is supported and different from current language', () => {
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

  it('should redirect to browser language which is supported and current locale is unsupported', () => {
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

  it('should redirect to default language when neither current language or browser language are supported', () => {
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

  it('Should delete preferred languange and redirect to default language', () => {
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

  it('should delete preferred language and not redirect when preferred language is unsupported but browser language and current language coincide and are supported', () => {
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

  it('should save browser language as new preferred language and redirect to browser language', () => {
    const result = defineRedirectBehaviour({
      preferredLang: 'sl',
      browserLang: 'en',
      supportedLangs,
      locale: 'it',
    });
    expect(result).toStrictEqual({
      redirect: 'browser',
      localStorage: 'write',
    });
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
