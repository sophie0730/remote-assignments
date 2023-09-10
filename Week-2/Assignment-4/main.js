/* 1. If Welcome message is clicked, the text will be changed to "Have a Good Time!"
   2. Click the button then show those hidden content boxes  */

let msg = document.querySelector(".welcomeMessage");
let test = document.querySelector(".information");
let imgAdd = 'url("../../Week-2/Assignment-4/goodBye.jpg")';
msg.addEventListener("click", () => {
  let msgTitle = document.querySelector(".welcomeMessage h1");
  msgTitle.textContent = "Have a Good Time!";
  msg.style.backgroundImage = imgAdd;
});

let moreInfo = document.querySelector(".moreInfo");
moreInfo.addEventListener("click", () => {
  let hiddenBlock = document.querySelector(".hiddenBlock");
  if (moreInfo.innerHTML === "了解更多訊息") {
    hiddenBlock.style.display = "flex";
    moreInfo.innerHTML = "收合下列訊息";
  } else if (moreInfo.innerHTML === "收合下列訊息") {
    hiddenBlock.style.display = "none";
    moreInfo.innerHTML = "了解更多訊息";
  }
});
