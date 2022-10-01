const userData = require(`./userdata`);

const wage = {
  c: 60, // 사장
  e: 50, // 임원
  s: 40, // 직원
};

const ownerId = "251349298300715008";

const companies = [
  {
    //벅크셔해서웨이
    companyName: "벅크셔해서웨이",
    members: [
      { userId: userData.natreeum, level: "c" },
      { userId: userData.dk, level: "s" },
    ],
  },
  {
    //카지노
    companyName: "카지노",
    members: [
      { userId: userData.natreeum, level: "c" },
      { userId: userData.juin10, level: "s" },
    ],
  },
  {
    // 창지단
    companyName: "창업지원단",
    members: [
      { userId: userData.pomo, level: "c" },
      { userId: userData.jjoro, level: "c" },
      { userId: userData.sojim, level: "e" },
      { userId: userData.fruitring, level: "e" },
      { userId: userData.gd, level: "e" },
      { userId: userData.dduck, level: "e" },
      { userId: userData.lua, level: "s" },
    ],
  },
  {
    // 인생벅전
    companyName: "인생벅전",
    members: [
      { userId: userData.ggoma, level: "c" },
      { userId: userData.talent, level: "s" },
      { userId: userData.woljo, level: "s" },
      { userId: userData.tomo, level: "s" },
      { userId: userData.dk, level: "s" },
      { userId: userData.hans, level: "s" },
      { userId: userData.be, level: "s" },
      { userId: userData.wonder, level: "s" },
      { userId: userData.project7, level: "s" },
      { userId: userData.jaylim, level: "s" },
      { userId: userData.sunny, level: "s" },
      { userId: userData.haechan, level: "s" },
      { userId: userData.hydra, level: "s" },
    ],
  },
  {
    // 더비벅타즈
    companyName: "더비벅타즈",
    members: [
      { userId: userData.ggoma, level: "c" },
      { userId: userData.talent, level: "s" },
      { userId: userData.woljo, level: "s" },
      { userId: userData.tomo, level: "s" },
      { userId: userData.dk, level: "s" },
      { userId: userData.hans, level: "s" },
      { userId: userData.be, level: "s" },
      { userId: userData.wonder, level: "s" },
      { userId: userData.project7, level: "s" },
      { userId: userData.jaylim, level: "s" },
      { userId: userData.sunny, level: "s" },
      { userId: userData.haechan, level: "s" },
      { userId: userData.hydra, level: "s" },
    ],
  },
  {
    // 더비벅타즈
    companyName: "벅트벅튼",
    members: [
      { userId: userData.ggoma, level: "c" },
      { userId: userData.talent, level: "s" },
      { userId: userData.woljo, level: "s" },
      { userId: userData.tomo, level: "s" },
      { userId: userData.dk, level: "s" },
      { userId: userData.hans, level: "s" },
      { userId: userData.be, level: "s" },
      { userId: userData.wonder, level: "s" },
      { userId: userData.project7, level: "s" },
      { userId: userData.jaylim, level: "s" },
      { userId: userData.sunny, level: "s" },
      { userId: userData.haechan, level: "s" },
      { userId: userData.hydra, level: "s" },
    ],
  },
  {
    // 벅스베가스
    companyName: "벅스베가스",
    members: [
      { userId: userData.ggoma, level: "c" },
      { userId: userData.talent, level: "s" },
      { userId: userData.woljo, level: "s" },
      { userId: userData.tomo, level: "s" },
      { userId: userData.dk, level: "s" },
      { userId: userData.hans, level: "s" },
      { userId: userData.be, level: "s" },
      { userId: userData.wonder, level: "s" },
      { userId: userData.project7, level: "s" },
      { userId: userData.jaylim, level: "s" },
      { userId: userData.sunny, level: "s" },
      { userId: userData.haechan, level: "s" },
      { userId: userData.hydra, level: "s" },
    ],
  },
  {
    // 느프트지원단
    companyName: "느프트지원단",
    members: [
      { userId: userData.ggoma, level: "c" },
      { userId: userData.talent, level: "c" },
      { userId: userData.woljo, level: "c" },
      { userId: userData.tomo, level: "c" },
      { userId: userData.dk, level: "c" },
      { userId: userData.project7, level: "c" },
      { userId: userData.sunny, level: "c" },
      { userId: userData.inochi, level: "c" },
    ],
  },
  {
    // 코코미궁
    companyName: "코코의미궁",
    members: [{ userId: userData.coco, level: "c" }],
  },
  {
    // 버그기획
    companyName: "버그기획",
    members: [
      { userId: userData.haechan, level: "c" },
      { userId: userData.데팍, level: "c" },
      { userId: userData.haechan, level: "s" },
    ],
  },
  {
    // 사냥터
    companyName: "사냥물품거래소",
    members: [
      { userId: userData.juin10, level: "c" },
      { userId: userData.sis, level: "e" },
      { userId: userData.qudi, level: "e" },
      { userId: userData.jjambob, level: "e" },
    ],
  },
  {
    // 버그몬
    companyName: "버그몬",
    members: [
      { userId: userData.pomo, level: "s" },
      { userId: userData.mie, level: "c" },
    ],
  },
  {
    // 스루벅스
    companyName: "스루벅스",
    members: [
      { userId: userData.pomo, level: "e" },
      { userId: userData.juin10, level: "e" },
      { userId: userData.mrjoo, level: "c" },
    ],
  },
  {
    // 루피바
    companyName: "루피바",
    members: [
      { userId: userData.loopy, level: "c" },
      { userId: userData.gigi, level: "s" },
      { userId: userData.sze, level: "s" },
      { userId: userData.tomo, level: "s" },
    ],
  },
  {
    // 누리끼리 스티커
    companyName: "누리끼리스티커",
    members: [
      { userId: userData.nuri, level: "c" },
      { userId: userData.jjoro, level: "e" },
      { userId: userData.sangwoo, level: "e" },
    ],
  },
  {
    // 머리 못하는집
    companyName: "머리못하는집",
    members: [
      { userId: userData.seoha, level: "c" },
      { userId: userData.nuri, level: "e" },
    ],
  },
  {
    // 초준동물농장
    companyName: "초준동물농장",
    members: [
      { userId: userData.chobom, level: "c" },
      { userId: userData.ddpson, level: "c" },
      { userId: userData.syuyom, level: "e" },
      { userId: userData.haechan, level: "s" },
    ],
  },
  {
    // 개지리는명함
    companyName: "개지리는명함",
    members: [
      { userId: userData.chobom, level: "c" },
      { userId: userData.coco, level: "c" },
      { userId: userData.kumamo, level: "e" },
      { userId: userData.nuri, level: "e" },
      { userId: userData.tomo, level: "e" },
    ],
  },
  {
    // 인스타홍보
    companyName: "인스타홍보",
    members: [
      { userId: userData.chobom, level: "c" },
      { userId: userData.hongkyung, level: "c" },
      { userId: userData.tinley, level: "c" },
      { userId: userData.samko, level: "e" },
      { userId: userData.kumamo, level: "e" },
    ],
  },
  {
    // 양식
    companyName: "사업체 이름",
    members: [{ userId: userData.pomo, level: "c" }],
  },
  {
    // 양식
    companyName: "사업체 이름",
    members: [{ userId: userData.pomo, level: "c" }],
  },
  {
    // 양식
    companyName: "사업체 이름",
    members: [{ userId: userData.pomo, level: "c" }],
  },
  {
    // 양식
    companyName: "사업체 이름",
    members: [{ userId: userData.pomo, level: "c" }],
  },
  {
    // 양식
    companyName: "사업체 이름",
    members: [{ userId: userData.pomo, level: "c" }],
  },
  {
    // 양식
    companyName: "사업체 이름",
    members: [{ userId: userData.pomo, level: "c" }],
  },
  {
    // 양식
    companyName: "사업체 이름",
    members: [{ userId: userData.pomo, level: "c" }],
  },
  {
    // 양식
    companyName: "사업체 이름",
    members: [{ userId: userData.pomo, level: "c" }],
  },
];

module.exports = {
  wage,
  companies,
  ownerId,
};
