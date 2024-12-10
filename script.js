document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("name-modal");
    const usernameInput = document.getElementById("username");
    const startGameButton = document.getElementById("start-game");
    const gameContainer = document.getElementById("game-container");
    const greeting = document.getElementById("greeting");
    const clickerCoin = document.getElementById("clicker-coin");
    const clickCount = document.getElementById("click-count");
    const emojiContainer = document.getElementById("emoji-container");
  
    let count = 0;
  
    // Array of romantic emojis
    const romanticEmojis = ['💖', '💘', '❤️', '💕', '💞', '💓', '💗', '😍', '😘', '🌹'];
  
    // Function to get a random emoji
    const getRandomEmoji = () => romanticEmojis[Math.floor(Math.random() * romanticEmojis.length)];
  
    // Start game button functionality
    startGameButton.addEventListener("click", () => {
      const name = usernameInput.value.trim();
      if (name) {
        greeting.textContent = `Xush kelibsiz, ${name}!`;
        modal.style.display = "none";
        gameContainer.classList.remove("hidden");
      } else {
        alert("Iltimos ismingizni kiriting!");
      }
    });
  
    // Clicker functionality
    clickerCoin.addEventListener("click", (event) => {
      count++;
      clickCount.textContent = count;
  
      // Create a random romantic emoji
      const emoji = document.createElement("span");
      emoji.textContent = getRandomEmoji();
      emoji.className = "emoji";
  
      // Position the emoji where the click occurred
      emoji.style.left = `${event.clientX}px`;
      emoji.style.top = `${event.clientY}px`;
  
      emojiContainer.appendChild(emoji);
  
      // Remove the emoji after animation ends
      emoji.addEventListener("animationend", () => {
        emojiContainer.removeChild(emoji);
      });
    });
  });
  