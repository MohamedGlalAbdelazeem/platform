'use client';

import { useState } from 'react';

function Page() {
  const [progress, setProgress] = useState(30); // Example progress percentage
  const [currentLesson, setCurrentLesson] = useState(0); // Current lesson index
  const [currentVideo, setCurrentVideo] = useState(0); // Current video index
  const [expandedLesson, setExpandedLesson] = useState(null); // To track which lesson is expanded

  const score = "85%";

  const lessons = [
    {
      title: "Introduction",
      videos: [
        {
          title: "Welcome to the Course",
          videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
      ],
    },
    {
      title: "Lesson One: Cardiovascular System",
      videos: [
        {
          title: "Overview of the Cardiovascular System",
          videoSrc: "https://www.youtube.com/watch?v=3X-V8y3aRHg&ab_channel=ElWadyMusicRecords",
        },
        {
          title: "Heart Anatomy",
          videoSrc: "https://www.youtube.com/watch?v=uF96R_jjn8k&ab_channel=Doctor.EG.",
        },
      ],
    },
    {
      title: "Lesson Two: ECG Interpretation",
      videos: [
        {
          title: "Basics of ECG Interpretation",
          videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
        {
          title: "Advanced ECG Techniques",
          videoSrc: "https://www.youtube.com/watch?v=fhkyOGDbs0Q&ab_channel=%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86%D9%8A%D9%8F%D8%B1%D8%B4%D8%AF%D9%86%D8%A7",
        },
      ],
    },
  ];

  const toggleLesson = (index) => {
    setExpandedLesson(expandedLesson === index ? null : index); // Toggle expand/collapse
  };

  const handleVideoSelect = (lessonIndex, videoIndex) => {
    setCurrentLesson(lessonIndex);
    setCurrentVideo(videoIndex);
  };

  return (
    <div className="container mx-auto mt-52 px-4 my-20">
      {/* Main Course Details */}
      <div className="my-10 w-full flex items-center justify-between">
        <h2 className="text-xl font-bold mb-4">Advanced Cardiology: Diagnosis and Treatment</h2>
        {/* Dynamic Progress */}
        <div className="relative w-[250px] h-2 bg-gray-200 rounded-lg mb-6">
          <div className="w-[100%] h-full rounded-full bg-blue-500 relative" style={{ width: `${progress}%` }}>
            <div className="absolute text-xs -right-4 bg-blue-600 text-white font-bold px-1.5 min-w-[40px] min-h-[24px] -top-8 rounded flex items-center justify-center">
              {Math.round(progress)}%
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex flex-col justify-around md:flex-row gap-8">
        {/* Accordion for Related Lessons */}
        <div className="w-full md:w-1/3 bg-gray-100 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4">Course Lessons</h3>
          <div className="space-y-4">
            {lessons.map((lesson, lessonIndex) => (
              <div className="bg-white shadow-md rounded-lg transition-all" key={lessonIndex}>
                <button
                  type="button"
                  className={`w-full text-sm font-semibold text-left p-6 flex items-center transition-all ${expandedLesson === lessonIndex ? 'text-blue-600' : 'text-gray-800'}`}
                  onClick={() => toggleLesson(lessonIndex)}
                >
                  <span className="mr-4">{lesson.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] fill-current ml-auto shrink-0" viewBox="0 0 42 42">
                    <path
                      d={expandedLesson === lessonIndex ? 'M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z' : 'M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z'}
                      data-original="#000000"
                    />
                  </svg>
                </button>

                {/* Sub-videos inside the expanded lesson */}
                <div className={`overflow-hidden transition-all ${expandedLesson === lessonIndex ? 'max-h-screen' : 'max-h-0'}`}>
                  <div className="pb-6 px-6">
                    {lesson.videos.map((video, videoIndex) => (
                      <p key={videoIndex}
                        className="text-sm text-gray-600 leading-relaxed cursor-pointer hover:text-blue-600"
                        onClick={() => handleVideoSelect(lessonIndex, videoIndex)}>
                        {video.title}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {
          score >= "90%" ? 
        (
        <div className="flex flex-col w-full md:w-1/2 ">
            <h2 className='my-2 font-bold text-2xl'>Congratulations on Completing the Course!</h2>
            <p className='my-2 leading-7'>Well done! You’ve successfully completed the course [Course Name]. Your dedication and effort have paid off, and we’re thrilled to see your progress. Below is your exam score and a link to download your official certificate of completion.</p>
            <span className='my-2'>You scored: 90 %</span>
            <h3 className='font-bold'>download Your Certificate</h3>
          </div>
          ) : 
          (
        <div className="flex flex-col w-full md:w-1/2 ">
          <h2 className='my-2 font-bold text-2xl'>Keep Going!</h2>
          <p className='my-2 leading-7'>You’ve completed the course [Course Name], but don’t worry if you didn’t pass the final exam this time. Every learning journey comes with challenges, and this is just one step toward your success. Review the material and try again when you're ready — we believe in your ability to succeed!</p>
          <span className='my-2'>You scored: 40 %</span>
          <h3 className='font-bold'>Try Again</h3>
        </div>
          )
        }

      </div>
    </div>
  );
}

export default Page;
