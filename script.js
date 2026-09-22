// حالت تاریک / روشن
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
});


// دکمه‌های اندازه متن
const increaseText = document.getElementById("increaseText");
const decreaseText = document.getElementById("decreaseText");

let textSize = 16;


// بزرگ‌تر کردن متن
increaseText.addEventListener("click", function() {
    textSize += 2;
    document.body.style.fontSize = textSize + "px";
});


// کوچک‌تر کردن متن
decreaseText.addEventListener("click", function() {
    textSize -= 2;
    document.body.style.fontSize = textSize + "px";
});

// بانشانی کارخانه
const resetSettings = document.getElementById("resetSettings");
resetSettings.addEventListener("click", function() {
    document.body.classList.remove("light-mode");
    textSize = 16;
    document.body.style.fontSize = "16px";
});
