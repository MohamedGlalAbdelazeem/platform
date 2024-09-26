import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";

function DeleteModel({ closeModal }) {
  // State to manage whether the modal is in the opening/closing animation phase
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the opening transition after rendering
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to stop click event propagation inside modal
  const stopPropagation = (e) => e.stopPropagation();

  // Function to close modal with transition
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      closeModal();
    }, 300); // Ensure the timeout matches the transition duration
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-[1000] overflow-auto bg-[rgba(0,0,0,0.5)]"
      onClick={handleClose} // Close modal when clicking on the overlay
    >
      <div
        className={`w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative transition-transform duration-500 ease-in-out transform ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={stopPropagation} // Prevent closing when clicking inside the modal
      >
        <div className="my-4 text-center">
          <RiDeleteBin6Line className="w-full mx-auto text-[55px] fill-red-500" />
          <h4 className="text-textColor text-xl font-bold mt-4">
            Need to Delete Your Course?
          </h4>
          <p className="my-6 font-normal">
            If you wish to permanently delete your course, please contact us at
          </p>
          <span className="w-full my-6">
            <h1 className="mx-auto w-fit p-2 text-xl rounded-lg text-fontColor font-bold bg-[#FFF4F8]">
              00201015800248
            </h1>
          </span>
          <div className="text-center font-normal mt-8 leading-6">
            <p>
              Once the course is deleted, it will be removed from the platform
              for all users, including those currently enrolled. All enrolled
              users will receive a full refund. Please reach out to proceed with
              this action.
            </p>
          </div>
          <div className="my-7">
            <a
              href="http://"
              target="_blank"
              className="font-bold text-lg bg-[#984D9F] text-white px-12 py-2 rounded-3xl"
            >
              Got it
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModel;
