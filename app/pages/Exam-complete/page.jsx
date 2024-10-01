import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function Page() {
  const totalQuestions = 50;
  const correctAnswers = 40;
  const scorePercentage = (correctAnswers / totalQuestions) * 100;
  const circleRadius = 60;
  const circleCircumference = 2 * Math.PI * circleRadius;

  return (
    <>
    <div className="h-[80px] bg-btnColored">
       </div>
       <div className="relative my-12 flex w-full flex-col items-center sm:mt-16">
       
       <h1 className="font-bold text-3xl my-3 text-textColor">Congratulations! You've Completed the Exam</h1>
       <p className="my-5">You've successfully completed the Anatomy exam, answering 50 questions with an impressive score of:</p>
 
       {/* Circular Progress Bar */}
       <div className="relative flex items-center justify-center w-40 h-40">
         <svg className="w-full h-full" viewBox="0 0 150 150">
           <circle
             className="text-gray-300"
             strokeWidth="10"
             stroke="currentColor"
             fill="transparent"
             r={circleRadius}
             cx="75"
             cy="75"
           />
           <circle
             className="text-btnColored"
             strokeWidth="10"
             strokeDasharray={circleCircumference}
             strokeDashoffset={circleCircumference - (scorePercentage / 100) * circleCircumference}
             strokeLinecap="round"
             stroke="currentColor"
             fill="transparent"
             r={circleRadius}
             cx="75"
             cy="75"
             style={{ transition: 'stroke-dashoffset 0.5s ease' }}
           />
         </svg>
         <span className="absolute text-2xl font-bold text-secondary">
           {correctAnswers}/{totalQuestions}
         </span>
       </div>
 
       <span className="mt-5 max-w-2xl text-center text-lg leading-10 text-gray-800">
         Great job on reaching this milestone! <br /> But why stop here? Unlock the full question bank and challenge yourself even <br /> further by upgrading to the premium plan. With access to hundreds more questions, you'll strengthen your knowledge and boost your confidence even more. Keep up the momentum and take your learning to the next level!
       </span>
 
       <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4">
         <a
           href="https://example.com/new-feature"
           className="flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-3 py-2 bg-btnColored"
         >
           View Correct Answers
         </a>
         <a
           href="#demo"
           className="flex flex-row items-center justify-center gap-x-2 rounded-lg border  bg-[#FAEBF1] px-3 py-2 "
         >
           Retake the Exam
         </a>
       </div>
       <div className="mx-auto w-fit my-7 ">
          <Link href={"#"} className="text-textColor font-bold text-lg flex items-center gap-2">
              Upgrade for More Questions
              <FaArrowRightLong />
          </Link>
         </div>
     </div>
    </>
   
  );
}

export default Page;
