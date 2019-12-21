const SONGS = [
  {
    img: "https://img.youtube.com/vi/P57u7-LwBfI/mqdefault.jpg",
    title: "Etude of a Songbird",
    source: "Breathe",
    composer: "Laura Platt",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/6tZPKke2ugI/mqdefault.jpg",
    title: "Goodbye To A World",
    source: "Porter Robinson",
    composer: "Porter Robinson",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/EerhhZ8cZtw/mqdefault.jpg",
    title: "Perfume",
    source: "fusq",
    composer: "fusq",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/c54P5qA-UP0/mqdefault.jpg",
    title: "Hot Milk",
    source: "Snail's House",
    composer: "Snail's House",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/tJBtuw2Q75c/mqdefault.jpg",
    title: "Super Animal Theme",
    source: "Super Animal Royale",
    composer: "Jake Butineau",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/tOOwaMhC0BQ/mqdefault.jpg",
    title: "Exhale",
    source: "Celeste",
    composer: "Lena Raine",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/xJxFl-mcK9U/mqdefault.jpg",
    title: "Sweet Sweet Canyon",
    source: "Mario Kart 8",
    composer: "Shiho Fujii",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/gH8vd4PpUJ0/mqdefault.jpg",
    title: "Marble Soda",
    source: "Shawn Wasabi",
    composer: "Shawn Wasabi",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/iTUHx6kS7ws/mqdefault.jpg",
    title: "Right Now",
    source: "The Living Tombstone",
    composer: "The Living Tombstone",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/5YkPSWIOViM/mqdefault.jpg",
    title: "RISE",
    source: "League of Legends Worlds 2018",
    composer: "The Glitch Mob, Mako and The Word Alive",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/rTiGD4jm67M/mqdefault.jpg",
    title: "Catgroove (Piano Cover)",
    source: "PandaTooth x LyricWulf",
    composer: "Parov Stelar",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/Wo4zW5MsBWs/mqdefault.jpg",
    title: "Ready as I'll Ever Be",
    source: "Tangled: The Series",
    composer: "Alan Menken",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/shi3yv-9n54/mqdefault.jpg",
    title: "Fish",
    source: "JonKaGor",
    composer: "JonKaGor",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/iA7QEtwgti0/mqdefault.jpg",
    title: "Rush Lyric",
    source: "LyricWulf",
    composer: "Sheet Music Boss",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/YqM2xuqQqm4/mqdefault.jpg",
    title: "We Deserve to Shine",
    source: "Steven Universe",
    composer: "Rebecca Sugar",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/LDK8i9pjtqs/mqdefault.jpg",
    title: "Moonsetter",
    source: "Homestuck",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/6rNG3ixpfEo/mqdefault.jpg",
    title: "Bubble Tea",
    source: "dark cat",
    composer: "dark cat",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/Uj77rXONpJ0/mqdefault.jpg",
    title: "PokéMart Theme",
    source: "Pokémon Ruby/Sapphire/Emerald",
    composer: "Go Ichinose",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/9cj4BHlZ2UQ/mqdefault.jpg",
    title: "PAW Patrol Theme",
    source: "PAW Patrol",
    composer: "Little Ditto",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/CP6VZENSe5w/mqdefault.jpg",
    title: "An Unwavering Heart",
    source: "Pokemon X/Y",
    composer: "Shota Kageyama",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/FentCyS1O5k/mqdefault.jpg",
    title: "Hello World",
    source: "Louie Zong",
    composer: "Louie Zong",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/XGYyEiAjBf8/mqdefault.jpg",
    title: "Ruby Rider",
    source: "Steven Universe",
    composer: "Jeff Liu",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/9jHUBuEZHbI/mqdefault.jpg",
    title: "Tribe of Heavenly Kami",
    source: "Ōkami",
    composer: "Rei Kondo",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/f_jjy5BlgjE/mqdefault.jpg",
    title: "Little One",
    source: "Detroit: Become Human",
    composer: "Philip Sheppard",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/yR7ahR5ouZI/mqdefault.jpg",
    title: "Dramophone",
    source: "Caravan Palace",
    composer: "Caravan Palace",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/otW95iPB_LY/mqdefault.jpg",
    title: "Odd Future",
    source: "My Hero Academia OP 4",
    composer: "Yuki Hayashi",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/itQD8B90tTk/mqdefault.jpg",
    title: "Arstotzkan Anthem",
    source: "Papers, Please Main Theme",
    composer: "Lucas Pope",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/gF-9APdJkcI/mqdefault.jpg",
    title: "Pixel Galaxy",
    source: "Snail's House",
    composer: "Snail's House",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/4cI8JtjIMzo/mqdefault.jpg",
    title: "YIAY (Piano Remix)",
    source: "Jacksfilms",
    composer: "Jacksfilms",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/RxIrtUvr9G4/mqdefault.jpg",
    title: "Through the Fire and Flames",
    source: "Dragonforce",
    composer: "Dragonforce",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/4nGZDidTTz8/mqdefault.jpg",
    title: "Mii Plaza",
    source: "Mii Channel Theme",
    composer: "Kazumi Totaka",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/QyCsLINxijc/mqdefault.jpg",
    title: "The Eevee Song",
    source: "Random Encounters",
    composer: "Random Encounters",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/m6-yxp2Cygg/mqdefault.jpg",
    title: "Issun's Theme",
    source: "Okami",
    composer: "Hiroshi Yamaguchi",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/XOxowDPJBt8/mqdefault.jpg",
    title: "Blueshift",
    source: "Exurb1a",
    composer: "Exurb1a",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/GegS8INc3ps/mqdefault.jpg",
    title: "Parasailing Minigame",
    source: "Breath of the Wild",
    composer: "Manaka Kataoka",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/DhljN7BbEas/mqdefault.jpg",
    title: "No Surprises (Piano Stride)",
    source: "Westworld",
    composer: "Ramin Djawadi",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/gXIvln7Kwrg/mqdefault.jpg",
    title: "Cold",
    source: "RWBY",
    composer: "Jeff Williams",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/ORapqw2ru4M/mqdefault.jpg",
    title: "Shelter",
    source: "Porter Robinson & Madeon",
    composer: "Porter Robinson & Madeon",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/3OKSroKAK88/mqdefault.jpg",
    title: "Believer",
    source: "Imagine Dragons",
    composer: "Imagine Dragons",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/10Ry2uOnXoo/mqdefault.jpg",
    title: "The Dog Wrestler Waltz",
    source: "Exurb1a",
    composer: "Exurb1a",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/RQmQ3xBoGeo/mqdefault.jpg",
    title: "The Wolf",
    source: "SIAMÉS",
    composer: "SIAMÉS",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/51aAXlEfwYg/mqdefault.jpg",
    title: "Battle! Zinnia",
    source: "Pokemon ORAS",
    composer: "Shota Kageyama",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/y8ok8geXiNk/mqdefault.jpg",
    title: "Otter Pop",
    source: "Shawn Wasabi",
    composer: "Shawn Wasabi",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/tXFPo6LXfuU/mqdefault.jpg",
    title: "Phase 2",
    source: "Disbelief Papyrus",
    composer: "JimmyTheBassist",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/Gx47FE1Soww/mqdefault.jpg",
    title: "Lone Digger",
    source: "‹ |°_°| ›",
    composer: "Caravan Palace",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/rBeang8p74I/mqdefault.jpg",
    title: "Demolitale Main Theme",
    source: "Demolitale",
    composer: "LyricWulf",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/61WsFfTzOQg/mqdefault.jpg",
    title: "The Calm",
    source: "LyricWulf Original Song",
    composer: "Wulfenite",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/JG-ujtkrdOg/mqdefault.jpg",
    title: "Ironic",
    source: "Words Words Words",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/QQB1OKkMda4/mqdefault.jpg",
    title: "Forlorn",
    source: "Undertale Yellow",
    composer: "MyNewSoundtrack, Master Sword",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/WjyOEdFn4qg/mqdefault.jpg",
    title: "Final Chance",
    source: "Undertale AU",
    composer: "Fanmade UNDERTALE AU",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/7GwtK2DXbFk/mqdefault.jpg",
    title: "Aviator",
    source: "OneShot Soundtrack",
    composer: "Nightmargin",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/jwjPmjqcFTI/mqdefault.jpg",
    title: "Moonmen",
    source: "Pocket Mortys OST",
    composer: "Ryan Elder",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/5HZEorKnWcM/mqdefault.jpg",
    title: "MOGOLOVONIO.MP3",
    source: "april fool to you",
    composer: "SR POLO & TOBO FOOX",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/2vq--uOOpwM/mqdefault.jpg",
    title: "Niko and the World Machine",
    source: "OneShot Soundtrack",
    composer: "Nightmargin (Casey Gu)",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/p28uVJ_7tWY/mqdefault.jpg",
    title: "To the Gateway",
    source: "Super Mario Galaxy",
    composer: "Mahito Yokota",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/FD-ictCbjJA/mqdefault.jpg",
    title: "We Are Number One",
    source: "LazyTown",
    composer: "MÃ¡ni Svavarsson",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/4k2DZw5S1cs/mqdefault.jpg",
    title: "Underline",
    source: "Fanmade UNDERTALE AU",
    composer: "Xalia",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/AB08g5EEcjI/mqdefault.jpg",
    title: "MegaloVania FANDOM MEDLEY",
    source:
      "Fanmade UNDERTALE AU, Homestuck, Gravity Falls, Smash, FNAF, Doctor Who, Steven Universe, Adventure Time, Gumball, and Star vs. the Forces of Evil!",
    composer: "Yan Ade",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/HaNAOj32TfE/mqdefault.jpg",
    title: "ewe",
    source: "LyricWulf Original Composition",
    composer: "LyricWulf",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/29_Ti5xVBEI/mqdefault.jpg",
    title: "Champion Cynthia",
    source: "PokÃ©mon Diamond & PokÃ©mon Pearl: Super Music Collection",
    composer: "Go Ichinose",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/cHLhC8Od5JU/mqdefault.jpg",
    title: "Waterfall",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/jo1mvfNW630/mqdefault.jpg",
    title: "Karla's Lullaby",
    source: "Words",
    composer: "Louie Zong",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/se7K-3eHMjo/mqdefault.jpg",
    title: "Fourteen Residents",
    source: "OFF",
    composer: "Alias Conrad Coldwood",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/JBWMn3CdPN8/mqdefault.jpg",
    title: "HYPNOTIK",
    source: "KiseijÅ« Sei no Kakuritsu (Parasyte -the maxim-)",
    composer: "Ken Arai",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/X2N3XvZCpIc/mqdefault.jpg",
    title: "Supermoon",
    source: "No Man's Sky: Music for an Infinite Universe",
    composer: "65daysofstatic",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/kyoTZQ-VSt4/mqdefault.jpg",
    title: "Again",
    source: "Shigatsu wa Kimi no Uso (Your Lie in April)",
    composer: "Masaru Yokoyama",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/2-cFJEqIrVk/mqdefault.jpg",
    title: "Just 3 Days",
    source: "Majora's Mask Song",
    composer: "MandoPony",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/waLTe4j4LjE/mqdefault.jpg",
    title: "Amarillo",
    source: "The Fall",
    composer: "Gorillaz",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/C3SykOb6aqo/mqdefault.jpg",
    title: "Land of Hints",
    source: "LISA the Joyful Soundtrack",
    composer: "Widdly 2 Diddly",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/spIWGAnp_3w/mqdefault.jpg",
    title: "#Deep [Piano]",
    source: "what.",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/KkVff0gxC2c/mqdefault.jpg",
    title: "#Deep [Piano and Voice]",
    source: "what.",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/FoEB9mgrMzI/mqdefault.jpg",
    title: "Wishing",
    source:
      "Re:Zero kara Hajimeru Isekai Seikatsu (Starting Life in Another World)",
    composer: "Hige Driver, Ayato Shinozaki",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/lPbxlkO3KVE/mqdefault.jpg",
    title: "Edgy Sans is Edgy",
    source: "Fanmade UNDERTALE AU",
    composer: "Jeffrey Watkins",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/ope9jAWeu80/mqdefault.jpg",
    title: "How Far I'll Go",
    source: "Moana (Original Motion Picture Soundtrack)",
    composer: "Lin-Manuel Miranda",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/oAWO56Bl5FA/mqdefault.jpg",
    title: "Lazy Afternoons",
    source: "Kingdom Hearts Piano Collections",
    composer: "Yoko Shimomura, Sachiko Miyano",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/7HtaJKneBMk/mqdefault.jpg",
    title: "Sugar Coma Foxtrot",
    source: "HOME OST",
    composer: "xLightningWolFx",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/wOWe33No8m0/mqdefault.jpg",
    title: "Death by Glamour",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/q_JvkaHLPvQ/mqdefault.jpg",
    title: "Let It Be",
    source: "Miracle",
    composer: "Blackmill",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/0C5xp2WKKdM/mqdefault.jpg",
    title: "Heartache",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/2PtQZlbp5CY/mqdefault.jpg",
    title: "Battle Against a True Parent",
    source: "Fanmade UNDERTALE AU",
    composer: "Whirligig231",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/3ud93T3-Mgs/mqdefault.jpg",
    title: "Bonetrousle (Underswap)",
    source: "Fanmade UNDERTALE AU",
    composer: "nerdylizardeperson",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/ghwlmbHDQMw/mqdefault.jpg",
    title: "Mother Earth",
    source: "Mother 1+2",
    composer: "Hirokazu Tanaka",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/CGBLjkg2-_8/mqdefault.jpg",
    title: "Outset Island",
    source: "The Legend of Zelda: The Wind Waker",
    composer: "Kenta Nagata, Hajime Wakai, Toru Minegishi, Koji Kondo",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/KmBiqJCpGUU/mqdefault.jpg",
    title: "Backbone",
    source: "Fanmade UNDERTALE AU",
    composer: "Sean Evans [Lone]",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/_Dda2PebeIA/mqdefault.jpg",
    title: "Bonetrousle",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/-wZHV13hrvc/mqdefault.jpg",
    title: "Fox's Forgotten Love, Krystal",
    source: "Star Fox Command",
    composer: "Hajime Wakai",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/zF6R3bMRWOU/mqdefault.jpg",
    title: "Showtime (Piano Refrain)",
    source: "Homestuck Vol. 1â€‹-â€‹4",
    composer: "Malcolm Brown, Kevin Regamey",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/qyIXXFL3I2w/mqdefault.jpg",
    title: "Thundersnail",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/3qqfUe_-jZA/mqdefault.jpg",
    title: "He's My Dad",
    source: "LISA the Joyful Soundtrack",
    composer: "Widdly 2 Diddly",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/MZdogDXQJm0/mqdefault.jpg",
    title: "art is dead. [Piano]",
    source: "Words Words Words",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/Rn0Zso6u7mI/mqdefault.jpg",
    title: "Nyeh Heh Heh! & Bonetrousle",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/BSg0UD51Rhs/mqdefault.jpg",
    title: "art is dead. [Piano and Voice]",
    source: "Words Words Words",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/_Xr-hIdP_yQ/mqdefault.jpg",
    title: "Unnecessary Tension",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/P6nz4-PHQbk/mqdefault.jpg",
    title: "Wrong Enemy ?!",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/MrN4UpxhsxE/mqdefault.jpg",
    title: "Live & Death Report",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/sYOF1eJiZtk/mqdefault.jpg",
    title: "She's Playing Piano",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/GuLhZRzAlzc/mqdefault.jpg",
    title: "Snow Fairy",
    source: "Fairy Tail",
    composer: "FUNKIST, NateWantsToBattle",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/ZKYIylDO5_I/mqdefault.jpg",
    title: "Oh! One True Love",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/uGQTVGUso9k/mqdefault.jpg",
    title: "Gourmet Race",
    source: "Kirby Super Star",
    composer: "Jun Ishikawa, Dan Miyakawa",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/ok3O805bfAM/mqdefault.jpg",
    title: "Lower Your Expectations [Piano]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/bu5SF_xk8bw/mqdefault.jpg",
    title: "Histrousle",
    source: "Fanmade UNDERTALE AU",
    composer: "Keno9988ii",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/2pLJ00yWlZo/mqdefault.jpg",
    title: "Ori, Lost in the Storm",
    source: "Ori and the Blind Forest (Original Soundtrack)",
    composer: "Gareth Coker",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/gcxKvYdDH4A/mqdefault.jpg",
    title: 'Power of "NEO" (IKARUS Remix)',
    source: "Fanmade UNDERTALE AU",
    composer: "IKarus",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/1PiX8y04ibo/mqdefault.jpg",
    title: "Battle Against a True Hero",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/T5pbrjMSxjs/mqdefault.jpg",
    title: "Are You Happy? [Piano]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/MY9Y7GUZS4o/mqdefault.jpg",
    title: "Straight White Male [Piano]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/sQEihEB-Tfo/mqdefault.jpg",
    title: "Kill Yourself [Piano]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/otmmT7A3zGw/mqdefault.jpg",
    title: "Sad [Piano]",
    source: "what.",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/OOpgiEP8xfc/mqdefault.jpg",
    title: "Drop Pop Candy",
    source: "No Title+",
    composer: "Giga-P",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/oKhE908PdXY/mqdefault.jpg",
    title: "Lower Your Expectations [Piano and Voice]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/GQk9uK1DDnM/mqdefault.jpg",
    title: "Battle Theme",
    source: "Final Fantasy X",
    composer: "Nobuo Uematsu",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/QERryArA4qo/mqdefault.jpg",
    title: "Technolight",
    source: "LyricWulf Original Composition",
    composer: "LyricWulf",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/tnFtK9lcJTs/mqdefault.jpg",
    title: "Kill Yourself [Piano and Voice]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/27OZgSe7WJM/mqdefault.jpg",
    title: "Disbelief",
    source: "Fanmade UNDERTALE AU",
    composer: "ROCK CANDY (DBOYD x KOMMISAR)",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/rKPuSjB1VZI/mqdefault.jpg",
    title: "Are You Happy? [Piano and Voice]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/9br9mVz9KaY/mqdefault.jpg",
    title: "With Your Drillâ€¦",
    source: "Tengen Toppa Gurren Lagann OST 1",
    composer: "Taku Iwasaki",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/VV1PCUJm8lU/mqdefault.jpg",
    title: "Quiet Water",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/94seJuUBe-E/mqdefault.jpg",
    title: "Bird That Carries You Over a Disproportionately Small Gap",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/c7FVeokCIW4/mqdefault.jpg",
    title: "Stronger Than You",
    source: "FUSION MIXTAPE",
    composer: "Rebecca Sugar",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/Uu777jQw8vU/mqdefault.jpg",
    title: "Straight White Male [Piano and Voice]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/G3tWQxI-dPo/mqdefault.jpg",
    title: "Metal Crusher",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/CFGDAnelVDE/mqdefault.jpg",
    title: "Sad [Piano and Voice]",
    source: "what.",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/ZzlSOBzOTOI/mqdefault.jpg",
    title: "Believe Me",
    source: "Steins;Gate",
    composer: "Takeshi Abo",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/Vr0JrIQ8yvY/mqdefault.jpg",
    title: "Why Am I So Happy?",
    source: "Why Am I So Happy?",
    composer: "Spose",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/q8kvvAVUivU/mqdefault.jpg",
    title: "Prove It All",
    source: "LyricWulf Original Composition",
    composer: "LyricWulf",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/ageNKR7g55g/mqdefault.jpg",
    title: "Once Upon a Time",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/-7M0CQ0fuV4/mqdefault.jpg",
    title: "Alphys Takes Action",
    source: "Fanmade UNDERTALE AU",
    composer: "coffE K",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/y3iiJldFZ-Y/mqdefault.jpg",
    title: "Alphys",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/KlqxVi4UPb4/mqdefault.jpg",
    title: "Amalgam",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/A47tIVw-ts0/mqdefault.jpg",
    title: "Fighting",
    source: "Final Fantasy VII",
    composer: "Nobuo Uematsu",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/3jNvph5ovtM/mqdefault.jpg",
    title: "Rocket Jump Waltz",
    source: "Team Fortress 2 Official Soundtrack",
    composer: "Mike Morasky",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/-7kwk7RxAYY/mqdefault.jpg",
    title: "sans.",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/-1jOzmNOlpA/mqdefault.jpg",
    title: "Dark, Darker, Yet Darker",
    source: "Fanmade UNDERTALE AU",
    composer: "The Great Anansi",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/FlC51eUBIRM/mqdefault.jpg",
    title: "Respite",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/4YklRbdcdT0/mqdefault.jpg",
    title: "Spider Dance",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/Eo4vEkao_88/mqdefault.jpg",
    title: "Sweet Sugar Love",
    source: "Phyrnna",
    composer: "Phyrnna",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/vtJiP3aI6IQ/mqdefault.jpg",
    title: "Megalo Strike Back",
    source: "I Miss You - EarthBound 2012",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/yZprr3ImCiY/mqdefault.jpg",
    title: "Song That Might Play When You Fight Sans",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/96KzZ_O_nr8/mqdefault.jpg",
    title: "Cold (Short Version)",
    source: "RWBY",
    composer: "Jeff Williams",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/wCsCLdepGyQ/mqdefault.jpg",
    title: "Ooo",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/Q2ED9U5eudI/mqdefault.jpg",
    title: "Spooky Scary Skeletons",
    source: "Halloween Howls",
    composer: "Andrew Gold",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/Zb1K1FZ68zo/mqdefault.jpg",
    title: "Memory",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/P6lBwJbEWGc/mqdefault.jpg",
    title: "Here We Are",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/V_pKFcImjbg/mqdefault.jpg",
    title: "Friendship",
    source: "toby fox",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/eCX3OkOzR0M/mqdefault.jpg",
    title: "Walking by the sea",
    source: "Deemo, Vol.2",
    composer: "Edmud Fu",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/mMJN4pcmTcg/mqdefault.jpg",
    title: "Stronger Monsters",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/uNIEWzo7Wj4/mqdefault.jpg",
    title: "Finale",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/PZvk-hz7Ik8/mqdefault.jpg",
    title: "Dancing Mad 5th Movement",
    source: "Final Fantasy VI",
    composer: "Nobuo Uematsu",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/dKkRaBwsyBQ/mqdefault.jpg",
    title: "MEGALOVANIA",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/vuAVdxWMPPE/mqdefault.jpg",
    title: "Try Everything",
    source: "Zootopia",
    composer: "Shakira",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/X1xltv1OIwM/mqdefault.jpg",
    title: "His Theme",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/OugKuIXt9ig/mqdefault.jpg",
    title: "It's Raining Somewhere Else",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/HtCjh8iZpJI/mqdefault.jpg",
    title: "Fallen Down (Reprise)",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/kflpz9uU99Q/mqdefault.jpg",
    title: "Bergentrückung & ASGORE",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/pL-8ChSS4v4/mqdefault.jpg",
    title: "Final Power",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/yix8tQ13Ohs/mqdefault.jpg",
    title: "Run!",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/nMVE_YGD4wg/mqdefault.jpg",
    title: "Snowy",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/kP2Yt1j5O34/mqdefault.jpg",
    title: "An Ending",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/J9-yo3j6erk/mqdefault.jpg",
    title: "Sigh of Dog",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/5gMBfKNGXww/mqdefault.jpg",
    title: "Snowdin Town",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/R97Eo63W0l8/mqdefault.jpg",
    title: "Anticipation & Enemy Approaching",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/Yuxees4a4DE/mqdefault.jpg",
    title: "Hopes and Dreams & Last Goodbye",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/EEl6Cql0LWk/mqdefault.jpg",
    title: "Where",
    source: "LyricWulf Original Composition",
    composer: "LyricWulf",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/1NqEVEAgigA/mqdefault.jpg",
    title: "We Are the Crystal Gems",
    source: "Steven Universe",
    composer: "Rebecca Sugar, Aivi & Surasshu",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/vyAY78lb9bU/mqdefault.jpg",
    title: "Randall [Piano]",
    source: "Brave Frontier",
    composer: "Hikoshi Hashimoto",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/FcNIleFnRK4/mqdefault.jpg",
    title: "Randall [Full Score]",
    source: "Brave Frontier",
    composer: "Hikoshi Hashimoto",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/-zMlycr-LJo/mqdefault.jpg",
    title: "Chasing Cars",
    source: "Eyes Open",
    composer: "Snow Patrol",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/HOT7YZpl8xM/mqdefault.jpg",
    title: "Kimi wa Wasurerareru no",
    source: "Shigatsu wa Kimi no Uso (Your Lie in April)",
    composer: "Masaru Yokoyama",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/TrpCK0Q6wAY/mqdefault.jpg",
    title: "Sister Rust",
    source: "Lucy",
    composer: "Damon Albarn",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/CXqJhS0vmxA/mqdefault.jpg",
    title: "Last Battle ",
    source: "Cave Story",
    composer: "Daisuke Amaya",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/f2qlB-kRj5c/mqdefault.jpg",
    title: "Blackout",
    source: "Hell Is What You Make It",
    composer: "Breathe Carolina",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/Kei-nTdHuaA/mqdefault.jpg",
    title: "Home of the Blues",
    source: "Owl City Cover",
    composer: "Owl City",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/p3-MYUxTsic/mqdefault.jpg",
    title: "ReWel",
    source: "Catalyst",
    composer: "Tristam & Rogue",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/KjdbqrUI-KE/mqdefault.jpg",
    title: "InGame Theme",
    source: "Castles II: Siege and Conquest",
    composer: "Charles Deenen",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/2SJOboPkRgY/mqdefault.jpg",
    title: "Hero's End",
    source: "Cave Story",
    composer: "Daisuke Amaya",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/iXndMLBSNGQ/mqdefault.jpg",
    title: "Quantus",
    source: "LyricWulf Original Composition",
    composer: "LyricWulf",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/z5j_rI3JeSQ/mqdefault.jpg",
    title: "Unused Track 1",
    source: "Clannad",
    composer: "Shinji Orito",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/594VKbWySFU/mqdefault.jpg",
    title: "Gypsy Dance",
    source: "Joseph Compello",
    composer: "Joseph Compello",
    transcriber: "LyricWulf"
  },
  {
    img: "https://img.youtube.com/vi/ysWv8SJ0bDk/mqdefault.jpg",
    title: "Shy Violet",
    source: "All Things Bright and Beautiful",
    composer: "Owl City",
    transcriber: "LyricWulf"
  }
];

export default SONGS;
