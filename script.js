console.log('Script execution started');

const { useState } = React;


const fishData = [
    {
      name: "Dolly Varden (Char)",
      characteristics: [
        "Head does not dominate body",
        "White leading edges on lower fins"
      ],
      image: "images/dolly-varden.png"
    },
    {
      name: "Rainbow Trout",
      characteristics: [
        "No teeth in throat at back of tongue",
        "Radiating rows of spots on tail"
      ],
      image: "images/rainbow-trout.png"
    },
    {
      name: "Bull Trout (Char)",
      characteristics: [
        "Upper jaw curves down",
        "Body flattened on underside",
        "White leading edges on lower fins"
      ],
      image: "images/bull-trout.png"
    },
    {
      name: "Coastal Cutthroat Trout",
      characteristics: [
        "Large mouth (extends well past eye)",
        "Red slash under lower jaw (may be faint)"
      ],
      image: "images/coastal-cutthroat-trout.png"
    },
    {
      name: "Westslope Cutthroat Trout",
      characteristics: [
        "Large mouth (extends well past eye)",
        "Red slash under lower jaw (may be faint)"
      ],
      image: "images/westslope-cutthroat-trout.png"
    },
    {
      name: "Lake Trout (Char)",
      characteristics: [
        "Tail deeply forked"
      ],
      image: "images/lake-trout.png"
    },
    {
      name: "Brown Trout",
      characteristics: [
        "Black or brown spots, many with light halos",
        "Tail with few or no spots"
      ],
      image: "images/brown-trout.png"
    },
    {
      name: "Brook Trout (Char)",
      characteristics: [
        "No teeth in throat at back of tongue",
        "Pinkish-orange paired fins edged in white",
        "Red spots with blue halos"
      ],
      image: "images/brook-trout.png"
    },
    {
      name: "Steelhead",
      characteristics: [
        "No teeth in throat at back of tongue",
        "Fork length 50 cm or more"
      ],
      image: "images/steelhead.png"
    },
    {
      name: "Arctic Grayling",
      characteristics: [
        "Long dorsal fin (more than 17 rays)"
      ],
      image: "images/arctic-grayling.png"
    },
    {
      name: "Kokanee",
      characteristics: [
        "No distinct black spots on sides",
        "Long anal fin (13 or more rays)"
      ],
      image: "images/kokanee.png"
    },
    {
      name: "Whitefish",
      characteristics: [
        "Teeth weakly developed or absent",
        "Large scales"
      ],
      image: "images/whitefish.png"
    },
    {
      name: "Chinook Salmon",
      characteristics: [
        "Black mouth, black gums",
        "Round spots on both lobes of tail"
      ],
      image: "images/chinook-salmon.png"
    },
    {
      name: "Coho Salmon",
      characteristics: [
        "White mouth (possible black edge), white gums, black tongue",
        "A few round spots on upper lobe only"
      ],
      image: "images/coho-salmon.png"
    },
    {
      name: "Pink Salmon",
      characteristics: [
        "White mouth, black gums",
        "Dirty white belly in fresh water"
      ],
      image: "images/pink-salmon.png"
    },
    {
      name: "Chum Salmon",
      characteristics: [
        "Purple streaks or bars in fresh water",
        "No spots"
      ],
      image: "images/chum-salmon.png"
    },
    {
      name: "Sockeye Salmon",
      characteristics: [
        "Large scales",
        "Small black speckles",
        "No spots"
      ],
      image: "images/sockeye-salmon.png"
    },
    {
      name: "Burbot",
      characteristics: [
        "Single barbel",
        "Single anal fin",
        "Two dorsal fins"
      ],
      image: "images/burbot.png"
    },
    {
      name: "Northern Pike",
      characteristics: [
        "Long flattened snout",
        "Large oval spots"
      ],
      image: "images/northern-pike.png"
    },
    {
      name: "Walleye",
      characteristics: [
        "Sharp, fang-like teeth",
        "White corner on lower half of tail"
      ],
      image: "images/walleye.png"
    },
    {
      name: "Yellow Perch",
      characteristics: [
        "No fang-like teeth",
        "Six to nine dark vertical bars",
        "Paired fins amber to bright orange"
      ],
      image: "images/yellow-perch.png"
    },
    {
      name: "Black Crappie",
      characteristics: [
        "Mouth extends to front edge of pupil",
        "Spiny anterior dorsal fin"
      ],
      image: "images/black-crappie.png"
    },
    {
      name: "White Sturgeon",
      characteristics: [
        "Barbels",
        "Sides usually with small white spots"
      ],
      image: "images/white-sturgeon.png"
    },
    {
      name: "Smallmouth Bass",
      characteristics: [
        "Jaw extends to about middle of eye",
        "Radiating rows of spots on tail",
        "11 to 14 dorsal spines"
      ],
      image: "images/smallmouth-bass.png"
    }
];
  

const FishCard = ({ fish }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 m-4 flex flex-col">
      <h2 className="text-xl font-bold mb-2">{fish.name}</h2>
      <div className="flex-grow flex items-center justify-center overflow-hidden mb-4">
          <img 
              src={fish.image} 
              alt={fish.name} 
              className="w-full h-auto max-h-64 object-contain"
          />
      </div>
      <ul className="list-disc pl-5">
          {fish.characteristics.map((char, index) => (
              <li key={index}>{char}</li>
          ))}
      </ul>
  </div>
);

const FishList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {fishData.map((fish, index) => (
          <FishCard key={index} fish={fish} />
      ))}
  </div>
);

const QuizStart = ({ onStart }) => (
  <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Fish Identification Quiz!</h2>
      <p className="mb-4">Test your knowledge of British Columbia's freshwater fish.</p>
      <p className="mb-4">You'll be shown characteristics of a fish and asked to identify it.</p>
      <p className="mb-4">Try to score at least 60% to pass the quiz!</p>
      <button
          onClick={onStart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
      >
          Start Quiz
      </button>
  </div>
);

const QuizQuestion = ({ question, onAnswer }) => (
  <div>
      <h2 className="text-2xl font-bold mb-4">Identify this fish:</h2>
      <ul className="list-disc pl-5 mb-4">
          {question.characteristics.map((char, index) => (
              <li key={index}>{char}</li>
          ))}
      </ul>
      <div className="grid grid-cols-2 gap-4">
          {question.options.map((option, index) => (
              <button
                  key={index}
                  onClick={() => onAnswer(option)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
              >
                  {option}
              </button>
          ))}
      </div>
  </div>
);

const QuizEnd = ({ score, totalQuestions, onRestart }) => {
  const percentage = (score / totalQuestions) * 100;
  const passed = percentage >= 60;

  return (
      <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="mb-4">Your score: {score} out of {totalQuestions}</p>
          {passed ? (
              <div className="animate-bounce">
                  <p className="text-3xl font-bold text-green-500 mb-4">
                      Congratulations! You passed!
                  </p>
                  <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
              </div>
          ) : (
              <p className="text-xl text-red-500 mb-4">Keep practicing! You'll get there!</p>
          )}
          <button
              onClick={onRestart}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out transform hover:scale-105"
          >
              Retake Quiz
          </button>
      </div>
  );
};

const Quiz = () => {
  const [quizState, setQuizState] = useState('start');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  const startQuiz = () => {
      console.log('Starting quiz');
      setQuizState('question');
      setScore(0);
      setQuestionCount(0);
      nextQuestion();
  };

  const nextQuestion = () => {
      if (questionCount >= 10) {
          console.log('Ending quiz');
          setQuizState('end');
          return;
      }

      const correctFish = fishData[Math.floor(Math.random() * fishData.length)];
      let options = [correctFish.name];
      while (options.length < 4) {
          const randomFish = fishData[Math.floor(Math.random() * fishData.length)];
          if (!options.includes(randomFish.name)) {
              options.push(randomFish.name);
          }
      }
      options = options.sort(() => Math.random() - 0.5);

      setCurrentQuestion({
          characteristics: correctFish.characteristics,
          options: options,
          correctAnswer: correctFish.name
      });

      setQuestionCount(prev => prev + 1);
  };

  const handleAnswer = (answer) => {
      if (answer === currentQuestion.correctAnswer) {
          setScore(prev => prev + 1);
      }
      nextQuestion();
  };

  return (
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {quizState === 'start' && <QuizStart onStart={startQuiz} />}
          {quizState === 'question' && currentQuestion && (
              <QuizQuestion question={currentQuestion} onAnswer={handleAnswer} />
          )}
          {quizState === 'end' && (
              <QuizEnd score={score} totalQuestions={10} onRestart={startQuiz} />
          )}
      </div>
  );
};


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('list');

  return (
      <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Fish Factor BC</h1>
          <div className="flex justify-center mb-8">
              <button
                  onClick={() => setActiveTab('list')}
                  className={`mx-2 px-4 py-2 rounded-full ${
                      activeTab === 'list' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition duration-300 ease-in-out transform hover:scale-105`}
              >
                  Fish List
              </button>
              <button
                  onClick={() => setActiveTab('quiz')}
                  className={`mx-2 px-4 py-2 rounded-full ${
                      activeTab === 'quiz' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition duration-300 ease-in-out transform hover:scale-105`}
              >
                  Quiz
              </button>
          </div>
          {activeTab === 'list' ? <FishList /> : <Quiz />}
      </div>
  );
};

console.log('About to render Dashboard');
ReactDOM.render(<Dashboard />, document.getElementById('root'));
console.log('Dashboard rendered');