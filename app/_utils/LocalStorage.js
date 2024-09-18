export const addUser = (token) => {
  localStorage.setItem("access_token", token);
};

export const removeUser = () => {
  localStorage.removeItem("access_token");
};

export const getUser = () => {
  const token = localStorage.getItem("access_token");
  return token;
};
