---
title: HOPE
subtitle: Hot Onset Precursor Event nowcasting
summary: Statistical soft X-ray studies of flare onsets and nowcasting methods that use HOPE signatures for earlier flare alerts, including machine-learning extensions for high-impact flares.
order: 1
featured: true
placeholder: false
theme: Solar Flare Physics & Nowcasting
status: Active
image: /images/research/hope.svg
collaborators:
  - Thomas N. Woods
  - Bennet D. Schwab
funding: []
---

## Overview

HOPE (Hot Onset Precursor Event) work studies the elevated soft X-ray emission that appears before the impulsive phase of many solar flares, and develops nowcasting methods that use those signatures for earlier flare alerts. Analysis draws on Dual-zone Aperture X-ray Solar Spectrometer (DAXSS) spectra and GOES X-Ray Sensor (GOES-XRS) irradiance records.

Primary papers:

- Telikicherla, Woods & Schwab, *The Astrophysical Journal*, 993, 95 (2025); [DOI 10.3847/1538-4357/ae0705](https://doi.org/10.3847/1538-4357/ae0705); [arXiv:2509.05234](https://arxiv.org/abs/2509.05234)
- Telikicherla, Woods & Schwab, *The Astrophysical Journal*, 966, 198 (2024); [DOI 10.3847/1538-4357/ad37f6](https://doi.org/10.3847/1538-4357/ad37f6)
- Telikicherla et al., *Solar Physics*, 301, 110 (2026); [DOI 10.1007/s11207-026-02705-2](https://doi.org/10.1007/s11207-026-02705-2)

## Motivation

Operational flare alerts based on GOES-XRS flux thresholds are typically issued only once a flare is already in its impulsive phase. HOPE research aims to characterize pre-impulsive plasma evolution and to evaluate whether HOPE signatures can provide earlier warnings useful for high-frequency communications operators and targeted flare observing campaigns.

## Approach

As reported in the peer-reviewed papers:

- Spectral fitting of DAXSS soft X-ray observations with Astrophysical Plasma Emission Code (APEC) models to derive plasma temperature, emission measure (EM), and low-FIP elemental abundance factors during flare onset.
- Isothermal temperature and EM estimates from GOES-XRS channel ratios.
- Statistical analysis of HOPE phases across DAXSS and GOES flare samples, including AIA 193 Å context for onset loop morphology (“one-loop” and “two-loop” onsets in the 2024 ApJ study).
- A HOPE-based nowcasting algorithm on GOES-XRS (2025 ApJ), later extended with a multilayer perceptron model trained to estimate flare peak magnitude and peak time for high-impact (>M5.0) flares (2026 *Solar Physics*).

## Results / Impact

Published findings include elevated temperatures (about 10–15 MK) and order-of-magnitude EM increases during HOPE before the impulsive phase; elemental abundance factors that evolve from coronal toward photospheric values as flares progress; and HOPE-based nowcasting that, in the reported GOES tests, produced flare alerts minutes ahead of peak (and, in the ML study’s one-week proof-of-concept, detected all four >M5.0 flares with an average lead time of 17.9 minutes relative to the NOAA R3 radio-blackout alert). Ongoing work continues to refine HOPE detection and nowcasting for space-weather applications.

## Selected publications & links

- Telikicherla et al., “Advancing Solar Flare Nowcasting with Machine Learning Based Detection of Hot Onset Precursor Events,” *Solar Physics* 301, 110 (2026). [DOI](https://doi.org/10.1007/s11207-026-02705-2)
- Telikicherla, Woods & Schwab, “Improving Solar Flare Nowcasting with the Hot Onset Precursor Event Technique,” *ApJ* 993, 95 (2025). [DOI](https://doi.org/10.3847/1538-4357/ae0705) · [arXiv](https://arxiv.org/abs/2509.05234)
- Telikicherla, Woods & Schwab, “Investigating the Soft X-Ray Spectra of Solar Flare Onsets,” *ApJ* 966, 198 (2024). [DOI](https://doi.org/10.3847/1538-4357/ad37f6)

## Collaborators

See collaborator list in the page frontmatter (core HOPE ApJ coauthors). Related ML nowcasting coauthors appear on the 2026 *Solar Physics* paper.
