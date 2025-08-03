// Example word list for the text-flow
const words = [
  "xin", "chào", "bạn", "tôi", "là", "học", "sinh", "giáo", "viên", "trường",
  "đi", "đến", "về", "ăn", "uống", "ngủ", "mua", "bán", "yêu", "thích",
  "đẹp", "xấu", "cao", "thấp", "rộng", "hẹp", "nhanh", "chậm", "sáng", "tối",
  "mới", "cũ", "trẻ", "già", "nam", "nữ", "bạn", "anh", "chị", "em",
  "ông", "bà", "cha", "mẹ", "con", "cháu", "bạn", "thầy", "cô", "bạn"
];

// Render words in .text-flow
const textFlow = document.querySelector('.text-flow');
textFlow.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');

// Timer logic
const input = document.querySelector('.input-frame input');
const timerDisplay = document.querySelector('.timer p');
let timerInterval = null;
let timeLeft = 60;
let timerStarted = false;

// Get result and link elements
let resultBox = document.querySelector('.result');
let linkBox = document.querySelector('.link');

function updateTimerDisplay() {
  timerDisplay.textContent = timeLeft;
}

function startTimer() {
  if (timerStarted) return;
  timerStarted = true;
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      if (resultBox) resultBox.style.display = "flex";
      if (linkBox) linkBox.style.display = "flex";
      input.disabled = true; // Prevent further typing
    }
  }, 1000);
}

input.addEventListener('input', startTimer);

let currentWordIndex = 0;
const wordSpans = document.querySelectorAll('.text-flow .word');

// Highlight the first word at start
wordSpans[currentWordIndex].classList.add('active-word');

// Check spelling as you type
input.addEventListener('input', function () {
  const typed = input.value;
  const currentWord = words[currentWordIndex];

  // Remove previous classes
  wordSpans[currentWordIndex].classList.remove('correct', 'wrong');

  if (typed.length === 0) {
    // No color if nothing typed
    return;
  }

  if (currentWord.startsWith(typed)) {
    wordSpans[currentWordIndex].classList.add('correct');
  } else {
    wordSpans[currentWordIndex].classList.add('wrong');
  }
});

// Move to next word on space, reset input, and check correctness
input.addEventListener('keydown', function (e) {
  if (e.code === 'Space' || e.key === ' ') {
    e.preventDefault();
    const typed = input.value.trim();
    const currentWord = words[currentWordIndex];

    // Remove previous classes
    wordSpans[currentWordIndex].classList.remove('correct', 'wrong');

    // Final check for correctness
    if (typed === currentWord) {
      wordSpans[currentWordIndex].classList.add('correct');
    } else {
      wordSpans[currentWordIndex].classList.add('wrong');
    }

    // Move to next word
    wordSpans[currentWordIndex].classList.remove('active-word');
    currentWordIndex++;
    if (currentWordIndex < wordSpans.length) {
      wordSpans[currentWordIndex].classList.add('active-word');
    }
    input.value = '';
  }
});

// Reset logic
let resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 60;
  timerStarted = false;
  updateTimerDisplay();
  input.value = '';
  input.disabled = false;
  if (resultBox) resultBox.style.display = "none";
  if (linkBox) linkBox.style.display = "none";
  // Reset highlights
  wordSpans.forEach(span => {
    span.classList.remove('correct', 'wrong', 'active-word');
  });
  currentWordIndex = 0;
  wordSpans[0].classList.add('active-word');
});
