'use client';
import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function Page() {
  const [progress, setProgress] = useState(30); // Example progress percentage
  const [currentQuestion, setCurrentQuestion] = useState(0); // Current question index
  const [filter, setFilter] = useState('all'); // Filter for questions (all, answered, unanswered)
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set()); // Track answered questions as a Set
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Track selected answers

  const questions = [
    {
      question: "What is the main function of the heart?",
      options: ["a) Pump blood", "b) Produce oxygen", "c) Digest food", "d) Support bones"],
    },
    {
      question: "What is the normal range for a healthy heart rate?",
      options: ["a) 20-40 bpm", "b) 60-100 bpm", "c) 120-160 bpm", "d) 180-220 bpm"],
    },
    {
      question: "Which of the following is the longest bone in the body?",
      options: ["a) Femur", "b) Humerus", "c) Tibia", "d) Radius"],
    },
    {
      question: "Which organ is responsible for filtering blood?",
      options: ["a) Heart", "b) Kidneys", "c) Liver", "d) Lungs"],
    },
    {
      question: "What is the function of red blood cells?",
      options: ["a) Carry oxygen", "b) Fight infection", "c) Clot blood", "d) Provide nutrients"],
    },
  ];

  const handleAnswer = (questionIndex, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex
    });

    // Update the answeredQuestions Set
    setAnsweredQuestions(prev => new Set(prev).add(questionIndex));
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Filter questions based on the filter state
  const filteredQuestions = questions.filter((_, index) => {
    if (filter === 'answered') {
      return answeredQuestions.has(index);
    }
    if (filter === 'unanswered') {
      return !answeredQuestions.has(index);
    }
    return true; // 'all' filter
  });

  return (
    <div className="container mx-auto px-4 my-32">
      <div className="my-12 bg-slate-100 gap-8 rounded-lg flex flex-col justify-around items-center md:flex-row px-12 py-6">
        <div>
          <h1 className='font-bold text-xl'>Unlock Your Full Potential!</h1>
          <p>Upgrade to the premium plan and gain access to more than 500 questions in Anatomy. Test your knowledge with an expanded question bank and ensure you're fully prepared.</p>
        </div>
        <div>
          <button className='bg-gray-300 w-[152px] rounded-lg p-2'>Upgrade Now</button>
        </div>
      </div>

      {/* Left Side: Questions List and Filter */}
      <div className="flex justify-around md:flex-row gap-8">
        <div className="w-full md:w-1/3 bg-gray-100 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4">Questions For Free Plan (50)</h3>
          
          {/* Filters */}
          <div className="flex justify-between mb-4">
            <button className={`text-sm bg-slate-300 p-2 rounded-lg ${filter === 'all' ? 'font-bold' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`text-sm bg-slate-300 p-2 rounded-lg ${filter === 'answered' ? 'font-bold' : ''}`} onClick={() => setFilter('answered')}>Answered</button>
            <button className={`text-sm bg-slate-300 p-2 rounded-lg ${filter === 'unanswered' ? 'font-bold' : ''}`} onClick={() => setFilter('unanswered')}>Unanswered</button>
          </div>

          {/* List of Questions */}
          <div className="space-y-4">
            {filteredQuestions.map((question, index) => (
              <div className="bg-white shadow-md rounded-lg p-4 transition-all flex items-center" key={index}>
                <p className="text-sm text-gray-800 flex-1">{question.question}</p>
                {/* Icon for Answered/Unanswered */}
                {answeredQuestions.has(index) ? (
                  <FaCheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <IoIosCheckmarkCircleOutline className="w-4 h-4 text-gray-500" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Question and Progress Section */}
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className='font-bold text-2xl'>Exam Yourself Here</h1>
          <div className="my-10 w-full flex items-center justify-between">
            <div className="relative w-full h-2 bg-gray-500 rounded-lg">
              <div className="w-[100%] h-full rounded-full bg-blue-500 relative" style={{ width: `${progress}%` }}>
                <div className="absolute text-xs -right-4 bg-blue-600 text-white font-bold px-1.5 min-w-[40px] min-h-[24px] -top-8 rounded flex items-center justify-center">
                  {Math.round(progress)}%
                </div>
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
            <h3 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h3>
            <ul className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index} className="flex py-4 items-center">
                  <input
                    type="radio"
                    name={`q${currentQuestion}`}
                    id={`option${index}`}
                    checked={selectedAnswers[currentQuestion] === index}
                    onChange={() => handleAnswer(currentQuestion, index)}
                  />
                  <label htmlFor={`option${index}`} className="text-sm">{option}</label>
                </li>
              ))}
            </ul>
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex mt-6 gap-6">
            <button onClick={handlePrevQuestion} className="text-lg border-2 border-gray-400 p-1 w-[128px] rounded-xl" disabled={currentQuestion === 0}>
              Prev Question
            </button>
            <button onClick={handleNextQuestion} className="text-lg bg-slate-400 p-2 rounded-xl w-[128px]" disabled={currentQuestion === questions.length - 1}>
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
