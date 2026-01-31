const heart = document.getElementById("heart");
const mainScreen = document.getElementById("mainScreen");
const giftScreen = document.getElementById("giftScreen");

heart.addEventListener("click", () => {
  mainScreen.classList.remove("active");
  giftScreen.classList.add("active");
});
