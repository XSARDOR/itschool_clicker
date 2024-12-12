document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("name-modal");
  const usernameInput = document.getElementById("username");
  const startGameButton = document.getElementById("start-game");
  const gameContainer = document.getElementById("game-container");
  const greeting = document.getElementById("greeting");
  const clickerCoin = document.getElementById("clicker-coin");
  const clickerCoin2 = document.getElementById("clicker-coin-2");
  const clickerCoin3 = document.getElementById("clicker-coin-2");
  const clickCount = document.getElementById("click-count");
  const emojiContainer = document.getElementById("emoji-container");

  let count = 0;

  startGameButton.addEventListener("click", () => {
    const name = usernameInput.value.trim();
    if (name) {
      greeting.textContent = `Xush kelibsiz, ${name}!`;
      modal.style.display = "none";
      gameContainer.classList.remove("hidden");
    } else {
      alert("O'yinni boshlash uchun ismingizni kiriting!");
    }
  });

  clickerCoin.addEventListener("click", (event) => {
    count++;
    clickCount.textContent = count;

    const emoji = document.createElement("span");
    emoji.textContent = "🤑";
    emoji.className = "emoji";
    emoji.style.left = `${event.clientX}px`;
    emoji.style.top = `${event.clientY}px`;

    emojiContainer.appendChild(emoji);

    // Remove the emoji after animation ends
    emoji.addEventListener("animationend", () => {
      emojiContainer.removeChild(emoji);
    });
  });

  clickerCoin2.addEventListener("click", (event) => {
    count++;
    clickCount.textContent = count;

    const emoji = document.createElement("span");
    emoji.textContent = "+1";
    emoji.className = "emoji";
    emoji.style.left = `${event.clientX}px`;
    emoji.style.top = `${event.clientY}px`;

    emojiContainer.appendChild(emoji);

    // Remove the emoji after animation ends
    emoji.addEventListener("animationend", () => {
      emojiContainer.removeChild(emoji);
    });
  });
});