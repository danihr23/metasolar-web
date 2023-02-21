import styled from "styled-components";
import HomePage from "./components/homePage/HomePage";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Wrapper>
      <Navigation />
      <Routes>
      <Route  path="/" element={<HomePage />} />
      </Routes>
    </Wrapper>
    </Router>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100%;
`;
