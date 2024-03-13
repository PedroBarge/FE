import { useState, useContext } from "react";
import UserContext from "../../context/user";
import { Title, Text } from "./styles";

const Form = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      name,
      lastName,
      email,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" />
      </form>
      <div>
        <Title>Form result</Title>
        <Text>Name: {user.name}</Text>
        <Text>Last Name: {user.lastName}</Text>
        <Text>Email: {user.email}</Text>
      </div>
    </>
  );
};

export default Form;
