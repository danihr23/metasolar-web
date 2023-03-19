import styled from "styled-components";
import HomePage from "./components/homePage/HomePage";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Navigation logoleft={"43px"} isWallet={true} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100%;
`;
