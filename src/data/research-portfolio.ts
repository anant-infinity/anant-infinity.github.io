/**
 * Public research portfolio listings for Home + Research pages.
 * Sourced from CV (public/cv/anant-telikicherla-cv.pdf, last updated 2026-11-09)
 * and existing research detail pages. Do not invent roles, grants, or amounts.
 */

export type PortfolioEntry = {
  id: string;
  title: string;
  role: string;
  program: string;
  years: string;
  summary: string;
  /** Relative path under site base, e.g. /research/hope — only when a detail page exists */
  href?: string;
  /** Awarded amounts only when listed on the public CV */
  amount?: string;
  /** Homepage Featured Research (max 3) */
  homeFeatured?: boolean;
  homeFeaturedOrder?: number;
  /** Shorter homepage card title / metadata when needed */
  homeTitle?: string;
  homeRole?: string;
  homeProgram?: string;
};

/**
 * Current Research — PI first, then other current programs/missions.
 * H-TIDeS and LWS entries are Submitted/Pending on the CV (not awarded Co-I roles).
 */
export const currentResearch: PortfolioEntry[] = [
  {
    id: 'hard-xray-ird',
    title: 'Hard X-Ray Photometer for Space Weather Applications',
    role: 'Principal Investigator (PI)',
    program: 'LASP Internal Research and Development (IRD)',
    years: '2026–2027',
    amount: '$100,000',
    summary:
      'First PI-led effort developing a compact hard X-ray photometer for space-weather applications under the LASP IRD 2026–27 program, building on soft X-ray photon-counting experience from SEUSHI and related solar instrumentation.',
    href: '/research/hard-xray',
    homeFeatured: true,
    homeFeaturedOrder: 1,
    homeTitle: 'Compact Hard X-ray Instrument',
    homeRole: 'PI',
    homeProgram: 'LASP IRD',
  },
  {
    id: 'ng-sxis',
    title: 'Next Generation Solar X-ray Imaging Spectrometer (NG-SXIS)',
    role: 'Postdoctoral Researcher',
    program: 'NASA H-TIDeS',
    years: 'Submitted/Pending',
    summary:
      'Compact next-generation solar X-ray imaging spectrometer concept for near-real-time space-weather alerts (PI: Andrew Jones; NASA Heliophysics Technology and Instrument Development for Science), listed on the CV as submitted/pending.',
    homeFeatured: true,
    homeFeaturedOrder: 2,
    homeTitle: 'Next-Gen Solar X-ray Spectrometer',
    homeRole: 'Postdoctoral Researcher',
    homeProgram: 'NASA H-TIDeS',
  },
  {
    id: 'hope-lws',
    title: 'HOPE Solar Flare Nowcasting',
    role: 'Postdoctoral Researcher',
    program: 'NASA Living With a Star (LWS) Science',
    years: 'Submitted/Pending',
    summary:
      'Hot Onset Precursor Event (HOPE) flare-onset physics and nowcasting methods, including a submitted/pending NASA LWS Science proposal on flare precursors as predictors of extreme solar events (PI: Bennet Schwab).',
    href: '/research/hope',
    homeFeatured: true,
    homeFeaturedOrder: 3,
    homeTitle: 'Solar Flare Nowcasting',
    homeRole: 'Postdoctoral Researcher',
    homeProgram: 'NASA LWS',
  },
  {
    id: 'seushi',
    title: 'SEUSHI',
    role: 'Instrument calibration, integration, and testing',
    program: 'NASA SDO-EVE Calibration Sounding Rocket (Woods 36.406)',
    years: '2024–Present',
    summary:
      'Solar Extreme Ultraviolet Spectrograph and High-energy Imager: multipinhole soft X-ray imaging and grazing-incidence EUV spectroscopy for flare/CME diagnostics, with a technology demonstration in development for the SDO-EVE calibration rocket.',
    href: '/research/seushi',
  },
  {
    id: 'daxss-extended',
    title: 'DAXSS Extended Mission',
    role: 'Postdoctoral Researcher',
    program: 'NASA Heliophysics Division',
    years: '2025–2026',
    amount: '$49,000',
    summary:
      'Awarded DAXSS extended mission for new studies of solar active-region abundance and thermosphere density variations (PI: Thomas N. Woods), continuing soft X-ray spectral analysis from the flown MinXSS / DAXSS instrument.',
    href: '/research/daxss',
  },
];

/**
 * Past Research & Missions — from CV Spaceflight Missions & Instrumentation
 * and awarded PEPPER-X grant. Reverse chronological by end year. No duplicates
 * for spanning programs already listed under Current (DAXSS / SDO-EVE / SunCET present work).
 */
export const pastResearch: PortfolioEntry[] = [
  {
    id: 'pepper-x',
    title: 'PEPPER-X Sounding Rocket Instrument',
    role: 'Instrument Lead / Student Lead',
    program: 'Canadian Space Agency FAST 2023 (Koehler 46.402)',
    years: '2022–2024',
    amount: '$150,000 CAD',
    summary:
      'Payload for Energetic Particle Precipitation Education and Research eXperiment: particle-detector instrument development, integration, and testing; flown 13 August 2024 (PI: David Milling).',
  },
  {
    id: 'radicals',
    title: 'RADICALS',
    role: 'Instrument electronics / microburst detector development',
    program: 'Microsatellite — high-energy particle telescope',
    years: '2022–2024',
    summary:
      'High-energy particle telescope instrument electronics design and microburst detector development for the RADICALS microsatellite mission (CV: in development during 2022–2024).',
  },
  {
    id: 'scoob-ii',
    title: 'SCOOB-II',
    role: 'Flight software / spacecraft integration and testing',
    program: 'Small satellite / CubeSat',
    years: '2022–2023',
    summary:
      'Flight software development and spacecraft integration and testing for the SCOOB-II CubeSat mission (flown).',
  },
  {
    id: 'gaganyaan-tvd1',
    title: 'ISRO Gaganyaan Test Vehicle Demonstration 1 (TV-D1)',
    role: 'Crew module electrical integration and testing',
    program: 'ISRO Human Spaceflight Center',
    years: '2021–2022',
    summary:
      'Crew module electrical integration and testing for Gaganyaan TV-D1 while serving as Scientist/Engineer-SC at HSFC/ISRO; vehicle flown 21 October 2023.',
  },
  {
    id: 'inspiresat-1',
    title: 'INSPIRESat-1',
    role: 'On-board computer design, integration, and testing',
    program: 'Small satellite / CubeSat',
    years: '2018–2022',
    summary:
      'On-board computer design, integration, and testing for the INSPIRESat-1 ionosphere and solar X-ray observing microsatellite (flown).',
  },
  {
    id: 'arcade',
    title: 'ARCADE',
    role: 'Spacecraft interface board / integration',
    program: 'INSPIRESat-4 / VLEO microsatellite',
    years: '2020–2021',
    summary:
      'Spacecraft interface board development and spacecraft integration for ARCADE (flown), a very-low-Earth-orbit mission for atmospheric and ionospheric measurements.',
  },
  {
    id: 'alberta-hept',
    title: 'High Energy Particle Telescope Suite',
    role: 'Graduate Research Assistant',
    program: 'Laser-Plasma Laboratory, University of Alberta',
    years: '2022–2024',
    summary:
      'M.S. research on high-energy particle telescope suite design, including an electron microburst detector and read-out electronics (thesis work under Fedosejevs & Mann).',
  },
  {
    id: 'ntu-sarc',
    title: 'Satellite Research Center visiting scholarship',
    role: 'Visiting Scholar',
    program: 'Nanyang Technological University (NTU-India Connect)',
    years: '2020',
    summary:
      'Visiting scholar at the Satellite Research Center, Nanyang Technological University, Singapore (NTU-India Connect Program).',
  },
  {
    id: 'lasp-intern-2019',
    title: 'LASP summer research internship',
    role: 'Summer Research Intern',
    program: 'Laboratory for Atmospheric and Space Physics',
    years: '2019',
    summary:
      'Summer research internship at LASP, University of Colorado Boulder, prior to graduate studies in heliophysics and space instrumentation.',
  },
];

export const homeFeaturedResearch = currentResearch
  .filter((entry) => entry.homeFeatured)
  .sort((a, b) => (a.homeFeaturedOrder ?? 99) - (b.homeFeaturedOrder ?? 99));

/** Slugs kept in content/ but omitted from public portfolio listings */
export const unlistedResearchSlugs = ['slip-n-slide'] as const;
