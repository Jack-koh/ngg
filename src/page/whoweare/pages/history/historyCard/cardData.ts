const cardData = [
  {
    id: 'no1',
    type: 'inn',
    title: 'OUR STORY<br/>BEGINS',
    img: 'timelineImage01',
    year: '1885',
    contentTitle: 'OUR STORY BEGINS',
    desc:
      'In early January 1888, a number of prominent gentlemen in Washington, D.C.’s scientific and intellectual circles received a small invitation. It read: <br/><br/> DEAR SIR: You are invited to be present at a meeting to be held in the Assembly Hall of the Cosmos Club, on Friday evening, January 13, at 8 o’clock P. M., for the purpose of considering the advisability of organizing a society for the increase and diffusion of geographical knowledge. ',
  },
  {
    id: 'no2',
    type: 'dis',
    title: 'REACHING FOR<br/>THE POLE',
    img: 'timelineImage02',
    year: '1909',
    contentTitle: 'REACHING FOR THE POLE',
    desc:
      'Despite losing eight toes to frostbite on an earlier attempt, Robert E. Peary led a party of 24 men, 19 sledges, and 133 dogs northward from Cape Columbia in Canada. On April 1, 1906, near the 88th parallel, his final support party turned back, and Peary and two Inuit Eskimo continued on. <br/><br/>Peary returned to announce his discovery, only to learn that five days earlier a former team member, Frederick A. Cook, had proclaimed a 1908 visit to the North Pole. National Geographic’s first review of Peary’s documentation found his claim to be credible, though many doubted his claim from the outset. ',
  },
  {
    id: 'no3',
    type: 'orga',
    title: 'A WORLD<br/>IN COLOR',
    img: 'timelineImage03',
    year: '1914',
    contentTitle: 'A WORLD IN COLOR',
    desc:
      'Invented by the Lumière brothers, autochrome was the first commercially available true color process and used dyed potato starch grains spread over a glass plate. National Geographic has over 15,000 of these plates, one of the largest collections in the world. Here are just a few from our collection:<br/><br/>',
  },
  {
    id: 'no4',
    type: 'inn',
    title: 'CARLSBAD<br/>CAVERNS',
    img: 'timelineImage04',
    year: '1924',
    contentTitle: 'CARLSBAD CAVERNS',
    desc:
      'The National Geographic expedition, led by Dr. Willis T. Lee, resulted in the first systematic mapping of Carlsbad Caverns. Lee’s reports, published in National Geographic magazine in January 1924 and September 1925, brought the wonder of the caves to the American public and helped inspire the creation of a new national park.',
  },
  {
    id: 'no5',
    type: 'dis',
    title: 'OUR OCENAN<br/>IN COLOR',
    img: 'timelineImage05',
    year: '1926',
    contentTitle: 'OUR OCEAN IN COLOR',
    desc:
      'National Geographic photographer Charles Martin and marine biologist William H. Longley made history by floating a raft rigged with highly explosive magnesium flash powder above where they were shooting.<br/><br/>When they snapped the shutter of the brass-bound waterproof camera, a battery on the raft triggered the bright magnesium powder explosion, illuminating the sea up to 15 feet below the surface. Longley was burned in the process, but they got their shot!',
  },
  {
    id: 'no6',
    type: 'orga',
    title: 'OLMEC<br/>HEAD',
    img: 'timelineImage06',
    year: '1938',
    contentTitle: 'OLMEC HEADS',
    desc:
      'Archaeologist and ethnologist Matthew W. Stirling received 18 National Geographic grants. Stirling’s investigations into the Olmec civilization, which flourished from roughly 1200 to 400 B.C., centuries before the Classic Maya, would reshape the story of Mesoamerican archaeology.<br/><br/>',
  },
  {
    id: 'no7',
    type: 'inn',
    title: 'WORLD WAR<br/>II',
    img: 'timelineImage07',
    year: '1941',
    contentTitle: 'WORLD WAR II',
    desc:
      'National Geographic supplied U.S. President Franklin Roosevelt and the U.S. armed forces with detailed maps throughout World War II, and made a cabinet of maps for British Prime Minister Winston Churchill just two weeks after the raid on Pearl Harbor. National Geographic also opened its vast files of photographs, numbering more than 300,000 at the time. By comparing prewar aerial photographs with those taken during the war, analysts were able to detect camouflage and gather intelligence.',
  },
  {
    id: 'no8',
    type: 'dis',
    title: 'UNDERWATER<br/>ARCHEAEOLOGY',
    img: 'timelineImage08',
    year: '1961',
    contentTitle: 'UNDERWATER ARCHAEOLOGY',
    desc:
      'Thanks to decades of National Geographic support—including 36 grants—George F. Bass created tools and refined the methods necessary to successfully adapt the techniques of dryland archaeology to seabeds.<br/><br/>Bass was the first to use a submersible and stereophotography to map ancient ships. Over the next three decades, he discovered and explored some of the world’s most important shipwrecks. In the photo above, researchers in a submersible watch as archaeologists gather Greek antiquities from the bottom of the Aegean Sea off the Turkish coast.',
  },
  {
    id: 'no9',
    type: 'orga',
    title: 'FIRST ORBITAL<br/>FLIGHT',
    img: 'timelineImage09',
    year: '1962',
    contentTitle: 'FIRST ORBITAL FLIGHT',
    desc:
      'National Geographic magazine closely covered the American space program from its beginnings. National Geographic even gave the National Aeronautics and Space Administration (NASA) the full-time services of two of its photographers, Dean Conger and Otis Imboden, giving it a quasi-official status with the space program. It was with this role in mind—as well as in recognition of the pioneering contributions to space research made by early stratosphere flights in 1934 and 1935 conducted by National Geographic and the U.S. Army Air Corps—that John Glenn carried the National Geographic flag on his historic space flight.',
  },
  {
    id: 'no10',
    type: 'inn',
    title: 'DIAN<br/>FOSSEY',
    img: 'timelineImage10',
    year: '1967',
    contentTitle: 'DIAN FOSSEY',
    desc:
      'With the encouragement of anthropologist Dr. Louis Leakey and with financing from National Geographic, Dian Fossey spent 18 years studying gorillas, battling poachers, and transforming conservation. Her study revealed gorillas to be shy and sociable creatures rather than feared killers.<br/><br/>In 1967, Fossey established the Karisoke Research Center, a cluster of cabins 10,000 feet high in Rwanda’s cool, misty, lushly forested Virunga Mountains. Her work and life were chronicled in the 1988 film Gorillas in the Mist.',
  },
  {
    id: 'no11',
    type: 'orga',
    title: 'KID<br/>MAGAZINE',
    img: 'timelineImage11',
    year: '1975',
    contentTitle: 'KIDS MAGAZINE',
    desc:
      'The cover of the first issue of National Geographic World<br/><br/><i>COVER PHOTOGRAPH BY CHRISTOPHER SPRINGMANN, COPYRIGHT 1975 NATIONAL GEOGRAPHIC</i><br/><br/>National Geographic Kids magazine, as it was renamed in 2002, has 19 international editions and a readership of over four million kids around the world.',
  },
  {
    id: 'no12',
    type: 'dis',
    title: 'TRAILER<br/>MAGAZINE',
    img: 'timelineImage12',
    year: '1984',
    contentTitle: 'TRAVELER MAGAZINE',
    desc:
      "THERE ARE SOME PARTS OF THE WORLD THAT, ONCE VISITED, GET INTO YOUR HEART AND WON'T GO.<br/><br/>The first issue of National Geographic Traveler brought global destinations closer to avid—and armchair—travelers. January 2018 National Geographic Traveler magazine",
  },
  {
    id: 'no13',
    type: 'inn',
    title: 'SUSTAINABLE<br/>SEAS',
    img: 'timelineImage13',
    year: '1999',
    contentTitle: 'SUSTAINABLE SEAS',
    desc:
      'EVEN IF YOU NEVER HAVE THE CHANCE TO SEE OR TOUCH THE OCEAN, THE OCEAN TOUCHES YOU WITH EVERY BREATH YOU TAKE, EVERY DROP OF WATER YOU DRINK, EVERY BITE YOU CONSUME.<br/><br/>In 1999, Explorer-in-Residence and noted marine biologist Dr. Sylvia Earle launched the Sustainable Seas Expeditions, a five-year project focused on underwater exploration and discovery of the marine world with a special emphasis on the U.S. National Marine Sanctuaries.',
  },
  {
    id: 'no14',
    type: 'dis',
    title: 'MARCH OF<br/>THE PENGUIN',
    img: 'timelineImage14',
    year: '2005',
    contentTitle: 'MARCH OF THE PENGUINS',
    desc:
      'National Geographic, working with Bonne Pioche Productions, produced this feature-length nature documentary depicting the yearly journey of the emperor penguins of Antarctica. It took one year for the two isolated cinematographers Laurent Chalet and Jérôme Maison to shoot the documentary, which was filmed around the French scientific base of Dumont d’Urville in Adélie Land.<br/><br/>In 2006, it won the Academy Award for Best Documentary Feature.',
  },
  {
    id: 'no15',
    type: 'orga',
    title: 'BREAKTHROUGH<br/>FIND',
    img: 'timelineImage15',
    year: '2010',
    contentTitle: 'BREAKTHROUGH FIND',
    desc:
      'In 2008, National Geographic Explorer-at-Large Lee Berger discovered bones dating back nearly two million years near Malapa cave in South Africa. The find pointed to a possible new human ancestor, Australopithecus sediba. Three years later, after exploring the Rising Star cave outside of Johannesburg, Berger announced the discovery of another new species, Homo naledi.<br/><br/>Paleoanthropologist and expedition team leader Berger inside the Rising Star cave outside of Johannesburg, South Africa—the site where H. naledi, a new species of human relative, was discovered',
  },
  {
    id: 'no16',
    type: 'inn',
    title: 'JACQUES<br/>COUSTEAU',
    img: 'timelineImage16',
    year: '2011',
    contentTitle: 'JACQUES COUSTEAU',
    desc:
      'Jacques Cousteau received a total of 37 grants from National Geographic, taking magazine readers along on his expeditions to explore the mysteries of the ocean. His first grant was for the underwater excavation of an ancient cargo ship near Marseille, France. For more than 15 years, National Geographic supported Cousteau’s work in ocean exploration and conservation, inspiring future generations of undersea explorers like Sylvia Earle and Enric Sala.',
  },
  {
    id: 'no17',
    type: 'dis',
    title: 'PRISTINE<br/>SEAS',
    img: 'timelineImage17',
    year: '2012',
    contentTitle: 'PRISTINE SEAS',
    desc:
      'In 2004, Enric Sala, then an associate professor at Scripps Institution of Oceanography, spent his days documenting the decline of the seas, trying to understand why coral reefs were dying and large predators were disappearing. “I felt like a doctor who was providing a description of how the patient was going to die, but not providing a solution,” he says.<br/><br/>As of 2017, Sala and the Pristine Seas team have carried out expeditions in 23 places, 17 of which have since been protected and have helped protect over 2 million square miles of ocean (5.2 million square kilometers).',
  },
  {
    id: 'no18',
    type: 'dis',
    title: 'HUBBARD<br/>MEDAL',
    img: 'timelineImage18',
    year: '2013',
    contentTitle: 'HUBBARD MEDAL',
    desc:
      'In 1906, U.S. President Theodore Roosevelt presented the Society’s Hubbard Medal to its first recipient, Robert E. Peary. Since then, National Geographic has bestowed the award on dozens of other distinguished scientists and explorers. Among them…<br/><br/>Charles Lindbergh receives the Hubbard Medal for his New York-Paris solo flight from U.S. President Calvin Coolidge in 1927.',
  },
  {
    id: 'no19',
    type: 'orga',
    title: 'MONARCH<br/>DISCOVERY',
    img: 'timelineImage19',
    year: '2014',
    contentTitle: 'MONARCH DISCOVERY',
    desc:
      'Husband and wife Fred and Norah Urquhart began studying monarch butterflies in 1937. They were most interested in monarch migration, but after 30 years, they still hadn’t located the wintering grounds of the colorful insects. National Geographic stepped in to support their work for five years. In 1975, Fred, Norah, and a team of volunteers climbed ever higher in Mexico’s Sierra Madre Mountains, reaching the fir forests of the remote Michoacán state, where they found the monarchs in mind-boggling numbers.',
  },
  {
    id: 'no20',
    type: 'inn',
    title: 'OUR FIRST HQ',
    img: 'timelineImage20',
    year: '2014',
    contentTitle: 'OUR FIRST HQ',
    desc:
      'A map from 1913 shows the site of the first National Geographic headquarters (upper right), with horse stables and a Buick Motor Garage nearby.<br/><br/>A photo of Hubbard Hall circa 1910. The building still stands today as part of National Geographic’s Washington, D.C., campus. ',
  },
  {
    id: 'no21',
    type: 'dis',
    title: 'ALEXANDER GRAHAM<br/>BELL',
    img: 'timelineImage21',
    year: '2015',
    contentTitle: 'ALEXANDER GRAHAM BELL',
    desc:
      'Inventor of the telephone and many other breakthroughs, Bell was a technological disrupter of his day. In the photo below, he makes the first long-distance call between New York and Chicago in 1892.<br/><br/>Bell was pivotal in helping inspire and build a scientific organization that was innovative and engaging. In the photo above, he’s shown with his grandson Melville Bell Grosvenor. Bell hired Melville’s father, Gilbert, to expand and improve the National Geographic magazine. ',
  },
  {
    id: 'no22',
    type: 'dis',
    title: 'BIG CATS<br/>INITIATIVE',
    img: 'timelineImage22',
    year: '2016',
    contentTitle: 'BIG CATS INITIATIVE',
    desc:
      'Founded in 2009, the Big Cats Initiative supports efforts to save big cats through assessment, on-the-ground conservation, education, and global public-awareness campaigns. It has funded more than 100 grants across 27 countries, and has helped prevent more than 2,600 big cat mortalities.<br/><br/>Filmmakers, conservationists, and National Geographic Explorers-at-Large Beverly and Dereck Joubert co-founded the Big Cats Initiative.',
  },
  {
    id: 'no23',
    type: 'inn',
    title: 'THE DIGITAL<br/>DOMAIN',
    img: 'timelineImage23',
    year: '2016',
    contentTitle: 'THE DIGITAL DOMAIN',
    desc:
      'The National Geographic homepage as it appeared in 1996. At the time, only one in five Americans used the “World Wide Web.”<br/><br/>The National Geographic magazine landing page in 1996. Today, National Geographic is one of the largest digitally distributed publishing brands of content in the world.',
  },
  {
    id: 'no24',
    type: 'orga',
    title: 'NATIONAL<br/>GEOGRAPHIC<br/>BEE',
    img: 'timelineImage24',
    year: '2016',
    contentTitle: 'NATIONAL GEOGRAPHIC BEE',
    desc:
      'In 1989, National Geographic created the National Geographic Bee because of concern about the lack of geographic knowledge among young people in the United States. Since then, 120 million students have participated in the Bee, and, through the program, $1.6 million in scholarships has been awarded by National Geographic. Below, the first Bee winner, Jack Staddon of Kansas.',
  },
  {
    id: 'no25',
    type: 'dis',
    title: 'PROTECTING<br/>THE OKAVANGO',
    img: 'timelineImage25',
    year: '2017',
    contentTitle: 'PROTECTING THE OKAVANGO',
    desc:
      'In 2015, conservation biologist Steve Boyes and an interdisciplinary team of scientists embarked on the first expedition of the National Geographic Okavango Wilderness Project, a multiyear research and conservation effort to document and protect the vast and largely untouched Okavango River system, one of the planet’s last pristine wetland wildernesses.<br/><br/>Adjany Costa and Paul Skelton collect samples of the fish found in the Cuito River of Angola. The upstream water supply of the Okavango Delta, these waters are more vulnerable than ever to human interference.',
  },
  {
    id: 'no26',
    type: 'orga',
    title: 'EXPANDED<br/>PARTNERSHIP',
    img: 'timelineImage26',
    year: '2017',
    contentTitle: 'EXPANDED PARTNERSHIP',
    desc:
      'In the fall of 2015, National Geographic expanded its partnership with 21st Century Fox, which had operated the National Geographic channels since 1997. The expanded joint venture, called National Geographic Partners, combined National Geographic television channels with other media and consumer enterprises, including National Geographic magazine, as well as books, travel, and other businesses.',
  },
  {
    id: 'no27',
    type: 'orga',
    title: 'SPACE<br/>ARCHEAOLOGY',
    img: 'timelineImage27',
    year: '2018',
    contentTitle: 'SPACE ARCHAEOLOGY',
    desc:
      'In 2017, National Geographic Fellow and “space archaeologist” Sarah Parcak launched GlobalXplorer, a cutting-edge platform that empowers citizen scientists around the world to help reduce looting and encroachment at important archaeological sites—as well as to discover and protect sites not known to modern archaeologists—using satellite imagery. GlobalXplorer’s first expedition was to Peru. <br/><br/>',
  },
];

export default cardData;
