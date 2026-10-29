// EditSutra website settings — the ONLY file to edit when links and policies are ready.
// Empty values are handled honestly on the page ("opens soon", "will be published"), never faked.
window.SITE = {
  // Production address, e.g. "https://editsutra.dpdns.org/" — used for the canonical link and sharing
  url: '',
  // SuperProfile checkout page for the ₹999 beta (payment + automatic licence email happen there)
  checkoutUrl: '',
  // Installer downloads (e.g. GitHub Releases links)
  downloads: { mac: '', windows: '' },
  // Demo: a YouTube video id (e.g. "dQw4w9WgXcQ") or a direct .mp4 path like "assets/demo.mp4"
  demoVideo: '',
  // Support contact shown in the FAQ and footer, e.g. "support@editsutra.in" or a WhatsApp link
  support: '',
  // Update policy text once decided, e.g. "All 1.x updates included"
  updatePolicy: '',
  // Show the ₹999 announcement bar (turn off when the beta offer ends)
  betaOffer: true,
};
