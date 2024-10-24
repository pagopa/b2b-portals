# strapi-cms

## 0.3.0

### Minor Changes

- da99f38: Duplicated Single Types for SEND and AppIO tenants
- 4082c97: Updated Header Menu Implementation
- 2aa32a4: Migrate Strapi to new separated-tenants architecture
- 00928c7: Add Iframe to Strapi CMS
- 72d9447: Refactor Header structure
- 6b5aa74: Make Update Static Content Plugin Multi-Tenant
- b87f77c: Implement i18n
- 70daaae: Substitute MUI Icons in Feature, HowTo, Cards and StripeLink sections with a simple image upload

### Patch Changes

- a5e549b: Add background to Form
- fde0fd7: Add EditorialSwitch section
- 6b5ff32: Add RowText Section
- 867e79b: Add Form section
- 95b01e0: Increase MegaHeader sublink groups limit to 4
- b5aa21e: Remove Copy Locales plugin to solve prod peer dependency issues
- d637a94: Add SectionID to ServiceCarousel Section
- 247d673: Add structuredData to page SEO
- c678af8: Make Page's slug field not unique
- 10426a3: Add Service Carousel Section
- e7ab09f: Add Preview Mode
- f6d37d6: Add Notes field to Form
- 3e6c075: Add Stats Section
- 5b213dd: Implement Section ID for all sections
- 136cfe8: Add tertiary link to Hero section
- e577c38: Add mobileImage to VideoImage
- 9094255: Move @types/koa depedency from devDependencies to standard dependecies
- bebf543: Add HeroCounter section
- 8c47e43: Add FramedVideo Section
- 2f97e7c: Sub Stripelink buttonText with full link
- 34dbf07: Add buttonLabel to Form
- 545232b: Update view configuration for Editorial Switch
- 5abfa9b: Remove unique constraint from Form Category fields
- 3aac78d: Add Matomo Analytics
- 7b215c3: Add HighlightBox Section
- 4bb9d27: Bannerlink: Remove decoration and make icon an image
- 757e909: Switched from strapi.config.get to strapi.plugin.config to fetch Update Static Content plugin configuration
- 7a7cc4c: Update Strapi view configuration for new Header
- 2b2fb05: Convert Editorial Switch subtitle to Rich Text
- 5e923d1: Accordion: Add option to have text beside questions
- 7f2bfcf: Add VideoImage section
- 1b20d8e: Re-enabled Preview Button inside Strapi
- 271a06b: Added mobileImage field to Editorial component
- 46f5e9f: Implement themeVariant (IO/SEND)
- 3605762: Substitute Themed Icon for simple Icon
- 7a1db57: Filter workflows shown in Strapi deploy plugin by tenant
- eb97792: Add loop and autoplay to FramedVideo
- e9511dd: Add Demo Tenant
- 118f5bd: Add YouTube as a valid icon for Footer Social Links
- 439b2b7: Extend og:description to 160 characters
- b8e47d5: Update viewconfig for new BannerLink
- 3107d81: Add storeButtons to Hero section
- 611a2c5: Updated security middleware configuration
- d830a91: Add TextSection Section
- 85476e8: Update BannerLink to reflect changes made NextJS-side
- bb5adf2: Add defaultCategoryID field to Form
- a0ca674: Remove slug "unique"ness to allow cloning pages
- 0585529: Add textPosition to Strapi Cards

## 0.2.0

### Minor Changes

- a02571b: Update strapi with new size for 'Hero' component and add new functionality for the new 'Editorial' component badges

### Patch Changes

- fd0d810: Add OneTrust section

## 0.1.0

### Minor Changes

- d8746aa: Update Cards structure to reflect editorial-components update
- 135790f: Simplify Hero Section
- 6acd28c: Simplify Header
- ec778cf: Added "logo" to Strapi structure
- b46f8fb: Simplify Editorial Section
- 277d5e2: Simplify BannerLink Section
- ccb04c0: Add StripeLink section to Strapi
- f9f6526: Add SEO to Strapi
- 50ab40f: Add BannerLink component
- 0d1a2ea: Remove uniqueness from sectionID of Accordion section
- 55f4d30: Simplify PreHeader
- 3c1517d: Simplify Feature Section
- cc58dd3: Add Update Static Content plugin for static site deployment
- 7635193: Simplify HowTo Section
- 93829fc: Add Cards section to Strapi
- 864cc46: Remove invalid MUI social icons
- 4e922a1: Simplify Footer data structure
- da47b6d: Update the "Accordion" component adding the sectionID

### Patch Changes

- 83a9736: Convert StripeLink subtitle to Rich Text
- 036e494: Convert body to Rich Text
- 664a0db: Add Medium Icon to Footer Social Links
- 7d5ab72: Add configrestore cmd before start + Configure Strapi UI for production
- 2f9a1cf: Simplify StripeLink
- c874ca2: Simplify Cards component on Strapi
