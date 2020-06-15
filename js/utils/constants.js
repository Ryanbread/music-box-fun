// These are constants that we use in multiple places in the app

const QUARTER_BAR_GAP = 48; // Pixel distance between the black quarter note bars.
const EIGHTH_BAR_GAP = 24; // Pixel distance between the gray eighth note bars.
const STANDARD_HOLE_RADIUS = 8; // Used only in calculations on stored note data.

// We need this because the original app had no tempo slider, so it's used as a
// fallback for the songs that were saved without any tempo data.
const DEFAULT_TEMPO = 110;

export {
  QUARTER_BAR_GAP,
  EIGHTH_BAR_GAP,
  STANDARD_HOLE_RADIUS,
  DEFAULT_TEMPO
}
