'use client';
import { GoCheckCircleFill } from "react-icons/go";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import "./styles.css"


function Page() {
  const [currentLesson, setCurrentLesson] = useState(0); // Current lesson index
  const [currentVideo, setCurrentVideo] = useState(0); // Current video index
  const [expandedLesson, setExpandedLesson] = useState(null); // To track which lesson is expanded

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
    {
        title: "Course Exam",
        videos: [
          { 
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
    <>
      <div className="h-[80px] bg-[#1f0c30f4]">
      </div>
      <div className="container mx-auto mt-20  px-4 my-10">
      {/* Main Course Details */}
      <div className="my-10 w-full flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4 text-bgFontColor">Trial Lesson: Introduction for Diagnosis and Treatment</h2>
        {/* Dynamic Progress */}
        <div className="relative w-[250px] h-2 bg-[#F8EDF1] rounded-lg mb-6">
            <ProgressBar completed={80} />
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
                  onClick={() => toggleLesson(lessonIndex)}>
                  <span className="mr-2 text-lg"><GoCheckCircleFill /></span>
                  <span className="mr-4 flex items-center  justify-between w-full">
                    {lesson.title}
                     <FaPlus />
                    </span>
                </button>

                {/* Sub-videos inside the expanded lesson */}
                <div className={`overflow-hidden transition-all ${expandedLesson === lessonIndex ? 'max-h-screen' : 'max-h-0'}`}>
                  <div className="pb-6 px-6">
                    {lesson.videos.map((video, videoIndex) => (
                      <p
                        key={videoIndex}
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

        {/* Main Video on the right */}
        <div className="flex flex-col w-full md:w-1/2 p-4">
          <video controls  controlsList="nodownload"  width="100%" height="auto"  className="rounded-2xl">
            <source
              src={lessons[currentLesson].videos[currentVideo].videoSrc} 
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className='w-full flex justify-end my-6 gap-6'>
            <button className='text-lg border-2 border-bgFontColor text-bgFontColor p-1 w-28 rounded-lg '>Prev</button>
            <button className='text-lg bg-bgFontColor text-white p-1 rounded-lg w-28'>Next</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Page;
