/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'zamecnictvi-husak.cz' },
      { protocol: 'https', hostname: 'locksmith-prague.cz' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'cdn.kudyznudy.cz' },
      { protocol: 'https', hostname: 'd15-a.sdn.cz' },
      { protocol: 'https', hostname: 'mestskymajetek.cz' },
      { protocol: 'https', hostname: 'cdn.xsd.cz' },
      { protocol: 'https', hostname: 'info.munipolis.cz' },
      { protocol: 'https', hostname: 'q-xx.bstatic.com' },
      { protocol: 'https', hostname: 'praha.rozhlas.cz' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'gfmswilkobzgudnofdls.supabase.co' },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
