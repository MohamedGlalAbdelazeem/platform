import { createContext } from "react";

export const usercontext = createContext(null);


// to  use context use 
// const {user , setUser} = useContext(usercontext);