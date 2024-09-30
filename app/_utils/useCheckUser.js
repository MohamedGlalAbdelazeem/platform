import { useState } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "./LocalStorage";

const useCheckUser = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  const checkUser = (redirectPath = "/pages/Payment-methods") => {
    const token = getToken();
    if (token) {
      router.push(redirectPath);
    } else {
      setIsModalVisible(true);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return {
    checkUser,
    isModalVisible, 
    closeModal, 
  };
};

export default useCheckUser;
