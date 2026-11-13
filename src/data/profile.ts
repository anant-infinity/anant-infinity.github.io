export const profile = {
  name: 'Anant Telikicherla',
  nameWithDegree: 'Anant Telikicherla Ph.D.',
  shortName: 'Anant Telikicherla',
  title: 'Research Scientist RS-I',
  division: 'Solar & Stellar Division',
  affiliation: 'Laboratory for Atmospheric and Space Physics (LASP)',
  university: 'University of Colorado Boulder',
  eyebrow: 'Heliophysics · Space Weather · Space Instrumentation',
  intro:
    'Research scientist working on improving alerts for extreme solar eruptive storms.',
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
    scholar:
      'https://scholar.google.com/citations?hl=en&user=-hmmfE8AAAAJ&view_op=list_works&sortby=pubdate',
    linkedin: 'https://www.linkedin.com/in/anantkandala/',
    orcid: 'https://orcid.org/0000-0001-5047-5133',
    email: 'anant.telikicherla@lasp.colorado.edu',
    github: 'https://github.com/anant-infinity',
  },
  cv: {
    available: true,
    path: '/cv/anant-telikicherla-cv.pdf',
    lastUpdated: '2026-11-09',
  },
  location: 'Boulder, Colorado, USA',
} as const;

export type Profile = typeof profile;
