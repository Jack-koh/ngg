export const mainUrls: { title: string; url: string }[] = [
  { title: "WHO WE ARE", url: "/whoweare" },
  { title: "EXPLORER", url: "/explorer" },
  { title: "EXHIBITION", url: "/exhibition" },
  { title: "PROJECT", url: "/project" },
  { title: "IMPACT", url: "/impact" },
];

export const subUrls: {
  [key: string]: { title: string; url: string }[];
} = {
  "WHO WE ARE": [
    { title: "ABOUT US", url: "/whoweare/aboutus" },
    { title: "HISTORY", url: "/whoweare/history" },
    { title: "LEADER SHIP", url: "/whoweare/leadership" },
    { title: "NEWS ROOM", url: "/whoweare/newsroom" },
  ],
  EXPLORER: [
    { title: "EXPLORERS", url: "/explorer/explorers" },
    { title: "FIELD MAP", url: "/explorer/fieldmap" },
    { title: "EXPLORER BLOG", url: "/explorer/explorerblog" },
  ],
  EXHIBITION: [
    { title: "VISITOR PLAN", url: "/exhibition/visitorplan" },
    { title: "EXHIBITION", url: "/exhibition/exhibition" },
    { title: "EVENT", url: "/exhibition/event" },
  ],
  PROJECT: [
    { title: "BEYOND STONE", url: "/project/beyondstone" },
    { title: "BIG CAT", url: "/project/bigcat" },
    { title: "LAST WILD", url: "/project/lastwild" },
    { title: "YEAR OF BIRD", url: "/project/yearofbird" },
    { title: "PRISTINE SEAS ", url: "/project/pristineseas" },
  ],
};
