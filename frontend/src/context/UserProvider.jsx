import React, { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
// import axiosInstance from "../utils/axiosInstance";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage or backend on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
