"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getUser } from "@/app/_utils/LocalStorage";
import axios from "axios";
import { FaPencilAlt } from "react-icons/fa";
export const profilValidation = z.object({
  firstName: z.string().nonempty({ message: "First Name is required" }),
  lastName: z.string().nonempty({ message: "Last Name is required" }),
  phone: z.string().nonempty({ message: "Phone Number is required" }),
  newPassword: z.string().min(6, { message: "New Password must be at least 6 characters long" }),
  confirmNewPassword: z
    .string()
    .min(6, { message: "Confirm New Password must be at least 6 characters long" })
    .refine((value, ctx) => value === ctx?.parent?.newPassword, {
      message: "Passwords do not match",
    }),
});
function Page() {
  const baseUrl = 'http://localhost:5000/api/';
  const user = getUser();
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profilValidation),
  });

  const onSubmit = async (data) => {
    const { firstName, lastName, phone, newPassword, confirmNewPassword, image } = data;

    if (newPassword !== confirmNewPassword) {
      toast.error("New Password and Confirm Password do not match");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("phone", phone);
      formData.append("newPassword", newPassword);

      // Check if a new image was uploaded
      if (image && image[0]) {
        formData.append("image", image[0]);
      }

      const response = await axios.put(`${baseUrl}User/update/${user?.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status !== 200) {
        throw new Error('Failed to update user data');
      }

      toast.success('User updated successfully');
    } catch (error) {
      toast.error('Error updating user');
      console.error('Error updating user:', error);
    }
  };

  // Function to handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Update the image preview
    }
  };

  return (
    <>
      <div className="bg-bgBanner w-full h-20"></div>
      <section className="pt-16 flex flex-col items-center bg-slate-50 ">
        {/* User Info Section */}
        <div className="relative w-full md:w-1/2 flex flex-col md:flex-row items-center text-center">
          {/* Profile Image */}
          <img
            className="inline-flex object-cover border-4 rounded-full h-24 w-24 md:h-32 md:w-32 mb-4 md:mb-0 md:mr-5"
            src={profileImage}
            alt="User Profile"
          />
          {/* Edit Icon */}
          <FaPencilAlt
            className="absolute top-4 cursor-pointer left-[100px] text-white text-[35px] rounded-full bg-fontColor p-2"
            onClick={() => document.getElementById('imageInput').click()} // Trigger file input
          />
          <div className="flex flex-col">
            <p className="font-normal text-3xl">Hesham Hassan</p>
          </div>
          {/* Hidden File Input */}
          <input
            type="file"
            id="imageInput"
            style={{ display: "none" }}
            accept="image/*"
            {...register("image")}
            onChange={handleImageChange}
          />
        </div>

        {/* Personal Information Section */}
        <div className="flex flex-col items-start w-full md:w-[660px] my-11">
          <h2 className="font-bold mb-6 ml-3 text-xl text-bgColor">Personal Information</h2>
          <div className="w-full bg-white p-6 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="firstName" className="block text-base font-medium text-bgColor">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register('firstName')}
                  className="w-full rounded-md border py-3 px-6 text-base text-[#6B7280]"
                />
                {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="block text-base font-medium text-bgColor">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register('lastName')}
                  className="w-full rounded-md border py-3 px-6 text-base text-[#6B7280]"
                />
                {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="block text-base font-medium text-bgColor">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  {...register('phone')}
                  className="w-full rounded-md border py-3 px-6 text-base text-[#6B7280]"
                />
                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
              </div>

              <h2 className="font-bold mb-6 ml-3 text-xl text-bgColor">Change Password</h2>
              <div className="mb-3">
                <label className="block text-base font-medium text-bgColor">New Password</label>
                <input
                  type="password"
                  {...register('newPassword')}
                  className="w-full rounded-md border py-3 px-6 text-base text-[#6B7280]"
                />
                {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}
              </div>

              <div className="mb-3">
                <label className="block text-base font-medium text-bgColor">Confirm New Password</label>
                <input
                  type="password"
                  {...register('confirmNewPassword')}
                  className="w-full rounded-md border py-3 px-6 text-base text-[#6B7280]"
                />
                {errors.confirmNewPassword && <p className="text-red-500">{errors.confirmNewPassword.message}</p>}
              </div>

              <button type="submit" className="w-full md:w-[175px] bg-btnColored py-3 px-8 text-base font-semibold text-white">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
