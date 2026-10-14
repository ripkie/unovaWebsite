/** Section visibility: true = tampil, false = sembunyikan.
 * Edit this file to control all page layouts. No CMS or client runtime setting.
 * Section opsional Home disembunyikan sampai bahan tersedia.
 */
export const sectionVisibility = {
  home: {
    hero: true,
    robot: true,
    rfid: true,
    boardMat: true,
    videos: false,
    stories: false,
    testimonials: false,
    contact: true
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
    categories: true,
    playsets: true,
    adventureMaps: true,
    rfidCards: true
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
    compatibility: true
  },
  blogDetail: {
    hero: true,
    articleContent: true
  }
} satisfies Record<string, Record<string, boolean>>;

export const siteVisibility = { navbar: true, footer: true };
