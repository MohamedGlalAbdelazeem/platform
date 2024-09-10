'use client';

import { useState } from 'react';

function Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Current question index
  const [filter, setFilter] = useState('all'); // Filter for questions (all, answered, unanswered)
  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Track answered questions

  const questions = [
    {
      question: "What is the main function of the heart?",
      options: ["a) Pump blood", "b) Produce oxygen", "c) Digest food", "d) Support bones"],
      correctAnswer: "a) Pump blood",
    },
    {
      question: "What is the normal range for a healthy heart rate?",
      options: ["a) 20-40 bpm", "b) 60-100 bpm", "c) 120-160 bpm", "d) 180-220 bpm"],
      correctAnswer: "b) 60-100 bpm",
    },
    {
      question: "Which of the following is the longest bone in the body?",
      options: ["a) Femur", "b) Humerus", "c) Tibia", "d) Radius"],
      correctAnswer: "a) Femur",
    },
    {
      question: "Which organ is responsible for filtering blood?",
      options: ["a) Heart", "b) Kidneys", "c) Liver", "d) Lungs"],
      correctAnswer: "b) Kidneys",
    },
    {
      question: "What is the function of red blood cells?",
      options: ["a) Carry oxygen", "b) Fight infection", "c) Clot blood", "d) Provide nutrients"],
      correctAnswer: "a) Carry oxygen",
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const filteredQuestions = questions.filter((_, index) => {
    if (filter === 'answered') {
      return answeredQuestions.includes(index);
    }
    if (filter === 'unanswered') {
      return !answeredQuestions.includes(index);
    }
    return true; // 'all' filter
  });

  return (
    <div className="container mx-auto px-4 my-20">
      <div className="my-6 bg-slate-100 gap-8 rounded-lg flex flex-col justify-around items-center md:flex-row px-12 py-6">
        <div className=''>
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
            <button className={`text-sm bg-slate-300  p-2 rounded-lg ${filter === 'all' ? 'font-bold' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`text-sm bg-slate-300  p-2 rounded-lg ${filter === 'answered' ? 'font-bold' : ''}`} onClick={() => setFilter('answered')}>Answered</button>
            <button className={`text-sm bg-slate-300  p-2 rounded-lg ${filter === 'unanswered' ? 'font-bold' : ''}`} onClick={() => setFilter('unanswered')}>Unanswered</button>
          </div>

          {/* List of Questions */}
          <div className="space-y-4">
            {filteredQuestions.map((question, index) => (
              <div className="bg-white shadow-md rounded-lg p-4 transition-all flex items-center" key={index}>
                <p className="text-sm text-gray-800 flex-1">{question.question}</p>
                {/* Icon for Answered/Unanswered */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-blue-500" viewBox="0 0 24 24">
                  <path
                    d={answeredQuestions.includes(index) ? 'M10 15.172l5.656-5.656 1.414 1.414-7.07 7.07L3.93 12.93l1.414-1.414L10 15.172z' : 'M19 13H5v-2h14v2z'}
                    data-original="#000000"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Question and Progress Section */}
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className='font-bold text-2xl'>Exam Answers :</h1>
        
          {/* Questions */}
          <h3 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h3>
          <ul className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} className="flex py-4 items-center">
                <input
                  type="radio"
                  name={`q${currentQuestion}`}
                  id={`option${index}`}
                />
                <label htmlFor={`option${index}`} className="text-sm">{option}</label>
              </li>
            ))}
          </ul>

          {/* Always display correct answer */}
          <div className="mt-4">
            <h3 className="font-bold">Correct Answer:</h3>
            <p>{questions[currentQuestion].correctAnswer}</p>
          </div>

          {/*Back/ Prev/Next Buttons */}
          <div className="flex items-center justify-between mt-6 gap-6">
            <div className='flex gap-6'>
              <button onClick={handlePrevQuestion} className="text-lg border-2 border-gray-400 p-1 w-[128px] rounded-xl" disabled={currentQuestion === 0}>
                Prev Question
              </button>
              <button onClick={handleNextQuestion} className="text-lg bg-slate-400 p-2 rounded-xl [w-128px]" disabled={currentQuestion === questions.length - 1}>
                Next Question
              </button>
            </div>
            <div>
              <button className='w-[128px] p-2 rounded-lg bg-slate-200 '>Back</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Page;
