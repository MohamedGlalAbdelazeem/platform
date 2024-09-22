import { AiFillCarryOut } from "react-icons/ai";

const headerItms = [
  {
    item: "Home",
    link: "/",
  },
  {
    item: "Courses",
    link: "",
    subItems: [
      { item: "All Courses", link: "/pages/All-courses" },
      { item: "Our Courses", link: "/pages/Our-courses" }
    ]
  },
  {
    item: "Exams (Q&A)",
    link: "",
    subItems: [
      { item: "Exams", link: "/pages/ExamsQ&A" },
      { item: "Our Exams", link: "/pages/Our-exams" }
    ]
  },
  {
    item: "Blogs",
    link: "/pages/Blogs",
  },
  {
    item: "Medical Books",
    link: "/pages/Medical-books",
  },
];

const chooseData = [
  {
      icon: <AiFillCarryOut />,
      title: "Expert-Led Courses",
      body: "Learn from industry-leading professionals and academic experts."
  },
  {
      icon: <AiFillCarryOut />,
      title: "Up-to-Date Research",
      body: "Stay ahead with the latest medical studies and reports."
  },
  {
      icon: <AiFillCarryOut />,
      title: "Career Growth",
      body: "Gain skills and certifications to advance your career in the medical field."
  },
  {
      icon: <AiFillCarryOut />,
      title: "Flexible Learning",
      body: "Study at your own pace with access to online materials anytime, anywhere."
  },
];

export { headerItms , chooseData}