// EditSutra website settings, the ONLY file to edit when links and policies are ready.
// Empty values are handled honestly on the page ("opens soon", "will be published"), never faked.
window.SITE = {
  // Production address, e.g. "https://editsutra.dpdns.org/", used for the canonical link and sharing
  url: 'https://rishavm713-create.github.io/editsutra/',
  // SuperProfile checkout page for the ₹999 beta (payment + automatic licence email happen there)
  checkoutUrl: '',
  // Installer downloads (e.g. GitHub Releases links)
  downloads: { mac: 'https://github.com/rishavm713-create/editsutra/releases/download/v1.0.0-beta.1/EditSutra-beta-mac.pkg', windows: 'https://github.com/rishavm713-create/editsutra/releases/download/v1.0.0-beta.1/EditSutra-beta-windows.zip' },
  // Demo: a YouTube video id (e.g. "dQw4w9WgXcQ") or a direct .mp4 path like "assets/demo.mp4"
  demoVideo: '',
  // Support contact shown in the FAQ and footer, e.g. "support@editsutra.in" or a WhatsApp link
  support: 'rishavskillverse@gmail.com',
  // Update policy text once decided, e.g. "All 1.x updates included"
  updatePolicy: 'Lifetime updates included, every future version free',
  // Pro waitlist form address (e.g. a Google Form). Empty = the form emails your support address instead
  waitlistUrl: '',
  // Show the ₹999 announcement bar (turn off when the beta offer ends)
  betaOffer: true,
};
