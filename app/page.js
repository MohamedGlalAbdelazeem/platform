import Hero from "./_components/Hero";
import ChooseUs from "./_components/ChooseUs";
import OurCourses from "./_components/OurCourses";
import Quizzes from "./_components/Quizzes";
import Blogs from "./_components/Blogs";
import Books from "./_components/Books";
import ScrollTop from "./_components/ScrollTop";
export default function Home() {
  return (
   <div className="bg-[#F9F9F9]">
     <Hero/>
     <ChooseUs/>
     <OurCourses/>
     <Quizzes/>
     <Blogs/>
     <Books/>
     <ScrollTop/>
   </div> 
  );
}
