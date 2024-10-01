'use client';
import { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
function Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [filter, setFilter] = useState('all'); 
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set()); 
  const [selectedAnswers, setSelectedAnswers] = useState({}); 
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
  return (
  <>
    <div className="h-[80px] bg-bgBanner">
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
