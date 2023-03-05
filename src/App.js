import styled from "styled-components";
import HomePage from "./components/homePage/HomePage";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Gallery from "./components/gallery/Gallery";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Navigation logoleft={"43px"} isWallet={true} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100%;
`;
