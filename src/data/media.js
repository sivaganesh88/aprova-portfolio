// Central media config. Set VITE_CLOUDINARY_CLOUD_NAME in a .env file (see .env.example).
// Replace the `id` values with your Cloudinary public IDs (e.g. "aprova/weddings/ceremony").
// For local files, put them in public/media/ and use `src: '/media/yourfile.mp4'` instead of `id`.
const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || ''
const T = 'f_auto,q_auto'

export const cld = (id, kind = 'image') =>
  CLOUD ? `https://res.cloudinary.com/${CLOUD}/${kind}/upload/${T}/${id}` : null

const item = (title, tc, { id, src, poster, kind = 'video' }) => ({
  title,
  tc,
  type: kind,
  src: src || (id ? cld(id, kind) : null),
  poster: poster || (id && kind === 'video' ? cld(`${id}.jpg`, 'video') : null),
})

export const reels = {
  WEDDINGS: [
    item('Ceremony, Golden Hour', '00:00:12:04', { id: 'aprova/weddings/ceremony' }),
    item('First Dance, 8mm Grain', '00:01:03:18', { id: 'aprova/weddings/first-dance' }),
    item('Vows & Letters', '00:02:21:09', { id: 'aprova/weddings/vows' }),
  ],
  ADS: [
    item('Studio Product Spot', '00:00:30:00', { id: 'aprova/ads/product-spot' }),
    item('Street Campaign :15', '00:00:15:12', { id: 'aprova/ads/street-campaign' }),
    item('Brand Launch Teaser', '00:00:45:20', { id: 'aprova/ads/launch-teaser' }),
  ],
  'Y2K REEL': [
    item('Camcorder Diary', '00:00:22:07', { id: 'aprova/y2k/camcorder-diary' }),
    item('Tape Loops', '00:01:10:15', { id: 'aprova/y2k/tape-loops' }),
    item('Grid Sequence', '00:00:48:02', { id: 'aprova/y2k/grid-sequence' }),
  ],
}

export const contact = {
  email: 'gsivaganesh9342798166@gmail.com',
  social: '@aprova.films',
  socialUrl: 'https://www.instagram.com/aprova_photography?gwpx=MTZhaXcyYzh5Zmx1eg==',
}
