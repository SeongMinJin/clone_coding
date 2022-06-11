const quotes = [
  {
    quote : "내가 하면 로맨스 남이 하면 불륜.",
    author : "작자 미상",
  },
  {
    quote : "아버지는 자전거 타는법이 아니라 사는법을 가르쳐줘야 한다.",
    author : "쓰러진 팔자",
  },
  {
    quote : "고통은 불가피하지만 괴로움은 선택이다.",
    author : "석가모니",
  },
  {
    quote : "돈이 많다고 무조건 행복하진 않지만 돈이 없으면 불행하다.",
    author : "그저 그런 하루",
  },
  {
    quote : "최고의 복수는 성공이다.",
    author : "전한길",
  },
  {
    quote : "자기 싫은 밤과 일어나기 싫은 아침.",
    author : "낮져밤이",
  },
  {
    quote : "만남은 쉽고 이별은 어려워.",
    author : "대한민국 랩퍼",
  },
  {
    quote : "계란을 한 바구니에 담지마라.",
    author : "유튜버 김계란",
  },
  {
    quote : "나는 어렸을 때 부터 피아노를 쳤어.",
    author : "랩퍼 창모",
  },
  {
    quote : "실패를 통해 배운것이 있다면 그 또한 성공이라.",
    author : "실패한 사람",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;