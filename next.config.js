
// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  trailingSlash: true, // Optional: Tambahkan trailing slash ke setiap path
};

module.exports = nextConfig;
