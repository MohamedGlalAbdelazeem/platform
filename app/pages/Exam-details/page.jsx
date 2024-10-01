'use client';
import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import ProgressBar from "@ramonak/react-progress-bar";
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
  <>
    <div className="h-[80px] bg-btnColored">
    </div>
    <div className="container mx-auto px-4 mb-16">
      <div className="my-12  shadow-lg gap-8 rounded-lg flex flex-col justify-around items-center md:flex-row px-12 py-6">
        <div>
          <h1 className='font-bold text-xl'>Unlock Your Full Potential!</h1>
          <p>Upgrade to the premium plan and gain access to more than 500 questions in Anatomy. Test your knowledge with an expanded question bank and ensure you're fully prepared.</p>
        </div>
        <div>
          <button className='bg-secondary text-white w-[152px] rounded-lg p-2'>Upgrade Now</button>
        </div>
      </div>

      {/* Left Side: Questions List and Filter */}
      <div className="flex justify-around md:flex-row gap-8">
        <div className="w-full md:w-1/3 bg-gray-100 border-[2px] border-fontColor rounded-lg p-4">
          <h3 className="text-xl font-bold my-6">Questions For Free Plan (50)</h3>
          
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
           <div className="relative w-full h-2 bg-gray-200 rounded-lg mb-6">
            <ProgressBar completed={50} />
           </div>
          </div>

         
          {/* Questions */}
          <div className="mt-6 overflow-y-auto max-h-96">
            {questions.map((question, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
                <ul className="space-y-2">
                  {question.options.map((option, optIndex) => (
                    <li key={optIndex} className="flex items-center space-x-2">
                      <input type="radio" name={`q${index}`} id={`option${optIndex}`} />
                      <label htmlFor={`option${optIndex}`} className="text-sm">{option}</label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
           <button className='my-6 bg-btnColored text-white p-2 w-fit rounded-lg'>Finish The Exam</button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
export default Page;
