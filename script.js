const questions = [
    {
        question: "1. Why is cybersecurity important? 14 remaining",
        answers: [
          "To keep your computer running smoothly.",
          "To protect sensitive information from unauthorized access.",
          "To ensure all websites are accessible.",
          "To browse the internet anonymously."
        ],
        correctAnswer: 1 //1
      },
      {
        question: "2. The CIA triad represents three key principles in information security. What does 'A' stand for? 13 remaining",
        answers: [
          "Authentication",
          "Availability",
          "Confidentiality",
          "Authorization"
        ],
        correctAnswer: 1 //2
      },
      {
        question: "3. Which of the following is NOT a core element of information security? 12 remaining",
        answers: [
          "Confidentiality",
          "Integrity",
          "Redundancy",
          "Availability"
        ],
        correctAnswer: 2
      },
      {
        question: "4. The cybersecurity landscape is constantly evolving. What is a term used to describe malicious attempts to exploit vulnerabilities in computer systems? 11 remaining",
        answers: [
          "Patch management",
          "Cyber threat",
          "Firewall",
          "Encryption"
        ],
        correctAnswer: 1
      },
      {
        question: "5. What can be the impact of a cybercrime on a business? 10 remaining",
        answers: [
          "Increased employee productivity",
          "Financial losses and reputational damage",
          "Improved customer service",
          "Faster internet speeds"
        ],
        correctAnswer: 1
      },
      {
        question: "6. Which type of cybercrime involves tricking victims into revealing personal information? 9 remaining",
        answers: [
          "Phishing",
          "Malware attack",
          "Denial-of-service attack (DoS)",
          "Data breach"
        ],
        correctAnswer: 0
      },
      {
        question: "7. Ethical hacking involves attempting to exploit vulnerabilities in a computer system with permission. What is another term for an ethical hacker? 8 remaining",
        answers: [
          "Cybercriminal",
          "White hat hacker",
          "Black hat hacker",
          "Script kiddie"
        ],
        correctAnswer: 1
      },
      {
        question: "8. What is a primary role of an ethical hacker? 7 remaining",
        answers: [
          "To steal data from businesses.",
          "To identify and report security vulnerabilities.",
          "To launch denial-of-service attacks.",
          "To spread malware across the internet."
        ],
        correctAnswer: 1
      },
      {
        question: "9. Which cybersecurity career path focuses on designing and implementing security measures for computer systems? 6 remaining",
        answers: [
          "Cybersecurity Analyst",
          "Ethical Hacker",
          "Security Engineer",
          "Chief Information Security Officer (CISO)"
        ],
        correctAnswer: 2
      },
      {
        question: "10. What skills are important for a career in cybersecurity? 5 remaining",
        answers: [
          "Strong communication and problem-solving skills",
          "Ability to code in multiple programming languages",
          "Excellent customer service skills",
          "Experience in graphic design"
        ],
        correctAnswer: 0
      },
      {
        question: "11. Encryption is a technique used to: 4 remaining",
        answers: [
          "Make data readable by authorized users.",
          "Scramble data to make it unreadable without a key.",
          "Slow down internet connections.",
          "Track user activity online."
        ],
        correctAnswer: 1
      },
      {
        question: "12. A firewall acts as a barrier between a computer network and the internet. What is its primary function? 3 remaining",
        answers: [
          "To block all incoming and outgoing traffic.",
          "To filter incoming and outgoing traffic based on security rules.",
          "To encrypt all data sent over the network.",
          "To store user passwords securely."
        ],
        correctAnswer: 1
      },
      {
        question: "13. What is a common social engineering tactic used by cybercriminals? 2 remaining",
        answers: [
          "Exploiting software vulnerabilities.",
          "Using strong encryption methods.",
          "Creating a sense of urgency or fear to pressure victims.",
          "Implementing multi-factor authentication."
        ],
        correctAnswer: 2
      },
      {
        question: "14. Multi-factor authentication (MFA) is an additional layer of security that requires: 1 remaining",
        answers: [
          "Only a strong password.",
          "Either a password or a fingerprint scan.",
          "Both a password and a unique code sent to your phone.",
          "Answering a series of personal security questions."
        ],
        correctAnswer: 2
      },
      {
        question: "15. How can individuals stay informed about the latest cybersecurity threats? 0 remaining",
        answers: [
          "Clicking on links in unknown emails.",
          "Following reputable cybersecurity resources online.",
          "Downloading software from untrusted sources.",
          "Sharing personal information on public social media profiles."
        ],
        correctAnswer: 1
      },
      // Add more questions here following the same format   
    // ... your questions here ...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let temporaryUsername = "Trainee"; // Define a temporary username
  
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
      usernameElement.textContent = "Welcome to Week (I) Test, " + temporaryUsername;
    }
  }
  
  displayQuestion();
  displayUsername(); // Display username initially
  
  // Submit button functionality (if included)
  const submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener("click", submitAnswer);
  
