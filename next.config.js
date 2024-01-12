/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "images.pexels.com",
   
    }],
  },
  
};

const punycode = require('punycode/');
module.exports = nextConfig;
