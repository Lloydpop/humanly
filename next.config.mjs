/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos", 
      "images.unsplash.com", // Unsplash
      "plus.unsplash.com",   // sometimes Unsplash uses this subdomain
    ],
  },
};

export default nextConfig;
