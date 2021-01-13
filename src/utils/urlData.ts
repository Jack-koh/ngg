export const mainUrls: { title: string; url: string }[] = [
  { title: 'WHO WE ARE', url: '/whoweare' },
  { title: 'EXPLORER', url: '/explorer' },
  { title: 'EXHIBITION', url: '/exhibition' },
  { title: 'PROJECT', url: '/project' },
  { title: 'IMPACT', url: '/impact' },
];

export const subUrls: { [key: string]: { title: string; url: string }[] } = {
  whoweare: [
    { title: 'ABOUT US', url: '/whoweare/aboutus' },
    { title: 'HISTORY', url: '/whoweare/history' },
    { title: 'LEADERSHIP', url: '/whoweare/leadership' },
    { title: 'NEWS ROOM', url: '/whoweare/newsroom' },
  ],
  explorer: [
    { title: 'EXPLORERS', url: '/explorer/explorers' },
    { title: 'FIELD MAP', url: '/explorer/fieldmap' },
    { title: 'EXPLORER BLOG', url: '/explorer/explorerblog' },
  ],
  exhibition: [
    { title: 'VISITOR PLAN', url: '/exhibition/visitorplan' },
    { title: 'EVENT', url: '/exhibition/event' },
    { title: 'EXHIBITION', url: '/exhibition/exhibition' },
  ],
  project: [
    { title: 'BEYOND STONE', url: '/project/beyondstone' },
    { title: 'BIG CAT', url: '/project/bigcat' },
    { title: 'LAST WILD', url: '/project/lastwild' },
    { title: 'YEAR OF BIRD', url: '/project/yearofbird' },
    { title: 'PRISTINE SEAS ', url: '/project/pristineseas' },
  ],
};