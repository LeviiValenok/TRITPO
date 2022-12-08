export const MIN_DEVICE_WIDTH = '375px';

// Breakpoints
export const breakPoints = {
  bkMobile: '480px',
  bkTablet: '1180px',
  bkDesktop: '1400px',
};

export const landscapeBreakPoints = {
  bkMobile: '926px',
  bkTablet: '1366px',
};

export const orientationQueries = {
  mqMobilePortrait: `screen and (max-width: ${breakPoints.bkMobile}) and (orientation: portrait)`,
  mqMobileLandscape: `screen and (max-width: ${landscapeBreakPoints.bkMobile}) and (orientation: landscape)`,
  mqTabletPortrait: `screen and (max-width: ${breakPoints.bkTablet}) and (orientation: portrait)`,
  mqTabletLandscape: `screen and (max-width: ${landscapeBreakPoints.bkTablet}) and (orientation: landscape)`,
};

// Media Queries
const mediaQueries = {
  mqMobile: `${orientationQueries.mqMobilePortrait}, ${orientationQueries.mqMobileLandscape}`,
  mqTablet: `${orientationQueries.mqTabletPortrait}, ${orientationQueries.mqTabletLandscape}`,
  mqDesktop: `screen and (max-width: ${breakPoints.bkDesktop})`,
};

export default mediaQueries;
