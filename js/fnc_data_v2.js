// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
  "Dariacore",
  "Dariacore 2: Enter Here, Hell to the Left",
  "Dariacore 3... At least I think that's what it's called?",
  "Grave Robbing",
  "Teen Week",
  "Frailty",
  "Census Designated",
  "Revengeseekerz",
  "Heart EP",
  "Music Baby (leroy remix)",
  "Singles",
  "Arizona EP",
  "Ghostholding"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "ricky bobby",                     [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "parental rift",                  [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "go white enby go",               [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "outside",                        [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "1235",                           [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "theyfriend",                     [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "2008",                           [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "copyright strike my fucking nuts",[1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "will work for food",             [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "bluuuueeeee",                    [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "die in my dream",                [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "turmoiled",                      [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "dessert",                        [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "2on",                            [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "shashshashshash",                [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],
  [1, "virginity rockstar",             [1,0,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore.jpeg"],

  
  [1, "DILF repellent",                                            [0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "stupid hoe",                                                [0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "...during pride month?",                                    [0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "video game lover vs. hydraulic press",                      [0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "dyed my hair black",                                        [0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "starbucks employee vs. niche twitter personality @c0ncernn",[0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "wants mom to know she looks cool and doesn't plan on changing",[0,1,0,0,0,0,0,0,0,0,0,0,0],"albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "snare of a lifetime",                                       [0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "the dariacore to YTP pipeline",                             [0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "I never go swimming without my lip liner",                  [0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "awesome ends with ME and ugly starts with U",               [0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "we love your vibe",                                         [0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "lil mama vip tickets",                                      [0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "she was a star, now she works in toronto",                  [0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],
  [1, "yes i have a girlfriend and her IQ is 4,037",               [0,1,0,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 2 Enter Here, Hell to the Left.jpg"],


  [1, "the joke is on you",                                 [0,0,1,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 3... At least I think thats what its called.jpg"],
  [1, "her head is soooo rolling!! love her",               [0,0,1,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 3... At least I think thats what its called.jpg"],
  [1, "snatch the cat back",                                [0,0,1,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 3... At least I think thats what its called.jpg"],
  [1, "night of the living midtempo EDM bro",               [0,0,1,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 3... At least I think thats what its called.jpg"],
  [1, "fuuuuck we were supposed to wear argyle",            [0,0,1,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 3... At least I think thats what its called.jpg"],
  [1, "damn! we got it bad: you'll never guess what happens next",[0,0,1,0,0,0,0,0,0,0,0,0,0],"albums/Dariacore 3... At least I think thats what its called.jpg"],
  [1, "a funk you can't dance out",                         [0,0,1,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 3... At least I think thats what its called.jpg"],
  [1, "kick of a lifetime",                                 [0,0,1,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 3... At least I think thats what its called.jpg"],
  [1, "i hate when BOYS lie",                               [0,0,1,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 3... At least I think thats what its called.jpg"],
  [1, "world's sourest honey",                              [0,0,1,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 3... At least I think thats what its called.jpg"],
  [1, "move for me & the penultimate dagger",               [0,0,1,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 3... At least I think thats what its called.jpg"],
  [1, "Dariacore Song Tutorial",                            [0,0,1,0,0,0,0,0,0,0,0,0,0], "albums/Dariacore 3... At least I think thats what its called.jpg"],


  [1, "WE'VE BEEN SMOKING ALL DAY.............",                 [0,0,0,1,0,0,0,0,0,0,0,0,0], "albums/Grave Robbing.jpg"],
  [1, "Her head is so0o0o0o0 rolling (POST-MORTEM MIX)",        [0,0,0,1,0,0,0,0,0,0,0,0,0], "albums/Grave Robbing.jpg"],
  [1, "Jack'd My Swag",                                         [0,0,0,1,0,0,0,0,0,0,0,0,0], "albums/Grave Robbing.jpg"],
  [1, "It's up to YOU now!!",                                   [0,0,0,1,0,0,0,0,0,0,0,0,0], "albums/Grave Robbing.jpg"],
  [1, "Put me back together [[[ON THE FLOOR]]]",                [0,0,0,1,0,0,0,0,0,0,0,0,0], "albums/Grave Robbing.jpg"],
  [1, "FRONT DOOR ENTRY ONLY ---- until I cant feel a thing",   [0,0,0,1,0,0,0,0,0,0,0,0,0], "albums/Grave Robbing.jpg"],
  [1, "BACK DOOR EXIT ---- IVE got a cr*sh on you",             [0,0,0,1,0,0,0,0,0,0,0,0,0], "albums/Grave Robbing.jpg"],
  [1, "omg! ~CR*SH DESIRE~",                                    [0,0,0,1,0,0,0,0,0,0,0,0,0], "albums/Grave Robbing.jpg"],
  [1, "Still into Ü, Ür happy endings, And Ür FAKE LÜV",        [0,0,0,1,0,0,0,0,0,0,0,0,0], "albums/Grave Robbing.jpg"],
  [1, ".PACK YOUR BAGS.LET IT ROCK.HEAR THE RUMBLE.",           [0,0,0,1,0,0,0,0,0,0,0,0,0], "albums/Grave Robbing.jpg"],
  [1, "Bouncin off dA window ★★★",                              [0,0,0,1,0,0,0,0,0,0,0,0,0], "albums/Grave Robbing.jpg"],
  [1, "lately this feeling (i’m so drunk ............)",        [0,0,0,1,0,0,0,0,0,0,0,0,0], "albums/Grave Robbing.jpg"],


  [1, "let down",                        [0,0,0,0,1,0,0,0,0,0,0,0,0], "albums/Teen Week.jpg"],
  [1, "homeswitcher",                    [0,0,0,0,1,0,0,0,0,0,0,0,0], "albums/Teen Week.jpg"],
  [1, "52 blue mondays",                 [0,0,0,0,1,0,0,0,0,0,0,0,0], "albums/Teen Week.jpg"],
  [1, "dysphoria",                       [0,0,0,0,1,0,0,0,0,0,0,0,0], "albums/Teen Week.jpg"],
  [1, "cartridge",                       [0,0,0,0,1,0,0,0,0,0,0,0,0], "albums/Teen Week.jpg"],
  [1, "beast friend",                    [0,0,0,0,1,0,0,0,0,0,0,0,0], "albums/Teen Week.jpg"],
  [1, "woodside gardens 16 december 2012",[0,0,0,0,1,0,0,0,0,0,0,0,0], "albums/Teen Week.jpg"],
  [1, "seventeen",                       [0,0,0,0,1,0,0,0,0,0,0,0,0], "albums/Teen Week.jpg"],


  [1, "goldfish",                                   [0,0,0,0,0,1,0,0,0,0,0,0,0], "albums/Frailty.jpg"],
  [1, "your clothes",                               [0,0,0,0,0,1,0,0,0,0,0,0,0], "albums/Frailty.jpg"],
  [1, "misplace",                                   [0,0,0,0,0,1,0,0,0,0,0,0,0], "albums/Frailty.jpg"],
  [1, "pretender",                                  [0,0,0,0,0,1,0,0,0,0,0,0,0], "albums/Frailty.jpg"],
  [1, "search party",                               [0,0,0,0,0,1,0,0,0,0,0,0,0], "albums/Frailty.jpg"],
  [1, "buzzcut, daisy",                             [0,0,0,0,0,1,0,0,0,0,0,0,0], "albums/Frailty.jpg"],
  [1, "movies for guys",                            [0,0,0,0,0,1,0,0,0,0,0,0,0], "albums/Frailty.jpg"],
  [1, "kodak moment",                               [0,0,0,0,0,1,0,0,0,0,0,0,0], "albums/Frailty.jpg"],
  [1, "can you tell?",                              [0,0,0,0,0,1,0,0,0,0,0,0,0], "albums/Frailty.jpg"],
  [1, "how to lie",                                 [0,0,0,0,0,1,0,0,0,0,0,0,0], "albums/Frailty.jpg"],
  [1, "champ",                                      [0,0,0,0,0,1,0,0,0,0,0,0,0], "albums/Frailty.jpg"],
  [1, "eyes off the wheel, im a star",              [0,0,0,0,0,1,0,0,0,0,0,0,0], "albums/Frailty.jpg"],
  [1, "lets go home",                               [0,0,0,0,0,1,0,0,0,0,0,0,0], "albums/Frailty.jpg"],


  [1, "Cage Girl / Camgirl",              [0,0,0,0,0,0,1,0,0,0,0,0,0], "albums/Census Designated.jpg"],
  [1, "Lips",                             [0,0,0,0,0,0,1,0,0,0,0,0,0], "albums/Census Designated.jpg"],
  [1, "Fling",                            [0,0,0,0,0,0,1,0,0,0,0,0,0], "albums/Census Designated.jpg"],
  [1, "Holding a Leech",                  [0,0,0,0,0,0,1,0,0,0,0,0,0], "albums/Census Designated.jpg"],
  [1, "Backseat Girl",                    [0,0,0,0,0,0,1,0,0,0,0,0,0], "albums/Census Designated.jpg"],
  [1, "Idling Somewhere",                 [0,0,0,0,0,0,1,0,0,0,0,0,0], "albums/Census Designated.jpg"],
  [1, "Always Have Always Will",          [0,0,0,0,0,0,1,0,0,0,0,0,0], "albums/Census Designated.jpg"],
  [1, "Census Designated",                [0,0,0,0,0,0,1,0,0,0,0,0,0], "albums/Census Designated.jpg"],
  [1, "Video",                            [0,0,0,0,0,0,1,0,0,0,0,0,0], "albums/Census Designated.jpg"],
  [1, "Contingency Song (Album Version)", [0,0,0,0,0,0,1,0,0,0,0,0,0], "albums/Census Designated.jpg"],

  
  [1, "TWICE REMOVED",                            [0,0,0,0,0,0,0,1,0,0,0,0,0], "albums/Revengeseekrz.jpg"],
  [1, "Psychoboost feat Danny Brown",             [0,0,0,0,0,0,0,1,0,0,0,0,0], "albums/Revengeseekrz.jpg"],
  [1, "Star People",                              [0,0,0,0,0,0,0,1,0,0,0,0,0], "albums/Revengeseekrz.jpg"],
  [1, "Experimental Skin",                        [0,0,0,0,0,0,0,1,0,0,0,0,0], "albums/Revengeseekrz.jpg"],
  [1, "angels in camo",                           [0,0,0,0,0,0,0,1,0,0,0,0,0], "albums/Revengeseekrz.jpg"],
  [1, "Dreamflasher",                             [0,0,0,0,0,0,0,1,0,0,0,0,0], "albums/Revengeseekrz.jpg"],
  [1, "Dancing with your eyes closed",            [0,0,0,0,0,0,0,1,0,0,0,0,0], "albums/Revengeseekrz.jpg"],
  [1, "Fadeoutz",                                 [0,0,0,0,0,0,0,1,0,0,0,0,0], "albums/Revengeseekrz.jpg"],
  [1, "Professional Vengeance",                   [0,0,0,0,0,0,0,1,0,0,0,0,0], "albums/Revengeseekrz.jpg"],
  [1, "Dark Night Castle",                        [0,0,0,0,0,0,0,1,0,0,0,0,0], "albums/Revengeseekrz.jpg"],
  [1, "JRJRJR",                                   [0,0,0,0,0,0,0,1,0,0,0,0,0], "albums/Revengeseekrz.jpg"],

  
  [1, "Magic I Want U",                        [0,0,0,0,0,0,0,0,1,0,0,0,0], "albums/Heart EP.jpg"],
  [1, "So What?",                              [0,0,0,0,0,0,0,0,1,0,0,0,0], "albums/Heart EP.jpg"],
  [1, "Music Baby",                            [0,0,0,0,0,0,0,0,1,0,0,0,0], "albums/Heart EP.jpg"],
  [1, "Flash In The Pan",                      [0,0,0,0,0,0,0,0,1,0,0,0,0], "albums/Heart EP.jpg"],
  [1, "How To Teleport",                       [0,0,0,0,0,0,0,0,1,0,0,0,0], "albums/Heart EP.jpg"],
  [1, "Dream Sequence",                        [0,0,0,0,0,0,0,0,1,0,0,0,0], "albums/Heart EP.jpg"],


  [1, "Music Baby (leroy remix)",              [0,0,0,0,0,0,0,0,0,1,0,0,0], "albums/Music Baby (Leroy remix).jpg"],
  [1, "Experimental Skin / How To Teleport (leroy remix)", [0,0,0,0,0,0,0,0,0,1,0,0,0], "albums/Music Baby (Leroy remix).jpg"],


  [1, "It's A Vicious Cycle",                        [0,0,0,0,0,0,0,0,0,0,1,0,0], "Singles.jpg"],
  [1, "i almost puked at the mall",                  [0,0,0,0,0,0,0,0,0,0,1,0,0], "Singles.jpg"],
  [1, "Royal Blue Walls",                            [0,0,0,0,0,0,0,0,0,0,1,0,0], "Singles.jpg"],
  [1, "Cage Girl",                                   [0,0,0,0,0,0,0,0,0,0,1,0,0], "Singles.jpg"],
  [1, "honest (Jane Remover Remix)",                 [0,0,0,0,0,0,0,0,0,0,1,0,0], "Singles.jpg"],
  [1, "Contigency Song",                             [0,0,0,0,0,0,0,0,0,0,1,0,0], "Singles.jpg"],
  [1, "Shake It Like A (Jane Remover Remix)",        [0,0,0,0,0,0,0,0,0,0,1,0,0], "Singles.jpg"],
  [1, "Supernova",                                   [0,0,0,0,0,0,0,0,0,0,1,0,0], "Singles.jpg"],
  [1, "Audiostalker",                                [0,0,0,0,0,0,0,0,0,0,1,0,0], "Singles.jpg"],
  [1, "In the dark",                                [0,0,0,0,0,0,0,0,0,0,1,0,0], "Singles.jpg"],


  [1, "Stand-up donor",                                   [0,0,0,0,0,0,0,0,0,0,0,1,0], "Arizona EP.jpg"],
  [1, "Cream Soda",                                       [0,0,0,0,0,0,0,0,0,0,0,1,0], "Arizona EP.jpg"],
  [1, "Vulture City",                                     [0,0,0,0,0,0,0,0,0,0,0,1,0], "Arizona EP.jpg"],
  [1, "I love my friends",                                [0,0,0,0,0,0,0,0,0,0,0,1,0], "Arizona EP.jpg"],

  [1, "Play my guitar",                                   [0,0,0,0,0,0,0,0,0,0,0,0,1], "Ghostholding.jpg"],
  [1, "No sleep",                                         [0,0,0,0,0,0,0,0,0,0,0,0,1], "Ghostholding.jpg"],
  [1, "Believe",                                          [0,0,0,0,0,0,0,0,0,0,0,0,1], "Ghostholding.jpg"],
  [1, "Guesthouse",                                       [0,0,0,0,0,0,0,0,0,0,0,0,1], "Ghostholding.jpg"],
  [1, "Spider",                                           [0,0,0,0,0,0,0,0,0,0,0,0,1], "Ghostholding.jpg"],
  [1, "Recoil",                                           [0,0,0,0,0,0,0,0,0,0,0,0,1], "Ghostholding.jpg"],
  [1, "Something has to change",                          [0,0,0,0,0,0,0,0,0,0,0,0,1], "Ghostholding.jpg"],
  [1, "Dead forever",                                     [0,0,0,0,0,0,0,0,0,0,0,0,1], "Ghostholding.jpg"],
  [1, "We don't exist",                                   [0,0,0,0,0,0,0,0,0,0,0,0,1], "Ghostholding.jpg"],
  [1, "Sick / relapse",                                   [0,0,0,0,0,0,0,0,0,0,0,0,1], "Ghostholding.jpg"],
  [1, "Famous girl",                                      [0,0,0,0,0,0,0,0,0,0,0,0,1], "Ghostholding.jpg"],
  [1, "Halloween",                                        [0,0,0,0,0,0,0,0,0,0,0,0,1], "Ghostholding.jpg"],
  [1, "Sister",                                           [0,0,0,0,0,0,0,0,0,0,0,0,1], "Ghostholding.jpg"],
];
