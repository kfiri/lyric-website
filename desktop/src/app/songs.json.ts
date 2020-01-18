const SONGS = [
  {
    urlId: "etude-of-a-songbird",
    youtubeId: "P57u7-LwBfI",
    title: "Etude of a Songbird",
    source: "Breathe",
    composer: "Laura Platt",
    transcriber: "LyricWulf"
  },
  {
    urlId: "goodbye-to-a-world",
    youtubeId: "6tZPKke2ugI",
    title: "Goodbye To A World",
    source: "Porter Robinson",
    composer: "Porter Robinson",
    transcriber: "LyricWulf"
  },
  {
    urlId: "perfume",
    youtubeId: "EerhhZ8cZtw",
    title: "Perfume",
    source: "fusq",
    composer: "fusq",
    transcriber: "LyricWulf"
  },
  {
    urlId: "hot-milk",
    youtubeId: "c54P5qA-UP0",
    title: "Hot Milk",
    source: "Snail's House",
    composer: "Snail's House",
    transcriber: "LyricWulf"
  },
  {
    urlId: "super-animal-theme",
    youtubeId: "tJBtuw2Q75c",
    title: "Super Animal Theme",
    source: "Super Animal Royale",
    composer: "Jake Butineau",
    transcriber: "LyricWulf"
  },
  {
    urlId: "exhale",
    youtubeId: "tOOwaMhC0BQ",
    title: "Exhale",
    source: "Celeste",
    composer: "Lena Raine",
    transcriber: "LyricWulf"
  },
  {
    urlId: "sweet-sweet-canyon",
    youtubeId: "xJxFl-mcK9U",
    title: "Sweet Sweet Canyon",
    source: "Mario Kart 8",
    composer: "Shiho Fujii",
    transcriber: "LyricWulf"
  },
  {
    urlId: "marble-soda",
    youtubeId: "gH8vd4PpUJ0",
    title: "Marble Soda",
    source: "Shawn Wasabi",
    composer: "Shawn Wasabi",
    transcriber: "LyricWulf"
  },
  {
    urlId: "right-now",
    youtubeId: "iTUHx6kS7ws",
    title: "Right Now",
    source: "The Living Tombstone",
    composer: "The Living Tombstone",
    transcriber: "LyricWulf"
  },
  {
    urlId: "rise",
    youtubeId: "5YkPSWIOViM",
    title: "RISE",
    source: "League of Legends Worlds 2018",
    composer: "The Glitch Mob, Mako and The Word Alive",
    transcriber: "LyricWulf"
  },
  {
    urlId: "-catgroove-piano-cover",
    youtubeId: "rTiGD4jm67M",
    title: "Catgroove (Piano Cover)",
    source: "PandaTooth x LyricWulf",
    composer: "Parov Stelar",
    transcriber: "LyricWulf"
  },
  {
    urlId: "ready-as-ill-ever-be",
    youtubeId: "Wo4zW5MsBWs",
    title: "Ready as I'll Ever Be",
    source: "Tangled: The Series",
    composer: "Alan Menken",
    transcriber: "LyricWulf"
  },
  {
    urlId: "fish",
    youtubeId: "shi3yv-9n54",
    title: "Fish",
    source: "JonKaGor",
    composer: "JonKaGor",
    transcriber: "LyricWulf"
  },
  {
    urlId: "rush-lyric",
    youtubeId: "iA7QEtwgti0",
    title: "Rush Lyric",
    source: "LyricWulf",
    composer: "Sheet Music Boss",
    transcriber: "LyricWulf"
  },
  {
    urlId: "we-deserve-to-shine",
    youtubeId: "YqM2xuqQqm4",
    title: "We Deserve to Shine",
    source: "Steven Universe",
    composer: "Rebecca Sugar",
    transcriber: "LyricWulf"
  },
  {
    urlId: "moonsetter",
    youtubeId: "LDK8i9pjtqs",
    title: "Moonsetter",
    source: "Homestuck",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "bubble-tea",
    youtubeId: "6rNG3ixpfEo",
    title: "Bubble Tea",
    source: "dark cat",
    composer: "dark cat",
    transcriber: "LyricWulf"
  },
  {
    urlId: "pokemart-theme",
    youtubeId: "Uj77rXONpJ0",
    title: "PokéMart Theme",
    source: "Pokémon Ruby/Sapphire/Emerald",
    composer: "Go Ichinose",
    transcriber: "LyricWulf"
  },
  {
    urlId: "paw-patrol-theme",
    youtubeId: "9cj4BHlZ2UQ",
    title: "PAW Patrol Theme",
    source: "PAW Patrol",
    composer: "Little Ditto",
    transcriber: "LyricWulf"
  },
  {
    urlId: "an-unwavering-heart",
    youtubeId: "CP6VZENSe5w",
    title: "An Unwavering Heart",
    source: "Pokemon X/Y",
    composer: "Shota Kageyama",
    transcriber: "LyricWulf"
  },
  {
    urlId: "hello-world",
    youtubeId: "FentCyS1O5k",
    title: "Hello World",
    source: "Louie Zong",
    composer: "Louie Zong",
    transcriber: "LyricWulf"
  },
  {
    urlId: "ruby-rider",
    youtubeId: "XGYyEiAjBf8",
    title: "Ruby Rider",
    source: "Steven Universe",
    composer: "Jeff Liu",
    transcriber: "LyricWulf"
  },
  {
    urlId: "tribe-of-heavenly-kami",
    youtubeId: "9jHUBuEZHbI",
    title: "Tribe of Heavenly Kami",
    source: "Ōkami",
    composer: "Rei Kondo",
    transcriber: "LyricWulf"
  },
  {
    urlId: "little-one",
    youtubeId: "f_jjy5BlgjE",
    title: "Little One",
    source: "Detroit: Become Human",
    composer: "Philip Sheppard",
    transcriber: "LyricWulf"
  },
  {
    urlId: "dramophone",
    youtubeId: "yR7ahR5ouZI",
    title: "Dramophone",
    source: "Caravan Palace",
    composer: "Caravan Palace",
    transcriber: "LyricWulf"
  },
  {
    urlId: "odd-future",
    youtubeId: "otW95iPB_LY",
    title: "Odd Future",
    source: "My Hero Academia OP 4",
    composer: "Yuki Hayashi",
    transcriber: "LyricWulf"
  },
  {
    urlId: "arstotzkan-anthem",
    youtubeId: "itQD8B90tTk",
    title: "Arstotzkan Anthem",
    source: "Papers, Please Main Theme",
    composer: "Lucas Pope",
    transcriber: "LyricWulf"
  },
  {
    urlId: "pixel-galaxy",
    youtubeId: "gF-9APdJkcI",
    title: "Pixel Galaxy",
    source: "Snail's House",
    composer: "Snail's House",
    transcriber: "LyricWulf"
  },
  {
    urlId: "yiay-piano-remix",
    youtubeId: "4cI8JtjIMzo",
    title: "YIAY (Piano Remix)",
    source: "Jacksfilms",
    composer: "Jacksfilms",
    transcriber: "LyricWulf"
  },
  {
    urlId: "through-the-fire-and-flames",
    youtubeId: "RxIrtUvr9G4",
    title: "Through the Fire and Flames",
    source: "Dragonforce",
    composer: "Dragonforce",
    transcriber: "LyricWulf"
  },
  {
    urlId: "mii-plaza",
    youtubeId: "4nGZDidTTz8",
    title: "Mii Plaza",
    source: "Mii Channel Theme",
    composer: "Kazumi Totaka",
    transcriber: "LyricWulf"
  },
  {
    urlId: "the-eevee-song",
    youtubeId: "QyCsLINxijc",
    title: "The Eevee Song",
    source: "Random Encounters",
    composer: "Random Encounters",
    transcriber: "LyricWulf"
  },
  {
    urlId: "issuns-theme",
    youtubeId: "m6-yxp2Cygg",
    title: "Issun's Theme",
    source: "Okami",
    composer: "Hiroshi Yamaguchi",
    transcriber: "LyricWulf"
  },
  {
    urlId: "blueshift",
    youtubeId: "XOxowDPJBt8",
    title: "Blueshift",
    source: "Exurb1a",
    composer: "Exurb1a",
    transcriber: "LyricWulf"
  },
  {
    urlId: "parasailing-minigame",
    youtubeId: "GegS8INc3ps",
    title: "Parasailing Minigame",
    source: "Breath of the Wild",
    composer: "Manaka Kataoka",
    transcriber: "LyricWulf"
  },
  {
    urlId: "no-surprises-piano-stride",
    youtubeId: "DhljN7BbEas",
    title: "No Surprises (Piano Stride)",
    source: "Westworld",
    composer: "Ramin Djawadi",
    transcriber: "LyricWulf"
  },
  {
    urlId: "cold",
    youtubeId: "gXIvln7Kwrg",
    title: "Cold",
    source: "RWBY",
    composer: "Jeff Williams",
    transcriber: "LyricWulf"
  },
  {
    urlId: "shelter",
    youtubeId: "ORapqw2ru4M",
    title: "Shelter",
    source: "Porter Robinson & Madeon",
    composer: "Porter Robinson & Madeon",
    transcriber: "LyricWulf"
  },
  {
    urlId: "believer",
    youtubeId: "3OKSroKAK88",
    title: "Believer",
    source: "Imagine Dragons",
    composer: "Imagine Dragons",
    transcriber: "LyricWulf"
  },
  {
    urlId: "the-dog-wrestler-waltz",
    youtubeId: "10Ry2uOnXoo",
    title: "The Dog Wrestler Waltz",
    source: "Exurb1a",
    composer: "Exurb1a",
    transcriber: "LyricWulf"
  },
  {
    urlId: "the-wolf",
    youtubeId: "RQmQ3xBoGeo",
    title: "The Wolf",
    source: "SIAMÉS",
    composer: "SIAMÉS",
    transcriber: "LyricWulf"
  },
  {
    urlId: "battle-zinnia",
    youtubeId: "51aAXlEfwYg",
    title: "Battle! Zinnia",
    source: "Pokemon ORAS",
    composer: "Shota Kageyama",
    transcriber: "LyricWulf"
  },
  {
    urlId: "otter-pop",
    youtubeId: "y8ok8geXiNk",
    title: "Otter Pop",
    source: "Shawn Wasabi",
    composer: "Shawn Wasabi",
    transcriber: "LyricWulf"
  },
  {
    urlId: "phase-2",
    youtubeId: "tXFPo6LXfuU",
    title: "Phase 2",
    source: "Disbelief Papyrus",
    composer: "JimmyTheBassist",
    transcriber: "LyricWulf"
  },
  {
    urlId: "lone-digger",
    youtubeId: "Gx47FE1Soww",
    title: "Lone Digger",
    source: "‹ |°_°| ›",
    composer: "Caravan Palace",
    transcriber: "LyricWulf"
  },
  {
    urlId: "demolitale-main-theme",
    youtubeId: "rBeang8p74I",
    title: "Demolitale Main Theme",
    source: "Demolitale",
    composer: "LyricWulf",
    transcriber: "LyricWulf"
  },
  {
    urlId: "the-calm",
    youtubeId: "61WsFfTzOQg",
    title: "The Calm",
    source: "LyricWulf Original Song",
    composer: "Wulfenite",
    transcriber: "LyricWulf"
  },
  {
    urlId: "ironic",
    youtubeId: "JG-ujtkrdOg",
    title: "Ironic",
    source: "Words Words Words",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "forlorn",
    youtubeId: "QQB1OKkMda4",
    title: "Forlorn",
    source: "Undertale Yellow",
    composer: "MyNewSoundtrack, Master Sword",
    transcriber: "LyricWulf"
  },
  {
    urlId: "final-chance",
    youtubeId: "WjyOEdFn4qg",
    title: "Final Chance",
    source: "Undertale AU",
    composer: "Fanmade UNDERTALE AU",
    transcriber: "LyricWulf"
  },
  {
    urlId: "aviator",
    youtubeId: "7GwtK2DXbFk",
    title: "Aviator",
    source: "OneShot Soundtrack",
    composer: "Nightmargin",
    transcriber: "LyricWulf"
  },
  {
    urlId: "moonmen",
    youtubeId: "jwjPmjqcFTI",
    title: "Moonmen",
    source: "Pocket Mortys OST",
    composer: "Ryan Elder",
    transcriber: "LyricWulf"
  },
  {
    urlId: "mogolovonio-mp3",
    youtubeId: "5HZEorKnWcM",
    title: "MOGOLOVONIO.MP3",
    source: "april fool to you",
    composer: "SR POLO & TOBO FOOX",
    transcriber: "LyricWulf"
  },
  {
    urlId: "niko-and-the-world-machine",
    youtubeId: "2vq--uOOpwM",
    title: "Niko and the World Machine",
    source: "OneShot Soundtrack",
    composer: "Nightmargin (Casey Gu)",
    transcriber: "LyricWulf"
  },
  {
    urlId: "to-the-gateway",
    youtubeId: "p28uVJ_7tWY",
    title: "To the Gateway",
    source: "Super Mario Galaxy",
    composer: "Mahito Yokota",
    transcriber: "LyricWulf"
  },
  {
    urlId: "we-are-number-one",
    youtubeId: "FD-ictCbjJA",
    title: "We Are Number One",
    source: "LazyTown",
    composer: "MÃ¡ni Svavarsson",
    transcriber: "LyricWulf"
  },
  {
    urlId: "underline",
    youtubeId: "4k2DZw5S1cs",
    title: "Underline",
    source: "Fanmade UNDERTALE AU",
    composer: "Xalia",
    transcriber: "LyricWulf"
  },
  {
    urlId: "megalovania-fandom-medley",
    youtubeId: "AB08g5EEcjI",
    title: "MegaloVania FANDOM MEDLEY",
    source:
      "Fanmade UNDERTALE AU, Homestuck, Gravity Falls, Smash, FNAF, Doctor Who, Steven Universe, Adventure Time, Gumball, and Star vs. the Forces of Evil!",
    composer: "Yan Ade",
    transcriber: "LyricWulf"
  },
  {
    urlId: "ewe",
    youtubeId: "HaNAOj32TfE",
    title: "ewe",
    source: "LyricWulf Original Composition",
    composer: "LyricWulf",
    transcriber: "LyricWulf"
  },
  {
    urlId: "champion-cynthia",
    youtubeId: "29_Ti5xVBEI",
    title: "Champion Cynthia",
    source: "PokÃ©mon Diamond & PokÃ©mon Pearl: Super Music Collection",
    composer: "Go Ichinose",
    transcriber: "LyricWulf"
  },
  {
    urlId: "waterfall",
    youtubeId: "cHLhC8Od5JU",
    title: "Waterfall",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "karlas-lullaby",
    youtubeId: "jo1mvfNW630",
    title: "Karla's Lullaby",
    source: "Words",
    composer: "Louie Zong",
    transcriber: "LyricWulf"
  },
  {
    urlId: "fourteen-residents",
    youtubeId: "se7K-3eHMjo",
    title: "Fourteen Residents",
    source: "OFF",
    composer: "Alias Conrad Coldwood",
    transcriber: "LyricWulf"
  },
  {
    urlId: "hypnotik",
    youtubeId: "JBWMn3CdPN8",
    title: "HYPNOTIK",
    source: "KiseijÅ« Sei no Kakuritsu (Parasyte -the maxim-)",
    composer: "Ken Arai",
    transcriber: "LyricWulf"
  },
  {
    urlId: "supermoon",
    youtubeId: "X2N3XvZCpIc",
    title: "Supermoon",
    source: "No Man's Sky: Music for an Infinite Universe",
    composer: "65daysofstatic",
    transcriber: "LyricWulf"
  },
  {
    urlId: "again",
    youtubeId: "kyoTZQ-VSt4",
    title: "Again",
    source: "Shigatsu wa Kimi no Uso (Your Lie in April)",
    composer: "Masaru Yokoyama",
    transcriber: "LyricWulf"
  },
  {
    urlId: "just-3-days",
    youtubeId: "2-cFJEqIrVk",
    title: "Just 3 Days",
    source: "Majora's Mask Song",
    composer: "MandoPony",
    transcriber: "LyricWulf"
  },
  {
    urlId: "amarillo",
    youtubeId: "waLTe4j4LjE",
    title: "Amarillo",
    source: "The Fall",
    composer: "Gorillaz",
    transcriber: "LyricWulf"
  },
  {
    urlId: "land-of-hints",
    youtubeId: "C3SykOb6aqo",
    title: "Land of Hints",
    source: "LISA the Joyful Soundtrack",
    composer: "Widdly 2 Diddly",
    transcriber: "LyricWulf"
  },
  {
    urlId: "deep-piano",
    youtubeId: "spIWGAnp_3w",
    title: "#Deep [Piano]",
    source: "what.",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "deep-piano-and-voice",
    youtubeId: "KkVff0gxC2c",
    title: "#Deep [Piano and Voice]",
    source: "what.",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "wishing",
    youtubeId: "FoEB9mgrMzI",
    title: "Wishing",
    source:
      "Re:Zero kara Hajimeru Isekai Seikatsu (Starting Life in Another World)",
    composer: "Hige Driver, Ayato Shinozaki",
    transcriber: "LyricWulf"
  },
  {
    urlId: "edgy-sans-is-edgy",
    youtubeId: "lPbxlkO3KVE",
    title: "Edgy Sans is Edgy",
    source: "Fanmade UNDERTALE AU",
    composer: "Jeffrey Watkins",
    transcriber: "LyricWulf"
  },
  {
    urlId: "how-far-ill-go",
    youtubeId: "ope9jAWeu80",
    title: "How Far I'll Go",
    source: "Moana (Original Motion Picture Soundtrack)",
    composer: "Lin-Manuel Miranda",
    transcriber: "LyricWulf"
  },
  {
    urlId: "lazy-afternoons",
    youtubeId: "oAWO56Bl5FA",
    title: "Lazy Afternoons",
    source: "Kingdom Hearts Piano Collections",
    composer: "Yoko Shimomura, Sachiko Miyano",
    transcriber: "LyricWulf"
  },
  {
    urlId: "sugar-coma-foxtrot",
    youtubeId: "7HtaJKneBMk",
    title: "Sugar Coma Foxtrot",
    source: "HOME OST",
    composer: "xLightningWolFx",
    transcriber: "LyricWulf"
  },
  {
    urlId: "death-by-glamour",
    youtubeId: "wOWe33No8m0",
    title: "Death by Glamour",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "let-it-be",
    youtubeId: "q_JvkaHLPvQ",
    title: "Let It Be",
    source: "Miracle",
    composer: "Blackmill",
    transcriber: "LyricWulf"
  },
  {
    urlId: "heartache",
    youtubeId: "0C5xp2WKKdM",
    title: "Heartache",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "battle-against-a-true-parent",
    youtubeId: "2PtQZlbp5CY",
    title: "Battle Against a True Parent",
    source: "Fanmade UNDERTALE AU",
    composer: "Whirligig231",
    transcriber: "LyricWulf"
  },
  {
    urlId: "bonetrousle-underswap",
    youtubeId: "3ud93T3-Mgs",
    title: "Bonetrousle (Underswap)",
    source: "Fanmade UNDERTALE AU",
    composer: "nerdylizardeperson",
    transcriber: "LyricWulf"
  },
  {
    urlId: "mother-earth",
    youtubeId: "ghwlmbHDQMw",
    title: "Mother Earth",
    source: "Mother 1+2",
    composer: "Hirokazu Tanaka",
    transcriber: "LyricWulf"
  },
  {
    urlId: "outset-island",
    youtubeId: "CGBLjkg2-_8",
    title: "Outset Island",
    source: "The Legend of Zelda: The Wind Waker",
    composer: "Kenta Nagata, Hajime Wakai, Toru Minegishi, Koji Kondo",
    transcriber: "LyricWulf"
  },
  {
    urlId: "backbone",
    youtubeId: "KmBiqJCpGUU",
    title: "Backbone",
    source: "Fanmade UNDERTALE AU",
    composer: "Sean Evans [Lone]",
    transcriber: "LyricWulf"
  },
  {
    urlId: "bonetrousle",
    youtubeId: "_Dda2PebeIA",
    title: "Bonetrousle",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "foxs-forgotten-love-krystal",
    youtubeId: "-wZHV13hrvc",
    title: "Fox's Forgotten Love, Krystal",
    source: "Star Fox Command",
    composer: "Hajime Wakai",
    transcriber: "LyricWulf"
  },
  {
    urlId: "showtime-piano-refrain",
    youtubeId: "zF6R3bMRWOU",
    title: "Showtime (Piano Refrain)",
    source: "Homestuck Vol. 1â€‹-â€‹4",
    composer: "Malcolm Brown, Kevin Regamey",
    transcriber: "LyricWulf"
  },
  {
    urlId: "thundersnail",
    youtubeId: "qyIXXFL3I2w",
    title: "Thundersnail",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "hes-my-dad",
    youtubeId: "3qqfUe_-jZA",
    title: "He's My Dad",
    source: "LISA the Joyful Soundtrack",
    composer: "Widdly 2 Diddly",
    transcriber: "LyricWulf"
  },
  {
    urlId: "art-is-dead-piano",
    youtubeId: "MZdogDXQJm0",
    title: "art is dead. [Piano]",
    source: "Words Words Words",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "nyeh-heh-heh-bonetrousle",
    youtubeId: "Rn0Zso6u7mI",
    title: "Nyeh Heh Heh! & Bonetrousle",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "art-is-dead-piano-and-voice",
    youtubeId: "BSg0UD51Rhs",
    title: "art is dead. [Piano and Voice]",
    source: "Words Words Words",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "unnecessary-tension",
    youtubeId: "_Xr-hIdP_yQ",
    title: "Unnecessary Tension",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "wrong-enemy",
    youtubeId: "P6nz4-PHQbk",
    title: "Wrong Enemy ?!",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "live-death-report",
    youtubeId: "MrN4UpxhsxE",
    title: "Live & Death Report",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "shes-playing-piano",
    youtubeId: "sYOF1eJiZtk",
    title: "She's Playing Piano",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "snow-fairy",
    youtubeId: "GuLhZRzAlzc",
    title: "Snow Fairy",
    source: "Fairy Tail",
    composer: "FUNKIST, NateWantsToBattle",
    transcriber: "LyricWulf"
  },
  {
    urlId: "oh-one-true-love",
    youtubeId: "ZKYIylDO5_I",
    title: "Oh! One True Love",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "gourmet-race",
    youtubeId: "uGQTVGUso9k",
    title: "Gourmet Race",
    source: "Kirby Super Star",
    composer: "Jun Ishikawa, Dan Miyakawa",
    transcriber: "LyricWulf"
  },
  {
    urlId: "lower-your-expectations-piano",
    youtubeId: "ok3O805bfAM",
    title: "Lower Your Expectations [Piano]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "histrousle",
    youtubeId: "bu5SF_xk8bw",
    title: "Histrousle",
    source: "Fanmade UNDERTALE AU",
    composer: "Keno9988ii",
    transcriber: "LyricWulf"
  },
  {
    urlId: "ori-lost-in-the-storm",
    youtubeId: "2pLJ00yWlZo",
    title: "Ori, Lost in the Storm",
    source: "Ori and the Blind Forest (Original Soundtrack)",
    composer: "Gareth Coker",
    transcriber: "LyricWulf"
  },
  {
    urlId: "power-of-neo-ikarus-remix",
    youtubeId: "gcxKvYdDH4A",
    title: 'Power of "NEO" (IKARUS Remix)',
    source: "Fanmade UNDERTALE AU",
    composer: "IKarus",
    transcriber: "LyricWulf"
  },
  {
    urlId: "battle-against-a-true-hero",
    youtubeId: "1PiX8y04ibo",
    title: "Battle Against a True Hero",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "are-you-happy-piano",
    youtubeId: "T5pbrjMSxjs",
    title: "Are You Happy? [Piano]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "straight-white-male-piano",
    youtubeId: "MY9Y7GUZS4o",
    title: "Straight White Male [Piano]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "kill-yourself-piano",
    youtubeId: "sQEihEB-Tfo",
    title: "Kill Yourself [Piano]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "sad-piano",
    youtubeId: "otmmT7A3zGw",
    title: "Sad [Piano]",
    source: "what.",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "drop-pop-candy",
    youtubeId: "OOpgiEP8xfc",
    title: "Drop Pop Candy",
    source: "No Title+",
    composer: "Giga-P",
    transcriber: "LyricWulf"
  },
  {
    urlId: "lower-your-expectations-piano-and-voice",
    youtubeId: "oKhE908PdXY",
    title: "Lower Your Expectations [Piano and Voice]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "battle-theme",
    youtubeId: "GQk9uK1DDnM",
    title: "Battle Theme",
    source: "Final Fantasy X",
    composer: "Nobuo Uematsu",
    transcriber: "LyricWulf"
  },
  {
    urlId: "technolight",
    youtubeId: "QERryArA4qo",
    title: "Technolight",
    source: "LyricWulf Original Composition",
    composer: "LyricWulf",
    transcriber: "LyricWulf"
  },
  {
    urlId: "kill-yourself-piano-and-voice",
    youtubeId: "tnFtK9lcJTs",
    title: "Kill Yourself [Piano and Voice]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "disbelief",
    youtubeId: "27OZgSe7WJM",
    title: "Disbelief",
    source: "Fanmade UNDERTALE AU",
    composer: "ROCK CANDY (DBOYD x KOMMISAR)",
    transcriber: "LyricWulf"
  },
  {
    urlId: "are-you-happy-piano-and-voice",
    youtubeId: "rKPuSjB1VZI",
    title: "Are You Happy? [Piano and Voice]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "with-your-drilla",
    youtubeId: "9br9mVz9KaY",
    title: "With Your Drillâ€¦",
    source: "Tengen Toppa Gurren Lagann OST 1",
    composer: "Taku Iwasaki",
    transcriber: "LyricWulf"
  },
  {
    urlId: "quiet-water",
    youtubeId: "VV1PCUJm8lU",
    title: "Quiet Water",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "bird-that-carries-you-over-a-disproportionately-small-gap",
    youtubeId: "94seJuUBe-E",
    title: "Bird That Carries You Over a Disproportionately Small Gap",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "stronger-than-you",
    youtubeId: "c7FVeokCIW4",
    title: "Stronger Than You",
    source: "FUSION MIXTAPE",
    composer: "Rebecca Sugar",
    transcriber: "LyricWulf"
  },
  {
    urlId: "straight-white-male-piano-and-voice",
    youtubeId: "Uu777jQw8vU",
    title: "Straight White Male [Piano and Voice]",
    source: "Make Happy",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "metal-crusher",
    youtubeId: "G3tWQxI-dPo",
    title: "Metal Crusher",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "sad-piano-and-voice",
    youtubeId: "CFGDAnelVDE",
    title: "Sad [Piano and Voice]",
    source: "what.",
    composer: "Bo Burnham",
    transcriber: "LyricWulf"
  },
  {
    urlId: "believe-me",
    youtubeId: "ZzlSOBzOTOI",
    title: "Believe Me",
    source: "Steins;Gate",
    composer: "Takeshi Abo",
    transcriber: "LyricWulf"
  },
  {
    urlId: "why-am-i-so-happy",
    youtubeId: "Vr0JrIQ8yvY",
    title: "Why Am I So Happy?",
    source: "Why Am I So Happy?",
    composer: "Spose",
    transcriber: "LyricWulf"
  },
  {
    urlId: "prove-it-all",
    youtubeId: "q8kvvAVUivU",
    title: "Prove It All",
    source: "LyricWulf Original Composition",
    composer: "LyricWulf",
    transcriber: "LyricWulf"
  },
  {
    urlId: "once-upon-a-time",
    youtubeId: "ageNKR7g55g",
    title: "Once Upon a Time",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "alphys-takes-action",
    youtubeId: "-7M0CQ0fuV4",
    title: "Alphys Takes Action",
    source: "Fanmade UNDERTALE AU",
    composer: "coffE K",
    transcriber: "LyricWulf"
  },
  {
    urlId: "alphys",
    youtubeId: "y3iiJldFZ-Y",
    title: "Alphys",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "amalgam",
    youtubeId: "KlqxVi4UPb4",
    title: "Amalgam",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "fighting",
    youtubeId: "A47tIVw-ts0",
    title: "Fighting",
    source: "Final Fantasy VII",
    composer: "Nobuo Uematsu",
    transcriber: "LyricWulf"
  },
  {
    urlId: "rocket-jump-waltz",
    youtubeId: "3jNvph5ovtM",
    title: "Rocket Jump Waltz",
    source: "Team Fortress 2 Official Soundtrack",
    composer: "Mike Morasky",
    transcriber: "LyricWulf"
  },
  {
    urlId: "sans",
    youtubeId: "-7kwk7RxAYY",
    title: "sans.",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "dark-darker-yet-darker",
    youtubeId: "-1jOzmNOlpA",
    title: "Dark, Darker, Yet Darker",
    source: "Fanmade UNDERTALE AU",
    composer: "The Great Anansi",
    transcriber: "LyricWulf"
  },
  {
    urlId: "respite",
    youtubeId: "FlC51eUBIRM",
    title: "Respite",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "spider-dance",
    youtubeId: "4YklRbdcdT0",
    title: "Spider Dance",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "sweet-sugar-love",
    youtubeId: "Eo4vEkao_88",
    title: "Sweet Sugar Love",
    source: "Phyrnna",
    composer: "Phyrnna",
    transcriber: "LyricWulf"
  },
  {
    urlId: "megalo-strike-back",
    youtubeId: "vtJiP3aI6IQ",
    title: "Megalo Strike Back",
    source: "I Miss You - EarthBound 2012",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "song-that-might-play-when-you-fight-sans",
    youtubeId: "yZprr3ImCiY",
    title: "Song That Might Play When You Fight Sans",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "cold-short-version",
    youtubeId: "96KzZ_O_nr8",
    title: "Cold (Short Version)",
    source: "RWBY",
    composer: "Jeff Williams",
    transcriber: "LyricWulf"
  },
  {
    urlId: "ooo",
    youtubeId: "wCsCLdepGyQ",
    title: "Ooo",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "spooky-scary-skeletons",
    youtubeId: "Q2ED9U5eudI",
    title: "Spooky Scary Skeletons",
    source: "Halloween Howls",
    composer: "Andrew Gold",
    transcriber: "LyricWulf"
  },
  {
    urlId: "memory",
    youtubeId: "Zb1K1FZ68zo",
    title: "Memory",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "here-we-are",
    youtubeId: "P6lBwJbEWGc",
    title: "Here We Are",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "friendship",
    youtubeId: "V_pKFcImjbg",
    title: "Friendship",
    source: "toby fox",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "walking-by-the-sea",
    youtubeId: "eCX3OkOzR0M",
    title: "Walking by the sea",
    source: "Deemo, Vol.2",
    composer: "Edmud Fu",
    transcriber: "LyricWulf"
  },
  {
    urlId: "stronger-monsters",
    youtubeId: "mMJN4pcmTcg",
    title: "Stronger Monsters",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "finale",
    youtubeId: "uNIEWzo7Wj4",
    title: "Finale",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "dancing-mad-5th-movement",
    youtubeId: "PZvk-hz7Ik8",
    title: "Dancing Mad 5th Movement",
    source: "Final Fantasy VI",
    composer: "Nobuo Uematsu",
    transcriber: "LyricWulf"
  },
  {
    urlId: "megalovania",
    youtubeId: "dKkRaBwsyBQ",
    title: "MEGALOVANIA",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "try-everything",
    youtubeId: "vuAVdxWMPPE",
    title: "Try Everything",
    source: "Zootopia",
    composer: "Shakira",
    transcriber: "LyricWulf"
  },
  {
    urlId: "his-theme",
    youtubeId: "X1xltv1OIwM",
    title: "His Theme",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "its-raining-somewhere-else",
    youtubeId: "OugKuIXt9ig",
    title: "It's Raining Somewhere Else",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "fallen-down-reprise",
    youtubeId: "HtCjh8iZpJI",
    title: "Fallen Down (Reprise)",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "bergentruckung-asgore",
    youtubeId: "kflpz9uU99Q",
    title: "Bergentrückung & ASGORE",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "final-power",
    youtubeId: "pL-8ChSS4v4",
    title: "Final Power",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "run",
    youtubeId: "yix8tQ13Ohs",
    title: "Run!",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "snowy",
    youtubeId: "nMVE_YGD4wg",
    title: "Snowy",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "an-ending",
    youtubeId: "kP2Yt1j5O34",
    title: "An Ending",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "sigh-of-dog",
    youtubeId: "J9-yo3j6erk",
    title: "Sigh of Dog",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "snowdin-town",
    youtubeId: "5gMBfKNGXww",
    title: "Snowdin Town",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "anticipation-enemy-approaching",
    youtubeId: "R97Eo63W0l8",
    title: "Anticipation & Enemy Approaching",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "hopes-and-dreams-last-goodbye",
    youtubeId: "Yuxees4a4DE",
    title: "Hopes and Dreams & Last Goodbye",
    source: "UNDERTALE Soundtrack",
    composer: "toby fox",
    transcriber: "LyricWulf"
  },
  {
    urlId: "where",
    youtubeId: "EEl6Cql0LWk",
    title: "Where",
    source: "LyricWulf Original Composition",
    composer: "LyricWulf",
    transcriber: "LyricWulf"
  },
  {
    urlId: "we-are-the-crystal-gems",
    youtubeId: "1NqEVEAgigA",
    title: "We Are the Crystal Gems",
    source: "Steven Universe",
    composer: "Rebecca Sugar, Aivi & Surasshu",
    transcriber: "LyricWulf"
  },
  {
    urlId: "randall-piano",
    youtubeId: "vyAY78lb9bU",
    title: "Randall [Piano]",
    source: "Brave Frontier",
    composer: "Hikoshi Hashimoto",
    transcriber: "LyricWulf"
  },
  {
    urlId: "randall-full-score",
    youtubeId: "FcNIleFnRK4",
    title: "Randall [Full Score]",
    source: "Brave Frontier",
    composer: "Hikoshi Hashimoto",
    transcriber: "LyricWulf"
  },
  {
    urlId: "chasing-cars",
    youtubeId: "-zMlycr-LJo",
    title: "Chasing Cars",
    source: "Eyes Open",
    composer: "Snow Patrol",
    transcriber: "LyricWulf"
  },
  {
    urlId: "kimi-wa-wasurerareru-no",
    youtubeId: "HOT7YZpl8xM",
    title: "Kimi wa Wasurerareru no",
    source: "Shigatsu wa Kimi no Uso (Your Lie in April)",
    composer: "Masaru Yokoyama",
    transcriber: "LyricWulf"
  },
  {
    urlId: "sister-rust",
    youtubeId: "TrpCK0Q6wAY",
    title: "Sister Rust",
    source: "Lucy",
    composer: "Damon Albarn",
    transcriber: "LyricWulf"
  },
  {
    urlId: "last-battle",
    youtubeId: "CXqJhS0vmxA",
    title: "Last Battle ",
    source: "Cave Story",
    composer: "Daisuke Amaya",
    transcriber: "LyricWulf"
  },
  {
    urlId: "blackout",
    youtubeId: "f2qlB-kRj5c",
    title: "Blackout",
    source: "Hell Is What You Make It",
    composer: "Breathe Carolina",
    transcriber: "LyricWulf"
  },
  {
    urlId: "home-of-the-blues",
    youtubeId: "Kei-nTdHuaA",
    title: "Home of the Blues",
    source: "Owl City Cover",
    composer: "Owl City",
    transcriber: "LyricWulf"
  },
  {
    urlId: "rewel",
    youtubeId: "p3-MYUxTsic",
    title: "ReWel",
    source: "Catalyst",
    composer: "Tristam & Rogue",
    transcriber: "LyricWulf"
  },
  {
    urlId: "ingame-theme",
    youtubeId: "KjdbqrUI-KE",
    title: "InGame Theme",
    source: "Castles II: Siege and Conquest",
    composer: "Charles Deenen",
    transcriber: "LyricWulf"
  },
  {
    urlId: "heros-end",
    youtubeId: "2SJOboPkRgY",
    title: "Hero's End",
    source: "Cave Story",
    composer: "Daisuke Amaya",
    transcriber: "LyricWulf"
  },
  {
    urlId: "quantus",
    youtubeId: "iXndMLBSNGQ",
    title: "Quantus",
    source: "LyricWulf Original Composition",
    composer: "LyricWulf",
    transcriber: "LyricWulf"
  },
  {
    urlId: "unused-track-1",
    youtubeId: "z5j_rI3JeSQ",
    title: "Unused Track 1",
    source: "Clannad",
    composer: "Shinji Orito",
    transcriber: "LyricWulf"
  },
  {
    urlId: "gypsy-dance",
    youtubeId: "594VKbWySFU",
    title: "Gypsy Dance",
    source: "Joseph Compello",
    composer: "Joseph Compello",
    transcriber: "LyricWulf"
  },
  {
    urlId: "shy-violet",
    youtubeId: "ysWv8SJ0bDk",
    title: "Shy Violet",
    source: "All Things Bright and Beautiful",
    composer: "Owl City",
    transcriber: "LyricWulf"
  }
];

export default SONGS;
