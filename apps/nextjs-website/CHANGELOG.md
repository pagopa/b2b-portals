# nextjs-website

## 0.3.0

### Minor Changes

- b4487a0: Update BannerLink component
- 9287f79: Automatically prepend locale to all internal links (links, buttons and markdown) in non-default locales
- 80e1e13: Migrate StripeLink component from EC to B2BP
- bba6cb7: Fix PreHeader layout
- d219cc1: Fix HowTo component Ui
- a27b79f: Fix Storybook Hero Light
- 14e0ee8: Migrate Accordion component from EC to B2BP
- fe41609: Implement MegaMenu new component in RC
- 0b0e1d8: Fix Footer layout elements
- 0d4fdd2: Adapt NextJS to new separated-tenants architecture
- e220164: Implement "stop" video function
- df5c209: Update Editorial-Switch component
- b2676a2: Update PageSwitch to adapt to Strapi's implementation
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
- 4904be0: Implement Page-Switch new component
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
- eece8ca: Add PressRelease component and fetch related Strapi CollectionType as pages
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
- b87f77c: Implement i18n
- 33c0f5c: Fix header height, update storybook version from 8.1.0 to 8.1.4
- 00928c7: Implement Iframe component inside B2BP
- 600267c: Migrate HowTo component from EC to B2BP
- a235bc7: Add Footer to Storybook
- b7c87d3: Add Feature to Storybook
- a2e07b0: Add Editorial to Storybook
- ef79697: Fix Cards component Style
- f48aa27: Fix Hero Counter style
- ca06d4a: Fix link color on Editorial component
- bd61148: Fix bug in the VideoImage component
- 77424cf: Implement new HeroCounter component
- 70daaae: Substitute MUI Icons in Feature, HowTo, Cards and StripeLink sections with a simple image upload
- 0a60ec4: Remove EC dependencies from Next.JS

### Patch Changes

- 837bcc5: Hero: remove margin from texts
- 5cf4824: Add tenants firma and pdnd
- ea1e5ed: change font of feature and howto
- 7f2bfcf: Refactor VideoImage component
- a55ee4c: change hero spacing
- 6ecf347: Add smooth scrolling and programmatic opening to accordion item
- 271a06b: Updated population parameters to add mobileImage
- a1b9e8e: Fix MegaHeader Menu positioning and mobile styling
- 53c54ee: change button color in editorial, cards, hero, bannerlink, prefooter and form components
- accea4d: Extend preview feature to PressRelease Collection Type
- bd28412: Remove FramedVideo hard-coded height to prevent video overflow on large screens
- d637a94: Add SectionID to ServiceCarousel Section
- 247d673: Add structuredData to page SEO
- 10426a3: Add Service Carousel Section
- 889b907: Hero : Add blank target to store buttons
- 87c7eb7: Make PressReleaseList fetch correct PressReleases in Preview
- 6380260: change style of bannerlink image
- a76b22e: Bug Fix: Allow image formats to be null
- 614b1c7: NextJS : Add MediaResources component
- fab8801: RowText: Enable rich-text in component body
- bebf543: Update HeroCounter to reflect Strapi data structure
- 5b213dd: Implement Section ID for all sections
- cbc4c8d: update iframe-resizer to version 5.3.2
- 82351a1: fix framed video bugs
- 2e5c016: Optimize images for responsiveness and SEO
- 78859c3: Accordion: add segment to URL when opening the element if the slug is configured
- ea4e407: Add 'use client' to PageSwitch
- 2392dec: MegaHeader - add on-page overlay when opening menu
- 86a94d0: change border radius to image
- 44e08b0: Change Prefooter UI
- bc224cc: change card component style
- c8318dc: Add PressReleaseList Section
- b27b5de: Hero : remove margin-y from images
- 604fddd: Include sectionID in MegaHeader links
- 3aac78d: Add Matomo Analytics
- 1daba79: App IO : Remove horizontal site overflow caused by Form and RowText components
- b21a1d8: Refactor MediaResources and refine its styling
- f822ae7: Make Cards links open external links in new tab
- 9c89b27: Bug fix: Convert "homepage" slug to "/" inside Header
- 48f7d0d: MegaHeader - enable close on click/tap out
- fde0fd7: Refactor EditorialSwitch to adapt to new Strapi structure
- 2d22d70: Add Preview Mode
- 96b7723: Add PressReleaseList to storybook
- a3c9a00: fix bug in highlightbox link
- 2f6315b: Change cards component style
- dd61db4: Header update for left and right menu management
- 4bb9d27: Fix Bannerlink hydration error
- 46f5e9f: Implement themeVariant (IO/SEND)
- 3dd56e8: add background image to form
- 3605762: Substitute Themed Icon for simple Icon
- 8b70163: Add explicit types to PressReleaseList stories
- bb5adf2: Add defaultCategoryID field to Form
- c3bbd3d: Fix Framed Video and styling
- 3dd04a2: change layout property and add text alignment
- 853082a: Modify hero small style
- a77cc88: Make Header Drawer Link Card's and CTA Card's subtitle Rich Text
- eedda36: Fix styling of MegaHeader links
- 136cfe8: Separated Hero tertiary link from StoreButtons
- eb97792: Add loop and autoplay to FramedVideo
- 274a5c0: Add TextSection component
- e9511dd: Add Demo Tenant
- aeed74f: add feedback to form component
- 118f5bd: Add YouTube as a valid icon for Footer Social Links
- 8b16f53: PressReleaseList : Add margin-y
- 35b0b35: Make PreHeader optional
- 65b828d: Add @mui/lab dependency required by mui-italia
- 46c90ef: Bug fix: Make HeroCounter link optional
- b3c2683: change font, box-shadow, spacing and page scrolling for MegaHeader
- 8c6195b: add new framed-video component
- 9e6cf57: HeroChips add smooth scrolling to target
- b434f1c: Add new Stats component
- bca8d66: Prefooter - change store buttons direction
- f0224e4: Implement HeroChips in Strapi
- 577533e: Rename tenant pdnd to interop
- 79f3898: add button label and remove background to form
- dd2c2c4: add link field to stripelink
- 142f115: Add new HighlightBox component
- 0ba0d8a: change Service Carousel card title font weight
- 0652c77: Implemented @iframe-resizer/react into iFrame
- 7ebba87: change image text order on mobile breakpoint
- 2b2fb05: Convert Editorial Switch subtitle to Rich Text
- 52691be: update colors and maximum text width
- 85476e8: Condense BannerLink body text into one field
- 867e79b: Refactor Form component and implement call to newsletter service
- a4b11c3: add notes field to form
- 6581621: Add population parameters for BannerLink to preview
- 800b8fb: VideoImage: Show title and subtitle when displaying image and add image for mobile breakpoint
- 2734f30: Megaheader : Make logo clickable
- 0585529: Add textPosition to Strapi Cards
- 8334619: Remove dev URL for icons
- 3eefa3d: fix mobile display bugs and change text color
- 66c7bcf: Update Strapi API call to populate storeButtons inside navigation
- 30cf8c1: Update UI behavior to support standardized color themes (IO/SEND). Update components Accordion, Bannerlink, Cards, Editorial, Editorial-Switch, Feature, Form, FramedVideo, Hero, HeroChips, HeroCounter, HowTo, Page-Switch, PreFooter and Stripelink.

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
