# strapi-cms

## 1.0.0

### Major Changes

- 19a204e: Migrate to Strapi V5

### Minor Changes

- da99f38: Duplicated Single Types for SEND and AppIO tenants
- 4082c97: Updated Header Menu Implementation
- 2aa32a4: Migrate Strapi to new separated-tenants architecture
- eece8ca: Add PressRelease CollectionType and Section
- b2676a2: Implement PageSwitch in Strapi
- 00928c7: Add Iframe to Strapi CMS
- 3a1e3a9: Allow external URLs in Header's sublinks
- 72d9447: Refactor Header structure
- 6b5aa74: Make Update Static Content Plugin Multi-Tenant
- b87f77c: Implement i18n
- bea1de1: Make Press Releases parent slug editable
- 70daaae: Substitute MUI Icons in Feature, HowTo, Cards and StripeLink sections with a simple image upload

### Patch Changes

- a5e549b: Add background to Form
- 22cbbf9: Remove manifest generation
- 52e8c27: Standard Header: Add drawer subtitle, allow multiple icons in drawer link cards, align drawer cta card to bottom
- fde0fd7: Add EditorialSwitch section
- b3a5f82: Allow footer links to show OneTrust Preferencies
- d0521c0: Remove store links from MegaHeader
- dd2d6fe: Make viewconfig.json pretty
- 0f2ed60: Make Form section's fields' placeholders editable
- 6b5ff32: Add RowText Section
- 8817d67: Make VideoImage text optional
- c206a76: Add new component RichBanner for Strapi
- 867e79b: Add Form section
- 6a154a7: RowText: Turned body field into Rich Text
- 95b01e0: Increase MegaHeader sublink groups limit to 4
- 104dfcc: Add SectionID to iFrame
- b21a1d8: Add MediaResources Section
- 27e0cf7: Basic implementation of MixPanel
- 6361829: Add DynamicsForm to Strapi
- b5aa21e: Remove Copy Locales plugin to solve prod peer dependency issues
- d637a94: Add SectionID to ServiceCarousel Section
- 247d673: Add structuredData to page SEO
- c678af8: Make Page's slug field not unique
- 6ecf347: Add anchor (ID) to accordion item
- 10426a3: Add Service Carousel Section
- 8dbb9d0: Add trackItemOpen field to Accordion
- e7ab09f: Add Preview Mode
- 24fdf69: Remove Matomo
- 8aef290: Mixpanel: Add navigation tracking to MegaHeader
- f6d37d6: Add Notes field to Form
- 3e6c075: Add Stats Section
- 62a47d3: Update Strapi Deploy Plugin to add staging
- 33383f7: MegaHeader - Split sublinks, add isNew field, add ctaButton to MegaMenu links
- 624d315: Make Header Drawer Link Card's and CTA Card's subtitle Rich Text
- 5b213dd: Implement Section ID for all sections
- 136cfe8: Add tertiary link to Hero section
- c22e100: Strapi Plugin Deploy: Update to add link to workflow run's github page
- 9a8c613: Extend Drawer to MegaHeader
- cddcc77: Make Footer's social links required
- 0d8742f: Add Strapi Plugin Copy Locales
- ac64ccf: Extend preview functionality to PageSwitch CollectionType
- 35e7e7f: Add titleTag to Hero and Editorial
- e577c38: Add mobileImage to VideoImage
- 287aabb: Add tag heading options to Form title
- 9094255: Move @types/koa depedency from devDependencies to standard dependecies
- 2137977: Add tag heading options for RowText title
- bebf543: Add HeroCounter section
- 571e225: Add tag heading options to Cards title
- 8c47e43: Add FramedVideo Section
- 2f97e7c: Sub Stripelink buttonText with full link
- 30edeb4: Update Strapi Deploy Plugin to fix production button enable logic
- 180ab5a: Add Open in new tab option to CTAButton
- 34dbf07: Add buttonLabel to Form
- 545232b: Update view configuration for Editorial Switch
- 5abfa9b: Remove unique constraint from Form Category fields
- 3aac78d: Add Matomo Analytics
- 7b215c3: Add HighlightBox Section
- 4bb9d27: Bannerlink: Remove decoration and make icon an image
- 757e909: Switched from strapi.config.get to strapi.plugin.config to fetch Update Static Content plugin configuration
- 7a7cc4c: Update Strapi view configuration for new Header
- 3e0be99: Add new layout to Cards and add bottom CTA
- a03852f: Officialize admin password recovery email
- 2b2fb05: Convert Editorial Switch subtitle to Rich Text
- c8318dc: Add PressReleaseList Section
- 216dca3: Strapi: Add backlink to PressRelease
- fcd3a2f: Setup Amazon SES for Strapi password recovery
- 52c4de2: Remove useless components. Configure view.
- 2161346: Mixpanel: Add tracking of MegaHeader CTA click
- 5e923d1: Accordion: Add option to have text beside questions
- 7f2bfcf: Add VideoImage section
- 1b20d8e: Re-enabled Preview Button inside Strapi
- 417a0c3: Add TextAndImage section to Page and PressRelease
- 271a06b: Added mobileImage field to Editorial component
- accea4d: Activate Preview Button for PressRelease Collection Type
- 46f5e9f: Implement themeVariant (IO/SEND)
- af44c75: Update strapi-plugin-static-deploy to add RBAC
- 3605762: Substitute Themed Icon for simple Icon
- d9aae50: Update viewconfig for Form to show category label instead of ID
- 9869cfa: Upgrade AWS S3 provider version and configuration
- 7a1db57: Filter workflows shown in Strapi deploy plugin by tenant
- 6697c82: Make VideoImage's subtitle Rich Text
- eb97792: Add loop and autoplay to FramedVideo
- e9511dd: Add Demo Tenant
- 118f5bd: Add YouTube as a valid icon for Footer Social Links
- 439b2b7: Extend og:description to 160 characters
- b8e47d5: Update viewconfig for new BannerLink
- 3107d81: Add storeButtons to Hero section
- 611a2c5: Updated security middleware configuration
- f174582: Add social icons to megaheader
- d830a91: Add TextSection Section
- 85476e8: Update BannerLink to reflect changes made NextJS-side
- 84adf94: Test: Update forgotPassword email template
- 8c37cd7: Add mobile app CTA to MegaHeader
- 3bfb147: Add tag heading options to EditorialSwitch title and also set default Editorial title to h2
- bb5adf2: Add defaultCategoryID field to Form
- 8a30f4b: Implement across-subdomain mixpanel cookie
- f0224e4: Implement HeroChips in Strapi
- bf7ec38: Update strapi-plugin-static-deploy to add workflow history
- 9e49708: Refactor analytics configuration and add mixpanel cookie_domain
- 1b789f4: Update min node version
- a0ca674: Remove slug "unique"ness to allow cloning pages
- 9ebe378: Make slugs unique and add Duplicate Button plugin
- ec91684: Convert Footer Social Icons to Images
- bea4ead: Add WebSite metadata to define site's name
- 2ff39e5: Allow de, fr and sl locales
- 6890793: Implement cookie consent logic
- 0585529: Add textPosition to Strapi Cards
- 8c60de0: Add email notifications upon workflow trigger and end
- a0fe5ca: Strapi Plugin Deploy: Upgrade to add Strapi notifications instead of alerts
- 7f19261: Strapi Plugin Deploy: Upgrade to add confirmation dialog before trigger

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
