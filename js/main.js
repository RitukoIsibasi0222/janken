const chooseImg = document.querySelectorAll(".choose__img-box img");
let choice = [];
let countPlayer = 0;
let countComputer = 0;

chooseImg.forEach((img) => {
  img.addEventListener("click", () => {
    // 選んだ手にあなたの画像を変更
    if (img.classList.contains("_01")) {
      document.querySelector(".you").src = "./img/01.png";
      choice.push(0);
    } else if (img.classList.contains("_02")) {
      document.querySelector(".you").src = "./img/02.png";
      choice.push(1);
    } else if (img.classList.contains("_03")) {
      document.querySelector(".you").src = "./img/03.png";
      choice.push(2);
    }
    // console.log(choice + "push");

    // 手をクリックしたらランダムにコンピュタの画像を変更
    const random = Math.floor(Math.random() * 3) + 1;
    const imgPath = "./img/" + 0 + random + ".png";
    document.querySelector(".computer").src = imgPath;

    // じゃんけんの勝敗を判定
    function judgement() {
      let computerChoice = random - 1;
      choice = choice.slice(-1);
      const choiceInt = parseInt(choice);

      // console.log(choice + "choice");
      console.log(computerChoice);

      // document.querySelector(".judgement").innerText = "You chose: " + choice + ", Computer chose: " + computerChoice;

      if (choiceInt === computerChoice) {
        document.querySelector(".judgement").innerText = "あいこ";
      } else if ((choiceInt === 0 && computerChoice === 1) || (choiceInt === 1 && computerChoice === 2) || (choiceInt === 2 && computerChoice === 0)) {
        document.querySelector(".judgement").innerText = "あなたの勝ち!";
        // あなたの勝ちの場合、countPlayerを1増やす
        countPlayer++;
        document.querySelector("#count__player").innerText = countPlayer;
      } else {
        document.querySelector(".judgement").innerText = "コンピュータの勝ち";
        // コンピュタの勝ちの場合、countComputerを1増やす
        countComputer++;
        document.querySelector(".count__computer").innerText = countComputer;
      }
    }

    judgement();

    // result__textに勝敗を表示
    if (countPlayer === 3) {
      document.querySelector(".result__text").innerText = "あなたの勝ち!";
      // クリックできないようにする
      chooseImg.forEach((img) => {
        img.style.pointerEvents = "none";
      });
    } else if (countComputer === 3) {
      document.querySelector(".result__text").innerText = "コンピュータの勝ち";
      // クリックできないようにする
      chooseImg.forEach((img) => {
        img.style.pointerEvents = "none";
      });
    }
  });
});

// resetボタンをクリックしたらリセット
document.querySelector(".reset").addEventListener("click", () => {
  chooseImg.forEach((img) => {
    img.style.pointerEvents = "auto";
  });
  document.querySelector(".you").src = "./img/01.png";
  document.querySelector(".computer").src = "./img/01.png";
  document.querySelector(".judgement").innerText = "";
  document.querySelector(".result__text").innerText = "";
  document.querySelector(".count__player").innerText = 0;
  document.querySelector(".count__computer").innerText = 0;
  choice = [];
  countPlayer = 0;
  countComputer = 0;
});
