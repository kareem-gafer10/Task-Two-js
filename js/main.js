var arr = [
  {
    quote: "“ Be yourself; everyone else is already taken.” ",
    auther: "― Oscar Wilde",
  },
  {
    quote: "“So many books, so little time.”",
    auther: "― Frank Zappa ",
  },
  {
    quote: "“If you tell the truth, you donnt have to remember anything.”",
    auther: "― Mark Twain ",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    auther: "― Marcus Tullius Cicero ",
  },
  {
    quote: "“We accept the love we think we deserve.”",
    auther: "― Stephen Chbosky",
  },
  {
    quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
    auther: "― Oscar Wilde ",
  },
];



function myQuotes(){
    var num = Math.floor ( Math.random()*arr.length);
    document.getElementById('quoteOutput').innerHTML =arr[num].quote ;
    document.getElementById('quoteAuther').innerHTML = arr[num].auther ;
}