import { useState } from "react";
import Box from "./components/Box.tsx";
import Counter from "./components/Counter.tsx";
import Title from "./components/Title.tsx";

function App() {
  const [count, setCount] = useState(0);
  const downCount = () => {
    setCount((count) => count - 1);
  };
  const upCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <Box
        borderWidth="2px"
        borderColor="blue"
        borderStyle="solid"
        padding="4px"
        margin="2px"
      >
        <Title title="React Tutorial" color="red">
          sub title: react basic
        </Title>
        <h1>Count: {count}</h1>
        <Counter upCount={upCount} downCount={downCount}></Counter>
      </Box>
    </>
  );
}

export default App;
