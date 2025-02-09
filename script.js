const messages = {
    en: "HAPPY BIRTHDAY TO FAV AUNT 🎂🎈 THANKS FOR SPILLING THE TEA, THE SECRETS, AND WANNA KNOW MORE ABOUT YOU 🥹😭😂🤣",
    hi: "प्यारी आंटी को जन्मदिन मुबारक हो 🎂🎈 चाय फैलाने के लिए धन्यवाद, रहस्य और भी जानना चाहता हूँ 🥹😭😂🤣",
    gu: "પ્રિય કાકી ને જન્મદિવસ ની શુભેચ્છા 🎂🎈 ચા વહેંચવા માટે આભાર, રહસ્યો અને વધુ જાણવા માંગું છું 🥹😭😂🤣",
    raj: "प्रिय बुआ को जन्मदिन की शुभकामनाएँ 🎂🎈 चाय फैलाने के लिए धन्यवाद, रहस्य और अधिक जानना चाहता हूँ 🥹😭😂🤣"
};

function updateCountdown() {
    const targetDate = new Date("February 10, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    
    if (timeLeft <= 0) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("introMessage").style.opacity = "1";
        setTimeout(() => {
            document.querySelector(".container").style.opacity = "1";
        }, 3000);
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText = `🎉 Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}
setInterval(updateCountdown, 1000);

function changeLanguage() {
    let language = document.getElementById("language").value;
    document.getElementById("birthdayMessage").innerText = messages[language];
}
