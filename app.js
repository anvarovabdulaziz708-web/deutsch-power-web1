const tg = window.Telegram.WebApp;
tg.expand();

const vocabData = [
    { de: "Guten Tag", uz: "Salom (Kun davomida)" },
    { de: "Auf Wiedersehen", uz: "Ko'rishguncha" },
    { de: "Das Wasser", uz: "Suv" },
    { de: "Das Buch", uz: "Kitob" },
    { de: "Die Schule", uz: "Maktab" }
];

let currentIndex = 0;
let xp = 15;

const flashcard = document.getElementById("flashcard");
const wordDe = document.getElementById("wordDe");
const wordUz = document.getElementById("wordUz");
const nextCardBtn = document.getElementById("nextCardBtn");
const userXp = document.getElementById("userXp");

flashcard.addEventListener("click", () => {
    wordDe.classList.toggle("hidden");
    wordUz.classList.toggle("hidden");
});

nextCardBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % vocabData.length;
    wordDe.textContent = vocabData[currentIndex].de;
    wordUz.textContent = vocabData[currentIndex].uz;
    wordDe.classList.remove("hidden");
    wordUz.classList.add("hidden");
    
    xp += 5;
    userXp.textContent = `⭐ ${xp} XP`;
});

document.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const isCorrect = e.target.getAttribute("data-correct") === "true";
        if (isCorrect) {
            e.target.style.background = "#22c55e";
            xp += 10;
            userXp.textContent = `⭐ ${xp} XP`;
            setTimeout(() => alert("To'g'ri! Barakalla!"), 100);
        } else {
            e.target.style.background = "#ef4444";
            setTimeout(() => alert("Xato, qayta urinib ko'ring!"), 100);
        }
    });
});