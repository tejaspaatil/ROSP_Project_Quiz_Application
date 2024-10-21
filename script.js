const questions = {
    math: [
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        {
            question: "If a train travels 60 km in 1 hour, how far will it travel in 2.5 hours?",
            options: ["120 km", "150 km", "180 km", "200 km"],
            answer: "150 km"
        },
        {
            question: "What is the ratio of 30 minutes to 2 hours?",
            options: ["1:2", "1:4", "1:5", "1:6"],
            answer: "1:4"
        },
        {
            question: "If 5 workers can complete a task in 10 days, how many days will it take 10 workers to complete the same task?",
            options: ["5 days", "10 days", "15 days", "20 days"],
            answer: "5 days"
        },
        {
            question: "A sum of money doubles itself in 5 years. What will be the value of that sum after 15 years?",
            options: ["2 times", "4 times", "8 times", "16 times"],
            answer: "8 times"
        },
        {
            question: "If 10 apples cost $5, how much will 25 apples cost?",
            options: ["$10", "$12.5", "$15", "$20"],
            answer: "$12.5"
        },
        {
            question: "A car travels 150 km in 3 hours. What is its speed in km/h?",
            options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
            answer: "50 km/h"
        },
        {
            question: "If the perimeter of a square is 48 cm, what is the length of one side?",
            options: ["10 cm", "12 cm", "14 cm", "16 cm"],
            answer: "12 cm"
        },
        {
            question: "A man can complete a work in 60 days. If he works for 15 days, what fraction of the work is left?",
            options: ["1/4", "1/3", "1/2", "1/5"],
            answer: "1/4"
        },
        {
            question: "If a box can hold 60 kg of rice, how many boxes are needed for 240 kg?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        {
            question: "A sum of $500 is invested at an interest rate of 5% per annum. How much interest will be earned in 3 years?",
            options: ["$25", "$30", "$35", "$40"],
            answer: "$75"
        }


    ],
    science: [
        {
            question: "What planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["HO", "O2", "H2O", "OH"],
            answer: "H2O"
        },
        {
            question: "What is the chemical symbol for Gold?",
            options: ["Au", "Ag", "Fe", "Pb"],
            answer: "Au"
        },
        {
            question: "What planet is known as the Blue Planet?",
            options: ["Earth", "Mars", "Venus", "Neptune"],
            answer: "Earth"
        },
        {
            question: "Which gas do plants primarily use for photosynthesis?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Carbon Dioxide"
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
            answer: "Mitochondria"
        },
        {
            question: "What is the boiling point of water at sea level in Celsius?",
            options: ["90°C", "100°C", "110°C", "120°C"],
            answer: "100°C"
        },
        {
            question: "Which vitamin is produced when a person is exposed to sunlight?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            answer: "Vitamin D"
        },
        {
            question: "What is the most abundant gas in the Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Nitrogen"
        },
        {
            question: "What is the smallest unit of life that can replicate independently?",
            options: ["Cell", "Tissue", "Organ", "Organism"],
            answer: "Cell"
        },
        {
            question: "Which part of the brain controls balance and coordination?",
            options: ["Cerebrum", "Cerebellum", "Brainstem", "Thalamus"],
            answer: "Cerebellum"
        },
        {
            question: "What phenomenon causes the apparent change in color of a star when it moves toward or away from Earth?",
            options: ["Redshift", "Blueshift", "Doppler Effect", "Gravitational Lens"],
            answer: "Doppler Effect"
        }


    ],
    history: [
        {
            question: "Who was the first President of the USA?",
            options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
            answer: "George Washington"
        },
        {
            question: "In which year did World War II end?",
            options: ["1945", "1939", "1918", "1965"],
            answer: "1945"
        },
        {
            question: "Who was the first President of the United States?",
            options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
            answer: "George Washington"
        },
        {
            question: "In which year did World War II end?",
            options: ["1945", "1939", "1918", "1965"],
            answer: "1945"
        },
        {
            question: "Who was the first woman to fly solo across the Atlantic Ocean?",
            options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
            answer: "Amelia Earhart"
        },
        {
            question: "Which empire was ruled by Genghis Khan?",
            options: ["Ottoman Empire", "Mongol Empire", "Roman Empire", "British Empire"],
            answer: "Mongol Empire"
        },
        {
            question: "What ancient civilization built the pyramids?",
            options: ["Mesopotamians", "Indus Valley", "Egyptians", "Mayans"],
            answer: "Egyptians"
        },
        {
            question: "Who discovered penicillin?",
            options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch"],
            answer: "Alexander Fleming"
        },
        {
            question: "What was the primary cause of the American Civil War?",
            options: ["Taxes", "Slavery", "Territorial Expansion", "Trade Policies"],
            answer: "Slavery"
        },
        {
            question: "Which country was the first to grant women the right to vote?",
            options: ["New Zealand", "United States", "Finland", "Canada"],
            answer: "New Zealand"
        },
        {
            question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
            options: ["Leonid Brezhnev", "Mikhail Gorbachev", "Joseph Stalin", "Nikita Khrushchev"],
            answer: "Nikita Khrushchev"
        },
        {
            question: "What year did the Berlin Wall fall?",
            options: ["1989", "1991", "1985", "1979"],
            answer: "1989"
        }

    ]
};

let currentSubject = "";
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(subject) {
    currentSubject = subject;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("subject-selection").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("subject-title").innerText = subject.charAt(0).toUpperCase() + subject.slice(1);
    loadQuestion();
}

// function loadQuestion() {
//     const questionData = questions[currentSubject][currentQuestionIndex];
//     document.getElementById("question-text").innerText = questionData.question;
    
//     const optionsContainer = document.getElementById("options-container");
//     optionsContainer.innerHTML = "";
    
//     questionData.options.forEach(option => {
//         const button = document.createElement("button");
//         button.innerText = option;
//         button.onclick = () => checkAnswer(option);
//         optionsContainer.appendChild(button);
//     });
    
//     document.getElementById("next-btn").classList.add("hidden");
//     document.getElementById("score").innerText = "";
// }

function loadQuestion() {
    const questionData = questions[currentSubject][currentQuestionIndex];
    document.getElementById("question-text").innerText = questionData.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        // Add Tailwind CSS classes for styling
        button.className = "bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-full mb-2 transition duration-200 ease-in-out";
        optionsContainer.appendChild(button);
    });

    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("score").innerText = "";
}


function checkAnswer(selectedOption) {
    const questionData = questions[currentSubject][currentQuestionIndex];
    if (selectedOption === questionData.answer) {
        score++;
        document.getElementById("score").innerText = "Correct!";
    } else {
        document.getElementById("score").innerText = `Wrong! The correct answer was: ${questionData.answer}`;
    }
    
    document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentSubject].length) {
        loadQuestion();
    } else {
        document.getElementById("question-container").classList.add("hidden");
        document.getElementById("next-btn").classList.add("hidden");
        document.getElementById("score").innerText = `Quiz Finished! Your score is ${score}/${questions[currentSubject].length}`;
    }
}
