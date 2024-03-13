import { useState, useContext } from "react";
import UserContext from "../../context/user";

const EmailForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setUser({
      ...user,
      email,
    });
  };

  return (
    <>
      <h1>Change Email</h1>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Name: {user.name}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
    </>
  );
};

export default EmailForm;
