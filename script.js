const messages = {
    en: "Happy birthday to an incredible woman🎀🧿 amazing mom, and queen of the family! Your love, care, and guidance have shaped an extraordinary daughter and best friend. May your special day be wrapped in warmth, filled with laughter, and celebrated with loved ones. Wishing you a joyous birthday and a year ahead that's as beautiful as you are!♥️",
    hi: "जन्मदिन मुबारक हो इस अद्भुत महिला को! 🎀🧿 एक प्यारी माँ और परिवार की रानी को ढेर सारी शुभकामनाएँ। आपकी प्यार, देखभाल और मार्गदर्शन ने एक शानदार बेटी और एक सच्ची दोस्त को आकार दिया है। आपका यह खास दिन खुशियों से भरा हो, हंसी से गूंजे और अपनों के साथ मनाया जाए। आपको ढेर सारी खुशियाँ और एक सुंदर साल की शुभकामनाएँ! ♥️",
    gu: "જન્મદિવસની ખૂબ ખૂબ શુભકામનાઓ આ અદ્ભુત મહિલાને! 🎀🧿 એક પ્રેમાળ માતા અને પરિવારની રાણી માટે હ્રદયપૂર્વક શુભકામનાઓ. આપના પ્રેમ, સંભાળ અને માર્ગદર્શનથી એક અદ્ભુત દીકરી અને શ્રેષ્ઠ મિત્ર બની છે. આપનો આ ખાસ દિવસ આનંદથી ભરેલો હોય, હાસ્યથી ગુંજતો હોય અને સ્વજનો સાથે ઉજવાયો હોય. આપને આનંદમય જન્મદિવસ અને એક સુંદર વર્ષની શુભકામનાઓ! ♥️",
    raj: "जन्मदिन रो घणो-घणो शुभ सयों! 🎀🧿 एक प्यारी माय और परिवार री राणी ने दिल सूं शुभकामना। थारो प्यार, देखभाल अर मार्गदर्शन एक शानदार बेटी अर साची सखी ने आकार दियो है। थारो ई खास दिन खुशीयां सूं भर्यो हो, हंसी-ठिठोली सूं गूंजे अर अपणयां री संगत में मानायो जावै। थानें ढेर सारा सुख-सांति अर सुन्दर वरस री शुभकामना! ♥️"
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
