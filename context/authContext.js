import { useState, createContext } from "react";
export const AuthContext = createContext();

export const generateId = () => (Math.random() + 1).toString(36).substring(7);


const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  const login = (values) => {
    setLoggedIn(true);
    setUserDetails({
      ...values,
    });
  };


  const register = (values) => {
    setLoggedIn(true);
    const data = { ...values, id: generateId() };
    setUserDetails(data);
  };

  const logout = () => {
    setLoggedIn(false);
    setUserDetails([]);
  };

  const contextValue = {
    status: {
      loggedIn,
      login,
      logout,
      register,
    },
    user: {
      userDetails,
      setUserDetails,
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
