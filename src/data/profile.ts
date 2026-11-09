export const profile = {
  name: 'Anant Telikicherla',
  nameWithDegree: 'Anant Telikicherla Ph.D.',
  shortName: 'Anant Telikicherla',
  title: 'Research Scientist RS-I',
  division: 'Solar & Stellar Division',
  affiliation: 'Laboratory for Atmospheric and Space Physics (LASP)',
  university: 'University of Colorado Boulder',
  eyebrow: 'Solar Physics · Space Instrumentation',
  intro:
    'Research scientist working on solar high-energy radiation, space-based instrumentation, and hard X-ray observations of the Sun.',
  bio: [
    'Anant Telikicherla is a Research Scientist (RS-I) in the Solar & Stellar Division at the Laboratory for Atmospheric and Space Physics (LASP), University of Colorado Boulder.',
    'His path spans aerospace engineering training at IIST, work connected to ISRO, graduate studies in Canada, and a Ph.D. at CU Boulder before joining LASP.',
    'Research interests include solar high-energy radiation, hard X-ray instrumentation, and space-based observing systems. Replace or extend this bio with precise dates and roles as needed.',
  ],
  authorMatch: ['Anant Telikicherla', 'A. Telikicherla', 'Telikicherla, A.', 'Telikicherla, Anant'],
  links: {
    lasp: 'https://lasp.colorado.edu/people/anant-telikicherla-2/',
    scholar:
      'https://scholar.google.com/citations?hl=en&user=-hmmfE8AAAAJ&view_op=list_works&sortby=pubdate',
    linkedin: 'https://www.linkedin.com/in/anantkandala/',
    orcid: 'https://orcid.org/0000-0001-5047-5133',
    email: 'anant.telikicherla@lasp.colorado.edu',
    github: '',
  },
  cv: {
    available: false,
    path: '/cv/anant-telikicherla-cv.pdf',
    lastUpdated: 'YYYY-MM-DD',
  },
  location: 'Boulder, Colorado, USA',
} as const;

export type Profile = typeof profile;
