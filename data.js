const userData = require(`./userdata`);

const wage1 = {
  c: 80, // 사장
  v: 0, // 휴무
};

const wage2 = {
  c: 0, // 사장
  e: 80, // 임원
  s: 50, // 직원
  v: 0, // 휴무
};

const wage3 = {
  c: 0, // 사장
  e: 90, // 임원
  s: 60, // 직원
  v: 0, // 휴무
};

const wage_t = {
  c: 130, // 사장
  e: 90, // 임원
  s: 60, // 직원
  v: 0, // 휴무
};
// const wage3 = {
//   c: 3, // 사장
//   e: 2, // 임원
//   s: 1, // 직원
//   v: 0, // 휴무
// };

const ownerId = '251349298300715008';

const staffs = [
  '1014127440831991880',
  '415907070626234406',
  '973834622746120222',
  '247333169370628096',
];

const companies = [
  {
    //벅크셔해서웨이
    companyName: '벅크셔해서웨이테스트',
    members: [
      { userId: userData.heali, level: 'e' },
      { userId: userData.ddpson, level: 's' },
      { userId: userData.natreeum, level: 'c' },
    ],
  },
  {
    //벅크셔해서웨이
    companyName: '벅크셔해서웨이',
    members: [
      { userId: userData.natreeum, level: 'c' },
      { userId: userData.dk, level: 's' },
      { userId: userData.heali, level: 'e' },
      { userId: userData.ddpson, level: 'e' },
      { userId: userData.pazzomi, level: 'e' },
    ],
  },
  {
    //카지노
    companyName: '카지노',
    members: [
      { userId: userData.natreeum, level: 'c' },
      { userId: userData.juin10, level: 'e' },
      { userId: userData.heali, level: 's' },
      { userId: userData.ddpson, level: 's' },
      { userId: userData.cloe, level: 's' },
    ],
  },
  {
    // 창지단
    companyName: '창업지원단',
    members: [
      { userId: userData.pomo, level: 'c' },
      // { userId: userData.sojim, level: 'v' },
      // { userId: userData.fruitring, level: 's' },
      // { userId: userData.gd, level: 's' },
      // { userId: userData.dduck, level: 's' },
      { userId: userData.lua, level: 'e' },
      { userId: userData.chobom, level: 'e' },
      { userId: userData.nuri, level: 'e' },
      { userId: userData.ddpson, level: 'v' },
      { userId: userData.nalrari, level: 's' },
      { userId: userData.ella, level: 's' },
      { userId: userData.kumamon, level: 's' },
      { userId: userData.tinley, level: 'v' },
      { userId: userData.heali, level: 'e' },
      { userId: userData.zerothreetwo, level: 's' },
    ],
  },
  {
    // 인생벅전 / 더비벅타즈 / 벅트벅튼 / 벅스베가스 / 벅풍선
    companyName: '인생벅전',
    members: [
      { userId: userData.ggoma, level: 'c' },
      { userId: userData.talent, level: 's' },
      { userId: userData.woljo, level: 's' },
      { userId: userData.tomo, level: 's' },
      { userId: userData.dk, level: 's' },
      { userId: userData.hans, level: 's' },
      { userId: userData.be, level: 's' },
      { userId: userData.wonder, level: 'v' },
      { userId: userData.project7, level: 's' },
      { userId: userData.jaylim, level: 'v' },
      { userId: userData.sunny, level: 's' },
      // { userId: userData.haechan, level: "s" },
      // { userId: userData.hydra, level: "s" },
    ],
  },
  {
    // 더비벅타즈
    companyName: '더비벅타즈',
    members: [
      { userId: userData.ggoma, level: 'c' },
      { userId: userData.talent, level: 's' },
      { userId: userData.woljo, level: 's' },
      { userId: userData.tomo, level: 's' },
      { userId: userData.dk, level: 's' },
      { userId: userData.hans, level: 's' },
      { userId: userData.be, level: 's' },
      { userId: userData.wonder, level: 'v' },
      { userId: userData.project7, level: 's' },
      { userId: userData.jaylim, level: 'v' },
      { userId: userData.sunny, level: 's' },
      // { userId: userData.haechan, level: "s" },
      // { userId: userData.hydra, level: "s" },
    ],
  },
  {
    // 더비벅타즈
    companyName: '벅트벅튼',
    members: [
      { userId: userData.ggoma, level: 'c' },
      { userId: userData.talent, level: 's' },
      { userId: userData.woljo, level: 's' },
      { userId: userData.tomo, level: 's' },
      { userId: userData.dk, level: 's' },
      { userId: userData.hans, level: 's' },
      { userId: userData.be, level: 's' },
      { userId: userData.wonder, level: 'v' },
      { userId: userData.project7, level: 's' },
      { userId: userData.jaylim, level: 'v' },
      { userId: userData.sunny, level: 's' },
      // { userId: userData.haechan, level: "s" },
      // { userId: userData.hydra, level: "s" },
    ],
  },
  {
    // 벅스베가스
    companyName: '벅스베가스',
    members: [
      { userId: userData.ggoma, level: 'c' },
      { userId: userData.talent, level: 's' },
      { userId: userData.woljo, level: 's' },
      { userId: userData.tomo, level: 's' },
      { userId: userData.dk, level: 's' },
      { userId: userData.hans, level: 's' },
      { userId: userData.be, level: 's' },
      { userId: userData.wonder, level: 'v' },
      { userId: userData.project7, level: 's' },
      { userId: userData.jaylim, level: 'v' },
      { userId: userData.sunny, level: 's' },
      { userId: userData.haechan, level: 's' },
      { userId: userData.hydra, level: 'v' },
    ],
  },
  {
    // 벅풍선
    companyName: '벅풍선',
    members: [
      { userId: userData.ggoma, level: 'c' },
      { userId: userData.haechan, level: 's' },
    ],
  },
  {
    // 코코미궁
    companyName: '코코의미궁',
    members: [{ userId: userData.coco, level: 'c' }],
  },
  {
    // 버그기획
    companyName: '버그기획',
    members: [
      { userId: userData.haechan, level: 'c' },
      { userId: userData.데팍, level: 'c' },
      { userId: userData.haechan, level: 's' },
    ],
  },
  {
    // 사냥터
    companyName: '버람의나라',
    members: [
      { userId: userData.juin10, level: 'c' },
      { userId: userData.sis, level: 'e' },
      { userId: userData.qudi, level: 'e' },
      { userId: userData.jjambob, level: 's' },
      { userId: userData.ddpson, level: 's' },
    ],
  },
  {
    // 버그몬
    companyName: '버그몬',
    members: [
      { userId: userData.pomo, level: 's' },
      { userId: userData.mie, level: 'c' },
    ],
  },
  {
    // 스루벅스
    companyName: '스루벅스',
    members: [
      { userId: userData.pomo, level: 'e' },
      { userId: userData.juin10, level: 'e' },
      { userId: userData.mrjoo, level: 'c' },
    ],
  },
  {
    // 루피바
    companyName: '루피바',
    members: [
      { userId: userData.loopy, level: 'c' },
      { userId: userData.gigi, level: 's' },
      { userId: userData.sze, level: 's' },
      { userId: userData.tomo, level: 's' },
    ],
  },
  {
    // 누리끼리 스티커
    companyName: '요술옷장',
    members: [
      { userId: userData.nuri, level: 'c' },
      { userId: userData.chobom, level: 'e' },
      { userId: userData.pomo, level: 'e' },
      { userId: userData.ddpson, level: 's' },
      { userId: userData.lua, level: 's' },
      { userId: userData.jjoro, level: 's' },
      // { userId: userData.sangwoo, level: 'v' },
    ],
  },
  {
    // 머리 못하는집
    companyName: '머리못하는집',
    members: [
      { userId: userData.seoha, level: 'c' },
      { userId: userData.nuri, level: 'e' },
    ],
  },
  {
    // 초준동물농장
    companyName: '벅펫친구들',
    members: [
      { userId: userData.chobom, level: 'c' },
      { userId: userData.ddpson, level: 'c' },
      { userId: userData.syuyom, level: 'e' },
      { userId: userData.aniemare, level: 'e' },
      { userId: userData.kumamon, level: 'e' },
      { userId: userData.cloe, level: 'e' },
      { userId: userData.juin10, level: 'e' },
      { userId: userData.kumamo, level: 'e' },
      { userId: userData.donggga, level: 'e' },
      { userId: userData.rescall, level: 'e' },
    ],
  },
  {
    // 간지명함
    companyName: '간지명함',
    members: [
      { userId: userData.chobom, level: 'c' },
      { userId: userData.coco, level: 'c' },
      { userId: userData.nuri, level: 'e' },
      { userId: userData.kumamo, level: 'e' },
      { userId: userData.tomo, level: 'e' },
      { userId: userData.jinsr, level: 'e' },
      { userId: userData.rescall, level: 'e' },
    ],
  },
  {
    // 인스타홍보
    companyName: '인스타홍보',
    members: [
      { userId: userData.chobom, level: 'c' },
      { userId: userData.hongkyung, level: 'c' },
      { userId: userData.samko, level: 'e' },
      { userId: userData.kumamo, level: 'e' },
      { userId: userData.lua, level: 'e' },
      { userId: userData.michellemarine, level: 'e' },
    ],
  },
  {
    // 애니멀스튜디오
    companyName: '벅펫TV',
    members: [
      { userId: userData.chobom, level: 'c' },
      { userId: userData.ddpson, level: 'c' },
      { userId: userData.aniemare, level: 'e' },
      { userId: userData.syuyom, level: 'e' },
      { userId: userData.kumamon, level: 'e' },
      { userId: userData.cloe, level: 'e' },
      { userId: userData.juin10, level: 'e' },
      { userId: userData.kumamo, level: 'e' },
      { userId: userData.donggga, level: 'e' },
      { userId: userData.rescall, level: 'e' },
    ],
  },
  {
    // 애니멀스튜디오
    companyName: '벅펫스튜디오',
    members: [
      { userId: userData.chobom, level: 'c' },
      { userId: userData.ddpson, level: 'c' },
      { userId: userData.aniemare, level: 'e' },
      { userId: userData.syuyom, level: 'e' },
      { userId: userData.kumamon, level: 'e' },
      { userId: userData.cloe, level: 'e' },
      { userId: userData.juin10, level: 'e' },
      { userId: userData.kumamo, level: 'e' },
      { userId: userData.donggga, level: 'e' },
      { userId: userData.rescall, level: 'e' },
    ],
  },
  {
    // 양식
    companyName: '늘보와케플러',
    members: [
      { userId: userData.urban_victory, level: 'c' },
      { userId: userData.aaajaeoh, level: 'e' },
      { userId: userData.metaluca, level: 's' },
      { userId: userData.mamamumu, level: 's' },
      { userId: userData.cuisinerabbit, level: 'e' },
      { userId: userData.misolatte, level: 'e' },
      { userId: userData.enovationera, level: 's' },
    ],
  },
  {
    //도장샵
    companyName: '늘보도장샵',
    members: [
      { userId: userData.mamamumu, level: 'c' },
      { userId: userData.metaluca, level: 'c' },
      { userId: userData.aaajaeoh, level: 'e' },
      { userId: userData.bugdisha, level: 'e' },
      { userId: userData.cuisinerabbit, level: 's' },
      { userId: userData.misolatte, level: 's' },
      { userId: userData.enovationera, level: 's' },
    ],
  },
  {
    // 투귀단
    companyName: '투귀단',
    members: [
      { userId: userData.samko, level: 'c' },
      { userId: userData.positivecoin, level: 'e' },
      { userId: userData.dk, level: 'e' },
      { userId: userData.huf, level: 'e' },
      { userId: userData.qudi, level: 'e' },
      { userId: userData.jinhyeok, level: 's' },
      { userId: userData.salt, level: 's' },
      { userId: userData.pazzomi, level: 's' },
      { userId: userData.jjoro, level: 's' },
      { userId: userData.haechan, level: 's' },
      { userId: userData.nobiguri, level: 'v' },
      { userId: userData.hans, level: 'v' },
    ],
  },
  {
    // 캔바디바
    companyName: '캔바디바',
    members: [
      { userId: userData.tinley, level: 'c' },
      { userId: userData.minisco, level: 'e' }, //레호
      { userId: userData.j, level: 'e' }, //메이라
      { userId: userData.bingohyejeong, level: 'e' }, //클로바
      { userId: userData.meira, level: 's' }, //두둥
      { userId: userData.seethrough, level: 'e' },
      { userId: userData.nadame, level: 's' },
      { userId: userData.thankalways, level: 's' },
      { userId: userData.lifero, level: 's' },
    ],
  },
  {
    // 날라리발까락
    companyName: '날라리발까락',
    members: [
      { userId: userData.nalrari, level: 'c' },
      { userId: userData.lua, level: 'e' },
      { userId: userData.michellemarine, level: 'e' },
      { userId: userData.hongkyung, level: 'e' },
      { userId: userData.reho, level: 's' },
      { userId: userData.iliruda, level: 's' },
      { userId: userData.ella, level: 's' },
      { userId: userData.clova, level: 's' },
      { userId: userData.womanpower, level: 's' },
      { userId: userData.caessaem, level: 'e' },
    ],
  },
  {
    // 벅송국
    companyName: '벅송국',
    members: [
      { userId: userData.pazzomi, level: 'c' },
      { userId: userData.zeeto, level: 'e' },
      { userId: userData.lunalena, level: 's' },
      { userId: userData.iliruda, level: 's' },
      { userId: userData.tomo, level: 's' },
      { userId: userData.luckydouble, level: 's' },
      { userId: userData.mokjo, level: 's' },
      { userId: userData.kumamon, level: 's' },
      { userId: userData.uncover, level: 's' },
    ],
  },
  {
    // 힐링하우스
    companyName: '힐링하우스',
    members: [
      { userId: userData.ludikkami, level: 'c' },
      { userId: userData.lua, level: 'c' },
      { userId: userData.nalrari, level: 'e' },
      { userId: userData.michellemarine, level: 's' },
      { userId: userData.hongkyung, level: 's' },
      { userId: userData.reho, level: 's' },
    ],
  },
  {
    // 카멜레옹
    companyName: '카멜레옹',
    members: [
      { userId: userData.reho, level: 'c' },
      { userId: userData.lua, level: 'e' },
      { userId: userData.michellemarine, level: 'e' },
      { userId: userData.nalrari, level: 'e' },
      { userId: userData.iliruda, level: 's' },
      { userId: userData.hongkyung, level: 's' },
      { userId: userData.dudung, level: 's' },
      { userId: userData.clova, level: 's' },
      { userId: userData.ella, level: 's' },
      { userId: userData.syeoni, level: 'e' }, // 셔니
    ],
  },
  {
    // 짤막하세
    companyName: '짤막하세',
    members: [
      { userId: userData.luckydouble, level: 'c' },
      { userId: userData.kkom, level: 'e' },
      { userId: userData.valeria, level: 'e' },
      { userId: userData.chobom, level: 's' },
      { userId: userData.syuyom, level: 's' },
    ],
  },
  {
    // 마음상담소
    companyName: '마음상담소',
    members: [
      { userId: userData.hongkyung, level: 'c' },
      { userId: userData.lua, level: 'e' },
      { userId: userData.michellemarine, level: 'e' },
      { userId: userData.nalrari, level: 'e' },
      { userId: userData.jia, level: 's' },
      { userId: userData.caessaem, level: 's' },
      { userId: userData.utja, level: 's' },
      { userId: userData.clova, level: 's' },
      { userId: userData.syuyom, level: 's' },
      { userId: userData.yuchaehyang, level: 's' },
    ],
  },
  {
    // 벅켓몬
    companyName: '벅켓몬',
    members: [
      { userId: userData.syuyom, level: 'c' },
      { userId: userData.luckydouble, level: 'c' },
      { userId: userData.kumamon, level: 'e' },
      { userId: userData.michellemarine, level: 'e' },
      { userId: userData.cloe, level: 's' },
      { userId: userData.tinley, level: 's' },
      { userId: userData.kkom, level: 's' },
      { userId: userData.nimporte, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '뽀롱스튜디오',
    members: [
      { userId: userData.pporong, level: 'c' },
      { userId: userData.urban_victory, level: 'e' },
      { userId: userData.metaluca, level: 's' },
      { userId: userData.mamamumu, level: 's' },
      { userId: userData.enovationera, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '개쎈샵',
    members: [
      { userId: userData.kumamo, level: 'c' },
      { userId: userData.nuri, level: 'e' },
      { userId: userData.cloe, level: 's' },
      { userId: userData.chobom, level: 's' },
    ],
  },
  {
    // 양식
    companyName: 'EB픽셀학원',
    members: [
      { userId: userData.eb, level: 'c' },
      { userId: userData.kumamo, level: 'e' },
      { userId: userData.sze, level: 's' },
      { userId: userData.gigi, level: 'v' },
      { userId: userData.pazzomi, level: 'v' },
      { userId: userData.luckydouble, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '럭겟몬 행운권',
    members: [
      { userId: userData.michellemarine, level: 'c' },
      { userId: userData.luckydouble, level: 'e' },
      { userId: userData.pomo, level: 'e' },
      { userId: userData.uncover, level: 'e' },
      { userId: userData.pazzomi, level: 's' },
      { userId: userData.chobom, level: 's' },
      { userId: userData.syuyom, level: 's' },
      { userId: userData.tinley, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '동블리',
    members: [
      { userId: userData.nobiguri, level: 'c' },
      { userId: userData.ddpson, level: 'e' },
      { userId: userData.chobom, level: 'e' },
      { userId: userData.samko, level: 'e' },
      { userId: userData.hongkyung, level: 's' },
      { userId: userData.cuisinerabbit, level: 's' },
      { userId: userData.positivecoin, level: 's' },
      { userId: userData.marieinara, level: 's' },
      { userId: userData.andrew, level: 's' },
      { userId: userData.sunny, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '럭겟몬 코스튬',
    members: [
      { userId: userData.lua, level: 'c' },
      { userId: userData.luckydouble, level: 'e' },
      { userId: userData.nimporte, level: 'e' },
      { userId: userData.jelly, level: 'e' },
      { userId: userData.diumiu, level: 'e' },
      { userId: userData.ppukkaeng, level: 's' },
      { userId: userData.yuchaehyang, level: 's' },
      { userId: userData.seoyoung, level: 's' },
      { userId: userData.syuyom, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '벅생실험실',
    members: [
      { userId: userData.heali, level: 'c' },
      { userId: userData.uncover, level: 'e' },
      { userId: userData.natreeum, level: 'e' },
      { userId: userData.donggga, level: 'e' },
      { userId: userData.kumamon, level: 'e' },
      { userId: userData.michellemarine, level: 'e' },
      { userId: userData.hongkyung, level: 'e' },
      { userId: userData.syuyom, level: 'e' },
      { userId: userData.pomo, level: 's' },
      { userId: userData.iliruda, level: 's' },
      { userId: userData.cuisinerabbit, level: 's' },
      { userId: userData.chobom, level: 's' },
      { userId: userData.ddpson, level: 's' },
      { userId: userData.ella, level: 's' },
      { userId: userData.reho, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '1분벅트',
    members: [
      { userId: userData.zerothreetwo, level: 'c' },
      { userId: userData.donggga, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '블링빌웹3학원',
    members: [
      { userId: userData.michellemarine, level: 'c' },
      { userId: userData.daengdaeng, level: 'c' },
      { userId: userData.caessaem, level: 'c' },
      { userId: userData.lua, level: 'e' },
      { userId: userData.polo, level: 'e' },
      { userId: userData.nanggu, level: 'e' },
      { userId: userData.jia, level: 'e' },
      { userId: userData.utja, level: 'e' },
      { userId: userData.reho, level: 's' },
      { userId: userData.nalrari, level: 's' },
      { userId: userData.lunalena, level: 's' },
      { userId: userData.sarangni, level: 's' },
      { userId: userData.hongkyung, level: 's' },
      { userId: userData.ludikkami, level: 's' },
      { userId: userData.clova, level: 's' },
      { userId: userData.ella, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '럭겟몬 경매',
    members: [
      { userId: userData.syuyom, level: 'c' },
      { userId: userData.luckydouble, level: 's' },
      { userId: userData.kumamon, level: 's' },
      { userId: userData.michellemarine, level: 's' },
      { userId: userData.lua, level: 's' },
      { userId: userData.uncover, level: 's' },
      { userId: userData.tinley, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '임금님귀는당나귀귀',
    members: [
      { userId: userData.meira, level: 'c' },
      { userId: userData.yoronge, level: 'e' },
      { userId: userData.nanggu, level: 'v' },
      { userId: userData.j, level: 's' },
      { userId: userData.lifero, level: 's' },
      { userId: userData.juin10, level: 'e' },
    ],
  },
  {
    // 양식
    companyName: '벅찰서',
    members: [
      { userId: userData.pazzomi, level: 'c' },
      { userId: userData.pepe, level: 's' },
      { userId: userData.usha, level: 's' },
      { userId: userData.jasingamman, level: 's' },
      { userId: userData.tomo, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '벅공대',
    members: [
      { userId: userData.sunny, level: 'c' },
      { userId: userData.chobom, level: 'c' },
      { userId: userData.hongkyung, level: 'e' },
      { userId: userData.rescall, level: 'e' },
      { userId: userData.kkom, level: 'e' },
      { userId: userData.michellemarine, level: 'e' },
      { userId: userData.syuyom, level: 'e' },
      { userId: userData.pazzomi, level: 'e' },
      { userId: userData.donggga, level: 'e' },
      { userId: userData.lua, level: 'e' },
      { userId: userData.pomo, level: 'e' },
      { userId: userData.daengdaeng, level: 'e' },
      { userId: userData.bo, level: 'e' },
      { userId: userData.dk, level: 'e' },
      { userId: userData.nuri, level: 'e' },
      { userId: userData.kumamon, level: 'e' },
      { userId: userData.heali, level: 'e' },
      { userId: userData.kumamo, level: 'e' },
      { userId: userData.samko, level: 'e' },
      { userId: userData.neo, level: 'e' },
      { userId: userData.luckydouble, level: 'e' },
    ],
  },
  {
    // 양식
    companyName: '소리책빵',
    members: [
      { userId: userData.minisco, level: 'c' },
      { userId: userData.tinley, level: 'e' },
      { userId: userData.meira, level: 'e' },
      { userId: userData.naldasooni, level: 's' },
      { userId: userData.buggoori, level: 's' },
      { userId: userData.nadame, level: 's' },
      { userId: userData.bogaro, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '약꾹',
    members: [
      { userId: userData.lua, level: 'c' },
      { userId: userData.maksae, level: 'c' },
      { userId: userData.uncover, level: 'e' },
      { userId: userData.ella, level: 'e' },
      { userId: userData.womanpower, level: 's' },
      { userId: userData.ludikkami, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '핸쓰기몰',
    members: [
      { userId: userData.haenssugi, level: 'c' },
      { userId: userData.michellemarine, level: 'e' },
      { userId: userData.luckydouble, level: 'e' },
      { userId: userData.alcong, level: 's' },
      { userId: userData.seoyoung, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
  {
    // 양식
    companyName: '사업체 이름',
    members: [
      { userId: userData.사장, level: 'c' },
      { userId: userData.임원, level: 'e' },
      { userId: userData.직원, level: 's' },
    ],
  },
];

module.exports = {
  wage1,
  wage2,
  wage3,
  wage_t,
  companies,
  ownerId,
  staffs,
};
