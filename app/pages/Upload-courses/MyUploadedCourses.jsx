import { useState  , useEffect} from "react";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import DeleteModel from "./DeleteModel";
import EditModal from "./EditModal";
import { getUser } from "@/app/_utils/LocalStorage";

function MyUploadedCourses() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); 
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);
  const openEditModal = () => {
    setIsEditModalOpen(true);
    setCurrentStep(1); 
  };
  const closeEditModal = () => setIsEditModalOpen(false);
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4)); 
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1)); 
  const baseUrl = 'http://localhost:5000/api/'
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = getUser();
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${baseUrl}Course/Instructor/${user?.id}`);
        const data = await response.json();
        if (data.isSuccess) {
          setCourses(data.data);
          console.log(data)
        } else {
          setError("Failed to load courses");
        }
      } catch (err) {
        setError("An error occurred while fetching the courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-2 sm:p-5 md:p-8 lg:p-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, index) => (
            <div key={index} className="rounded-3xl  overflow-hidden shadow-xl w-[337px]">
              <div className="relative">
                <img
                  className="w-[315px] h-[198px] rounded-b-[36px] rounded-t-[15px]"
                  src={course.thumbnailURL}
                  alt={course.title}
                />
                <div className="w-full h-10 flex justify-center items-center">
                  <div className="flex w-[260px] justify-between items-center rounded-[35px] p-3 border-[8px] border-white absolute bottom-4 bg-secondary text-white text-[12px] duration-500 ease-in-out">
                    <span className="flex items-center gap-2">
                      <p>{course.title}</p>
                      <BsArrowDownRightCircleFill />
                    </span>
                    <span className="flex items-center gap-2">
                      <p>{course.durationInhours} hrs</p>
                      <BsArrowDownRightCircleFill />
                    </span>
                  </div>
                </div>
              </div>
                  <div className="px-6">
                    <div className="flex justify-between font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out">
                      <h2 className="text-[17px] font-normal">{course.title}</h2>
                      <h3 className="text-[17px] text-textColor font-bold">${course.price}</h3>
                    </div>
                    <p className="text-gray-500 my-2 text-sm">{course.preview}</p>
                    <span className="text-sm">Instructor ID: {course.instructorId}</span>
                    <div className="my-3">
                    <div className="px-4 sm:px-6 py-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    className="flex items-center justify-center gap-2 text-[13px] border-2 border-bgFontColor text-bgFontColor p-2 sm:p-3 w-full rounded-xl"
                    onClick={openEditModal}>
                    <TbEdit />
                    Edit
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 text-[13px] border-2 border-red-600 text-red-600 p-2 sm:p-3 w-full rounded-xl"
                    onClick={openDeleteModal}
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
                </div>
              </div>
            </div>
          ))}
        {isDeleteModalOpen && <DeleteModel closeModal={closeDeleteModal} />}
        {isEditModalOpen && (
          <EditModal
            closeModal={closeEditModal}
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
      </div>
    </div>
  );
}

export default MyUploadedCourses;
