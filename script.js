const buttons = document.querySelectorAll(".vote-btn");
let vote = "";

for (let x of buttons) {
  x.addEventListener("click", () => {
    vote = x.value;

    buttons.forEach((btn) => btn.classList.remove("active"));
    x.classList.add("active");
  });
}

const submitBtn = document.getElementById("submit-btn");
const voteCard = document.getElementById("vote-card");
const thankYouCard = document.getElementById("thank-you-card");

submitBtn.addEventListener("click", () => {
  if (vote != "") {
    voteCard.classList.add("hidden");
    thankYouCard.classList.remove("hidden");
    document.getElementById("vote").innerHTML = vote;
  }
});
