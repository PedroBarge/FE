import { createContext, useState } from "react";

const DEFAULT_VALUE = {
  user: {
    name: "",
    lastName: "",
    email: "",
  },
  setUser: () => {},
};

const UserContext = createContext(DEFAULT_VALUE);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(DEFAULT_VALUE.user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
