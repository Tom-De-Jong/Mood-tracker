let mood = "no mood selected";

function Happy(){
    mood = "Happy";
    console.log(mood);
};

function Unamused(){
    mood = "Unamused";
    console.log(mood);
};

function Bored(){
    mood = "Bored";
    console.log(mood);
};

function Sad(){
    mood = "Sad";
    console.log(mood);
};

document.getElementById("moodForm").addEventListener("submit", (e) =>{
    e.preventDefault();

    let reason = document.getElementById("textArea").value;
    let obj = new Date();
    let day = obj.getUTCDate();
    let month = obj.getUTCMonth() + 1;
    let year = obj.getUTCFullYear();
    date = `Day: ${day}, Month: ${month}, Year: ${year}`;
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)

    let entry = {mood, reason, date};
    localStorage.setItem(date, JSON.stringify(entry));


});

const log = JSON.parse(localStorage.getItem('Day: 29, Month: 4, Year: 2025'));
console.log(log); // Tough day

displayMood = log.mood
displayReaosn = log.reason

document.getElementById("moodDisplay").innerHTML = log.mood
document.getElementById("reasonDisplay").innerHTML = log.reason