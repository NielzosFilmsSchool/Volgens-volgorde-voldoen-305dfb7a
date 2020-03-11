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

for(let i = 0;i<questions.length;i++){
    document.getElementById("questions").innerHTML += "<h3>"+questions[i]+"</h3>";
    document.getElementById("questions").innerHTML += "<input type='text' id='a_"+i+"'>";
}

function checkAnswers() {
    let user_answers = [];
    let correct = [];
    for(let i = 0;i<questions.length;i++){
        user_answers[i] = (document.getElementById("a_"+i).value);
        if(i > 2){
            if(answers[i].includes(user_answers[i])) {
                correct[i] = answers[i];
            }
        }else {
            if(answers.includes(user_answers[i])) {
                correct[i] = answers[i];
            }
        }
    }

    document.getElementById("answer").innerHTML = "Antwoorden goed: ";
    for(let i = 0;i<correct.length;i++){
        if(i > 0){
            document.getElementById("answer").innerHTML += ", ";
        }
        document.getElementById("answer").innerHTML += correct[i];
    }

    document.getElementById("answer2").innerHTML = "Je hebt "+correct.length+" antwoorden goed!";

}