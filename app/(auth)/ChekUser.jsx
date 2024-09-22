import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from 'react';

function useCheckUser({
  alertTitle = 'Please Log In or Sign Up to Upload Courses',
  alertText = 'You need to be logged in to upload your courses. If you don’t have an account yet, creating one is quick and easy!',
  confirmButtonText = 'Log In',
  cancelButtonText = 'Sign Up',
  redirectToUpload = '/pages/Upload-courses'
} = {}) {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  const handleClicked = () => {
    if (!token) {
      Swal.fire({
        title: alertTitle,
        text: alertText,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText,
        cancelButtonText,
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/sign-in');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          router.push('/sign-up');
        }
      });
    } else {
      router.push(redirectToUpload);
    }
  };

  return handleClicked;  // Return the function
}

export default useCheckUser;
