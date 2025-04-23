window.onLoad=()=>{
  todayDate();
  quotesNew();

  if (localStorage.getItem("usrname") != null) {
    document.querySelector(".popup").style.display = "none";
    document.querySelector("#hello").innerHTML =
      "Hello, \n" +
      localStorage.getItem("usrname") +
      "<i class="fa-solid fa-user fa-xl"></i>";
  }
}

function dateChange() {
  let date = document.querySelector("#date").value;
  let text = document.querySelector("#text");
  text.value = localStorage.getItem(date);
  console.log(date);
  quotesNew();
}

function save() {
  let text = document.querySelector("#text").value;
  let date = document.querySelector("#date").value;
  localStorage.setItem(date, text);
  alert("Saved!");
}

function todayDate() {
  let tdate = new Date();
  let day = tdate.getDate();
  let month = tdate.getMonth() + 1;

  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }

  let year = tdate.getFullYear();
  document.querySelector("#date").value = `${year}-${month}-${day}`;
  let date = document.querySelector("#date").value;
  let text = document.querySelector("#text");
  text.value = localStorage.getItem(date);
  console.log(date);
}

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The key to success is to focus on goals, not obstacles.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Creativity is intelligence having fun.",
  "The way to get started is to quit talking and begin doing.",
  "Act as if what you do makes a difference. It does.",
  "Quality means doing it right when no one is looking.",
  "The future depends on what you do today.",
  "Don’t be afraid to give up the good to go for the great.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Don’t limit your challenges. Challenge your limits.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "In the middle of every difficulty lies opportunity.",
  "Believe you can and you're halfway there.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "Try not to become a man of success, but rather try to become a man of value.",
  "Hard work beats talent when talent doesn’t work hard.",
  "You miss 100% of the shots you don’t take.",
  "Opportunities don't happen. You create them.",
  "A goal without a plan is just a wish.",
  "Start where you are. Use what you have. Do what you can.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The secret of getting ahead is getting started.",
  "It always seems impossible until it’s done.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "Whether you think you can or think you can’t, you’re right.",
  "Only those who dare to fail greatly can ever achieve greatly.",
  "Action is the foundational key to all success.",
  "The best revenge is massive success.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "Stay hungry. Stay foolish."
];

const quotesNew = () => {
  let h1 = document.querySelector("#quote");
  let randomIndex = Math.floor(Math.random() * quotes.length);
  h1.innerHTML = `" ${quotes[randomIndex]}"`;
};

const popupSave = () => {
  var name = document.querySelector("#username").value;
  localStorage.setItem("usrname", name);
  document.querySelector(".popup").style.display = "none";
  document.querySelector("#hello").innerHTML =
    "Hello, \n" + name + '  <i class="fa-solid fa-user fa-xl"></i>';

  let d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  document.querySelector("#hello").innerHTML += `<br>${hour}:${min}`;
};

if(name==null){
  document.querySelector("#hello").innerHTML =""
}


