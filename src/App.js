import styled from "styled-components";
import HomePage from "./components/homePage/HomePage";
import Navigation from "./components/navigation/Navigation";

const App = () => {
  return (
    <Wrapper>
      <Navigation />
      <HomePage />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100%;
`;
