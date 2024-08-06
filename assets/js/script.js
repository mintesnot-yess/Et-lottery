var numbers = document.querySelector(".numbers");
var choosed_numbers1 = document.querySelector(".choosed_numbers1");
var choosed_numbers2 = document.querySelector(".choosed_numbers2");
var choosed_numbers3 = document.querySelector(".choosed_numbers3");
var choosed_numbers4 = document.querySelector(".choosed_numbers4");
var choosed_numbers5 = document.querySelector(".choosed_numbers5");
var number_choosed = document.querySelector(".number_choosed ");
var game_play_controller = document.querySelector(".game_play_controller ");
// ? pages
var homePage = document.querySelector(".home ");
var user_controll = document.querySelector(".user_controll");
//---------------------------------

var num_play = document.querySelector(".num_play");
var latest_win_num = document.querySelector(".latest_win_num");
var win_num = document.getElementById("win_num");
var querty_balance = document.getElementById("querty_balance");
var winner_container = document.querySelector(".win_alert_cont");
var loser_container = document.querySelector(".lost_alert_cont");

var rundom_number = Math.floor(Math.random() * 9000) + 10000;

latest_win_num.value = rundom_number;
win_num.innerHTML = rundom_number;

for (var i = 0; i < 10; i++) {
  numbers.innerHTML += "<button class='btn' onclick='handleClick(" + i + ")'>" + i + "</button> ";
}

function handleClick(number) {
  if (choosed_numbers1.value === "") {
    choosed_numbers1.innerHTML = number;
    choosed_numbers1.value = number;
    actions(choosed_numbers1);
  } else {
    if (choosed_numbers2.value === "") {
      choosed_numbers2.innerHTML = number;
      choosed_numbers2.value = number;
      actions(choosed_numbers2);
    } else {
      if (choosed_numbers3.value === "") {
        choosed_numbers3.innerHTML = number;
        choosed_numbers3.value = number;
        actions(choosed_numbers3);
      } else {
        if (choosed_numbers4.value === "") {
          choosed_numbers4.innerHTML = number;
          choosed_numbers4.value = number;
          actions(choosed_numbers4);
        } else {
          if (choosed_numbers5.value === "") {
            choosed_numbers5.innerHTML = number;
            choosed_numbers5.value = number;
            actions(choosed_numbers1);
            actions(choosed_numbers2);
            actions(choosed_numbers3);
            actions(choosed_numbers4);
            actions(choosed_numbers5);
          } else {
            console.log("choose only 5 numbers");
          }
        }
      }
    }
  }
  if (
    choosed_numbers1.value &&
    choosed_numbers2.value &&
    choosed_numbers3.value &&
    choosed_numbers4.value &&
    choosed_numbers5.value
  ) {
    number_choosed.style.border = "solid 1px green";
  } else {
    number_choosed.style.border = "solid 1px transparent";
  }
}

function play_now() {
  if (Number(querty_balance.innerHTML) >= 100) {
    var all_choosed_num = Number(
      choosed_numbers1.value + choosed_numbers2.value + choosed_numbers3.value + choosed_numbers4.value + choosed_numbers5.value
    );

    if (
      choosed_numbers1.value === "" ||
      choosed_numbers2.value === "" ||
      choosed_numbers3.value === "" ||
      choosed_numbers4.value === "" ||
      choosed_numbers5.value === ""
    ) {
      number_choosed.style.border = "solid 1px red";
    } else {
      if (all_choosed_num === rundom_number) {
        console.log("Congratulations, you win!");
        add_point();
        latest_win_num.value = rundom_number;
      } else {
        console.log("try again");
        remove_point();
      }
    }
  } else {
    alert("Insufficient balance!");
  }
}

function add_point() {
  querty_balance.innerHTML = Number(querty_balance.innerHTML) + 100;
  querty_balance.style.animation = "money_anim 1s ";
  winner_container.style.display = "flex";
}
function remove_point() {
  querty_balance.innerHTML = Number(querty_balance.innerHTML) - 100;
  querty_balance.style.animation = "money_anim 1s ";
  loser_container.style.display = "flex";
}

function remove_choose_num(card) {
  card.innerHTML = "";
  card.value = "";
  actions(card, "error");
  number_choosed.style.border = "solid 1px transparent";
}

function actions(card, status) {
  if (status === "error") {
    card.style.animation = "alert_animation 1s";
    card.style.border = "solid 1px red";
  } else {
    card.style.border = "solid 1px green";
  }
}

function GameContainer() {
  game_play_controller.style.display = "flex";
  homePage.style.display = "none";
}
function home() {
  game_play_controller.style.display = "none";
  homePage.style.display = "block";
  loser_container.style.display = "none";
  winner_container.style.display = "none";
  user_controll.style.display = "none";
}

function account() {
  user_controll.style.display = "flex";
  homePage.style.display = "none";
  loser_container.style.display = "none";
  winner_container.style.display = "none";
  game_play_controller.style.display = "none";
}

// PLAY AGAIN
function playAgain() {
  loser_container.style.display = "none";
  winner_container.style.display = "none";
  choosed_numbers1.value = "";
  choosed_numbers2.value = "";
  choosed_numbers3.value = "";
  choosed_numbers4.value = "";
  choosed_numbers5.value = "";
}

var side_navs = document.querySelectorAll(".side_nav");
side_navs.forEach(side_nav => {
  side_nav.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    side_nav.classList.add("active");
  });
});
