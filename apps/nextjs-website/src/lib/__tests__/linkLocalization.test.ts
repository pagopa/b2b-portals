import { describe, it, expect } from 'vitest';
import { LocalizeURL, LocalizeMarkdownLinks } from '../linkLocalization';

const locales: {
  readonly it: 'it';
  readonly en: 'en';
} = {
  it: 'it',
  en: 'en',
};

const validInternalURL = '/valid-internal-url';
const enLocalizedURL = '/en/valid-internal-url';
const emptyURL = '';
const sectionURL = '#section-id';
const externalURL = 'https://www.example.com';
const emailURL = 'mailto:user@example.com';
const telephoneURL = 'tel:+33333333333';
const invalidURL = 'invalid-link';

const markdown = {
  allValidLinks: `
# Markdown title
Markdown body copy containing **bold** text, [a valid link](${validInternalURL}) and [**a stylized valid link**](${validInternalURL}).
A list of links:
-  [Valid link 1](${validInternalURL})
-  [Valid link 2](${validInternalURL})
`,
  strayURL: `Markdown containing a stray URL: ${validInternalURL}`,
  allLinkTypes: `
A list of all possible links:
- [Valid](${validInternalURL})
- [Already Localized](${enLocalizedURL})
- [Empty](${emptyURL})
- [Section](${sectionURL})
- [External](${externalURL})
- [Email](${emailURL})
- [Telephone](${telephoneURL})
- [Invalid](${invalidURL})
`,
};

const localizedMarkdown = {
  allValidLinks: `
# Markdown title
Markdown body copy containing **bold** text, [a valid link](${enLocalizedURL}) and [**a stylized valid link**](${enLocalizedURL}).
A list of links:
-  [Valid link 1](${enLocalizedURL})
-  [Valid link 2](${enLocalizedURL})
`,
  strayURL: `Markdown containing a stray URL: ${validInternalURL}`,
  allLinkTypes: `
A list of all possible links:
- [Valid](${enLocalizedURL})
- [Already Localized](${enLocalizedURL})
- [Empty](${emptyURL})
- [Section](${sectionURL})
- [External](${externalURL})
- [Email](${emailURL})
- [Telephone](${telephoneURL})
- [Invalid](${invalidURL})
`,
};

describe('LocalizeURL', () => {
  it('should prepend the locale to a valid internal URL', () => {
    const actual = LocalizeURL({
      URL: validInternalURL,
      locale: locales.en,
      defaultLocale: locales.it,
    });
    expect(actual).toStrictEqual(enLocalizedURL);
  });

  it('should not localize URLs in the default locale', () => {
    const actual = LocalizeURL({
      URL: validInternalURL,
      locale: locales.it,
      defaultLocale: locales.it,
    });
    expect(actual).toStrictEqual(validInternalURL);
  });

  it('shouold not localize empty URLs', () => {
    const actual = LocalizeURL({
      URL: emptyURL,
      locale: locales.en,
      defaultLocale: locales.it,
    });
    expect(actual).toStrictEqual(emptyURL);
  });

  it('should not localize section URLs', () => {
    const actual = LocalizeURL({
      URL: sectionURL,
      locale: locales.en,
      defaultLocale: locales.it,
    });
    expect(actual).toStrictEqual(sectionURL);
  });

  it('should not localize already localized URLs', () => {
    const actual = LocalizeURL({
      URL: enLocalizedURL,
      locale: locales.en,
      defaultLocale: locales.it,
    });
    expect(actual).toStrictEqual(enLocalizedURL);
  });

  it('should not localize external URLs', () => {
    const actual = LocalizeURL({
      URL: externalURL,
      locale: locales.en,
      defaultLocale: locales.it,
    });
    expect(actual).toStrictEqual(externalURL);
  });

  it('should not localize email URLs', () => {
    const actual = LocalizeURL({
      URL: emailURL,
      locale: locales.en,
      defaultLocale: locales.it,
    });
    expect(actual).toStrictEqual(emailURL);
  });

  it('should not localize telephone URLs', () => {
    const actual = LocalizeURL({
      URL: telephoneURL,
      locale: locales.en,
      defaultLocale: locales.it,
    });
    expect(actual).toStrictEqual(telephoneURL);
  });

  it('should only localize URLs starting with /', () => {
    const actual = LocalizeURL({
      URL: invalidURL,
      locale: locales.en,
      defaultLocale: locales.it,
    });
    expect(actual).toStrictEqual(invalidURL);
  });
});

describe('LocalizeMarkdownLinks', () => {
  it('should localize all valid internal links inside markdown text', () => {
    const actual = LocalizeMarkdownLinks({
      markdown: markdown.allValidLinks,
      locale: locales.en,
      defaultLocale: locales.it,
    });
    expect(actual).toStrictEqual(localizedMarkdown.allValidLinks);
  });

  it('should not localize any link in the default locale', () => {
    const actual = LocalizeMarkdownLinks({
      markdown: markdown.allValidLinks,
      locale: locales.it,
      defaultLocale: locales.it,
    });
    expect(actual).toStrictEqual(markdown.allValidLinks);
  });

  it('should not localize stray URLs outside of the markdown link notation', () => {
    const actual = LocalizeMarkdownLinks({
      markdown: markdown.strayURL,
      locale: locales.en,
      defaultLocale: locales.it,
    });
    expect(actual).toStrictEqual(localizedMarkdown.strayURL);
  });

  it('should only localize valid internal links', () => {
    const actual = LocalizeMarkdownLinks({
      markdown: markdown.allLinkTypes,
      locale: locales.en,
      defaultLocale: locales.it,
    });
    expect(actual).toStrictEqual(localizedMarkdown.allLinkTypes);
  });
});
