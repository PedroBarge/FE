import { useState, useContext } from "react";
import UserContext from "../../context/user";

const NameForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    setUser({
      ...user,
      name,
    });
  };

  return (
    <>
      <h1>Change name</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Name: {user.name}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
    </>
  );
};

export default NameForm;
