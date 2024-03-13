const Numbers = () => {
  const numbers = [];

  for (let i = 0; i < 10; i++) {
    numbers.push(<button key={i}>{i}</button>);
  }
  return <div>{numbers}</div>;
};

export default Numbers;