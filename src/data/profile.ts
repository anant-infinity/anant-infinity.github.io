export const profile = {
  name: 'Anant Telikicherla',
  nameWithDegree: 'Anant Telikicherla Ph.D.',
  shortName: 'Anant Telikicherla',
  title: 'Research Scientist RS-I',
  division: 'Solar & Stellar Division',
  affiliation: 'Laboratory for Atmospheric and Space Physics (LASP)',
  university: 'University of Colorado Boulder',
  website: 'https://infinitelyanant.com',
  /** Homepage `<title>` (SEO); visible H1 still uses `name`. */
  homeTitle: 'Anant Telikicherla, Ph.D. | Solar Physicist & Research Scientist',
  /** Default meta description for homepage / fallback SEO. */
  seoDescription:
    'Solar physicist and research scientist at LASP, University of Colorado Boulder, specializing in solar physics, flare nowcasting, space weather, and X-ray instrumentation.',
  eyebrow: 'Heliophysics · Space Weather · Space Instrumentation',
  intro:
    'Developing space-based instruments and early-warning techniques to understand and predict extreme solar events.',
  bio: [
    'I grew up in Delhi, India, and completed my undergraduate studies at the Indian Institute of Space Science and Technology (IIST).',
    'Along the way I interned at LASP and at Nanyang Technological University (NTU), earned an M.Sc. at the University of Alberta, and completed my Ph.D. at LASP / University of Colorado Boulder.',
    'Outside of work I play guitar and am learning piano, enjoy tennis, squash, and soccer, and like spending time with family and friends, travelling, and watching movies.',
  ],
  authorMatch: [
    'Anant Telikicherla',
    'A. Telikicherla',
    'Telikicherla, A.',
    'Telikicherla, Anant',
    'Anant Kumar Telikicherla Kandala',
    'A. K. Telikicherla Kandala',
  ],
  links: {
    lasp: 'https://lasp.colorado.edu/people/anant-telikicherla-2/',
    university: 'https://www.colorado.edu/',
    scholar:
      'https://scholar.google.com/citations?hl=en&user=-hmmfE8AAAAJ&view_op=list_works&sortby=pubdate',
    linkedin: 'https://www.linkedin.com/in/anantkandala/',
    orcid: 'https://orcid.org/0000-0001-5047-5133',
    email: 'anant.telikicherla@lasp.colorado.edu',
    github: 'https://github.com/anant-infinity',
    instagram: 'https://www.instagram.com/infinitely.anant/',
  },
  /** Clickable logos shown on the Contact page (affiliations + public profiles). */
  contactLogos: [
    {
      id: 'lasp',
      label: 'LASP people page',
      href: 'https://lasp.colorado.edu/people/anant-telikicherla-2/',
      logo: '/images/logos/lasp.svg',
    },
    {
      id: 'orcid',
      label: 'ORCID profile',
      href: 'https://orcid.org/0000-0001-5047-5133',
      logo: '/images/logos/orcid.svg',
    },
    {
      id: 'github',
      label: 'GitHub profile',
      href: 'https://github.com/anant-infinity',
      logo: '/images/logos/github.svg',
    },
    {
      id: 'scholar',
      label: 'Google Scholar profile',
      href: 'https://scholar.google.com/citations?hl=en&user=-hmmfE8AAAAJ&view_op=list_works&sortby=pubdate',
      logo: '/images/logos/google-scholar.svg',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn profile',
      href: 'https://www.linkedin.com/in/anantkandala/',
      logo: '/images/logos/linkedin.svg',
    },
    {
      id: 'instagram',
      label: 'Instagram — infinitely.anant',
      href: 'https://www.instagram.com/infinitely.anant/',
      logo: '/images/logos/instagram.svg',
    },
  ],
  cv: {
    available: true,
    path: '/cv/anant-telikicherla-cv.pdf',
    lastUpdated: '2026-11-09',
  },
  location: 'Boulder, Colorado, USA',
} as const;

export type Profile = typeof profile;
