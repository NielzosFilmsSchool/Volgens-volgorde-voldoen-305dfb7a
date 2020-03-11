const questions = [
    "Wat is de hoofdstad van Frankrijk?",
    "Hoeveel benen heeft een spin?",
    "Wat is het grootste meer van Nederland?",
    "Noem een duits automerk",
    "Noem een waddeneiland",
];

const answers = [
    "Parijs",
    "8",
    "IJselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];

document.getElementById("france_q").innerHTML = questions[0];
document.getElementById("spider_q").innerHTML = questions[1];
document.getElementById("lake_q").innerHTML = questions[2];
document.getElementById("auto_q").innerHTML = questions[3];
document.getElementById("island_q").innerHTML = questions[4];

function checkAnswers() {
    let user_answers = [];
    user_answers.push(document.getElementById("france").value);
    user_answers.push(document.getElementById("spider").value);
    user_answers.push(document.getElementById("lake").value);
    user_answers.push(document.getElementById("auto").value);
    user_answers.push(document.getElementById("island").value);

    if(answers.includes(user_answers[0]) && answers.includes(user_answers[1]) && answers.includes(user_answers[2])
        && answers[3].includes(user_answers[3]) && answers[4].includes(user_answers[4])){
        document.getElementById("answer").innerHTML = "Alle antwoorden zijn correct!";
    }else {
        document.getElementById("answer").innerHTML = "Niet alle antwoorden zijn correct.";
    }

}