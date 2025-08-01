const boxes = document.querySelectorAll(".box");

const output = document.getElementById("winner");
const win = document.getElementById("win");
const games = document.getElementsByClassName("games");

// console.log(games);

let turn0 = true;
const winnerPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("clicked");
    if (turn0) {
      box.innerText = "X";
      box.classList.add("px");
      box.classList.remove("p0");
      turn0 = false;
    } else {
      box.innerText = "0";
      box.classList.add("p0");
      box.classList.remove("px");
      turn0 = true;
    }
    box.style.pointerEvents = "none";

    for (let winner of winnerPatterns) {
      //   console.log(
      //     boxes[winner[0]].innerText,
      //     boxes[winner[1]].innerText,
      //     boxes[winner[2]].innerText
      //   );
      const val1 = boxes[winner[0]].innerText;
      const val2 = boxes[winner[1]].innerText;
      const val3 = boxes[winner[2]].innerText;

      if (val1 != "" && val2 != "" && val3 != "") {
        if (val1 === val2 && val2 === val3) {
          console.log(`${val1} is the winner`);
          win.classList.remove("hide");
          games[0].classList.add("hide");
          output.innerText = `${val1} is the winner`;
          newGame();
          resetGame();
        }
      }
    }
  });
});

const new_btn = document.getElementById("new");
const reset = document.getElementById("reset");
const newGame = () => {
  new_btn.addEventListener("click", () => {
    win.classList.add("hide");
    games[0].classList.remove("hide");
    boxes.forEach((box) => {
      box.innerText = "";
      box.classList.remove("px", "p0");
      box.style.pointerEvents = "auto";
    });
  });
};

const resetGame = () => {
  reset.addEventListener("click", () => {
    boxes.forEach((box) => {
      console.log("reset clicked");

      box.innerText = "";
      box.classList.remove("px", "p0");
      box.style.pointerEvents = "auto";
    });
  });
};
