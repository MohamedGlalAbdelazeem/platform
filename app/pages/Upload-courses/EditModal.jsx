import CourseContent from "./CourseContent";
import CourseLessons from "./CourseLessons";
import CourseQues from "./CourseQues";

 

function EditModal({ closeModal, currentStep, nextStep, prevStep }) {
  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return <CourseLessons/>;
      case 2:
        return <CourseQues/>;
      case 3:
        return <CourseContent/>;
      case 4:
        return <div>Course Price Content</div>;
      default:
        return null;
    }
  };
  return (
    <div className="fixed inset-0 flex  justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl my-8 shadow-2xl w-[1100px] overflow-y-scroll">
        <h2 className="text-3xl text-bgColor  font-bold mb-4">Edit Your Course </h2>
        {renderContent()}
        <div className="flex justify-between  mt-6">
          <div>
            <button className=" bg-slate-100 p-1 text-lg rounded-lg px-5" onClick={closeModal}>
                Cancel
            </button>
          </div>
        <div className="flex gap-4">
        <button
                className="border-2 border-btnColored text-btnColored p-1 text-lg rounded-lg px-5"
                onClick={prevStep}
                disabled={currentStep === 1}>
                Prev
            </button>
            <button
                className="bg-btnColored text-white p-1 text-lg rounded-lg px-5"
                onClick={nextStep}
                disabled={currentStep === 4} >
                Next
            </button>
       </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
