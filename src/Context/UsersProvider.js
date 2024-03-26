import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  const userDataInLocalStorage = () => {
    const userInfo = JSON.parse(localStorage.getItem("imdb-userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  };

  useEffect(() => userDataInLocalStorage(), []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserState = () => {
  return useContext(UserContext);
};
