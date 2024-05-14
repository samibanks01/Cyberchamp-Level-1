const questions = [
    {
        question: "1. What is the primary objective of cybersecurity? 6 remaining",
        answers: [
          "To provide unlimited internet access to everyone.",
          "To ensure the efficient operation of computer systems.",
          "To protect information assets from unauthorized access, use, disclosure, disruption, modification, or destruction.",
          "To create and distribute new software applications."
        ],
        correctAnswer: 2 //1
      },
      {
        question: "Which element of the CIA triad focuses on ensuring information remains accurate and unaltered? 5 remaining",
        answers: [
          "Confidentiality",
          "Integrity",
          "Availability",
          "Security"
        ],
        correctAnswer: 1 //2
      },
      {
        question: "The ever-evolving cybersecurity landscape refers to: 4 remaining",
        answers: [
          "The constant development of new computer hardware.",
          "The changing nature of cyber threats and vulnerabilities.",
          "The increasing popularity of social media platforms.",
          "The ongoing need for faster internet connection speeds."
        ],
        correctAnswer: 1
      },
      {
        question: "Which of the following is NOT a common type of cybercrime?: 3 remaining",
        answers: [
          "Identity theft",
          "Data breaches",
          "Hardware malfunctions",
          "Phishing scams"
        ],
        correctAnswer: 2
      },
      {
        question: "Ethical hacking is a practice that involves: 2 remaining",
        answers: [
          "Exploiting vulnerabilities in computer systems to steal data.",
          "Identifying and reporting vulnerabilities to help organizations improve their security posture.",
          "Spreading malware and viruses across the internet.",
          "Creating and selling illegal software applications."
        ],
        correctAnswer: 1
      },
      {
        question: "A strong password can be easily guessed and should be based on personal information like birthdays or pet names. (True/False) 1 remaining",
        answers: [
          "True",
          "False"
        ],
        correctAnswer: 1
      },
      {
        question: "Cybersecurity threats only target large corporations and have no impact on individuals. (True/False) 0 remaining",
        answers: [
          "True",
          "False"
        ],
        correctAnswer: 1
      },
      // Add more questions here following the same format   
    // ... your questions here ...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let temporaryUsername = "Guest"; // Define a temporary username
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answerListElement = document.getElementById("answer-list");
  
    questionElement.textContent = questions[currentQuestion].question;
    answerListElement.innerHTML = ""; // Clear previous answers
  
    questions[currentQuestion].answers.forEach((answer, index) => {
      const answerItem = document.createElement("li");
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "answer";
      radioInput.value = index;
  
      radioInput.addEventListener("change", function() {
        document.getElementById("submit-btn").disabled = false;
      });
  
      const answerText = document.createTextNode(answer);
      answerItem.appendChild(radioInput);
      answerItem.appendChild(answerText);
      answerListElement.appendChild(answerItem);
    });
  }
  
  function submitAnswer() {
    const selectedRadio = document.querySelector('input[name="answer"]:checked');
  
    if (selectedRadio) {
      const userAnswer = parseInt(selectedRadio.value);
      const correctAnswer = questions[currentQuestion].correctAnswer;
  
      if (userAnswer === correctAnswer) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        alert("You have finished the assessment! Your score is " + score + " out of " + questions.length);
        // Optionally, display a results page here
        score = 0; // Reset score for future assessments (optional)
      }
  
      document.getElementById("submit-btn").disabled = true;
    }
  }
  
  // Display username during assessment (optional)
  function displayUsername() {
    const usernameElement = document.getElementById("username-display");
    if (usernameElement) {
      usernameElement.textContent = "Welcome, " + temporaryUsername;
    }
  }
  
  displayQuestion();
  displayUsername(); // Display username initially
  
  // Submit button functionality (if included)
  const submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener("click", submitAnswer);
  