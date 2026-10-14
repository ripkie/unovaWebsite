/** Section visibility: true = tampil, false = sembunyikan.
 * Edit this file to control all page layouts. No CMS or client runtime setting.
 * All flags start true to preserve the approved site.
 */
export const sectionVisibility = {
  home: {
    hero: true,
    stats: true,
    features: true,
    featuredProduct: true,
    partners: true
  },
  about: {
    hero: true,
    story: true,
    values: true,
    milestones: true,
    welcome: true,
    team: true,
    cta: true
  },
  products: {
    hero: true,
    productCarousel: true,
    comingSoon: true
  },
  partnership: {
    hero: true,
    partnerSlider: true,
    partnerTypes: true,
    benefits: true
  },
  blog: {
    hero: true,
    categoryFilter: true,
    internalPosts: true,
    externalArticles: true,
    newsletter: true
  },
  contact: {
    hero: true,
    contactInfo: true,
    contactMain: true
  },
  productDetail: {
    hero: true,
    specifications: true,
    howItWorks: true,
    useCases: true,
    compatibility: true
  },
  blogDetail: {
    hero: true,
    articleContent: true
  }
} satisfies Record<string, Record<string, boolean>>;

export const siteVisibility = { navbar: true, footer: true };
