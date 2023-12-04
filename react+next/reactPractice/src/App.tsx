import Box from "./components/Box.tsx";
import Title from "./components/Title.tsx";

function App() {
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
      </Box>
    </>
  );
}

export default App;
