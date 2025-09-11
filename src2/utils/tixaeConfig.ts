export const TIXAE_CONFIG = {
  ID: "5p9958epaf0jwup0",
  region: 'na',
  render: 'bottom-right' as const,
  stylesheets: [
    "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css"
  ]
};

// Add TypeScript types for the global window object
declare global {
  interface Window {
    VG_CONFIG?: typeof TIXAE_CONFIG;
  }
}