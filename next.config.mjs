/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['development-aio.s3.ap-south-1.amazonaws.com', 'pixabay.com'],
  },
};
export default nextConfig;
