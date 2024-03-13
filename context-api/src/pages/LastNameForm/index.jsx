import { useState, useContext } from "react";
import UserContext from "../../context/user";

const LastNameForm = () => {
  const {user, setUser} = useContext(UserContext);
  const [lastName, setLastName] = useState(user.lastName);

  const handleSubmit = () => {
    setUser({
      ...user,
      lastName,
    });
  };

  return (
    <>
      <h1>Change last name</h1>
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Name: {user.name}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
    </>
  );
};

export default LastNameForm;
