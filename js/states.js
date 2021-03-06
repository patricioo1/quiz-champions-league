const INITIAL_SCORE = 0;
const INITIAL_QUESTION = 0;
// const Questions = [{
//     question: "Który zawodnik strzelił najwięcej goli w historii Ligi Mistrzów?",
//         answers: [
//             "Lionel Messi",
//             "Robert Lewandowski",
//             "Cristiano Ronaldo",
//             "Karim Benzema"
//         ],
//         correctAnswer: "Cristiano Ronaldo"
//     },
//     {
//         question: "Która drużyna jako pierwsza wygrała Puchar Ligi Mistrzów?",
//         answers: [
//             "Bayern Monachium",
//             "FC Barcelona",
//             "Real Madryt",
//             "Legia Warszawa"
//         ],
//         correctAnswer: "Real Madryt"
//     },
//     {
//         question: "Jakim wynikiem zakończył się mecz w fazie grupowej Ligi Mistrzów pomiędzy Legią Warszawa a Borussią Dortmund, rozegrany 22 listopada 2016 roku?",
//         answers: [
//             "8:4",
//             "3:2",
//             "5:5",
//             "10:6",
//         ],
//         correctAnswer: "8:4"
//     },
//     {
//         question: "W którym roku został rozegrany finał Ligi Mistrzów FC Liverpool vs AC Milan?",
//         answers: [
//             "2004",
//             "2003",
//             "2005",
//             "2006"
//         ],
//         correctAnswer: "2005"
//     },
//     {
//         question: "Z jakim trenerem Chelsea Londyn zdobyła Ligę Mistrzów w 2012 roku?",
//         answers: [
//             "Andre Villas-Boas",
//             "Carlo Ancelotti",
//             "Rafael Benitez",
//             "Roberto Di Matteo"
//         ],
//         correctAnswer: "Roberto Di Matteo"
//     },
//     {
//         question: "Ilu polskich bramkarzy wygrało Ligę Mistrzów?",
//         answers: [
//             "2",
//             "3",
//             "4",
//             "5"
//         ],
//         correctAnswer: "4"
//     },
//     {
//         question: "Jakim wynikiem zakończył się finał Ligi Mistrzów w 2013 roku pomiędzy Bayernem Monachium a Borussią Dortmund, w którym brało udział trzech Polaków?",
//         answers: [
//             "2:0",
//             "2:1",
//             "3:2",
//             "1:0"
//         ],
//         correctAnswer: "2:1"
//     },
//     {
//         question: "Który pierwszy polski bramkarz wywalczył Puchar Ligi Mistrzów?",
//         answers: [
//             "Tomasz Kuszczak",
//             "Józef Młynarczyk",
//             "Artur Boruc",
//             "Jerzy Dudek"
//         ],
//         correctAnswer: "Józef Młynarczyk"
//     },
//     {
//         question: "Która polska drużyna wygrała w III rundzie kwalifikacyjnej do Ligi Mistrzów z FC Barceloną w 2008 roku?",
//         answers: [
//             "Wisła Kraków",
//             "Legia Warszawa",
//             "Lech Poznań",
//             "Piast Gliwice"
//         ],
//         correctAnswer: "Wisła Kraków"
//     },
//     {
//         question: "Który klub przegrał najwięcej razy finałowy mecz Ligi Mistrzów?",
//         answers: [
//             "Manchester United",
//             "Juventus Turyn",
//             "Borussia Dortmund",
//             "Atletico Madryt"
//         ],
//         correctAnswer: "Juventus Turyn"
//     },
//     {
//         question: "Który polski bramkarz wygrał Ligę Mistrzów z Manchesterem United?",
//         answers: [
//             "Tomasz Kuszczak",
//             "Łukasz Załuska",
//             "Wojciech Szczęsny",
//             "Łukasz Fabiański"
//         ],
//         correctAnswer: "Tomasz Kuszczak"
//     }
// ];

const data = await fetch("https://raw.githubusercontent.com/patricioo1/Quiz-Champions-League/main/questions.json");
const responseText = await data.text();
const parsedToObject = JSON.parse(responseText);
// console.log(parsedToObject);


const scoreState = (incrementStep) => {
    let score = INITIAL_SCORE;
    return {
        getScore: () => score,
        increment: () => {
            score = score + incrementStep;
        }
    };
}

const questionState = () => {
    let questionIndex = INITIAL_QUESTION;
    return {
        getQuestionIndex: () => questionIndex,
        incrementQuestion: () => {
            questionIndex = questionIndex + 1;
        },
        getQuestion: (index) => parsedToObject[index],
        getNumberOfQuestions: () => parsedToObject.length
    }
}



export {
    scoreState,
    questionState
};