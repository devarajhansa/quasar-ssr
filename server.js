// server.js (Place in your repository root)
const path = require('path');

// Dynamically require Quasar's compiled production bundle
const ssrAppPath = path.join(__dirname, 'dist', 'ssr', 'index.js');

try {
  console.log(`Forwarding boot sequence to Quasar SSR: ${ssrAppPath}`);
  require(ssrAppPath);
} catch (error) {
  console.error("Failed to boot Quasar SSR bundle:", error);
  process.exit(1);
}
