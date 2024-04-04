/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true, 
 swcMinifyMode: true, 
 images: {
  remotePatterns: [
   {
    hostname: 'robohash.org'
   }
  ]
 }
};

export default nextConfig;
