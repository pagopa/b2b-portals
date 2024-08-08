# nextjs-website

## 0.3.0

### Minor Changes

- b4487a0: Update BannerLink component
- 80e1e13: Migrate StripeLink component from EC to B2BP
- bba6cb7: Fix PreHeader layout
- a27b79f: Fix Storybook Hero Light
- 14e0ee8: Migrate Accordion component from EC to B2BP
- fe41609: Implement MegaMenu new component in RC
- 0b0e1d8: Fix Footer layout elements
- 0d4fdd2: Adapt NextJS to new separated-tenants architecture
- e220164: Implement "stop" video function
- df5c209: Update Editorial-Switch component
- 20a7d23: Implement new SEND header structure
- a97e538: Fix Form on Storybook
- 2ae7697: Implement mobileImage on Editorial component
- b06ec3a: Migrate Editorial component from EC to B2BP
- 9880eb8: Implement storeButtons to Hero component
- 255f730: Migrate Header component from EC to B2BP
- aa3390f: Fix BannerLink font style
- 7a271ca: Add HowTo to Storybook
- 623a140: Update Cards component
- 6a713e4: Fix Feature component subtitle rendering
- b118c40: Fix Editorial-Switch storybook error
- fa01c99: Fix storybook error for Video-Image component
- c5a4902: Add BannerLink to Storybook
- e9f7262: Update Form component
- 6052ab2: Add Accordion to Storybook
- d6b0e9e: Migrate BannerLink component from EC to B2BP
- c3ccbf6: Add NextJS Preview Mode ENV VARS
- 950d998: Migrate Feature component from EC to B2BP
- 77424cf: Implement new Hero component variation
- a2a9777: Add PreHeader to Storybook
- d4e9286: Migrate Footer component from EC to B2BP
- dbf3920: Create new component 'Form' on RC and B2BP
- c0158a8: Fix buttons palette colour
- 0cfd3b2: Add Editorial-Switch to Storybook
- 7f019f2: Make NextJS fetch data based on tenant
- eb12fbf: Update logic for fetching and determining the website's structure based on new Strapi implementation of menus
- 1f05793: Update HeroCounter storybook
- 66b61dd: Migrate Cards component from EC to B2BP
- 57cf421: Fix Stripelink layout
- 897652e: Migrate PreHeader component from EC to B2BP
- 0a34b9f: Fix Accordion style layout
- 7ac2d0c: Implement tertiary link for Hero storeButtons
- d2e6ee5: Add StripeLink to Storybook
- c632d85: Add Header to Storybook with style fix
- e17b6fa: Fix Editorial image-ratio
- 72d9447: Update Header and MegaHeader parsing to reflect new Strapi structure
- adf5ea1: Add Cards to Storybook
- 78f71d8: Fix VideoImage component responsive
- 02db726: New header implementation
- 24a7b11: Create Storybook for B2BP RC components
- 3e0c8d6: Fix Header overflow on responsive
- cabf6e8: Fix Ui bugs and MegaHeader href
- af4c7a6: Fix B2BP Use Client build error
- 143594f: Implement new PreFooter component
- 49f0c28: Fix submenu jiggling links effect while hovering
- 66789c1: Implement Video-Image from EC to B2BP
- e375f64: Implement new HeroChips component
- 2aa9a59: Fix MegaHeader Ui fix
- 33c0f5c: Fix header height, update storybook version from 8.1.0 to 8.1.4
- 00928c7: Implement Iframe component inside B2BP
- 600267c: Migrate HowTo component from EC to B2BP
- a235bc7: Add Footer to Storybook
- b7c87d3: Add Feature to Storybook
- a2e07b0: Add Editorial to Storybook
- ef79697: Fix Cards component Style
- f48aa27: Fix Hero Counter style
- bd61148: Fix bug in the VideoImage component
- 77424cf: Implement new HeroCounter component
- 0a60ec4: Remove EC dependencies from Next.JS

### Patch Changes

- 5cf4824: Add tenants firma and pdnd
- 7f2bfcf: Refactor VideoImage component
- 271a06b: Updated population parameters to add mobileImage
- bebf543: Update HeroCounter to reflect Strapi data structure
- 3aac78d: Add Matomo Analytics
- 9c89b27: Bug fix: Convert "homepage" slug to "/" inside Header
- fde0fd7: Refactor EditorialSwitch to adapt to new Strapi structure
- 2d22d70: Add Preview Mode
- bb5adf2: Add defaultCategoryID field to Form
- 136cfe8: Separated Hero tertiary link from StoreButtons
- e9511dd: Add Demo Tenant
- 65b828d: Add @mui/lab dependency required by mui-italia
- 46c90ef: Bug fix: Make HeroCounter link optional
- 577533e: Rename tenant pdnd to interop
- 0652c77: Implemented @iframe-resizer/react into iFrame
- 85476e8: Condense BannerLink body text into one field
- 867e79b: Refactor Form component and implement call to newsletter service
- 6581621: Add population parameters for BannerLink to preview
- 66c7bcf: Update Strapi API call to populate storeButtons inside navigation

## 0.2.0

### Minor Changes

- a02571b: Update EC from 3.1.2 to 4.0.0
- c2d2cd1: Update NextJS to 14.1.0
- 573daf1: Update EC from 3.1.1 to 3.1.2
- 5cadaf1: Fix Ui on EC components from B2BP prospective
- 182a23c: Migrate Hero component from EC to B2BP

### Patch Changes

- fd0d810: Add OneTrustSection
- 20d7446: Style OneTrustSection
- eac0df4: Change :nth-last-child to :nth-last-of-type to remove warning

## 0.1.0

### Minor Changes

- 9ebdfab: Fix background color always dark on Hero component
- 135790f: Simplify Hero Section
- 1cf38bb: Add Feature page component
- 6acd28c: Simplify Header
- aaab82a: Updated EC version from 3.1.0 to 3.1.1
- b46f8fb: Simplify Editorial Section
- 664a0db: Add capability for internal icon use
- 8dc044a: Change from <img> to <image> from next/images package on Editorial component
- 675897f: Implement SEO
- c84ae9d: Add Accordion component
- 277d5e2: Simplify BannerLink Section
- 01edcc1: Add HowTo page component
- 83a9736: Implement MarkDownRenderer in StripeLink component plus adding color style fix
- 3f1658f: Implement custom color for background to match the legacy version
- c874ca2: Implement Cards component from Editorial-Components on Next.JS
- 50ab40f: Add BannerLink component
- d8746aa: Update to new EC version plus updating Cards component to reflect the updates
- 55f4d30: Simplify PreHeader
- 3c1517d: Simplify Feature Section
- 864cc46: Fix feature section icons
- ec778cf: Implement logo inside Header on Next.JS plus minor UI fix
- 2f9a1cf: Implement StripeLink from Editorial-Components on Next.JS
- 7635193: Simplify HowTo Section
- d9fa8c8: Bump version of `pagopa-editorial-components` from 2.1.3 to 2.3.1
- 036e494: implement markdownrenderer in bannerlink component
- 4e922a1: Simplify Footer data structure

### Patch Changes

- da47b6d: Update the "Accordion" component adding the sectionID
- 274100c: [B2BP-310] Enable coverage when running `npm test` command
- 93e0be0: Format socialLinks attributes to remove warnings
- 9afa002: subbed use of path for related.slug in route generation
- 856c57c: Update navigation API call to avoid using \* values
- ca487e7: Implement Cards style
- e1e14ed: Fix style for Feature component
- db53608: Style Accordion Section
- 738dcb3: Refactor on ESlint configuration files
- 0fdeef8: Fix HowTo component Style
- 73dc2e6: Implement StripeLink style
- 295891d: Convert <Icon> to our own MUIIcon
- d5f63e0: Style BannerLink
- 462967b: Fix ThemeProvider import
