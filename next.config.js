/** @type {import('next').NextConfig} */
// const {PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: 'mudasir',
    mongodb_password:'WhN5MMGOKQQnbuZT',
    mongodb_cluster:'cluster0',
    mongodb_database:'next-blogs',
  }
}
module.exports = nextConfig
